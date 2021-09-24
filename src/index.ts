import './components/selectable-overlay.ts'
import './components/download-button.ts'
import { store, photoAdded } from './redux/reducers/photo.ts'

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
}

window.addEventListener('load', main)
