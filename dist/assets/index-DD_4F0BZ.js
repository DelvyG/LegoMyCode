const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lmc-page-accordion-COSvV2gE.js","assets/uuid-0wVnwF9e.js","assets/lmc-page-forms-CLJSBkf0.js","assets/lmc-alert-B8a2oOK_.js","assets/lmc-page-feedback-M11dymcW.js","assets/lmc-page-tabs-CjO1Fr7W.js"])))=>i.map(i=>d[i]);
var Mr=Object.defineProperty;var St=r=>{throw TypeError(r)};var kr=(r,e,t)=>e in r?Mr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var D=(r,e,t)=>kr(r,typeof e!="symbol"?e+"":e,t),nt=(r,e,t)=>e.has(r)||St("Cannot "+t);var g=(r,e,t)=>(nt(r,e,"read from private field"),t?t.call(r):e.get(r)),M=(r,e,t)=>e.has(r)?St("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),S=(r,e,t,n)=>(nt(r,e,"write to private field"),n?n.call(r,t):e.set(r,t),t),m=(r,e,t)=>(nt(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const Dr="modulepreload",Ir=function(r){return"/"+r},Ct={},C=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(t.map(l=>{if(l=Ir(l),l in Ct)return;Ct[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const c=document.createElement("link");if(c.rel=h?"stylesheet":Dr,h||(c.as="script"),c.crossOrigin="",c.href=l,s&&c.setAttribute("nonce",s),document.head.appendChild(c),h)return new Promise((p,f)=>{c.addEventListener("load",p),c.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return o.then(a=>{for(const s of a||[])s.status==="rejected"&&i(s.reason);return e().catch(i)})};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=globalThis,_t=ze.ShadowRoot&&(ze.ShadyCSS===void 0||ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),Lt=new WeakMap;let tr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(_t&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Lt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Lt.set(t,e))}return e}toString(){return this.cssText}};const jr=r=>new tr(typeof r=="string"?r:r+"",void 0,$t),R=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,o,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new tr(t,r,$t)},Ur=(r,e)=>{if(_t)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),o=ze.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},Tt=_t?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return jr(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nr,defineProperty:zr,getOwnPropertyDescriptor:Hr,getOwnPropertyNames:qr,getOwnPropertySymbols:Fr,getPrototypeOf:Vr}=Object,Y=globalThis,Mt=Y.trustedTypes,Br=Mt?Mt.emptyScript:"",it=Y.reactiveElementPolyfillSupport,Pe=(r,e)=>r,We={toAttribute(r,e){switch(e){case Boolean:r=r?Br:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},wt=(r,e)=>!Nr(r,e),kt={attribute:!0,type:String,converter:We,reflect:!1,useDefault:!1,hasChanged:wt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Y.litPropertyMetadata??(Y.litPropertyMetadata=new WeakMap);let me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=kt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&zr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:i}=Hr(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:o,set(a){const s=o==null?void 0:o.call(this);i==null||i.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??kt}static _$Ei(){if(this.hasOwnProperty(Pe("elementProperties")))return;const e=Vr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Pe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pe("properties"))){const t=this.properties,n=[...qr(t),...Fr(t)];for(const o of n)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(Tt(o))}else e!==void 0&&t.push(Tt(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ur(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var i;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:We).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var i,a;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:We;this._$Em=o,this[o]=l.fromAttribute(t,s.type)??((a=this._$Ej)==null?void 0:a.get(o))??null,this._$Em=null}}requestUpdate(e,t,n){var o;if(e!==void 0){const i=this.constructor,a=this[e];if(n??(n=i.getPropertyOptions(e)),!((n.hasChanged??wt)(a,t)||n.useDefault&&n.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:i},a){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,a]of o){const{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[Pe("elementProperties")]=new Map,me[Pe("finalized")]=new Map,it==null||it({ReactiveElement:me}),(Y.reactiveElementVersions??(Y.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ae=globalThis,Ge=Ae.trustedTypes,Dt=Ge?Ge.createPolicy("lit-html",{createHTML:r=>r}):void 0,rr="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,or="?"+B,Wr=`<${or}>`,se=document,Oe=()=>se.createComment(""),Se=r=>r===null||typeof r!="object"&&typeof r!="function",Et=Array.isArray,Gr=r=>Et(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",at=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,jt=/>/g,Z=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ut=/'/g,Nt=/"/g,nr=/^(?:script|style|textarea|title)$/i,Yr=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),y=Yr(1),ge=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),zt=new WeakMap,te=se.createTreeWalker(se,129);function ir(r,e){if(!Et(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dt!==void 0?Dt.createHTML(e):e}const Kr=(r,e)=>{const t=r.length-1,n=[];let o,i=e===2?"<svg>":e===3?"<math>":"",a=Ee;for(let s=0;s<t;s++){const l=r[s];let h,d,c=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===Ee?d[1]==="!--"?a=It:d[1]!==void 0?a=jt:d[2]!==void 0?(nr.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=Z):d[3]!==void 0&&(a=Z):a===Z?d[0]===">"?(a=o??Ee,c=-1):d[1]===void 0?c=-2:(c=a.lastIndex-d[2].length,h=d[1],a=d[3]===void 0?Z:d[3]==='"'?Nt:Ut):a===Nt||a===Ut?a=Z:a===It||a===jt?a=Ee:(a=Z,o=void 0);const f=a===Z&&r[s+1].startsWith("/>")?" ":"";i+=a===Ee?l+Wr:c>=0?(n.push(h),l.slice(0,c)+rr+l.slice(c)+B+f):l+B+(c===-2?s:f)}return[ir(r,i+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Ce{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let i=0,a=0;const s=e.length-1,l=this.parts,[h,d]=Kr(e,t);if(this.el=Ce.createElement(h,n),te.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=te.nextNode())!==null&&l.length<s;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(rr)){const p=d[a++],f=o.getAttribute(c).split(B),b=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:b[2],strings:f,ctor:b[1]==="."?Qr:b[1]==="?"?Jr:b[1]==="@"?Zr:et}),o.removeAttribute(c)}else c.startsWith(B)&&(l.push({type:6,index:i}),o.removeAttribute(c));if(nr.test(o.tagName)){const c=o.textContent.split(B),p=c.length-1;if(p>0){o.textContent=Ge?Ge.emptyScript:"";for(let f=0;f<p;f++)o.append(c[f],Oe()),te.nextNode(),l.push({type:2,index:++i});o.append(c[p],Oe())}}}else if(o.nodeType===8)if(o.data===or)l.push({type:2,index:i});else{let c=-1;for(;(c=o.data.indexOf(B,c+1))!==-1;)l.push({type:7,index:i}),c+=B.length-1}i++}}static createElement(e,t){const n=se.createElement("template");return n.innerHTML=e,n}}function ve(r,e,t=r,n){var a,s;if(e===ge)return e;let o=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl;const i=Se(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=o:t._$Cl=o),o!==void 0&&(e=ve(r,o._$AS(r,e.values),o,n)),e}class Xr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??se).importNode(t,!0);te.currentNode=o;let i=te.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new Ie(i,i.nextSibling,this,e):l.type===1?h=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(h=new eo(i,this,e)),this._$AV.push(h),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=te.nextNode(),a++)}return te.currentNode=se,o}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Ie{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ve(this,e,t),Se(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Gr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==$&&Se(this._$AH)?this._$AA.nextSibling.data=e:this.T(se.createTextNode(e)),this._$AH=e}$(e){var i;const{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ce.createElement(ir(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(t);else{const a=new Xr(o,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=zt.get(e.strings);return t===void 0&&zt.set(e.strings,t=new Ce(e)),t}k(e){Et(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const i of e)o===t.length?t.push(n=new Ie(this.O(Oe()),this.O(Oe()),this,this.options)):n=t[o],n._$AI(i),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(e,t=this,n,o){const i=this.strings;let a=!1;if(i===void 0)e=ve(this,e,t,0),a=!Se(e)||e!==this._$AH&&e!==ge,a&&(this._$AH=e);else{const s=e;let l,h;for(e=i[0],l=0;l<i.length-1;l++)h=ve(this,s[n+l],t,l),h===ge&&(h=this._$AH[l]),a||(a=!Se(h)||h!==this._$AH[l]),h===$?e=$:e!==$&&(e+=(h??"")+i[l+1]),this._$AH[l]=h}a&&!o&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Qr extends et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}class Jr extends et{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==$)}}class Zr extends et{constructor(e,t,n,o,i){super(e,t,n,o,i),this.type=5}_$AI(e,t=this){if((e=ve(this,e,t,0)??$)===ge)return;const n=this._$AH,o=e===$&&n!==$||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==$&&(n===$||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class eo{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ve(this,e)}}const st=Ae.litHtmlPolyfillSupport;st==null||st(Ce,Ie),(Ae.litHtmlVersions??(Ae.litHtmlVersions=[])).push("3.3.0");const to=(r,e,t)=>{const n=(t==null?void 0:t.renderBefore)??e;let o=n._$litPart$;if(o===void 0){const i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new Ie(e.insertBefore(Oe(),i),i,void 0,t??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=globalThis;class w extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=to(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ge}}var er;w._$litElement$=!0,w.finalized=!0,(er=ie.litElementHydrateSupport)==null||er.call(ie,{LitElement:w});const lt=ie.litElementPolyfillSupport;lt==null||lt({LitElement:w});(ie.litElementVersions??(ie.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ro={attribute:!0,type:String,converter:We,reflect:!1,hasChanged:wt},oo=(r=ro,e,t)=>{const{kind:n,metadata:o}=t;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),i.set(t.name,r),n==="accessor"){const{name:a}=t;return{set(s){const l=e.get.call(this);e.set.call(this,s),this.requestUpdate(a,l,r)},init(s){return s!==void 0&&this.C(a,void 0,r,s),s}}}if(n==="setter"){const{name:a}=t;return function(s){const l=this[a];e.call(this,s),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+n)};function v(r){return(e,t)=>typeof t=="object"?oo(r,e,t):((n,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,n),a?Object.getOwnPropertyDescriptor(o,i):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xt(r){return v({...r,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ar=(r,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(r,e,t),t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pt(r,e){return(t,n,o)=>{const i=a=>{var s;return((s=a.renderRoot)==null?void 0:s.querySelector(r))??null};return ar(t,n,{get(){return i(this)}})}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function no(r){return(e,t)=>{const{slot:n,selector:o}=r??{},i="slot"+(n?`[name=${n}]`:":not([name])");return ar(e,t,{get(){var l;const a=(l=this.renderRoot)==null?void 0:l.querySelector(i),s=(a==null?void 0:a.assignedElements(r))??[];return o===void 0?s:s.filter(h=>h.matches(o))}})}}function io(r){for(var e=[],t=0;t<r.length;){var n=r[t];if(n==="*"||n==="+"||n==="?"){e.push({type:"MODIFIER",index:t,value:r[t++]});continue}if(n==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:r[t++]});continue}if(n==="{"){e.push({type:"OPEN",index:t,value:r[t++]});continue}if(n==="}"){e.push({type:"CLOSE",index:t,value:r[t++]});continue}if(n===":"){for(var o="",i=t+1;i<r.length;){var a=r.charCodeAt(i);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){o+=r[i++];continue}break}if(!o)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:o}),t=i;continue}if(n==="("){var s=1,l="",i=t+1;if(r[i]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(i));for(;i<r.length;){if(r[i]==="\\"){l+=r[i++]+r[i++];continue}if(r[i]===")"){if(s--,s===0){i++;break}}else if(r[i]==="("&&(s++,r[i+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(i));l+=r[i++]}if(s)throw new TypeError("Unbalanced pattern at ".concat(t));if(!l)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:l}),t=i;continue}e.push({type:"CHAR",index:t,value:r[t++]})}return e.push({type:"END",index:t,value:""}),e}function At(r,e){e===void 0&&(e={});for(var t=io(r),n=e.prefixes,o=n===void 0?"./":n,i=e.delimiter,a=i===void 0?"/#?":i,s=[],l=0,h=0,d="",c=function(T){if(h<t.length&&t[h].type===T)return t[h++].value},p=function(T){var A=c(T);if(A!==void 0)return A;var U=t[h],ot=U.type,Tr=U.index;throw new TypeError("Unexpected ".concat(ot," at ").concat(Tr,", expected ").concat(T))},f=function(){for(var T="",A;A=c("CHAR")||c("ESCAPED_CHAR");)T+=A;return T},b=function(T){for(var A=0,U=a;A<U.length;A++){var ot=U[A];if(T.indexOf(ot)>-1)return!0}return!1},E=function(T){var A=s[s.length-1],U=T||(A&&typeof A=="string"?A:"");if(A&&!U)throw new TypeError('Must have text between two parameters, missing text after "'.concat(A.name,'"'));return!U||b(U)?"[^".concat(W(a),"]+?"):"(?:(?!".concat(W(U),")[^").concat(W(a),"])+?")};h<t.length;){var x=c("CHAR"),P=c("NAME"),ue=c("PATTERN");if(P||ue){var k=x||"";o.indexOf(k)===-1&&(d+=k,k=""),d&&(s.push(d),d=""),s.push({name:P||l++,prefix:k,suffix:"",pattern:ue||E(k),modifier:c("MODIFIER")||""});continue}var _=x||c("ESCAPED_CHAR");if(_){d+=_;continue}d&&(s.push(d),d="");var J=c("OPEN");if(J){var k=f(),F=c("NAME")||"",we=c("PATTERN")||"",pe=f();p("CLOSE"),s.push({name:F||(we?l++:""),pattern:F&&!we?E(k):we,prefix:k,suffix:pe,modifier:c("MODIFIER")||""});continue}p("END")}return s}function sr(r,e){return lr(At(r,e),e)}function lr(r,e){e===void 0&&(e={});var t=Rt(e),n=e.encode,o=n===void 0?function(l){return l}:n,i=e.validate,a=i===void 0?!0:i,s=r.map(function(l){if(typeof l=="object")return new RegExp("^(?:".concat(l.pattern,")$"),t)});return function(l){for(var h="",d=0;d<r.length;d++){var c=r[d];if(typeof c=="string"){h+=c;continue}var p=l?l[c.name]:void 0,f=c.modifier==="?"||c.modifier==="*",b=c.modifier==="*"||c.modifier==="+";if(Array.isArray(p)){if(!b)throw new TypeError('Expected "'.concat(c.name,'" to not repeat, but got an array'));if(p.length===0){if(f)continue;throw new TypeError('Expected "'.concat(c.name,'" to not be empty'))}for(var E=0;E<p.length;E++){var x=o(p[E],c);if(a&&!s[d].test(x))throw new TypeError('Expected all "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(x,'"'));h+=c.prefix+x+c.suffix}continue}if(typeof p=="string"||typeof p=="number"){var x=o(String(p),c);if(a&&!s[d].test(x))throw new TypeError('Expected "'.concat(c.name,'" to match "').concat(c.pattern,'", but got "').concat(x,'"'));h+=c.prefix+x+c.suffix;continue}if(!f){var P=b?"an array":"a string";throw new TypeError('Expected "'.concat(c.name,'" to be ').concat(P))}}return h}}function W(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Rt(r){return r&&r.sensitive?"":"i"}function ao(r,e){if(!e)return r;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,n=0,o=t.exec(r.source);o;)e.push({name:o[1]||n++,prefix:"",suffix:"",modifier:"",pattern:""}),o=t.exec(r.source);return r}function so(r,e,t){var n=r.map(function(o){return cr(o,e,t).source});return new RegExp("(?:".concat(n.join("|"),")"),Rt(t))}function lo(r,e,t){return co(At(r,t),e,t)}function co(r,e,t){t===void 0&&(t={});for(var n=t.strict,o=n===void 0?!1:n,i=t.start,a=i===void 0?!0:i,s=t.end,l=s===void 0?!0:s,h=t.encode,d=h===void 0?function(A){return A}:h,c=t.delimiter,p=c===void 0?"/#?":c,f=t.endsWith,b=f===void 0?"":f,E="[".concat(W(b),"]|$"),x="[".concat(W(p),"]"),P=a?"^":"",ue=0,k=r;ue<k.length;ue++){var _=k[ue];if(typeof _=="string")P+=W(d(_));else{var J=W(d(_.prefix)),F=W(d(_.suffix));if(_.pattern)if(e&&e.push(_),J||F)if(_.modifier==="+"||_.modifier==="*"){var we=_.modifier==="*"?"?":"";P+="(?:".concat(J,"((?:").concat(_.pattern,")(?:").concat(F).concat(J,"(?:").concat(_.pattern,"))*)").concat(F,")").concat(we)}else P+="(?:".concat(J,"(").concat(_.pattern,")").concat(F,")").concat(_.modifier);else{if(_.modifier==="+"||_.modifier==="*")throw new TypeError('Can not repeat "'.concat(_.name,'" without a prefix and suffix'));P+="(".concat(_.pattern,")").concat(_.modifier)}else P+="(?:".concat(J).concat(F,")").concat(_.modifier)}}if(l)o||(P+="".concat(x,"?")),P+=t.endsWith?"(?=".concat(E,")"):"$";else{var pe=r[r.length-1],T=typeof pe=="string"?x.indexOf(pe[pe.length-1])>-1:pe===void 0;o||(P+="(?:".concat(x,"(?=").concat(E,"))?")),T||(P+="(?=".concat(x,"|").concat(E,")"))}return new RegExp(P,Rt(t))}function cr(r,e,t){return r instanceof RegExp?ao(r,e):Array.isArray(r)?so(r,e,t):lo(r,e,t)}function ee(r){return typeof r=="object"&&!!r}function Le(r){return typeof r=="function"}function z(r){return typeof r=="string"}function Ye(r=[]){return Array.isArray(r)?r:[r]}function K(r){return`[Vaadin.Router] ${r}`}class dr extends Error{constructor(t){super(K(`Page not found (${t.pathname})`));D(this,"code");D(this,"context");this.context=t,this.code=404}}const ae=Symbol("NotFoundResult");function hr(r){return new dr(r)}function ur(r){return(Array.isArray(r)?r[0]:r)??""}function Ke(r){return ur(r==null?void 0:r.path)}function ho(r){return Array.isArray(r)&&r.length>0?r:void 0}const ct=new Map;ct.set("|false",{keys:[],pattern:/(?:)/u});function Ht(r){try{return decodeURIComponent(r)}catch{return r}}function uo(r,e,t=!1,n=[],o){const i=`${r}|${String(t)}`,a=ur(e);let s=ct.get(i);if(!s){const d=[];s={keys:d,pattern:cr(r,d,{end:t,strict:r===""})},ct.set(i,s)}const l=s.pattern.exec(a);if(!l)return null;const h={...o};for(let d=1;d<l.length;d++){const c=s.keys[d-1],p=c.name,f=l[d];(f!==void 0||!Object.hasOwn(h,p))&&(c.modifier==="+"||c.modifier==="*"?h[p]=f?f.split(/[/?#]/u).map(Ht):[]:h[p]=f&&Ht(f))}return{keys:[...n,...s.keys],params:h,path:l[0]}}var po=uo;function pr(r,e,t,n,o){let i,a,s=0,l=Ke(r);return l.startsWith("/")&&(t&&(l=l.substring(1)),t=!0),{next(h){if(r===h)return{done:!0,value:void 0};r.__children??(r.__children=ho(r.children));const d=r.__children??[],c=!r.__children&&!r.children;if(!i&&(i=po(l,e,c,n,o),i))return{value:{keys:i.keys,params:i.params,path:i.path,route:r}};if(i&&d.length>0)for(;s<d.length;){if(!a){const f=d[s];f.parent=r;let b=i.path.length;b>0&&e.charAt(b)==="/"&&(b+=1),a=pr(f,e.substring(b),t,i.keys,i.params)}const p=a.next(h);if(!p.done)return{done:!1,value:p.value};a=null,s+=1}return{done:!0,value:void 0}}}}var mo=pr;function fo(r){if(Le(r.route.action))return r.route.action(r)}function go(r,e){let t=r;for(;t;)if(t=t.parent,t===e)return!0;return!1}function vo(r){return!!r&&typeof r=="object"&&"next"in r&&"params"in r&&"result"in r&&"route"in r}class bo extends Error{constructor(t,n){let o=`Path '${t.pathname}' is not properly resolved due to an error.`;const i=Ke(t.route);i&&(o+=` Resolution had failed on route: '${i}'`);super(o,n);D(this,"code");D(this,"context");this.code=n==null?void 0:n.code,this.context=t}warn(){console.warn(this.message)}}function yo(r,e){var o;const{path:t,route:n}=e;if(n&&!n.__synthetic){const i={path:t,route:n};if(n.parent&&r.chain)for(let a=r.chain.length-1;a>=0&&r.chain[a].route!==n.parent;a--)r.chain.pop();(o=r.chain)==null||o.push(i)}}var re,L;class mr{constructor(e,{baseUrl:t="",context:n,errorHandler:o,resolveRoute:i=fo}={}){D(this,"baseUrl");M(this,re);D(this,"errorHandler");D(this,"resolveRoute");M(this,L);if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=o,this.resolveRoute=i,Array.isArray(e)?S(this,L,{__children:e,__synthetic:!0,action:()=>{},path:""}):S(this,L,{...e,parent:void 0}),S(this,re,{...n,hash:"",async next(){return ae},params:{},pathname:"",resolver:this,route:g(this,L),search:"",chain:[]})}get root(){return g(this,L)}get context(){return g(this,re)}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...g(this,L).__children??[]]}removeRoutes(){g(this,L).__children=[]}async resolve(e){const t=this,n={...g(this,re),...z(e)?{pathname:e}:e,next:h},o=mo(g(this,L),this.__normalizePathname(n.pathname)??n.pathname,!!this.baseUrl),i=this.resolveRoute;let a=null,s=null,l=n;async function h(d=!1,c=(f=>(f=a==null?void 0:a.value)==null?void 0:f.route)(),p){var x,P;const b=p===null?(x=a==null?void 0:a.value)==null?void 0:x.route:void 0;if(a=s??o.next(b),s=null,!d&&(a.done||!go(a.value.route,c)))return s=a,ae;if(a.done)throw hr(n);l={...n,params:a.value.params,route:a.value.route,chain:(P=l.chain)==null?void 0:P.slice()},yo(l,a.value);const E=await i(l);return E!=null&&E!==ae?(l.result=vo(E)?E.result:E,S(t,re,l),l):await h(d,c,E)}try{return await h(!0,g(this,L))}catch(d){const c=d instanceof dr?d:new bo(l,{code:500,cause:d});if(this.errorHandler)return l.result=this.errorHandler(c),l;throw d}}setRoutes(e){g(this,L).__children=[...Ye(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=e.startsWith("/")?new URL(t).origin+e:`./${e}`,o=new URL(n,t).href;if(o.startsWith(t))return o.slice(t.length)}addRoutes(e){return g(this,L).__children=[...g(this,L).__children??[],...Ye(e)],this.getRoutes()}}re=new WeakMap,L=new WeakMap;function fr(r,e,t,n){var i;const o=e.name??(n==null?void 0:n(e));if(o&&(r.has(o)?(i=r.get(o))==null||i.push(e):r.set(o,[e])),Array.isArray(t))for(const a of t)a.parent=e,fr(r,a,a.__children??a.children,n)}function qt(r,e){const t=r.get(e);if(t){if(t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t[0]}}function _o(r,e={}){if(!(r instanceof mr))throw new TypeError("An instance of Resolver is expected");const t=new Map,n=new Map;return(o,i)=>{let a=qt(n,o);if(!a&&(n.clear(),fr(n,r.root,r.root.__children,e.cacheKeyProvider),a=qt(n,o),!a))throw new Error(`Route "${o}" not found`);let s=a.fullPath?t.get(a.fullPath):void 0;if(!s){let d=Ke(a),c=a.parent;for(;c;){const b=Ke(c);b&&(d=`${b.replace(/\/$/u,"")}/${d.replace(/^\//u,"")}`),c=c.parent}const p=At(d),f=Object.create(null);for(const b of p)z(b)||(f[b.name]=!0);s={keys:f,tokens:p},t.set(d,s),a.fullPath=d}let h=lr(s.tokens,{encode:encodeURIComponent,...e})(i)||"/";if(e.stringifyQueryParams&&i){const d={};for(const[p,f]of Object.entries(i))!(p in s.keys)&&f&&(d[p]=f);const c=e.stringifyQueryParams(d);c&&(h+=c.startsWith("?")?c:`?${c}`)}return h}}var $o=_o;const wo=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,He=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Eo(){function r(){return!0}return gr(r)}function xo(){try{return Po()?!0:Ao()?He?!Ro():!Eo():!1}catch{return!1}}function Po(){return localStorage.getItem("vaadin.developmentmode.force")}function Ao(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Ro(){return!!(He&&Object.keys(He).map(e=>He[e]).filter(e=>e.productionMode).length>0)}function gr(r,e){if(typeof r!="function")return;const t=wo.exec(r.toString());if(t)try{r=new Function(t[1])}catch(n){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",n)}return r(e)}window.Vaadin=window.Vaadin||{};const Ft=function(r,e){if(window.Vaadin.developmentMode)return gr(r,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=xo());function Oo(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const So=function(){if(typeof Ft=="function")return Ft(Oo)};function Co(r,e=window.Vaadin??(window.Vaadin={})){e.registrations??(e.registrations=[]),e.registrations.push({is:"@vaadin/router",version:"2.0.0"})}Co();So();const Lo=r=>{const e=getComputedStyle(r).getPropertyValue("animation-name");return e&&e!=="none"},To=(r,e)=>{const t=()=>{r.removeEventListener("animationend",t),e()};r.addEventListener("animationend",t)};async function Mo(r,e){return r.classList.add(e),await new Promise(t=>{if(Lo(r)){const n=r.getBoundingClientRect(),o=`height: ${n.bottom-n.top}px; width: ${n.right-n.left}px`;r.setAttribute("style",`position: absolute; ${o}`),To(r,()=>{r.classList.remove(e),r.removeAttribute("style"),t()})}else r.classList.remove(e),t()})}var Vt=Mo;function vr(r){if(!r||!z(r.path))throw new Error(K('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!Le(r.action)&&!Array.isArray(r.children)&&!Le(r.children)&&!z(r.component)&&!z(r.redirect))throw new Error(K(`Expected route config "${r.path}" to include either "component, redirect" or "action" function but none found.`));r.redirect&&["bundle","component"].forEach(e=>{e in r&&console.warn(K(`Route config "${String(r.path)}" has both "redirect" and "${e}" properties, and "redirect" will always override the latter. Did you mean to only use "${e}"?`))})}function Bt(r){Ye(r).forEach(e=>vr(e))}function ko({next:r,...e}){return e}function qe(r,e){const t=e.__effectiveBaseUrl;return t?new URL(r.replace(/^\//u,""),t).pathname:r}function br(r){return r.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function Do(r){return br(r.map(e=>e.route))}function I({chain:r=[],hash:e="",params:t={},pathname:n="",redirectFrom:o,resolver:i,search:a=""},s){const l=r.map(h=>h.route);return{baseUrl:(i==null?void 0:i.baseUrl)??"",getUrl:(h={})=>i?qe(sr(Do(r))({...t,...h}),i):"",hash:e,params:t,pathname:n,redirectFrom:o,route:s??(Array.isArray(l)?l.at(-1):void 0)??null,routes:l,search:a,searchParams:new URLSearchParams(a)}}function Wt(r,e){const t={...r.params};return{redirect:{from:r.pathname,params:t,pathname:e}}}function Io(r,e){if(e.location=I(r),r.chain){const t=r.chain.map(n=>n.route).indexOf(r.route);r.chain[t].element=e}return e}function Fe(r,e,...t){if(typeof r=="function")return r.apply(e,t)}function Gt(r,e,...t){return n=>n&&ee(n)&&("cancel"in n||"redirect"in n)?n:Fe(e==null?void 0:e[r],e,...t)}function jo(r,e){if(!Array.isArray(r)&&!ee(r))throw new Error(K(`Incorrect "children" value for the route ${String(e.path)}: expected array or object, but got ${String(r)}`));const t=Ye(r);t.forEach(n=>vr(n)),e.__children=t}function Re(r,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${r}`,{cancelable:r==="go",detail:e}))}function Uo(r){if(typeof r!="object")return String(r);const[e="Unknown"]=/ (.*)\]$/u.exec(String(r))??[];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(r)}`:e}function No(r){const{port:e,protocol:t}=r,i=t==="http:"&&e==="80"||t==="https:"&&e==="443"?r.hostname:r.host;return`${t}//${i}`}function Yt(r){if(r instanceof Element)return r.nodeName.toLowerCase()}function Kt(r){if(r.defaultPrevented||r.button!==0||r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)return;let e=r.target;const t=r instanceof MouseEvent?r.composedPath():r.path??[];for(let l=0;l<t.length;l++){const h=t[l];if("nodeName"in h&&h.nodeName.toLowerCase()==="a"){e=h;break}}for(;e&&e instanceof Node&&Yt(e)!=="a";)e=e.parentNode;if(!e||Yt(e)!=="a")return;const n=e;if(n.target&&n.target.toLowerCase()!=="_self"||n.hasAttribute("download")||n.hasAttribute("router-ignore")||n.pathname===window.location.pathname&&n.hash!==""||(n.origin||No(n))!==window.location.origin)return;const{hash:i,pathname:a,search:s}=n;Re("go",{hash:i,pathname:a,search:s})&&r instanceof MouseEvent&&(r.preventDefault(),r.type==="click"&&window.scrollTo(0,0))}const zo={activate(){window.document.addEventListener("click",Kt)},inactivate(){window.document.removeEventListener("click",Kt)}};var Ho=zo;function Xt(r){if(r.state==="vaadin-router-ignore")return;const{hash:e,pathname:t,search:n}=window.location;Re("go",{hash:e,pathname:t,search:n})}const qo={activate(){window.addEventListener("popstate",Xt)},inactivate(){window.removeEventListener("popstate",Xt)}};var Fo=qo;let Qt=[];const Vo={CLICK:Ho,POPSTATE:Fo};function Jt(r=[]){Qt.forEach(e=>e.inactivate()),r.forEach(e=>e.activate()),Qt=r}const Bo=256;function xe(){return{cancel:!0}}const Zt={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",async next(){return ae}};var ke,fe,De,oe,G,ne,N,j,u,yr,_r,Ve,dt,$r,wr,ht,ut,pt,V,mt,ft,Be,gt,Er,xr,Pr,Ar,Rr,Or,vt;class Wo extends mr{constructor(t,n){const o=document.head.querySelector("base"),i=o==null?void 0:o.getAttribute("href");super([],{baseUrl:i?new URL(i,document.URL).href.replace(/[^/]*$/u,""):void 0,...n,resolveRoute:async a=>await m(this,u,yr).call(this,a)});M(this,u);D(this,"location",I({resolver:this}));D(this,"ready",Promise.resolve(this.location));M(this,ke,new WeakSet);M(this,fe,new WeakSet);M(this,De,m(this,u,vt).bind(this));M(this,oe,0);M(this,G);D(this,"__previousContext");M(this,ne);M(this,N,null);M(this,j,null);Jt(Object.values(Vo)),this.setOutlet(t),this.subscribe()}setOutlet(t){t&&m(this,u,ft).call(this,t),S(this,G,t)}getOutlet(){return g(this,G)}async setRoutes(t,n=!1){return this.__previousContext=void 0,S(this,ne,void 0),Bt(t),super.setRoutes(t),n||m(this,u,vt).call(this),await this.ready}addRoutes(t){return Bt(t),super.addRoutes(t)}async render(t,n=!1){S(this,oe,g(this,oe)+1);const o=g(this,oe),i={...Zt,...z(t)?{hash:"",search:"",pathname:t}:t,__renderId:o};return this.ready=m(this,u,_r).call(this,i,n),await this.ready}subscribe(){window.addEventListener("vaadin-router-go",g(this,De))}unsubscribe(){window.removeEventListener("vaadin-router-go",g(this,De))}static setTriggers(...t){Jt(t)}urlForName(t,n){return g(this,ne)||S(this,ne,$o(this,{cacheKeyProvider(o){return"component"in o&&typeof o.component=="string"?o.component:void 0}})),qe(g(this,ne).call(this,t,n??void 0),this)}urlForPath(t,n){return qe(sr(t)(n??void 0),this)}static go(t){const{pathname:n,search:o,hash:i}=z(t)?new URL(t,"http://a"):t;return Re("go",{pathname:n,search:o,hash:i})}}ke=new WeakMap,fe=new WeakMap,De=new WeakMap,oe=new WeakMap,G=new WeakMap,ne=new WeakMap,N=new WeakMap,j=new WeakMap,u=new WeakSet,yr=async function(t){const{route:n}=t;if(Le(n.children)){let i=await n.children(ko(t));Le(n.children)||({children:i}=n),jo(i,n)}const o={component:i=>{const a=document.createElement(i);return g(this,fe).add(a),a},prevent:xe,redirect:i=>Wt(t,i)};return await Promise.resolve().then(async()=>{if(m(this,u,V).call(this,t))return await Fe(n.action,n,t,o)}).then(i=>{if(i!=null&&(typeof i=="object"||typeof i=="symbol")&&(i instanceof HTMLElement||i===ae||ee(i)&&"redirect"in i))return i;if(z(n.redirect))return o.redirect(n.redirect)}).then(i=>{if(i!=null)return i;if(z(n.component))return o.component(n.component)})},_r=async function(t,n){var i;const{__renderId:o}=t;try{const a=await this.resolve(t),s=await m(this,u,Ve).call(this,a);if(!m(this,u,V).call(this,s))return this.location;const l=this.__previousContext;if(s===l)return m(this,u,Be).call(this,l,!0),this.location;if(this.location=I(s),n&&m(this,u,Be).call(this,s,o===1),Re("location-changed",{router:this,location:this.location}),s.__skipAttach)return m(this,u,gt).call(this,s,l),this.__previousContext=s,this.location;m(this,u,Er).call(this,s,l);const h=m(this,u,Or).call(this,s);if(m(this,u,Rr).call(this,s),m(this,u,Ar).call(this,s,l),await h,m(this,u,V).call(this,s))return m(this,u,xr).call(this),this.__previousContext=s,this.location}catch(a){if(o===g(this,oe)){n&&m(this,u,Be).call(this,this.context);for(const s of((i=g(this,G))==null?void 0:i.children)??[])s.remove();throw this.location=I(Object.assign(t,{resolver:this})),Re("error",{router:this,error:a,...t}),a}}return this.location},Ve=async function(t,n=t){const o=await m(this,u,dt).call(this,n),a=o!==n?o:t,l=qe(br(o.chain??[]),this)===o.pathname,h=async(c,p=c.route,f)=>{const b=await c.next(!1,p,f);return b===null||b===ae?l?c:p.parent!=null?await h(c,p.parent,b):b:b},d=await h(o);if(d==null||d===ae)throw hr(a);return d!==o?await m(this,u,Ve).call(this,a,d):await m(this,u,$r).call(this,o)},dt=async function(t){const{result:n}=t;if(n instanceof HTMLElement)return Io(t,n),t;if(n&&"redirect"in n){const o=await m(this,u,mt).call(this,n.redirect,t.__redirectCount,t.__renderId);return await m(this,u,dt).call(this,o)}throw n instanceof Error?n:new Error(K(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Uo(n)}". Double check the action return value for the route.`))},$r=async function(t){return await m(this,u,wr).call(this,t).then(async n=>n===this.__previousContext||n===t?n:await m(this,u,Ve).call(this,n))},wr=async function(t){const n=this.__previousContext??{},o=n.chain??[],i=t.chain??[];let a=Promise.resolve(void 0);const s=l=>Wt(t,l);if(t.__divergedChainIndex=0,t.__skipAttach=!1,o.length){for(let l=0;l<Math.min(o.length,i.length)&&!(o[l].route!==i[l].route||o[l].path!==i[l].path&&o[l].element!==i[l].element||!m(this,u,pt).call(this,o[l].element,i[l].element));t.__divergedChainIndex++,l++);if(t.__skipAttach=i.length===o.length&&t.__divergedChainIndex===i.length&&m(this,u,pt).call(this,t.result,n.result),t.__skipAttach){for(let l=i.length-1;l>=0;l--)a=m(this,u,ht).call(this,a,t,{prevent:xe},o[l]);for(let l=0;l<i.length;l++)a=m(this,u,ut).call(this,a,t,{prevent:xe,redirect:s},i[l]),o[l].element.location=I(t,o[l].route)}else for(let l=o.length-1;l>=t.__divergedChainIndex;l--)a=m(this,u,ht).call(this,a,t,{prevent:xe},o[l])}if(!t.__skipAttach)for(let l=0;l<i.length;l++)l<t.__divergedChainIndex?l<o.length&&o[l].element&&(o[l].element.location=I(t,o[l].route)):(a=m(this,u,ut).call(this,a,t,{prevent:xe,redirect:s},i[l]),i[l].element&&(i[l].element.location=I(t,i[l].route)));return await a.then(async l=>{if(l&&ee(l)){if("cancel"in l&&this.__previousContext)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if("redirect"in l)return await m(this,u,mt).call(this,l.redirect,t.__redirectCount,t.__renderId)}return t})},ht=async function(t,n,o,i){const a=I(n);let s=await t;if(m(this,u,V).call(this,n)&&(s=Gt("onBeforeLeave",i.element,a,o,this)(s)),!(ee(s)&&"redirect"in s))return s},ut=async function(t,n,o,i){const a=I(n,i.route),s=await t;if(m(this,u,V).call(this,n))return Gt("onBeforeEnter",i.element,a,o,this)(s)},pt=function(t,n){return t instanceof Element&&n instanceof Element?g(this,fe).has(t)&&g(this,fe).has(n)?t.localName===n.localName:t===n:!1},V=function(t){return t.__renderId===g(this,oe)},mt=async function(t,n=0,o=0){if(n>Bo)throw new Error(K(`Too many redirects when rendering ${t.from}`));return await this.resolve({...Zt,pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:n+1,__renderId:o})},ft=function(t=g(this,G)){if(!(t instanceof Element||t instanceof DocumentFragment))throw new TypeError(K(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${t})`))},Be=function({pathname:t,search:n="",hash:o=""},i){if(window.location.pathname!==t||window.location.search!==n||window.location.hash!==o){const a=i?"replaceState":"pushState";window.history[a](null,document.title,t+n+o),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}},gt=function(t,n){var i;let o=g(this,G);for(let a=0;a<(t.__divergedChainIndex??0);a++){const s=(i=n==null?void 0:n.chain)==null?void 0:i[a].element;if(s)if(s.parentNode===o)t.chain[a].element=s,o=s;else break}return o},Er=function(t,n){var a;m(this,u,ft).call(this),m(this,u,Pr).call(this);const o=m(this,u,gt).call(this,t,n);S(this,N,[]),S(this,j,Array.from((o==null?void 0:o.children)??[]).filter(s=>g(this,ke).has(s)&&s!==t.result));let i=o;for(let s=t.__divergedChainIndex??0;s<(((a=t.chain)==null?void 0:a.length)??0);s++){const l=t.chain[s].element;l&&(i==null||i.appendChild(l),g(this,ke).add(l),i===o&&g(this,N).push(l),i=l)}},xr=function(){if(g(this,j))for(const t of g(this,j))t.remove();S(this,j,null),S(this,N,null)},Pr=function(){if(g(this,j)&&g(this,N)){for(const t of g(this,N))t.remove();S(this,j,null),S(this,N,null)}},Ar=function(t,n){var o;if(!(!(n!=null&&n.chain)||t.__divergedChainIndex==null))for(let i=n.chain.length-1;i>=t.__divergedChainIndex&&m(this,u,V).call(this,t);i--){const a=n.chain[i].element;if(a)try{const s=I(t);Fe(a.onAfterLeave,a,s,{},this)}finally{if((o=g(this,j))!=null&&o.includes(a))for(const s of a.children)s.remove()}}},Rr=function(t){if(!(!t.chain||t.__divergedChainIndex==null))for(let n=t.__divergedChainIndex;n<t.chain.length&&m(this,u,V).call(this,t);n++){const o=t.chain[n].element;if(o){const i=I(t,t.chain[n].route);Fe(o.onAfterEnter,o,i,{},this)}}},Or=async function(t){var l,h;const n=(l=g(this,j))==null?void 0:l[0],o=(h=g(this,N))==null?void 0:h[0],i=[],{chain:a=[]}=t;let s;for(let d=a.length-1;d>=0;d--)if(a[d].route.animate){s=a[d].route.animate;break}if(n&&o&&s){const d=ee(s)&&s.leave?s.leave:"leaving",c=ee(s)&&s.enter?s.enter:"entering";i.push(Vt(n,d)),i.push(Vt(o,c))}return await Promise.all(i),t},vt=function(t){const{pathname:n,search:o,hash:i}=t instanceof CustomEvent?t.detail:window.location;z(this.__normalizePathname(n))&&(t!=null&&t.preventDefault&&t.preventDefault(),this.render({pathname:n,search:o,hash:i},!0))};var Go=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,je=(r,e,t,n)=>{for(var o=n>1?void 0:n?Yo(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&Go(e,t,o),o};let le=class extends w{constructor(){super(...arguments),this.siteTitle="",this._isMenuOpen=!1,this._handleMenuItemClick=r=>{const e=r.composedPath();if(this._isMenuOpen){for(const t of e)if(t instanceof HTMLElement&&(t.tagName==="A"||t.tagName==="LMC-NAV-LINK"||t.tagName==="BUTTON")&&t!==this.menuButton){window.matchMedia("(max-width: 900px)").matches&&this._closeMenu();break}}}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this._handleMenuItemClick)}disconnectedCallback(){this.removeEventListener("click",this._handleMenuItemClick),super.disconnectedCallback()}_toggleMenu(){this._isMenuOpen=!this._isMenuOpen,this.requestUpdate()}_closeMenu(){this._isMenuOpen&&(this._isMenuOpen=!1,this.requestUpdate())}render(){return y`
            <nav class="navbar-container" aria-label="Main navigation">
                <div class="left-section">
                    <div class="brand-slot">
                        <slot name="brand">
                            ${this.siteTitle?y`<span class="site-title">${this.siteTitle}</span>`:""}
                        </slot>
                    </div>
                    <button id="menu-button" class="menu-button" @click=${this._toggleMenu} aria-expanded="${this._isMenuOpen}">
                        Menu
                    </button>
                </div>
                
                <div id="menu-content" class="default-slot ${this._isMenuOpen?"open":""}">
                    <slot></slot>
                </div>
                
                <div class="right-section">
                    <div class="actions-slot">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </nav>
        `}};le.styles=R`
        :host {
            display: block;
            background-color: var(--lmc-navbar-background, var(--lmc-global-color-background, #fff));
            color: var(--lmc-navbar-color, var(--lmc-global-color-text-default, #212529));
            box-shadow: var(--lmc-navbar-box-shadow, var(--lmc-global-box-shadow-sm));
            transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
            position: relative;
        }

        .navbar-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--lmc-navbar-padding, 0 var(--lmc-global-spacing-md, 1rem));
            height: var(--lmc-navbar-height, 60px);
            max-width: 100%;
            margin: 0 auto;
        }

        .left-section, .right-section {
            display: flex;
            align-items: center;
        }

        .left-section {
            gap: var(--lmc-navbar-brand-gap, var(--lmc-global-spacing-md, 1rem));
        }

        .brand-slot ::slotted(*) {
            display: flex;
            align-items: center;
        }
        
        .brand-slot ::slotted(img) {
            max-height: calc(var(--lmc-navbar-height, 60px) * 0.6);
            width: auto;
            object-fit: contain;
        }

        .default-slot {
            display: flex;
            align-items: center;
            gap: var(--lmc-navbar-link-gap, var(--lmc-global-spacing-md, 1rem));
        }
        
        .default-slot ::slotted(lmc-nav-link) {
            color: inherit;
            white-space: nowrap;
        }
        
        .default-slot ::slotted(lmc-nav-link[active]) {
            font-weight: bold;
            color: var(--lmc-global-color-primary); /* Hereda color primario global */
        }

        /* Estilos para el título del sitio */
        .site-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin: 0;
            white-space: nowrap;
        }
        
        .menu-button {
            display: none; /* Oculta el botón de menú en pantallas grandes */
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font-size: 1.2rem;
            padding: 0.5rem;
        }

        .actions-slot {
            display: flex;
            align-items: center;
            gap: var(--lmc-navbar-action-gap, var(--lmc-global-spacing-sm, 0.5rem));
        }

        /* Estilos específicos para móvil */
        @media (max-width: 900px) {
            .menu-button {
                display: block;
            }
            
            .default-slot {
                display: none;
                flex-direction: column;
                position: absolute;
                top: var(--lmc-navbar-height, 60px);
                left: 0;
                width: 100%;
                background-color: var(--lmc-navbar-background, var(--lmc-global-color-background, #fff));
                box-shadow: var(--lmc-global-box-shadow-sm);
                z-index: 10;
                align-items: start;
                padding: 0.5rem 1rem;
            }
            
            .default-slot.open {
                display: flex;
            }
            
            .default-slot ::slotted(*) {
                margin: 0.5rem 0;
                width: 100%;
            }
        }
    `;je([v({type:String,attribute:"site-title"})],le.prototype,"siteTitle",2);je([xt()],le.prototype,"_isMenuOpen",2);je([Pt("#menu-button")],le.prototype,"menuButton",2);je([Pt("#menu-content")],le.prototype,"menuContent",2);le=je([O("lmc-navbar")],le);var Ko=Object.getOwnPropertyDescriptor,Xo=(r,e,t,n)=>{for(var o=n>1?void 0:n?Ko(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=a(o)||o);return o};let bt=class extends w{render(){return y`
      <footer role="contentinfo" part="footer">
        <div class="footer-content" part="content">
          <slot>
            <!-- Contenido por defecto si no se proporciona slot -->
            <p>© ${new Date().getFullYear()} LegoMyCode Project. Hecho con Legos!</p>
          </slot>
        </div>
      </footer>
    `}};bt.styles=R`
    :host {
      display: block; /* Ocupa el ancho disponible */
      margin-top: auto; /* Empuja hacia abajo en layouts flex */
      box-sizing: border-box;
      /* Estilos aplicados al HOST (full-width) */
      background-color: var(--lmc-footer-background, var(--lmc-global-color-background-secondary, #f8f9fa));
      border-top: var(--lmc-footer-border-top, 1px solid var(--lmc-global-color-border, #dee2e6));
      /* Padding vertical aplicado al host */
      padding-top: var(--lmc-footer-padding-vertical, var(--lmc-global-spacing-lg, 2rem));
      padding-bottom: var(--lmc-footer-padding-vertical, var(--lmc-global-spacing-lg, 2rem));
      /* El color base del texto se define aquí para que lo herede el contenido */
      color: var(--lmc-footer-color, var(--lmc-global-color-text-muted, #6c757d));
      font-size: 0.9em;
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }

    /* Contenedor INTERNO para centrar y limitar el ancho del contenido */
    .footer-content {
      width: 100%; /* Ocupa el ancho del host */
      max-width: var(--lmc-footer-content-max-width, var(--lmc-container-max-width, 1200px)); /* Ancho máximo del contenido */
      margin-left: auto;  /* Centrado */
      margin-right: auto; /* Centrado */
      /* Padding horizontal aplicado al contenido interno */
      padding-left: var(--lmc-footer-padding-horizontal, var(--lmc-global-spacing-md, 1rem));
      padding-right: var(--lmc-footer-padding-horizontal, var(--lmc-global-spacing-md, 1rem));
      text-align: var(--lmc-footer-content-text-align, center);
      box-sizing: border-box;
    }

    /* Estilos para contenido y enlaces DENTRO del slot */
    ::slotted(p) {
       margin-top: 0;
       margin-bottom: var(--lmc-global-spacing-xs, 0.25rem);
    }
    ::slotted(a) {
       color: var(--lmc-footer-link-color, var(--lmc-global-color-primary, blue));
       text-decoration: none;
       transition: opacity 0.2s ease;
    }
    ::slotted(a:hover) {
        text-decoration: underline;
        opacity: 0.8;
    }
  `;bt=Xo([O("lmc-footer")],bt);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=r=>r??$;var Qo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,tt=(r,e,t,n)=>{for(var o=n>1?void 0:n?Jo(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&Qo(e,t,o),o};let be=class extends w{constructor(){super(),this.active=!1,this.disabled=!1,this.addEventListener("click",this._handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this._handleClick)}_handleClick(r){this.disabled||this.active?(console.log(`lmc-nav-link: Click prevenido (disabled=${this.disabled}, active=${this.active})`),r.preventDefault(),r.stopPropagation()):console.log(`lmc-nav-link: Navegando a ${this.href}`)}render(){return y`
      <a
        href=${this.href}
        ?disabled=${this.disabled}
        aria-current=${H(this.active?"page":void 0)}
        tabindex=${this.disabled?-1:0}
        part="link"
      >
        <slot part="content"></slot> <!-- El contenido (texto, icono) va aquí -->
      </a>
    `}};be.styles=R`
    :host {
      display: inline-block; /* O inline-flex si se necesita alinear contenido interno */
      box-sizing: border-box;
      /* Aplicamos padding al host para que toda el área sea clickeable (si es necesario) */
      /* padding: var(--lmc-nav-link-padding, 0.5rem 1rem); */
      /* O aplicarlo directamente al <a> si preferimos */
    }

    a {
      display: inline-flex; /* Para alinear contenido interno y que padding funcione bien */
      align-items: center; /* Centra contenido del slot verticalmente */
      padding: var(--lmc-nav-link-padding, 0.5rem 1rem);
      color: var(--lmc-nav-link-text-color, inherit);
      text-decoration: var(--lmc-nav-link-text-decoration, none);
      cursor: pointer;
      transition: color 0.15s ease-out, text-decoration 0.15s ease-out, opacity 0.15s ease-out;
      height: 100%; /* Para que ocupe toda la altura del host si es necesario */
      box-sizing: border-box;
    }

    a:hover {
      color: var(--lmc-nav-link-text-color-hover, var(--lmc-nav-link-text-color, inherit));
      text-decoration: var(--lmc-nav-link-text-decoration-hover, underline);
    }

    /* Estilos cuando el ENLACE está activo */
    :host([active]) a {
      color: var(--lmc-nav-link-text-color-active, var(--lmc-global-color-primary, blue));
      font-weight: var(--lmc-nav-link-font-weight-active, bold);
      cursor: default; /* Opcional: indicar que ya está activo */
      text-decoration: var(--lmc-nav-link-text-decoration, none); /* Evita subrayado hover si está activo */
    }
     /* Quita hover si ya está activo */
    :host([active]) a:hover {
        color: var(--lmc-nav-link-text-color-active, var(--lmc-global-color-primary, blue));
        text-decoration: var(--lmc-nav-link-text-decoration, none);
    }


    /* Estilos cuando el ENLACE está deshabilitado */
    :host([disabled]) a {
      opacity: var(--lmc-nav-link-opacity-disabled, 0.5);
      pointer-events: none; /* Evita que el enlace reciba clics */
      cursor: not-allowed;
      color: var(--lmc-nav-link-text-color, inherit); /* Mantiene color base pero atenuado */
      text-decoration: var(--lmc-nav-link-text-decoration, none); /* Quita cualquier decoración */
    }
     /* Quita hover si está deshabilitado */
    :host([disabled]) a:hover {
        color: var(--lmc-nav-link-text-color, inherit);
        text-decoration: var(--lmc-nav-link-text-decoration, none);
    }
  `;tt([v({type:String})],be.prototype,"href",2);tt([v({type:Boolean,reflect:!0})],be.prototype,"active",2);tt([v({type:Boolean,reflect:!0})],be.prototype,"disabled",2);be=tt([O("lmc-nav-link")],be);var Zo=Object.defineProperty,en=Object.getOwnPropertyDescriptor,he=(r,e,t,n)=>{for(var o=n>1?void 0:n?en(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&Zo(e,t,o),o};let q=class extends w{constructor(){super(...arguments),this.appearance="secondary",this.disabled=!1}render(){var e;const r=this.title||this.label||((e=this.textContent)==null?void 0:e.trim())||void 0;return this.href?y`
        <a
          class="button-base"
          href=${this.href}
          target=${H(this.target)}
          download=${H(this.download)}
          role="button"
          aria-disabled=${this.disabled?"true":"false"}
          aria-label=${H(r)}
          title=${H(this.title)}
          part="button link"
           @click=${t=>{this.disabled&&t.preventDefault()}}
        >
          <slot name="prefix"></slot>
          <slot>${this.label}</slot>
          <slot name="suffix"></slot>
        </a>
      `:y`
        <button
          class="button-base"
          ?disabled=${this.disabled}
          @click=${this._handleClick}
          aria-label=${H(r)}
          title=${H(this.title)}
          part="button"
          type="button"
        >
          <slot name="prefix"></slot>
          <slot>${this.label}</slot>
          <slot name="suffix"></slot>
        </button>
      `}_handleClick(r){this.disabled||this.href||(r.stopPropagation(),this.dispatchEvent(new CustomEvent("lmc-click",{detail:{originalEvent:r},bubbles:!0,composed:!0})))}};q.styles=R`
    :host {
      display: inline-block;
      cursor: default;
      -webkit-user-select: none;
      user-select: none;
    }

    .button-base, a.button-base {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      box-sizing: border-box;
      /* Usa la variable para el grosor del borde */
      border: var(--lmc-button-border-width, 1px) solid transparent;
      padding: var(--lmc-button-padding, var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-md, 1rem));
      border-radius: var(--lmc-button-border-radius, var(--lmc-global-border-radius-md, 4px));
      font-size: var(--lmc-button-font-size, inherit);
      font-weight: var(--lmc-button-font-weight, bold);
      line-height: var(--lmc-button-line-height, 1.5);
      text-decoration: none;
      cursor: pointer;
      transition: var(--lmc-button-transition, all 0.2s ease-in-out);
      gap: var(--lmc-button-gap, var(--lmc-global-spacing-xs, 0.4rem));
      white-space: nowrap;
    }

    /* Estilos Apariencia PRIMARY - CORREGIDO */
    :host([appearance='primary']) .button-base {
      background-color: var(--lmc-button-primary-bg-color, var(--lmc-global-color-primary, blue));
      color: var(--lmc-button-primary-text-color, var(--lmc-global-color-text-on-primary, white));
      border-color: var(--lmc-button-primary-border-color, transparent); /* Usa la var específica, fallback transparente */
    }
    :host([appearance='primary']) .button-base:not([disabled]):hover {
       background-color: var(--lmc-button-primary-hover-bg-color, color-mix(in srgb, var(--lmc-button-primary-bg-color, var(--lmc-global-color-primary, blue)) 85%, black));
       color: var(--lmc-button-primary-hover-text-color, var(--lmc-button-primary-text-color, var(--lmc-global-color-text-on-primary, white)));
    }
     :host([appearance='primary']) .button-base:not([disabled]):active {
       background-color: var(--lmc-button-primary-active-bg-color, color-mix(in srgb, var(--lmc-button-primary-bg-color, var(--lmc-global-color-primary, blue)) 70%, black));
    }

    /* Estilos Apariencia SECONDARY - CORREGIDO */
    :host([appearance='secondary']) .button-base {
      background-color: var(--lmc-button-secondary-bg-color, transparent);
      /* USA LAS VARIABLES ESPECÍFICAS */
      color: var(--lmc-button-secondary-text-color, var(--lmc-global-color-primary, blue));
      border-color: var(--lmc-button-secondary-border-color, var(--lmc-global-color-primary, blue));
    }
    :host([appearance='secondary']) .button-base:not([disabled]):hover {
       /* Usa las variables específicas o calcula basado en ellas */
       background-color: var(--lmc-button-secondary-hover-bg-color, color-mix(in srgb, var(--lmc-button-secondary-text-color, var(--lmc-global-color-primary, blue)) 10%, transparent));
       color: var(--lmc-button-secondary-hover-text-color, var(--lmc-button-secondary-text-color, var(--lmc-global-color-primary, blue)));
       /* Podríamos oscurecer el borde también si quisiéramos */
       /* border-color: var(--lmc-button-secondary-hover-border-color, color-mix(in srgb, var(--lmc-button-secondary-border-color, var(--lmc-global-color-primary, blue)) 85%, black)); */
    }
     :host([appearance='secondary']) .button-base:not([disabled]):active {
       background-color: var(--lmc-button-secondary-active-bg-color, color-mix(in srgb, var(--lmc-button-secondary-text-color, var(--lmc-global-color-primary, blue)) 20%, transparent));
    }


    /* Estilos Apariencia GHOST */
    :host([appearance='ghost']) .button-base {
      background-color: var(--lmc-button-ghost-bg-color, transparent);
      color: var(--lmc-button-ghost-text-color, var(--lmc-global-color-primary, blue));
      border-color: var(--lmc-button-ghost-border-color, transparent);
    }
     :host([appearance='ghost']) .button-base:not([disabled]):hover {
       background-color: var(--lmc-button-ghost-hover-bg-color, color-mix(in srgb, var(--lmc-button-ghost-text-color, var(--lmc-global-color-primary, blue)) 10%, transparent));
       color: var(--lmc-button-ghost-hover-text-color, var(--lmc-button-ghost-text-color, var(--lmc-global-color-primary, blue)));
    }
     :host([appearance='ghost']) .button-base:not([disabled]):active {
       background-color: var(--lmc-button-ghost-active-bg-color, color-mix(in srgb, var(--lmc-button-ghost-text-color, var(--lmc-global-color-primary, blue)) 20%, transparent));
    }


    /* Estilos Deshabilitado */
    .button-base[disabled] {
      opacity: var(--lmc-button-disabled-opacity, 0.6);
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Estilos para los slots */
    ::slotted(*) {
       display: inline-flex;
       align-items: center;
    }
  `;he([v({type:String,reflect:!0})],q.prototype,"appearance",2);he([v({type:String})],q.prototype,"label",2);he([v({type:Boolean,reflect:!0})],q.prototype,"disabled",2);he([v({type:String})],q.prototype,"href",2);he([v({type:String})],q.prototype,"target",2);he([v({type:String})],q.prototype,"download",2);q=he([O("lmc-basic-button")],q);var tn=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,Ue=(r,e,t,n)=>{for(var o=n>1?void 0:n?rn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&tn(e,t,o),o};let ce=class extends w{updated(r){super.updated(r),r.has("size")&&(this.size?this.style.setProperty("--lmc-icon-size",this.size):this.style.removeProperty("--lmc-icon-size")),r.has("color")&&(this.color?this.style.setProperty("--lmc-icon-color",this.color):this.style.removeProperty("--lmc-icon-color"))}render(){if(!this.name)return console.warn('lmc-icon: La propiedad "name" es requerida.'),y`<span style="color: red; font-size: 0.8em;">[X]</span>`;const r=this.label||this.name.replace(/_/g," ");return y`
      <span
        class="material-symbols-outlined"
        aria-label=${r}
        role="img"
        part="icon"
        title=${r} /* Añade tooltip por defecto */
      >
        ${this.name}
      </span>
    `}};ce.styles=R`
    :host {
      display: inline-flex; /* Se comporta mejor que inline-block para centrado */
      align-items: center;
      justify-content: center;
      vertical-align: middle; /* Alinea mejor con texto */
      box-sizing: border-box;
      /* El tamaño ahora lo controla font-size directamente */
      width: var(--lmc-icon-size, 1.2em); /* Ancho consistente */
      height: var(--lmc-icon-size, 1.2em); /* Alto consistente */
      /* Color: Usa currentColor para heredar por defecto */
      color: var(--lmc-icon-color, currentColor);
      line-height: 1; /* Evita afectar la altura de línea del contenedor */
      /* Transición suave si el color cambia */
      transition: color 0.2s ease;
    }

    /* Estilos aplicados al span que contiene el icono */
    .material-symbols-outlined {
      /* Fuente requerida */
      font-family: 'Material Symbols Outlined';
      /* Estilos necesarios para que funcione como icono */
      font-weight: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block; /* o block */
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;

      /* Aplica el tamaño directamente como font-size */
      font-size: var(--lmc-icon-size, 1.2em);
       /* Aplica el color heredado del host */
      color: inherit;

      /* Configuraciones de fuente variable usando las CSS Vars */
      font-variation-settings:
        'FILL' var(--lmc-icon-fill, 0),
        'wght' var(--lmc-icon-weight, 400),
        'GRAD' var(--lmc-icon-grade, 0),
        'opsz' var(--lmc-icon-opsz, 24);
    }
  `;Ue([v({type:String,reflect:!0})],ce.prototype,"name",2);Ue([v({type:String})],ce.prototype,"label",2);Ue([v({type:String})],ce.prototype,"size",2);Ue([v({type:String})],ce.prototype,"color",2);ce=Ue([O("lmc-icon")],ce);var on=Object.defineProperty,nn=Object.getOwnPropertyDescriptor,rt=(r,e,t,n)=>{for(var o=n>1?void 0:n?nn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&on(e,t,o),o};let ye=class extends w{render(){return y`<slot></slot>`}updated(r){super.updated(r),r.has("padding")&&this.padding!==void 0&&this.style.setProperty("--lmc-container-padding",this.padding),r.has("maxWidth")&&this.maxWidth!==void 0&&this.style.setProperty("--lmc-container-max-width",this.maxWidth),r.has("marginInline")&&this.marginInline!==void 0&&this.style.setProperty("--lmc-container-margin-inline",this.marginInline)}};ye.styles=R`
    :host {
      display: block; /* Asegura que ocupa espacio */
      width: 100%; /* Ocupa el ancho disponible por defecto */
      box-sizing: border-box; /* Padding incluido en el ancho/alto */

      /* Aplica los estilos usando las variables CSS públicas como fuente principal */
      /* Los fallbacks usan variables globales o valores sensatos */
      padding: var(--lmc-container-padding, var(--lmc-global-spacing-md, 1rem));
      max-width: var(--lmc-container-max-width, 1200px); /* Default razonable */
      margin-inline: var(--lmc-container-margin-inline, auto); /* Centrado por defecto si max-width aplica */
      background-color: var(--lmc-container-background, transparent);
      border: var(--lmc-container-border, none);
      border-radius: var(--lmc-container-border-radius, 0);
    }

    /* Asegura que si max-width es 'none', realmente ocupe todo el ancho */
    :host([style*="--lmc-container-max-width: none"]) {
        max-width: none;
        /* Si max-width es none, el centrado con margin: auto no tiene efecto, lo cual está bien */
    }

    /* Si se establece max-width explícitamente a 'none' vía atributo, también aplica */
    :host([max-width="none"]) {
       max-width: none;
       /* Podríamos forzar margin-inline a 0 si es necesario, pero 'auto' no hará nada */
       /* margin-inline: 0; */
    }
  `;rt([v({type:String})],ye.prototype,"padding",2);rt([v({type:String,attribute:"max-width"})],ye.prototype,"maxWidth",2);rt([v({type:String,attribute:"margin-inline"})],ye.prototype,"marginInline",2);ye=rt([O("lmc-container")],ye);var an=Object.getOwnPropertyDescriptor,sn=(r,e,t,n)=>{for(var o=n>1?void 0:n?an(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=a(o)||o);return o};let yt=class extends w{render(){return y`
      <div class="grid-container" part="container">
        <slot></slot> <!-- Los ítems de la cuadrícula van aquí -->
      </div>
    `}};yt.styles=R`
    :host {
      display: block; /* Ocupa espacio */
      padding: var(--lmc-grid-padding, 0); /* Padding opcional */
      box-sizing: border-box;
    }

    .grid-container {
      display: grid;
      gap: var(--lmc-grid-gap, 1rem); /* Espacio entre celdas */

      /*
       * La magia del grid responsive:
       * - grid-template-columns: Define las columnas.
       * - repeat(): Crea columnas repetitivas.
       * - auto-fit: Ajusta automáticamente el número de columnas para llenar el espacio disponible.
       * - minmax(): Define un rango de tamaño para las columnas.
       *   - var(--lmc-grid-min-item-width, 250px): El tamaño mínimo que queremos para una columna/ítem.
       *   - 1fr: Permite que las columnas crezcan para ocupar el espacio restante equitativamente.
       */
      grid-template-columns: repeat(auto-fit, minmax(var(--lmc-grid-min-item-width, 250px), 1fr));
      box-sizing: border-box;
    }

     /* Asegura que los elementos sloteados se estiren si es necesario (aunque no siempre deseado) */
     /* ::slotted(*) { width: 100%; } */
     /* Es mejor que los propios componentes sloteados manejen su ancho si es necesario */
  `;yt=sn([O("lmc-grid")],yt);var ln=Object.defineProperty,cn=Object.getOwnPropertyDescriptor,Sr=(r,e,t,n)=>{for(var o=n>1?void 0:n?cn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&ln(e,t,o),o};let Xe=class extends w{constructor(){super(...arguments),this.title=""}render(){return y`
      <h2>${this.title}</h2>
      <slot></slot>
    `}};Xe.styles=R`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 16px;
      margin-bottom: 16px;
    }

    /* Estilos para pantallas pequeñas (móviles) */
    @media (max-width: var(--lmc-breakpoint-small)) {
      :host {
        padding: 8px;
        margin-bottom: 8px;
      }
    }

    /* Estilos para pantallas medianas (tablets) */
    @media (min-width: var(--lmc-breakpoint-medium)) {
      :host {
        padding: 24px;
        margin-bottom: 24px;
      }
    }
  `;Sr([v({type:String})],Xe.prototype,"title",2);Xe=Sr([O("lmc-card")],Xe);var dn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,_e=(r,e,t,n)=>{for(var o=n>1?void 0:n?hn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&dn(e,t,o),o};let X=class extends w{constructor(){super(...arguments),this.src="",this.alt=""}render(){var t,n;if(!this.src)return $;const r=`
      ${this.width?`width: ${this.width};`:""}
      ${this.height?`height: ${this.height};`:""}
    `,e=y`
      <img
        src="${this.src}"
        alt="${this.alt}"
        style="${r}"
        width="${H((t=this.width)!=null&&t.endsWith("px")?this.width.slice(0,-2):void 0)}"
        height="${H((n=this.height)!=null&&n.endsWith("px")?this.height.slice(0,-2):void 0)}"
      >`;return this.caption?y`
        <figure>
          ${e}
          <figcaption>${this.caption}</figcaption>
        </figure>
      `:e}};X.styles=R`
    :host {
      display: inline-block; /* O 'block' si prefieres que ocupe todo el ancho */
      line-height: 0; /* Para evitar espacio extra debajo de la imagen inline */
    }

    figure {
      margin: var(--lmc-image-figure-margin, 0 0 1em 0);
      padding: 0;
      line-height: initial; /* Restaura line-height para el caption */
    }

    img {
      display: block; /* Para que width/height funcionen correctamente */
      width: var(--lmc-image-width, auto); /* Usa la variable CSS o el fallback auto */
      height: var(--lmc-image-height, auto);
      max-width: 100%; /* Previene que la imagen se desborde si no se especifica width */
      object-fit: var(--lmc-image-object-fit, cover);
      border-radius: var(--lmc-image-border-radius, 0);
    }

    figcaption {
      margin-top: 0.5em;
      font-size: 0.9em;
      color: var(--lmc-image-caption-color, inherit);
      text-align: var(--lmc-image-caption-align, center);
    }
  `;_e([v({type:String})],X.prototype,"src",2);_e([v({type:String})],X.prototype,"alt",2);_e([v({type:String})],X.prototype,"width",2);_e([v({type:String})],X.prototype,"height",2);_e([v({type:String})],X.prototype,"caption",2);X=_e([O("lmc-simple-image")],X);var un=Object.getOwnPropertyDescriptor,pn=(r,e,t,n)=>{for(var o=n>1?void 0:n?un(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=a(o)||o);return o};let Qe=class extends w{render(){return y`
      <lmc-container>
        <h1>Layout y Tarjetas</h1>
        <p>Ejemplos de cómo usar <code>lmc-container</code>, <code>lmc-grid</code>, <code>lmc-card</code> y <code>lmc-simple-image</code> para crear layouts.</p>

        <h2>Grid Layout</h2>
        <p>Un ejemplo simple usando <code>lmc-grid</code> para un layout de dos columnas:</p>
        <lmc-grid columns="2">
          <div>
            <h3>Columna 1</h3>
            <p>Contenido de la columna 1.</p>
          </div>
          <div>
            <h3>Columna 2</h3>
            <p>Contenido de la columna 2.</p>
          </div>
        </lmc-grid>

        <h2>Card Layout</h2>
        <p>Ejemplos de cómo usar <code>lmc-card</code>:</p>
        <div class="card-grid">
          <lmc-card title="Tarjeta 1">
            <p>Este es el contenido de la tarjeta 1.</p>
          </lmc-card>

          <lmc-card title="Tarjeta 2">
            <lmc-simple-image src="https://via.placeholder.com/300x200" alt="Imagen de ejemplo"></lmc-simple-image>
            <p>Este es el contenido de la tarjeta 2 con una imagen.</p>
          </lmc-card>

          <lmc-card title="Tarjeta 3">
            <ul>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
            </ul>
          </lmc-card>
        </div>
      </lmc-container>
    `}};Qe.styles=R`
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .card {
      border: 1px solid #ccc;
      padding: 16px;
      margin-bottom: 16px;
    }
  `;Qe=pn([O("lmc-page-layout")],Qe);const mn=Object.freeze(Object.defineProperty({__proto__:null,get LmcPageLayout(){return Qe}},Symbol.toStringTag,{value:"Module"}));var fn=Object.defineProperty,gn=Object.getOwnPropertyDescriptor,Ne=(r,e,t,n)=>{for(var o=n>1?void 0:n?gn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&fn(e,t,o),o};let de=class extends w{constructor(){super(...arguments),this.delay=200,this.animationType="none",this.direction="vertical"}firstUpdated(){this._staggerChildren()}_staggerChildren(){this.slottedElements.forEach((r,e)=>{const t=`${this.delay*e}ms`;r.style.animationDelay=t,r.style.transitionDelay=t,this.animationType!=="none"&&(r.style.animationFillMode="both",r.style.animationDuration="var(--lmc-staggered-list-item-animation-duration, 0.5s)"),r.style.opacity="1"})}render(){return y`<slot></slot>`}};de.styles=R`
        :host {
            display: block;
        }

        ::slotted(*) {
            opacity: 0;
            transition: opacity var(--lmc-staggered-list-item-animation-duration, 0.5s) var(--lmc-staggered-list-item-animation-timing-function, ease-in-out);
        }

        :host([animationType="fade"]) ::slotted(*) {
            animation-name: fadeIn;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }


        :host([direction="horizontal"]) {
            display: flex;
            /* flex-wrap: wrap;  Optional: For wrapping items to the next line */
        }

    `;Ne([v({type:Number})],de.prototype,"delay",2);Ne([v({type:String,reflect:!0})],de.prototype,"animationType",2);Ne([v({type:String,reflect:!0})],de.prototype,"direction",2);Ne([no()],de.prototype,"slottedElements",2);de=Ne([O("lmc-staggered-list")],de);var vn=Object.getOwnPropertyDescriptor,bn=(r,e,t,n)=>{for(var o=n>1?void 0:n?vn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=a(o)||o);return o};let Je=class extends w{render(){return y`
      <lmc-container>
        <h1>Demo de Lista Escalonada</h1>
        <p>Esta página demuestra el componente <code>lmc-staggered-list</code>, que muestra una lista de elementos con una aparición escalonada.</p>

        <h2>Lista Escalonada Básica</h2>
        <lmc-staggered-list>
          <ul class="example-list">
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
            <li>Elemento 4</li>
          </ul>
        </lmc-staggered-list>

        <h2>Lista Escalonada con Animación</h2>
        <p>Este ejemplo utiliza una animación <code>fadeIn</code> para cada elemento de la lista.</p>
        <lmc-staggered-list animation="fadeIn">
          <ul class="example-list">
            <li>Elemento A</li>
            <li>Elemento B</li>
            <li>Elemento C</li>
            <li>Elemento D</li>
          </ul>
        </lmc-staggered-list>

         <h2>Lista Escalonada Horizontal con Animación Deslizante</h2>
        <p>Este ejemplo utiliza una animación <code>slideInLeft</code> con dirección horizontal.</p>
        <lmc-staggered-list animation="slideInLeft" direction="horizontal">
            <lmc-card title="Tarjeta 1">Contenido 1</lmc-card>
            <lmc-card title="Tarjeta 2">Contenido 2</lmc-card>
            <lmc-card title="Tarjeta 3">Contenido 3</lmc-card>
        </lmc-staggered-list>


        <h2>Variables CSS Personalizadas</h2>
        <p>Este ejemplo personaliza la duración de la animación utilizando variables CSS.</p>
        <style>
          /* Define la animación fadeIn aquí para que esté disponible */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
        <lmc-staggered-list animation="fadeIn" style="--lmc-staggered-list-item-animation-duration: 0.8s;">
          <ul class="example-list">
            <li>Elemento X</li>
            <li>Elemento Y</li>
            <li>Elemento Z</li>
          </ul>
        </lmc-staggered-list>
      </lmc-container>
    `}};Je.styles=R`
    .example-list {
      list-style: none;
      padding: 0;
    }

    .example-list li {
      padding: 10px;
      border: 1px solid #eee;
      margin-bottom: 5px;
      background-color: #f9f9f9;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .horizontal-list {
        display: flex;
        gap: 10px;
    }
  `;Je=bn([O("lmc-page-staggered-list")],Je);const yn=Object.freeze(Object.defineProperty({__proto__:null,get LmcPageStaggeredList(){return Je}},Symbol.toStringTag,{value:"Module"}));function _n(r,e){const t=[];for(let n=r;n<=e;n++)t.push(n);return t}var $n=Object.defineProperty,wn=Object.getOwnPropertyDescriptor,$e=(r,e,t,n)=>{for(var o=n>1?void 0:n?wn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&$n(e,t,o),o};let Q=class extends w{constructor(){super(...arguments),this.currentPage=1,this.totalPages=10,this.maxPagesVisible=5,this.showFirstLast=!0,this.ariaLabel="Paginación"}updated(r){r.has("currentPage")&&this.requestUpdate()}_getPageNumbers(){let r=Math.max(1,this.currentPage-Math.floor(this.maxPagesVisible/2)),e=Math.min(this.totalPages,r+this.maxPagesVisible-1);return e-r+1<this.maxPagesVisible&&(r=Math.max(1,e-this.maxPagesVisible+1)),console.log("currentPage:",this.currentPage),console.log("totalPages:",this.totalPages),console.log("maxPagesVisible:",this.maxPagesVisible),console.log("startPage:",r),console.log("endPage:",e),_n(r,e)}render(){const r=this._getPageNumbers();return console.log("pageNumbers:",r),y`
            <nav aria-label="${this.ariaLabel}">
                ${this.showFirstLast&&this.currentPage!==1?y`<button @click="${()=>this._goToPage(1)}">Primera</button>`:""}
                <button @click="${this._goToPreviousPage}" ?disabled="${this.currentPage===1}">Anterior</button>
                
                ${r.map(e=>y`
                    <a
                        href="#"
                        class="page-number ${e===this.currentPage?"current":""}"
                        @click="${t=>{t.preventDefault(),this._goToPage(e)}}"
                    >${e}</a>
                `)}
                
                <button @click="${this._goToNextPage}" ?disabled="${this.currentPage===this.totalPages}">Siguiente</button>
                ${this.showFirstLast&&this.currentPage!==this.totalPages?y`<button @click="${()=>this._goToPage(this.totalPages)}">Última</button>`:""}
            </nav>
        `}_goToPreviousPage(){this.currentPage>1&&this._dispatchPageChangeEvent(this.currentPage-1)}_goToNextPage(){this.currentPage<this.totalPages&&this._dispatchPageChangeEvent(this.currentPage+1)}_goToPage(r){r>=1&&r<=this.totalPages&&r!==this.currentPage&&this._dispatchPageChangeEvent(r)}_dispatchPageChangeEvent(r){this.dispatchEvent(new CustomEvent("lmc-page-change",{detail:{page:r},bubbles:!0,composed:!0}))}};Q.styles=R`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-family: sans-serif;
        }
         
        nav {
          padding: 0.5rem;
          background-color: var(--lmc-pagination-background-color, #f0f0f0);
          color: var(--lmc-pagination-text-color, #333);
          border-radius: var(--lmc-pagination-border-radius, 4px);
        }
        .page-number {
          padding:  0.5rem 1rem;
          border: none;
          background-color: transparent;
          color: inherit;
          cursor: pointer;
          border-radius: 4px;
          text-decoration: none;
        }
        button:disabled,
        .page-number.disabled {
          color: #999;
          cursor: not-allowed;
        }
        .current {
          font-weight: bold;
          color:  #fff;
          background-color:  #007bff;
          padding:  0.5rem 1rem;
          border: none;
          border-radius: 4px;
        }
        button {
          padding: 0.5rem 1rem;
          border: none;
          background-color: transparent;
          color: inherit;
          cursor: pointer;
          border-radius: 4px;
        }
    `;$e([v({type:Number})],Q.prototype,"currentPage",2);$e([v({type:Number})],Q.prototype,"totalPages",2);$e([v({type:Number})],Q.prototype,"maxPagesVisible",2);$e([v({type:Boolean})],Q.prototype,"showFirstLast",2);$e([v({type:String})],Q.prototype,"ariaLabel",2);Q=$e([O("lmc-pagination")],Q);var En=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,Cr=(r,e,t,n)=>{for(var o=n>1?void 0:n?xn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&En(e,t,o),o};let Ze=class extends w{constructor(){super(...arguments),this.level="p"}render(){let r;switch(this.level){case"h1":r=y`<h1><slot></slot></h1>`;break;case"h2":r=y`<h2><slot></slot></h2>`;break;case"h3":r=y`<h3><slot></slot></h3>`;break;case"h4":r=y`<h4><slot></slot></h4>`;break;case"h5":r=y`<h5><slot></slot></h5>`;break;case"h6":r=y`<h6><slot></slot></h6>`;break;default:r=y`<p><slot></slot></p>`;break}return r}};Ze.styles=R`
    :host {
      display: block; /* Comportamiento de bloque por defecto */
      box-sizing: border-box;
      /* Estilos base aplicados al host, heredables por el slot */
      margin: var(--lmc-text-display-margin, 0); /* Controlar margen desde fuera o por nivel */
      padding: 0; /* Sin padding por defecto */
      color: var(--lmc-text-display-color, var(--lmc-global-color-text-default, inherit)); /* HEREDA COLOR GLOBAL */
      font-size: var(--lmc-text-display-font-size, inherit);
      font-weight: var(--lmc-text-display-font-weight, inherit);
      line-height: var(--lmc-text-display-line-height, var(--lmc-global-line-height-base, 1.5));
      transition: color 0.3s ease; /* Transición para cambio de tema */
    }

    /* Estilos base para los elementos internos (h1-p) */
    h1, h2, h3, h4, h5, h6, p {
      margin: inherit; /* Hereda el margen del host por defecto */
      padding: inherit; /* Hereda el padding del host por defecto */
      font-size: inherit; /* Hereda tamaño del host por defecto */
      font-weight: inherit; /* Hereda peso del host por defecto */
      line-height: inherit; /* Hereda altura de línea del host */
      color: inherit; /* Hereda color del host (que ya tiene el fallback global) */
    }

    /* --- Sobrescrituras específicas por nivel usando el atributo reflejado en :host --- */

    /* H1 */
    :host([level="h1"]) {
      font-size: var(--lmc-text-display-h1-font-size, 2.5rem);
      font-weight: var(--lmc-text-display-h1-font-weight, bold);
      line-height: var(--lmc-text-display-h1-line-height, 1.2);
      margin: var(--lmc-text-display-h1-margin, 0 0 0.5em 0);
    }

    /* H2 */
    :host([level="h2"]) {
      font-size: var(--lmc-text-display-h2-font-size, 2rem);
      font-weight: var(--lmc-text-display-h2-font-weight, bold);
      line-height: var(--lmc-text-display-h2-line-height, 1.3);
      margin: var(--lmc-text-display-h2-margin, 0 0 0.5em 0);
    }

    /* H3 (Ejemplo adicional) */
    :host([level="h3"]) {
      font-size: var(--lmc-text-display-h3-font-size, 1.75rem);
      font-weight: var(--lmc-text-display-h3-font-weight, bold);
      line-height: var(--lmc-text-display-h3-line-height, 1.4);
      margin: var(--lmc-text-display-h3-margin, 0 0 0.5em 0);
    }

    /* H4 (Ejemplo adicional) */
    :host([level="h4"]) {
        font-size: var(--lmc-text-display-h4-font-size, 1.5rem);
        font-weight: var(--lmc-text-display-h4-font-weight, bold);
        line-height: var(--lmc-text-display-h4-line-height, 1.4);
        margin: var(--lmc-text-display-h4-margin, 0 0 0.5em 0);
    }

    /* H5 (Ejemplo adicional) */
     :host([level="h5"]) {
        font-size: var(--lmc-text-display-h5-font-size, 1.25rem);
        font-weight: var(--lmc-text-display-h5-font-weight, bold);
        line-height: var(--lmc-text-display-h5-line-height, 1.5);
        margin: var(--lmc-text-display-h5-margin, 0 0 0.5em 0);
     }

     /* H6 (Ejemplo adicional) */
      :host([level="h6"]) {
        font-size: var(--lmc-text-display-h6-font-size, 1rem);
        font-weight: var(--lmc-text-display-h6-font-weight, bold);
        line-height: var(--lmc-text-display-h6-line-height, 1.5);
        margin: var(--lmc-text-display-h6-margin, 0 0 0.5em 0);
      }


    /* Párrafo (nivel 'p') */
    :host([level="p"]) {
      /* Hereda la mayoría de los estilos base de :host */
      font-weight: var(--lmc-text-display-p-font-weight, var(--lmc-global-font-weight-base, normal));
      line-height: var(--lmc-text-display-p-line-height, var(--lmc-global-line-height-base, 1.5));
       /* Podemos añadir un margen inferior por defecto si queremos */
       /* margin-bottom: var(--lmc-global-spacing-md, 1rem); */
    }
  `;Cr([v({type:String,reflect:!0})],Ze.prototype,"level",2);Ze=Cr([O("lmc-text-display")],Ze);var Pn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,Lr=(r,e,t,n)=>{for(var o=n>1?void 0:n?An(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&Pn(e,t,o),o};let Te=class extends w{constructor(){super(...arguments),this._currentPage=1}_handlePageChange(r){console.log("Page changed to:",r.detail.page),this._currentPage=r.detail.page,this.requestUpdate()}render(){return y`
      <lmc-container>
        <lmc-text-display level="h1">Demo de Paginación</lmc-text-display>
        <lmc-text-display level="p">
          Esta página demuestra el componente <code>lmc-pagination</code>.
        </lmc-text-display>
        <lmc-pagination
          .currentPage="${this._currentPage}"
          .totalPages="${10}"
          .maxPagesVisible="${5}"
          ?showFirstLast="${!0}"
          aria-label="Navegación de páginas"
          @lmc-page-change="${this._handlePageChange}"
        ></lmc-pagination>
        <div class="content">
          <lmc-text-display level="p">
            Estás viendo la página: ${this._currentPage}
          </lmc-text-display>
        </div>
      </lmc-container>
    `}};Te.styles=R`
    /* Estilos para la página de demostración */
    .content {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
    }
  `;Lr([xt()],Te.prototype,"_currentPage",2);Te=Lr([O("lmc-page-pagination")],Te);const Rn=Object.freeze(Object.defineProperty({__proto__:null,get LmcPagePagination(){return Te}},Symbol.toStringTag,{value:"Module"}));var On=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,Ot=(r,e,t,n)=>{for(var o=n>1?void 0:n?Sn(e,t):e,i=r.length-1,a;i>=0;i--)(a=r[i])&&(o=(n?a(e,t,o):a(o))||o);return n&&o&&On(e,t,o),o};let Me=class extends w{constructor(){super(...arguments),this._isDarkMode=!1}connectedCallback(){super.connectedCallback();const r=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;this._isDarkMode=localStorage.getItem("lmc-theme")==="dark"||!localStorage.getItem("lmc-theme")&&r,this._applyTheme()}firstUpdated(){this._initRouter()}async _initRouter(){var e;console.log("[Router] Attempting to initialize router...");const r=(e=this.shadowRoot)==null?void 0:e.querySelector("main");if(console.log("[Router] Outlet element found:",r),r){const t=new Wo(r),n=[{path:"/",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-home-Dzfui4-X.js"),[]),console.log(`[Router] Module ./pages/lmc-page-home.ts loaded successfully for ${a}`),i.component("lmc-page-home")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/pagination",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>Promise.resolve().then(()=>Rn),void 0),console.log(`[Router] Module ./pages/lmc-page-pagination.ts loaded successfully for ${a}`),i.component("lmc-page-pagination")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/staggered",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>Promise.resolve().then(()=>yn),void 0),console.log(`[Router] Module ./pages/lmc-page-staggered-list.ts loaded successfully for ${a}`),i.component("lmc-page-staggered-list")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/about",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-about-ZRx-wfjy.js"),[]),console.log(`[Router] Module ./pages/lmc-page-about.ts loaded successfully for ${a}`),i.component("lmc-page-about")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/accordion",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-accordion-COSvV2gE.js"),__vite__mapDeps([0,1])),console.log(`[Router] Module ./pages/lmc-page-accordion.ts loaded successfully for ${a}`),i.component("lmc-page-accordion")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/buttons",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-buttons-DTun7WQo.js"),[]),console.log(`[Router] Module ./pages/lmc-page-buttons.ts loaded successfully for ${a}`),i.component("lmc-page-buttons")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/forms",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-forms-CLJSBkf0.js"),__vite__mapDeps([2,3])),console.log(`[Router] Module ./pages/lmc-page-forms.ts loaded successfully for ${a}`),i.component("lmc-page-forms")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/feedback",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-feedback-M11dymcW.js"),__vite__mapDeps([4,3])),console.log(`[Router] Module ./pages/lmc-page-feedback.ts loaded successfully for ${a}`),i.component("lmc-page-feedback")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/tabs",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-tabs-CjO1Fr7W.js"),__vite__mapDeps([5,1])),console.log(`[Router] Module ./pages/lmc-page-tabs.ts loaded successfully for ${a}`),i.component("lmc-page-tabs")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/layout",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>Promise.resolve().then(()=>mn),void 0),console.log(`[Router] Module ./pages/lmc-page-layout.ts loaded successfully for ${a}`),i.component("lmc-page-layout")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/tooltip",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-tooltip-U4wzyyGt.js"),[]),console.log(`[Router] Module ./pages/lmc-page-tooltip.ts loaded successfully for ${a}`),i.component("lmc-page-tooltip")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"/badge",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for ${a}`);try{return await C(()=>import("./lmc-page-badge-DxW2uvE6.js"),[]),console.log(`[Router] Module ./pages/lmc-page-badge.ts loaded successfully for ${a}`),i.component("lmc-page-badge")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),this._handleRouteError(r,i,a,s)}}},{path:"(.*)",action:async(o,i)=>{const a=o.pathname;console.log(`[Router] Action started for catch-all route ${a}`);try{return await C(()=>import("./lmc-page-not-found-CcJRzAQ-.js"),[]),console.log(`[Router] Module ./pages/lmc-page-not-found.ts loaded successfully for ${a}`),i.component("lmc-page-not-found")}catch(s){return console.error(`[Router] Error loading module for ${a}:`,s),r.innerHTML="<h1>Error Crítico</h1><p>No se pudo cargar la página solicitada ni la página de error.</p>",i.prevent()}}}];t.setRoutes(n),console.log("[Router] Routes configured successfully. Router instance:",t)}else console.error("[Router] CRITICAL: Router outlet element <main> not found in lmc-app-shell shadow DOM!")}async _handleRouteError(r,e,t,n){try{return await C(()=>import("./lmc-page-not-found-CcJRzAQ-.js"),[]),e.component("lmc-page-not-found")}catch(o){return console.error(`[Router] CRITICAL: Error loading NOT FOUND module after failing ${t}:`,o,"Original error:",n),r.innerHTML="<h1>Error Crítico</h1><p>No se pudo cargar el contenido solicitado ni la página de error.</p>",e.prevent()}}_toggleTheme(){this._isDarkMode=!this._isDarkMode,localStorage.setItem("lmc-theme",this._isDarkMode?"dark":"light"),this._applyTheme()}_applyTheme(){document.documentElement.setAttribute("data-theme",this._isDarkMode?"dark":"light")}render(){return y`
      <lmc-navbar>
        <!-- Logo -->
        <div slot="brand">
           <a href="/" style="line-height: 0;">
               <img src="/img/LegoMyCodeLogo-main.png" alt="LegoMyCode Logo" style="height: 40px; vertical-align: middle;" />
           </a>
        </div>

        <!-- Links -->
        <lmc-nav-link href="/">Home</lmc-nav-link>
        <lmc-nav-link href="/about">About</lmc-nav-link>
        <lmc-nav-link href="/accordion">Accordion</lmc-nav-link>
        <lmc-nav-link href="/buttons">Buttons</lmc-nav-link>
        <lmc-nav-link href="/forms">Forms</lmc-nav-link>
        <lmc-nav-link href="/feedback">Feedback</lmc-nav-link>
        <lmc-nav-link href="/tabs">Tabs</lmc-nav-link>
        <lmc-nav-link href="/layout">Layout</lmc-nav-link>
        <lmc-nav-link href="/tooltip">Tooltip</lmc-nav-link>
        <lmc-nav-link href="/staggered">Staggered</lmc-nav-link>
        <lmc-nav-link href="/pagination">Paginación</lmc-nav-link>
        <lmc-nav-link href="/badge">Badge</lmc-nav-link>

         
    
        <!-- Más links irán aquí -->

        <!-- Actions -->
        <div slot="actions">
            <lmc-basic-button
                class="theme-toggle-button"
                appearance="ghost" /* Mejor apariencia para navbar */
                @lmc-click=${this._toggleTheme}
                title=${this._isDarkMode?"Switch to Light Theme":"Switch to Dark Theme"}
            >
                <lmc-icon slot="prefix" name=${this._isDarkMode?"light_mode":"dark_mode"}></lmc-icon>
            </lmc-basic-button>


       



        </div>
      </lmc-navbar>

      <!-- El Router insertará el componente de página aquí -->
      <main id="router-outlet" role="main"></main>

      <lmc-footer>
        <p>© ${new Date().getFullYear()} LegoMyCode Project. Hecho con Legos!</p>
      </lmc-footer>
    `}};Me.styles=R`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--lmc-global-color-background, #ffffff);
      color: var(--lmc-global-color-text-default, #000000);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    main {
      flex-grow: 1; /* Ocupa el espacio vertical disponible */
      width: 100%;   /* Ocupa todo el ancho horizontal */
      /* El padding y max-width ahora lo gestiona el lmc-container DENTRO de cada página */
    }

    lmc-navbar {
      /* Asegura que la navbar se quede fija arriba */
      position: sticky;
      top: 0;
      z-index: 100; /* Sobre el contenido al hacer scroll */
    }

    /* Estilos para el botón de tema en la navbar */
    lmc-navbar lmc-basic-button[slot="actions"] {
       /* Hereda color del texto de la navbar (que viene del tema) */
       color: inherit;
       /* Podríamos ajustar padding si fuera necesario */
       /* --lmc-button-padding: 0.25rem; */
    }
     /* El icono dentro ya debería heredar via 'currentColor' en lmc-icon */
     /* No necesitamos reglas específicas aquí si lmc-icon funciona bien */
     /* lmc-navbar lmc-basic-button[slot="actions"] lmc-icon { ... } */
     /* :host([data-theme="dark"]) lmc-navbar lmc-basic-button[slot="actions"] lmc-icon { ... } */
  `;Ot([xt()],Me.prototype,"_isDarkMode",2);Ot([Pt("#router-outlet")],Me.prototype,"routerOutlet",2);Me=Ot([O("lmc-app-shell")],Me);export{$ as E,ge as T,R as a,H as b,Pt as e,w as i,v as n,no as o,xt as r,O as t,y as x};
