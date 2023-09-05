import { h } from 'preact';
import classNames from 'classnames';
import styles from "./icon.module.css";

const sprite = `${__webpack_public_path__}assets/sprite.svg`; // eslint-disable-line camelcase

require.context('Assets/icons', true, /^\.\/.*\.svg$/);

/**
 * @param {Object} props
 * @returns {JSX}
 */
export default ({ name, ...otherProps }) => (
    <svg
        width="24"
        height="24"
        {...otherProps}
        class={styles.ic}
    >
        <use xlinkHref={`${sprite}#${name}`} />
    </svg>
);
