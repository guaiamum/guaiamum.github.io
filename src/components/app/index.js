import { h, Fragment } from 'preact';
import Profile from '../profile';
import Main from '../main';

export default ({ profile, main }) => (
    <Fragment>
        <Profile {...profile} />
        <Main />
    </Fragment>
);
