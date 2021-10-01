import { LitElement, css, html, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/themes.js'
import '@spectrum-web-components/switch/sp-switch.js'
import '@spectrum-web-components/button/sp-button.js'

import * as browser from 'webextension-polyfill'

import ExtensionController from '../controllers/extension-controller.ts'

@customElement('extension-options')
export default class ExtensionOptions extends LitElement {
  private extensionController = new ExtensionController(this)

  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    .container {
      width: 400px;
      background-color: var(--spectrum-global-color-gray-100);
      color: var(--spectrum-global-color-gray-800);
    }
  `

  async switchClickHandler(): Promise<void> {
    await browser.storage.sync.set({
      extensionEnabled: !this.extensionController.extensionEnabled,
    })
  }

  terminateClickHandler(): void {
    browser.runtime.sendMessage({ action: 'terminated'})
  }

  // Render the UI as a function of component state
  render(): TemplateResult {
    return html`<sp-theme color="darkest" scale="midium">
      <div class="container">
        <sp-switch
          emphasized
          ?checked=${this.extensionController.extensionEnabled}
          @click=${this.switchClickHandler}
        >
          Flickr bundle downloader
        </sp-switch>
        <sp-button-group>
          <sp-button quiet variant="negative" @click=${this.terminateClickHandler}>Terminate</sp-button>
        </sp-button-group>
      </div>
    </sp-theme>`
  }
}
