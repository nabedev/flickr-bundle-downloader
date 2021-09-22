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
      padding: 4px;
    }
    .container.selected {
      background: rgba(20, 115, 230, 0.2);
    }
    .flex {
      display: flex;
      background: white;
      color: #1473e6;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }
  `

  constructor() {
    super()
    this.addEventListener('click', () => {
      this.selected = !this.selected
    })
  }

  // Use the controller in render()
  render(): TemplateResult {
    return html`
      <div class="${this.selected && 'selected'} container">
        <div class="flex">
          ${this.selected
            ? CheckmarkCircleIcon()
            : AddToSelectionIcon()}
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
