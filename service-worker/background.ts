import * as browser from 'webextension-polyfill'

browser.runtime.onMessage.addListener(async message => {
  if (message.action === 'download') {
    const downloadResult = await browser.downloads.download({
      url: message.url,
    })
    return downloadResult
  }
})
