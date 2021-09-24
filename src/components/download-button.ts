import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/themes.js'
import '@spectrum-web-components/icon'
import '@spectrum-web-components/icon/sp-icon.js'
import '@spectrum-web-components/progress-circle/sp-progress-circle.js'
import '@spectrum-web-components/toast/sp-toast.js'
import '@spectrum-web-components/divider/sp-divider.js';
import '@spectrum-web-components/quick-actions/sp-quick-actions.js';
import '@spectrum-web-components/tooltip/sp-tooltip.js';


import {
  CloseIcon,
  DownloadIcon,
  CheckmarkCircleIcon,
  setCustomTemplateLiteralTag,
} from '@spectrum-web-components/icons-workflow/src/icons.js'

import '@spectrum-web-components/button/sp-button.js'
import '@spectrum-web-components/button/sp-clear-button.js'

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'

import { connect } from 'pwa-helpers'
import { store, selectAll } from '../redux/reducers/photo.ts'

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

  stateChanged(state) {
    this.selectablePhotos = selectAll(state)
    this.selectedPhotos = selectAll(state).filter(entity => entity.selected)
  }

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
      padding: 1em;
      justify-content: space-between;
      align-items: center;
      background-color: var(--spectrum-global-color-gray-100);
      color: var(--spectrum-global-color-gray-800);
      border-radius: 6px;
    }
    .container > *+* {
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
    return html`
      <sp-theme color="darkest" scale="medium">
        <div class="container">
          ${this.getStatusToast()}
        </div>
      </sp-theme
      >
    `
  }

  private getStatusToast() {
    if (this.finished) {
      return html`
        <sp-icon style="color: var(--spectrum-global-color-static-celery-200);">
          ${CheckmarkCircleIcon()}
        </sp-icon>
        <p>
          Your download has started! You can check the progress of the download
          and cancel it from the Extensions icon from the upper right corner.
        </p>
        <sp-clear-button
            label="Close"
            variant="overBackground"
            @click=${this.closeClickHandler()}
        ></sp-clear-button>
        `
    }
    if (this.loading) {
      return html`
      <sp-progress-circle
        label="A small representation of a somewhat completed action"
        indeterminate
        size="small"
      ></sp-progress-circle>
      <p>Creating a download queue</p>`
    }
    return html`
      ${this.selectedPhotos.length < this.selectablePhotos.length
        ? html`<sp-button quiet variant="primary">SelectAll</sp-button>`
        : html`<sp-button quiet variant="primary">DeselectAll</sp-button>`
      }
      ${this.selectedPhotos.length > 0 ? html`
        <sp-icon
          style="color: var(--spectrum-alias-icon-color-selected);">
          ${CheckmarkCircleIcon()}
        </sp-icon>
        <p style="color: var(--spectrum-alias-text-color-selected);">${this.selectedPhotos.length} photos</p>`
        : null
      }
      <sp-button
        @click=${this.clickHandler}
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

  private async clickHandler(e) {
    this.isDownloadable = false
    this.loading = true
    // dammy. creating download queue
    await new Promise(r => setTimeout(r, 5000))
    this.loading = false
    this.finished = true
    console.log(this.selectedPhotos)
  }

  private closeClickHandler() {

  }
}

export default DownloadButton
