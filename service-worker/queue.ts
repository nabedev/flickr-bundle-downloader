import * as browser from 'webextension-polyfill'


type JobStatus = 'inqueue' | 'terminated' | 'successful'

export type Job = {
  [id: string]: { url: string, status: JobStatus }
}

export default class Queue {
  jobs: []

  constructor() {
    this.jobs = []
  }

  async add(jobs): Promise<void> {
    this.jobs = jobs
  }

}