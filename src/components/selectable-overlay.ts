import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';

import { connect } from 'pwa-helpers'

import '@spectrum-web-components/icon'
import {
  AddToSelectionIcon,
  CheckmarkCircleIcon,
  setCustomTemplateLiteralTag,
} from '@spectrum-web-components/icons-workflow'
import '@spectrum-web-components/theme/theme-lightest.js'

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'

import store from '../redux/store.ts'
import { togglePhotoSelected, selectById } from '../redux/reducers/photo.ts'

/**
 * NOTE: By default, using html template tag in lit-html. but this project use litv3.
 * so diff between templateresult type. so i need this.
 * https://opensource.adobe.com/spectrum-web-components/components/icons-workflow
 */
setCustomTemplateLiteralTag(html)

@customElement('selectable-overlay')
class SelectableOverlay extends connect(store)(LitElement) {
  @property()
  display = false
  
  @property()
  selected = false

  @property()
  id

  @property()
  photoURL

  @property()
  styles = {}

  stateChanged(state): void {
    this.display = state.extension.overlay

    const entity = selectById(state, this.id)
    const { top, left, width, height } = entity.positions
    this.selected = entity?.selected
    this.styles = {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
      'z-index': entity.positions['z-index']
    }
  }

  static styles = css`
    :host {
      all: initial;
    }
    .container {
      background: rgba(100, 200, 100, 0.5);
      cursor: pointer;
      padding: 4px;
      box-sizing: border-box;
      position: absolute;
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
    this.addEventListener('click', () => {
      store.dispatch(togglePhotoSelected({ id: this.id }))
    })
  }

  // Use the controller in render()
  render(): TemplateResult {
    if (!this.display) return html`<div>hoge</div>`
    return html`
      <div class="${this.selected && 'selected'} container" style=${styleMap(this.styles)}>
      ${this.display}
        <div class="flex">
          ${this.selected
            ? CheckmarkCircleIcon()
            : AddToSelectionIcon()}
        </div>
      </div>`
  }
}

export default SelectableOverlay
