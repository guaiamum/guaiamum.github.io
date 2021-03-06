import { h } from 'preact';
import classNames from 'classnames';
import Icon from 'Components/Icon';

const tabsDefault = [
    { key: 'me', active: true },
    { key: 'skills' },
    { key: 'experience' },
    { key: 'education' },
    { key: 'more', content: <Icon name="more" /> },
];

let active = 'me';

/**
 * @todo: change to radio-button approach
 * @param {Object} props
 * @returns {JSX}
 */
export default ({ tabs = tabsDefault, cbx }) => (
    <nav class="tabs">
        {
            tabs.map(({ key, content }, idx) => (
                <button
                    type="button"
                    class={classNames('tab', { _act: active === key })}
                    onClick={() => { active = key; cbx(key); }}
                    tabIndex="0"
                >
                    { content || key }
                </button>
            ))
        }
    </nav>
);
