import test from 'node:test';
import assert from 'node:assert/strict';
import { createFrameScheduler } from '../src/services/frameScheduler.js';

test('rapid read checks are coalesced into one animation frame', () => {
    const tasks = new Map();
    let nextId = 0;
    let calls = 0;
    const scheduler = createFrameScheduler(() => { calls += 1; }, task => { const id = ++nextId; tasks.set(id, task); return id; }, id => tasks.delete(id));
    scheduler.schedule();
    scheduler.schedule();
    scheduler.schedule();
    assert.equal(tasks.size, 1);
    const [id, task] = [...tasks][0];
    tasks.delete(id);
    task();
    assert.equal(calls, 1);
    scheduler.schedule();
    assert.equal(tasks.size, 1);
});

test('a pending read check is cancelled when changing conversations', () => {
    const tasks = new Map();
    const scheduler = createFrameScheduler(() => assert.fail('cancelled check ran'), task => { tasks.set(1, task); return 1; }, id => tasks.delete(id));
    scheduler.schedule();
    scheduler.cancel();
    assert.equal(tasks.size, 0);
});
