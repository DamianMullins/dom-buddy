/**
 * @overview cookie utilities.
 *
 * @module cookies
 */

/**
 * Get the cookie content.
 *
 * @returns {string}
 */

export const getCookieValue = () => document.cookie;

/**
 * Set the cookie content.
 *
 */

export const setCookieValue = value => (document.cookie = value);
