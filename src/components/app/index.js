import { h, Fragment } from 'preact';
import Profile from '../Profile';
import Main from '../Main';

export default ({ profile, main }) => (
    <Fragment>
        <Profile {...profile} />
        <Main />
    </Fragment>
);
