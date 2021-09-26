import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { ErrorCallbackMixin } from '../mixins/error-callback.ts'

@customElement('simple-greeting')
export default class SimpleGreeting extends ErrorCallbackMixin(LitElement) {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'World';

  constructor() {
    super()
  }
  
  // Render the UI as a function of component state
  render() {
    throw Error('somthing error in simple-greeting')
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
