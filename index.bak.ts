console.log('hello from content script')


const div = `
  <div class="hogehoge" style="width: 100%;
    height: 1005;
    height: 100%;
    border: solid 2px purple;
    box-sizing: border-box;
    z-index: 1000;
    cursor: pointer;
    "
  ></div>
`

// const el = document.createElement('div')
// el.style.cssText = `width: 100%;
// height: 1005;
// height: 100%;
// border: solid 2px purple;
// box-sizing: border-box;
// z-index: 1000;
// cursor: pointer;`

const thumbs = document.querySelectorAll<HTMLDivElement>('div.photo-list-photo-view')
console.log(thumbs)
thumbs.forEach(element => {
  if (element.classList.contains('is-video')) return
  element.insertAdjacentHTML('afterbegin', div)
  element.addEventListener<"click">('click', (event) => {
    // el.target.dataset["selected"] = '1'
    // console.log(event.target.nextElementSibling.querySelector('a.overlay').href)
    console.log(event.target.next)
  }) as EventListener
})

// Apply to additional loaded elements.
const targetNode = document.querySelector('div.photo-list-view')
const callback: MutationCallback = (mutationList) => {
  mutationList.forEach(mutation => {
    mutation.addedNodes.forEach(node => {
      const elementNode = node as Element
      if (elementNode.classList.contains('is-video')) return
      elementNode.insertAdjacentHTML('afterbegin', div)
    });
  })
}
const observer = new MutationObserver(callback)
observer.observe(targetNode, { attributes: false, childList: true, subtree: false, characterData: false })
