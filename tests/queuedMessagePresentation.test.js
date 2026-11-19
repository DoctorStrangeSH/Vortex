import test from 'node:test';
import assert from 'node:assert/strict';
import { queuedMessagePresentation } from '../src/services/queuedMessagePresentation.js';

test('queued messages distinguish waiting, sending and failed states', () => {
    assert.equal(queuedMessagePresentation({}, true).label, 'Ожидает отправки');
    assert.equal(queuedMessagePresentation({}, false).label, 'Нет подключения');
    assert.equal(queuedMessagePresentation({ status: 'sending' }, true).label, 'Отправляется');
    assert.equal(queuedMessagePresentation({ status: 'sending' }, false).label, 'Нет подключения');
    assert.equal(queuedMessagePresentation({ status: 'failed' }, true).label, 'Не отправлено');
    assert.equal(queuedMessagePresentation({ status: 'failed' }, false).label, 'Не отправлено');
});
