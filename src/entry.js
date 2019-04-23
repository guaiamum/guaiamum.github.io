import { h, render } from 'preact';
import App from './components/app';
import mock from '../tests/mock';
import './assets/favicon.ico';

render(<App {...mock} />, document.getElementById('root'));
