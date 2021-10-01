import './app.ts'

const main = () => {
  const appRoot = document.createElement('flickr-bundle-downloader')
  document.body.appendChild(appRoot)
}

window.addEventListener('load', main)
