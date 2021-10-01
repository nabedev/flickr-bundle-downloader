"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var browser = require("webextension-polyfill");
var timer = setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('interval');
                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 1000); })];
            case 1:
                _a.sent();
                console.log('resolve');
                return [2 /*return*/];
        }
    });
}); }, 2000);
browser.runtime.onMessage.addListener(function (message) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // download押下でストレージに追加
        console.log(message);
        // キャンセル押下でストレージ削除
        if (message.action === 'terminated') {
            console.log('clearInterval');
            clearInterval(timer);
        }
        return [2 /*return*/];
    });
}); });
// const parseDownloadLink = async(url: string): Promise<void> => {
//   console.log(`fetch ${url}`)
//   let response
//   try {
//     response = await fetch(url)
//   } catch (e) {
//     console.error(e)
//     return
//   }
//   const text = await response.text()
//   const dom = new JSDOM(text)
//   const src = dom.window.document.querySelector<HTMLImageElement>('#allsizes-photo > img')?.src
//   if (!src) {
//     console.error('img link not found')
//     return
//   }
//   const downloadResult = await browser.downloads.download({url: src})
//   console.log(downloadResult)
// }
// let i = 0
// const worker = async (): Promise<void> => {
//   if (i > 5) return
//   const { queue } = await browser.storage.sync.get('queue')
//   if (queue === undefined) return
//   const job = queue.find(data => data.status === 'inqueue')
//   if (job === undefined) return
//   console.log(job)
//   const requestURL = `https://www.flickr.com/${job.url.replace('/in/dateposted/', '/sizes/l/')}`
//   console.log(requestURL)
//   let response
//   try {
//     response = await fetch(requestURL)
//   } catch (e) {
//     console.error(e)
//     return
//   }
//   const responseText = await response.text()
//   const dom = new JSDOM(responseText)
//   const imgLink = dom.window.document.querySelector<HTMLAnchorElement>('ol.sizes-list > li:last-child li:last-child > a')?.href
//   if (!imgLink) {
//     console.error('link not found')
//     return
//   }
//   console.log(imgLink)
//   await parseDownloadLink(`https://www.flickr.com${imgLink}`)
//   i += 1
//   worker()
// }
// worker()
