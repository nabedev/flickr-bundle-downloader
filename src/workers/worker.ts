onmessage = e => {
  console.log('Message received from main script')
  console.log(e)
  postMessage('successfully onmessage in worker.ts')
}
