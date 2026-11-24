import { render } from 'preact';
import { App } from '../../src/components/App.jsx';
import { authService } from '../../src/services/authService.js';
import { userService } from '../../src/services/userService.js';
import '../../src/styles/global.css';
import '../../src/styles/themes.css';

// Capture the first-stage registration failure before App switches to the
// recoverable pending-profile screen and unmounts the original AuthScreen.
const diagnostics = { registrationErrors: [], profileWrites: [] };
window.__vortexTestDiagnostics = diagnostics;

const originalRegister = authService.register.bind(authService);
authService.register = async (...args) => {
    try {
        return await originalRegister(...args);
    } catch (error) {
        diagnostics.registrationErrors.push({
            code: error?.code || null,
            name: error?.name || null,
            message: error?.message || String(error)
        });
        throw error;
    }
};

const originalCreateUser = userService.createUser.bind(userService);
userService.createUser = async (...args) => {
    try {
        const result = await originalCreateUser(...args);
        diagnostics.profileWrites.push({ uid: args[0]?.uid || null, status: 'saved' });
        return result;
    } catch (error) {
        diagnostics.profileWrites.push({
            uid: args[0]?.uid || null,
            status: 'failed',
            code: error?.code || null,
            name: error?.name || null,
            message: error?.message || String(error)
        });
        throw error;
    }
};

document.documentElement.setAttribute('data-theme', 'dark');
render(<App />, document.getElementById('app'));
