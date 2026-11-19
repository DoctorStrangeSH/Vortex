import test from 'node:test';
import assert from 'node:assert/strict';
import { SoundService } from '../src/services/soundService.js';

function fakeAudio() {
    const played = [];
    let created = 0;
    let resumed = 0;
    const makeContext = () => {
        created++;
        return {
            state: 'running', currentTime: 0, destination: {},
            createOscillator: () => ({ frequency: { value: 0 }, connect: () => {}, start: () => { played.push('start'); }, stop: () => {} }),
            createGain: () => ({ gain: { value: 0, exponentialRampToValueAtTime: () => {} }, connect: () => {} }),
            resume: async () => { resumed++; }
        };
    };
    const service = new SoundService({ storage: null, createAudioContext: makeContext, schedule: fn => fn() });
    return { service, played, createdCount: () => created, resumedCount: () => resumed };
}

test('many notifications reuse one audio context', async () => {
    const { service, played, createdCount } = fakeAudio();
    await service.playMessageSound();
    await service.playMessageSound();
    assert.equal(createdCount(), 1);
    assert.equal(played.length, 2);
});

test('muted and silent notifications do not allocate audio contexts', async () => {
    const { service, createdCount } = fakeAudio();
    service.setSound('silent');
    await service.playMessageSound();
    service.toggle();
    service.setSound('default');
    await service.playMessageSound();
    assert.equal(createdCount(), 0);
});

test('suspended context is resumed and re-used', async () => {
    let resumes = 0;
    let creates = 0;
    const context = {
        state: 'suspended', currentTime: 0, destination: {},
        resume: async () => { resumes++; context.state = 'running'; },
        createOscillator: () => ({ frequency: {}, connect() {}, start() {}, stop() {} }),
        createGain: () => ({ gain: { exponentialRampToValueAtTime() {} }, connect() {} })
    };
    const service = new SoundService({ storage: null, createAudioContext: () => { creates++; return context; } });
    await service.playMessageSound();
    await service.playMessageSound();
    assert.equal(creates, 1);
    assert.equal(resumes, 1);
});

test('invalid stored volume falls back to a usable value', () => {
    const service = new SoundService({ storage: { getItem: key => key === 'vortex-sound-volume' ? 'NaN' : null, setItem: () => {} } });
    assert.equal(service.volume, 0.5);
    service.setVolume(42);
    assert.equal(service.volume, 1);
});
