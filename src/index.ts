import './app.ts'
import './components/selectable-overlay.ts'
import './components/download-button.ts'
import store from './redux/store.ts'
import { photoAdded, positionChanged } from './redux/reducers/photo.ts'
import { toggleExtension, overlayShowed } from './redux/reducers/extension.ts'

const main = () => {
  console.log('hello from extension')
  const appRoot = document.createElement('flickr-bundle-downloader')
  document.body.appendChild(appRoot)
}

window.addEventListener('load', main)
