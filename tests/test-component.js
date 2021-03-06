// eslint-disable-next-line import/extensions
import {render} from 'imports';

/**
 * Creates and wraps React / Preact components for easier testing
 */
export class TestComponent {

  /**
   * Initialize the component and render the jsx as React / Preact component
   * @param {Object} jsx JSX to render
   */
  constructor(jsx) {
    this.container = document.createElement('div');
    // Preact returns HTMLDomElement with component in ._component variable || React is returning WSHeader Object
    const result = render(jsx, this.container);
    // eslint-disable-next-line no-underscore-dangle
    this.component = result._component || result;
  }

  /**
   * Helper function for querySelector and querySelectorAll
   * @param {String} selector CSS Selector string
   * @returns {null|Element|Array<Element>} Returns null if nothing found, Element if one was found and otherwise an Array
   */
  q(selector) {
    const results = this.container.querySelectorAll(selector);
    if (!results || !results.length) {
      return null;
    }
    if (results.length === 1) {
      return results[0];
    }
    return Array.from(results);
  }
}
