import { h } from 'preact';

const tabsDefault = ['me', 'skills', 'experience', 'education', { more: <i class="material-icons">more_horiz</i> }];

/**
 * @param {Object} props
 * @returns {JSX}
 */
export default ({ tabs = tabsDefault }) => (
    <div class="col s12 tabs-container">
        <ul class="tabs tabs-fixed-width">
            {
                tabs.map((val, idx) => {
                    if (typeof val === 'string') {
                        return <li class="tab col s3">
                            <a class={`white-text${idx === 0 ? ' active' : ''}`} href={`#${val}`} aria-label={`Section ${val}`}>{ val }</a>
                        </li>;
                    }

                    const key = Object.keys(val)[0];
                    const el = val[key];

                    return <li class="tab col s3">
                        <a class={`white-text${idx === 0 ? ' active' : ''}`} href={`#${key}`} aria-label={`Section ${key}`}>{ el }</a>
                    </li>;
                })
            }
        </ul>
    </div>);
