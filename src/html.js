/**
 * @overview HTML utilities.
 *
 * @module html
 */


/**
 * Get the HTML content of an element.
 *
 * @param {Node} [element=document]
 *
 * @returns {string}
 */
export const getHtml = element => (element && element.innerHTML) || '';


/**
 * Get the HTML content of the body.
 *
 * @returns {string}
 */
export const getBodyHtml = () => getHtml(document.body);

/**
 * Sets the inner HTML content of an element.
 *
 * @param {string} element HTML content will be set for this element.
 * @param {string} html The HTML content to set.
 */
export const setHtml = (element, html) => element && html && (element.innerHTML = html); // eslint-disable-line no-return-assign

/**
 * Sets the inner HTML content of the document body.
 *
 * @param {string} html The HTML content to set.
 */
export const setBodyHtml = html => setHtml(document.body, html);
