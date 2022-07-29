import * as browser from 'webextension-polyfill'

;(async () => {
  const { extensionEnabled } = await browser.storage.sync.get(
    'extensionEnabled'
  )

  if (extensionEnabled === undefined) {
    browser.storage.sync.set(
      {'extensionEnabled': true}
    )
  }

  console.log(extensionEnabled)

  browser.action.setBadgeText({ text: 'hi' })

  browser.action.onClicked.addListener(() => {
    // TODO: toggle
    console.log('clicked')
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
})()
