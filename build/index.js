/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,s,o){var a,r=arguments.length,l=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,s,o);else for(var i=e.length-1;i>=0;i--)(a=e[i])&&(l=(r<3?a(l):r>3?a(t,s,l):a(t,s))||l);return r>3&&l&&Object.defineProperty(t,s,l),l
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new Map;class a{constructor(e,t){if(this._$cssResult$=!0,t!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=o.get(this.cssText);return t&&void 0===e&&(o.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new a("string"==typeof e?e:e+"",s))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l,i;const c={toAttribute(e,t){switch(t){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},n=(e,t)=>t!==e&&(t==t||e==e),m={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:n};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,s)=>{const o=this._$Eh(s,t);void 0!==o&&(this._$Eu.set(o,s),e.push(o))})),e}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,s,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of t)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eh(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ev=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,s;(null!==(t=this._$Em)&&void 0!==t?t:this._$Em=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(s=e.hostConnected)||void 0===s||s.call(e))}removeController(e){var t;null===(t=this._$Em)||void 0===t||t.splice(this._$Em.indexOf(e)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),o=window.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$Eg(e,t,s=m){var o,a;const r=this.constructor._$Eh(e,s);if(void 0!==r&&!0===s.reflect){const l=(null!==(a=null===(o=s.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==a?a:c.toAttribute)(t,s.type);this._$Ei=e,null==l?this.removeAttribute(r):this.setAttribute(r,l),this._$Ei=null}}_$AK(e,t){var s,o,a;const r=this.constructor,l=r._$Eu.get(e);if(void 0!==l&&this._$Ei!==l){const e=r.getPropertyOptions(l),i=e.converter,n=null!==(a=null!==(o=null===(s=i)||void 0===s?void 0:s.fromAttribute)&&void 0!==o?o:"function"==typeof i?i:null)&&void 0!==a?a:c.fromAttribute;this._$Ei=l,this[l]=n(t,e.type),this._$Ei=null}}requestUpdate(e,t,s){let o=!0;void 0!==e&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||n)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===s.reflect&&this._$Ei!==e&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(e,s))):o=!1),!this.isUpdatePending&&o&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),null===(e=this._$Em)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(s)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Em)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(e){return!0}update(e){void 0!==this._$ES&&(this._$ES.forEach(((e,t)=>this._$Eg(t,this[t],e))),this._$ES=void 0),this._$ET()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var p,g;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null===(l=globalThis.reactiveElementPolyfillSupport)||void 0===l||l.call(globalThis,{ReactiveElement:u}),(null!==(i=globalThis.reactiveElementVersions)&&void 0!==i?i:globalThis.reactiveElementVersions=[]).push("1.0.0");const d=globalThis.trustedTypes,h=d?d.createPolicy("lit-html",{createHTML:e=>e}):void 0,b=`lit$${(Math.random()+"").slice(9)}$`,v="?"+b,f=`<${v}>`,y=document,x=(e="")=>y.createComment(e),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,$=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,A=/>/g,S=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,C=/"/g,E=/^(?:script|style|textarea)$/i,T=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),M=new WeakMap,P=y.createTreeWalker(y,129,null,!1);class U{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let a=0,r=0;const l=e.length-1,i=this.parts,[c,n]=((e,t)=>{const s=e.length-1,o=[];let a,r=2===t?"<svg>":"",l=w;for(let t=0;t<s;t++){const s=e[t];let i,c,n=-1,m=0;for(;m<s.length&&(l.lastIndex=m,c=l.exec(s),null!==c);)m=l.lastIndex,l===w?"!--"===c[1]?l=_:void 0!==c[1]?l=A:void 0!==c[2]?(E.test(c[2])&&(a=RegExp("</"+c[2],"g")),l=S):void 0!==c[3]&&(l=S):l===S?">"===c[0]?(l=null!=a?a:w,n=-1):void 0===c[1]?n=-2:(n=l.lastIndex-c[2].length,i=c[1],l=void 0===c[3]?S:'"'===c[3]?C:k):l===C||l===k?l=S:l===_||l===A?l=w:(l=S,a=void 0);const u=l===S&&e[t+1].startsWith("/>")?" ":"";r+=l===w?s+f:n>=0?(o.push(i),s.slice(0,n)+"$lit$"+s.slice(n)+b+u):s+b+(-2===n?(o.push(void 0),t):u)}const i=r+(e[s]||"<?>")+(2===t?"</svg>":"");return[void 0!==h?h.createHTML(i):i,o]})(e,t);if(this.el=U.createElement(c,s),P.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=P.nextNode())&&i.length<l;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(b)){const s=n[r++];if(e.push(t),void 0!==s){const e=o.getAttribute(s.toLowerCase()+"$lit$").split(b),t=/([.?@])?(.*)/.exec(s);i.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?O:"?"===t[1]?D:"@"===t[1]?F:B})}else i.push({type:6,index:a})}for(const t of e)o.removeAttribute(t)}if(E.test(o.tagName)){const e=o.textContent.split(b),t=e.length-1;if(t>0){o.textContent=d?d.emptyScript:"";for(let s=0;s<t;s++)o.append(e[s],x()),P.nextNode(),i.push({type:2,index:++a});o.append(e[t],x())}}}else if(8===o.nodeType)if(o.data===v)i.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(b,e+1));)i.push({type:7,index:a}),e+=b.length-1}a++}}static createElement(e,t){const s=y.createElement("template");return s.innerHTML=e,s}}function N(e,t,s=e,o){var a,r,l,i;if(t===T)return t;let c=void 0!==o?null===(a=s._$Cl)||void 0===a?void 0:a[o]:s._$Cu;const n=z(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==n&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===n?c=void 0:(c=new n(e),c._$AT(e,s,o)),void 0!==o?(null!==(l=(i=s)._$Cl)&&void 0!==l?l:i._$Cl=[])[o]=c:s._$Cu=c),void 0!==c&&(t=N(e,c._$AS(e,t.values),c,o)),t}class R{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:o}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:y).importNode(s,!0);P.currentNode=a;let r=P.nextNode(),l=0,i=0,c=o[0];for(;void 0!==c;){if(l===c.index){let t;2===c.type?t=new L(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new I(r,this,e)),this.v.push(t),c=o[++i]}l!==(null==c?void 0:c.index)&&(r=P.nextNode(),l++)}return a}m(e){let t=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class L{constructor(e,t,s,o){var a;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cg=null===(a=null==o?void 0:o.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),z(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==T&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return $(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==H&&z(this._$AH)?this._$AA.nextSibling.data=e:this.S(y.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:o}=e,a="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=U.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.m(s);else{const e=new R(a,this),t=e.p(this.options);e.m(s),this.S(t),this._$AH=e}}_$AC(e){let t=M.get(e.strings);return void 0===t&&M.set(e.strings,t=new U(e)),t}M(e){$(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const a of e)o===t.length?t.push(s=new L(this.A(x()),this.A(x()),this,this.options)):s=t[o],s._$AI(a),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class B{constructor(e,t,s,o,a){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,o){const a=this.strings;let r=!1;if(void 0===a)e=N(this,e,t,0),r=!z(e)||e!==this._$AH&&e!==T,r&&(this._$AH=e);else{const o=e;let l,i;for(e=a[0],l=0;l<a.length-1;l++)i=N(this,o[s+l],t,l),i===T&&(i=this._$AH[l]),r||(r=!z(i)||i!==this._$AH[l]),i===H?e=H:e!==H&&(e+=(null!=i?i:"")+a[l+1]),this._$AH[l]=i}r&&!o&&this.k(e)}k(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class O extends B{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===H?void 0:e}}class D extends B{constructor(){super(...arguments),this.type=4}k(e){e&&e!==H?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class F extends B{constructor(e,t,s,o,a){super(e,t,s,o,a),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=N(this,e,t,0))&&void 0!==s?s:H)===T)return;const o=this._$AH,a=e===H&&o!==H||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==H&&(o===H||a);a&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class I{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q,j;null===(p=globalThis.litHtmlPolyfillSupport)||void 0===p||p.call(globalThis,U,L),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.0.0");const V=globalThis.trustedTypes,K=V?V.createPolicy("lit-html",{createHTML:e=>e}):void 0,W=`lit$${(Math.random()+"").slice(9)}$`,G="?"+W,Z=`<${G}>`,J=document,Q=(e="")=>J.createComment(e),Y=e=>null===e||"object"!=typeof e&&"function"!=typeof e,X=Array.isArray,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,te=/-->/g,se=/>/g,oe=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ae=/'/g,re=/"/g,le=/^(?:script|style|textarea)$/i,ie=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),ce=Symbol.for("lit-noChange"),ne=Symbol.for("lit-nothing"),me=new WeakMap,ue=J.createTreeWalker(J,129,null,!1),pe=(e,t)=>{const s=e.length-1,o=[];let a,r=2===t?"<svg>":"",l=ee;for(let t=0;t<s;t++){const s=e[t];let i,c,n=-1,m=0;for(;m<s.length&&(l.lastIndex=m,c=l.exec(s),null!==c);)m=l.lastIndex,l===ee?"!--"===c[1]?l=te:void 0!==c[1]?l=se:void 0!==c[2]?(le.test(c[2])&&(a=RegExp("</"+c[2],"g")),l=oe):void 0!==c[3]&&(l=oe):l===oe?">"===c[0]?(l=null!=a?a:ee,n=-1):void 0===c[1]?n=-2:(n=l.lastIndex-c[2].length,i=c[1],l=void 0===c[3]?oe:'"'===c[3]?re:ae):l===re||l===ae?l=oe:l===te||l===se?l=ee:(l=oe,a=void 0);const u=l===oe&&e[t+1].startsWith("/>")?" ":"";r+=l===ee?s+Z:n>=0?(o.push(i),s.slice(0,n)+"$lit$"+s.slice(n)+W+u):s+W+(-2===n?(o.push(void 0),t):u)}const i=r+(e[s]||"<?>")+(2===t?"</svg>":"");return[void 0!==K?K.createHTML(i):i,o]};class ge{constructor({strings:e,_$litType$:t},s){let o;this.parts=[];let a=0,r=0;const l=e.length-1,i=this.parts,[c,n]=pe(e,t);if(this.el=ge.createElement(c,s),ue.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(o=ue.nextNode())&&i.length<l;){if(1===o.nodeType){if(o.hasAttributes()){const e=[];for(const t of o.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(W)){const s=n[r++];if(e.push(t),void 0!==s){const e=o.getAttribute(s.toLowerCase()+"$lit$").split(W),t=/([.?@])?(.*)/.exec(s);i.push({type:1,index:a,name:t[2],strings:e,ctor:"."===t[1]?fe:"?"===t[1]?ye:"@"===t[1]?xe:ve})}else i.push({type:6,index:a})}for(const t of e)o.removeAttribute(t)}if(le.test(o.tagName)){const e=o.textContent.split(W),t=e.length-1;if(t>0){o.textContent=V?V.emptyScript:"";for(let s=0;s<t;s++)o.append(e[s],Q()),ue.nextNode(),i.push({type:2,index:++a});o.append(e[t],Q())}}}else if(8===o.nodeType)if(o.data===G)i.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(W,e+1));)i.push({type:7,index:a}),e+=W.length-1}a++}}static createElement(e,t){const s=J.createElement("template");return s.innerHTML=e,s}}function de(e,t,s=e,o){var a,r,l,i;if(t===ce)return t;let c=void 0!==o?null===(a=s._$Cl)||void 0===a?void 0:a[o]:s._$Cu;const n=Y(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==n&&(null===(r=null==c?void 0:c._$AO)||void 0===r||r.call(c,!1),void 0===n?c=void 0:(c=new n(e),c._$AT(e,s,o)),void 0!==o?(null!==(l=(i=s)._$Cl)&&void 0!==l?l:i._$Cl=[])[o]=c:s._$Cu=c),void 0!==c&&(t=de(e,c._$AS(e,t.values),c,o)),t}class he{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:s},parts:o}=this._$AD,a=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:J).importNode(s,!0);ue.currentNode=a;let r=ue.nextNode(),l=0,i=0,c=o[0];for(;void 0!==c;){if(l===c.index){let t;2===c.type?t=new be(r,r.nextSibling,this,e):1===c.type?t=new c.ctor(r,c.name,c.strings,this,e):6===c.type&&(t=new ze(r,this,e)),this.v.push(t),c=o[++i]}l!==(null==c?void 0:c.index)&&(r=ue.nextNode(),l++)}return a}m(e){let t=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class be{constructor(e,t,s,o){var a;this.type=2,this._$AH=ne,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=o,this._$Cg=null===(a=null==o?void 0:o.isConnected)||void 0===a||a}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=de(this,e,t),Y(e)?e===ne||null==e||""===e?(this._$AH!==ne&&this._$AR(),this._$AH=ne):e!==this._$AH&&e!==ce&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.S(e):(e=>{var t;return X(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==ne&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.S(J.createTextNode(e)),this._$AH=e}T(e){var t;const{values:s,_$litType$:o}=e,a="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=ge.createElement(o.h,this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===a)this._$AH.m(s);else{const e=new he(a,this),t=e.p(this.options);e.m(s),this.S(t),this._$AH=e}}_$AC(e){let t=me.get(e.strings);return void 0===t&&me.set(e.strings,t=new ge(e)),t}M(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,o=0;for(const a of e)o===t.length?t.push(s=new be(this.A(Q()),this.A(Q()),this,this.options)):s=t[o],s._$AI(a),o++;o<t.length&&(this._$AR(s&&s._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class ve{constructor(e,t,s,o,a){this.type=1,this._$AH=ne,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=ne}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,s,o){const a=this.strings;let r=!1;if(void 0===a)e=de(this,e,t,0),r=!Y(e)||e!==this._$AH&&e!==ce,r&&(this._$AH=e);else{const o=e;let l,i;for(e=a[0],l=0;l<a.length-1;l++)i=de(this,o[s+l],t,l),i===ce&&(i=this._$AH[l]),r||(r=!Y(i)||i!==this._$AH[l]),i===ne?e=ne:e!==ne&&(e+=(null!=i?i:"")+a[l+1]),this._$AH[l]=i}r&&!o&&this.k(e)}k(e){e===ne?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class fe extends ve{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===ne?void 0:e}}class ye extends ve{constructor(){super(...arguments),this.type=4}k(e){e&&e!==ne?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class xe extends ve{constructor(e,t,s,o,a){super(e,t,s,o,a),this.type=5}_$AI(e,t=this){var s;if((e=null!==(s=de(this,e,t,0))&&void 0!==s?s:ne)===ce)return;const o=this._$AH,a=e===ne&&o!==ne||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==ne&&(o===ne||a);a&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==s?s:this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){de(this,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $e,we,_e;null===(q=globalThis.litHtmlPolyfillSupport)||void 0===q||q.call(globalThis,ge,be),(null!==(j=globalThis.litHtmlVersions)&&void 0!==j?j:globalThis.litHtmlVersions=[]).push("2.0.0");class Ae extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,s)=>{var o,a;const r=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:t;let l=r._$litPart$;if(void 0===l){const e=null!==(a=null==s?void 0:s.renderBefore)&&void 0!==a?a:null;r._$litPart$=l=new be(t.insertBefore(Q(),e),e,void 0,null!=s?s:{})}return l._$AI(e),l})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return ce}}Ae.finalized=!0,Ae._$litElement$=!0,null===($e=globalThis.litElementHydrateSupport)||void 0===$e||$e.call(globalThis,{LitElement:Ae}),null===(we=globalThis.litElementPolyfillSupport)||void 0===we||we.call(globalThis,{LitElement:Ae}),(null!==(_e=globalThis.litElementVersions)&&void 0!==_e?_e:globalThis.litElementVersions=[]).push("3.0.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Se=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(s){s.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const ke=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol();class Ee{constructor(e,t){if(t!==Ce)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ke?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Te=(e,...t)=>{const s=t.reduce(((t,s,o)=>t+(e=>{if(e instanceof Ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[o+1]),e[0]);return new Ee(s,Ce)};let He;const Me=function(e,...t){return He?He(e,...t):t.reduce(((t,s,o)=>t+s+e[o+1]),e[0])};var Pe=Te`
:host,:root{--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1;--spectrum-global-color-celery-400:#4bc35f;--spectrum-global-color-celery-500:#44b556;--spectrum-global-color-celery-600:#3da74e;--spectrum-global-color-celery-700:#379947;--spectrum-global-color-chartreuse-400:#8ede49;--spectrum-global-color-chartreuse-500:#85d044;--spectrum-global-color-chartreuse-600:#7cc33f;--spectrum-global-color-chartreuse-700:#73b53a;--spectrum-global-color-yellow-400:#edcc00;--spectrum-global-color-yellow-500:#dfbf00;--spectrum-global-color-yellow-600:#d2b200;--spectrum-global-color-yellow-700:#c4a600;--spectrum-global-color-magenta-400:#e2499d;--spectrum-global-color-magenta-500:#d83790;--spectrum-global-color-magenta-600:#ca2982;--spectrum-global-color-magenta-700:#bc1c74;--spectrum-global-color-fuchsia-400:#cf3edc;--spectrum-global-color-fuchsia-500:#c038cc;--spectrum-global-color-fuchsia-600:#b130bd;--spectrum-global-color-fuchsia-700:#a228ad;--spectrum-global-color-purple-400:#9d64e1;--spectrum-global-color-purple-500:#9256d9;--spectrum-global-color-purple-600:#864ccc;--spectrum-global-color-purple-700:#7a42bf;--spectrum-global-color-indigo-400:#7575f1;--spectrum-global-color-indigo-500:#6767ec;--spectrum-global-color-indigo-600:#5c5ce0;--spectrum-global-color-indigo-700:#5151d3;--spectrum-global-color-seafoam-400:#20a3a8;--spectrum-global-color-seafoam-500:#1b959a;--spectrum-global-color-seafoam-600:#16878c;--spectrum-global-color-seafoam-700:#0f797d;--spectrum-global-color-red-400:#ec5b62;--spectrum-global-color-red-500:#e34850;--spectrum-global-color-red-600:#d7373f;--spectrum-global-color-red-700:#c9252d;--spectrum-global-color-orange-400:#f29423;--spectrum-global-color-orange-500:#e68619;--spectrum-global-color-orange-600:#da7b11;--spectrum-global-color-orange-700:#cb6f10;--spectrum-global-color-green-400:#33ab84;--spectrum-global-color-green-500:#2d9d78;--spectrum-global-color-green-600:#268e6c;--spectrum-global-color-green-700:#12805c;--spectrum-global-color-blue-400:#378ef0;--spectrum-global-color-blue-500:#2680eb;--spectrum-global-color-blue-600:#1473e6;--spectrum-global-color-blue-700:#0d66d0;--spectrum-global-color-gray-50:#fff;--spectrum-global-color-gray-75:#fff;--spectrum-global-color-gray-100:#fff;--spectrum-global-color-gray-200:#f4f4f4;--spectrum-global-color-gray-300:#eaeaea;--spectrum-global-color-gray-400:#d3d3d3;--spectrum-global-color-gray-500:#bcbcbc;--spectrum-global-color-gray-600:#959595;--spectrum-global-color-gray-700:#747474;--spectrum-global-color-gray-800:#505050;--spectrum-global-color-gray-900:#323232;--spectrum-alias-background-color-primary:var(
--spectrum-global-color-gray-50
);--spectrum-alias-background-color-secondary:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-tertiary:var(
--spectrum-global-color-gray-300
);--spectrum-alias-background-color-modal-overlay:rgba(0,0,0,0.4);--spectrum-alias-dropshadow-color:rgba(0,0,0,0.15);--spectrum-alias-background-color-hover-overlay:rgba(50,50,50,0.04);--spectrum-alias-highlight-hover:rgba(50,50,50,0.06);--spectrum-alias-highlight-active:rgba(50,50,50,0.1);--spectrum-alias-highlight-selected:rgba(38,128,235,0.1);--spectrum-alias-highlight-selected-hover:rgba(38,128,235,0.2);--spectrum-alias-text-highlight-color:rgba(38,128,235,0.2);--spectrum-alias-background-color-quickactions:hsla(0,0%,100%,0.9);--spectrum-alias-border-color-selected:var(
--spectrum-global-color-blue-500
);--spectrum-alias-radial-reaction-color-default:rgba(80,80,80,0.6);--spectrum-alias-pasteboard-background-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-appframe-border-color:var(
--spectrum-global-color-gray-300
);--spectrum-alias-appframe-separator-color:var(
--spectrum-global-color-gray-300
);--spectrum-colorarea-border-color:rgba(50,50,50,0.1);--spectrum-colorarea-border-color-hover:rgba(50,50,50,0.1);--spectrum-colorarea-border-color-down:rgba(50,50,50,0.1);--spectrum-colorarea-border-color-key-focus:rgba(50,50,50,0.1);--spectrum-colorslider-border-color:rgba(50,50,50,0.1);--spectrum-colorslider-border-color-hover:rgba(50,50,50,0.1);--spectrum-colorslider-border-color-down:rgba(50,50,50,0.1);--spectrum-colorslider-border-color-key-focus:rgba(50,50,50,0.1);--spectrum-colorslider-vertical-border-color:rgba(50,50,50,0.1);--spectrum-colorslider-vertical-border-color-hover:rgba(50,50,50,0.1);--spectrum-colorslider-vertical-border-color-down:rgba(50,50,50,0.1);--spectrum-colorslider-vertical-border-color-key-focus:rgba(50,50,50,0.1);--spectrum-colorwheel-border-color:rgba(50,50,50,0.1);--spectrum-colorwheel-border-color-hover:rgba(50,50,50,0.1);--spectrum-colorwheel-border-color-down:rgba(50,50,50,0.1);--spectrum-colorwheel-border-color-key-focus:rgba(50,50,50,0.1);--spectrum-miller-column-item-background-color-selected:rgba(38,128,235,0.1);--spectrum-miller-column-item-background-color-selected-hover:rgba(38,128,235,0.2);--spectrum-well-background-color:rgba(80,80,80,0.02);--spectrum-well-border-color:rgba(50,50,50,0.05)}
`;var Ue=Te`
:host,:root{--spectrum-global-animation-duration-0:0ms;--spectrum-global-animation-duration-100:130ms;--spectrum-global-animation-duration-200:160ms;--spectrum-global-animation-duration-300:190ms;--spectrum-global-animation-duration-400:220ms;--spectrum-global-animation-duration-500:250ms;--spectrum-global-animation-duration-600:300ms;--spectrum-global-animation-duration-700:350ms;--spectrum-global-animation-duration-800:400ms;--spectrum-global-animation-duration-900:450ms;--spectrum-global-animation-duration-1000:500ms;--spectrum-global-animation-duration-2000:1000ms;--spectrum-global-animation-duration-4000:2000ms;--spectrum-global-animation-ease-in-out:cubic-bezier(0.45,0,0.4,1);--spectrum-global-animation-ease-in:cubic-bezier(0.5,0,1,1);--spectrum-global-animation-ease-out:cubic-bezier(0,0,0.4,1);--spectrum-global-animation-linear:cubic-bezier(0,0,1,1);--spectrum-global-color-status:Verified;--spectrum-global-color-version:5.1;--spectrum-global-color-static-black:#000;--spectrum-global-color-static-white:#fff;--spectrum-global-color-static-blue:#1473e6;--spectrum-global-color-static-gray-50:#fff;--spectrum-global-color-static-gray-75:#fff;--spectrum-global-color-static-gray-100:#fff;--spectrum-global-color-static-gray-200:#f4f4f4;--spectrum-global-color-static-gray-300:#eaeaea;--spectrum-global-color-static-gray-400:#d3d3d3;--spectrum-global-color-static-gray-500:#bcbcbc;--spectrum-global-color-static-gray-600:#959595;--spectrum-global-color-static-gray-700:#747474;--spectrum-global-color-static-gray-800:#505050;--spectrum-global-color-static-gray-900:#323232;--spectrum-global-color-static-blue-200:#5aa9fa;--spectrum-global-color-static-blue-300:#4b9cf5;--spectrum-global-color-static-blue-400:#378ef0;--spectrum-global-color-static-blue-500:#2680eb;--spectrum-global-color-static-blue-600:#1473e6;--spectrum-global-color-static-blue-700:#0d66d0;--spectrum-global-color-static-blue-800:#095aba;--spectrum-global-color-static-red-400:#ec5b62;--spectrum-global-color-static-red-500:#e34850;--spectrum-global-color-static-red-600:#d7373f;--spectrum-global-color-static-red-700:#c9252d;--spectrum-global-color-static-red-800:#bb121a;--spectrum-global-color-static-orange-400:#f29423;--spectrum-global-color-static-orange-500:#e68619;--spectrum-global-color-static-orange-600:#da7b11;--spectrum-global-color-static-orange-700:#cb6f10;--spectrum-global-color-static-orange-800:#bd640d;--spectrum-global-color-static-green-400:#33ab84;--spectrum-global-color-static-green-500:#2d9d78;--spectrum-global-color-static-green-600:#268e6c;--spectrum-global-color-static-green-700:#12805c;--spectrum-global-color-static-green-800:#107154;--spectrum-global-color-static-celery-200:#58e06f;--spectrum-global-color-static-celery-300:#51d267;--spectrum-global-color-static-celery-400:#4bc35f;--spectrum-global-color-static-celery-500:#44b556;--spectrum-global-color-static-celery-600:#3da74e;--spectrum-global-color-static-celery-700:#379947;--spectrum-global-color-static-celery-800:#318b40;--spectrum-global-color-static-chartreuse-300:#9bec54;--spectrum-global-color-static-chartreuse-400:#8ede49;--spectrum-global-color-static-chartreuse-500:#85d044;--spectrum-global-color-static-chartreuse-600:#7cc33f;--spectrum-global-color-static-chartreuse-700:#73b53a;--spectrum-global-color-static-chartreuse-800:#6aa834;--spectrum-global-color-static-yellow-200:#ffe22e;--spectrum-global-color-static-yellow-300:#fad900;--spectrum-global-color-static-yellow-400:#edcc00;--spectrum-global-color-static-yellow-500:#dfbf00;--spectrum-global-color-static-yellow-600:#d2b200;--spectrum-global-color-static-yellow-700:#c4a600;--spectrum-global-color-static-yellow-800:#b79900;--spectrum-global-color-static-magenta-200:#f56bb7;--spectrum-global-color-static-magenta-300:#ec5aaa;--spectrum-global-color-static-magenta-400:#e2499d;--spectrum-global-color-static-magenta-500:#d83790;--spectrum-global-color-static-magenta-600:#ca2982;--spectrum-global-color-static-magenta-700:#bc1c74;--spectrum-global-color-static-magenta-800:#ae0e66;--spectrum-global-color-static-fuchsia-400:#cf3edc;--spectrum-global-color-static-fuchsia-500:#c038cc;--spectrum-global-color-static-fuchsia-600:#b130bd;--spectrum-global-color-static-fuchsia-700:#a228ad;--spectrum-global-color-static-fuchsia-800:#93219e;--spectrum-global-color-static-purple-400:#9d64e1;--spectrum-global-color-static-purple-500:#9256d9;--spectrum-global-color-static-purple-600:#864ccc;--spectrum-global-color-static-purple-700:#7a42bf;--spectrum-global-color-static-purple-800:#6f38b1;--spectrum-global-color-static-indigo-200:#9090fa;--spectrum-global-color-static-indigo-300:#8282f6;--spectrum-global-color-static-indigo-400:#7575f1;--spectrum-global-color-static-indigo-500:#6767ec;--spectrum-global-color-static-indigo-600:#5c5ce0;--spectrum-global-color-static-indigo-700:#5151d3;--spectrum-global-color-static-indigo-800:#4646c6;--spectrum-global-color-static-seafoam-200:#26c0c7;--spectrum-global-color-static-seafoam-300:#23b2b8;--spectrum-global-color-static-seafoam-400:#20a3a8;--spectrum-global-color-static-seafoam-500:#1b959a;--spectrum-global-color-static-seafoam-600:#16878c;--spectrum-global-color-static-seafoam-700:#0f797d;--spectrum-global-color-static-seafoam-800:#096c6f;--spectrum-global-color-opacity-100:1;--spectrum-global-color-opacity-90:0.9;--spectrum-global-color-opacity-80:0.8;--spectrum-global-color-opacity-60:0.6;--spectrum-global-color-opacity-50:0.5;--spectrum-global-color-opacity-42:0.42;--spectrum-global-color-opacity-40:0.4;--spectrum-global-color-opacity-30:0.3;--spectrum-global-color-opacity-25:0.25;--spectrum-global-color-opacity-20:0.2;--spectrum-global-color-opacity-15:0.15;--spectrum-global-color-opacity-10:0.1;--spectrum-global-color-opacity-8:0.08;--spectrum-global-color-opacity-7:0.07;--spectrum-global-color-opacity-6:0.06;--spectrum-global-color-opacity-5:0.05;--spectrum-global-color-opacity-4:0.04;--spectrum-semantic-negative-color-background:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-color-default:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-color-state-hover:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-dark:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-border:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-color-icon:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-status:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-color-text-large:var(
--spectrum-global-color-red-500
);--spectrum-semantic-negative-color-text-small:var(
--spectrum-global-color-red-600
);--spectrum-semantic-negative-color-state-down:var(
--spectrum-global-color-red-700
);--spectrum-semantic-negative-color-state-focus:var(
--spectrum-global-color-red-400
);--spectrum-semantic-negative-background-color-default:var(
--spectrum-global-color-static-red-600
);--spectrum-semantic-negative-background-color-hover:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-negative-background-color-down:var(
--spectrum-global-color-static-red-800
);--spectrum-semantic-negative-background-color-key-focus:var(
--spectrum-global-color-static-red-700
);--spectrum-semantic-notice-color-background:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-color-default:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-color-dark:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-border:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-color-icon:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-status:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-color-text-large:var(
--spectrum-global-color-orange-500
);--spectrum-semantic-notice-color-text-small:var(
--spectrum-global-color-orange-600
);--spectrum-semantic-notice-color-state-down:var(
--spectrum-global-color-orange-700
);--spectrum-semantic-notice-color-state-focus:var(
--spectrum-global-color-orange-400
);--spectrum-semantic-notice-background-color-default:var(
--spectrum-global-color-static-orange-600
);--spectrum-semantic-notice-background-color-hover:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-notice-background-color-down:var(
--spectrum-global-color-static-orange-800
);--spectrum-semantic-notice-background-color-key-focus:var(
--spectrum-global-color-static-orange-700
);--spectrum-semantic-positive-color-background:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-color-default:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-color-dark:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-border:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-color-icon:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-status:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-color-text-large:var(
--spectrum-global-color-green-500
);--spectrum-semantic-positive-color-text-small:var(
--spectrum-global-color-green-600
);--spectrum-semantic-positive-color-state-down:var(
--spectrum-global-color-green-700
);--spectrum-semantic-positive-color-state-focus:var(
--spectrum-global-color-green-400
);--spectrum-semantic-positive-background-color-default:var(
--spectrum-global-color-static-green-600
);--spectrum-semantic-positive-background-color-hover:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-positive-background-color-down:var(
--spectrum-global-color-static-green-800
);--spectrum-semantic-positive-background-color-key-focus:var(
--spectrum-global-color-static-green-700
);--spectrum-semantic-informative-color-background:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-color-default:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-color-dark:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-border:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-color-icon:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-status:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-color-text-large:var(
--spectrum-global-color-blue-500
);--spectrum-semantic-informative-color-text-small:var(
--spectrum-global-color-blue-600
);--spectrum-semantic-informative-color-state-down:var(
--spectrum-global-color-blue-700
);--spectrum-semantic-informative-color-state-focus:var(
--spectrum-global-color-blue-400
);--spectrum-semantic-informative-background-color-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-informative-background-color-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-informative-background-color-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-informative-background-color-key-focus:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-color-background-default:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-cta-color-background-hover:var(
--spectrum-global-color-static-blue-700
);--spectrum-semantic-cta-color-background-down:var(
--spectrum-global-color-static-blue-800
);--spectrum-semantic-cta-color-background-key-focus:var(
--spectrum-global-color-static-blue-600
);--spectrum-semantic-neutral-background-color-default:var(
--spectrum-global-color-static-gray-700
);--spectrum-semantic-neutral-background-color-hover:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-neutral-background-color-down:var(
--spectrum-global-color-static-gray-900
);--spectrum-semantic-neutral-background-color-key-focus:var(
--spectrum-global-color-static-gray-800
);--spectrum-semantic-presence-color-1:var(
--spectrum-global-color-static-red-500
);--spectrum-semantic-presence-color-2:var(
--spectrum-global-color-static-orange-400
);--spectrum-semantic-presence-color-3:var(
--spectrum-global-color-static-yellow-400
);--spectrum-semantic-presence-color-4:#4bcca2;--spectrum-semantic-presence-color-5:#00c7ff;--spectrum-semantic-presence-color-6:#008cb8;--spectrum-semantic-presence-color-7:#7e4bf3;--spectrum-semantic-presence-color-8:var(
--spectrum-global-color-static-fuchsia-600
);--spectrum-global-dimension-static-size-0:0px;--spectrum-global-dimension-static-size-10:1px;--spectrum-global-dimension-static-size-25:2px;--spectrum-global-dimension-static-size-40:3px;--spectrum-global-dimension-static-size-50:4px;--spectrum-global-dimension-static-size-65:5px;--spectrum-global-dimension-static-size-75:6px;--spectrum-global-dimension-static-size-85:7px;--spectrum-global-dimension-static-size-100:8px;--spectrum-global-dimension-static-size-115:9px;--spectrum-global-dimension-static-size-125:10px;--spectrum-global-dimension-static-size-130:11px;--spectrum-global-dimension-static-size-150:12px;--spectrum-global-dimension-static-size-160:13px;--spectrum-global-dimension-static-size-175:14px;--spectrum-global-dimension-static-size-200:16px;--spectrum-global-dimension-static-size-225:18px;--spectrum-global-dimension-static-size-250:20px;--spectrum-global-dimension-static-size-275:22px;--spectrum-global-dimension-static-size-300:24px;--spectrum-global-dimension-static-size-325:26px;--spectrum-global-dimension-static-size-400:32px;--spectrum-global-dimension-static-size-450:36px;--spectrum-global-dimension-static-size-500:40px;--spectrum-global-dimension-static-size-550:44px;--spectrum-global-dimension-static-size-600:48px;--spectrum-global-dimension-static-size-700:56px;--spectrum-global-dimension-static-size-800:64px;--spectrum-global-dimension-static-size-900:72px;--spectrum-global-dimension-static-size-1000:80px;--spectrum-global-dimension-static-size-1200:96px;--spectrum-global-dimension-static-size-1700:136px;--spectrum-global-dimension-static-size-2400:192px;--spectrum-global-dimension-static-size-2500:200px;--spectrum-global-dimension-static-size-2600:208px;--spectrum-global-dimension-static-size-2800:224px;--spectrum-global-dimension-static-size-3200:256px;--spectrum-global-dimension-static-size-3400:272px;--spectrum-global-dimension-static-size-3500:280px;--spectrum-global-dimension-static-size-3600:288px;--spectrum-global-dimension-static-size-3800:304px;--spectrum-global-dimension-static-size-4600:368px;--spectrum-global-dimension-static-size-5000:400px;--spectrum-global-dimension-static-size-6000:480px;--spectrum-global-dimension-static-size-16000:1280px;--spectrum-global-dimension-static-font-size-50:11px;--spectrum-global-dimension-static-font-size-75:12px;--spectrum-global-dimension-static-font-size-100:14px;--spectrum-global-dimension-static-font-size-150:15px;--spectrum-global-dimension-static-font-size-200:16px;--spectrum-global-dimension-static-font-size-300:18px;--spectrum-global-dimension-static-font-size-400:20px;--spectrum-global-dimension-static-font-size-500:22px;--spectrum-global-dimension-static-font-size-600:25px;--spectrum-global-dimension-static-font-size-700:28px;--spectrum-global-dimension-static-font-size-800:32px;--spectrum-global-dimension-static-font-size-900:36px;--spectrum-global-dimension-static-font-size-1000:40px;--spectrum-global-dimension-static-percent-50:50%;--spectrum-global-dimension-static-percent-100:100%;--spectrum-global-dimension-static-breakpoint-xsmall:304px;--spectrum-global-dimension-static-breakpoint-small:768px;--spectrum-global-dimension-static-breakpoint-medium:1280px;--spectrum-global-dimension-static-breakpoint-large:1768px;--spectrum-global-dimension-static-breakpoint-xlarge:2160px;--spectrum-global-dimension-static-grid-columns:12;--spectrum-global-dimension-static-grid-fluid-width:100%;--spectrum-global-dimension-static-grid-fixed-max-width:1280px;--spectrum-global-font-family-base:adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-global-font-family-serif:adobe-clean-serif,"Source Serif Pro",Georgia,serif;--spectrum-global-font-family-code:"Source Code Pro",Monaco,monospace;--spectrum-global-font-weight-thin:100;--spectrum-global-font-weight-ultra-light:200;--spectrum-global-font-weight-light:300;--spectrum-global-font-weight-regular:400;--spectrum-global-font-weight-medium:500;--spectrum-global-font-weight-semi-bold:600;--spectrum-global-font-weight-bold:700;--spectrum-global-font-weight-extra-bold:800;--spectrum-global-font-weight-black:900;--spectrum-global-font-style-regular:normal;--spectrum-global-font-style-italic:italic;--spectrum-global-font-letter-spacing-none:0;--spectrum-global-font-letter-spacing-small:0.0125em;--spectrum-global-font-letter-spacing-han:0.05em;--spectrum-global-font-letter-spacing-medium:0.06em;--spectrum-global-font-line-height-large:1.7;--spectrum-global-font-line-height-medium:1.5;--spectrum-global-font-line-height-small:1.3;--spectrum-global-font-multiplier-25:0.25em;--spectrum-global-font-multiplier-75:0.75em;--spectrum-alias-border-size-thin:var(
--spectrum-global-dimension-static-size-10
);--spectrum-alias-border-size-thick:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-size-thicker:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-size-thickest:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thin:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-border-offset-thick:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-border-offset-thicker:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-border-offset-thickest:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-baseline:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-grid-gutter-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-gutter-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-gutter-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-gutter-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-gutter-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-margin-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-margin-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-margin-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-margin-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-margin-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-grid-layout-region-margin-bottom-xsmall:var(
--spectrum-global-dimension-static-size-200
);--spectrum-alias-grid-layout-region-margin-bottom-small:var(
--spectrum-global-dimension-static-size-300
);--spectrum-alias-grid-layout-region-margin-bottom-medium:var(
--spectrum-global-dimension-static-size-400
);--spectrum-alias-grid-layout-region-margin-bottom-large:var(
--spectrum-global-dimension-static-size-500
);--spectrum-alias-grid-layout-region-margin-bottom-xlarge:var(
--spectrum-global-dimension-static-size-600
);--spectrum-alias-radial-reaction-size-default:var(
--spectrum-global-dimension-static-size-550
);--spectrum-alias-font-family-ar:myriad-arabic,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-font-family-he:myriad-hebrew,adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-font-family-zh:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light","sans-serif";--spectrum-alias-font-family-zhhans:adobe-clean-han-simplified-c,source-han-simplified-c,"SimSun","Heiti SC Light","sans-serif";--spectrum-alias-font-family-ko:adobe-clean-han-korean,source-han-korean,"Malgun Gothic","Apple Gothic","sans-serif";--spectrum-alias-font-family-ja:adobe-clean-han-japanese,source-han-japanese,"Yu Gothic","\\30E1 \\30A4 \\30EA \\30AA","\\30D2 \\30E9 \\30AE \\30CE \\89D2 \\30B4  Pro W3","Hiragino Kaku Gothic Pro W3","Osaka","\\FF2D \\FF33 \\FF30 \\30B4 \\30B7 \\30C3 \\30AF","MS PGothic","sans-serif";--spectrum-alias-font-family-condensed:adobe-clean-han-traditional,source-han-traditional,"MingLiu","Heiti TC Light",adobe-clean,"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Trebuchet MS","Lucida Grande",sans-serif;--spectrum-alias-body-text-font-family:var(
--spectrum-global-font-family-base
);--spectrum-alias-body-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-body-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-button-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-component-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-han-component-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-heading-text-line-height:var(
--spectrum-global-font-line-height-small
);--spectrum-alias-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-light
);--spectrum-alias-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-heading-text-font-weight-strong-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-detail-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-detail-text-font-weight-light:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-serif-text-font-family:var(
--spectrum-global-font-family-serif
);--spectrum-alias-article-body-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-heading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-heading-text-font-weight-quiet:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-subheading-text-font-weight:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-article-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-article-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-article-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-font-family:var(
--spectrum-global-font-family-code
);--spectrum-alias-han-heading-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-han-heading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-regular-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-heading-text-font-weight-regular-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-quiet-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-light:var(
--spectrum-global-font-weight-light
);--spectrum-alias-han-heading-text-font-weight-light-emphasis:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-heading-text-font-weight-light-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-heading-text-font-weight-heavy:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-emphasis:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-heading-text-font-weight-heavy-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-body-text-line-height:var(
--spectrum-global-font-line-height-large
);--spectrum-alias-han-body-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-body-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-body-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-subheading-text-font-weight-regular:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-subheading-text-font-weight-emphasis:var(
--spectrum-global-font-weight-extra-bold
);--spectrum-alias-han-subheading-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-han-detail-text-font-weight:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-han-detail-text-font-weight-emphasis:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-han-detail-text-font-weight-strong:var(
--spectrum-global-font-weight-black
);--spectrum-alias-code-text-font-weight-regular:var(
--spectrum-global-font-weight-regular
);--spectrum-alias-code-text-font-weight-strong:var(
--spectrum-global-font-weight-bold
);--spectrum-alias-code-text-line-height:var(
--spectrum-global-font-line-height-medium
);--spectrum-alias-heading-margin-bottom:var(
--spectrum-global-font-multiplier-25
);--spectrum-alias-body-margin-bottom:var(
--spectrum-global-font-multiplier-75
);--spectrum-alias-focus-ring-gap:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-focus-ring-size:var(
--spectrum-global-dimension-static-size-25
);--spectrum-alias-loupe-entry-animation-duration:var(
--spectrum-global-animation-duration-300
);--spectrum-alias-loupe-exit-animation-duration:var(
--spectrum-global-animation-duration-300
)}:host,:root{--spectrum-alias-dropshadow-blur:var(--spectrum-global-dimension-size-50);--spectrum-alias-dropshadow-offset-y:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-font-size-default:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-layout-label-gap-size:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-pill-button-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-pill-button-text-baseline:var(
--spectrum-global-dimension-static-size-150
);--spectrum-alias-border-radius-xsmall:var(
--spectrum-global-dimension-size-10
);--spectrum-alias-border-radius-small:var(
--spectrum-global-dimension-size-25
);--spectrum-alias-border-radius-regular:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-border-radius-medium:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-border-radius-large:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-single-line-height:var(
--spectrum-global-dimension-size-400
);--spectrum-alias-single-line-width:var(
--spectrum-global-dimension-size-2400
);--spectrum-alias-item-height-s:var(--spectrum-global-dimension-size-300);--spectrum-alias-item-height-m:var(--spectrum-global-dimension-size-400);--spectrum-alias-item-height-l:var(--spectrum-global-dimension-size-500);--spectrum-alias-item-height-xl:var(--spectrum-global-dimension-size-600);--spectrum-alias-item-rounded-border-radius-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-border-radius-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-border-radius-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-border-radius-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-text-size-s:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-item-text-size-m:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-item-text-size-l:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-item-text-size-xl:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-item-text-padding-top-s:var(
--spectrum-global-dimension-static-size-50
);--spectrum-alias-item-text-padding-top-m:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-item-text-padding-top-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-text-padding-bottom-m:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-text-padding-bottom-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-text-padding-bottom-xl:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-icon-padding-top-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-top-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-top-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-top-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-icon-padding-bottom-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icon-padding-bottom-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icon-padding-bottom-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icon-padding-bottom-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-mark-padding-top-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-top-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-top-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-mark-padding-bottom-s:var(
--spectrum-global-dimension-size-40
);--spectrum-alias-item-mark-padding-bottom-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-mark-padding-bottom-xl:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-padding-s:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-padding-m:var(--spectrum-global-dimension-size-150);--spectrum-alias-item-padding-l:var(--spectrum-global-dimension-size-185);--spectrum-alias-item-padding-xl:var(--spectrum-global-dimension-size-225);--spectrum-alias-item-rounded-padding-s:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-item-rounded-padding-m:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-rounded-padding-l:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-rounded-padding-xl:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-item-icononly-padding-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-icononly-padding-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-icononly-padding-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-icononly-padding-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-rounded-workflow-padding-left-s:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-rounded-workflow-padding-left-l:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-padding-left-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-mark-padding-left-l:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-mark-padding-left-xl:var(
--spectrum-global-dimension-size-185
);--spectrum-alias-item-control-1-size-s:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-item-control-1-size-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-2-size-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-2-size-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-2-size-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-control-2-size-xxl:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-item-control-3-height-m:var(
--spectrum-global-dimension-size-175
);--spectrum-alias-item-control-3-height-l:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-item-control-3-height-xl:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-size-s:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-item-mark-size-l:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-item-mark-size-xl:var(
--spectrum-global-dimension-size-325
);--spectrum-alias-workflow-icon-size-s:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-workflow-icon-size-m:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-workflow-icon-size-xl:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-alert-size-75:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-alert-size-100:var(
--spectrum-global-dimension-size-225
);--spectrum-alias-ui-icon-alert-size-200:var(
--spectrum-global-dimension-size-250
);--spectrum-alias-ui-icon-alert-size-300:var(
--spectrum-global-dimension-size-275
);--spectrum-alias-ui-icon-triplegripper-size-100-height:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-ui-icon-doublegripper-size-100-width:var(
--spectrum-global-dimension-size-200
);--spectrum-alias-ui-icon-singlegripper-size-100-width:var(
--spectrum-global-dimension-size-300
);--spectrum-alias-ui-icon-cornertriangle-size-75:var(
--spectrum-global-dimension-size-65
);--spectrum-alias-ui-icon-cornertriangle-size-200:var(
--spectrum-global-dimension-size-75
);--spectrum-alias-ui-icon-asterisk-size-75:var(
--spectrum-global-dimension-static-size-100
);--spectrum-alias-ui-icon-asterisk-size-100:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-control-gap-s:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-control-gap-m:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-control-gap-l:var(
--spectrum-global-dimension-size-130
);--spectrum-alias-item-control-gap-xl:var(
--spectrum-global-dimension-size-160
);--spectrum-alias-item-workflow-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-workflow-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-workflow-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-workflow-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-mark-gap-s:var(--spectrum-global-dimension-size-85);--spectrum-alias-item-mark-gap-m:var(--spectrum-global-dimension-size-100);--spectrum-alias-item-mark-gap-l:var(--spectrum-global-dimension-size-115);--spectrum-alias-item-mark-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-ui-icon-gap-s:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-ui-icon-gap-m:var(
--spectrum-global-dimension-size-100
);--spectrum-alias-item-ui-icon-gap-l:var(
--spectrum-global-dimension-size-115
);--spectrum-alias-item-ui-icon-gap-xl:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-s:var(
--spectrum-global-dimension-size-50
);--spectrum-alias-item-clearbutton-gap-m:var(
--spectrum-global-dimension-size-85
);--spectrum-alias-item-clearbutton-gap-l:var(
--spectrum-global-dimension-size-125
);--spectrum-alias-item-clearbutton-gap-xl:var(
--spectrum-global-dimension-size-150
);--spectrum-alias-heading-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-han-xxxl-text-size:var(
--spectrum-global-dimension-font-size-1300
);--spectrum-alias-heading-han-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-xxxl-margin-top:var(
--spectrum-global-dimension-font-size-1200
);--spectrum-alias-heading-xxl-text-size:var(
--spectrum-global-dimension-font-size-1100
);--spectrum-alias-heading-xxl-margin-top:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-han-xxl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-han-xxl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-xl-text-size:var(
--spectrum-global-dimension-font-size-900
);--spectrum-alias-heading-xl-margin-top:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-xl-text-size:var(
--spectrum-global-dimension-font-size-800
);--spectrum-alias-heading-han-xl-margin-top:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-l-text-size:var(
--spectrum-global-dimension-font-size-700
);--spectrum-alias-heading-l-margin-top:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-han-l-text-size:var(
--spectrum-global-dimension-font-size-600
);--spectrum-alias-heading-han-l-margin-top:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-m-text-size:var(
--spectrum-global-dimension-font-size-500
);--spectrum-alias-heading-m-margin-top:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-han-m-text-size:var(
--spectrum-global-dimension-font-size-400
);--spectrum-alias-heading-han-m-margin-top:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-s-text-size:var(
--spectrum-global-dimension-font-size-300
);--spectrum-alias-heading-s-margin-top:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xs-text-size:var(
--spectrum-global-dimension-font-size-200
);--spectrum-alias-heading-xs-margin-top:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxs-text-size:var(
--spectrum-global-dimension-font-size-100
);--spectrum-alias-heading-xxs-margin-top:var(
--spectrum-global-dimension-font-size-75
);--spectrum-alias-avatar-size-50:var(--spectrum-global-dimension-size-200);--spectrum-alias-avatar-size-75:var(--spectrum-global-dimension-size-225);--spectrum-alias-avatar-size-200:var(--spectrum-global-dimension-size-275);--spectrum-alias-avatar-size-300:var(--spectrum-global-dimension-size-325);--spectrum-alias-avatar-size-500:var(--spectrum-global-dimension-size-400);--spectrum-alias-avatar-size-700:var(--spectrum-global-dimension-size-500)}:host,:root{--spectrum-alias-background-color-default:var(
--spectrum-global-color-gray-100
);--spectrum-alias-background-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-background-color-transparent:transparent;--spectrum-alias-background-color-over-background-down:hsla(0,0%,100%,0.2);--spectrum-alias-background-color-quickactions-overlay:rgba(0,0,0,0.2);--spectrum-alias-placeholder-text-color:var(
--spectrum-global-color-gray-800
);--spectrum-alias-placeholder-text-color-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-placeholder-text-color-selected:var(
--spectrum-global-color-gray-800
);--spectrum-alias-label-text-color:var(--spectrum-global-color-gray-700);--spectrum-alias-text-color:var(--spectrum-global-color-gray-800);--spectrum-alias-text-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-text-color-key-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-mouse-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-text-color-disabled:var(--spectrum-global-color-gray-500);--spectrum-alias-text-color-invalid:var(--spectrum-global-color-red-500);--spectrum-alias-text-color-selected:var(--spectrum-global-color-blue-600);--spectrum-alias-text-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-text-color-over-background:var(
--spectrum-global-color-static-white
);--spectrum-alias-text-color-over-background-disabled:hsla(0,0%,100%,0.2);--spectrum-alias-heading-text-color:var(--spectrum-global-color-gray-900);--spectrum-alias-border-color:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-hover:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-down:var(--spectrum-global-color-gray-500);--spectrum-alias-border-color-focus:var(--spectrum-global-color-blue-400);--spectrum-alias-border-color-mouse-focus:var(
--spectrum-global-color-blue-500
);--spectrum-alias-border-color-disabled:var(
--spectrum-global-color-gray-200
);--spectrum-alias-border-color-extralight:var(
--spectrum-global-color-gray-100
);--spectrum-alias-border-color-light:var(--spectrum-global-color-gray-200);--spectrum-alias-border-color-mid:var(--spectrum-global-color-gray-300);--spectrum-alias-border-color-dark:var(--spectrum-global-color-gray-400);--spectrum-alias-border-color-darker-default:var(
--spectrum-global-color-gray-600
);--spectrum-alias-border-color-darker-hover:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-darker-down:var(
--spectrum-global-color-gray-900
);--spectrum-alias-border-color-transparent:transparent;--spectrum-alias-border-color-translucent-dark:rgba(0,0,0,0.05);--spectrum-alias-border-color-translucent-darker:rgba(0,0,0,0.1);--spectrum-alias-focus-color:var(--spectrum-global-color-blue-400);--spectrum-alias-focus-ring-color:var(--spectrum-alias-focus-color);--spectrum-alias-track-color-default:var(--spectrum-global-color-gray-300);--spectrum-alias-track-color-disabled:var(
--spectrum-global-color-gray-300
);--spectrum-alias-track-color-over-background:hsla(0,0%,100%,0.2);--spectrum-alias-icon-color:var(--spectrum-global-color-gray-700);--spectrum-alias-icon-color-over-background:var(
--spectrum-global-color-static-white
);--spectrum-alias-icon-color-hover:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-down:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-focus:var(--spectrum-global-color-gray-900);--spectrum-alias-icon-color-disabled:var(--spectrum-global-color-gray-400);--spectrum-alias-icon-color-over-background-disabled:hsla(0,0%,100%,0.2);--spectrum-alias-icon-color-selected-neutral:var(
--spectrum-global-color-gray-900
);--spectrum-alias-icon-color-selected:var(--spectrum-global-color-blue-500);--spectrum-alias-icon-color-selected-hover:var(
--spectrum-global-color-blue-600
);--spectrum-alias-icon-color-selected-down:var(
--spectrum-global-color-blue-700
);--spectrum-alias-icon-color-selected-focus:var(
--spectrum-global-color-blue-600
);--spectrum-alias-image-opacity-disabled:var(
--spectrum-global-color-opacity-30
);--spectrum-alias-toolbar-background-color:var(
--spectrum-global-color-gray-100
);--spectrum-alias-colorhandle-outer-border-color:rgba(0,0,0,0.42);--spectrum-alias-code-highlight-color-default:var(
--spectrum-global-color-gray-800
);--spectrum-alias-code-highlight-color-background:var(
--spectrum-global-color-gray-75
);--spectrum-alias-code-highlight-color-keyword:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-section:var(
--spectrum-global-color-red-600
);--spectrum-alias-code-highlight-color-literal:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-attribute:var(
--spectrum-global-color-seafoam-600
);--spectrum-alias-code-highlight-color-class:var(
--spectrum-global-color-magenta-600
);--spectrum-alias-code-highlight-color-variable:var(
--spectrum-global-color-purple-600
);--spectrum-alias-code-highlight-color-title:var(
--spectrum-global-color-indigo-600
);--spectrum-alias-code-highlight-color-string:var(
--spectrum-global-color-fuchsia-600
);--spectrum-alias-code-highlight-color-function:var(
--spectrum-global-color-blue-600
);--spectrum-alias-code-highlight-color-comment:var(
--spectrum-global-color-gray-700
);--spectrum-alias-categorical-color-1:var(
--spectrum-global-color-static-seafoam-200
);--spectrum-alias-categorical-color-2:var(
--spectrum-global-color-static-indigo-700
);--spectrum-alias-categorical-color-3:var(
--spectrum-global-color-static-orange-500
);--spectrum-alias-categorical-color-4:var(
--spectrum-global-color-static-magenta-500
);--spectrum-alias-categorical-color-5:var(
--spectrum-global-color-static-indigo-200
);--spectrum-alias-categorical-color-6:var(
--spectrum-global-color-static-celery-200
);--spectrum-alias-categorical-color-7:var(
--spectrum-global-color-static-blue-500
);--spectrum-alias-categorical-color-8:var(
--spectrum-global-color-static-purple-800
);--spectrum-alias-categorical-color-9:var(
--spectrum-global-color-static-yellow-500
);--spectrum-alias-categorical-color-10:var(
--spectrum-global-color-static-orange-700
);--spectrum-alias-categorical-color-11:var(
--spectrum-global-color-static-green-600
);--spectrum-alias-categorical-color-12:var(
--spectrum-global-color-static-chartreuse-300
);--spectrum-alias-categorical-color-13:var(
--spectrum-global-color-static-blue-200
);--spectrum-alias-categorical-color-14:var(
--spectrum-global-color-static-fuchsia-500
);--spectrum-alias-categorical-color-15:var(
--spectrum-global-color-static-magenta-200
);--spectrum-alias-categorical-color-16:var(
--spectrum-global-color-static-yellow-200
)}:host,:root{font-family:var(--spectrum-alias-body-text-font-family);font-size:var(--spectrum-alias-font-size-default)}:host:lang(ar),:root:lang(ar){font-family:var(--spectrum-alias-font-family-ar)}:host:lang(he),:root:lang(he){font-family:var(--spectrum-alias-font-family-he)}:host:lang(zh-Hans),:root:lang(zh-Hans){font-family:var(--spectrum-alias-font-family-zhhans)}:host:lang(zh-Hant),:root:lang(zh-Hant){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(zh),:root:lang(zh){font-family:var(--spectrum-alias-font-family-zh)}:host:lang(ko),:root:lang(ko){font-family:var(--spectrum-alias-font-family-ko)}:host:lang(ja),:root:lang(ja){font-family:var(--spectrum-alias-font-family-ja)}:host{display:block}#scale,#theme{height:100%;width:100%}
`;const Ne=["medium","large"],Re=["light","lightest","dark","darkest"];class Le extends HTMLElement{constructor(){super(),this._color="",this._scale="",this.trackedChildren=new Set,this._updateRequested=!1,this._contextConsumers=new Map,this.attachShadow({mode:"open"});const e=document.importNode(Le.template.content,!0);this.shadowRoot.appendChild(e),this.shouldAdoptStyles(),this.addEventListener("sp-query-theme",this.onQueryTheme),this.addEventListener("sp-language-context",this._handleContextPresence),this.updateComplete=this.__createDeferredPromise()}static get observedAttributes(){return["color","scale","lang"]}attributeChangedCallback(e,t,s){t!==s&&("color"===e?this.color=s:"scale"===e?this.scale=s:"lang"===e&&s&&(this.lang=s,this._provideContext()))}requestUpdate(){void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?this.shouldAdoptStyles():window.ShadyCSS.styleElement(this)}get color(){const e=Le.themeFragmentsByKind.get("color"),{name:t}=e&&e.get("default")||{};return this._color||t||""}set color(e){if(e===this._color)return;const t=e&&Re.includes(e)?e:this.color;t!==this._color&&(this._color=t,this.requestUpdate()),t?this.setAttribute("color",t):this.removeAttribute("color")}get scale(){const e=Le.themeFragmentsByKind.get("scale"),{name:t}=e&&e.get("default")||{};return this._scale||t||""}set scale(e){if(e===this._scale)return;const t=e&&Ne.includes(e)?e:this.scale;t!==this._scale&&(this._scale=t,this.requestUpdate()),t?this.setAttribute("scale",t):this.removeAttribute("scale")}get styles(){return[...[...Le.themeFragmentsByKind.keys()].reduce(((e,t)=>{const s=Le.themeFragmentsByKind.get(t),o=(t,o)=>{const a=s.get(t);!a||o&&!this.hasAttribute(o)||e.push(a.styles)};if("app"===t||"core"===t)o(t);else{const{[t]:e}=this;o(e,t)}return e}),[])]}static get template(){return this.templateElement||(this.templateElement=document.createElement("template"),this.templateElement.innerHTML="<slot></slot>"),this.templateElement}__createDeferredPromise(){return new Promise((e=>{this.__resolve=e}))}onQueryTheme(e){if(e.defaultPrevented)return;e.preventDefault();const{detail:t}=e;t.color=this.color||void 0,t.scale=this.scale||void 0,t.lang=this.lang||document.documentElement.lang||navigator.language}connectedCallback(){this.shouldAdoptStyles(),void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this),Le.instances.add(this);const e=()=>{const{dir:e}=this;this.trackedChildren.forEach((t=>{t.setAttribute("dir","rtl"===e?e:"ltr")}))};if(this.observer||(this.observer=new MutationObserver(e)),this.observer.observe(this,{attributes:!0,attributeFilter:["dir"]}),!this.hasAttribute("dir")){let e=this.assignedSlot||this.parentNode;for(;e!==document.documentElement&&!(e instanceof Le);)e=e.assignedSlot||e.parentNode||e.host;this.dir="rtl"===e.dir?e.dir:"ltr"}requestAnimationFrame((()=>e()))}disconnectedCallback(){Le.instances.delete(this),this.observer.disconnect()}startManagingContentDirection(e){this.trackedChildren.add(e)}stopManagingContentDirection(e){this.trackedChildren.delete(e)}async shouldAdoptStyles(){this._updateRequested||(this.updateComplete=this.__createDeferredPromise(),this._updateRequested=!0,this._updateRequested=await!1,this.adoptStyles(),this.__resolve(!0))}adoptStyles(){const e=this.styles;if(void 0!==window.ShadyCSS&&!window.ShadyCSS.nativeShadow&&window.ShadyCSS.ScopingShim){const e=[];for(const[t,s]of Le.themeFragmentsByKind)for(const[o,{styles:a}]of s){if("default"===o)continue;let s=a.cssText;Le.defaultFragments.has(o)||(s=s.replace(":host",`:host([${t}='${o}'])`)),e.push(s)}window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e,this.localName),window.ShadyCSS.prepareTemplate(Le.template,this.localName)}else if(ke){const t=[];for(const s of e)t.push(s.styleSheet);this.shadowRoot.adoptedStyleSheets=t}else{this.shadowRoot.querySelectorAll("style").forEach((e=>e.remove())),e.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.shadowRoot.appendChild(t)}))}}static registerThemeFragment(e,t,s){const o=Le.themeFragmentsByKind.get(t)||new Map;0===o.size&&(Le.themeFragmentsByKind.set(t,o),o.set("default",{name:e,styles:s}),Le.defaultFragments.add(e)),o.set(e,{name:e,styles:s}),Le.instances.forEach((e=>e.shouldAdoptStyles()))}_provideContext(){this._contextConsumers.forEach((e=>e(this.lang)))}_handleContextPresence(e){const t=e.composedPath()[0];if(this._contextConsumers.has(t))this._contextConsumers.delete(t);else{this._contextConsumers.set(t,e.detail.callback);const s=this._contextConsumers.get(t);s&&s(this.lang||document.documentElement.lang||navigator.language)}}}Le.themeFragmentsByKind=new Map,Le.defaultFragments=new Set(["core"]),Le.instances=new Set,Le.registerThemeFragment("core","core",Ue),Le.registerThemeFragment("lightest","color",Pe),(e=>{He=e})(ie);let Be=class extends Ae{constructor(){super(),this.selected=!1,this.addEventListener("click",(()=>{this.selected=!this.selected}))}render(){return ie`
      <div class="${this.selected&&"selected"} container">
        <div class="flex">
          ${this.selected?(({width:e=24,height:t=24,hidden:s=!1,title:o="Checkmark Circle"}={})=>Me`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden="${s?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M18 2a16 16 0 1016 16A16 16 0 0018 2zm10.666 9.08L16.018 27.341a1.206 1.206 0 01-.875.461h-.073a1.2 1.2 0 01-.849-.351l-7.785-7.793a1.2 1.2 0 010-1.7l1.326-1.325a1.2 1.2 0 011.7 0l5.338 5.349L25.314 8.473A1.2 1.2 0 0127 8.263L28.455 9.4a1.2 1.2 0 01.211 1.68z"
    />
  </svg>`)():(({width:e=24,height:t=24,hidden:s=!1,title:o="Add To Selection"}={})=>Me`<svg
    xmlns="http://www.w3.org/2000/svg"
    height="${t}"
    viewBox="0 0 36 36"
    width="${e}"
    aria-hidden="${s?"true":"false"}"
    role="img"
    fill="currentColor"
    aria-label="${o}"
  >
    <path
      d="M24.16 5.443l1.028-1.777a15.947 15.947 0 00-5.4-1.606v2.066a13.883 13.883 0 014.372 1.317zm5.37 4.623l1.8-1.035a16.133 16.133 0 00-3.852-3.97L26.44 6.849a14.066 14.066 0 013.09 3.217zm2.403 6.597H34a15.91 15.91 0 00-1.379-5.291L30.83 12.4a13.9 13.9 0 011.103 4.263zm0 2.674a13.9 13.9 0 01-1.1 4.258l1.791 1.032A15.91 15.91 0 0034 19.337zm-5.493 9.814l1.033 1.788a16.131 16.131 0 003.852-3.97l-1.8-1.035a14.066 14.066 0 01-3.085 3.217zm-6.655 2.723v2.066a15.947 15.947 0 005.4-1.606l-1.025-1.777a13.883 13.883 0 01-4.375 1.317zm-7.247-.98l-1.028 1.777A15.993 15.993 0 0017.107 34v-2.045a13.937 13.937 0 01-4.569-1.061zm-5.799-4.601l-1.8 1.035a16.132 16.132 0 004.214 4.062l1.026-1.775a14.071 14.071 0 01-3.44-3.322zm-2.672-6.956H2a15.9 15.9 0 001.574 5.694L5.365 24a13.889 13.889 0 01-1.298-4.663zM5.365 12l-1.791-1.031A15.9 15.9 0 002 16.663h2.067A13.889 13.889 0 015.365 12zm4.819-5.616L9.158 4.609a16.132 16.132 0 00-4.214 4.062l1.8 1.035a14.073 14.073 0 013.44-3.322zm6.923-2.339V2a15.99 15.99 0 00-5.6 1.329l1.027 1.777a13.937 13.937 0 014.573-1.061zM28 19a1 1 0 01-1 1h-7v7a1 1 0 01-1 1h-2a1 1 0 01-1-1v-7H9a1 1 0 01-1-1v-2a1 1 0 011-1h7V9a1 1 0 011-1h2a1 1 0 011 1v7h7a1 1 0 011 1z"
    />
  </svg>`)()}
        </div>
      </div>
    `}onClick(e){console.log(e),this.selected=!this.selected}};Be.styles=((e,...t)=>{const o=1===e.length?e[0]:t.reduce(((t,s,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[o+1]),e[0]);return new a(o,s)})`
    :host {
      all: initial;
    }
    .container {
      width: 100%;
      height: 100%;
      cursor: pointer;
      z-index: 10000;
      padding: 4px;
    }
    .container.selected {
      // border: solid 4px #1473e6;
      background: rgba(20, 115, 230, 0.2);
    }
    .flex {
      display: flex;
      background: white;
      color: #1473e6;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }
  `,e([function(e){return(t,s)=>void 0!==s?((e,t,s)=>{t.constructor.createProperty(s,e)})(e,t,s):Se(e,t)}()],Be.prototype,"selected",void 0),Be=e([(e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:s,elements:o}=t;return{kind:s,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t))("selectable-overlay")],Be),console.log("hello from extension");const Oe=document.querySelectorAll("div.photo-list-photo-view");console.log(Oe);const De=document.createElement("selectable-overlay");document.body.appendChild(De),Oe.forEach((e=>{const t=document.createElement("selectable-overlay");e.classList.contains("is-video")||e.prepend(t)}));
