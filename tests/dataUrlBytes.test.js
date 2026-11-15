import test from 'node:test';
import assert from 'node:assert/strict';
import { dataUrlByteLength } from '../src/services/dataUrlBytes.js';

test('counts base64 audio bytes including padding', () => {
    assert.equal(dataUrlByteLength('data:audio/webm;base64,YQ=='), 1);
    assert.equal(dataUrlByteLength('data:audio/webm;base64,YWI='), 2);
    assert.equal(dataUrlByteLength('data:audio/webm;base64,YWJj'), 3);
});
test('rejects malformed and empty audio payloads', () => {
    for (const value of [null, '', 'https://example.com/audio', 'data:audio/webm;base64,', 'data:audio/webm;base64,x']) {
        assert.throws(() => dataUrlByteLength(value));
    }
});
