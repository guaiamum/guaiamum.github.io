import { h, Fragment } from 'preact';
import Profile from 'Components/Profile';
import Main from 'Components/Main';

export default ({ profile, ...main }) => (
    <Fragment>
        <Profile {...profile} />
        <Main {...main} />
    </Fragment>
);
