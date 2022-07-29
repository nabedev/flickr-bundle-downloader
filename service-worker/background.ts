import * as browser from 'webextension-polyfill'

browser.action.setBadgeText({ text: 'hi' })

browser.action.onClicked.addListener(async () => {
  const tabs = await browser.tabs.query({active: true, currentWindow: true})
})

browser.runtime.onMessage.addListener(async message => {
  if (message.action === 'download') {
    const downloadResult = await browser.downloads.download({
      url: message.url,
    })
    return downloadResult
  }
})

browser.runtime.onMessage.addListener(message => {
  console.log(message)
})
