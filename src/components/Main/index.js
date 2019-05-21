import { h, Component } from 'preact';
import sections from 'Components/Sections';
import Tabs from './tabs';

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
        const ComponentToRender = sections[section];
        return (
            <main>
                <Tabs cbx={this.propToRender} />
                <ComponentToRender />
            </main>
        );
    }
}
