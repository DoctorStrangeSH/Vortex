// The previous implementation displayed and stored the verification code in
// the user's browser. That never protected a Firebase Authentication session.
// Until MFA is actually configured at the identity provider, fail closed.
const unavailable = () => {
    throw new Error('Двухфакторная аутентификация пока недоступна. Нужна настройка Firebase Authentication MFA.');
};

class TwoFactorService {
    generateSecret() { return unavailable(); }
    async enable2FA() { return unavailable(); }
    async disable2FA() { return unavailable(); }
    async verifyCode() { return unavailable(); }
    async sendCode() { return unavailable(); }
    isEnabled() { return false; }
}

export const twoFactorService = new TwoFactorService();
