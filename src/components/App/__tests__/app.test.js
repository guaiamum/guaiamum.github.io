import { h } from 'preact';
import { shallow } from 'enzyme';

import App from '../index';

jest.mock('Components/Profile', () => (<h1>Profile</h1>));
jest.mock('Components/Main', () => (<h2>Main</h2>));

describe('App', () => {
    it('renders Profile and Main', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
