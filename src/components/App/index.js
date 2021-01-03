import { h, Fragment } from 'preact';
import Profile from 'Components/Profile';
import Main from 'Components/Main';

export default ({ profile, ...main }) => (
    <div>
        <Profile {...profile} />
        <Main {...main} />
    </div>
);
