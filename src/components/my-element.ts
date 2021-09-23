import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@spectrum-web-components/icon'
import {
  AddToSelectionIcon,
  CheckmarkCircleIcon,
  setCustomTemplateLiteralTag,
} from '@spectrum-web-components/icons-workflow/src/icons.js'
import '@spectrum-web-components/theme/theme-lightest.js'

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'

import { connect } from 'pwa-helpers'
import { store, countUp } from '../redux/index.ts'


/**
 * NOTE: By default, using html template tag in lit-html. but this project use litv3.
 * so diff between templateresult type. so i need this.
 * https://opensource.adobe.com/spectrum-web-components/components/icons-workflow
 */
setCustomTemplateLiteralTag(html)

@customElement('my-element')
class MyElements extends connect(store)(LitElement) {
  // Create the controller and store it

  @property() counter

  stateChanged({ counter }) {
    this.counter = counter
  }

  constructor() {
    super()
    this.addEventListener('click', (e) => {
      console.log(e)
      console.log(this.getRootNode().host)
      this.selected = !this.selected
      store.dispatch(countUp)
    })
  }

  static styles = css`
    :host {
      all: initial;
      width: 100%;
      height: 100%;
      z-index: 10000;
      position: absolute;
    }
    .container {
      width: 100%;
      height: 100%;
      cursor: pointer;
      padding: 4px;
      box-sizing: border-box;
    }
    .container.selected {
      background: rgba(20, 115, 230, 0.2);
    }
    .flex {
      display: flex;
      background: white;
      color: #1473e6;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }
  `

  // Use the controller in render()
  render(): TemplateResult {
    console.log('render')
    return html`
      <div class="${this.selected && 'selected'} container">
      Counter -> ${this.counter}
      </div>
    `
  }
}

export default MyElements
