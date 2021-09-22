console.log('hello from extension')

const thumbs = document.querySelectorAll<HTMLDivElement>(
  'div.photo-list-photo-view'
)
console.log(thumbs)

const customEl = document.createElement('selectable-overlay')
document.body.appendChild(customEl)

thumbs.forEach(element => {
  const selectableOverlay = document.createElement('selectable-overlay')
  if (element.classList.contains('is-video')) return
  element.prepend(selectableOverlay)
})

import './components/selectable-overlay.ts'
