import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/themes.js'
import '@spectrum-web-components/icon'
import '@spectrum-web-components/icon/sp-icon.js';

import {
  DownloadIcon,
  CheckmarkCircleIcon,
  setCustomTemplateLiteralTag,
} from '@spectrum-web-components/icons-workflow/src/icons.js'

import '@spectrum-web-components/button/sp-button.js'
import '@spectrum-web-components/button/sp-clear-button.js'

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'

/**
 * NOTE: By default, using html template tag in lit-html. but this project use litv3.
 * so diff between templateresult type. so i need this.
 * https://opensource.adobe.com/spectrum-web-components/components/icons-workflow
 */
setCustomTemplateLiteralTag(html)

@customElement('download-button')
class DownloadButton extends LitElement {
  // Create the controller and store it
  @property()
  selected = false

  static styles = css`
    :host {
      all: initial;
      z-index: 10000;
      position: fixed;
      bottom: 10px;
      right: 10px;
    }
    .container {
      display: flex;
      padding: 8px;
      justify-content: space-between;
      align-items: center;
      background-color: var(--spectrum-global-color-gray-100);
      color: var(--spectrum-global-color-gray-800);
      border-radius: 6px;
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
      <sp-theme color="darkest" scale="medium">
      <div class="container">
          <p style="margin-right: 8px">
            Selecting 5 photos
          </p>
          <sp-button>
            <sp-icon slot="icon">${DownloadIcon()}</sp-icon>
            Download
            </sp-button>
          </div>
      </sp-theme>
    `
  }

  private onClick(e) {
    console.log(e)
    this.selected = !this.selected
  }
}

export default DownloadButton
