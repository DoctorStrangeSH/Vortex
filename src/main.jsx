import { render } from 'preact';
import { App } from './components/App';
import './styles/global.css';
import './styles/themes.css';

// Service Worker пока не поставляется с приложением. Не регистрируем
// отсутствующий /sw.js: на GitHub Pages он возвращает 404.

render(<App />, document.getElementById('app'));
