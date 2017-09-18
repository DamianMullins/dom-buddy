/**
 * @overview HTML utilities.
 *
 * @module html
 */


/**
 * Sets the HTML content of the body.
 *
 * @param {string} html The HTML content to set.
 */
export const setHtml = html => {
    document.body.innerHTML = html;
};


/**
 * Get the HTML content of the body.
 *
 * @returns {string}
 */
export const getHtml = () => document.body.innerHTML;
