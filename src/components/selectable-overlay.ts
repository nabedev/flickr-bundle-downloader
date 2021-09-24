import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { connect } from 'pwa-helpers'

import '@spectrum-web-components/icon'
import {
  AddToSelectionIcon,
  CheckmarkCircleIcon,
  setCustomTemplateLiteralTag,
} from '@spectrum-web-components/icons-workflow/src/icons.js'
import '@spectrum-web-components/theme/theme-lightest.js'

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'

import { store, togglePhotoSelected, selectById } from '../redux/reducers/photo'

/**
 * NOTE: By default, using html template tag in lit-html. but this project use litv3.
 * so diff between templateresult type. so i need this.
 * https://opensource.adobe.com/spectrum-web-components/components/icons-workflow
 */
setCustomTemplateLiteralTag(html)

@customElement('selectable-overlay')
class SelectableOverlay extends connect(store)(LitElement) {
  // Create the controller and store it
  @property()
  selected = false

  @property()
  id

  @property()
  photoURL

  @property() counter

  stateChanged(state): void {
    const entity = selectById(state, this.id)
    this.selected = entity?.selected
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

  connectedCallback(): void {
    super.connectedCallback()
    const hostNode = this.getRootNode().host
    this.id = hostNode.getAttribute('id')
    this.photoURL = hostNode.querySelector('a.overlay').getAttribute('href')

    this.addEventListener('click', () => {
      store.dispatch(togglePhotoSelected({ id: this.id }))
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
}

export default SelectableOverlay
