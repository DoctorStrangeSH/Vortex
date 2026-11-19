import { render } from 'preact';
import { App } from './components/App';
import { lazyLoadService } from './services/lazyLoadService';
import './styles/global.css';
import './styles/themes.css';

// Предзагрузка критических ресурсов
lazyLoadService.preloadCritical();

// Service Worker пока не поставляется с приложением. Не регистрируем
// отсутствующий /sw.js: на GitHub Pages он возвращает 404.

render(<App />, document.getElementById('app'));
