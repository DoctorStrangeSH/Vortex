import { render } from 'preact';
import { AuthScreen } from '../../src/components/Auth/AuthScreen.jsx';
import '../../src/styles/global.css';
import '../../src/styles/themes.css';

document.documentElement.setAttribute('data-theme', 'dark');
render(<AuthScreen />, document.getElementById('app'));
