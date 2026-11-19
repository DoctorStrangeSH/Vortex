import test from 'node:test';
import assert from 'node:assert/strict';

test('theme presets update gradients and reset removes applied overrides', async () => {
    const saved = new Map();
    const styles = new Map();
    const previousStorage = globalThis.localStorage;
    const previousDocument = globalThis.document;
    globalThis.localStorage = {
        getItem: key => saved.get(key) ?? null,
        setItem: (key, value) => saved.set(key, value),
        removeItem: key => saved.delete(key)
    };
    globalThis.document = { documentElement: {
        setAttribute() {},
        style: {
            setProperty: (key, value) => styles.set(key, value),
            removeProperty: key => styles.delete(key)
        }
    } };
    try {
        const { themeService } = await import('../src/services/themeService.js');
        themeService.applyPreset('forest');
        assert.equal(styles.get('--vortex-primary'), '#10B981');
        assert.equal(themeService.getActivePreset(), 'forest');
        assert.match(styles.get('--gradient-brand'), /#10B981.*#34D399/);
        themeService.setTheme('light');
        assert.equal(themeService.get(), 'light');
        themeService.setTheme('unexpected');
        assert.equal(themeService.get(), 'light');
        themeService.resetCustomColors();
        assert.equal(styles.size, 0);
        assert.equal(saved.has('vortex-custom-colors'), false);
        assert.equal(themeService.getActivePreset(), null);
        themeService.setCustomColor('--other-property', 'red');
        assert.equal(styles.size, 0);
    } finally {
        globalThis.localStorage = previousStorage;
        globalThis.document = previousDocument;
    }
});
