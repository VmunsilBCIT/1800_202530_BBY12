(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const gu=()=>{};var ha={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc=function(n){const t=[];let e=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},mu=function(n){const t=[];let e=0,s=0;for(;e<n.length;){const r=n[e++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const a=n[e++];t[s++]=String.fromCharCode((r&31)<<6|a&63)}else if(r>239&&r<365){const a=n[e++],l=n[e++],u=n[e++],f=((r&7)<<18|(a&63)<<12|(l&63)<<6|u&63)-65536;t[s++]=String.fromCharCode(55296+(f>>10)),t[s++]=String.fromCharCode(56320+(f&1023))}else{const a=n[e++],l=n[e++];t[s++]=String.fromCharCode((r&15)<<12|(a&63)<<6|l&63)}}return t.join("")},Bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const a=n[r],l=r+1<n.length,u=l?n[r+1]:0,f=r+2<n.length,v=f?n[r+2]:0,w=a>>2,I=(a&3)<<4|u>>4;let A=(u&15)<<2|v>>6,O=v&63;f||(O=64,l||(A=64)),s.push(e[w],e[I],e[A],e[O])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Hc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):mu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const a=e[n.charAt(r++)],u=r<n.length?e[n.charAt(r)]:0;++r;const v=r<n.length?e[n.charAt(r)]:64;++r;const I=r<n.length?e[n.charAt(r)]:64;if(++r,a==null||u==null||v==null||I==null)throw new _u;const A=a<<2|u>>4;if(s.push(A),v!==64){const O=u<<4&240|v>>2;if(s.push(O),I!==64){const R=v<<6&192|I;s.push(R)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eu=function(n){const t=Hc(n);return Bc.encodeByteArray(t,!0)},es=function(n){return Eu(n).replace(/\./g,"")},Wc=function(n){try{return Bc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=()=>vu().__FIREBASE_DEFAULTS__,Tu=()=>{if(typeof process>"u"||typeof ha>"u")return;const n=ha.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Wc(n[1]);return t&&JSON.parse(t)},Mr=()=>{try{return gu()||yu()||Tu()||wu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zc=n=>Mr()?.emulatorHosts?.[n],Kc=n=>{const t=zc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),s]:[t.substring(0,e),s]},Gc=()=>Mr()?.config,qc=n=>Mr()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,s)=>{e?this.reject(e):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xr(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},s=t||"demo-project",r=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[es(JSON.stringify(e)),es(JSON.stringify(l)),""].join(".")}const ei={};function Au(){const n={prod:[],emulator:[]};for(const t of Object.keys(ei))ei[t]?n.emulator.push(t):n.prod.push(t);return n}function Iu(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let ua=!1;function $r(n,t){if(typeof window>"u"||typeof document>"u"||!Cn(window.location.host)||ei[n]===t||ei[n]||ua)return;ei[n]=t;function e(A){return`__firebase__banner__${A}`}const s="__firebase__banner",a=Au().prod.length>0;function l(){const A=document.getElementById(s);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function f(A,O){A.setAttribute("width","24"),A.setAttribute("id",O),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function v(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{ua=!0,l()},A}function w(A,O){A.setAttribute("id",O),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function I(){const A=Iu(s),O=e("text"),R=document.getElementById(O)||document.createElement("span"),D=e("learnmore"),N=document.getElementById(D)||document.createElement("a"),x=e("preprendIcon"),F=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const U=A.element;u(U),w(N,D);const P=v();f(F,x),U.append(F,R,N,P),document.body.appendChild(U)}a?(R.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",I):I()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Su(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function Cu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ou(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Du(){const n=ot();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ru(){try{return typeof indexedDB=="object"}catch{return!1}}function Pu(){return new Promise((n,t)=>{try{let e=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{t(r.error?.message||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="FirebaseError";class Vt extends Error{constructor(t,e,s){super(e),this.code=t,this.customData=s,this.name=ku,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,di.prototype.create)}}class di{constructor(t,e,s){this.service=t,this.serviceName=e,this.errors=s}create(t,...e){const s=e[0]||{},r=`${this.service}/${t}`,a=this.errors[t],l=a?Lu(a,s):"Error",u=`${this.serviceName}: ${l} (${r}).`;return new Vt(r,u,s)}}function Lu(n,t){return n.replace(Mu,(e,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Mu=/\{\$([^}]+)}/g;function xu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Fe(n,t){if(n===t)return!0;const e=Object.keys(n),s=Object.keys(t);for(const r of e){if(!s.includes(r))return!1;const a=n[r],l=t[r];if(da(a)&&da(l)){if(!Fe(a,l))return!1}else if(a!==l)return!1}for(const r of s)if(!e.includes(r))return!1;return!0}function da(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n){const t=[];for(const[e,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function $u(n,t){const e=new Uu(n,t);return e.subscribe.bind(e)}class Uu{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,s){let r;if(t===void 0&&e===void 0&&s===void 0)throw new Error("Missing Observer.");Vu(t,["next","error","complete"])?r=t:r={next:t,error:e,complete:s},r.next===void 0&&(r.next=Gs),r.error===void 0&&(r.error=Gs),r.complete===void 0&&(r.complete=Gs);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),a}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vu(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Gs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n){return n&&n._delegate?n._delegate:n}class _e{constructor(t,e,s){this.name=t,this.instanceFactory=e,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const s=new bu;if(this.instancesDeferred.set(e,s),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),s=t?.optional??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Hu(t))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[e,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const a=this.getOrInitializeService({instanceIdentifier:r});s.resolve(a)}catch{}}}}clearInstance(t=Re){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Re){return this.instances.has(t)}getOptions(t=Re){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:e});for(const[a,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(a);s===u&&l.resolve(r)}return r}onInit(t,e){const s=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(s)??new Set;r.add(t),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&t(a,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const s=this.onInitCallbacks.get(e);if(s)for(const r of s)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ju(t),options:e}),this.instances.set(t,s),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Re){return this.component?this.component.multipleInstances?t:Re:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ju(n){return n===Re?void 0:n}function Hu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Fu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Wu={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},zu=W.INFO,Ku={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Gu=(n,t,...e)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),r=Ku[t];if(r)console[r](`[${s}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ur{constructor(t){this.name=t,this._logLevel=zu,this._logHandler=Gu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Wu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}}const qu=(n,t)=>t.some(e=>n instanceof e);let fa,pa;function Yu(){return fa||(fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xu(){return pa||(pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xc=new WeakMap,vr=new WeakMap,Jc=new WeakMap,qs=new WeakMap,Vr=new WeakMap;function Ju(n){const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{e(ge(n.result)),r()},l=()=>{s(n.error),r()};n.addEventListener("success",a),n.addEventListener("error",l)});return t.then(e=>{e instanceof IDBCursor&&Xc.set(e,n)}).catch(()=>{}),Vr.set(t,n),t}function Qu(n){if(vr.has(n))return;const t=new Promise((e,s)=>{const r=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{e(),r()},l=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});vr.set(n,t)}let yr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return vr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Jc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ge(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Zu(n){yr=n(yr)}function td(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const s=n.call(Ys(this),t,...e);return Jc.set(s,t.sort?t.sort():[t]),ge(s)}:Xu().includes(n)?function(...t){return n.apply(Ys(this),t),ge(Xc.get(this))}:function(...t){return ge(n.apply(Ys(this),t))}}function ed(n){return typeof n=="function"?td(n):(n instanceof IDBTransaction&&Qu(n),qu(n,Yu())?new Proxy(n,yr):n)}function ge(n){if(n instanceof IDBRequest)return Ju(n);if(qs.has(n))return qs.get(n);const t=ed(n);return t!==n&&(qs.set(n,t),Vr.set(t,n)),t}const Ys=n=>Vr.get(n);function nd(n,t,{blocked:e,upgrade:s,blocking:r,terminated:a}={}){const l=indexedDB.open(n,t),u=ge(l);return s&&l.addEventListener("upgradeneeded",f=>{s(ge(l.result),f.oldVersion,f.newVersion,ge(l.transaction),f)}),e&&l.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),u.then(f=>{a&&f.addEventListener("close",()=>a()),r&&f.addEventListener("versionchange",v=>r(v.oldVersion,v.newVersion,v))}).catch(()=>{}),u}const id=["get","getKey","getAll","getAllKeys","count"],sd=["put","add","delete","clear"],Xs=new Map;function ga(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Xs.get(t))return Xs.get(t);const e=t.replace(/FromIndex$/,""),s=t!==e,r=sd.includes(e);if(!(e in(s?IDBIndex:IDBObjectStore).prototype)||!(r||id.includes(e)))return;const a=async function(l,...u){const f=this.transaction(l,r?"readwrite":"readonly");let v=f.store;return s&&(v=v.index(u.shift())),(await Promise.all([v[e](...u),r&&f.done]))[0]};return Xs.set(t,a),a}Zu(n=>({...n,get:(t,e,s)=>ga(t,e)||n.get(t,e,s),has:(t,e)=>!!ga(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(od(e)){const s=e.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(e=>e).join(" ")}}function od(n){return n.getComponent()?.type==="VERSION"}const Tr="@firebase/app",ma="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new Ur("@firebase/app"),ad="@firebase/app-compat",cd="@firebase/analytics-compat",ld="@firebase/analytics",hd="@firebase/app-check-compat",ud="@firebase/app-check",dd="@firebase/auth",fd="@firebase/auth-compat",pd="@firebase/database",gd="@firebase/data-connect",md="@firebase/database-compat",_d="@firebase/functions",Ed="@firebase/functions-compat",vd="@firebase/installations",yd="@firebase/installations-compat",Td="@firebase/messaging",wd="@firebase/messaging-compat",bd="@firebase/performance",Ad="@firebase/performance-compat",Id="@firebase/remote-config",Sd="@firebase/remote-config-compat",Cd="@firebase/storage",Od="@firebase/storage-compat",Nd="@firebase/firestore",Dd="@firebase/ai",Rd="@firebase/firestore-compat",Pd="firebase",kd="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]",Ld={[Tr]:"fire-core",[ad]:"fire-core-compat",[ld]:"fire-analytics",[cd]:"fire-analytics-compat",[ud]:"fire-app-check",[hd]:"fire-app-check-compat",[dd]:"fire-auth",[fd]:"fire-auth-compat",[pd]:"fire-rtdb",[gd]:"fire-data-connect",[md]:"fire-rtdb-compat",[_d]:"fire-fn",[Ed]:"fire-fn-compat",[vd]:"fire-iid",[yd]:"fire-iid-compat",[Td]:"fire-fcm",[wd]:"fire-fcm-compat",[bd]:"fire-perf",[Ad]:"fire-perf-compat",[Id]:"fire-rc",[Sd]:"fire-rc-compat",[Cd]:"fire-gcs",[Od]:"fire-gcs-compat",[Nd]:"fire-fst",[Rd]:"fire-fst-compat",[Dd]:"fire-vertex","fire-js":"fire-js",[Pd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new Map,Md=new Map,br=new Map;function _a(n,t){try{n.container.addComponent(t)}catch(e){Yt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function je(n){const t=n.name;if(br.has(t))return Yt.debug(`There were multiple attempts to register component ${t}.`),!1;br.set(t,n);for(const e of ns.values())_a(e,n);for(const e of Md.values())_a(e,n);return!0}function ms(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function wt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},me=new di("app","Firebase",xd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e,s){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=kd;function Qc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const s={name:wr,automaticDataCollectionEnabled:!0,...t},r=s.name;if(typeof r!="string"||!r)throw me.create("bad-app-name",{appName:String(r)});if(e||(e=Gc()),!e)throw me.create("no-options");const a=ns.get(r);if(a){if(Fe(e,a.options)&&Fe(s,a.config))return a;throw me.create("duplicate-app",{appName:r})}const l=new Bu(r);for(const f of br.values())l.addComponent(f);const u=new $d(e,s,l);return ns.set(r,u),u}function Fr(n=wr){const t=ns.get(n);if(!t&&n===wr&&Gc())return Qc();if(!t)throw me.create("no-app",{appName:n});return t}function Pt(n,t,e){let s=Ld[n]??n;e&&(s+=`-${e}`);const r=s.match(/\s|\//),a=t.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${t}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Yt.warn(l.join(" "));return}je(new _e(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firebase-heartbeat-database",Vd=1,ci="firebase-heartbeat-store";let Js=null;function Zc(){return Js||(Js=nd(Ud,Vd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ci)}catch(e){console.warn(e)}}}}).catch(n=>{throw me.create("idb-open",{originalErrorMessage:n.message})})),Js}async function Fd(n){try{const e=(await Zc()).transaction(ci),s=await e.objectStore(ci).get(tl(n));return await e.done,s}catch(t){if(t instanceof Vt)Yt.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:t?.message});Yt.warn(e.message)}}}async function Ea(n,t){try{const s=(await Zc()).transaction(ci,"readwrite");await s.objectStore(ci).put(t,tl(n)),await s.done}catch(e){if(e instanceof Vt)Yt.warn(e.message);else{const s=me.create("idb-set",{originalErrorMessage:e?.message});Yt.warn(s.message)}}}function tl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=1024,Hd=30;class Bd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new zd(e),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=va();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:e}),this._heartbeatsCache.heartbeats.length>Hd){const r=Kd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Yt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=va(),{heartbeatsToSend:e,unsentEntries:s}=Wd(this._heartbeatsCache.heartbeats),r=es(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Yt.warn(t),""}}}function va(){return new Date().toISOString().substring(0,10)}function Wd(n,t=jd){const e=[];let s=n.slice();for(const r of n){const a=e.find(l=>l.agent===r.agent);if(a){if(a.dates.push(r.date),ya(e)>t){a.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),ya(e)>t){e.pop();break}s=s.slice(1)}return{heartbeatsToSend:e,unsentEntries:s}}class zd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ru()?Pu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Fd(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ea(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ea(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function ya(n){return es(JSON.stringify({version:2,heartbeats:n})).length}function Kd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let s=1;s<n.length;s++)n[s].date<e&&(e=n[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){je(new _e("platform-logger",t=>new rd(t),"PRIVATE")),je(new _e("heartbeat",t=>new Bd(t),"PRIVATE")),Pt(Tr,ma,n),Pt(Tr,ma,"esm2020"),Pt("fire-js","")}Gd("");function el(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qd=el,nl=new di("auth","Firebase",el());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new Ur("@firebase/auth");function Yd(n,...t){is.logLevel<=W.WARN&&is.warn(`Auth (${Ke}): ${n}`,...t)}function Gi(n,...t){is.logLevel<=W.ERROR&&is.error(`Auth (${Ke}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n,...t){throw jr(n,...t)}function kt(n,...t){return jr(n,...t)}function il(n,t,e){const s={...qd(),[t]:e};return new di("auth","Firebase",s).create(t,{appName:n.name})}function xe(n){return il(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jr(n,...t){if(typeof n!="string"){const e=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(e,...s)}return nl.create(n,...t)}function L(n,t,...e){if(!n)throw jr(t,...e)}function zt(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Gi(t),new Error(t)}function Jt(n,t){n||zt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(){return typeof self<"u"&&self.location?.href||""}function Xd(){return Ta()==="http:"||Ta()==="https:"}function Ta(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xd()||Ou()||"connection"in navigator)?navigator.onLine:!0}function Qd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e){this.shortDelay=t,this.longDelay=e,Jt(e>t,"Short delay should be less than long delay!"),this.isMobile=Su()||Nu()}get(){return Jd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,t){Jt(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{static initialize(t,e,s){this.fetchImpl=t,e&&(this.headersImpl=e),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ef=new pi(3e4,6e4);function Br(n,t){return n.tenantId&&!t.tenantId?{...t,tenantId:n.tenantId}:t}async function On(n,t,e,s,r={}){return rl(n,r,async()=>{let a={},l={};s&&(t==="GET"?l=s:a={body:JSON.stringify(s)});const u=fi({key:n.config.apiKey,...l}).slice(1),f=await n._getAdditionalHeaders();f["Content-Type"]="application/json",n.languageCode&&(f["X-Firebase-Locale"]=n.languageCode);const v={method:t,headers:f,...a};return Cu()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(v.credentials="include"),sl.fetch()(await ol(n,n.config.apiHost,e,u),v)})}async function rl(n,t,e){n._canInitEmulator=!1;const s={...Zd,...t};try{const r=new sf(n),a=await Promise.race([e(),r.promise]);r.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw xi(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const u=a.ok?l.errorMessage:l.error.message,[f,v]=u.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(n,"credential-already-in-use",l);if(f==="EMAIL_EXISTS")throw xi(n,"email-already-in-use",l);if(f==="USER_DISABLED")throw xi(n,"user-disabled",l);const w=s[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw il(n,w,v);Xt(n,w)}}catch(r){if(r instanceof Vt)throw r;Xt(n,"network-request-failed",{message:String(r)})}}async function nf(n,t,e,s,r={}){const a=await On(n,t,e,s,r);return"mfaPendingCredential"in a&&Xt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function ol(n,t,e,s){const r=`${t}${e}?${s}`,a=n,l=a.config.emulator?Hr(n.config,r):`${n.config.apiScheme}://${r}`;return tf.includes(e)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}class sf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,s)=>{this.timer=setTimeout(()=>s(kt(this.auth,"network-request-failed")),ef.get())})}}function xi(n,t,e){const s={appName:n.name};e.email&&(s.email=e.email),e.phoneNumber&&(s.phoneNumber=e.phoneNumber);const r=kt(n,t,s);return r.customData._tokenResponse=e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rf(n,t){return On(n,"POST","/v1/accounts:delete",t)}async function ss(n,t){return On(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function of(n,t=!1){const e=we(n),s=await e.getIdToken(t),r=Wr(s);L(r&&r.exp&&r.auth_time&&r.iat,e.auth,"internal-error");const a=typeof r.firebase=="object"?r.firebase:void 0,l=a?.sign_in_provider;return{claims:r,token:s,authTime:ni(Qs(r.auth_time)),issuedAtTime:ni(Qs(r.iat)),expirationTime:ni(Qs(r.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Qs(n){return Number(n)*1e3}function Wr(n){const[t,e,s]=n.split(".");if(t===void 0||e===void 0||s===void 0)return Gi("JWT malformed, contained fewer than 3 sections"),null;try{const r=Wc(e);return r?JSON.parse(r):(Gi("Failed to decode base64 JWT payload"),null)}catch(r){return Gi("Caught error parsing JWT payload as JSON",r?.toString()),null}}function wa(n){const t=Wr(n);return L(t,"internal-error"),L(typeof t.exp<"u","internal-error"),L(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(n,t,e=!1){if(e)return t;try{return await t}catch(s){throw s instanceof Vt&&af(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function af({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const e=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),e}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=ni(this.lastLoginAt),this.creationTime=ni(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(n){const t=n.auth,e=await n.getIdToken(),s=await li(n,ss(t,{idToken:e}));L(s?.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=r.providerUserInfo?.length?al(r.providerUserInfo):[],l=hf(n.providerData,a),u=n.isAnonymous,f=!(n.email&&r.passwordHash)&&!l?.length,v=u?f:!1,w={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Ir(r.createdAt,r.lastLoginAt),isAnonymous:v};Object.assign(n,w)}async function lf(n){const t=we(n);await rs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function hf(n,t){return[...n.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function al(n){return n.map(({providerId:t,...e})=>({providerId:t,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uf(n,t){const e=await rl(n,{},async()=>{const s=fi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:a}=n.config,l=await ol(n,r,"/v1/token",`key=${a}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:u,body:s};return n.emulatorConfig&&Cn(n.emulatorConfig.host)&&(f.credentials="include"),sl.fetch()(l,f)});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function df(n,t){return On(n,"POST","/v2/accounts:revokeToken",Br(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){L(t.idToken,"internal-error"),L(typeof t.idToken<"u","internal-error"),L(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):wa(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}updateFromIdToken(t){L(t.length!==0,"internal-error");const e=wa(t);this.updateTokensAndExpiration(t,null,e)}async getToken(t,e=!1){return!e&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:s,refreshToken:r,expiresIn:a}=await uf(t,e);this.updateTokensAndExpiration(s,r,Number(a))}updateTokensAndExpiration(t,e,s){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,e){const{refreshToken:s,accessToken:r,expirationTime:a}=e,l=new pn;return s&&(L(typeof s=="string","internal-error",{appName:t}),l.refreshToken=s),r&&(L(typeof r=="string","internal-error",{appName:t}),l.accessToken=r),a&&(L(typeof a=="number","internal-error",{appName:t}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pn,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,t){L(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class bt{constructor({uid:t,auth:e,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new cf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=e,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ir(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await li(this,this.stsTokenManager.getToken(this.auth,t));return L(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return of(this,t)}reload(){return lf(this)}_assign(t){this!==t&&(L(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>({...e})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new bt({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return e.metadata._copy(this.metadata),e}_onReload(t){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),e&&await rs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wt(this.auth.app))return Promise.reject(xe(this.auth));const t=await this.getIdToken();return await li(this,rf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){const s=e.displayName??void 0,r=e.email??void 0,a=e.phoneNumber??void 0,l=e.photoURL??void 0,u=e.tenantId??void 0,f=e._redirectEventId??void 0,v=e.createdAt??void 0,w=e.lastLoginAt??void 0,{uid:I,emailVerified:A,isAnonymous:O,providerData:R,stsTokenManager:D}=e;L(I&&D,t,"internal-error");const N=pn.fromJSON(this.name,D);L(typeof I=="string",t,"internal-error"),le(s,t.name),le(r,t.name),L(typeof A=="boolean",t,"internal-error"),L(typeof O=="boolean",t,"internal-error"),le(a,t.name),le(l,t.name),le(u,t.name),le(f,t.name),le(v,t.name),le(w,t.name);const x=new bt({uid:I,auth:t,email:r,emailVerified:A,displayName:s,isAnonymous:O,photoURL:l,phoneNumber:a,tenantId:u,stsTokenManager:N,createdAt:v,lastLoginAt:w});return R&&Array.isArray(R)&&(x.providerData=R.map(F=>({...F}))),f&&(x._redirectEventId=f),x}static async _fromIdTokenResponse(t,e,s=!1){const r=new pn;r.updateFromServerResponse(e);const a=new bt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await rs(a),a}static async _fromGetAccountInfoResponse(t,e,s){const r=e.users[0];L(r.localId!==void 0,"internal-error");const a=r.providerUserInfo!==void 0?al(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!a?.length,u=new pn;u.updateFromIdToken(s);const f=new bt({uid:r.localId,auth:t,stsTokenManager:u,isAnonymous:l}),v={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ir(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!a?.length};return Object.assign(f,v),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Map;function Kt(n){Jt(n instanceof Function,"Expected a class definition");let t=ba.get(n);return t?(Jt(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,ba.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}cl.type="NONE";const Aa=cl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(n,t,e){return`firebase:${n}:${t}:${e}`}class gn{constructor(t,e,s){this.persistence=t,this.auth=e,this.userKey=s;const{config:r,name:a}=this.auth;this.fullUserKey=qi(this.userKey,r.apiKey,a),this.fullPersistenceKey=qi("persistence",r.apiKey,a),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const e=await ss(this.auth,{idToken:t}).catch(()=>{});return e?bt._fromGetAccountInfoResponse(this.auth,e,t):null}return bt._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,s="authUser"){if(!e.length)return new gn(Kt(Aa),t,s);const r=(await Promise.all(e.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let a=r[0]||Kt(Aa);const l=qi(s,t.config.apiKey,t.name);let u=null;for(const v of e)try{const w=await v._get(l);if(w){let I;if(typeof w=="string"){const A=await ss(t,{idToken:w}).catch(()=>{});if(!A)break;I=await bt._fromGetAccountInfoResponse(t,A,w)}else I=bt._fromJSON(t,w);v!==a&&(u=I),a=v;break}}catch{}const f=r.filter(v=>v._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new gn(a,t,s):(a=f[0],u&&await a._set(l,u.toJSON()),await Promise.all(e.map(async v=>{if(v!==a)try{await v._remove(l)}catch{}})),new gn(a,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(dl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ll(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pl(t))return"Blackberry";if(gl(t))return"Webos";if(hl(t))return"Safari";if((t.includes("chrome/")||ul(t))&&!t.includes("edge/"))return"Chrome";if(fl(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(e);if(s?.length===2)return s[1]}return"Other"}function ll(n=ot()){return/firefox\//i.test(n)}function hl(n=ot()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ul(n=ot()){return/crios\//i.test(n)}function dl(n=ot()){return/iemobile/i.test(n)}function fl(n=ot()){return/android/i.test(n)}function pl(n=ot()){return/blackberry/i.test(n)}function gl(n=ot()){return/webos/i.test(n)}function zr(n=ot()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ff(n=ot()){return zr(n)&&!!window.navigator?.standalone}function pf(){return Du()&&document.documentMode===10}function ml(n=ot()){return zr(n)||fl(n)||gl(n)||pl(n)||/windows phone/i.test(n)||dl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n,t=[]){let e;switch(n){case"Browser":e=Ia(ot());break;case"Worker":e=`${Ia(ot())}-${n}`;break;default:e=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Ke}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const s=a=>new Promise((l,u)=>{try{const f=t(a);l(f)}catch(f){u(f)}});s.onAbort=e,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const s of this.queue)await s(t),s.onAbort&&e.push(s.onAbort)}catch(s){e.reverse();for(const r of e)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mf(n,t={}){return On(n,"GET","/v2/passwordPolicy",Br(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=6;class Ef{constructor(t){const e=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=e.minPasswordLength??_f,e.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=e.maxPasswordLength),e.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=e.containsLowercaseCharacter),e.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=e.containsUppercaseCharacter),e.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=e.containsNumericCharacter),e.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=e.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=t.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const e={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,e),this.validatePasswordCharacterOptions(t,e),e.isValid&&(e.isValid=e.meetsMinPasswordLength??!0),e.isValid&&(e.isValid=e.meetsMaxPasswordLength??!0),e.isValid&&(e.isValid=e.containsLowercaseLetter??!0),e.isValid&&(e.isValid=e.containsUppercaseLetter??!0),e.isValid&&(e.isValid=e.containsNumericCharacter??!0),e.isValid&&(e.isValid=e.containsNonAlphanumericCharacter??!0),e}validatePasswordLengthOptions(t,e){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(e.meetsMinPasswordLength=t.length>=s),r&&(e.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let s;for(let r=0;r<t.length;r++)s=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(e,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,e,s,r,a){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,e,s,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sa(this),this.idTokenSubscription=new Sa(this),this.beforeStateQueue=new gf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Kt(e)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await gn.create(this,t),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const e=await ss(this,{idToken:t}),s=await bt._fromGetAccountInfoResponse(this,e,t);await this.directlySetCurrentUser(s)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){if(wt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let s=e,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,l=s?._redirectEventId,u=await this.tryRedirectSignIn(t);(!a||a===l)&&u?.user&&(s=u.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=e,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await rs(t)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Qd()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(wt(this.app))return Promise.reject(xe(this));const e=t?we(t):null;return e&&L(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&L(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return wt(this.app)?Promise.reject(xe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return wt(this.app)?Promise.reject(xe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await mf(this),e=new Ef(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new di("auth","Firebase",t())}onAuthStateChanged(t,e,s){return this.registerStateListener(this.authStateSubscription,t,e,s)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,s){return this.registerStateListener(this.idTokenSubscription,t,e,s)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(s.tenantId=this.tenantId),await df(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(t,e){const s=await this.getOrInitRedirectPersistenceManager(e);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Kt(t)||this._popupRedirectResolver;L(e,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[Kt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===t?this._currentUser:this.redirectUser?._redirectEventId===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=this.currentUser?.uid??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,s,r){if(this._deleted)return()=>{};const a=typeof e=="function"?e:e.next.bind(e);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(u,this,"internal-error"),u.then(()=>{l||a(this.currentUser)}),typeof e=="function"){const f=t.addObserver(e,s,r);return()=>{l=!0,f()}}else{const f=t.addObserver(e);return()=>{l=!0,f()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=_l(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const e=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();e&&(t["X-Firebase-Client"]=e);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return t?.error&&Yd(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Kr(n){return we(n)}class Sa{constructor(t){this.auth=t,this.observer=null,this.addObserver=$u(e=>this.observer=e)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yf(n){Gr=n}function Tf(n){return Gr.loadJS(n)}function wf(){return Gr.gapiScript}function bf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(n,t){const e=ms(n,"auth");if(e.isInitialized()){const r=e.getImmediate(),a=e.getOptions();if(Fe(a,t??{}))return r;Xt(r,"already-initialized")}return e.initialize({options:t})}function If(n,t){const e=t?.persistence||[],s=(Array.isArray(e)?e:[e]).map(Kt);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t?.popupRedirectResolver)}function Sf(n,t,e){const s=Kr(n);L(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!1,a=El(t),{host:l,port:u}=Cf(t),f=u===null?"":`:${u}`,v={url:`${a}//${l}${f}/`},w=Object.freeze({host:l,port:u,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){L(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),L(Fe(v,s.config.emulator)&&Fe(w,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=w,s.settings.appVerificationDisabledForTesting=!0,Cn(l)?(xr(`${a}//${l}${f}`),$r("Auth",!0)):Of()}function El(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Cf(n){const t=El(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const s=e[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const a=r[1];return{host:a,port:Ca(s.substr(a.length+1))}}else{const[a,l]=s.split(":");return{host:a,port:Ca(l)}}}function Ca(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Of(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return zt("not implemented")}_getIdTokenResponse(t){return zt("not implemented")}_linkToIdToken(t,e){return zt("not implemented")}_getReauthenticationResolver(t){return zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(n,t){return nf(n,"POST","/v1/accounts:signInWithIdp",Br(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="http://localhost";class He extends vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new He(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):Xt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r,...a}=e;if(!s||!r)return null;const l=new He(s,r);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(t){const e=this.buildRequest();return mn(t,e)}_linkToIdToken(t,e){const s=this.buildRequest();return s.idToken=e,mn(t,s)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,mn(t,e)}buildRequest(){const t={requestUri:Nf,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=fi(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends yl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends gi{constructor(){super("facebook.com")}static credential(t){return He._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ue.credentialFromTaggedObject(t)}static credentialFromError(t){return ue.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ue.credential(t.oauthAccessToken)}catch{return null}}}ue.FACEBOOK_SIGN_IN_METHOD="facebook.com";ue.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends gi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return He._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return de.credentialFromTaggedObject(t)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:s}=t;if(!e&&!s)return null;try{return de.credential(e,s)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends gi{constructor(){super("github.com")}static credential(t){return He._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch{return null}}}fe.GITHUB_SIGN_IN_METHOD="github.com";fe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends gi{constructor(){super("twitter.com")}static credential(t,e){return He._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:s}=t;if(!e||!s)return null;try{return pe.credential(e,s)}catch{return null}}}pe.TWITTER_SIGN_IN_METHOD="twitter.com";pe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,s,r=!1){const a=await bt._fromIdTokenResponse(t,s,r),l=Oa(s);return new En({user:a,providerId:l,_tokenResponse:s,operationType:e})}static async _forOperation(t,e,s){await t._updateTokensIfNecessary(s,!0);const r=Oa(s);return new En({user:t,providerId:r,_tokenResponse:s,operationType:e})}}function Oa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends Vt{constructor(t,e,s,r){super(e.code,e.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,os.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:e.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,e,s,r){return new os(t,e,s,r)}}function Tl(n,t,e,s){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?os._fromErrorAndOperation(n,a,t,s):a})}async function Df(n,t,e=!1){const s=await li(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return En._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rf(n,t,e=!1){const{auth:s}=n;if(wt(s.app))return Promise.reject(xe(s));const r="reauthenticate";try{const a=await li(n,Tl(s,r,t,n),e);L(a.idToken,s,"internal-error");const l=Wr(a.idToken);L(l,s,"internal-error");const{sub:u}=l;return L(n.uid===u,s,"user-mismatch"),En._forOperation(n,r,a)}catch(a){throw a?.code==="auth/user-not-found"&&Xt(s,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pf(n,t,e=!1){if(wt(n.app))return Promise.reject(xe(n));const s="signIn",r=await Tl(n,s,t),a=await En._fromIdTokenResponse(n,s,r);return e||await n._updateCurrentUser(a.user),a}function kf(n,t,e,s){return we(n).onIdTokenChanged(t,e,s)}function Lf(n,t,e){return we(n).beforeAuthStateChanged(t,e)}function Mf(n,t,e,s){return we(n).onAuthStateChanged(t,e,s)}const as="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(as,"1"),this.storage.removeItem(as),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=1e3,$f=10;class bl extends wl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ml(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const s=this.storage.getItem(e),r=this.localCache[e];s!==r&&t(e,r,s)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((l,u,f)=>{this.notifyListeners(l,f)});return}const s=t.key;e?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(s);!e&&this.localCache[s]===l||this.notifyListeners(s,l)},a=this.storage.getItem(s);pf()&&a!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,$f):r()}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:s}),!0)})},xf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}bl.type="LOCAL";const Uf=bl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al extends wl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Al.type="SESSION";const Il=Al;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(r=>r.isListeningto(t));if(e)return e;const s=new _s(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:s,eventType:r,data:a}=e.data,l=this.handlersMap[r];if(!l?.size)return;e.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const u=Array.from(l).map(async v=>v(e.origin,a)),f=await Vf(u);e.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:f})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(n="",t=10){let e="";for(let s=0;s<t;s++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let a,l;return new Promise((u,f)=>{const v=qr("",20);r.port1.start();const w=setTimeout(()=>{f(new Error("unsupported_event"))},s);l={messageChannel:r,onMessage(I){const A=I;if(A.data.eventId===v)switch(A.data.status){case"ack":clearTimeout(w),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),u(A.data.response);break;default:clearTimeout(w),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:v,data:e},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function jf(n){Lt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function Hf(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bf(){return navigator?.serviceWorker?.controller||null}function Wf(){return Sl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="firebaseLocalStorageDb",zf=1,cs="firebaseLocalStorage",Ol="fbase_key";class mi{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Es(n,t){return n.transaction([cs],t?"readwrite":"readonly").objectStore(cs)}function Kf(){const n=indexedDB.deleteDatabase(Cl);return new mi(n).toPromise()}function Sr(){const n=indexedDB.open(Cl,zf);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(cs,{keyPath:Ol})}catch(r){e(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(cs)?t(s):(s.close(),await Kf(),t(await Sr()))})})}async function Na(n,t,e){const s=Es(n,!0).put({[Ol]:t,value:e});return new mi(s).toPromise()}async function Gf(n,t){const e=Es(n,!1).get(t),s=await new mi(e).toPromise();return s===void 0?null:s.value}function Da(n,t){const e=Es(n,!0).delete(t);return new mi(e).toPromise()}const qf=800,Yf=3;class Nl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sr(),this.db)}async _withRetries(t){let e=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(e++>Yf)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(Wf()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Hf(),!this.activeServiceWorker)return;this.sender=new Ff(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&t[0]?.fulfilled&&t[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Bf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Sr();return await Na(t,as,"1"),await Da(t,as),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(s=>Na(s,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(s=>Gf(s,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Da(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const a=Es(r,!1).getAll();return new mi(a).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],s=new Set;if(t.length!==0)for(const{fbase_key:r,value:a}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(a)&&(this.notifyListeners(r,a),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nl.type="LOCAL";const Xf=Nl;new pi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(n,t){return t?Kt(t):(L(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends vl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return mn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return mn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return mn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Qf(n){return Pf(n.auth,new Yr(n),n.bypassAuthState)}function Zf(n){const{auth:t,user:e}=n;return L(e,t,"internal-error"),Rf(e,new Yr(n),n.bypassAuthState)}async function tp(n){const{auth:t,user:e}=n;return L(e,t,"internal-error"),Df(e,new Yr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(t,e,s,r,a=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:s,postBody:r,tenantId:a,error:l,type:u}=t;if(l){this.reject(l);return}const f={auth:this.auth,requestUri:e,sessionId:s,tenantId:a||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(f))}catch(v){this.reject(v)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Qf;case"linkViaPopup":case"linkViaRedirect":return tp;case"reauthViaPopup":case"reauthViaRedirect":return Zf;default:Xt(this.auth,"internal-error")}}resolve(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep=new pi(2e3,1e4);class dn extends Dl{constructor(t,e,s,r,a){super(t,e,r,a),this.provider=s,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return L(t,this.auth,"internal-error"),t}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const t=qr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ep.get())};t()}}dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="pendingRedirect",Yi=new Map;class ip extends Dl{constructor(t,e,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,s),this.eventId=null}async execute(){let t=Yi.get(this.auth._key());if(!t){try{const s=await sp(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(e){t=()=>Promise.reject(e)}Yi.set(this.auth._key(),t)}return this.bypassAuthState||Yi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sp(n,t){const e=ap(t),s=op(n);if(!await s._isAvailable())return!1;const r=await s._get(e)==="true";return await s._remove(e),r}function rp(n,t){Yi.set(n._key(),t)}function op(n){return Kt(n._redirectPersistence)}function ap(n){return qi(np,n.config.apiKey,n.name)}async function cp(n,t,e=!1){if(wt(n.app))return Promise.reject(xe(n));const s=Kr(n),r=Jf(s,t),l=await new ip(s,r,e).execute();return l&&!e&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp=10*60*1e3;class hp{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(e=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!up(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){if(t.error&&!Rl(t)){const s=t.error.code?.split("auth/")[1]||"internal-error";e.onError(kt(this.auth,s))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const s=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=lp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ra(t))}saveEventToCache(t){this.cachedEventUids.add(Ra(t)),this.lastProcessedEventTime=Date.now()}}function Ra(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Rl({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function up(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Rl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(n,t={}){return On(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pp=/^https?/;async function gp(n){if(n.config.emulator)return;const{authorizedDomains:t}=await dp(n);for(const e of t)try{if(mp(e))return}catch{}Xt(n,"unauthorized-domain")}function mp(n){const t=Ar(),{protocol:e,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&s===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&l.hostname===s}if(!pp.test(e))return!1;if(fp.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new pi(3e4,6e4);function Pa(){const n=Lt().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Ep(n){return new Promise((t,e)=>{function s(){Pa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pa(),e(kt(n,"network-request-failed"))},timeout:_p.get()})}if(Lt().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(Lt().gapi?.load)s();else{const r=bf("iframefcb");return Lt()[r]=()=>{gapi.load?s():e(kt(n,"network-request-failed"))},Tf(`${wf()}?onload=${r}`).catch(a=>e(a))}}).catch(t=>{throw Xi=null,t})}let Xi=null;function vp(n){return Xi=Xi||Ep(n),Xi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=new pi(5e3,15e3),Tp="__/auth/iframe",wp="emulator/auth/iframe",bp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ap=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ip(n){const t=n.config;L(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Hr(t,wp):`https://${n.config.authDomain}/${Tp}`,s={apiKey:t.apiKey,appName:n.name,v:Ke},r=Ap.get(n.config.apiHost);r&&(s.eid=r);const a=n._getFrameworks();return a.length&&(s.fw=a.join(",")),`${e}?${fi(s).slice(1)}`}async function Sp(n){const t=await vp(n),e=Lt().gapi;return L(e,n,"internal-error"),t.open({where:document.body,url:Ip(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bp,dontclear:!0},s=>new Promise(async(r,a)=>{await s.restyle({setHideOnLeave:!1});const l=kt(n,"network-request-failed"),u=Lt().setTimeout(()=>{a(l)},yp.get());function f(){Lt().clearTimeout(u),r(s)}s.ping(f).then(f,()=>{a(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Op=500,Np=600,Dp="_blank",Rp="http://localhost";class ka{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Pp(n,t,e,s=Op,r=Np){const a=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-s)/2,0).toString();let u="";const f={...Cp,width:s.toString(),height:r.toString(),top:a,left:l},v=ot().toLowerCase();e&&(u=ul(v)?Dp:e),ll(v)&&(t=t||Rp,f.scrollbars="yes");const w=Object.entries(f).reduce((A,[O,R])=>`${A}${O}=${R},`,"");if(ff(v)&&u!=="_self")return kp(t||"",u),new ka(null);const I=window.open(t||"",u,w);L(I,n,"popup-blocked");try{I.focus()}catch{}return new ka(I)}function kp(n,t){const e=document.createElement("a");e.href=n,e.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="__/auth/handler",Mp="emulator/auth/handler",xp=encodeURIComponent("fac");async function La(n,t,e,s,r,a){L(n.config.authDomain,n,"auth-domain-config-required"),L(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:s,v:Ke,eventId:r};if(t instanceof yl){t.setDefaultLanguage(n.languageCode),l.providerId=t.providerId||"",xu(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[w,I]of Object.entries({}))l[w]=I}if(t instanceof gi){const w=t.getScopes().filter(I=>I!=="");w.length>0&&(l.scopes=w.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const w of Object.keys(u))u[w]===void 0&&delete u[w];const f=await n._getAppCheckToken(),v=f?`#${xp}=${encodeURIComponent(f)}`:"";return`${$p(n)}?${fi(u).slice(1)}${v}`}function $p({config:n}){return n.emulator?Hr(n,Mp):`https://${n.authDomain}/${Lp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="webStorageSupport";class Up{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Il,this._completeRedirectFn=cp,this._overrideRedirectResult=rp}async _openPopup(t,e,s,r){Jt(this.eventManagers[t._key()]?.manager,"_initialize() not called before _openPopup()");const a=await La(t,e,s,Ar(),r);return Pp(t,a,qr())}async _openRedirect(t,e,s,r){await this._originValidation(t);const a=await La(t,e,s,Ar(),r);return jf(a),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:r,promise:a}=this.eventManagers[e];return r?Promise.resolve(r):(Jt(a,"If manager is not set, promise should be"),a)}const s=this.initAndGetManager(t);return this.eventManagers[e]={promise:s},s.catch(()=>{delete this.eventManagers[e]}),s}async initAndGetManager(t){const e=await Sp(t),s=new hp(t);return e.register("authEvent",r=>(L(r?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=e,s}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Zs,{type:Zs},r=>{const a=r?.[0]?.[Zs];a!==void 0&&e(!!a),Xt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=gp(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ml()||hl()||zr()}}const Vp=Up;var Ma="@firebase/auth",xa="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hp(n){je(new _e("auth",(t,{options:e})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),a=t.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=s.options;L(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const f={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_l(n)},v=new vf(s,r,a,f);return If(v,e),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,s)=>{t.getProvider("auth-internal").initialize()})),je(new _e("auth-internal",t=>{const e=Kr(t.getProvider("auth").getImmediate());return(s=>new Fp(s))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Ma,xa,jp(n)),Pt(Ma,xa,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=5*60,Wp=qc("authIdTokenMaxAge")||Bp;let $a=null;const zp=n=>async t=>{const e=t&&await t.getIdTokenResult(),s=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(s&&s>Wp)return;const r=e?.token;$a!==r&&($a=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Kp(n=Fr()){const t=ms(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Af(n,{popupRedirectResolver:Vp,persistence:[Xf,Uf,Il]}),s=qc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(s,location.origin);if(location.origin===a.origin){const l=zp(a.toString());Lf(e,l,()=>l(e.currentUser)),kf(e,u=>l(u))}}const r=zc("auth");return r&&Sf(e,`http://${r}`),e}function Gp(){return document.getElementsByTagName("head")?.[0]??document}yf({loadJS(n){return new Promise((t,e)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=r=>{const a=kt("internal-error");a.customData=r,e(a)},s.type="text/javascript",s.charset="UTF-8",Gp().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hp("Browser");var qp="firebase",Yp="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(qp,Yp,"app");var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xr;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(_,d){function g(){}g.prototype=d.prototype,_.F=d.prototype,_.prototype=new g,_.prototype.constructor=_,_.D=function(E,m,y){for(var p=Array(arguments.length-2),q=2;q<arguments.length;q++)p[q-2]=arguments[q];return d.prototype[m].apply(E,p)}}function e(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,e),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(_,d,g){g||(g=0);const E=Array(16);if(typeof d=="string")for(var m=0;m<16;++m)E[m]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(m=0;m<16;++m)E[m]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=_.g[0],g=_.g[1],m=_.g[2];let y=_.g[3],p;p=d+(y^g&(m^y))+E[0]+3614090360&4294967295,d=g+(p<<7&4294967295|p>>>25),p=y+(m^d&(g^m))+E[1]+3905402710&4294967295,y=d+(p<<12&4294967295|p>>>20),p=m+(g^y&(d^g))+E[2]+606105819&4294967295,m=y+(p<<17&4294967295|p>>>15),p=g+(d^m&(y^d))+E[3]+3250441966&4294967295,g=m+(p<<22&4294967295|p>>>10),p=d+(y^g&(m^y))+E[4]+4118548399&4294967295,d=g+(p<<7&4294967295|p>>>25),p=y+(m^d&(g^m))+E[5]+1200080426&4294967295,y=d+(p<<12&4294967295|p>>>20),p=m+(g^y&(d^g))+E[6]+2821735955&4294967295,m=y+(p<<17&4294967295|p>>>15),p=g+(d^m&(y^d))+E[7]+4249261313&4294967295,g=m+(p<<22&4294967295|p>>>10),p=d+(y^g&(m^y))+E[8]+1770035416&4294967295,d=g+(p<<7&4294967295|p>>>25),p=y+(m^d&(g^m))+E[9]+2336552879&4294967295,y=d+(p<<12&4294967295|p>>>20),p=m+(g^y&(d^g))+E[10]+4294925233&4294967295,m=y+(p<<17&4294967295|p>>>15),p=g+(d^m&(y^d))+E[11]+2304563134&4294967295,g=m+(p<<22&4294967295|p>>>10),p=d+(y^g&(m^y))+E[12]+1804603682&4294967295,d=g+(p<<7&4294967295|p>>>25),p=y+(m^d&(g^m))+E[13]+4254626195&4294967295,y=d+(p<<12&4294967295|p>>>20),p=m+(g^y&(d^g))+E[14]+2792965006&4294967295,m=y+(p<<17&4294967295|p>>>15),p=g+(d^m&(y^d))+E[15]+1236535329&4294967295,g=m+(p<<22&4294967295|p>>>10),p=d+(m^y&(g^m))+E[1]+4129170786&4294967295,d=g+(p<<5&4294967295|p>>>27),p=y+(g^m&(d^g))+E[6]+3225465664&4294967295,y=d+(p<<9&4294967295|p>>>23),p=m+(d^g&(y^d))+E[11]+643717713&4294967295,m=y+(p<<14&4294967295|p>>>18),p=g+(y^d&(m^y))+E[0]+3921069994&4294967295,g=m+(p<<20&4294967295|p>>>12),p=d+(m^y&(g^m))+E[5]+3593408605&4294967295,d=g+(p<<5&4294967295|p>>>27),p=y+(g^m&(d^g))+E[10]+38016083&4294967295,y=d+(p<<9&4294967295|p>>>23),p=m+(d^g&(y^d))+E[15]+3634488961&4294967295,m=y+(p<<14&4294967295|p>>>18),p=g+(y^d&(m^y))+E[4]+3889429448&4294967295,g=m+(p<<20&4294967295|p>>>12),p=d+(m^y&(g^m))+E[9]+568446438&4294967295,d=g+(p<<5&4294967295|p>>>27),p=y+(g^m&(d^g))+E[14]+3275163606&4294967295,y=d+(p<<9&4294967295|p>>>23),p=m+(d^g&(y^d))+E[3]+4107603335&4294967295,m=y+(p<<14&4294967295|p>>>18),p=g+(y^d&(m^y))+E[8]+1163531501&4294967295,g=m+(p<<20&4294967295|p>>>12),p=d+(m^y&(g^m))+E[13]+2850285829&4294967295,d=g+(p<<5&4294967295|p>>>27),p=y+(g^m&(d^g))+E[2]+4243563512&4294967295,y=d+(p<<9&4294967295|p>>>23),p=m+(d^g&(y^d))+E[7]+1735328473&4294967295,m=y+(p<<14&4294967295|p>>>18),p=g+(y^d&(m^y))+E[12]+2368359562&4294967295,g=m+(p<<20&4294967295|p>>>12),p=d+(g^m^y)+E[5]+4294588738&4294967295,d=g+(p<<4&4294967295|p>>>28),p=y+(d^g^m)+E[8]+2272392833&4294967295,y=d+(p<<11&4294967295|p>>>21),p=m+(y^d^g)+E[11]+1839030562&4294967295,m=y+(p<<16&4294967295|p>>>16),p=g+(m^y^d)+E[14]+4259657740&4294967295,g=m+(p<<23&4294967295|p>>>9),p=d+(g^m^y)+E[1]+2763975236&4294967295,d=g+(p<<4&4294967295|p>>>28),p=y+(d^g^m)+E[4]+1272893353&4294967295,y=d+(p<<11&4294967295|p>>>21),p=m+(y^d^g)+E[7]+4139469664&4294967295,m=y+(p<<16&4294967295|p>>>16),p=g+(m^y^d)+E[10]+3200236656&4294967295,g=m+(p<<23&4294967295|p>>>9),p=d+(g^m^y)+E[13]+681279174&4294967295,d=g+(p<<4&4294967295|p>>>28),p=y+(d^g^m)+E[0]+3936430074&4294967295,y=d+(p<<11&4294967295|p>>>21),p=m+(y^d^g)+E[3]+3572445317&4294967295,m=y+(p<<16&4294967295|p>>>16),p=g+(m^y^d)+E[6]+76029189&4294967295,g=m+(p<<23&4294967295|p>>>9),p=d+(g^m^y)+E[9]+3654602809&4294967295,d=g+(p<<4&4294967295|p>>>28),p=y+(d^g^m)+E[12]+3873151461&4294967295,y=d+(p<<11&4294967295|p>>>21),p=m+(y^d^g)+E[15]+530742520&4294967295,m=y+(p<<16&4294967295|p>>>16),p=g+(m^y^d)+E[2]+3299628645&4294967295,g=m+(p<<23&4294967295|p>>>9),p=d+(m^(g|~y))+E[0]+4096336452&4294967295,d=g+(p<<6&4294967295|p>>>26),p=y+(g^(d|~m))+E[7]+1126891415&4294967295,y=d+(p<<10&4294967295|p>>>22),p=m+(d^(y|~g))+E[14]+2878612391&4294967295,m=y+(p<<15&4294967295|p>>>17),p=g+(y^(m|~d))+E[5]+4237533241&4294967295,g=m+(p<<21&4294967295|p>>>11),p=d+(m^(g|~y))+E[12]+1700485571&4294967295,d=g+(p<<6&4294967295|p>>>26),p=y+(g^(d|~m))+E[3]+2399980690&4294967295,y=d+(p<<10&4294967295|p>>>22),p=m+(d^(y|~g))+E[10]+4293915773&4294967295,m=y+(p<<15&4294967295|p>>>17),p=g+(y^(m|~d))+E[1]+2240044497&4294967295,g=m+(p<<21&4294967295|p>>>11),p=d+(m^(g|~y))+E[8]+1873313359&4294967295,d=g+(p<<6&4294967295|p>>>26),p=y+(g^(d|~m))+E[15]+4264355552&4294967295,y=d+(p<<10&4294967295|p>>>22),p=m+(d^(y|~g))+E[6]+2734768916&4294967295,m=y+(p<<15&4294967295|p>>>17),p=g+(y^(m|~d))+E[13]+1309151649&4294967295,g=m+(p<<21&4294967295|p>>>11),p=d+(m^(g|~y))+E[4]+4149444226&4294967295,d=g+(p<<6&4294967295|p>>>26),p=y+(g^(d|~m))+E[11]+3174756917&4294967295,y=d+(p<<10&4294967295|p>>>22),p=m+(d^(y|~g))+E[2]+718787259&4294967295,m=y+(p<<15&4294967295|p>>>17),p=g+(y^(m|~d))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+d&4294967295,_.g[1]=_.g[1]+(m+(p<<21&4294967295|p>>>11))&4294967295,_.g[2]=_.g[2]+m&4294967295,_.g[3]=_.g[3]+y&4294967295}s.prototype.v=function(_,d){d===void 0&&(d=_.length);const g=d-this.blockSize,E=this.C;let m=this.h,y=0;for(;y<d;){if(m==0)for(;y<=g;)r(this,_,y),y+=this.blockSize;if(typeof _=="string"){for(;y<d;)if(E[m++]=_.charCodeAt(y++),m==this.blockSize){r(this,E),m=0;break}}else for(;y<d;)if(E[m++]=_[y++],m==this.blockSize){r(this,E),m=0;break}}this.h=m,this.o+=d},s.prototype.A=function(){var _=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);_[0]=128;for(var d=1;d<_.length-8;++d)_[d]=0;d=this.o*8;for(var g=_.length-8;g<_.length;++g)_[g]=d&255,d/=256;for(this.v(_),_=Array(16),d=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)_[d++]=this.g[g]>>>E&255;return _};function a(_,d){var g=u;return Object.prototype.hasOwnProperty.call(g,_)?g[_]:g[_]=d(_)}function l(_,d){this.h=d;const g=[];let E=!0;for(let m=_.length-1;m>=0;m--){const y=_[m]|0;E&&y==d||(g[m]=y,E=!1)}this.g=g}var u={};function f(_){return-128<=_&&_<128?a(_,function(d){return new l([d|0],d<0?-1:0)}):new l([_|0],_<0?-1:0)}function v(_){if(isNaN(_)||!isFinite(_))return I;if(_<0)return N(v(-_));const d=[];let g=1;for(let E=0;_>=g;E++)d[E]=_/g|0,g*=4294967296;return new l(d,0)}function w(_,d){if(_.length==0)throw Error("number format error: empty string");if(d=d||10,d<2||36<d)throw Error("radix out of range: "+d);if(_.charAt(0)=="-")return N(w(_.substring(1),d));if(_.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=v(Math.pow(d,8));let E=I;for(let y=0;y<_.length;y+=8){var m=Math.min(8,_.length-y);const p=parseInt(_.substring(y,y+m),d);m<8?(m=v(Math.pow(d,m)),E=E.j(m).add(v(p))):(E=E.j(g),E=E.add(v(p)))}return E}var I=f(0),A=f(1),O=f(16777216);n=l.prototype,n.m=function(){if(D(this))return-N(this).m();let _=0,d=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);_+=(E>=0?E:4294967296+E)*d,d*=4294967296}return _},n.toString=function(_){if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(D(this))return"-"+N(this).toString(_);const d=v(Math.pow(_,6));var g=this;let E="";for(;;){const m=P(g,d).g;g=x(g,m.j(d));let y=((g.g.length>0?g.g[0]:g.h)>>>0).toString(_);if(g=m,R(g))return y+E;for(;y.length<6;)y="0"+y;E=y+E}},n.i=function(_){return _<0?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(let d=0;d<_.g.length;d++)if(_.g[d]!=0)return!1;return!0}function D(_){return _.h==-1}n.l=function(_){return _=x(this,_),D(_)?-1:R(_)?0:1};function N(_){const d=_.g.length,g=[];for(let E=0;E<d;E++)g[E]=~_.g[E];return new l(g,~_.h).add(A)}n.abs=function(){return D(this)?N(this):this},n.add=function(_){const d=Math.max(this.g.length,_.g.length),g=[];let E=0;for(let m=0;m<=d;m++){let y=E+(this.i(m)&65535)+(_.i(m)&65535),p=(y>>>16)+(this.i(m)>>>16)+(_.i(m)>>>16);E=p>>>16,y&=65535,p&=65535,g[m]=p<<16|y}return new l(g,g[g.length-1]&-2147483648?-1:0)};function x(_,d){return _.add(N(d))}n.j=function(_){if(R(this)||R(_))return I;if(D(this))return D(_)?N(this).j(N(_)):N(N(this).j(_));if(D(_))return N(this.j(N(_)));if(this.l(O)<0&&_.l(O)<0)return v(this.m()*_.m());const d=this.g.length+_.g.length,g=[];for(var E=0;E<2*d;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let m=0;m<_.g.length;m++){const y=this.i(E)>>>16,p=this.i(E)&65535,q=_.i(m)>>>16,tt=_.i(m)&65535;g[2*E+2*m]+=p*tt,F(g,2*E+2*m),g[2*E+2*m+1]+=y*tt,F(g,2*E+2*m+1),g[2*E+2*m+1]+=p*q,F(g,2*E+2*m+1),g[2*E+2*m+2]+=y*q,F(g,2*E+2*m+2)}for(_=0;_<d;_++)g[_]=g[2*_+1]<<16|g[2*_];for(_=d;_<2*d;_++)g[_]=0;return new l(g,0)};function F(_,d){for(;(_[d]&65535)!=_[d];)_[d+1]+=_[d]>>>16,_[d]&=65535,d++}function U(_,d){this.g=_,this.h=d}function P(_,d){if(R(d))throw Error("division by zero");if(R(_))return new U(I,I);if(D(_))return d=P(N(_),d),new U(N(d.g),N(d.h));if(D(d))return d=P(_,N(d)),new U(N(d.g),d.h);if(_.g.length>30){if(D(_)||D(d))throw Error("slowDivide_ only works with positive integers.");for(var g=A,E=d;E.l(_)<=0;)g=$(g),E=$(E);var m=M(g,1),y=M(E,1);for(E=M(E,2),g=M(g,2);!R(E);){var p=y.add(E);p.l(_)<=0&&(m=m.add(g),y=p),E=M(E,1),g=M(g,1)}return d=x(_,m.j(d)),new U(m,d)}for(m=I;_.l(d)>=0;){for(g=Math.max(1,Math.floor(_.m()/d.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),y=v(g),p=y.j(d);D(p)||p.l(_)>0;)g-=E,y=v(g),p=y.j(d);R(y)&&(y=A),m=m.add(y),_=x(_,p)}return new U(m,_)}n.B=function(_){return P(this,_).h},n.and=function(_){const d=Math.max(this.g.length,_.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)&_.i(E);return new l(g,this.h&_.h)},n.or=function(_){const d=Math.max(this.g.length,_.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)|_.i(E);return new l(g,this.h|_.h)},n.xor=function(_){const d=Math.max(this.g.length,_.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)^_.i(E);return new l(g,this.h^_.h)};function $(_){const d=_.g.length+1,g=[];for(let E=0;E<d;E++)g[E]=_.i(E)<<1|_.i(E-1)>>>31;return new l(g,_.h)}function M(_,d){const g=d>>5;d%=32;const E=_.g.length-g,m=[];for(let y=0;y<E;y++)m[y]=d>0?_.i(y+g)>>>d|_.i(y+g+1)<<32-d:_.i(y+g);return new l(m,_.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=v,l.fromString=w,Xr=l}).apply(typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{});var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof $i=="object"&&$i];for(var o=0;o<i.length;++o){var c=i[o];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var s=e(this);function r(i,o){if(o)t:{var c=s;i=i.split(".");for(var h=0;h<i.length-1;h++){var T=i[h];if(!(T in c))break t;c=c[T]}i=i[i.length-1],h=c[i],o=o(h),o!=h&&o!=null&&t(c,i,{configurable:!0,writable:!0,value:o})}}r("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(i){return i||function(o){var c=[],h;for(h in o)Object.prototype.hasOwnProperty.call(o,h)&&c.push([h,o[h]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(i){var o=typeof i;return o=="object"&&i!=null||o=="function"}function f(i,o,c){return i.call.apply(i.bind,arguments)}function v(i,o,c){return v=f,v.apply(null,arguments)}function w(i,o){var c=Array.prototype.slice.call(arguments,1);return function(){var h=c.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function I(i,o){function c(){}c.prototype=o.prototype,i.Z=o.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(h,T,b){for(var C=Array(arguments.length-2),V=2;V<arguments.length;V++)C[V-2]=arguments[V];return o.prototype[T].apply(h,C)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function O(i){const o=i.length;if(o>0){const c=Array(o);for(let h=0;h<o;h++)c[h]=i[h];return c}return[]}function R(i,o){for(let h=1;h<arguments.length;h++){const T=arguments[h];var c=typeof T;if(c=c!="object"?c:T?Array.isArray(T)?"array":c:"null",c=="array"||c=="object"&&typeof T.length=="number"){c=i.length||0;const b=T.length||0;i.length=c+b;for(let C=0;C<b;C++)i[c+C]=T[C]}else i.push(T)}}class D{constructor(o,c){this.i=o,this.j=c,this.h=0,this.g=null}get(){let o;return this.h>0?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function N(i){l.setTimeout(()=>{throw i},0)}function x(){var i=_;let o=null;return i.g&&(o=i.g,i.g=i.g.next,i.g||(i.h=null),o.next=null),o}class F{constructor(){this.h=this.g=null}add(o,c){const h=U.get();h.set(o,c),this.h?this.h.next=h:this.g=h,this.h=h}}var U=new D(()=>new P,i=>i.reset());class P{constructor(){this.next=this.g=this.h=null}set(o,c){this.h=o,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let $,M=!1,_=new F,d=()=>{const i=Promise.resolve(void 0);$=()=>{i.then(g)}};function g(){for(var i;i=x();){try{i.h.call(i.g)}catch(c){N(c)}var o=U;o.j(i),o.h<100&&(o.h++,i.next=o.g,o.g=i)}M=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function m(i,o){this.type=i,this.g=this.target=o,this.defaultPrevented=!1}m.prototype.h=function(){this.defaultPrevented=!0};var y=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var i=!1,o=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};l.addEventListener("test",c,o),l.removeEventListener("test",c,o)}catch{}return i}();function p(i){return/^[\s\xa0]*$/.test(i)}function q(i,o){m.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,o)}I(q,m),q.prototype.init=function(i,o){const c=this.type=i.type,h=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=o,o=i.relatedTarget,o||(c=="mouseover"?o=i.fromElement:c=="mouseout"&&(o=i.toElement)),this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&q.Z.h.call(this)},q.prototype.h=function(){q.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var tt="closure_listenable_"+(Math.random()*1e6|0),et=0;function ct(i,o,c,h,T){this.listener=i,this.proxy=null,this.src=o,this.type=c,this.capture=!!h,this.ha=T,this.key=++et,this.da=this.fa=!1}function jt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function dt(i,o,c){for(const h in i)o.call(c,i[h],h,i)}function Ye(i,o){for(const c in i)o.call(void 0,i[c],c,i)}function Xe(i){const o={};for(const c in i)o[c]=i[c];return o}const te="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Se(i,o){let c,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(c in h)i[c]=h[c];for(let b=0;b<te.length;b++)c=te[b],Object.prototype.hasOwnProperty.call(h,c)&&(i[c]=h[c])}}function vt(i){this.src=i,this.g={},this.h=0}vt.prototype.add=function(i,o,c,h,T){const b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);const C=Ht(i,o,h,T);return C>-1?(o=i[C],c||(o.fa=!1)):(o=new ct(o,this.src,b,!!h,T),o.fa=c,i.push(o)),o};function ft(i,o){const c=o.type;if(c in i.g){var h=i.g[c],T=Array.prototype.indexOf.call(h,o,void 0),b;(b=T>=0)&&Array.prototype.splice.call(h,T,1),b&&(jt(o),i.g[c].length==0&&(delete i.g[c],i.h--))}}function Ht(i,o,c,h){for(let T=0;T<i.length;++T){const b=i[T];if(!b.da&&b.listener==o&&b.capture==!!c&&b.ha==h)return T}return-1}var ee="closure_lm_"+(Math.random()*1e6|0),yt={};function Je(i,o,c,h,T){if(Array.isArray(o)){for(let b=0;b<o.length;b++)Je(i,o[b],c,h,T);return null}return c=Si(c),i&&i[tt]?i.J(o,c,u(h)?!!h.capture:!1,T):Cs(i,o,c,!1,h,T)}function Cs(i,o,c,h,T,b){if(!o)throw Error("Invalid event type");const C=u(T)?!!T.capture:!!T;let V=Ze(i);if(V||(i[ee]=V=new vt(i)),c=V.add(o,c,h,C,b),c.proxy)return c;if(h=kn(),c.proxy=h,h.src=i,h.listener=c,i.addEventListener)y||(T=C),T===void 0&&(T=!1),i.addEventListener(o.toString(),h,T);else if(i.attachEvent)i.attachEvent(Ii(o.toString()),h);else if(i.addListener&&i.removeListener)i.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return c}function kn(){function i(c){return o.call(i.src,i.listener,c)}const o=Os;return i}function Ai(i,o,c,h,T){if(Array.isArray(o))for(var b=0;b<o.length;b++)Ai(i,o[b],c,h,T);else h=u(h)?!!h.capture:!!h,c=Si(c),i&&i[tt]?(i=i.i,b=String(o).toString(),b in i.g&&(o=i.g[b],c=Ht(o,c,h,T),c>-1&&(jt(o[c]),Array.prototype.splice.call(o,c,1),o.length==0&&(delete i.g[b],i.h--)))):i&&(i=Ze(i))&&(o=i.g[o.toString()],i=-1,o&&(i=Ht(o,c,h,T)),(c=i>-1?o[i]:null)&&Qe(c))}function Qe(i){if(typeof i!="number"&&i&&!i.da){var o=i.src;if(o&&o[tt])ft(o.i,i);else{var c=i.type,h=i.proxy;o.removeEventListener?o.removeEventListener(c,h,i.capture):o.detachEvent?o.detachEvent(Ii(c),h):o.addListener&&o.removeListener&&o.removeListener(h),(c=Ze(o))?(ft(c,i),c.h==0&&(c.src=null,o[ee]=null)):jt(i)}}}function Ii(i){return i in yt?yt[i]:yt[i]="on"+i}function Os(i,o){if(i.da)i=!0;else{o=new q(o,this);const c=i.listener,h=i.ha||i.src;i.fa&&Qe(i),i=c.call(h,o)}return i}function Ze(i){return i=i[ee],i instanceof vt?i:null}var tn="__closure_events_fn_"+(Math.random()*1e9>>>0);function Si(i){return typeof i=="function"?i:(i[tn]||(i[tn]=function(o){return i.handleEvent(o)}),i[tn])}function Q(){E.call(this),this.i=new vt(this),this.M=this,this.G=null}I(Q,E),Q.prototype[tt]=!0,Q.prototype.removeEventListener=function(i,o,c,h){Ai(this,i,o,c,h)};function G(i,o){var c,h=i.G;if(h)for(c=[];h;h=h.G)c.push(h);if(i=i.M,h=o.type||o,typeof o=="string")o=new m(o,i);else if(o instanceof m)o.target=o.target||i;else{var T=o;o=new m(h,i),Se(o,T)}T=!0;let b,C;if(c)for(C=c.length-1;C>=0;C--)b=o.g=c[C],T=Bt(b,h,!0,o)&&T;if(b=o.g=i,T=Bt(b,h,!0,o)&&T,T=Bt(b,h,!1,o)&&T,c)for(C=0;C<c.length;C++)b=o.g=c[C],T=Bt(b,h,!1,o)&&T}Q.prototype.N=function(){if(Q.Z.N.call(this),this.i){var i=this.i;for(const o in i.g){const c=i.g[o];for(let h=0;h<c.length;h++)jt(c[h]);delete i.g[o],i.h--}}this.G=null},Q.prototype.J=function(i,o,c,h){return this.i.add(String(i),o,!1,c,h)},Q.prototype.K=function(i,o,c,h){return this.i.add(String(i),o,!0,c,h)};function Bt(i,o,c,h){if(o=i.i.g[String(o)],!o)return!0;o=o.concat();let T=!0;for(let b=0;b<o.length;++b){const C=o[b];if(C&&!C.da&&C.capture==c){const V=C.listener,J=C.ha||C.src;C.fa&&ft(i.i,C),T=V.call(J,h)!==!1&&T}}return T&&!h.defaultPrevented}function Ci(i,o){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(o)>2147483647?-1:l.setTimeout(i,o||0)}function Ln(i){i.g=Ci(()=>{i.g=null,i.i&&(i.i=!1,Ln(i))},i.l);const o=i.h;i.h=null,i.m.apply(null,o)}class Mn extends E{constructor(o,c){super(),this.m=o,this.l=c,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Ln(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ne(i){E.call(this),this.h=i,this.g={}}I(ne,E);var xn=[];function $n(i){dt(i.g,function(o,c){this.g.hasOwnProperty(c)&&Qe(o)},i),i.g={}}ne.prototype.N=function(){ne.Z.N.call(this),$n(this)},ne.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var en=l.JSON.stringify,Bh=l.JSON.parse,Wh=class{stringify(i){return l.JSON.stringify(i,void 0)}parse(i){return l.JSON.parse(i,void 0)}};function To(){}function zh(){}var Un={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ns(){m.call(this,"d")}I(Ns,m);function Ds(){m.call(this,"c")}I(Ds,m);var nn={},wo=null;function Rs(){return wo=wo||new Q}nn.Ia="serverreachability";function bo(i){m.call(this,nn.Ia,i)}I(bo,m);function Vn(i){const o=Rs();G(o,new bo(o))}nn.STAT_EVENT="statevent";function Ao(i,o){m.call(this,nn.STAT_EVENT,i),this.stat=o}I(Ao,m);function nt(i){const o=Rs();G(o,new Ao(o,i))}nn.Ja="timingevent";function Io(i,o){m.call(this,nn.Ja,i),this.size=o}I(Io,m);function Fn(i,o){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){i()},o)}function jn(){this.g=!0}jn.prototype.ua=function(){this.g=!1};function Kh(i,o,c,h,T,b){i.info(function(){if(i.g)if(b){var C="",V=b.split("&");for(let z=0;z<V.length;z++){var J=V[z].split("=");if(J.length>1){const Z=J[0];J=J[1];const Ot=Z.split("_");C=Ot.length>=2&&Ot[1]=="type"?C+(Z+"="+J+"&"):C+(Z+"=redacted&")}}}else C=null;else C=b;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+o+`
`+c+`
`+C})}function Gh(i,o,c,h,T,b,C){i.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+o+`
`+c+`
`+b+" "+C})}function sn(i,o,c,h){i.info(function(){return"XMLHTTP TEXT ("+o+"): "+Yh(i,c)+(h?" "+h:"")})}function qh(i,o){i.info(function(){return"TIMEOUT: "+o})}jn.prototype.info=function(){};function Yh(i,o){if(!i.g)return o;if(!o)return null;try{const b=JSON.parse(o);if(b){for(i=0;i<b.length;i++)if(Array.isArray(b[i])){var c=b[i];if(!(c.length<2)){var h=c[1];if(Array.isArray(h)&&!(h.length<1)){var T=h[0];if(T!="noop"&&T!="stop"&&T!="close")for(let C=1;C<h.length;C++)h[C]=""}}}}return en(b)}catch{return o}}var Ps={NO_ERROR:0,TIMEOUT:8},Xh={},So;function ks(){}I(ks,To),ks.prototype.g=function(){return new XMLHttpRequest},So=new ks;function Hn(i){return encodeURIComponent(String(i))}function Jh(i){var o=1;i=i.split(":");const c=[];for(;o>0&&i.length;)c.push(i.shift()),o--;return i.length&&c.push(i.join(":")),c}function ie(i,o,c,h){this.j=i,this.i=o,this.l=c,this.S=h||1,this.V=new ne(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Co}function Co(){this.i=null,this.g="",this.h=!1}var Oo={},Ls={};function Ms(i,o,c){i.M=1,i.A=Ni(Ct(o)),i.u=c,i.R=!0,No(i,null)}function No(i,o){i.F=Date.now(),Oi(i),i.B=Ct(i.A);var c=i.B,h=i.S;Array.isArray(h)||(h=[String(h)]),Ho(c.i,"t",h),i.C=0,c=i.j.L,i.h=new Co,i.g=oa(i.j,c?o:null,!i.u),i.P>0&&(i.O=new Mn(v(i.Y,i,i.g),i.P)),o=i.V,c=i.g,h=i.ba;var T="readystatechange";Array.isArray(T)||(T&&(xn[0]=T.toString()),T=xn);for(let b=0;b<T.length;b++){const C=Je(c,T[b],h||o.handleEvent,!1,o.h||o);if(!C)break;o.g[C.key]=C}o=i.J?Xe(i.J):{},i.u?(i.v||(i.v="POST"),o["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,o)):(i.v="GET",i.g.ea(i.B,i.v,null,o)),Vn(),Kh(i.i,i.v,i.B,i.l,i.S,i.u)}ie.prototype.ba=function(i){i=i.target;const o=this.O;o&&oe(i)==3?o.j():this.Y(i)},ie.prototype.Y=function(i){try{if(i==this.g)t:{const V=oe(this.g),J=this.g.ya(),z=this.g.ca();if(!(V<3)&&(V!=3||this.g&&(this.h.h||this.g.la()||Yo(this.g)))){this.K||V!=4||J==7||(J==8||z<=0?Vn(3):Vn(2)),xs(this);var o=this.g.ca();this.X=o;var c=Qh(this);if(this.o=o==200,Gh(this.i,this.v,this.B,this.l,this.S,V,o),this.o){if(this.U&&!this.L){e:{if(this.g){var h,T=this.g;if((h=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(h)){var b=h;break e}}b=null}if(i=b)sn(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,$s(this,i);else{this.o=!1,this.m=3,nt(12),Ce(this),Bn(this);break t}}if(this.R){i=!0;let Z;for(;!this.K&&this.C<c.length;)if(Z=Zh(this,c),Z==Ls){V==4&&(this.m=4,nt(14),i=!1),sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Z==Oo){this.m=4,nt(15),sn(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else sn(this.i,this.l,Z,null),$s(this,Z);if(Do(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),V!=4||c.length!=0||this.h.h||(this.m=1,nt(16),i=!1),this.o=this.o&&i,!i)sn(this.i,this.l,c,"[Invalid Chunked Response]"),Ce(this),Bn(this);else if(c.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),zs(C),C.P=!0,nt(11))}}else sn(this.i,this.l,c,null),$s(this,c);V==4&&Ce(this),this.o&&!this.K&&(V==4?na(this.j,this):(this.o=!1,Oi(this)))}else fu(this.g),o==400&&c.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),Ce(this),Bn(this)}}}catch{}finally{}};function Qh(i){if(!Do(i))return i.g.la();const o=Yo(i.g);if(o==="")return"";let c="";const h=o.length,T=oe(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ce(i),Bn(i),"";i.h.i=new l.TextDecoder}for(let b=0;b<h;b++)i.h.h=!0,c+=i.h.i.decode(o[b],{stream:!(T&&b==h-1)});return o.length=0,i.h.g+=c,i.C=0,i.h.g}function Do(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Zh(i,o){var c=i.C,h=o.indexOf(`
`,c);return h==-1?Ls:(c=Number(o.substring(c,h)),isNaN(c)?Oo:(h+=1,h+c>o.length?Ls:(o=o.slice(h,h+c),i.C=h+c,o)))}ie.prototype.cancel=function(){this.K=!0,Ce(this)};function Oi(i){i.T=Date.now()+i.H,Ro(i,i.H)}function Ro(i,o){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Fn(v(i.aa,i),o)}function xs(i){i.D&&(l.clearTimeout(i.D),i.D=null)}ie.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(qh(this.i,this.B),this.M!=2&&(Vn(),nt(17)),Ce(this),this.m=2,Bn(this)):Ro(this,this.T-i)};function Bn(i){i.j.I==0||i.K||na(i.j,i)}function Ce(i){xs(i);var o=i.O;o&&typeof o.dispose=="function"&&o.dispose(),i.O=null,$n(i.V),i.g&&(o=i.g,i.g=null,o.abort(),o.dispose())}function $s(i,o){try{var c=i.j;if(c.I!=0&&(c.g==i||Us(c.h,i))){if(!i.L&&Us(c.h,i)&&c.I==3){try{var h=c.Ba.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)Li(c),Pi(c);else break t;Ws(c),nt(18)}}else c.xa=T[1],0<c.xa-c.K&&T[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=Fn(v(c.Va,c),6e3));Lo(c.h)<=1&&c.ta&&(c.ta=void 0)}else Ne(c,11)}else if((i.L||c.g==i)&&Li(c),!p(o))for(T=c.Ba.g.parse(o),o=0;o<T.length;o++){let z=T[o];const Z=z[0];if(!(Z<=c.K))if(c.K=Z,z=z[1],c.I==2)if(z[0]=="c"){c.M=z[1],c.ba=z[2];const Ot=z[3];Ot!=null&&(c.ka=Ot,c.j.info("VER="+c.ka));const De=z[4];De!=null&&(c.za=De,c.j.info("SVER="+c.za));const ae=z[5];ae!=null&&typeof ae=="number"&&ae>0&&(h=1.5*ae,c.O=h,c.j.info("backChannelRequestTimeoutMs_="+h)),h=c;const ce=i.g;if(ce){const Mi=ce.g?ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var b=h.h;b.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Vs(b,b.h),b.h=null))}if(h.G){const Ks=ce.g?ce.g.getResponseHeader("X-HTTP-Session-Id"):null;Ks&&(h.wa=Ks,K(h.J,h.G,Ks))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),h=c;var C=i;if(h.na=ra(h,h.L?h.ba:null,h.W),C.L){Mo(h.h,C);var V=C,J=h.O;J&&(V.H=J),V.D&&(xs(V),Oi(V)),h.g=C}else ta(h);c.i.length>0&&ki(c)}else z[0]!="stop"&&z[0]!="close"||Ne(c,7);else c.I==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?Ne(c,7):Bs(c):z[0]!="noop"&&c.l&&c.l.qa(z),c.A=0)}}Vn(4)}catch{}}var tu=class{constructor(i,o){this.g=i,this.map=o}};function Po(i){this.l=i||10,l.PerformanceNavigationTiming?(i=l.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ko(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Lo(i){return i.h?1:i.g?i.g.size:0}function Us(i,o){return i.h?i.h==o:i.g?i.g.has(o):!1}function Vs(i,o){i.g?i.g.add(o):i.h=o}function Mo(i,o){i.h&&i.h==o?i.h=null:i.g&&i.g.has(o)&&i.g.delete(o)}Po.prototype.cancel=function(){if(this.i=xo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function xo(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let o=i.i;for(const c of i.g.values())o=o.concat(c.G);return o}return O(i.i)}var $o=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eu(i,o){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const h=i[c].indexOf("=");let T,b=null;h>=0?(T=i[c].substring(0,h),b=i[c].substring(h+1)):T=i[c],o(T,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function se(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let o;i instanceof se?(this.l=i.l,Wn(this,i.j),this.o=i.o,this.g=i.g,zn(this,i.u),this.h=i.h,Fs(this,Bo(i.i)),this.m=i.m):i&&(o=String(i).match($o))?(this.l=!1,Wn(this,o[1]||"",!0),this.o=Kn(o[2]||""),this.g=Kn(o[3]||"",!0),zn(this,o[4]),this.h=Kn(o[5]||"",!0),Fs(this,o[6]||"",!0),this.m=Kn(o[7]||"")):(this.l=!1,this.i=new qn(null,this.l))}se.prototype.toString=function(){const i=[];var o=this.j;o&&i.push(Gn(o,Uo,!0),":");var c=this.g;return(c||o=="file")&&(i.push("//"),(o=this.o)&&i.push(Gn(o,Uo,!0),"@"),i.push(Hn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(Gn(c,c.charAt(0)=="/"?su:iu,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",Gn(c,ou)),i.join("")},se.prototype.resolve=function(i){const o=Ct(this);let c=!!i.j;c?Wn(o,i.j):c=!!i.o,c?o.o=i.o:c=!!i.g,c?o.g=i.g:c=i.u!=null;var h=i.h;if(c)zn(o,i.u);else if(c=!!i.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var T=o.h.lastIndexOf("/");T!=-1&&(h=o.h.slice(0,T+1)+h)}if(T=h,T==".."||T==".")h="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){h=T.lastIndexOf("/",0)==0,T=T.split("/");const b=[];for(let C=0;C<T.length;){const V=T[C++];V=="."?h&&C==T.length&&b.push(""):V==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),h&&C==T.length&&b.push("")):(b.push(V),h=!0)}h=b.join("/")}else h=T}return c?o.h=h:c=i.i.toString()!=="",c?Fs(o,Bo(i.i)):c=!!i.m,c&&(o.m=i.m),o};function Ct(i){return new se(i)}function Wn(i,o,c){i.j=c?Kn(o,!0):o,i.j&&(i.j=i.j.replace(/:$/,""))}function zn(i,o){if(o){if(o=Number(o),isNaN(o)||o<0)throw Error("Bad port number "+o);i.u=o}else i.u=null}function Fs(i,o,c){o instanceof qn?(i.i=o,au(i.i,i.l)):(c||(o=Gn(o,ru)),i.i=new qn(o,i.l))}function K(i,o,c){i.i.set(o,c)}function Ni(i){return K(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Kn(i,o){return i?o?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Gn(i,o,c){return typeof i=="string"?(i=encodeURI(i).replace(o,nu),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function nu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Uo=/[#\/\?@]/g,iu=/[#\?:]/g,su=/[#\?]/g,ru=/[#\?@]/g,ou=/#/g;function qn(i,o){this.h=this.g=null,this.i=i||null,this.j=!!o}function Oe(i){i.g||(i.g=new Map,i.h=0,i.i&&eu(i.i,function(o,c){i.add(decodeURIComponent(o.replace(/\+/g," ")),c)}))}n=qn.prototype,n.add=function(i,o){Oe(this),this.i=null,i=rn(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(o),this.h+=1,this};function Vo(i,o){Oe(i),o=rn(i,o),i.g.has(o)&&(i.i=null,i.h-=i.g.get(o).length,i.g.delete(o))}function Fo(i,o){return Oe(i),o=rn(i,o),i.g.has(o)}n.forEach=function(i,o){Oe(this),this.g.forEach(function(c,h){c.forEach(function(T){i.call(o,T,h,this)},this)},this)};function jo(i,o){Oe(i);let c=[];if(typeof o=="string")Fo(i,o)&&(c=c.concat(i.g.get(rn(i,o))));else for(i=Array.from(i.g.values()),o=0;o<i.length;o++)c=c.concat(i[o]);return c}n.set=function(i,o){return Oe(this),this.i=null,i=rn(this,i),Fo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[o]),this.h+=1,this},n.get=function(i,o){return i?(i=jo(this,i),i.length>0?String(i[0]):o):o};function Ho(i,o,c){Vo(i,o),c.length>0&&(i.i=null,i.g.set(rn(i,o),O(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],o=Array.from(this.g.keys());for(let h=0;h<o.length;h++){var c=o[h];const T=Hn(c);c=jo(this,c);for(let b=0;b<c.length;b++){let C=T;c[b]!==""&&(C+="="+Hn(c[b])),i.push(C)}}return this.i=i.join("&")};function Bo(i){const o=new qn;return o.i=i.i,i.g&&(o.g=new Map(i.g),o.h=i.h),o}function rn(i,o){return o=String(o),i.j&&(o=o.toLowerCase()),o}function au(i,o){o&&!i.j&&(Oe(i),i.i=null,i.g.forEach(function(c,h){const T=h.toLowerCase();h!=T&&(Vo(this,h),Ho(this,T,c))},i)),i.j=o}function cu(i,o){const c=new jn;if(l.Image){const h=new Image;h.onload=w(re,c,"TestLoadImage: loaded",!0,o,h),h.onerror=w(re,c,"TestLoadImage: error",!1,o,h),h.onabort=w(re,c,"TestLoadImage: abort",!1,o,h),h.ontimeout=w(re,c,"TestLoadImage: timeout",!1,o,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=i}else o(!1)}function lu(i,o){const c=new jn,h=new AbortController,T=setTimeout(()=>{h.abort(),re(c,"TestPingServer: timeout",!1,o)},1e4);fetch(i,{signal:h.signal}).then(b=>{clearTimeout(T),b.ok?re(c,"TestPingServer: ok",!0,o):re(c,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(T),re(c,"TestPingServer: error",!1,o)})}function re(i,o,c,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(c)}catch{}}function hu(){this.g=new Wh}function js(i){this.i=i.Sb||null,this.h=i.ab||!1}I(js,To),js.prototype.g=function(){return new Di(this.i,this.h)};function Di(i,o){Q.call(this),this.H=i,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}I(Di,Q),n=Di.prototype,n.open=function(i,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=o,this.readyState=1,Xn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const o={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(o.body=i),(this.H||l).fetch(new Request(this.D,o)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Yn(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Wo(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Wo(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var o=i.value?i.value:new Uint8Array(0);(o=this.B.decode(o,{stream:!i.done}))&&(this.response=this.responseText+=o)}i.done?Yn(this):Xn(this),this.readyState==3&&Wo(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Yn(this))},n.Na=function(i){this.g&&(this.response=i,Yn(this))},n.ga=function(){this.g&&Yn(this)};function Yn(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Xn(i)}n.setRequestHeader=function(i,o){this.A.append(i,o)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],o=this.h.entries();for(var c=o.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=o.next();return i.join(`\r
`)};function Xn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function zo(i){let o="";return dt(i,function(c,h){o+=h,o+=":",o+=c,o+=`\r
`}),o}function Hs(i,o,c){t:{for(h in c){var h=!1;break t}h=!0}h||(c=zo(c),typeof i=="string"?c!=null&&Hn(c):K(i,o,c))}function Y(i){Q.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}I(Y,Q);var uu=/^https?$/i,du=["POST","PUT"];n=Y.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,o,c,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);o=o?o.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():So.g(),this.g.onreadystatechange=A(v(this.Ca,this));try{this.B=!0,this.g.open(o,String(i),!0),this.B=!1}catch(b){Ko(this,b);return}if(i=c||"",c=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)c.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const b of h.keys())c.set(b,h.get(b));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(c.keys()).find(b=>b.toLowerCase()=="content-type"),T=l.FormData&&i instanceof l.FormData,!(Array.prototype.indexOf.call(du,o,void 0)>=0)||h||T||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,C]of c)this.g.setRequestHeader(b,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(b){Ko(this,b)}};function Ko(i,o){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=o,i.o=5,Go(i),Ri(i)}function Go(i){i.A||(i.A=!0,G(i,"complete"),G(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,G(this,"complete"),G(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),Y.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?qo(this):this.Xa())},n.Xa=function(){qo(this)};function qo(i){if(i.h&&typeof a<"u"){if(i.v&&oe(i)==4)setTimeout(i.Ca.bind(i),0);else if(G(i,"readystatechange"),oe(i)==4){i.h=!1;try{const b=i.ca();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break t;default:o=!1}var c;if(!(c=o)){var h;if(h=b===0){let C=String(i.D).match($o)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),h=!uu.test(C?C.toLowerCase():"")}c=h}if(c)G(i,"complete"),G(i,"success");else{i.o=6;try{var T=oe(i)>2?i.g.statusText:""}catch{T=""}i.l=T+" ["+i.ca()+"]",Go(i)}}finally{Ri(i)}}}}function Ri(i,o){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,o||G(i,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function oe(i){return i.g?i.g.readyState:0}n.ca=function(){try{return oe(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var o=this.g.responseText;return i&&o.indexOf(i)==0&&(o=o.substring(i.length)),Bh(o)}};function Yo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function fu(i){const o={};i=(i.g&&oe(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<i.length;h++){if(p(i[h]))continue;var c=Jh(i[h]);const T=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const b=o[T]||[];o[T]=b,b.push(c)}Ye(o,function(h){return h.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(i,o,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||o}function Xo(i){this.za=0,this.i=[],this.j=new jn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Jn("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Jn("baseRetryDelayMs",5e3,i),this.Za=Jn("retryDelaySeedMs",1e4,i),this.Ta=Jn("forwardChannelMaxRetries",2,i),this.va=Jn("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Po(i&&i.concurrentRequestLimit),this.Ba=new hu,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Xo.prototype,n.ka=8,n.I=1,n.connect=function(i,o,c,h){nt(0),this.W=i,this.H=o||{},c&&h!==void 0&&(this.H.OSID=c,this.H.OAID=h),this.F=this.X,this.J=ra(this,null,this.W),ki(this)};function Bs(i){if(Jo(i),i.I==3){var o=i.V++,c=Ct(i.J);if(K(c,"SID",i.M),K(c,"RID",o),K(c,"TYPE","terminate"),Qn(i,c),o=new ie(i,i.j,o),o.M=2,o.A=Ni(Ct(c)),c=!1,l.navigator&&l.navigator.sendBeacon)try{c=l.navigator.sendBeacon(o.A.toString(),"")}catch{}!c&&l.Image&&(new Image().src=o.A,c=!0),c||(o.g=oa(o.j,null),o.g.ea(o.A)),o.F=Date.now(),Oi(o)}sa(i)}function Pi(i){i.g&&(zs(i),i.g.cancel(),i.g=null)}function Jo(i){Pi(i),i.v&&(l.clearTimeout(i.v),i.v=null),Li(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&l.clearTimeout(i.m),i.m=null)}function ki(i){if(!ko(i.h)&&!i.m){i.m=!0;var o=i.Ea;$||d(),M||($(),M=!0),_.add(o,i),i.D=0}}function pu(i,o){return Lo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=o.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Fn(v(i.Ea,i,o),ia(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const T=new ie(this,this.j,i);let b=this.o;if(this.U&&(b?(b=Xe(b),Se(b,this.U)):b=this.U),this.u!==null||this.R||(T.J=b,b=null),this.S)t:{for(var o=0,c=0;c<this.i.length;c++){e:{var h=this.i[c];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(o+=h,o>4096){o=c;break t}if(o===4096||c===this.i.length-1){o=c+1;break t}}o=1e3}else o=1e3;o=Zo(this,T,o),c=Ct(this.J),K(c,"RID",i),K(c,"CVER",22),this.G&&K(c,"X-HTTP-Session-Id",this.G),Qn(this,c),b&&(this.R?o="headers="+Hn(zo(b))+"&"+o:this.u&&Hs(c,this.u,b)),Vs(this.h,T),this.Ra&&K(c,"TYPE","init"),this.S?(K(c,"$req",o),K(c,"SID","null"),T.U=!0,Ms(T,c,null)):Ms(T,c,o),this.I=2}}else this.I==3&&(i?Qo(this,i):this.i.length==0||ko(this.h)||Qo(this))};function Qo(i,o){var c;o?c=o.l:c=i.V++;const h=Ct(i.J);K(h,"SID",i.M),K(h,"RID",c),K(h,"AID",i.K),Qn(i,h),i.u&&i.o&&Hs(h,i.u,i.o),c=new ie(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),o&&(i.i=o.G.concat(i.i)),o=Zo(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Vs(i.h,c),Ms(c,h,o)}function Qn(i,o){i.H&&dt(i.H,function(c,h){K(o,h,c)}),i.l&&dt({},function(c,h){K(o,h,c)})}function Zo(i,o,c){c=Math.min(i.i.length,c);const h=i.l?v(i.l.Ka,i.l,i):null;t:{var T=i.i;let V=-1;for(;;){const J=["count="+c];V==-1?c>0?(V=T[0].g,J.push("ofs="+V)):V=0:J.push("ofs="+V);let z=!0;for(let Z=0;Z<c;Z++){var b=T[Z].g;const Ot=T[Z].map;if(b-=V,b<0)V=Math.max(0,T[Z].g-100),z=!1;else try{b="req"+b+"_"||"";try{var C=Ot instanceof Map?Ot:Object.entries(Ot);for(const[De,ae]of C){let ce=ae;u(ae)&&(ce=en(ae)),J.push(b+De+"="+encodeURIComponent(ce))}}catch(De){throw J.push(b+"type="+encodeURIComponent("_badmap")),De}}catch{h&&h(Ot)}}if(z){C=J.join("&");break t}}C=void 0}return i=i.i.splice(0,c),o.G=i,C}function ta(i){if(!i.g&&!i.v){i.Y=1;var o=i.Da;$||d(),M||($(),M=!0),_.add(o,i),i.A=0}}function Ws(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Fn(v(i.Da,i),ia(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,ea(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Fn(v(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Pi(this),ea(this))};function zs(i){i.B!=null&&(l.clearTimeout(i.B),i.B=null)}function ea(i){i.g=new ie(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var o=Ct(i.na);K(o,"RID","rpc"),K(o,"SID",i.M),K(o,"AID",i.K),K(o,"CI",i.F?"0":"1"),!i.F&&i.ia&&K(o,"TO",i.ia),K(o,"TYPE","xmlhttp"),Qn(i,o),i.u&&i.o&&Hs(o,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=Ni(Ct(o)),c.u=null,c.R=!0,No(c,i)}n.Va=function(){this.C!=null&&(this.C=null,Pi(this),Ws(this),nt(19))};function Li(i){i.C!=null&&(l.clearTimeout(i.C),i.C=null)}function na(i,o){var c=null;if(i.g==o){Li(i),zs(i),i.g=null;var h=2}else if(Us(i.h,o))c=o.G,Mo(i.h,o),h=1;else return;if(i.I!=0){if(o.o)if(h==1){c=o.u?o.u.length:0,o=Date.now()-o.F;var T=i.D;h=Rs(),G(h,new Io(h,c)),ki(i)}else ta(i);else if(T=o.m,T==3||T==0&&o.X>0||!(h==1&&pu(i,o)||h==2&&Ws(i)))switch(c&&c.length>0&&(o=i.h,o.i=o.i.concat(c)),T){case 1:Ne(i,5);break;case 4:Ne(i,10);break;case 3:Ne(i,6);break;default:Ne(i,2)}}}function ia(i,o){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*o}function Ne(i,o){if(i.j.info("Error code "+o),o==2){var c=v(i.bb,i),h=i.Ua;const T=!h;h=new se(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Wn(h,"https"),Ni(h),T?cu(h.toString(),c):lu(h.toString(),c)}else nt(2);i.I=0,i.l&&i.l.pa(o),sa(i),Jo(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function sa(i){if(i.I=0,i.ja=[],i.l){const o=xo(i.h);(o.length!=0||i.i.length!=0)&&(R(i.ja,o),R(i.ja,i.i),i.h.i.length=0,O(i.i),i.i.length=0),i.l.oa()}}function ra(i,o,c){var h=c instanceof se?Ct(c):new se(c);if(h.g!="")o&&(h.g=o+"."+h.g),zn(h,h.u);else{var T=l.location;h=T.protocol,o=o?o+"."+T.hostname:T.hostname,T=+T.port;const b=new se(null);h&&Wn(b,h),o&&(b.g=o),T&&zn(b,T),c&&(b.h=c),h=b}return c=i.G,o=i.wa,c&&o&&K(h,c,o),K(h,"VER",i.ka),Qn(i,h),h}function oa(i,o,c){if(o&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return o=i.Aa&&!i.ma?new Y(new js({ab:c})):new Y(i.ma),o.Fa(i.L),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function aa(){}n=aa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function pt(i,o){Q.call(this),this.g=new Xo(o),this.l=i,this.h=o&&o.messageUrlParams||null,i=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(i?i["X-WebChannel-Content-Type"]=o.messageContentType:i={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.sa&&(i?i["X-WebChannel-Client-Profile"]=o.sa:i={"X-WebChannel-Client-Profile":o.sa}),this.g.U=i,(i=o&&o.Qb)&&!p(i)&&(this.g.u=i),this.A=o&&o.supportsCrossDomainXhr||!1,this.v=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!p(o)&&(this.g.G=o,i=this.h,i!==null&&o in i&&(i=this.h,o in i&&delete i[o])),this.j=new on(this)}I(pt,Q),pt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},pt.prototype.close=function(){Bs(this.g)},pt.prototype.o=function(i){var o=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=en(i),i=c);o.i.push(new tu(o.Ya++,i)),o.I==3&&ki(o)},pt.prototype.N=function(){this.g.l=null,delete this.j,Bs(this.g),delete this.g,pt.Z.N.call(this)};function ca(i){Ns.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var o=i.__sm__;if(o){t:{for(const c in o){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,o=o!==null&&i in o?o[i]:void 0),this.data=o}else this.data=i}I(ca,Ns);function la(){Ds.call(this),this.status=1}I(la,Ds);function on(i){this.g=i}I(on,aa),on.prototype.ra=function(){G(this.g,"a")},on.prototype.qa=function(i){G(this.g,new ca(i))},on.prototype.pa=function(i){G(this.g,new la)},on.prototype.oa=function(){G(this.g,"b")},pt.prototype.send=pt.prototype.o,pt.prototype.open=pt.prototype.m,pt.prototype.close=pt.prototype.close,Ps.NO_ERROR=0,Ps.TIMEOUT=8,Ps.HTTP_ERROR=6,Xh.COMPLETE="complete",zh.EventType=Un,Un.OPEN="a",Un.CLOSE="b",Un.ERROR="c",Un.MESSAGE="d",Q.prototype.listen=Q.prototype.J,Y.prototype.listenOnce=Y.prototype.K,Y.prototype.getLastError=Y.prototype.Ha,Y.prototype.getLastErrorCode=Y.prototype.ya,Y.prototype.getStatus=Y.prototype.ca,Y.prototype.getResponseJson=Y.prototype.La,Y.prototype.getResponseText=Y.prototype.la,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Fa}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});const Va="@firebase/firestore",Fa="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new Ur("@firebase/firestore");function At(n,...t){if(vn.logLevel<=W.DEBUG){const e=t.map(Jr);vn.debug(`Firestore (${_i}): ${n}`,...e)}}function Pl(n,...t){if(vn.logLevel<=W.ERROR){const e=t.map(Jr);vn.error(`Firestore (${_i}): ${n}`,...e)}}function Xp(n,...t){if(vn.logLevel<=W.WARN){const e=t.map(Jr);vn.warn(`Firestore (${_i}): ${n}`,...e)}}function Jr(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n,t,e){let s="Unexpected state";typeof t=="string"?s=t:e=t,kl(n,s,e)}function kl(n,t,e){let s=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{s+=" CONTEXT: "+JSON.stringify(e)}catch{s+=" CONTEXT: "+e}throw Pl(s),new Error(s)}function ii(n,t,e,s){let r="Unexpected state";typeof e=="string"?r=e:s=e,n||kl(t,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class B extends Vt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Jp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(it.UNAUTHENTICATED))}shutdown(){}}class Qp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Zp{constructor(t){this.t=t,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ii(this.o===void 0,42304);let s=this.i;const r=f=>this.i!==s?(s=this.i,e(f)):Promise.resolve();let a=new si;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new si,t.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const f=a;t.enqueueRetryable(async()=>{await f.promise,await r(this.currentUser)})},u=f=>{At("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(f=>u(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?u(f):(At("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new si)}},0),l()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(s=>this.i!==t?(At("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ii(typeof s.accessToken=="string",31837,{l:s}),new Ll(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ii(t===null||typeof t=="string",2055,{h:t}),new it(t)}}class tg{constructor(t,e,s){this.P=t,this.T=e,this.I=s,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eg{constructor(t,e,s){this.P=t,this.T=e,this.I=s}getToken(){return Promise.resolve(new tg(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ja{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ng{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wt(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ii(this.o===void 0,3512);const s=a=>{a.error!=null&&At("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,At("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?e(a.token):Promise.resolve()};this.o=a=>{t.enqueueRetryable(()=>s(a))};const r=a=>{At("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>r(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?r(a):At("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ja(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ii(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ja(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ig(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let s=0;s<n;s++)e[s]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=ig(40);for(let a=0;a<r.length;++a)s.length<20&&r[a]<e&&(s+=t.charAt(r[a]%62))}return s}}function Ee(n,t){return n<t?-1:n>t?1:0}function rg(n,t){const e=Math.min(n.length,t.length);for(let s=0;s<e;s++){const r=n.charAt(s),a=t.charAt(s);if(r!==a)return tr(r)===tr(a)?Ee(r,a):tr(r)?1:-1}return Ee(n.length,t.length)}const og=55296,ag=57343;function tr(n){const t=n.charCodeAt(0);return t>=og&&t<=ag}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="__name__";class Nt{constructor(t,e,s){e===void 0?e=0:e>t.length&&hi(637,{offset:e,range:t.length}),s===void 0?s=t.length-e:s>t.length-e&&hi(1746,{length:s,range:t.length-e}),this.segments=t,this.offset=e,this.len=s}get length(){return this.len}isEqual(t){return Nt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Nt?t.forEach(s=>{e.push(s)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,s=this.limit();e<s;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const s=Math.min(t.length,e.length);for(let r=0;r<s;r++){const a=Nt.compareSegments(t.get(r),e.get(r));if(a!==0)return a}return Ee(t.length,e.length)}static compareSegments(t,e){const s=Nt.isNumericId(t),r=Nt.isNumericId(e);return s&&!r?-1:!s&&r?1:s&&r?Nt.extractNumericId(t).compare(Nt.extractNumericId(e)):rg(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Xr.fromString(t.substring(4,t.length-2))}}class Tt extends Nt{construct(t,e,s){return new Tt(t,e,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const s of t){if(s.indexOf("//")>=0)throw new B(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);e.push(...s.split("/").filter(r=>r.length>0))}return new Tt(e)}static emptyPath(){return new Tt([])}}const cg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pe extends Nt{construct(t,e,s){return new Pe(t,e,s)}static isValidIdentifier(t){return cg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ha}static keyField(){return new Pe([Ha])}static fromServerFormat(t){const e=[];let s="",r=0;const a=()=>{if(s.length===0)throw new B(H.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(s),s=""};let l=!1;for(;r<t.length;){const u=t[r];if(u==="\\"){if(r+1===t.length)throw new B(H.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[r+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new B(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=f,r+=2}else u==="`"?(l=!l,r++):u!=="."||l?(s+=u,r++):(a(),r++)}if(a(),l)throw new B(H.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Pe(e)}static emptyPath(){return new Pe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t){this.path=t}static fromPath(t){return new ke(Tt.fromString(t))}static fromName(t){return new ke(Tt.fromString(t).popFirst(5))}static empty(){return new ke(Tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Tt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Tt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ke(new Tt(t.slice()))}}function lg(n,t,e,s){if(t===!0&&s===!0)throw new B(H.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function hg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ug(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":hi(12329,{type:typeof n})}function dg(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new B(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ug(n);throw new B(H.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,t){const e={typeString:n};return t&&(e.value=t),e}function Ei(n,t){if(!hg(n))throw new B(H.INVALID_ARGUMENT,"JSON must be an object");let e;for(const s in t)if(t[s]){const r=t[s].typeString,a="value"in t[s]?{value:t[s].value}:void 0;if(!(s in n)){e=`JSON missing required field: '${s}'`;break}const l=n[s];if(r&&typeof l!==r){e=`JSON field '${s}' must be a ${r}.`;break}if(a!==void 0&&l!==a.value){e=`Expected '${s}' field to equal '${a.value}'`;break}}if(e)throw new B(H.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=-62135596800,Wa=1e6;class Dt{static now(){return Dt.fromMillis(Date.now())}static fromDate(t){return Dt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),s=Math.floor((t-1e3*e)*Wa);return new Dt(e,s)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new B(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new B(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ba)throw new B(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new B(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wa}_compareTo(t){return this.seconds===t.seconds?Ee(this.nanoseconds,t.nanoseconds):Ee(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ei(t,Dt._jsonSchema))return new Dt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ba;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Dt._jsonSchemaVersion="firestore/timestamp/1.0",Dt._jsonSchema={type:X("string",Dt._jsonSchemaVersion),seconds:X("number"),nanoseconds:X("number")};function fg(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new pg("Invalid base64 string: "+a):a}}(t);return new Be(e)}static fromUint8Array(t){const e=function(r){let a="";for(let l=0;l<r.length;++l)a+=String.fromCharCode(r[l]);return a}(t);return new Be(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const s=new Uint8Array(e.length);for(let r=0;r<e.length;r++)s[r]=e.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ee(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const Cr="(default)";class ls{constructor(t,e){this.projectId=t,this.database=e||Cr}static empty(){return new ls("","")}get isDefaultDatabase(){return this.database===Cr}isEqual(t){return t instanceof ls&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,e=null,s=[],r=[],a=null,l="F",u=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=s,this.filters=r,this.limit=a,this.limitType=l,this.startAt=u,this.endAt=f,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function mg(n){return new gg(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var za,j;(j=za||(za={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Xr([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=1048576;function er(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,e,s=1e3,r=1.5,a=6e4){this.Mi=t,this.timerId=e,this.d_=s,this.A_=r,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-s);r>0&&At("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e,s,r,a){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=s,this.op=r,this.removalCallback=a,this.deferred=new si,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,s,r,a){const l=Date.now()+s,u=new Qr(t,e,l,r,a);return u.start(s),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(H.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ka,Ga;(Ga=Ka||(Ka={})).Ma="default",Ga.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml="firestore.googleapis.com",Ya=!0;class Xa{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new B(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ml,this.ssl=Ya}else this.host=t.host,this.ssl=t.ssl??Ya;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=_g;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Eg)throw new B(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}lg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yg(t.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xl{constructor(t,e,s,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xa({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new B(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xa(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Jp;switch(s.type){case"firstParty":return new eg(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const s=qa.get(e);s&&(At("ComponentProvider","Removing Datastore"),qa.delete(e),s.terminate())}(this),Promise.resolve()}}function Tg(n,t,e,s={}){n=dg(n,xl);const r=Cn(t),a=n._getSettings(),l={...a,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;r&&(xr(`https://${u}`),$r("Firestore",!0)),a.host!==Ml&&a.host!==u&&Xp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...a,host:u,ssl:r,emulatorOptions:s};if(!Fe(f,l)&&(n._setSettings(f),s.mockUserToken)){let v,w;if(typeof s.mockUserToken=="string")v=s.mockUserToken,w=it.MOCK_USER;else{v=Yc(s.mockUserToken,n._app?.options.projectId);const I=s.mockUserToken.sub||s.mockUserToken.user_id;if(!I)throw new B(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new it(I)}n._authCredentials=new Qp(new Ll(v,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e,s){this.converter=e,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Zr(this.firestore,t,this._query)}}class Rt{constructor(t,e,s){this.converter=e,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new to(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}toJSON(){return{type:Rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,s){if(Ei(e,Rt._jsonSchema))return new Rt(t,s||null,new ke(Tt.fromString(e.referencePath)))}}Rt._jsonSchemaVersion="firestore/documentReference/1.0",Rt._jsonSchema={type:X("string",Rt._jsonSchemaVersion),referencePath:X("string")};class to extends Zr{constructor(t,e,s){super(t,e,mg(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new ke(t))}withConverter(t){return new to(this.firestore,t,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="AsyncQueue";class Qa{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vg(this,"async_queue_retry"),this._c=()=>{const s=er();s&&At(Ja,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const e=er();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=er();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new si;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!fg(t))throw t;At(Ja,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(s=>{throw this.nc=s,this.rc=!1,Pl("INTERNAL UNHANDLED ERROR: ",Za(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=e,e}enqueueAfterDelay(t,e,s){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Qr.createAndSchedule(this,t,e,s,a=>this.hc(a));return this.tc.push(r),r}uc(){this.nc&&hi(47125,{Pc:Za(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,s)=>e.targetTimeMs-s.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Za(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class wg extends xl{constructor(t,e,s,r){super(t,e,s,r),this.type="firestore",this._queue=new Qa,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Qa(t),this._firestoreClient=void 0,await t}}}function bg(n,t){const e=typeof n=="object"?n:Fr(),s=typeof n=="string"?n:Cr,r=ms(e,"firestore").getImmediate({identifier:s});if(!r._initialized){const a=Kc("firestore");a&&Tg(r,...a)}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wt(Be.fromBase64String(t))}catch(e){throw new B(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wt(Be.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Wt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ei(t,Wt._jsonSchema))return Wt.fromBase64String(t.bytes)}}Wt._jsonSchemaVersion="firestore/bytes/1.0",Wt._jsonSchema={type:X("string",Wt._jsonSchemaVersion),bytes:X("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new B(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new B(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new B(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ee(this._lat,t._lat)||Ee(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(t){if(Ei(t,$e._jsonSchema))return new $e(t.latitude,t.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:X("string",$e._jsonSchemaVersion),latitude:X("number"),longitude:X("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,r){if(s.length!==r.length)return!1;for(let a=0;a<s.length;++a)if(s[a]!==r[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ue._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ei(t,Ue._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ue(t.vectorValues);throw new B(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ue._jsonSchemaVersion="firestore/vectorValue/1.0",Ue._jsonSchema={type:X("string",Ue._jsonSchemaVersion),vectorValues:X("object")};const Ag=new RegExp("[~\\*/\\[\\]]");function Ig(n,t,e){if(t.search(Ag)>=0)throw tc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new $l(...t.split("."))._internalPath}catch{throw tc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function tc(n,t,e,s,r){let a=`Function ${t}() called with invalid data`;a+=". ";let l="";return new B(H.INVALID_ARGUMENT,a+n+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t,e,s,r,a){this._firestore=t,this._userDataWriter=e,this._key=s,this._document=r,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Sg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Vl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Sg extends Ul{data(){return super.data()}}function Vl(n,t){return typeof t=="string"?Ig(n,t):t instanceof $l?t._internalPath:t._delegate._internalPath}class Ui{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _n extends Ul{constructor(t,e,s,r,a,l){super(t,e,s,r,l),this._firestore=t,this._firestoreImpl=t,this.metadata=a}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const s=this._document.data.field(Vl("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=_n._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}_n._jsonSchemaVersion="firestore/documentSnapshot/1.0",_n._jsonSchema={type:X("string",_n._jsonSchemaVersion),bundleSource:X("string","DocumentSnapshot"),bundleName:X("string"),bundle:X("string")};class Ji extends _n{data(t={}){return super.data(t)}}class ri{constructor(t,e,s,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ui(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(s=>{t.call(e,new Ji(this._firestore,this._userDataWriter,s.key,s,new Ui(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new B(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,a){if(r._snapshot.oldDocs.isEmpty()){let l=0;return r._snapshot.docChanges.map(u=>{const f=new Ji(r._firestore,r._userDataWriter,u.doc.key,u.doc,new Ui(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);return u.doc,{type:"added",doc:f,oldIndex:-1,newIndex:l++}})}{let l=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(u=>a||u.type!==3).map(u=>{const f=new Ji(r._firestore,r._userDataWriter,u.doc.key,u.doc,new Ui(r._snapshot.mutatedKeys.has(u.doc.key),r._snapshot.fromCache),r.query.converter);let v=-1,w=-1;return u.type!==0&&(v=l.indexOf(u.doc.key),l=l.delete(u.doc.key)),u.type!==1&&(l=l.add(u.doc),w=l.indexOf(u.doc.key)),{type:Cg(u.type),doc:f,oldIndex:v,newIndex:w}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ri._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=sg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],s=[],r=[];return this.docs.forEach(a=>{a._document!==null&&(e.push(a._document),s.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),r.push(a.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Cg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return hi(61501,{type:n})}}ri._jsonSchemaVersion="firestore/querySnapshot/1.0",ri._jsonSchema={type:X("string",ri._jsonSchemaVersion),bundleSource:X("string","QuerySnapshot"),bundleName:X("string"),bundle:X("string")};(function(t,e=!0){(function(r){_i=r})(Ke),je(new _e("firestore",(s,{instanceIdentifier:r,options:a})=>{const l=s.getProvider("app").getImmediate(),u=new wg(new Zp(s.getProvider("auth-internal")),new ng(l,s.getProvider("app-check-internal")),function(v,w){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new B(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(v.options.projectId,w)}(l,r),l);return a={useFetchStreams:e,...a},u._setSettings(a),u},"PUBLIC").setMultipleInstances(!0)),Pt(Va,Fa,t),Pt(Va,Fa,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="firebasestorage.googleapis.com",Og="storageBucket",Ng=2*60*1e3,Dg=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Vt{constructor(t,e,s=0){super(nr(t),`Firebase Storage: ${e} (${nr(t)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ft.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return nr(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $t;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($t||($t={}));function nr(n){return"storage/"+n}function Rg(){const n="An unknown error occurred, please check the error payload for server response.";return new Ft($t.UNKNOWN,n)}function Pg(){return new Ft($t.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kg(){return new Ft($t.CANCELED,"User canceled the upload/download.")}function Lg(n){return new Ft($t.INVALID_URL,"Invalid URL '"+n+"'.")}function Mg(n){return new Ft($t.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ec(n){return new Ft($t.INVALID_ARGUMENT,n)}function jl(){return new Ft($t.APP_DELETED,"The Firebase app was deleted.")}function xg(n){return new Ft($t.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let s;try{s=It.makeFromUrl(t,e)}catch{return new It(t,"")}if(s.path==="")return s;throw Mg(t)}static makeFromUrl(t,e){let s=null;const r="([A-Za-z0-9.\\-_]+)";function a(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+r+l,"i"),f={bucket:1,path:3};function v(P){P.path_=decodeURIComponent(P.path)}const w="v[A-Za-z0-9_]+",I=e.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",O=new RegExp(`^https?://${I}/${w}/b/${r}/o${A}`,"i"),R={bucket:1,path:3},D=e===Fl?"(?:storage.googleapis.com|storage.cloud.google.com)":e,N="([^?#]*)",x=new RegExp(`^https?://${D}/${r}/${N}`,"i"),U=[{regex:u,indices:f,postModify:a},{regex:O,indices:R,postModify:v},{regex:x,indices:{bucket:1,path:2},postModify:v}];for(let P=0;P<U.length;P++){const $=U[P],M=$.regex.exec(t);if(M){const _=M[$.indices.bucket];let d=M[$.indices.path];d||(d=""),s=new It(_,d),$.postModify(s);break}}if(s==null)throw Lg(t);return s}}class $g{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(n,t,e){let s=1,r=null,a=null,l=!1,u=0;function f(){return u===2}let v=!1;function w(...N){v||(v=!0,t.apply(null,N))}function I(N){r=setTimeout(()=>{r=null,n(O,f())},N)}function A(){a&&clearTimeout(a)}function O(N,...x){if(v){A();return}if(N){A(),w.call(null,N,...x);return}if(f()||l){A(),w.call(null,N,...x);return}s<64&&(s*=2);let U;u===1?(u=2,U=0):U=(s+Math.random())*1e3,I(U)}let R=!1;function D(N){R||(R=!0,A(),!v&&(r!==null?(N||(u=2),clearTimeout(r),I(0)):N||(u=1)))}return I(0),a=setTimeout(()=>{l=!0,D(!0)},e),D}function Vg(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n){return n!==void 0}function nc(n,t,e,s){if(s<t)throw ec(`Invalid value for '${n}'. Expected ${t} or greater.`);if(s>e)throw ec(`Invalid value for '${n}'. Expected ${e} or less.`)}function jg(n){const t=encodeURIComponent;let e="?";for(const s in n)if(n.hasOwnProperty(s)){const r=t(s)+"="+t(n[s]);e=e+r+"&"}return e=e.slice(0,-1),e}var hs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(hs||(hs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n,t){const e=n>=500&&n<600,r=[408,429].indexOf(n)!==-1,a=t.indexOf(n)!==-1;return e||r||a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,e,s,r,a,l,u,f,v,w,I,A=!0,O=!1){this.url_=t,this.method_=e,this.headers_=s,this.body_=r,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=f,this.timeout_=v,this.progressCallback_=w,this.connectionFactory_=I,this.retry=A,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,D)=>{this.resolve_=R,this.reject_=D,this.start_()})}start_(){const t=(s,r)=>{if(r){s(!1,new Vi(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=u=>{const f=u.loaded,v=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,v)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const u=a.getErrorCode()===hs.NO_ERROR,f=a.getStatus();if(!u||Hg(f,this.additionalRetryCodes_)&&this.retry){const w=a.getErrorCode()===hs.ABORT;s(!1,new Vi(!1,null,w));return}const v=this.successCodes_.indexOf(f)!==-1;s(!0,new Vi(v,a))})},e=(s,r)=>{const a=this.resolve_,l=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const f=this.callback_(u,u.getResponse());Fg(f)?a(f):a()}catch(f){l(f)}else if(u!==null){const f=Rg();f.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,f)):l(f)}else if(r.canceled){const f=this.appDelete_?jl():kg();l(f)}else{const f=Pg();l(f)}};this.canceled_?e(!1,new Vi(!1,null,!0)):this.backoffId_=Ug(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Vg(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vi{constructor(t,e,s){this.wasSuccessCode=t,this.connection=e,this.canceled=!!s}}function Wg(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function zg(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function Kg(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Gg(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function qg(n,t,e,s,r,a,l=!0,u=!1){const f=jg(n.urlParams),v=n.url+f,w=Object.assign({},n.headers);return Kg(w,t),Wg(w,e),zg(w,a),Gg(w,s),new Bg(v,n.method,w,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,r,l,u)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Xg(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e){this._service=t,e instanceof It?this._location=e:this._location=It.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new us(t,e)}get root(){const t=new It(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Xg(this._location.path)}get storage(){return this._service}get parent(){const t=Yg(this._location.path);if(t===null)return null;const e=new It(this._location.bucket,t);return new us(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw xg(t)}}function ic(n,t){const e=t?.[Og];return e==null?null:It.makeFromBucketSpec(e,n)}function Jg(n,t,e,s={}){n.host=`${t}:${e}`;const r=Cn(t);r&&(xr(`https://${n.host}/b`),$r("Storage",!0)),n._isUsingEmulator=!0,n._protocol=r?"https":"http";const{mockUserToken:a}=s;a&&(n._overrideAuthToken=typeof a=="string"?a:Yc(a,n.app.options.projectId))}class Qg{constructor(t,e,s,r,a,l=!1){this.app=t,this._authProvider=e,this._appCheckProvider=s,this._url=r,this._firebaseVersion=a,this._isUsingEmulator=l,this._bucket=null,this._host=Fl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ng,this._maxUploadRetryTime=Dg,this._requests=new Set,r!=null?this._bucket=It.makeFromBucketSpec(r,this._host):this._bucket=ic(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,t):this._bucket=ic(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){nc("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){nc("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){if(wt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new us(this,t)}_makeRequest(t,e,s,r,a=!0){if(this._deleted)return new $g(jl());{const l=qg(t,this._appId,s,r,e,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(t,e){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,s,r).getPromise()}}const sc="@firebase/storage",rc="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="storage";function Zg(n=Fr(),t){n=we(n);const s=ms(n,Hl).getImmediate({identifier:t}),r=Kc("storage");return r&&tm(s,...r),s}function tm(n,t,e,s={}){Jg(n,t,e,s)}function em(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),r=n.getProvider("app-check-internal");return new Qg(e,s,r,t,Ke)}function nm(){je(new _e(Hl,em,"PUBLIC").setMultipleInstances(!0)),Pt(sc,rc,""),Pt(sc,rc,"esm2020")}nm();const im={apiKey:"AIzaSyAQb_vK-DR4Mp6iF9mOzt4jHuyGmn01bNE",authDomain:"bby12-waysync.firebaseapp.com",projectId:"bby12-waysync",storageBucket:void 0,appId:"1:845472952433:web:cecc495c8b413fbdb3ebd0"},eo=Qc(im),sm=Kp(eo);bg(eo);Zg(eo);class rm extends HTMLElement{constructor(){super(),this.renderNavbar(),this.renderAuthControls()}renderNavbar(){this.innerHTML=`
      <div class="navbar">
        <div class="nav-left">
          <img
            id="setting"
            class="nav-icon"
            src="images/icon-settings.PNG"
            alt="Settings"
          />
        </div>

        <div class="nav-center">
          <span id="mapway" class="nav-title">WaySync
          <img
            id="logo"
            class="nav-logo"
            src="images/WaySync Logo.png"
            alt="WaySync Logo"
          />
          </span>
          
        </div>

        <div class="nav-right">
          <img
            id="account"
            class="nav-icon"
            src="images/icon-account.PNG"
            alt="Account"
          />
          <div id="authControls" class="nav-auth"></div>
        </div>
      </div>
    `;const t=this.querySelector("#account");t&&t.addEventListener("click",()=>{window.location.href="/profile.html"});const e=this.querySelector("#setting");e&&e.addEventListener("click",()=>{window.location.href="/settings.html"});const s=this.querySelector("#mapway");s&&s.addEventListener("click",()=>{window.location.href="/main-map.html"})}renderAuthControls(){const t=this.querySelector("#authControls");if(!t){console.warn("authControls container not found in navbar");return}t.innerHTML="",Mf(sm,e=>{e?t.innerHTML="":t.innerHTML=`
          <a class="btn btn-outline-light" id="loginBtn" href="/login.html" style="min-width: 80px;">Log in</a>
        `})}}customElements.define("site-navbar",rm);class om extends HTMLElement{connectedCallback(){this.innerHTML=`
         <footer>
    <div class="footer-nav">

      <div class="footer-left">
        <img id="back" class="footer-icon" src="images/icon-back.PNG" alt="Back" />
      </div>

      <div class="footer-center">
        <img id="home" class="footer-icon" src="images/icon-home.PNG" alt="Home" />
      </div>

      <div class="footer-right">
        <img id="friends" class="footer-icon" src="images/icon-friends.PNG" alt="Friends" />
      </div>

    </div>
  </footer>
`;const t=this.querySelector("#friends");t&&t.addEventListener("click",()=>{window.location.href="/friends.html"});const e=this.querySelector("#home");e&&e.addEventListener("click",()=>{window.location.href="/main.html"});const s=this.querySelector("#back");s&&s.addEventListener("click",()=>{history.back(-1)})}}customElements.define("site-footer",om);var st="top",lt="bottom",ht="right",rt="left",vs="auto",Nn=[st,lt,ht,rt],We="start",yn="end",Bl="clippingParents",no="viewport",ln="popper",Wl="reference",Or=Nn.reduce(function(n,t){return n.concat([t+"-"+We,t+"-"+yn])},[]),io=[].concat(Nn,[vs]).reduce(function(n,t){return n.concat([t,t+"-"+We,t+"-"+yn])},[]),zl="beforeRead",Kl="read",Gl="afterRead",ql="beforeMain",Yl="main",Xl="afterMain",Jl="beforeWrite",Ql="write",Zl="afterWrite",th=[zl,Kl,Gl,ql,Yl,Xl,Jl,Ql,Zl];function Ut(n){return n?(n.nodeName||"").toLowerCase():null}function ut(n){if(n==null)return window;if(n.toString()!=="[object Window]"){var t=n.ownerDocument;return t&&t.defaultView||window}return n}function ze(n){var t=ut(n).Element;return n instanceof t||n instanceof Element}function gt(n){var t=ut(n).HTMLElement;return n instanceof t||n instanceof HTMLElement}function so(n){if(typeof ShadowRoot>"u")return!1;var t=ut(n).ShadowRoot;return n instanceof t||n instanceof ShadowRoot}function am(n){var t=n.state;Object.keys(t.elements).forEach(function(e){var s=t.styles[e]||{},r=t.attributes[e]||{},a=t.elements[e];!gt(a)||!Ut(a)||(Object.assign(a.style,s),Object.keys(r).forEach(function(l){var u=r[l];u===!1?a.removeAttribute(l):a.setAttribute(l,u===!0?"":u)}))})}function cm(n){var t=n.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(s){var r=t.elements[s],a=t.attributes[s]||{},l=Object.keys(t.styles.hasOwnProperty(s)?t.styles[s]:e[s]),u=l.reduce(function(f,v){return f[v]="",f},{});!gt(r)||!Ut(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(f){r.removeAttribute(f)}))})}}const ro={name:"applyStyles",enabled:!0,phase:"write",fn:am,effect:cm,requires:["computeStyles"]};function Mt(n){return n.split("-")[0]}var Ve=Math.max,ds=Math.min,Tn=Math.round;function Nr(){var n=navigator.userAgentData;return n!=null&&n.brands&&Array.isArray(n.brands)?n.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function eh(){return!/^((?!chrome|android).)*safari/i.test(Nr())}function wn(n,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var s=n.getBoundingClientRect(),r=1,a=1;t&&gt(n)&&(r=n.offsetWidth>0&&Tn(s.width)/n.offsetWidth||1,a=n.offsetHeight>0&&Tn(s.height)/n.offsetHeight||1);var l=ze(n)?ut(n):window,u=l.visualViewport,f=!eh()&&e,v=(s.left+(f&&u?u.offsetLeft:0))/r,w=(s.top+(f&&u?u.offsetTop:0))/a,I=s.width/r,A=s.height/a;return{width:I,height:A,top:w,right:v+I,bottom:w+A,left:v,x:v,y:w}}function oo(n){var t=wn(n),e=n.offsetWidth,s=n.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-s)<=1&&(s=t.height),{x:n.offsetLeft,y:n.offsetTop,width:e,height:s}}function nh(n,t){var e=t.getRootNode&&t.getRootNode();if(n.contains(t))return!0;if(e&&so(e)){var s=t;do{if(s&&n.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function Qt(n){return ut(n).getComputedStyle(n)}function lm(n){return["table","td","th"].indexOf(Ut(n))>=0}function be(n){return((ze(n)?n.ownerDocument:n.document)||window.document).documentElement}function ys(n){return Ut(n)==="html"?n:n.assignedSlot||n.parentNode||(so(n)?n.host:null)||be(n)}function oc(n){return!gt(n)||Qt(n).position==="fixed"?null:n.offsetParent}function hm(n){var t=/firefox/i.test(Nr()),e=/Trident/i.test(Nr());if(e&&gt(n)){var s=Qt(n);if(s.position==="fixed")return null}var r=ys(n);for(so(r)&&(r=r.host);gt(r)&&["html","body"].indexOf(Ut(r))<0;){var a=Qt(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function vi(n){for(var t=ut(n),e=oc(n);e&&lm(e)&&Qt(e).position==="static";)e=oc(e);return e&&(Ut(e)==="html"||Ut(e)==="body"&&Qt(e).position==="static")?t:e||hm(n)||t}function ao(n){return["top","bottom"].indexOf(n)>=0?"x":"y"}function oi(n,t,e){return Ve(n,ds(t,e))}function um(n,t,e){var s=oi(n,t,e);return s>e?e:s}function ih(){return{top:0,right:0,bottom:0,left:0}}function sh(n){return Object.assign({},ih(),n)}function rh(n,t){return t.reduce(function(e,s){return e[s]=n,e},{})}var dm=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,sh(typeof t!="number"?t:rh(t,Nn))};function fm(n){var t,e=n.state,s=n.name,r=n.options,a=e.elements.arrow,l=e.modifiersData.popperOffsets,u=Mt(e.placement),f=ao(u),v=[rt,ht].indexOf(u)>=0,w=v?"height":"width";if(!(!a||!l)){var I=dm(r.padding,e),A=oo(a),O=f==="y"?st:rt,R=f==="y"?lt:ht,D=e.rects.reference[w]+e.rects.reference[f]-l[f]-e.rects.popper[w],N=l[f]-e.rects.reference[f],x=vi(a),F=x?f==="y"?x.clientHeight||0:x.clientWidth||0:0,U=D/2-N/2,P=I[O],$=F-A[w]-I[R],M=F/2-A[w]/2+U,_=oi(P,M,$),d=f;e.modifiersData[s]=(t={},t[d]=_,t.centerOffset=_-M,t)}}function pm(n){var t=n.state,e=n.options,s=e.element,r=s===void 0?"[data-popper-arrow]":s;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||nh(t.elements.popper,r)&&(t.elements.arrow=r))}const oh={name:"arrow",enabled:!0,phase:"main",fn:fm,effect:pm,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function bn(n){return n.split("-")[1]}var gm={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mm(n,t){var e=n.x,s=n.y,r=t.devicePixelRatio||1;return{x:Tn(e*r)/r||0,y:Tn(s*r)/r||0}}function ac(n){var t,e=n.popper,s=n.popperRect,r=n.placement,a=n.variation,l=n.offsets,u=n.position,f=n.gpuAcceleration,v=n.adaptive,w=n.roundOffsets,I=n.isFixed,A=l.x,O=A===void 0?0:A,R=l.y,D=R===void 0?0:R,N=typeof w=="function"?w({x:O,y:D}):{x:O,y:D};O=N.x,D=N.y;var x=l.hasOwnProperty("x"),F=l.hasOwnProperty("y"),U=rt,P=st,$=window;if(v){var M=vi(e),_="clientHeight",d="clientWidth";if(M===ut(e)&&(M=be(e),Qt(M).position!=="static"&&u==="absolute"&&(_="scrollHeight",d="scrollWidth")),M=M,r===st||(r===rt||r===ht)&&a===yn){P=lt;var g=I&&M===$&&$.visualViewport?$.visualViewport.height:M[_];D-=g-s.height,D*=f?1:-1}if(r===rt||(r===st||r===lt)&&a===yn){U=ht;var E=I&&M===$&&$.visualViewport?$.visualViewport.width:M[d];O-=E-s.width,O*=f?1:-1}}var m=Object.assign({position:u},v&&gm),y=w===!0?mm({x:O,y:D},ut(e)):{x:O,y:D};if(O=y.x,D=y.y,f){var p;return Object.assign({},m,(p={},p[P]=F?"0":"",p[U]=x?"0":"",p.transform=($.devicePixelRatio||1)<=1?"translate("+O+"px, "+D+"px)":"translate3d("+O+"px, "+D+"px, 0)",p))}return Object.assign({},m,(t={},t[P]=F?D+"px":"",t[U]=x?O+"px":"",t.transform="",t))}function _m(n){var t=n.state,e=n.options,s=e.gpuAcceleration,r=s===void 0?!0:s,a=e.adaptive,l=a===void 0?!0:a,u=e.roundOffsets,f=u===void 0?!0:u,v={placement:Mt(t.placement),variation:bn(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ac(Object.assign({},v,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:f})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ac(Object.assign({},v,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const co={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_m,data:{}};var Fi={passive:!0};function Em(n){var t=n.state,e=n.instance,s=n.options,r=s.scroll,a=r===void 0?!0:r,l=s.resize,u=l===void 0?!0:l,f=ut(t.elements.popper),v=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&v.forEach(function(w){w.addEventListener("scroll",e.update,Fi)}),u&&f.addEventListener("resize",e.update,Fi),function(){a&&v.forEach(function(w){w.removeEventListener("scroll",e.update,Fi)}),u&&f.removeEventListener("resize",e.update,Fi)}}const lo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Em,data:{}};var vm={left:"right",right:"left",bottom:"top",top:"bottom"};function Qi(n){return n.replace(/left|right|bottom|top/g,function(t){return vm[t]})}var ym={start:"end",end:"start"};function cc(n){return n.replace(/start|end/g,function(t){return ym[t]})}function ho(n){var t=ut(n),e=t.pageXOffset,s=t.pageYOffset;return{scrollLeft:e,scrollTop:s}}function uo(n){return wn(be(n)).left+ho(n).scrollLeft}function Tm(n,t){var e=ut(n),s=be(n),r=e.visualViewport,a=s.clientWidth,l=s.clientHeight,u=0,f=0;if(r){a=r.width,l=r.height;var v=eh();(v||!v&&t==="fixed")&&(u=r.offsetLeft,f=r.offsetTop)}return{width:a,height:l,x:u+uo(n),y:f}}function wm(n){var t,e=be(n),s=ho(n),r=(t=n.ownerDocument)==null?void 0:t.body,a=Ve(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),l=Ve(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-s.scrollLeft+uo(n),f=-s.scrollTop;return Qt(r||e).direction==="rtl"&&(u+=Ve(e.clientWidth,r?r.clientWidth:0)-a),{width:a,height:l,x:u,y:f}}function fo(n){var t=Qt(n),e=t.overflow,s=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+r+s)}function ah(n){return["html","body","#document"].indexOf(Ut(n))>=0?n.ownerDocument.body:gt(n)&&fo(n)?n:ah(ys(n))}function ai(n,t){var e;t===void 0&&(t=[]);var s=ah(n),r=s===((e=n.ownerDocument)==null?void 0:e.body),a=ut(s),l=r?[a].concat(a.visualViewport||[],fo(s)?s:[]):s,u=t.concat(l);return r?u:u.concat(ai(ys(l)))}function Dr(n){return Object.assign({},n,{left:n.x,top:n.y,right:n.x+n.width,bottom:n.y+n.height})}function bm(n,t){var e=wn(n,!1,t==="fixed");return e.top=e.top+n.clientTop,e.left=e.left+n.clientLeft,e.bottom=e.top+n.clientHeight,e.right=e.left+n.clientWidth,e.width=n.clientWidth,e.height=n.clientHeight,e.x=e.left,e.y=e.top,e}function lc(n,t,e){return t===no?Dr(Tm(n,e)):ze(t)?bm(t,e):Dr(wm(be(n)))}function Am(n){var t=ai(ys(n)),e=["absolute","fixed"].indexOf(Qt(n).position)>=0,s=e&&gt(n)?vi(n):n;return ze(s)?t.filter(function(r){return ze(r)&&nh(r,s)&&Ut(r)!=="body"}):[]}function Im(n,t,e,s){var r=t==="clippingParents"?Am(n):[].concat(t),a=[].concat(r,[e]),l=a[0],u=a.reduce(function(f,v){var w=lc(n,v,s);return f.top=Ve(w.top,f.top),f.right=ds(w.right,f.right),f.bottom=ds(w.bottom,f.bottom),f.left=Ve(w.left,f.left),f},lc(n,l,s));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function ch(n){var t=n.reference,e=n.element,s=n.placement,r=s?Mt(s):null,a=s?bn(s):null,l=t.x+t.width/2-e.width/2,u=t.y+t.height/2-e.height/2,f;switch(r){case st:f={x:l,y:t.y-e.height};break;case lt:f={x:l,y:t.y+t.height};break;case ht:f={x:t.x+t.width,y:u};break;case rt:f={x:t.x-e.width,y:u};break;default:f={x:t.x,y:t.y}}var v=r?ao(r):null;if(v!=null){var w=v==="y"?"height":"width";switch(a){case We:f[v]=f[v]-(t[w]/2-e[w]/2);break;case yn:f[v]=f[v]+(t[w]/2-e[w]/2);break}}return f}function An(n,t){t===void 0&&(t={});var e=t,s=e.placement,r=s===void 0?n.placement:s,a=e.strategy,l=a===void 0?n.strategy:a,u=e.boundary,f=u===void 0?Bl:u,v=e.rootBoundary,w=v===void 0?no:v,I=e.elementContext,A=I===void 0?ln:I,O=e.altBoundary,R=O===void 0?!1:O,D=e.padding,N=D===void 0?0:D,x=sh(typeof N!="number"?N:rh(N,Nn)),F=A===ln?Wl:ln,U=n.rects.popper,P=n.elements[R?F:A],$=Im(ze(P)?P:P.contextElement||be(n.elements.popper),f,w,l),M=wn(n.elements.reference),_=ch({reference:M,element:U,placement:r}),d=Dr(Object.assign({},U,_)),g=A===ln?d:M,E={top:$.top-g.top+x.top,bottom:g.bottom-$.bottom+x.bottom,left:$.left-g.left+x.left,right:g.right-$.right+x.right},m=n.modifiersData.offset;if(A===ln&&m){var y=m[r];Object.keys(E).forEach(function(p){var q=[ht,lt].indexOf(p)>=0?1:-1,tt=[st,lt].indexOf(p)>=0?"y":"x";E[p]+=y[tt]*q})}return E}function Sm(n,t){t===void 0&&(t={});var e=t,s=e.placement,r=e.boundary,a=e.rootBoundary,l=e.padding,u=e.flipVariations,f=e.allowedAutoPlacements,v=f===void 0?io:f,w=bn(s),I=w?u?Or:Or.filter(function(R){return bn(R)===w}):Nn,A=I.filter(function(R){return v.indexOf(R)>=0});A.length===0&&(A=I);var O=A.reduce(function(R,D){return R[D]=An(n,{placement:D,boundary:r,rootBoundary:a,padding:l})[Mt(D)],R},{});return Object.keys(O).sort(function(R,D){return O[R]-O[D]})}function Cm(n){if(Mt(n)===vs)return[];var t=Qi(n);return[cc(n),t,cc(t)]}function Om(n){var t=n.state,e=n.options,s=n.name;if(!t.modifiersData[s]._skip){for(var r=e.mainAxis,a=r===void 0?!0:r,l=e.altAxis,u=l===void 0?!0:l,f=e.fallbackPlacements,v=e.padding,w=e.boundary,I=e.rootBoundary,A=e.altBoundary,O=e.flipVariations,R=O===void 0?!0:O,D=e.allowedAutoPlacements,N=t.options.placement,x=Mt(N),F=x===N,U=f||(F||!R?[Qi(N)]:Cm(N)),P=[N].concat(U).reduce(function(vt,ft){return vt.concat(Mt(ft)===vs?Sm(t,{placement:ft,boundary:w,rootBoundary:I,padding:v,flipVariations:R,allowedAutoPlacements:D}):ft)},[]),$=t.rects.reference,M=t.rects.popper,_=new Map,d=!0,g=P[0],E=0;E<P.length;E++){var m=P[E],y=Mt(m),p=bn(m)===We,q=[st,lt].indexOf(y)>=0,tt=q?"width":"height",et=An(t,{placement:m,boundary:w,rootBoundary:I,altBoundary:A,padding:v}),ct=q?p?ht:rt:p?lt:st;$[tt]>M[tt]&&(ct=Qi(ct));var jt=Qi(ct),dt=[];if(a&&dt.push(et[y]<=0),u&&dt.push(et[ct]<=0,et[jt]<=0),dt.every(function(vt){return vt})){g=m,d=!1;break}_.set(m,dt)}if(d)for(var Ye=R?3:1,Xe=function(ft){var Ht=P.find(function(ee){var yt=_.get(ee);if(yt)return yt.slice(0,ft).every(function(Je){return Je})});if(Ht)return g=Ht,"break"},te=Ye;te>0;te--){var Se=Xe(te);if(Se==="break")break}t.placement!==g&&(t.modifiersData[s]._skip=!0,t.placement=g,t.reset=!0)}}const lh={name:"flip",enabled:!0,phase:"main",fn:Om,requiresIfExists:["offset"],data:{_skip:!1}};function hc(n,t,e){return e===void 0&&(e={x:0,y:0}),{top:n.top-t.height-e.y,right:n.right-t.width+e.x,bottom:n.bottom-t.height+e.y,left:n.left-t.width-e.x}}function uc(n){return[st,ht,lt,rt].some(function(t){return n[t]>=0})}function Nm(n){var t=n.state,e=n.name,s=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,l=An(t,{elementContext:"reference"}),u=An(t,{altBoundary:!0}),f=hc(l,s),v=hc(u,r,a),w=uc(f),I=uc(v);t.modifiersData[e]={referenceClippingOffsets:f,popperEscapeOffsets:v,isReferenceHidden:w,hasPopperEscaped:I},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":w,"data-popper-escaped":I})}const hh={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Nm};function Dm(n,t,e){var s=Mt(n),r=[rt,st].indexOf(s)>=0?-1:1,a=typeof e=="function"?e(Object.assign({},t,{placement:n})):e,l=a[0],u=a[1];return l=l||0,u=(u||0)*r,[rt,ht].indexOf(s)>=0?{x:u,y:l}:{x:l,y:u}}function Rm(n){var t=n.state,e=n.options,s=n.name,r=e.offset,a=r===void 0?[0,0]:r,l=io.reduce(function(w,I){return w[I]=Dm(I,t.rects,a),w},{}),u=l[t.placement],f=u.x,v=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=v),t.modifiersData[s]=l}const uh={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Rm};function Pm(n){var t=n.state,e=n.name;t.modifiersData[e]=ch({reference:t.rects.reference,element:t.rects.popper,placement:t.placement})}const po={name:"popperOffsets",enabled:!0,phase:"read",fn:Pm,data:{}};function km(n){return n==="x"?"y":"x"}function Lm(n){var t=n.state,e=n.options,s=n.name,r=e.mainAxis,a=r===void 0?!0:r,l=e.altAxis,u=l===void 0?!1:l,f=e.boundary,v=e.rootBoundary,w=e.altBoundary,I=e.padding,A=e.tether,O=A===void 0?!0:A,R=e.tetherOffset,D=R===void 0?0:R,N=An(t,{boundary:f,rootBoundary:v,padding:I,altBoundary:w}),x=Mt(t.placement),F=bn(t.placement),U=!F,P=ao(x),$=km(P),M=t.modifiersData.popperOffsets,_=t.rects.reference,d=t.rects.popper,g=typeof D=="function"?D(Object.assign({},t.rects,{placement:t.placement})):D,E=typeof g=="number"?{mainAxis:g,altAxis:g}:Object.assign({mainAxis:0,altAxis:0},g),m=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,y={x:0,y:0};if(M){if(a){var p,q=P==="y"?st:rt,tt=P==="y"?lt:ht,et=P==="y"?"height":"width",ct=M[P],jt=ct+N[q],dt=ct-N[tt],Ye=O?-d[et]/2:0,Xe=F===We?_[et]:d[et],te=F===We?-d[et]:-_[et],Se=t.elements.arrow,vt=O&&Se?oo(Se):{width:0,height:0},ft=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ih(),Ht=ft[q],ee=ft[tt],yt=oi(0,_[et],vt[et]),Je=U?_[et]/2-Ye-yt-Ht-E.mainAxis:Xe-yt-Ht-E.mainAxis,Cs=U?-_[et]/2+Ye+yt+ee+E.mainAxis:te+yt+ee+E.mainAxis,kn=t.elements.arrow&&vi(t.elements.arrow),Ai=kn?P==="y"?kn.clientTop||0:kn.clientLeft||0:0,Qe=(p=m?.[P])!=null?p:0,Ii=ct+Je-Qe-Ai,Os=ct+Cs-Qe,Ze=oi(O?ds(jt,Ii):jt,ct,O?Ve(dt,Os):dt);M[P]=Ze,y[P]=Ze-ct}if(u){var tn,Si=P==="x"?st:rt,Q=P==="x"?lt:ht,G=M[$],Bt=$==="y"?"height":"width",Ci=G+N[Si],Ln=G-N[Q],Mn=[st,rt].indexOf(x)!==-1,ne=(tn=m?.[$])!=null?tn:0,xn=Mn?Ci:G-_[Bt]-d[Bt]-ne+E.altAxis,$n=Mn?G+_[Bt]+d[Bt]-ne-E.altAxis:Ln,en=O&&Mn?um(xn,G,$n):oi(O?xn:Ci,G,O?$n:Ln);M[$]=en,y[$]=en-G}t.modifiersData[s]=y}}const dh={name:"preventOverflow",enabled:!0,phase:"main",fn:Lm,requiresIfExists:["offset"]};function Mm(n){return{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}}function xm(n){return n===ut(n)||!gt(n)?ho(n):Mm(n)}function $m(n){var t=n.getBoundingClientRect(),e=Tn(t.width)/n.offsetWidth||1,s=Tn(t.height)/n.offsetHeight||1;return e!==1||s!==1}function Um(n,t,e){e===void 0&&(e=!1);var s=gt(t),r=gt(t)&&$m(t),a=be(t),l=wn(n,r,e),u={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(s||!s&&!e)&&((Ut(t)!=="body"||fo(a))&&(u=xm(t)),gt(t)?(f=wn(t,!0),f.x+=t.clientLeft,f.y+=t.clientTop):a&&(f.x=uo(a))),{x:l.left+u.scrollLeft-f.x,y:l.top+u.scrollTop-f.y,width:l.width,height:l.height}}function Vm(n){var t=new Map,e=new Set,s=[];n.forEach(function(a){t.set(a.name,a)});function r(a){e.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(u){if(!e.has(u)){var f=t.get(u);f&&r(f)}}),s.push(a)}return n.forEach(function(a){e.has(a.name)||r(a)}),s}function Fm(n){var t=Vm(n);return th.reduce(function(e,s){return e.concat(t.filter(function(r){return r.phase===s}))},[])}function jm(n){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(n())})})),t}}function Hm(n){var t=n.reduce(function(e,s){var r=e[s.name];return e[s.name]=r?Object.assign({},r,s,{options:Object.assign({},r.options,s.options),data:Object.assign({},r.data,s.data)}):s,e},{});return Object.keys(t).map(function(e){return t[e]})}var dc={placement:"bottom",modifiers:[],strategy:"absolute"};function fc(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return!t.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Ts(n){n===void 0&&(n={});var t=n,e=t.defaultModifiers,s=e===void 0?[]:e,r=t.defaultOptions,a=r===void 0?dc:r;return function(u,f,v){v===void 0&&(v=a);var w={placement:"bottom",orderedModifiers:[],options:Object.assign({},dc,a),modifiersData:{},elements:{reference:u,popper:f},attributes:{},styles:{}},I=[],A=!1,O={state:w,setOptions:function(x){var F=typeof x=="function"?x(w.options):x;D(),w.options=Object.assign({},a,w.options,F),w.scrollParents={reference:ze(u)?ai(u):u.contextElement?ai(u.contextElement):[],popper:ai(f)};var U=Fm(Hm([].concat(s,w.options.modifiers)));return w.orderedModifiers=U.filter(function(P){return P.enabled}),R(),O.update()},forceUpdate:function(){if(!A){var x=w.elements,F=x.reference,U=x.popper;if(fc(F,U)){w.rects={reference:Um(F,vi(U),w.options.strategy==="fixed"),popper:oo(U)},w.reset=!1,w.placement=w.options.placement,w.orderedModifiers.forEach(function(E){return w.modifiersData[E.name]=Object.assign({},E.data)});for(var P=0;P<w.orderedModifiers.length;P++){if(w.reset===!0){w.reset=!1,P=-1;continue}var $=w.orderedModifiers[P],M=$.fn,_=$.options,d=_===void 0?{}:_,g=$.name;typeof M=="function"&&(w=M({state:w,options:d,name:g,instance:O})||w)}}}},update:jm(function(){return new Promise(function(N){O.forceUpdate(),N(w)})}),destroy:function(){D(),A=!0}};if(!fc(u,f))return O;O.setOptions(v).then(function(N){!A&&v.onFirstUpdate&&v.onFirstUpdate(N)});function R(){w.orderedModifiers.forEach(function(N){var x=N.name,F=N.options,U=F===void 0?{}:F,P=N.effect;if(typeof P=="function"){var $=P({state:w,name:x,instance:O,options:U}),M=function(){};I.push($||M)}})}function D(){I.forEach(function(N){return N()}),I=[]}return O}}var Bm=Ts(),Wm=[lo,po,co,ro],zm=Ts({defaultModifiers:Wm}),Km=[lo,po,co,ro,uh,lh,dh,oh,hh],go=Ts({defaultModifiers:Km});const fh=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Xl,afterRead:Gl,afterWrite:Zl,applyStyles:ro,arrow:oh,auto:vs,basePlacements:Nn,beforeMain:ql,beforeRead:zl,beforeWrite:Jl,bottom:lt,clippingParents:Bl,computeStyles:co,createPopper:go,createPopperBase:Bm,createPopperLite:zm,detectOverflow:An,end:yn,eventListeners:lo,flip:lh,hide:hh,left:rt,main:Yl,modifierPhases:th,offset:uh,placements:io,popper:ln,popperGenerator:Ts,popperOffsets:po,preventOverflow:dh,read:Kl,reference:Wl,right:ht,start:We,top:st,variationPlacements:Or,viewport:no,write:Ql},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const he=new Map,ir={set(n,t,e){he.has(n)||he.set(n,new Map);const s=he.get(n);if(!s.has(t)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(t,e)},get(n,t){return he.has(n)&&he.get(n).get(t)||null},remove(n,t){if(!he.has(n))return;const e=he.get(n);e.delete(t),e.size===0&&he.delete(n)}},Gm=1e6,qm=1e3,Rr="transitionend",ph=n=>(n&&window.CSS&&window.CSS.escape&&(n=n.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),n),Ym=n=>n==null?`${n}`:Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),Xm=n=>{do n+=Math.floor(Math.random()*Gm);while(document.getElementById(n));return n},Jm=n=>{if(!n)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(n);const s=Number.parseFloat(t),r=Number.parseFloat(e);return!s&&!r?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*qm)},gh=n=>{n.dispatchEvent(new Event(Rr))},Gt=n=>!n||typeof n!="object"?!1:(typeof n.jquery<"u"&&(n=n[0]),typeof n.nodeType<"u"),ve=n=>Gt(n)?n.jquery?n[0]:n:typeof n=="string"&&n.length>0?document.querySelector(ph(n)):null,Dn=n=>{if(!Gt(n)||n.getClientRects().length===0)return!1;const t=getComputedStyle(n).getPropertyValue("visibility")==="visible",e=n.closest("details:not([open])");if(!e)return t;if(e!==n){const s=n.closest("summary");if(s&&s.parentNode!==e||s===null)return!1}return t},ye=n=>!n||n.nodeType!==Node.ELEMENT_NODE||n.classList.contains("disabled")?!0:typeof n.disabled<"u"?n.disabled:n.hasAttribute("disabled")&&n.getAttribute("disabled")!=="false",mh=n=>{if(!document.documentElement.attachShadow)return null;if(typeof n.getRootNode=="function"){const t=n.getRootNode();return t instanceof ShadowRoot?t:null}return n instanceof ShadowRoot?n:n.parentNode?mh(n.parentNode):null},fs=()=>{},yi=n=>{n.offsetHeight},_h=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,sr=[],Qm=n=>{document.readyState==="loading"?(sr.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of sr)t()}),sr.push(n)):n()},mt=()=>document.documentElement.dir==="rtl",Et=n=>{Qm(()=>{const t=_h();if(t){const e=n.NAME,s=t.fn[e];t.fn[e]=n.jQueryInterface,t.fn[e].Constructor=n,t.fn[e].noConflict=()=>(t.fn[e]=s,n.jQueryInterface)}})},at=(n,t=[],e=n)=>typeof n=="function"?n.call(...t):e,Eh=(n,t,e=!0)=>{if(!e){at(n);return}const r=Jm(t)+5;let a=!1;const l=({target:u})=>{u===t&&(a=!0,t.removeEventListener(Rr,l),at(n))};t.addEventListener(Rr,l),setTimeout(()=>{a||gh(t)},r)},mo=(n,t,e,s)=>{const r=n.length;let a=n.indexOf(t);return a===-1?!e&&s?n[r-1]:n[0]:(a+=e?1:-1,s&&(a=(a+r)%r),n[Math.max(0,Math.min(a,r-1))])},Zm=/[^.]*(?=\..*)\.|.*/,t_=/\..*/,e_=/::\d+$/,rr={};let pc=1;const vh={mouseenter:"mouseover",mouseleave:"mouseout"},n_=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function yh(n,t){return t&&`${t}::${pc++}`||n.uidEvent||pc++}function Th(n){const t=yh(n);return n.uidEvent=t,rr[t]=rr[t]||{},rr[t]}function i_(n,t){return function e(s){return _o(s,{delegateTarget:n}),e.oneOff&&S.off(n,s.type,t),t.apply(n,[s])}}function s_(n,t,e){return function s(r){const a=n.querySelectorAll(t);for(let{target:l}=r;l&&l!==this;l=l.parentNode)for(const u of a)if(u===l)return _o(r,{delegateTarget:l}),s.oneOff&&S.off(n,r.type,t,e),e.apply(l,[r])}}function wh(n,t,e=null){return Object.values(n).find(s=>s.callable===t&&s.delegationSelector===e)}function bh(n,t,e){const s=typeof t=="string",r=s?e:t||e;let a=Ah(n);return n_.has(a)||(a=n),[s,r,a]}function gc(n,t,e,s,r){if(typeof t!="string"||!n)return;let[a,l,u]=bh(t,e,s);t in vh&&(l=(R=>function(D){if(!D.relatedTarget||D.relatedTarget!==D.delegateTarget&&!D.delegateTarget.contains(D.relatedTarget))return R.call(this,D)})(l));const f=Th(n),v=f[u]||(f[u]={}),w=wh(v,l,a?e:null);if(w){w.oneOff=w.oneOff&&r;return}const I=yh(l,t.replace(Zm,"")),A=a?s_(n,e,l):i_(n,l);A.delegationSelector=a?e:null,A.callable=l,A.oneOff=r,A.uidEvent=I,v[I]=A,n.addEventListener(u,A,a)}function Pr(n,t,e,s,r){const a=wh(t[e],s,r);a&&(n.removeEventListener(e,a,!!r),delete t[e][a.uidEvent])}function r_(n,t,e,s){const r=t[e]||{};for(const[a,l]of Object.entries(r))a.includes(s)&&Pr(n,t,e,l.callable,l.delegationSelector)}function Ah(n){return n=n.replace(t_,""),vh[n]||n}const S={on(n,t,e,s){gc(n,t,e,s,!1)},one(n,t,e,s){gc(n,t,e,s,!0)},off(n,t,e,s){if(typeof t!="string"||!n)return;const[r,a,l]=bh(t,e,s),u=l!==t,f=Th(n),v=f[l]||{},w=t.startsWith(".");if(typeof a<"u"){if(!Object.keys(v).length)return;Pr(n,f,l,a,r?e:null);return}if(w)for(const I of Object.keys(f))r_(n,f,I,t.slice(1));for(const[I,A]of Object.entries(v)){const O=I.replace(e_,"");(!u||t.includes(O))&&Pr(n,f,l,A.callable,A.delegationSelector)}},trigger(n,t,e){if(typeof t!="string"||!n)return null;const s=_h(),r=Ah(t),a=t!==r;let l=null,u=!0,f=!0,v=!1;a&&s&&(l=s.Event(t,e),s(n).trigger(l),u=!l.isPropagationStopped(),f=!l.isImmediatePropagationStopped(),v=l.isDefaultPrevented());const w=_o(new Event(t,{bubbles:u,cancelable:!0}),e);return v&&w.preventDefault(),f&&n.dispatchEvent(w),w.defaultPrevented&&l&&l.preventDefault(),w}};function _o(n,t={}){for(const[e,s]of Object.entries(t))try{n[e]=s}catch{Object.defineProperty(n,e,{configurable:!0,get(){return s}})}return n}function mc(n){if(n==="true")return!0;if(n==="false")return!1;if(n===Number(n).toString())return Number(n);if(n===""||n==="null")return null;if(typeof n!="string")return n;try{return JSON.parse(decodeURIComponent(n))}catch{return n}}function or(n){return n.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const qt={setDataAttribute(n,t,e){n.setAttribute(`data-bs-${or(t)}`,e)},removeDataAttribute(n,t){n.removeAttribute(`data-bs-${or(t)}`)},getDataAttributes(n){if(!n)return{};const t={},e=Object.keys(n.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of e){let r=s.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),t[r]=mc(n.dataset[s])}return t},getDataAttribute(n,t){return mc(n.getAttribute(`data-bs-${or(t)}`))}};class Ti{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const s=Gt(e)?qt.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Gt(e)?qt.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[s,r]of Object.entries(e)){const a=t[s],l=Gt(a)?"element":Ym(a);if(!new RegExp(r).test(l))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${l}" but expected type "${r}".`)}}}const o_="5.3.8";class St extends Ti{constructor(t,e){super(),t=ve(t),t&&(this._element=t,this._config=this._getConfig(e),ir.set(this._element,this.constructor.DATA_KEY,this))}dispose(){ir.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,s=!0){Eh(t,e,s)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return ir.get(ve(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return o_}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const ar=n=>{let t=n.getAttribute("data-bs-target");if(!t||t==="#"){let e=n.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t?t.split(",").map(e=>ph(e)).join(","):null},k={find(n,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,n))},findOne(n,t=document.documentElement){return Element.prototype.querySelector.call(t,n)},children(n,t){return[].concat(...n.children).filter(e=>e.matches(t))},parents(n,t){const e=[];let s=n.parentNode.closest(t);for(;s;)e.push(s),s=s.parentNode.closest(t);return e},prev(n,t){let e=n.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(n,t){let e=n.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(n){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,n).filter(e=>!ye(e)&&Dn(e))},getSelectorFromElement(n){const t=ar(n);return t&&k.findOne(t)?t:null},getElementFromSelector(n){const t=ar(n);return t?k.findOne(t):null},getMultipleElementsFromSelector(n){const t=ar(n);return t?k.find(t):[]}},ws=(n,t="hide")=>{const e=`click.dismiss${n.EVENT_KEY}`,s=n.NAME;S.on(document,e,`[data-bs-dismiss="${s}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),ye(this))return;const a=k.getElementFromSelector(this)||this.closest(`.${s}`);n.getOrCreateInstance(a)[t]()})},a_="alert",c_="bs.alert",Ih=`.${c_}`,l_=`close${Ih}`,h_=`closed${Ih}`,u_="fade",d_="show";class bs extends St{static get NAME(){return a_}close(){if(S.trigger(this._element,l_).defaultPrevented)return;this._element.classList.remove(d_);const e=this._element.classList.contains(u_);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),S.trigger(this._element,h_),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=bs.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}ws(bs,"close");Et(bs);const f_="button",p_="bs.button",g_=`.${p_}`,m_=".data-api",__="active",_c='[data-bs-toggle="button"]',E_=`click${g_}${m_}`;class As extends St{static get NAME(){return f_}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(__))}static jQueryInterface(t){return this.each(function(){const e=As.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}S.on(document,E_,_c,n=>{n.preventDefault();const t=n.target.closest(_c);As.getOrCreateInstance(t).toggle()});Et(As);const v_="swipe",Rn=".bs.swipe",y_=`touchstart${Rn}`,T_=`touchmove${Rn}`,w_=`touchend${Rn}`,b_=`pointerdown${Rn}`,A_=`pointerup${Rn}`,I_="touch",S_="pen",C_="pointer-event",O_=40,N_={endCallback:null,leftCallback:null,rightCallback:null},D_={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ps extends Ti{constructor(t,e){super(),this._element=t,!(!t||!ps.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return N_}static get DefaultType(){return D_}static get NAME(){return v_}dispose(){S.off(this._element,Rn)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),at(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=O_)return;const e=t/this._deltaX;this._deltaX=0,e&&at(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,b_,t=>this._start(t)),S.on(this._element,A_,t=>this._end(t)),this._element.classList.add(C_)):(S.on(this._element,y_,t=>this._start(t)),S.on(this._element,T_,t=>this._move(t)),S.on(this._element,w_,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===S_||t.pointerType===I_)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const R_="carousel",P_="bs.carousel",Ae=`.${P_}`,Sh=".data-api",k_="ArrowLeft",L_="ArrowRight",M_=500,Zn="next",an="prev",hn="left",Zi="right",x_=`slide${Ae}`,cr=`slid${Ae}`,$_=`keydown${Ae}`,U_=`mouseenter${Ae}`,V_=`mouseleave${Ae}`,F_=`dragstart${Ae}`,j_=`load${Ae}${Sh}`,H_=`click${Ae}${Sh}`,Ch="carousel",ji="active",B_="slide",W_="carousel-item-end",z_="carousel-item-start",K_="carousel-item-next",G_="carousel-item-prev",Oh=".active",Nh=".carousel-item",q_=Oh+Nh,Y_=".carousel-item img",X_=".carousel-indicators",J_="[data-bs-slide], [data-bs-slide-to]",Q_='[data-bs-ride="carousel"]',Z_={[k_]:Zi,[L_]:hn},tE={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},eE={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class wi extends St{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=k.findOne(X_,this._element),this._addEventListeners(),this._config.ride===Ch&&this.cycle()}static get Default(){return tE}static get DefaultType(){return eE}static get NAME(){return R_}next(){this._slide(Zn)}nextWhenVisible(){!document.hidden&&Dn(this._element)&&this.next()}prev(){this._slide(an)}pause(){this._isSliding&&gh(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,cr,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){S.one(this._element,cr,()=>this.to(t));return}const s=this._getItemIndex(this._getActive());if(s===t)return;const r=t>s?Zn:an;this._slide(r,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&S.on(this._element,$_,t=>this._keydown(t)),this._config.pause==="hover"&&(S.on(this._element,U_,()=>this.pause()),S.on(this._element,V_,()=>this._maybeEnableCycle())),this._config.touch&&ps.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of k.find(Y_,this._element))S.on(s,F_,r=>r.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(hn)),rightCallback:()=>this._slide(this._directionToOrder(Zi)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),M_+this._config.interval))}};this._swipeHelper=new ps(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Z_[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=k.findOne(Oh,this._indicatorsElement);e.classList.remove(ji),e.removeAttribute("aria-current");const s=k.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);s&&(s.classList.add(ji),s.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const s=this._getActive(),r=t===Zn,a=e||mo(this._getItems(),s,r,this._config.wrap);if(a===s)return;const l=this._getItemIndex(a),u=O=>S.trigger(this._element,O,{relatedTarget:a,direction:this._orderToDirection(t),from:this._getItemIndex(s),to:l});if(u(x_).defaultPrevented||!s||!a)return;const v=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(l),this._activeElement=a;const w=r?z_:W_,I=r?K_:G_;a.classList.add(I),yi(a),s.classList.add(w),a.classList.add(w);const A=()=>{a.classList.remove(w,I),a.classList.add(ji),s.classList.remove(ji,I,w),this._isSliding=!1,u(cr)};this._queueCallback(A,s,this._isAnimated()),v&&this.cycle()}_isAnimated(){return this._element.classList.contains(B_)}_getActive(){return k.findOne(q_,this._element)}_getItems(){return k.find(Nh,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return mt()?t===hn?an:Zn:t===hn?Zn:an}_orderToDirection(t){return mt()?t===an?hn:Zi:t===an?Zi:hn}static jQueryInterface(t){return this.each(function(){const e=wi.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}S.on(document,H_,J_,function(n){const t=k.getElementFromSelector(this);if(!t||!t.classList.contains(Ch))return;n.preventDefault();const e=wi.getOrCreateInstance(t),s=this.getAttribute("data-bs-slide-to");if(s){e.to(s),e._maybeEnableCycle();return}if(qt.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});S.on(window,j_,()=>{const n=k.find(Q_);for(const t of n)wi.getOrCreateInstance(t)});Et(wi);const nE="collapse",iE="bs.collapse",bi=`.${iE}`,sE=".data-api",rE=`show${bi}`,oE=`shown${bi}`,aE=`hide${bi}`,cE=`hidden${bi}`,lE=`click${bi}${sE}`,lr="show",fn="collapse",Hi="collapsing",hE="collapsed",uE=`:scope .${fn} .${fn}`,dE="collapse-horizontal",fE="width",pE="height",gE=".collapse.show, .collapse.collapsing",kr='[data-bs-toggle="collapse"]',mE={parent:null,toggle:!0},_E={parent:"(null|element)",toggle:"boolean"};class ui extends St{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const s=k.find(kr);for(const r of s){const a=k.getSelectorFromElement(r),l=k.find(a).filter(u=>u===this._element);a!==null&&l.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return mE}static get DefaultType(){return _E}static get NAME(){return nE}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(gE).filter(u=>u!==this._element).map(u=>ui.getOrCreateInstance(u,{toggle:!1}))),t.length&&t[0]._isTransitioning||S.trigger(this._element,rE).defaultPrevented)return;for(const u of t)u.hide();const s=this._getDimension();this._element.classList.remove(fn),this._element.classList.add(Hi),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Hi),this._element.classList.add(fn,lr),this._element.style[s]="",S.trigger(this._element,oE)},l=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[s]=`${this._element[l]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,aE).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,yi(this._element),this._element.classList.add(Hi),this._element.classList.remove(fn,lr);for(const r of this._triggerArray){const a=k.getElementFromSelector(r);a&&!this._isShown(a)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Hi),this._element.classList.add(fn),S.trigger(this._element,cE)};this._element.style[e]="",this._queueCallback(s,this._element,!0)}_isShown(t=this._element){return t.classList.contains(lr)}_configAfterMerge(t){return t.toggle=!!t.toggle,t.parent=ve(t.parent),t}_getDimension(){return this._element.classList.contains(dE)?fE:pE}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(kr);for(const e of t){const s=k.getElementFromSelector(e);s&&this._addAriaAndCollapsedClass([e],this._isShown(s))}}_getFirstLevelChildren(t){const e=k.find(uE,this._config.parent);return k.find(t,this._config.parent).filter(s=>!e.includes(s))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const s of t)s.classList.toggle(hE,!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const s=ui.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t]()}})}}S.on(document,lE,kr,function(n){(n.target.tagName==="A"||n.delegateTarget&&n.delegateTarget.tagName==="A")&&n.preventDefault();for(const t of k.getMultipleElementsFromSelector(this))ui.getOrCreateInstance(t,{toggle:!1}).toggle()});Et(ui);const Ec="dropdown",EE="bs.dropdown",Ge=`.${EE}`,Eo=".data-api",vE="Escape",vc="Tab",yE="ArrowUp",yc="ArrowDown",TE=2,wE=`hide${Ge}`,bE=`hidden${Ge}`,AE=`show${Ge}`,IE=`shown${Ge}`,Dh=`click${Ge}${Eo}`,Rh=`keydown${Ge}${Eo}`,SE=`keyup${Ge}${Eo}`,un="show",CE="dropup",OE="dropend",NE="dropstart",DE="dropup-center",RE="dropdown-center",Le='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',PE=`${Le}.${un}`,ts=".dropdown-menu",kE=".navbar",LE=".navbar-nav",ME=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",xE=mt()?"top-end":"top-start",$E=mt()?"top-start":"top-end",UE=mt()?"bottom-end":"bottom-start",VE=mt()?"bottom-start":"bottom-end",FE=mt()?"left-start":"right-start",jE=mt()?"right-start":"left-start",HE="top",BE="bottom",WE={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},zE={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class xt extends St{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=k.next(this._element,ts)[0]||k.prev(this._element,ts)[0]||k.findOne(ts,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return WE}static get DefaultType(){return zE}static get NAME(){return Ec}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ye(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!S.trigger(this._element,AE,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(LE))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",fs);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(un),this._element.classList.add(un),S.trigger(this._element,IE,t)}}hide(){if(ye(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!S.trigger(this._element,wE,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",fs);this._popper&&this._popper.destroy(),this._menu.classList.remove(un),this._element.classList.remove(un),this._element.setAttribute("aria-expanded","false"),qt.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,bE,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!Gt(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Ec.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof fh>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;this._config.reference==="parent"?t=this._parent:Gt(this._config.reference)?t=ve(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=go(t,this._menu,e)}_isShown(){return this._menu.classList.contains(un)}_getPlacement(){const t=this._parent;if(t.classList.contains(OE))return FE;if(t.classList.contains(NE))return jE;if(t.classList.contains(DE))return HE;if(t.classList.contains(RE))return BE;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(CE)?e?$E:xE:e?VE:UE}_detectNavbar(){return this._element.closest(kE)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(qt.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...at(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const s=k.find(ME,this._menu).filter(r=>Dn(r));s.length&&mo(s,e,t===yc,!s.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=xt.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===TE||t.type==="keyup"&&t.key!==vc)return;const e=k.find(PE);for(const s of e){const r=xt.getInstance(s);if(!r||r._config.autoClose===!1)continue;const a=t.composedPath(),l=a.includes(r._menu);if(a.includes(r._element)||r._config.autoClose==="inside"&&!l||r._config.autoClose==="outside"&&l||r._menu.contains(t.target)&&(t.type==="keyup"&&t.key===vc||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const u={relatedTarget:r._element};t.type==="click"&&(u.clickEvent=t),r._completeHide(u)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),s=t.key===vE,r=[yE,yc].includes(t.key);if(!r&&!s||e&&!s)return;t.preventDefault();const a=this.matches(Le)?this:k.prev(this,Le)[0]||k.next(this,Le)[0]||k.findOne(Le,t.delegateTarget.parentNode),l=xt.getOrCreateInstance(a);if(r){t.stopPropagation(),l.show(),l._selectMenuItem(t);return}l._isShown()&&(t.stopPropagation(),l.hide(),a.focus())}}S.on(document,Rh,Le,xt.dataApiKeydownHandler);S.on(document,Rh,ts,xt.dataApiKeydownHandler);S.on(document,Dh,xt.clearMenus);S.on(document,SE,xt.clearMenus);S.on(document,Dh,Le,function(n){n.preventDefault(),xt.getOrCreateInstance(this).toggle()});Et(xt);const Ph="backdrop",KE="fade",Tc="show",wc=`mousedown.bs.${Ph}`,GE={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},qE={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class kh extends Ti{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return GE}static get DefaultType(){return qE}static get NAME(){return Ph}show(t){if(!this._config.isVisible){at(t);return}this._append();const e=this._getElement();this._config.isAnimated&&yi(e),e.classList.add(Tc),this._emulateAnimation(()=>{at(t)})}hide(t){if(!this._config.isVisible){at(t);return}this._getElement().classList.remove(Tc),this._emulateAnimation(()=>{this.dispose(),at(t)})}dispose(){this._isAppended&&(S.off(this._element,wc),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(KE),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=ve(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),S.on(t,wc,()=>{at(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Eh(t,this._getElement(),this._config.isAnimated)}}const YE="focustrap",XE="bs.focustrap",gs=`.${XE}`,JE=`focusin${gs}`,QE=`keydown.tab${gs}`,ZE="Tab",tv="forward",bc="backward",ev={autofocus:!0,trapElement:null},nv={autofocus:"boolean",trapElement:"element"};class Lh extends Ti{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return ev}static get DefaultType(){return nv}static get NAME(){return YE}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,gs),S.on(document,JE,t=>this._handleFocusin(t)),S.on(document,QE,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,gs))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const s=k.focusableChildren(e);s.length===0?e.focus():this._lastTabNavDirection===bc?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===ZE&&(this._lastTabNavDirection=t.shiftKey?bc:tv)}}const Ac=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ic=".sticky-top",Bi="padding-right",Sc="margin-right";class Lr{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Bi,e=>e+t),this._setElementAttributes(Ac,Bi,e=>e+t),this._setElementAttributes(Ic,Sc,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Bi),this._resetElementAttributes(Ac,Bi),this._resetElementAttributes(Ic,Sc)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const r=this.getWidth(),a=l=>{if(l!==this._element&&window.innerWidth>l.clientWidth+r)return;this._saveInitialAttribute(l,e);const u=window.getComputedStyle(l).getPropertyValue(e);l.style.setProperty(e,`${s(Number.parseFloat(u))}px`)};this._applyManipulationCallback(t,a)}_saveInitialAttribute(t,e){const s=t.style.getPropertyValue(e);s&&qt.setDataAttribute(t,e,s)}_resetElementAttributes(t,e){const s=r=>{const a=qt.getDataAttribute(r,e);if(a===null){r.style.removeProperty(e);return}qt.removeDataAttribute(r,e),r.style.setProperty(e,a)};this._applyManipulationCallback(t,s)}_applyManipulationCallback(t,e){if(Gt(t)){e(t);return}for(const s of k.find(t,this._element))e(s)}}const iv="modal",sv="bs.modal",_t=`.${sv}`,rv=".data-api",ov="Escape",av=`hide${_t}`,cv=`hidePrevented${_t}`,Mh=`hidden${_t}`,xh=`show${_t}`,lv=`shown${_t}`,hv=`resize${_t}`,uv=`click.dismiss${_t}`,dv=`mousedown.dismiss${_t}`,fv=`keydown.dismiss${_t}`,pv=`click${_t}${rv}`,Cc="modal-open",gv="fade",Oc="show",hr="modal-static",mv=".modal.show",_v=".modal-dialog",Ev=".modal-body",vv='[data-bs-toggle="modal"]',yv={backdrop:!0,focus:!0,keyboard:!0},Tv={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class In extends St{constructor(t,e){super(t,e),this._dialog=k.findOne(_v,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Lr,this._addEventListeners()}static get Default(){return yv}static get DefaultType(){return Tv}static get NAME(){return iv}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||S.trigger(this._element,xh,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Cc),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,av).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Oc),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){S.off(window,_t),S.off(this._dialog,_t),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new kh({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Lh({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=k.findOne(Ev,this._dialog);e&&(e.scrollTop=0),yi(this._element),this._element.classList.add(Oc);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,lv,{relatedTarget:t})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,fv,t=>{if(t.key===ov){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),S.on(window,hv,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,dv,t=>{S.one(this._element,uv,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Cc),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,Mh)})}_isAnimated(){return this._element.classList.contains(gv)}_triggerBackdropTransition(){if(S.trigger(this._element,cv).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(hr)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(hr),this._queueCallback(()=>{this._element.classList.remove(hr),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),s=e>0;if(s&&!t){const r=mt()?"paddingLeft":"paddingRight";this._element.style[r]=`${e}px`}if(!s&&t){const r=mt()?"paddingRight":"paddingLeft";this._element.style[r]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const s=In.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof s[t]>"u")throw new TypeError(`No method named "${t}"`);s[t](e)}})}}S.on(document,pv,vv,function(n){const t=k.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&n.preventDefault(),S.one(t,xh,r=>{r.defaultPrevented||S.one(t,Mh,()=>{Dn(this)&&this.focus()})});const e=k.findOne(mv);e&&In.getInstance(e).hide(),In.getOrCreateInstance(t).toggle(this)});ws(In);Et(In);const wv="offcanvas",bv="bs.offcanvas",Zt=`.${bv}`,$h=".data-api",Av=`load${Zt}${$h}`,Iv="Escape",Nc="show",Dc="showing",Rc="hiding",Sv="offcanvas-backdrop",Uh=".offcanvas.show",Cv=`show${Zt}`,Ov=`shown${Zt}`,Nv=`hide${Zt}`,Pc=`hidePrevented${Zt}`,Vh=`hidden${Zt}`,Dv=`resize${Zt}`,Rv=`click${Zt}${$h}`,Pv=`keydown.dismiss${Zt}`,kv='[data-bs-toggle="offcanvas"]',Lv={backdrop:!0,keyboard:!0,scroll:!1},Mv={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Te extends St{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Lv}static get DefaultType(){return Mv}static get NAME(){return wv}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||S.trigger(this._element,Cv,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Lr().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Dc);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Nc),this._element.classList.remove(Dc),S.trigger(this._element,Ov,{relatedTarget:t})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,Nv).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Rc),this._backdrop.hide();const e=()=>{this._element.classList.remove(Nc,Rc),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Lr().reset(),S.trigger(this._element,Vh)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,Pc);return}this.hide()},e=!!this._config.backdrop;return new kh({className:Sv,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Lh({trapElement:this._element})}_addEventListeners(){S.on(this._element,Pv,t=>{if(t.key===Iv){if(this._config.keyboard){this.hide();return}S.trigger(this._element,Pc)}})}static jQueryInterface(t){return this.each(function(){const e=Te.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}S.on(document,Rv,kv,function(n){const t=k.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),ye(this))return;S.one(t,Vh,()=>{Dn(this)&&this.focus()});const e=k.findOne(Uh);e&&e!==t&&Te.getInstance(e).hide(),Te.getOrCreateInstance(t).toggle(this)});S.on(window,Av,()=>{for(const n of k.find(Uh))Te.getOrCreateInstance(n).show()});S.on(window,Dv,()=>{for(const n of k.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(n).position!=="fixed"&&Te.getOrCreateInstance(n).hide()});ws(Te);Et(Te);const xv=/^aria-[\w-]*$/i,Fh={"*":["class","dir","id","lang","role",xv],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},$v=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Uv=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Vv=(n,t)=>{const e=n.nodeName.toLowerCase();return t.includes(e)?$v.has(e)?!!Uv.test(n.nodeValue):!0:t.filter(s=>s instanceof RegExp).some(s=>s.test(e))};function Fv(n,t,e){if(!n.length)return n;if(e&&typeof e=="function")return e(n);const r=new window.DOMParser().parseFromString(n,"text/html"),a=[].concat(...r.body.querySelectorAll("*"));for(const l of a){const u=l.nodeName.toLowerCase();if(!Object.keys(t).includes(u)){l.remove();continue}const f=[].concat(...l.attributes),v=[].concat(t["*"]||[],t[u]||[]);for(const w of f)Vv(w,v)||l.removeAttribute(w.nodeName)}return r.body.innerHTML}const jv="TemplateFactory",Hv={allowList:Fh,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Bv={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Wv={entry:"(string|element|function|null)",selector:"(string|element)"};class zv extends Ti{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Hv}static get DefaultType(){return Bv}static get NAME(){return jv}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[r,a]of Object.entries(this._config.content))this._setContent(t,a,r);const e=t.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&e.classList.add(...s.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,s]of Object.entries(t))super._typeCheckConfig({selector:e,entry:s},Wv)}_setContent(t,e,s){const r=k.findOne(s,t);if(r){if(e=this._resolvePossibleFunction(e),!e){r.remove();return}if(Gt(e)){this._putElementInTemplate(ve(e),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(e);return}r.textContent=e}}_maybeSanitize(t){return this._config.sanitize?Fv(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return at(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Kv="tooltip",Gv=new Set(["sanitize","allowList","sanitizeFn"]),ur="fade",qv="modal",Wi="show",Yv=".tooltip-inner",kc=`.${qv}`,Lc="hide.bs.modal",ti="hover",dr="focus",fr="click",Xv="manual",Jv="hide",Qv="hidden",Zv="show",ty="shown",ey="inserted",ny="click",iy="focusin",sy="focusout",ry="mouseenter",oy="mouseleave",ay={AUTO:"auto",TOP:"top",RIGHT:mt()?"left":"right",BOTTOM:"bottom",LEFT:mt()?"right":"left"},cy={allowList:Fh,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ly={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Pn extends St{constructor(t,e){if(typeof fh>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return cy}static get DefaultType(){return ly}static get NAME(){return Kv}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(kc),Lc,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=S.trigger(this._element,this.constructor.eventName(Zv)),s=(mh(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!s)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:a}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(r),S.trigger(this._element,this.constructor.eventName(ey))),this._popper=this._createPopper(r),r.classList.add(Wi),"ontouchstart"in document.documentElement)for(const u of[].concat(...document.body.children))S.on(u,"mouseover",fs);const l=()=>{S.trigger(this._element,this.constructor.eventName(ty)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(l,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(Jv)).defaultPrevented)return;if(this._getTipElement().classList.remove(Wi),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))S.off(r,"mouseover",fs);this._activeTrigger[fr]=!1,this._activeTrigger[dr]=!1,this._activeTrigger[ti]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(Qv)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(ur,Wi),e.classList.add(`bs-${this.constructor.NAME}-auto`);const s=Xm(this.constructor.NAME).toString();return e.setAttribute("id",s),this._isAnimated()&&e.classList.add(ur),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new zv({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Yv]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(ur)}_isShown(){return this.tip&&this.tip.classList.contains(Wi)}_createPopper(t){const e=at(this._config.placement,[this,t,this._element]),s=ay[e.toUpperCase()];return go(this._element,t,this._getPopperConfig(s))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return at(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...e,...at(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")S.on(this._element,this.constructor.eventName(ny),this._config.selector,s=>{const r=this._initializeOnDelegatedTarget(s);r._activeTrigger[fr]=!(r._isShown()&&r._activeTrigger[fr]),r.toggle()});else if(e!==Xv){const s=e===ti?this.constructor.eventName(ry):this.constructor.eventName(iy),r=e===ti?this.constructor.eventName(oy):this.constructor.eventName(sy);S.on(this._element,s,this._config.selector,a=>{const l=this._initializeOnDelegatedTarget(a);l._activeTrigger[a.type==="focusin"?dr:ti]=!0,l._enter()}),S.on(this._element,r,this._config.selector,a=>{const l=this._initializeOnDelegatedTarget(a);l._activeTrigger[a.type==="focusout"?dr:ti]=l._element.contains(a.relatedTarget),l._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(kc),Lc,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=qt.getDataAttributes(this._element);for(const s of Object.keys(e))Gv.has(s)&&delete e[s];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:ve(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,s]of Object.entries(this._config))this.constructor.Default[e]!==s&&(t[e]=s);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Pn.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Et(Pn);const hy="popover",uy=".popover-header",dy=".popover-body",fy={...Pn.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},py={...Pn.DefaultType,content:"(null|string|element|function)"};class vo extends Pn{static get Default(){return fy}static get DefaultType(){return py}static get NAME(){return hy}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[uy]:this._getTitle(),[dy]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=vo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Et(vo);const gy="scrollspy",my="bs.scrollspy",yo=`.${my}`,_y=".data-api",Ey=`activate${yo}`,Mc=`click${yo}`,vy=`load${yo}${_y}`,yy="dropdown-item",cn="active",Ty='[data-bs-spy="scroll"]',pr="[href]",wy=".nav, .list-group",xc=".nav-link",by=".nav-item",Ay=".list-group-item",Iy=`${xc}, ${by} > ${xc}, ${Ay}`,Sy=".dropdown",Cy=".dropdown-toggle",Oy={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Ny={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Is extends St{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Oy}static get DefaultType(){return Ny}static get NAME(){return gy}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=ve(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,Mc),S.on(this._config.target,Mc,pr,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const s=this._rootElement||window,r=e.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:r,behavior:"smooth"});return}s.scrollTop=r}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=l=>this._targetLinks.get(`#${l.target.id}`),s=l=>{this._previousScrollData.visibleEntryTop=l.target.offsetTop,this._process(e(l))},r=(this._rootElement||document.documentElement).scrollTop,a=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const l of t){if(!l.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(l));continue}const u=l.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(a&&u){if(s(l),!r)return;continue}!a&&!u&&s(l)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=k.find(pr,this._config.target);for(const e of t){if(!e.hash||ye(e))continue;const s=k.findOne(decodeURI(e.hash),this._element);Dn(s)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,s))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(cn),this._activateParents(t),S.trigger(this._element,Ey,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(yy)){k.findOne(Cy,t.closest(Sy)).classList.add(cn);return}for(const e of k.parents(t,wy))for(const s of k.prev(e,Iy))s.classList.add(cn)}_clearActiveClass(t){t.classList.remove(cn);const e=k.find(`${pr}.${cn}`,t);for(const s of e)s.classList.remove(cn)}static jQueryInterface(t){return this.each(function(){const e=Is.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}S.on(window,vy,()=>{for(const n of k.find(Ty))Is.getOrCreateInstance(n)});Et(Is);const Dy="tab",Ry="bs.tab",qe=`.${Ry}`,Py=`hide${qe}`,ky=`hidden${qe}`,Ly=`show${qe}`,My=`shown${qe}`,xy=`click${qe}`,$y=`keydown${qe}`,Uy=`load${qe}`,Vy="ArrowLeft",$c="ArrowRight",Fy="ArrowUp",Uc="ArrowDown",gr="Home",Vc="End",Me="active",Fc="fade",mr="show",jy="dropdown",jh=".dropdown-toggle",Hy=".dropdown-menu",_r=`:not(${jh})`,By='.list-group, .nav, [role="tablist"]',Wy=".nav-item, .list-group-item",zy=`.nav-link${_r}, .list-group-item${_r}, [role="tab"]${_r}`,Hh='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Er=`${zy}, ${Hh}`,Ky=`.${Me}[data-bs-toggle="tab"], .${Me}[data-bs-toggle="pill"], .${Me}[data-bs-toggle="list"]`;class Sn extends St{constructor(t){super(t),this._parent=this._element.closest(By),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,$y,e=>this._keydown(e)))}static get NAME(){return Dy}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),s=e?S.trigger(e,Py,{relatedTarget:t}):null;S.trigger(t,Ly,{relatedTarget:e}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Me),this._activate(k.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(mr);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),S.trigger(t,My,{relatedTarget:e})};this._queueCallback(s,t,t.classList.contains(Fc))}_deactivate(t,e){if(!t)return;t.classList.remove(Me),t.blur(),this._deactivate(k.getElementFromSelector(t));const s=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(mr);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),S.trigger(t,ky,{relatedTarget:e})};this._queueCallback(s,t,t.classList.contains(Fc))}_keydown(t){if(![Vy,$c,Fy,Uc,gr,Vc].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter(r=>!ye(r));let s;if([gr,Vc].includes(t.key))s=e[t.key===gr?0:e.length-1];else{const r=[$c,Uc].includes(t.key);s=mo(e,t.target,r,!0)}s&&(s.focus({preventScroll:!0}),Sn.getOrCreateInstance(s).show())}_getChildren(){return k.find(Er,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const s of e)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),s=this._getOuterElement(t);t.setAttribute("aria-selected",e),s!==t&&this._setAttributeIfNotExists(s,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=k.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const s=this._getOuterElement(t);if(!s.classList.contains(jy))return;const r=(a,l)=>{const u=k.findOne(a,s);u&&u.classList.toggle(l,e)};r(jh,Me),r(Hy,mr),s.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,s){t.hasAttribute(e)||t.setAttribute(e,s)}_elemIsActive(t){return t.classList.contains(Me)}_getInnerElement(t){return t.matches(Er)?t:k.findOne(Er,t)}_getOuterElement(t){return t.closest(Wy)||t}static jQueryInterface(t){return this.each(function(){const e=Sn.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}S.on(document,xy,Hh,function(n){["A","AREA"].includes(this.tagName)&&n.preventDefault(),!ye(this)&&Sn.getOrCreateInstance(this).show()});S.on(window,Uy,()=>{for(const n of k.find(Ky))Sn.getOrCreateInstance(n)});Et(Sn);const Gy="toast",qy="bs.toast",Ie=`.${qy}`,Yy=`mouseover${Ie}`,Xy=`mouseout${Ie}`,Jy=`focusin${Ie}`,Qy=`focusout${Ie}`,Zy=`hide${Ie}`,tT=`hidden${Ie}`,eT=`show${Ie}`,nT=`shown${Ie}`,iT="fade",jc="hide",zi="show",Ki="showing",sT={animation:"boolean",autohide:"boolean",delay:"number"},rT={animation:!0,autohide:!0,delay:5e3};class Ss extends St{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return rT}static get DefaultType(){return sT}static get NAME(){return Gy}show(){if(S.trigger(this._element,eT).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(iT);const e=()=>{this._element.classList.remove(Ki),S.trigger(this._element,nT),this._maybeScheduleHide()};this._element.classList.remove(jc),yi(this._element),this._element.classList.add(zi,Ki),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,Zy).defaultPrevented)return;const e=()=>{this._element.classList.add(jc),this._element.classList.remove(Ki,zi),S.trigger(this._element,tT)};this._element.classList.add(Ki),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(zi),super.dispose()}isShown(){return this._element.classList.contains(zi)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const s=t.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,Yy,t=>this._onInteraction(t,!0)),S.on(this._element,Xy,t=>this._onInteraction(t,!1)),S.on(this._element,Jy,t=>this._onInteraction(t,!0)),S.on(this._element,Qy,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=Ss.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}ws(Ss);Et(Ss);function oT(){}document.addEventListener("DOMContentLoaded!",oT);
