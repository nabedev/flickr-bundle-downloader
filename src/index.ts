import './components/selectable-overlay.ts'
import './components/download-button.ts'
import store from './redux/store.ts'
import { photoAdded, positionChanged } from './redux/reducers/photo.ts'
import { toggleExtension, overlayShowed } from './redux/reducers/extension.ts'

const main = () => {
  console.log('hello from extension')

  const thumbs = document.querySelectorAll<HTMLDivElement>(
    'div.photo-list-photo-view'
  )

  const downloadButtonEl = document.createElement('download-button')

  const appRoot = document.createElement('flickr-bundle-downloader')
  const shadowHost = appRoot.attachShadow({ mode: 'open' })

  shadowHost.appendChild(downloadButtonEl)
  thumbs.forEach((element, key) => {
    if (key > 1) return
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
          width, height,
          'z-index': 80 
        },
      })
    )

    // const shadowHost = appRoot.attachShadow({mode: 'open'})

    // const dammyDiv = document.createElement('div')
    // dammyDiv.style.cssText = `
    //   position: absolute;
    //   background: rgba(100,100,100,0.5);
    //   z-index: 80;
    //   top: ${top + window.scrollY}px;
    //   left: ${left + window.scrollX}px;
    //   width: ${width}px;
    //   height: ${height}px;
    // `
    // shadowHost.appendChild(dammyDiv)
    const selectableOverlay = document.createElement('selectable-overlay')
    selectableOverlay.setAttribute('id', id)
    shadowHost.appendChild(selectableOverlay)
  })

  document.body.prepend(appRoot)

  console.log('toggle')
  store.dispatch(overlayShowed())
}

window.addEventListener('load', main)
