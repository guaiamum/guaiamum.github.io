import { h } from 'preact';

const tabsDefault = [
    { key: 'me', active: true },
    { key: 'skills' },
    { key: 'experience' },
    { key: 'education' },
    { key: 'more', content: <i class="material-icons">more_horiz</i> },
];

let active = 'me';

/**
 * @param {Object} props
 * @returns {JSX}
 */
export default ({ tabs = tabsDefault, cbx }) => (
    <div class="tabs">
        {
            tabs.map(({ key, content }, idx) => (
                <button
                    type="button"
                    class={`tab${active === key ? ' _act' : ''}`}
                    onClick={() => { active = key; cbx(key); }} // @todo: change to radio-button
                    tabIndex="0"
                >
                    { content || key }
                </button>
            ))
        }
    </div>
);
