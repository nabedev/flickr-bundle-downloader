import { ReactiveController, ReactiveControllerHost } from 'lit'

import * as browser from 'webextension-polyfill'

export default class ExtensionController implements ReactiveController {
  host: ReactiveControllerHost

  extensionEnabled: boolean

  constructor(host: ReactiveControllerHost) {
    ;(this.host = host).addController(this)
    this.extensionEnabled = false
  }

  async hostConnected(): Promise<void> {
    const { extensionEnabled } = await browser.storage.sync.get(
      'extensionEnabled'
    )
    this.extensionEnabled = extensionEnabled || false

    browser.storage.onChanged.addListener(changes => {
      if (!changes?.extensionEnabled) return
      const { newValue } = changes.extensionEnabled
      this.extensionEnabled = newValue
      this.host.requestUpdate()
    })
    this.host.requestUpdate()
  }
}
