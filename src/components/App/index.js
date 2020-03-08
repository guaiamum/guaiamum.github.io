import { h, Component, Fragment } from 'preact';
import Profile from 'Components/Profile';
import Main from 'Components/Main';
import Loading from 'Components/Loading';

// const url = 'https://guaiamum-api.firebaseapp.com';
// const url = 'http://localhost:5000/guaiamum-api/us-central1/app';

export default class App extends Component {
    /**
     * @constructor
     */
    constructor () {
        super();
        this.state = {
            loaded: false,
            data: {},
        };
    }

    /**
     * @returns {void}
     */
    componentDidMount () {
        // fetch(url).then((r) => r.json()).then((data) => { this.setState({ loaded: true, data }); });
    }

    /**
     * @param {Object} props
     * @param {Object} state
     * @returns {JSX}
     */
    render (props, { loaded, data: { profile, ...main } }) {
        return (
            loaded
                ? <Fragment>
                    <Profile {...profile} />
                    <Main {...main} />
                </Fragment>
                : <Loading />
        );
    }
}
