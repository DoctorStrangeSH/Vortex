import test from 'node:test';
import assert from 'node:assert/strict';
import { trapDialogTab } from '../src/utils/dialogFocus.js';

function createDialog({ focusable = [], active = null } = {}) {
    const state = { focused: null, prevented: false };
    const elements = focusable.map((name, index) => ({
        name,
        getAttribute: key => key === 'aria-hidden' ? null : null,
        focus() { state.focused = name; }
    }));
    const documentState = { activeElement: active };
    const dialog = {
        ownerDocument: documentState,
        querySelectorAll: () => elements,
        contains: element => element === dialog || elements.includes(element),
        focus() { state.focused = 'dialog'; }
    };
    return { dialog, elements, state, documentState };
}

function keyEvent({ shiftKey = false } = {}) {
    const state = { prevented: false };
    return {
        state,
        event: {
            key: 'Tab',
            shiftKey,
            preventDefault() { state.prevented = true; }
        }
    };
}

test('Shift+Tab wraps from first to last focusable control', () => {
    const { dialog, elements, state, documentState } = createDialog({ focusable: ['close', 'invite'] });
    documentState.activeElement = elements[0];
    const { event, state: eventState } = keyEvent({ shiftKey: true });
    trapDialogTab(event, dialog);
    assert.equal(eventState.prevented, true);
    assert.equal(state.focused, 'invite');
});

test('Tab wraps from last to first focusable control', () => {
    const { dialog, elements, state, documentState } = createDialog({ focusable: ['close', 'invite'] });
    documentState.activeElement = elements[1];
    const { event, state: eventState } = keyEvent();
    trapDialogTab(event, dialog);
    assert.equal(eventState.prevented, true);
    assert.equal(state.focused, 'close');
});

test('Tab returns focus to the dialog when focusable controls are absent', () => {
    const { dialog, state } = createDialog();
    const { event, state: eventState } = keyEvent();
    trapDialogTab(event, dialog);
    assert.equal(eventState.prevented, true);
    assert.equal(state.focused, 'dialog');
});

test('non-Tab keys are not intercepted', () => {
    const { dialog, state } = createDialog({ focusable: ['close'] });
    const event = { key: 'Escape', preventDefault() { state.prevented = true; } };
    assert.equal(trapDialogTab(event, dialog), false);
    assert.equal(state.prevented, false);
});

test('Tab returns focus to the first control when focus escaped the dialog', () => {
    const { dialog, state, documentState } = createDialog({ focusable: ['close', 'next'] });
    documentState.activeElement = { name: 'outside' };
    const { event, state: eventState } = keyEvent();
    trapDialogTab(event, dialog);
    assert.equal(eventState.prevented, true);
    assert.equal(state.focused, 'close');
});

test('Shift+Tab returns focus to the last control when focus escaped the dialog', () => {
    const { dialog, state, documentState } = createDialog({ focusable: ['close', 'next'] });
    documentState.activeElement = { name: 'outside' };
    const { event, state: eventState } = keyEvent({ shiftKey: true });
    trapDialogTab(event, dialog);
    assert.equal(eventState.prevented, true);
    assert.equal(state.focused, 'next');
});
