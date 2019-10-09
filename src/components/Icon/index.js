import { h } from 'preact';
import classNames from 'classnames';

const sprite = `${__webpack_public_path__}assets/sprite.svg`; // eslint-disable-line camelcase

require.context('Assets/icons', true, /^\.\/.*\.svg$/);

/**
 * @param {Object} props
 * @returns {JSX}
 */
export default ({ classes, name, ...otherProps }) => (
    <svg
        width="24"
        height="24"
        {...otherProps}
        class={classNames('ic', classes)}
    >
        <use xlinkHref={`${sprite}#${name}`} />
    </svg>
);
