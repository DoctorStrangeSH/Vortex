import test from 'node:test';
import assert from 'node:assert/strict';
import { parseParticipantNames, resolveGroupParticipants } from '../src/services/groupParticipantSelection.js';

test('trims, normalizes and deduplicates usernames', () => {
    assert.deepEqual(parseParticipantNames(' @Anna, @max, @ANNA, , @max '), ['@anna','@max']);
});

test('does not silently create a group with unresolved or self participants', async () => {
    const users = { '@anna': { uid: 'a' }, '@self': { uid: 'me' } };
    const result = await resolveGroupParticipants('@anna, @missing, @self', 'me', name => users[name] || null);
    assert.deepEqual(result.ids, ['a']);
    assert.deepEqual(result.missing, ['@missing','@self']);
    assert.match(result.reason, /Не удалось добавить/);
});

test('deduplicates different aliases resolving to the same user', async () => {
    const result = await resolveGroupParticipants('@anna, anna', 'me', async () => ({ uid:'a' }));
    assert.deepEqual(result.ids, ['a']);
    assert.deepEqual(result.missing, []);
    assert.equal(result.reason, '');
});

test('handles lookup errors without partial success', async () => {
    const result = await resolveGroupParticipants('@okay, @offline', 'me', name => {
        if (name === '@offline') throw new Error('network');
        return { uid: 'a' };
    });
    assert.deepEqual(result.missing, ['@offline']);
});

test('rejects empty list', async () => {
    const result = await resolveGroupParticipants('  , ', 'me', async () => ({uid:'a'}));
    assert.equal(result.reason, 'Добавьте участников');
});
