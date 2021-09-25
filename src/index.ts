import './components/selectable-overlay.ts'
import './components/download-button.ts'
import store from './redux/store.ts'
import { photoAdded } from './redux/reducers/photo.ts'
import { toggleExtension, overlayShowed } from './redux/reducers/extension.ts'


const main = () => {
  console.log('hello from extension')

  const thumbs = document.querySelectorAll<HTMLDivElement>(
    'div.photo-list-photo-view'
  )

  const downloadButtonEl = document.createElement('download-button')
  document.body.prepend(downloadButtonEl)

  thumbs.forEach(element => {
    if (element.classList.contains('is-video')) return
    const id = element.getAttribute('id')
    const url = element.querySelector('a.overlay').getAttribute('href')
    store.dispatch(photoAdded({ id, url, selected: false}))
    const selectableOverlay = document.createElement('selectable-overlay')
    const shadowHost = element.attachShadow({ mode: 'open' })
    shadowHost.appendChild(selectableOverlay)
  })

  console.log('toggle')
  store.dispatch(overlayShowed())
}

window.addEventListener('load', main)
