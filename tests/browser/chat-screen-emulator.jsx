import { render } from 'preact';
import { App } from '../../src/components/App.jsx';
import '../../src/styles/global.css';
import '../../src/styles/themes.css';

document.documentElement.setAttribute('data-theme', 'dark');
render(<App />, document.getElementById('app'));
