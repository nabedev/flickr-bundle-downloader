import { ReactiveController, ReactiveControllerHost } from 'lit'

import * as browser from 'webextension-polyfill'

import { fetchResponseText } from '../utils/index.ts'


type Task = {
  id: number
  url: string
  status: 'pending' | 'processing' | 'finished' | 'terminated',
  process: () => void
}

type Queue = {
  id: number,
  status: 'pending' | 'running' | 'finished' | 'terminated' | 'failed'
  tasks: Task[],
  abortController: AbortController
}

export default class downloadController implements ReactiveController {
  host: ReactiveControllerHost
  
  queue: Queue[]
  
  progress: number
  
  eventTarget: EventTarget
  
  abortController: AbortController
  
  constructor(host: ReactiveControllerHost) {
    (this.host = host).addController(this)
    this.queue = []
    this.eventTarget = new EventTarget()
    this.abortController = new AbortController()
  }
  
  async hostConnected(): Promise<void> {
    this._worker()
  }
  
  add(selectedPhotos): void {
    const queue = {
      id: this.queue.length,
      status: 'pending',
      tasks: selectedPhotos.map(({id, url}) => this._generateTasks(id, url)),
      abortController: new AbortController()
    }
    this.queue.push(queue)
    const event = new CustomEvent("enqueue")
    this.eventTarget.dispatchEvent(event)
  }
  
  terminate(id: string): void {
    const queue = this.queue.find(item => item.id === id)
    queue.abortController.abort()
    queue.status = 'terminated'
    this.host.requestUpdate()
  }
  
  private async _worker() {
    const queue = this.queue.find(q => q.status === 'pending')
    if (queue === undefined) {
      // The queue is empty so wait until enqueued.
      await new Promise(resolve => {
        this.eventTarget.addEventListener('enqueue', resolve, { once: true })
      })
      return this._worker()
    }

    queue.status = 'running'
    
    
    for(let task of queue.tasks) {
      this.host.requestUpdate()
      try {
        await task.process(queue.abortController.signal)
      } catch (e) {
        if (e.name === 'AbortError') {
          queue.status = 'terminated'
          return this._worker()
        }
        console.error(e)
        task.status = 'failed'
        continue
      }
      task.status = 'finished'
    }

    queue.status = 'finished'
    this.host.requestUpdate()
    return this._worker()
  }
  
  private async _process(signal: AbortSignal): Promise<void> {
    await new Promise(r => setTimeout(r, 1000))
    const sizeListPage = await fetchResponseText(this.url, signal)
    const parser = new DOMParser()
    const doc = parser.parseFromString(sizeListPage, 'text/html')
    const highestResolutionLnk = doc.querySelector('ol.sizes-list > li:last-child li:last-child > a')?.href
    if (!highestResolutionLnk) {
      throw new Error('Failed to parse the link')
    }
    
    const imageViewPage = await fetchResponseText(highestResolutionLnk, signal)
    const src = parser.parseFromString(imageViewPage, 'text/html').querySelector('#allsizes-photo > img')?.src

    if(!src) {
      throw new Error('Failed to parse the image src')
    }

    await browser.runtime.sendMessage({ action: 'download', url: src })
}

private _generateTasks(id, url): Task {
  return {
    id,
    url,
    status: 'pending',
    process: this._process
  }
}
}
