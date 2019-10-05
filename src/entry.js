import { h, render } from 'preact';
import App from 'Components/App';
import mock from '../tests/mock';

render(<App {...mock} />, document.getElementById('root'));
