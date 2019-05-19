import { h, Component } from 'preact';
import Tabs from './tabs';
import mapper from '../Sections';

export default class Main extends Component {
    /**
     * @param {Object} props
     * @constructor
     */
    constructor (props) {
        super();

        this.state = {
            section: 'me',
        };
    }

    /**
     * @param {string} section
     * @returns {void}
     */
    propToRender = (section) => {
        this.setState({ section });
    }

    /**
     * @param {Object} props
     * @param {Object} state
     * @returns {JSX}
     */
    render ({ ...otherProps }, { section }) {
        const ComponentToRender = mapper[section];
        return (
            <main>
                <Tabs cbx={this.propToRender} />
                <ComponentToRender />
            </main>
        );
    }
}
