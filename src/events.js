/* eslint-disable import/prefer-default-export */
/**
 * @overview Event utilities.
 *
 * @module events
 */


/**
 * Creates and dispatches a DOM event
 *
 * @param {Node} element
 * @param {string} name
 * @param {object} detail
 *
 * @example
 * dispatchEvent(window, 'onEvent');
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event|Event - MDN}
 */
export const dispatchEvent = (element, type, detail) => {
    let event;

    if (detail) {
        event = new CustomEvent(type, detail);
    } else {
        event = new Event(type);
    }

    element.dispatchEvent(event);

    return event;
};