(()=>{"use strict";var e={491:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MINECART_LOCALSTORAGE_KEY=t.MINECART_API=void 0,t.MINECART_API="https://api.minecart.com.br",t.MINECART_LOCALSTORAGE_KEY="MINECART"},156:(e,t,r)=>{t.M=void 0;const n=r(490),o=r(305),s=r(529),i=r(756),a=r(378),c=r(777),u=r(46),l=r(872),f=r(891);t.M={store:l.store,news:s.news,rules:c.rules,team:f.team,categories:n.categories,servers:u.servers,products:a.products,gateways:o.gateways,payment:i.payment,setApiKey:e=>{window.minecartApiKey=e}},window.minecart=t.M},374:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.parseResponseData=t.API=void 0;const o=r(491),s=n(r(425)),i=r(248);t.API=s.default.create({baseURL:o.MINECART_API,timeout:1e4,headers:{"Content-Type":"application/json"}}),(0,i.setupInterceptores)(t.API),t.parseResponseData=e=>"object"==typeof e.data&&e.data&&"data"in e.data?e.data.data:e.data},248:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setupInterceptores=void 0;const r=e=>{const t=window?.minecartApiKey;return t&&(e.headers["X-MINECART-KEY"]=t),e},n=e=>Promise.reject(e),o=e=>e,s=e=>Promise.reject(e);t.setupInterceptores=e=>{e.interceptors.request.use(r,n),e.interceptors.response.use(o,s)}},490:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.categories=void 0;const n=r(374);t.categories={all:async()=>n.API.get("/shop/categories").then((e=>(0,n.parseResponseData)(e)))}},305:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.gateways=void 0;const n=r(374);t.gateways={async all(){try{return await n.API.get("/shop/gateways").then((e=>(0,n.parseResponseData)(e)))}catch(e){return console.error("Error fetching gateways:",e.message),[]}}}},529:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.news=void 0;const n=r(374);t.news={async all(){try{return await n.API.get("/shop/news").then((e=>(0,n.parseResponseData)(e)))}catch(e){return console.error("Error fetching news:",e.message),[]}}}},756:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.payment=void 0;const n=r(374);t.payment={async create(e,t,r,o){try{return await n.API.post("/shop/payment",{gateway:e,username:t,coupon:o,cart:r}).then((e=>(0,n.parseResponseData)(e)))}catch(e){return console.error("Error create payment:",e.message),[]}}}},378:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.products=void 0;const n=r(374);t.products={async all(e={}){try{return await n.API.get("/shop/products",{params:e}).then((e=>(0,n.parseResponseData)(e)))}catch(e){return console.error("Error fetching products:",e.message),[]}}}},777:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.rules=void 0;const n=r(374);t.rules={async all(){try{return await n.API.get("/shop/rules").then((e=>(0,n.parseResponseData)(e)))}catch(e){return console.error("Error fetching rules:",e.message),[]}}}},46:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.servers=void 0;const n=r(374);t.servers={async all(){try{return await n.API.get("/shop/servers").then((e=>(0,n.parseResponseData)(e)))}catch(e){return console.error("Error fetching servers:",e.message),[]}}}},872:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.store=void 0;const n=r(374);t.store={async get(){try{return await n.API.get("/shop").then((e=>(0,n.parseResponseData)(e)))}catch(e){return console.error("Error fetching store:",e.message),[]}}}},891:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.team=void 0;const n=r(374);t.team={async all(){try{return await n.API.get("/shop/team").then((e=>(0,n.parseResponseData)(e)))}catch(e){return console.error("Error fetching team:",e.message),[]}}}},425:(e,t,r)=>{function n(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),u=e=>t=>typeof t===e,{isArray:l}=Array,f=u("undefined"),d=c("ArrayBuffer"),p=u("string"),h=u("function"),m=u("number"),y=e=>null!==e&&"object"==typeof e,g=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),w=c("File"),E=c("Blob"),R=c("FileList"),O=c("URLSearchParams"),[S,v,A,T]=["ReadableStream","Request","Response","Headers"].map(c);function P(e,t,{allOwnKeys:r=!1}={}){if(null==e)return;let n,o;if("object"!=typeof e&&(e=[e]),l(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(n=0;n<s;n++)i=o[n],t.call(null,e[i],i,e)}}function _(e,t){t=t.toLowerCase();const r=Object.keys(e);let n,o=r.length;for(;o-- >0;)if(n=r[o],t===n.toLowerCase())return n;return null}const j="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:r.g,C=e=>!f(e)&&e!==j,x=(N="undefined"!=typeof Uint8Array&&s(Uint8Array),e=>N&&e instanceof N);var N;const L=c("HTMLFormElement"),D=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),F=c("RegExp"),U=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};P(r,((r,o)=>{let s;!1!==(s=t(r,o,e))&&(n[o]=s||r)})),Object.defineProperties(e,n)},B="abcdefghijklmnopqrstuvwxyz",k="0123456789",I={DIGIT:k,ALPHA:B,ALPHA_DIGIT:B+B.toUpperCase()+k},M=c("AsyncFunction"),q=(z="function"==typeof setImmediate,H=h(j.postMessage),z?setImmediate:H?(K=`axios@${Math.random()}`,J=[],j.addEventListener("message",(({source:e,data:t})=>{e===j&&t===K&&J.length&&J.shift()()}),!1),e=>{J.push(e),j.postMessage(K,"*")}):e=>setTimeout(e));var z,H,K,J;const W="undefined"!=typeof queueMicrotask?queueMicrotask.bind(j):"undefined"!=typeof process&&process.nextTick||q;var V={isArray:l,isArrayBuffer:d,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=i(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&d(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:y,isPlainObject:g,isReadableStream:S,isRequest:v,isResponse:A,isHeaders:T,isUndefined:f,isDate:b,isFile:w,isBlob:E,isRegExp:F,isFunction:h,isStream:e=>y(e)&&h(e.pipe),isURLSearchParams:O,isTypedArray:x,isFileList:R,forEach:P,merge:function e(){const{caseless:t}=C(this)&&this||{},r={},n=(n,o)=>{const s=t&&_(r,o)||o;g(r[s])&&g(n)?r[s]=e(r[s],n):g(n)?r[s]=e({},n):l(n)?r[s]=n.slice():r[s]=n};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&P(arguments[e],n);return r},extend:(e,t,r,{allOwnKeys:o}={})=>(P(t,((t,o)=>{r&&h(t)?e[o]=n(t,r):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],n&&!n(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==r&&s(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return-1!==n&&n===r},toArray:e=>{if(!e)return null;if(l(e))return e;let t=e.length;if(!m(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},forEachEntry:(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let n;for(;(n=r.next())&&!n.done;){const r=n.value;t.call(e,r[0],r[1])}},matchAll:(e,t)=>{let r;const n=[];for(;null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:L,hasOwnProperty:D,hasOwnProp:D,reduceDescriptors:U,freezeMethods:e=>{U(e,((t,r)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;const n=e[r];h(n)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")}))}))},toObjectSet:(e,t)=>{const r={},n=e=>{e.forEach((e=>{r[e]=!0}))};return l(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,r){return t.toUpperCase()+r})),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:_,global:j,isContextDefined:C,ALPHABET:I,generateString:(e=16,t=I.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),r=(e,n)=>{if(y(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[n]=e;const o=l(e)?[]:{};return P(e,((e,t)=>{const s=r(e,n+1);!f(s)&&(o[t]=s)})),t[n]=void 0,o}}return e};return r(e,0)},isAsyncFn:M,isThenable:e=>e&&(y(e)||h(e))&&h(e.then)&&h(e.catch),setImmediate:q,asap:W};function $(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}V.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:V.toJSONObject(this.config),code:this.code,status:this.status}}});const G=$.prototype,X={};function Y(e){return V.isPlainObject(e)||V.isArray(e)}function Q(e){return V.endsWith(e,"[]")?e.slice(0,-2):e}function Z(e,t,r){return e?e.concat(t).map((function(e,t){return e=Q(e),!r&&t?"["+e+"]":e})).join(r?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{X[e]={value:e}})),Object.defineProperties($,X),Object.defineProperty(G,"isAxiosError",{value:!0}),$.from=(e,t,r,n,o,s)=>{const i=Object.create(G);return V.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),$.call(i,e.message,t,r,n,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const ee=V.toFlatObject(V,{},null,(function(e){return/^is[A-Z]/.test(e)}));function te(e,t,r){if(!V.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const n=(r=V.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!V.isUndefined(t[e])}))).metaTokens,o=r.visitor||u,s=r.dots,i=r.indexes,a=(r.Blob||"undefined"!=typeof Blob&&Blob)&&V.isSpecCompliantForm(t);if(!V.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(V.isDate(e))return e.toISOString();if(!a&&V.isBlob(e))throw new $("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(e)||V.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function u(e,r,o){let a=e;if(e&&!o&&"object"==typeof e)if(V.endsWith(r,"{}"))r=n?r:r.slice(0,-2),e=JSON.stringify(e);else if(V.isArray(e)&&function(e){return V.isArray(e)&&!e.some(Y)}(e)||(V.isFileList(e)||V.endsWith(r,"[]"))&&(a=V.toArray(e)))return r=Q(r),a.forEach((function(e,n){!V.isUndefined(e)&&null!==e&&t.append(!0===i?Z([r],n,s):null===i?r:r+"[]",c(e))})),!1;return!!Y(e)||(t.append(Z(o,r,s),c(e)),!1)}const l=[],f=Object.assign(ee,{defaultVisitor:u,convertValue:c,isVisitable:Y});if(!V.isObject(e))throw new TypeError("data must be an object");return function e(r,n){if(!V.isUndefined(r)){if(-1!==l.indexOf(r))throw Error("Circular reference detected in "+n.join("."));l.push(r),V.forEach(r,(function(r,s){!0===(!(V.isUndefined(r)||null===r)&&o.call(t,r,V.isString(s)?s.trim():s,n,f))&&e(r,n?n.concat(s):[s])})),l.pop()}}(e),t}function re(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function ne(e,t){this._pairs=[],e&&te(e,this,t)}const oe=ne.prototype;function se(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ie(e,t,r){if(!t)return e;const n=r&&r.encode||se,o=r&&r.serialize;let s;if(s=o?o(t,r):V.isURLSearchParams(t)?t.toString():new ne(t,r).toString(n),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}oe.append=function(e,t){this._pairs.push([e,t])},oe.toString=function(e){const t=e?function(t){return e.call(this,t,re)}:re;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ae=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){V.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},ce={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ue={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ne,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const le="undefined"!=typeof window&&"undefined"!=typeof document,fe="object"==typeof navigator&&navigator||void 0,de=le&&(!fe||["ReactNative","NativeScript","NS"].indexOf(fe.product)<0),pe="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,he=le&&window.location.href||"http://localhost";var me={...Object.freeze({__proto__:null,hasBrowserEnv:le,hasStandardBrowserWebWorkerEnv:pe,hasStandardBrowserEnv:de,navigator:fe,origin:he}),...ue};function ye(e){function t(e,r,n,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&V.isArray(n)?n.length:s,a?(V.hasOwnProp(n,s)?n[s]=[n[s],r]:n[s]=r,!i):(n[s]&&V.isObject(n[s])||(n[s]=[]),t(e,r,n[s],o)&&V.isArray(n[s])&&(n[s]=function(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}(n[s])),!i)}if(V.isFormData(e)&&V.isFunction(e.entries)){const r={};return V.forEachEntry(e,((e,n)=>{t(function(e){return V.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),n,r,0)})),r}return null}const ge={transitional:ce,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",n=r.indexOf("application/json")>-1,o=V.isObject(e);if(o&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return n?JSON.stringify(ye(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)||V.isReadableStream(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return te(e,new me.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return me.isNode&&V.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=V.isFileList(e))||r.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return te(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||n?(t.setContentType("application/json",!1),function(e){if(V.isString(e))try{return(0,JSON.parse)(e),V.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ge.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(V.isResponse(e)||V.isReadableStream(e))return e;if(e&&V.isString(e)&&(r&&!this.responseType||n)){const r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw $.from(e,$.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch"],(e=>{ge.headers[e]={}}));var be=ge;const we=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ee=Symbol("internals");function Re(e){return e&&String(e).trim().toLowerCase()}function Oe(e){return!1===e||null==e?e:V.isArray(e)?e.map(Oe):String(e)}function Se(e,t,r,n,o){return V.isFunction(n)?n.call(this,t,r):(o&&(t=r),V.isString(t)?V.isString(n)?-1!==t.indexOf(n):V.isRegExp(n)?n.test(t):void 0:void 0)}class ve{constructor(e){e&&this.set(e)}set(e,t,r){const n=this;function o(e,t,r){const o=Re(t);if(!o)throw new Error("header name must be a non-empty string");const s=V.findKey(n,o);(!s||void 0===n[s]||!0===r||void 0===r&&!1!==n[s])&&(n[s||t]=Oe(e))}const s=(e,t)=>V.forEach(e,((e,r)=>o(e,r,t)));if(V.isPlainObject(e)||e instanceof this.constructor)s(e,t);else if(V.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))s((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&we[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)})),t})(e),t);else if(V.isHeaders(e))for(const[t,n]of e.entries())o(n,t,r);else null!=e&&o(t,e,r);return this}get(e,t){if(e=Re(e)){const r=V.findKey(this,e);if(r){const e=this[r];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}(e);if(V.isFunction(t))return t.call(this,e,r);if(V.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Re(e)){const r=V.findKey(this,e);return!(!r||void 0===this[r]||t&&!Se(0,this[r],r,t))}return!1}delete(e,t){const r=this;let n=!1;function o(e){if(e=Re(e)){const o=V.findKey(r,e);!o||t&&!Se(0,r[o],o,t)||(delete r[o],n=!0)}}return V.isArray(e)?e.forEach(o):o(e),n}clear(e){const t=Object.keys(this);let r=t.length,n=!1;for(;r--;){const o=t[r];e&&!Se(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(e){const t=this,r={};return V.forEach(this,((n,o)=>{const s=V.findKey(r,o);if(s)return t[s]=Oe(n),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,r)=>t.toUpperCase()+r))}(o):String(o).trim();i!==o&&delete t[o],t[i]=Oe(n),r[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return V.forEach(this,((r,n)=>{null!=r&&!1!==r&&(t[n]=e&&V.isArray(r)?r.join(", "):r)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach((e=>r.set(e))),r}static accessor(e){const t=(this[Ee]=this[Ee]={accessors:{}}).accessors,r=this.prototype;function n(e){const n=Re(e);t[n]||(function(e,t){const r=V.toCamelCase(" "+t);["get","set","has"].forEach((n=>{Object.defineProperty(e,n+r,{value:function(e,r,o){return this[n].call(this,t,e,r,o)},configurable:!0})}))}(r,e),t[n]=!0)}return V.isArray(e)?e.forEach(n):n(e),this}}ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),V.reduceDescriptors(ve.prototype,(({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}})),V.freezeMethods(ve);var Ae=ve;function Te(e,t){const r=this||be,n=t||r,o=Ae.from(n.headers);let s=n.data;return V.forEach(e,(function(e){s=e.call(r,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function Pe(e){return!(!e||!e.__CANCEL__)}function _e(e,t,r){$.call(this,null==e?"canceled":e,$.ERR_CANCELED,t,r),this.name="CanceledError"}function je(e,t,r){const n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(new $("Request failed with status code "+r.status,[$.ERR_BAD_REQUEST,$.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r)}V.inherits(_e,$,{__CANCEL__:!0});const Ce=(e,t,r=3)=>{let n=0;const o=function(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=n[i];o||(o=c),r[s]=a,n[s]=c;let l=i,f=0;for(;l!==s;)f+=r[l++],l%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}(50,250);return function(e,t){let r,n,o=0,s=1e3/t;const i=(t,s=Date.now())=>{o=s,r=null,n&&(clearTimeout(n),n=null),e.apply(null,t)};return[(...e)=>{const t=Date.now(),a=t-o;a>=s?i(e,t):(r=e,n||(n=setTimeout((()=>{n=null,i(r)}),s-a)))},()=>r&&i(r)]}((r=>{const s=r.loaded,i=r.lengthComputable?r.total:void 0,a=s-n,c=o(a);n=s,e({loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:r,lengthComputable:null!=i,[t?"download":"upload"]:!0})}),r)},xe=(e,t)=>{const r=null!=e;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Ne=e=>(...t)=>V.asap((()=>e(...t)));var Le=me.hasStandardBrowserEnv?function(){const e=me.navigator&&/(msie|trident)/i.test(me.navigator.userAgent),t=document.createElement("a");let r;function n(r){let n=r;return e&&(t.setAttribute("href",n),n=t.href),t.setAttribute("href",n),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return r=n(window.location.href),function(e){const t=V.isString(e)?n(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function(){return!0},De=me.hasStandardBrowserEnv?{write(e,t,r,n,o,s){const i=[e+"="+encodeURIComponent(t)];V.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),V.isString(n)&&i.push("path="+n),V.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Fe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Ue=e=>e instanceof Ae?{...e}:e;function Be(e,t){t=t||{};const r={};function n(e,t,r){return V.isPlainObject(e)&&V.isPlainObject(t)?V.merge.call({caseless:r},e,t):V.isPlainObject(t)?V.merge({},t):V.isArray(t)?t.slice():t}function o(e,t,r){return V.isUndefined(t)?V.isUndefined(e)?void 0:n(void 0,e,r):n(e,t,r)}function s(e,t){if(!V.isUndefined(t))return n(void 0,t)}function i(e,t){return V.isUndefined(t)?V.isUndefined(e)?void 0:n(void 0,e):n(void 0,t)}function a(r,o,s){return s in t?n(r,o):s in e?n(void 0,r):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(Ue(e),Ue(t),!0)};return V.forEach(Object.keys(Object.assign({},e,t)),(function(n){const s=c[n]||o,i=s(e[n],t[n],n);V.isUndefined(i)&&s!==a||(r[n]=i)})),r}var ke=e=>{const t=Be({},e);let r,{data:n,withXSRFToken:o,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:c}=t;if(t.headers=a=Ae.from(a),t.url=ie(Fe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),V.isFormData(n))if(me.hasStandardBrowserEnv||me.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(r=a.getContentType())){const[e,...t]=r?r.split(";").map((e=>e.trim())).filter(Boolean):[];a.setContentType([e||"multipart/form-data",...t].join("; "))}if(me.hasStandardBrowserEnv&&(o&&V.isFunction(o)&&(o=o(t)),o||!1!==o&&Le(t.url))){const e=s&&i&&De.read(i);e&&a.set(s,e)}return t},Ie="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,r){const n=ke(e);let o=n.data;const s=Ae.from(n.headers).normalize();let i,a,c,u,l,{responseType:f,onUploadProgress:d,onDownloadProgress:p}=n;function h(){u&&u(),l&&l(),n.cancelToken&&n.cancelToken.unsubscribe(i),n.signal&&n.signal.removeEventListener("abort",i)}let m=new XMLHttpRequest;function y(){if(!m)return;const n=Ae.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());je((function(e){t(e),h()}),(function(e){r(e),h()}),{data:f&&"text"!==f&&"json"!==f?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:n,config:e,request:m}),m=null}m.open(n.method.toUpperCase(),n.url,!0),m.timeout=n.timeout,"onloadend"in m?m.onloadend=y:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(y)},m.onabort=function(){m&&(r(new $("Request aborted",$.ECONNABORTED,e,m)),m=null)},m.onerror=function(){r(new $("Network Error",$.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=n.timeout?"timeout of "+n.timeout+"ms exceeded":"timeout exceeded";const o=n.transitional||ce;n.timeoutErrorMessage&&(t=n.timeoutErrorMessage),r(new $(t,o.clarifyTimeoutError?$.ETIMEDOUT:$.ECONNABORTED,e,m)),m=null},void 0===o&&s.setContentType(null),"setRequestHeader"in m&&V.forEach(s.toJSON(),(function(e,t){m.setRequestHeader(t,e)})),V.isUndefined(n.withCredentials)||(m.withCredentials=!!n.withCredentials),f&&"json"!==f&&(m.responseType=n.responseType),p&&([c,l]=Ce(p,!0),m.addEventListener("progress",c)),d&&m.upload&&([a,u]=Ce(d),m.upload.addEventListener("progress",a),m.upload.addEventListener("loadend",u)),(n.cancelToken||n.signal)&&(i=t=>{m&&(r(!t||t.type?new _e(null,e,m):t),m.abort(),m=null)},n.cancelToken&&n.cancelToken.subscribe(i),n.signal&&(n.signal.aborted?i():n.signal.addEventListener("abort",i)));const g=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(n.url);g&&-1===me.protocols.indexOf(g)?r(new $("Unsupported protocol "+g+":",$.ERR_BAD_REQUEST,e)):m.send(o||null)}))},Me=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let r,n=new AbortController;const o=function(e){if(!r){r=!0,i();const t=e instanceof Error?e:this.reason;n.abort(t instanceof $?t:new _e(t instanceof Error?t.message:t))}};let s=t&&setTimeout((()=>{s=null,o(new $(`timeout ${t} of ms exceeded`,$.ETIMEDOUT))}),t);const i=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach((e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)})),e=null)};e.forEach((e=>e.addEventListener("abort",o)));const{signal:a}=n;return a.unsubscribe=()=>V.asap(i),a}};const qe=function*(e,t){let r=e.byteLength;if(!t||r<t)return void(yield e);let n,o=0;for(;o<r;)n=o+t,yield e.slice(o,n),o=n},ze=(e,t,r,n)=>{const o=async function*(e,t){for await(const r of async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:r}=await t.read();if(e)break;yield r}}finally{await t.cancel()}}(e))yield*qe(r,t)}(e,t);let s,i=0,a=e=>{s||(s=!0,n&&n(e))};return new ReadableStream({async pull(e){try{const{done:t,value:n}=await o.next();if(t)return a(),void e.close();let s=n.byteLength;if(r){let e=i+=s;r(e)}e.enqueue(new Uint8Array(n))}catch(e){throw a(e),e}},cancel:e=>(a(e),o.return())},{highWaterMark:2})},He="function"==typeof fetch&&"function"==typeof Request&&"function"==typeof Response,Ke=He&&"function"==typeof ReadableStream,Je=He&&("function"==typeof TextEncoder?(We=new TextEncoder,e=>We.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var We;const Ve=(e,...t)=>{try{return!!e(...t)}catch(e){return!1}},$e=Ke&&Ve((()=>{let e=!1;const t=new Request(me.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})),Ge=Ke&&Ve((()=>V.isReadableStream(new Response("").body))),Xe={stream:Ge&&(e=>e.body)};var Ye;He&&(Ye=new Response,["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!Xe[e]&&(Xe[e]=V.isFunction(Ye[e])?t=>t[e]():(t,r)=>{throw new $(`Response type '${e}' is not supported`,$.ERR_NOT_SUPPORT,r)})})));const Qe={http:null,xhr:Ie,fetch:He&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:s,timeout:i,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:l,withCredentials:f="same-origin",fetchOptions:d}=ke(e);u=u?(u+"").toLowerCase():"text";let p,h=Me([o,s&&s.toAbortSignal()],i);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let y;try{if(c&&$e&&"get"!==r&&"head"!==r&&0!==(y=await(async(e,t)=>{const r=V.toFiniteNumber(e.getContentLength());return null==r?(async e=>{if(null==e)return 0;if(V.isBlob(e))return e.size;if(V.isSpecCompliantForm(e)){const t=new Request(me.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return V.isArrayBufferView(e)||V.isArrayBuffer(e)?e.byteLength:(V.isURLSearchParams(e)&&(e+=""),V.isString(e)?(await Je(e)).byteLength:void 0)})(t):r})(l,n))){let e,r=new Request(t,{method:"POST",body:n,duplex:"half"});if(V.isFormData(n)&&(e=r.headers.get("content-type"))&&l.setContentType(e),r.body){const[e,t]=xe(y,Ce(Ne(c)));n=ze(r.body,65536,e,t)}}V.isString(f)||(f=f?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...d,signal:h,method:r.toUpperCase(),headers:l.normalize().toJSON(),body:n,duplex:"half",credentials:o?f:void 0});let s=await fetch(p);const i=Ge&&("stream"===u||"response"===u);if(Ge&&(a||i&&m)){const e={};["status","statusText","headers"].forEach((t=>{e[t]=s[t]}));const t=V.toFiniteNumber(s.headers.get("content-length")),[r,n]=a&&xe(t,Ce(Ne(a),!0))||[];s=new Response(ze(s.body,65536,r,(()=>{n&&n(),m&&m()})),e)}u=u||"text";let g=await Xe[V.findKey(Xe,u)||"text"](s,e);return!i&&m&&m(),await new Promise(((t,r)=>{je(t,r,{data:g,headers:Ae.from(s.headers),status:s.status,statusText:s.statusText,config:e,request:p})}))}catch(t){if(m&&m(),t&&"TypeError"===t.name&&/fetch/i.test(t.message))throw Object.assign(new $("Network Error",$.ERR_NETWORK,e,p),{cause:t.cause||t});throw $.from(t,t&&t.code,e,p)}})};V.forEach(Qe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Ze=e=>`- ${e}`,et=e=>V.isFunction(e)||null===e||!1===e;var tt=e=>{e=V.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let s=0;s<t;s++){let t;if(r=e[s],n=r,!et(r)&&(n=Qe[(t=String(r)).toLowerCase()],void 0===n))throw new $(`Unknown adapter '${t}'`);if(n)break;o[t||"#"+s]=n}if(!n){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new $("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Ze).join("\n"):" "+Ze(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function rt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _e(null,e)}function nt(e){return rt(e),e.headers=Ae.from(e.headers),e.data=Te.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tt(e.adapter||be.adapter)(e).then((function(t){return rt(e),t.data=Te.call(e,e.transformResponse,t),t.headers=Ae.from(t.headers),t}),(function(t){return Pe(t)||(rt(e),t&&t.response&&(t.response.data=Te.call(e,e.transformResponse,t.response),t.response.headers=Ae.from(t.response.headers))),Promise.reject(t)}))}const ot={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{ot[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));const st={};ot.transitional=function(e,t,r){function n(e,t){return"[Axios v1.7.7] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(r,o,s)=>{if(!1===e)throw new $(n(o," has been removed"+(t?" in "+t:"")),$.ERR_DEPRECATED);return t&&!st[o]&&(st[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,s)}};var it={assertOptions:function(e,t,r){if("object"!=typeof e)throw new $("options must be an object",$.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],i=t[s];if(i){const t=e[s],r=void 0===t||i(t,s,e);if(!0!==r)throw new $("option "+s+" must be "+r,$.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new $("Unknown option "+s,$.ERR_BAD_OPTION)}},validators:ot};const at=it.validators;class ct{constructor(e){this.defaults=e,this.interceptors={request:new ae,response:new ae}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const r=t.stack?t.stack.replace(/^.+\n/,""):"";try{e.stack?r&&!String(e.stack).endsWith(r.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+r):e.stack=r}catch(e){}}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Be(this.defaults,t);const{transitional:r,paramsSerializer:n,headers:o}=t;void 0!==r&&it.assertOptions(r,{silentJSONParsing:at.transitional(at.boolean),forcedJSONParsing:at.transitional(at.boolean),clarifyTimeoutError:at.transitional(at.boolean)},!1),null!=n&&(V.isFunction(n)?t.paramsSerializer={serialize:n}:it.assertOptions(n,{encode:at.function,serialize:at.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&V.merge(o.common,o[t.method]);o&&V.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ae.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[nt.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=i.length;let d=t;for(f=0;f<l;){const e=i[f++],t=i[f++];try{d=e(d)}catch(e){t.call(this,e);break}}try{u=nt.call(this,d)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return ie(Fe((e=Be(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}V.forEach(["delete","get","head","options"],(function(e){ct.prototype[e]=function(t,r){return this.request(Be(r||{},{method:e,url:t,data:(r||{}).data}))}})),V.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(Be(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ct.prototype[e]=t(),ct.prototype[e+"Form"]=t(!0)}));var ut=ct;class lt{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const r=this;this.promise.then((e=>{if(!r._listeners)return;let t=r._listeners.length;for(;t-- >0;)r._listeners[t](e);r._listeners=null})),this.promise.then=e=>{let t;const n=new Promise((e=>{r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e,n,o){r.reason||(r.reason=new _e(e,n,o),t(r.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new lt((function(t){e=t})),cancel:e}}}var ft=lt;const dt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(dt).forEach((([e,t])=>{dt[t]=e}));var pt=dt;const ht=function e(t){const r=new ut(t),o=n(ut.prototype.request,r);return V.extend(o,ut.prototype,r,{allOwnKeys:!0}),V.extend(o,r,null,{allOwnKeys:!0}),o.create=function(r){return e(Be(t,r))},o}(be);ht.Axios=ut,ht.CanceledError=_e,ht.CancelToken=ft,ht.isCancel=Pe,ht.VERSION="1.7.7",ht.toFormData=te,ht.AxiosError=$,ht.Cancel=ht.CanceledError,ht.all=function(e){return Promise.all(e)},ht.spread=function(e){return function(t){return e.apply(null,t)}},ht.isAxiosError=function(e){return V.isObject(e)&&!0===e.isAxiosError},ht.mergeConfig=Be,ht.AxiosHeaders=Ae,ht.formToJSON=e=>ye(V.isHTMLForm(e)?new FormData(e):e),ht.getAdapter=tt,ht.HttpStatusCode=pt,ht.default=ht,e.exports=ht}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r(156)})();