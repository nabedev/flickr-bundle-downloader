import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/themes.js'
import '@spectrum-web-components/icon'
import '@spectrum-web-components/icon/sp-icon.js'
import '@spectrum-web-components/progress-circle/sp-progress-circle.js'

import {
  DownloadIcon,
  setCustomTemplateLiteralTag,
} from '@spectrum-web-components/icons-workflow'

import '@spectrum-web-components/button/sp-button.js'
import '@spectrum-web-components/button/sp-clear-button.js'

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'

import { connect } from 'pwa-helpers'
import store, { RootState } from '../redux/store.ts'
import {
  selectAll,
  selectedAllPhoto,
  deselectedAllPhoto,
} from '../redux/reducers/photo.ts'

/**
 * NOTE: By default, using html template tag in lit-html. but this project use litv3.
 * so diff between templateresult type. so i need this.
 * https://opensource.adobe.com/spectrum-web-components/components/icons-workflow
 */
setCustomTemplateLiteralTag(html)

@customElement('download-button')
class DownloadButton extends connect(store)(LitElement) {
  // Create the controller and store it
  @property()
  selectedPhotos = []

  @property()
  selectablePhotos = []

  @property()
  isDownloadable = true

  @property()
  loading = false

  @property()
  finished = false

  stateChanged(state: RootState): void {
    this.selectablePhotos = selectAll(state)
    this.selectedPhotos = selectAll(state).filter(entity => entity.selected)
  }

  static styles = css`
    .container {
      z-index: 10000;
      position: fixed;
      bottom: 10px;
      right: 10px;
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

  constructor() {
    super()
    this.addEventListener('click', () => {
      this.selected = !this.selected
    })
  }

  // Use the controller in render()
  render(): TemplateResult {
    return html` <div class="container">${this.getStatusToast()}</div> `
  }

  private getStatusToast() {
    return html` ${this.selectedPhotos.length < this.selectablePhotos.length
        ? html`<sp-button
            quiet
            variant="secondary"
            style="color: var(--spectrum-alias-text-color-selected)"
            @click=${() => store.dispatch(selectedAllPhoto())}
            >Select All</sp-button
          >`
        : html`<sp-button
            quiet
            variant="secondary"
            @click=${() => store.dispatch(deselectedAllPhoto())}
            >Deselect All</sp-button
          >`}
      ${this.selectedPhotos.length > 0
        ? html` <p style="color: var(--spectrum-alias-text-color-selected);">
            ${this.selectedPhotos.length} / ${this.selectablePhotos.length}
            photos
          </p>`
        : html` <p style="color: var(--spectrum-alias-text-color-disabled);">
            ${this.selectedPhotos.length} / ${this.selectablePhotos.length}
            photos
          </p>`}
      <sp-button
        @click=${this.handleClickDownload}
        ?disabled=${!this.canDownload()}
      >
        <sp-icon slot="icon">${DownloadIcon()}</sp-icon>
        Download
      </sp-button>`
  }

  private canDownload() {
    if (this.selectedPhotos.length === 0) return false
    if (!this.isDownloadable) return false
    return true
  }

  private handleClickDownload() {
    const event = new CustomEvent('clickDownload', {
      detail: {
        downloadItems: this.selectedPhotos,
      },
    })
    this.dispatchEvent(event)
    store.dispatch(deselectedAllPhoto())
    // dammy. creating download queue
  }

  private closeClickHandler() {
    console.log('close toastd')
  }
}

export default DownloadButton
