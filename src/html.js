/**
 * @overview HTML utilities.
 *
 * @module html
 */


/**
 * Get the HTML content of the body.
 *
 * @param {Node} [element=document]
 *
 * @returns {string}
 */
export const getHtml = (element = document.body) => (element && element.innerHTML) || '';

/**
 * Sets the inner HTML content of an element.
 *
 * @param {string} element HTML content will be set for this element.
 * @param {string} html The HTML content to set.
 */
export const setHtml = (element, html) => {
    if (element && html) {
        element.innerHTML = html;
    }
};

/**
 * Sets the inner HTML content of the document body.
 *
 * @param {string} html The HTML content to set.
 */
export const setBodyHtml = html => {
    setHtml(document.body, html);
};
