import { JSDOM } from 'jsdom'

const dom = new JSDOM(`<html class="translated-ltr"><head>
<title>ドメインの例</title>

<meta charset="utf-8">
<meta http-equiv="Content-type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">
body {
    background-color: #f0f0f2;
    margin: 0;
    padding: 0;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    
}
div {
    width: 600px;
    margin: 5em auto;
    padding: 2em;
    background-color: #fdfdff;
    border-radius: 0.5em;
    box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
}
a:link, a:visited {
    color: #38488f;
    text-decoration: none;
}
@media (max-width: 700px) {
    div {
        margin: 0 auto;
        width: auto;
    }
}
</style>    
<link type="text/css" rel="stylesheet" charset="UTF-8" href="https://translate.googleapis.com/translate_static/css/translateelement.css"></head>

<body>
<div>
<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ドメインの例</font></font></h1>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">このドメインは、ドキュメントの実例で使用するためのものです。</font><font style="vertical-align: inherit;">事前の調整や許可の要求なしに、このドメインを文献で使用できます。</font></font></p>
<p><a href="https://www.iana.org/domains/example"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">詳しくは...</font></font></a></p>
</div><div id="goog-gt-tt" class="skiptranslate" dir="ltr"><div style="padding: 8px;"><div><div class="logo"><img src="https://www.gstatic.com/images/branding/product/1x/translate_24dp.png" width="20" height="20" alt="Google 翻訳"></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">原文</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"><span class="activity-link">翻訳を改善する</span><span class="activity-link"></span></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"><div class="activity-root"></div></div></div><div class="status-message" style="display: none;"></div></div>


<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg></div></div></body></html>`)

console.log(dom)
// import * as browser from 'webextension-polyfill'

// (async()=> {
//   const response = await browser.storage.sync.get()
//   console.log(response)
// })()

// const myEventTarget = new EventTarget()
// const event = new CustomEvent("cat");

// browser.runtime.onMessage.addListener(async message => {
//   if (message === 'pause') myEventTarget.dispatchEvent(event)
//   if (message.photos === undefined) return
//   console.log(`[background] photo added lister`)
//   const newQueue = message.photos.map(photo => {
//     const {id, url} = photo
//     return { id, url, status: 'inqueue' }
//   })
//   const { queue } = await browser.storage.sync.get('queue')
//   if (queue === undefined) {
//     await browser.storage.sync.set({ queue: newQueue })
//     return
//   }
//   await browser.storage.sync.set({ queue: [...queue, ...newQueue] })
// });

// const dequeue = async () => {
//   const { queue } = await browser.storage.sync.get('queue')
//   const job = queue.find(data => data.status === 'inqueue')
//   console.log(job)
//   if (job === undefined) return

//   const requestURL = `https://www.flickr.com/${job.url.replace('/in/dateposted/', '/sizes/l/')}`
//   console.log(requestURL)
//   let response
//   try {
//     response = await fetch(requestURL)
//   } catch (e) {
//     console.error(e)
//     return
//   }
//   const text = await response.text()
//   const { document } = new JSDOM(text)
//   const node = document.querySelector('ol.sizes-list > li:last-child li:last-child > a')
//   console.log(node)

// }

// dequeue()
