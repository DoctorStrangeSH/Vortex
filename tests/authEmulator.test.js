import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { initializeApp, deleteApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
    connectAuthEmulator,
    getAuth
} from 'firebase/auth';

const app = initializeApp({
    apiKey: 'demo-api-key',
    authDomain: 'demo-vortex.firebaseapp.com',
    projectId: 'demo-vortex',
    appId: 'demo-vortex-auth-tests'
}, 'auth-emulator-integration');
const auth = getAuth(app);
const available = !!process.env.FIREBASE_AUTH_EMULATOR_HOST;
connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });

after(async () => {
    await signOut(auth).catch(() => {});
    await deleteApp(app);
});

test('two independent users can register, sign in, and sign out through Auth Emulator', { skip: !available }, async () => {
    const suffix = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const aliceEmail = `alice-${suffix}@example.test`;
    const bobEmail = `bob-${suffix}@example.test`;
    const password = 'Vortex-test-password-123!';

    const alice = await createUserWithEmailAndPassword(auth, aliceEmail, password);
    assert.ok(alice.user.uid);
    await signOut(auth);

    const bob = await createUserWithEmailAndPassword(auth, bobEmail, password);
    assert.ok(bob.user.uid);
    assert.notEqual(alice.user.uid, bob.user.uid);
    await signOut(auth);

    const aliceLogin = await signInWithEmailAndPassword(auth, aliceEmail, password);
    assert.equal(aliceLogin.user.uid, alice.user.uid);
    await signOut(auth);

    const bobLogin = await signInWithEmailAndPassword(auth, bobEmail, password);
    assert.equal(bobLogin.user.uid, bob.user.uid);
    await signOut(auth);
});

test('password recovery request is accepted by Auth Emulator', { skip: !available }, async () => {
    const email = `reset-${Date.now()}@example.test`;
    const credential = await createUserWithEmailAndPassword(auth, email, 'Vortex-test-password-123!');
    await signOut(auth);
    await assert.doesNotReject(sendPasswordResetEmail(auth, email));
    assert.ok(credential.user.uid);
});
