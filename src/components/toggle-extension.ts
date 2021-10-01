import { LitElement, html, css } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/themes.js'
import '@spectrum-web-components/switch/sp-switch.js'

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'
import { setCustomTemplateLiteralTag } from '@spectrum-web-components/icons-workflow'

import { connect } from 'pwa-helpers'
import store, { RootState } from '../redux/store.ts'
import { toggleExtension } from '../redux/reducers/extension.ts'

/**
 * NOTE: By default, using html template tag in lit-html. but this project use litv3.
 * so diff between templateresult type. so i need this.
 * https://opensource.adobe.com/spectrum-web-components/components/icons-workflow
 */
setCustomTemplateLiteralTag(html)

@customElement('toggle-extenison')
class ToggleExtension extends connect(store)(LitElement) {
  @state()
  protected _extension = false

  stateChanged(_state: RootState): void {
    this.state = _state.extension.extension
  }

  static styles = css`
    :host {
      all: initial;
    }
    .container {
      z-index: 10000;
      position: fixed;
      bottom: 10px;
      legt: 10px;
      display: flex;
      padding: 1em;
      justify-content: space-between;
      align-items: center;
      background-color: var(--spectrum-global-color-gray-100);
      color: var(--spectrum-global-color-gray-800);
      border-radius: 6px;
    }
    .container > * + * {
      margin-left: 1em;
    }
  `

  render(): TemplateResult {
    return html`
      <sp-theme color="darkest" scale="medium">
        <div class="container">
          <sp-switch
            label="Switch"
            ?checked=${this._extension}
            @click=${store.dispatch(toggleExtension())}
          >
            Enable
          </sp-switch>
        </div>
      </sp-theme>
    `
  }
}

export default ToggleExtension
