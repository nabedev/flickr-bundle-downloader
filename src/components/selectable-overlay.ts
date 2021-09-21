import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@spectrum-web-components/icon'
import {
  AddToSelectionIcon,
  CheckmarkCircleIcon,
  setCustomTemplateLiteralTag,
} from '@spectrum-web-components/icons-workflow/src/icons.js'
import '@spectrum-web-components/theme/theme-lightest.js';

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'

/**
 * NOTE: By default, using html template tag in lit-html. but this project use litv3.
 * so diff between templateresult type. so i need this.
 * https://opensource.adobe.com/spectrum-web-components/components/icons-workflow
 */
setCustomTemplateLiteralTag(html)

@customElement('selectable-overlay')
class SelectableOverlay extends LitElement {
  // Create the controller and store it
  @property()
  selected = false

  static styles = css`
    :host {
      all: initial;
    }
    .container {
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 10000;
      box-sizing: border-box;
      display: flex;
      align-items: end;
      border: solid 2px #1473e6;
    }
    .flex {
      display: flex;
      background: white;
      width: 100%;
      padding: 8px;
      justify-content: space-evenly;
      box-sizing: border-box;
      color: #1473e6;
    }
    .selected {
      background: #AACCF6;
    }
  `

  constructor() {
    super()
    this.addEventListener('click', () => { this.selected = !this.selected })
  }

  // Use the controller in render()
  render(): TemplateResult {
    return html`
      <div class="container">
        <div class="${this.selected && 'selected'} flex">
          ${this.selected ? CheckmarkCircleIcon({width: 24, height: 24}) : AddToSelectionIcon({width: 24, height: 24})}
        </div>
      </div>
    `
  }

  private onClick(e) {
    console.log(e)
    this.selected = !this.selected
  }
}

export default SelectableOverlay
