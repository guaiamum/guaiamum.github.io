import $ from 'jquery';

/**
 * @returns {void}
 */
export const showLoader = () => {
    $('#loader-background').show();
};

/**
 * @returns {void}
 */
export const hideLoader = () => {
    $('#loader-background').hide();
};
