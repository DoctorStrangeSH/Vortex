import test from 'node:test';
import assert from 'node:assert/strict';
import { groupChatMessages } from '../src/services/chatGrouping.js';
import { buildVirtualChatRows } from '../src/services/virtualChatRows.js';

function message(id, iso) {
    return { id, createdAt: { toDate: () => new Date(iso) } };
}

test('virtual rows keep date separators and unread marker with stable message identity', () => {
    const a = message('a', '2026-11-14T10:00:00Z');
    const b = message('b', '2026-11-15T10:00:00Z');
    const rows = buildVirtualChatRows(groupChatMessages([a, b]), 'b');
    assert.deepEqual(rows.map(row => row.type), ['date', 'message', 'date', 'message']);
    assert.equal(rows[1].data, a);
    assert.equal(rows[3].data, b);
    assert.equal(rows[3].unreadDivider, true);
    assert.equal(rows[1].unreadDivider, false);
    assert.equal(new Set(rows.map(row => row.id)).size, rows.length);
});

test('prepending history preserves existing date keys and message keys', () => {
    const older = message('older', '2026-11-13T12:00:00Z');
    const a = message('a', '2026-11-14T10:00:00Z');
    const b = message('b', '2026-11-15T10:00:00Z');
    const before = buildVirtualChatRows(groupChatMessages([a, b]));
    const after = buildVirtualChatRows(groupChatMessages([older, a, b]));
    for (const row of before) assert.ok(after.some(next => next.id === row.id && next.type === row.type));
});

test('empty and undated histories remain valid rows', () => {
    assert.deepEqual(buildVirtualChatRows([]), []);
    const row = buildVirtualChatRows(groupChatMessages([{ id: 'pending' }]), 'pending');
    assert.deepEqual(row.map(item => item.id), ['date::0', 'pending']);
    assert.equal(row[1].unreadDivider, true);
});
