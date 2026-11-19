import { test } from 'node:test';
import assert from 'node:assert/strict';
import { VoiceService } from '../src/services/voiceService.js';

test('microphone access arriving after cancellation stops its tracks without recording', async () => {
    const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
    let resolveMicrophone;
    let stopped = 0;
    Object.defineProperty(globalThis, 'navigator', {
        configurable: true,
        value: { mediaDevices: { getUserMedia: () => new Promise(resolve => { resolveMicrophone = resolve; }) } }
    });
    try {
        const voice = new VoiceService();
        const pending = voice.startRecording();
        voice.cancelRecording();
        resolveMicrophone({ getTracks: () => [{ stop: () => { stopped++; } }] });
        assert.deepEqual(await pending, { error: 'cancelled' });
        assert.equal(stopped, 1);
        assert.equal(voice.isRecording, false);
        assert.equal(voice.stream, null);
    } finally {
        if (navigatorDescriptor) Object.defineProperty(globalThis, 'navigator', navigatorDescriptor);
        else delete globalThis.navigator;
    }
});
