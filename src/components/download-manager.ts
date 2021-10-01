import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js'

import '@spectrum-web-components/theme/sp-theme.js'
import '@spectrum-web-components/theme/src/themes.js'
import '@spectrum-web-components/icon'
import '@spectrum-web-components/icon/sp-icon.js'
import '@spectrum-web-components/progress-circle/sp-progress-circle.js'
import '@spectrum-web-components/progress-bar/sp-progress-bar.js';
import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-web-components/status-light/sp-status-light.js';
import '@spectrum-web-components/button/sp-button.js';
import '@spectrum-web-components/button/sp-clear-button.js';

import {
  setCustomTemplateLiteralTag,
} from '@spectrum-web-components/icons-workflow'

import { TemplateResult } from '@spectrum-web-components/icons-workflow/src/custom-tag'

setCustomTemplateLiteralTag(html)

@customElement('download-manager')
class DownloadManager extends LitElement {
  @property({
    hasChanged() {
      // NOTE: It's evaluated as equivalent, so I'm returning true for temporary.
      return true
    }
  })
  queue = []

  static styles = css`
    .container {
      z-index: 10000;
      position: fixed;
      bottom: 90px;
      right: 10px;
      display: flex;
      padding: 1em;
      justify-content: space-between;
      align-items: center;
      background-color: var(--spectrum-global-color-gray-100);
      color: var(--spectrum-global-color-gray-800);
      border-radius: 6px;
    }
    .queue-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .queue-list+.queue-list {
      margin-top: 1em;
    }
  `

  render(): TemplateResult {
    if (this.queue.length === 0) {
      return html``
    }
    return html`
      <div class="container">
        <sp-accordion allow-multiple>
          <sp-accordion-item open label="Download progress" style="max-height: 400px;
          overflow: scroll;">
            ${repeat(
              this.queue,
              queue => queue.id,
              queue => html`
                <div class="queue-list">
                  <sp-progress-bar
                  size="m"
                  label="${queue.status}"
                  progress=${Math.ceil(queue.tasks.filter(task => task.status !== 'pending').length / queue.tasks.length * 100)}
                  ></sp-progress-bar>
                  <sp-clear-button
                    label="Terminate"
                    variant="overBackground"
                    style="margin-left: 1em"
                    @click=${() => this.handleClick(queue.id)}
                    ?disabled=${['finished', 'terminated'].some(status => queue.status === status)}
                  ></sp-clear-button>
                </div>
                `
              )}
          </sp-accordion-item>
        </sp-accordion>
      </div>`
  }

  private handleClick(id) {
    const event = new CustomEvent("terminateDownload", {
      detail: { id }
    })
    this.dispatchEvent(event)
  }
}

export default DownloadManager
