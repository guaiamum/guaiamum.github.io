import { h } from 'preact';
import Profile from '../profile';
import Main from '../main';

export default ({ profile, main }) => (
    <div class="row" id="only">
        <Profile classes="col s12 l3" {...profile} />
        <Main />
    </div>
);
