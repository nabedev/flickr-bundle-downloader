import { LitElement, html, css, TemplateResult } from 'lit'
import { customElement, state, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'

import './components/my-element.ts'
import { ErrorCallbackMixin } from './mixins/error-callback.ts'
import store from './redux/store.ts'
import { connect } from 'pwa-helpers'

import { photoAdded, selectAll, positionChanged } from './redux/reducers/photo.ts'
import { overlayShowed } from './redux/reducers/extension'
import './components/selectable-overlay'
import './components/download-button'

@customElement('flickr-bundle-downloader')
class App extends connect(store)(LitElement) {
  @state()
  protected _photos = []

  @state()
  protected _overlay = false

  stateChanged(state) {
    this._photos = selectAll(state)
    this._overlay = state.extension.overlay
  }

  constructor() {
    super()

    const lightDOMImgElements = document.querySelectorAll<HTMLDivElement>(
      'div.photo-list-photo-view'
    )

    lightDOMImgElements.forEach(element => {
      this.dispachNewPhotoElement(element)
    })

    store.dispatch(overlayShowed())

    const callback: MutationCallback = mutationList => {
      console.log('mutationObserverCallback')
      mutationList.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          const element = node as Element
          if (element.classList.contains('is-video')) return
          this.dispachNewPhotoElement(element)
        })
      })
    }
    const observer = new MutationObserver(callback)
    const targetNode = document.querySelector('div.photo-list-view')
    observer.observe(targetNode, {
      attributes: false,
      childList: true,
      subtree: false,
      characterData: false,
    })

  }

  dispachNewPhotoElement(element): void {
    if (element.classList.contains('is-video')) return
    const id = element.getAttribute('id')
    const url = element.querySelector('a.overlay').getAttribute('href')
    const { top, left, width, height } = element.getBoundingClientRect()

    store.dispatch(
      photoAdded({
        id,
        url,
        selected: false,
        positions: {
          top: top + window.scrollY,
          left: left + window.scrollX,
          width,
          height,
          'z-index': 80,
        },
      })
    )

    this.observeResizingPhotoElement(element)
  }

  observeResizingPhotoElement(targetNode) {
    const resizeObserver = new ResizeObserver(entries => {
      console.log('resizeObserverCallback')
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id')
        const { top, left, width, height } = entry.target.getBoundingClientRect()
        store.dispatch(
          positionChanged(
            {id, positions: {
              top: top + window.scrollY,
              left: left + window.scrollX,
              width,
              height,
              'z-index': 80,
            }}
          )
        )
      })
    })
    resizeObserver.observe(targetNode)
  }

  render(): TemplateResult {
    return html` <download-button></download-button>
      ${this._overlay
        ? repeat(
            this._photos,
            photo => photo.id,
            photo => html`
              <selectable-overlay id=${photo.id}></selectable-overlay>
            `
          )
        : null}`
  }
}

export default App
