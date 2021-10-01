import { html, LitElement, TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'
import { connect } from 'pwa-helpers'

import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/themes.js'

import './components/download-button.ts'
import './components/selectable-overlay.ts'
import './components/download-manager.ts'

import ExtensionController from './controllers/extension-controller.ts'
import DownloadController from "./controllers/download-controller.ts";
import { overlayShowed } from './redux/reducers/extension.ts'
import { photoAdded, positionChanged, selectAll } from './redux/reducers/photo.ts'
import store, { RootState } from './redux/store.ts'



@customElement('flickr-bundle-downloader')
class App extends connect(store)(LitElement) {
  protected extensionController = new ExtensionController(this)

  protected downloadController = new DownloadController(this)

  @state()
  protected _photos = []

  @state()
  protected _overlay = false


  stateChanged(_state: RootState): void {
    this._photos = selectAll(_state)
    this._overlay = _state.extension.overlay
  }

  connectedCallback(): void {
    super.connectedCallback()
    window.addEventListener('beforeunload', this.handleBeforeUnload);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    window.removeEventListener('beforeunload', this.handleBeforeUnload);
  }

  constructor() {
    super()
    const lightDOMImgElements = document.querySelectorAll<HTMLDivElement>(
      'div.interaction-view'
    )

    lightDOMImgElements.forEach(element => {
      this.dispachNewPhotoElement(element)
    })

    store.dispatch(overlayShowed())

    const mutationCallback: MutationCallback = mutationList => {
      mutationList.forEach(mutation => {
        if (!mutation.target.classList.contains('interaction-view')) return
        this.dispachNewPhotoElement(mutation.target)
      })
    }
    const observer = new MutationObserver(mutationCallback)
    // const targetNode = document.querySelector('div.photo-list-view')
    const targetNode = document.querySelector('div#content')
    observer.observe(targetNode, {
      attributes: false,
      childList: true,
      subtree: true,
      characterData: false,
    })
  }

  dispachNewPhotoElement(element: Element): void {
    // NOTE: Follow the specification that video cannot be downloaded.
    if (element.parentElement?.classList.contains('is-video')) return
    const href = element.querySelector('a.overlay')?.getAttribute('href')
    if (href === undefined) {
      console.error(`[dispachNewPhotoElement] href not found`)
      return
    }
    const capturingRegex = /(?<path>\/photos\/.+)\/(?<id>.+)\/in\/.+/
    const match = href.match(capturingRegex)
    if (!match) {
      console.error(`Invalid URL`)
      return
    }
    const { path, id } = match.groups
    const { top, left, width, height } = element.getBoundingClientRect()

    store.dispatch(
      photoAdded({
        id,
        url: `https://www.flickr.com/${path}/${id}/sizes/l/`,
        selected: false,
        positions: {
          top: top + window.scrollY,
          left: left + window.scrollX,
          width,
          height,
        },
      })
    )

    this.observeResizingPhotoElement(element)
  }

  observeResizingPhotoElement(targetNode: Element): void {
    const resizeObserver = new ResizeObserver(entries => {
      entries.forEach(entry => {
        const href = entry.target.querySelector('a.overlay')?.getAttribute('href')
        if (href === undefined) {
          console.error(`[dispachNewPhotoElement] href not found`)
          return
        }
        const capturingRegex = /(?<path>\/photos\/.+)\/(?<id>.+)\/in\/.+/
        const match = href.match(capturingRegex)
        if (!match) {
          console.error(`Invalid URL`)
          return
        }
        const { id } = match.groups
        const { top, left, width, height } =
          entry.target.getBoundingClientRect()
        store.dispatch(
          positionChanged({
            id,
            positions: {
              top: top + window.scrollY,
              left: left + window.scrollX,
              width,
              height,
            },
          })
        )
      })
    })
    resizeObserver.observe(targetNode)
  }

  render(): TemplateResult {
    return html`
    <sp-theme color="darkest" scale="midium">
      <download-manager
        .queue=${this.downloadController.queue}
        @terminateDownload=${this.handleClickTerminate}
      ></download-manager>
      <download-button @clickDownload=${this.handleClickDownload}></download-button>
      ${repeat(
        this._photos,
        photo => photo.id,
        photo => html`
          <selectable-overlay id=${photo.id}></selectable-overlay>`
      )}
    </sp-theme>
    `
  }

  private handleBeforeUnload(e) {
    // Cancel the event as stated by the standard.
    e.preventDefault();
    // Chrome requires returnValue to be set.
    e.returnValue = ''
  }

  private handleClickDownload(e) {
    this.downloadController.add(e.detail.downloadItems)
  }

  private handleClickTerminate(e) {
    this.downloadController.terminate(e.detail.id)
  }
}

export default App
