import { render } from 'preact';
import { App } from './components/App';
import { lazyLoadService } from './services/lazyLoadService';
import './styles/global.css';
import './styles/themes.css';

// Предзагрузка критических ресурсов
lazyLoadService.preloadCritical();

// Регистрируем Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
            (reg) => console.log('✅ SW:', reg.scope),
            (err) => console.log('❌ SW:', err)
        );
    });
}

render(<App />, document.getElementById('app'));