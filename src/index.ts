console.log('hello from extension')

const thumbs = document.querySelectorAll<HTMLDivElement>(
  'div.photo-list-photo-view'
)
console.log(thumbs)

const downloadButtonEl = document.createElement('download-button')
document.body.prepend(downloadButtonEl)

thumbs.forEach(element => {
  const selectableOverlay = document.createElement('selectable-overlay')
  if (element.classList.contains('is-video')) return
  element.prepend(selectableOverlay)
})


import './components/selectable-overlay.ts'
import './components/download-button.ts'
