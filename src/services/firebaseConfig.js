const ENV_KEYS = {
    apiKey: 'VITE_FIREBASE_API_KEY',
    authDomain: 'VITE_FIREBASE_AUTH_DOMAIN',
    projectId: 'VITE_FIREBASE_PROJECT_ID',
    storageBucket: 'VITE_FIREBASE_STORAGE_BUCKET',
    messagingSenderId: 'VITE_FIREBASE_MESSAGING_SENDER_ID',
    appId: 'VITE_FIREBASE_APP_ID'
};

export function resolveFirebaseConfig(env, productionConfig) {
    const stage = env.MODE === 'staging' || env.VITE_APP_ENV === 'staging';
    const configured = Object.entries(ENV_KEYS).filter(([, key]) => !!env[key]);
    if ((stage || configured.length > 0) && configured.length !== Object.keys(ENV_KEYS).length) {
        throw new Error('Для Firebase staging необходимо заполнить все VITE_FIREBASE_* параметры');
    }
    if (!stage && configured.length > 0) {
        throw new Error('Переопределение Firebase разрешено только при VITE_APP_ENV=staging');
    }
    if (!stage) return productionConfig;
    const selected = Object.fromEntries(Object.entries(ENV_KEYS).map(([field, key]) => [field, env[key]]));
    if (selected.projectId === productionConfig.projectId ||
        selected.storageBucket === productionConfig.storageBucket ||
        selected.authDomain === productionConfig.authDomain) {
        throw new Error('Staging не должен использовать ресурсы production Firebase');
    }
    return selected;
}
