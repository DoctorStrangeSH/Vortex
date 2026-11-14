import test from 'node:test';
import assert from 'node:assert/strict';
import { twoFactorService } from '../src/services/twoFactorService.js';

test('placeholder MFA cannot be enabled or verified', async () => {
    await assert.rejects(twoFactorService.enable2FA('someone', 'secret'), /недоступна/);
    await assert.rejects(twoFactorService.verifyCode('someone', '123456'), /недоступна/);
    assert.equal(twoFactorService.isEnabled('someone'), false);
});
