import { render } from 'preact';
import { App } from './components/App';
import './styles/global.css';
import './styles/themes.css';

render(<App />, document.getElementById('app'));