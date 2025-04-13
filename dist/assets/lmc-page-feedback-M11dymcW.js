import{a as Z,n as k,r as K,e as xe,i as J,b as Ae,E as ne,x as A,t as Q}from"./index-DD_4F0BZ.js";import"./lmc-alert-B8a2oOK_.js";/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var _e=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],G=_e.join(","),Te=typeof Element>"u",P=Te?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,X=!Te&&Element.prototype.getRootNode?function(a){var e;return a==null||(e=a.getRootNode)===null||e===void 0?void 0:e.call(a)}:function(a){return a==null?void 0:a.ownerDocument},U=function a(e,t){var r;t===void 0&&(t=!0);var i=e==null||(r=e.getAttribute)===null||r===void 0?void 0:r.call(e,"inert"),l=i===""||i==="true",n=l||t&&e&&a(e.parentNode);return n},Pe=function(e){var t,r=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return r===""||r==="true"},Se=function(e,t,r){if(U(e))return[];var i=Array.prototype.slice.apply(e.querySelectorAll(G));return t&&P.call(e,G)&&i.unshift(e),i=i.filter(r),i},Ee=function a(e,t,r){for(var i=[],l=Array.from(e);l.length;){var n=l.shift();if(!U(n,!1))if(n.tagName==="SLOT"){var b=n.assignedElements(),p=b.length?b:n.children,h=a(p,!0,r);r.flatten?i.push.apply(i,h):i.push({scopeParent:n,candidates:h})}else{var x=P.call(n,G);x&&r.filter(n)&&(t||!e.includes(n))&&i.push(n);var w=n.shadowRoot||typeof r.getShadowRoot=="function"&&r.getShadowRoot(n),C=!U(w,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(n));if(w&&C){var j=a(w===!0?n.children:w.children,!0,r);r.flatten?i.push.apply(i,j):i.push({scopeParent:n,candidates:j})}else l.unshift.apply(l,n.children)}}return i},Ne=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},O=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Pe(e))&&!Ne(e)?0:e.tabIndex},De=function(e,t){var r=O(e);return r<0&&t&&!Ne(e)?0:r},Ie=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},Ce=function(e){return e.tagName==="INPUT"},Re=function(e){return Ce(e)&&e.type==="hidden"},je=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(r){return r.tagName==="SUMMARY"});return t},$e=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]},Me=function(e){if(!e.name)return!0;var t=e.form||X(e),r=function(b){return t.querySelectorAll('input[type="radio"][name="'+b+'"]')},i;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")i=r(window.CSS.escape(e.name));else try{i=r(e.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var l=$e(i,e.form);return!l||l===e},ze=function(e){return Ce(e)&&e.type==="radio"},Le=function(e){return ze(e)&&!Me(e)},Be=function(e){var t,r=e&&X(e),i=(t=r)===null||t===void 0?void 0:t.host,l=!1;if(r&&r!==e){var n,b,p;for(l=!!((n=i)!==null&&n!==void 0&&(b=n.ownerDocument)!==null&&b!==void 0&&b.contains(i)||e!=null&&(p=e.ownerDocument)!==null&&p!==void 0&&p.contains(e));!l&&i;){var h,x,w;r=X(i),i=(h=r)===null||h===void 0?void 0:h.host,l=!!((x=i)!==null&&x!==void 0&&(w=x.ownerDocument)!==null&&w!==void 0&&w.contains(i))}}return l},he=function(e){var t=e.getBoundingClientRect(),r=t.width,i=t.height;return r===0&&i===0},qe=function(e,t){var r=t.displayCheck,i=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var l=P.call(e,"details>summary:first-of-type"),n=l?e.parentElement:e;if(P.call(n,"details:not([open]) *"))return!0;if(!r||r==="full"||r==="legacy-full"){if(typeof i=="function"){for(var b=e;e;){var p=e.parentElement,h=X(e);if(p&&!p.shadowRoot&&i(p)===!0)return he(e);e.assignedSlot?e=e.assignedSlot:!p&&h!==e.ownerDocument?e=h.host:e=p}e=b}if(Be(e))return!e.getClientRects().length;if(r!=="legacy-full")return!0}else if(r==="non-zero-area")return he(e);return!1},Ke=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var r=0;r<t.children.length;r++){var i=t.children.item(r);if(i.tagName==="LEGEND")return P.call(t,"fieldset[disabled] *")?!0:!i.contains(e)}return!0}t=t.parentElement}return!1},W=function(e,t){return!(t.disabled||U(t)||Re(t)||qe(t,e)||je(t)||Ke(t))},oe=function(e,t){return!(Le(t)||O(t)<0||!W(e,t))},Ve=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Ye=function a(e){var t=[],r=[];return e.forEach(function(i,l){var n=!!i.scopeParent,b=n?i.scopeParent:i,p=De(b,n),h=n?a(i.candidates):b;p===0?n?t.push.apply(t,h):t.push(b):r.push({documentOrder:l,tabIndex:p,item:i,isScope:n,content:h})}),r.sort(Ie).reduce(function(i,l){return l.isScope?i.push.apply(i,l.content):i.push(l.content),i},[]).concat(t)},He=function(e,t){t=t||{};var r;return t.getShadowRoot?r=Ee([e],t.includeContainer,{filter:oe.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ve}):r=Se(e,t.includeContainer,oe.bind(null,t)),Ye(r)},Ge=function(e,t){t=t||{};var r;return t.getShadowRoot?r=Ee([e],t.includeContainer,{filter:W.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):r=Se(e,t.includeContainer,W.bind(null,t)),r},R=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return P.call(e,G)===!1?!1:oe(t,e)},Xe=_e.concat("iframe").join(","),re=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return P.call(e,Xe)===!1?!1:W(t,e)};/*!
* focus-trap 7.6.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ie(a,e){(e==null||e>a.length)&&(e=a.length);for(var t=0,r=Array(e);t<e;t++)r[t]=a[t];return r}function Ue(a){if(Array.isArray(a))return ie(a)}function We(a,e,t){return(e=tt(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function Ze(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Je(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ge(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),t.push.apply(t,r)}return t}function ye(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ge(Object(t),!0).forEach(function(r){We(a,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):ge(Object(t)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(t,r))})}return a}function Qe(a){return Ue(a)||Ze(a)||at(a)||Je()}function et(a,e){if(typeof a!="object"||!a)return a;var t=a[Symbol.toPrimitive];if(t!==void 0){var r=t.call(a,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function tt(a){var e=et(a,"string");return typeof e=="symbol"?e:e+""}function at(a,e){if(a){if(typeof a=="string")return ie(a,e);var t={}.toString.call(a).slice(8,-1);return t==="Object"&&a.constructor&&(t=a.constructor.name),t==="Map"||t==="Set"?Array.from(a):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(a,e):void 0}}var we={activateTrap:function(e,t){if(e.length>0){var r=e[e.length-1];r!==t&&r._setPausedState(!0)}var i=e.indexOf(t);i===-1||e.splice(i,1),e.push(t)},deactivateTrap:function(e,t){var r=e.indexOf(t);r!==-1&&e.splice(r,1),e.length>0&&!e[e.length-1]._isManuallyPaused()&&e[e.length-1]._setPausedState(!1)}},rt=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},nt=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},B=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},ot=function(e){return B(e)&&!e.shiftKey},it=function(e){return B(e)&&e.shiftKey},ke=function(e){return setTimeout(e,0)},L=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return typeof e=="function"?e.apply(void 0,r):e},H=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},st=[],lt=function(e,t){var r=(t==null?void 0:t.document)||document,i=(t==null?void 0:t.trapStack)||st,l=ye({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:ot,isKeyBackward:it},t),n={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,manuallyPaused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},b,p=function(o,s,c){return o&&o[s]!==void 0?o[s]:l[c||s]},h=function(o,s){var c=typeof(s==null?void 0:s.composedPath)=="function"?s.composedPath():void 0;return n.containerGroups.findIndex(function(u){var f=u.container,v=u.tabbableNodes;return f.contains(o)||(c==null?void 0:c.includes(f))||v.find(function(d){return d===o})})},x=function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=s.hasFallback,u=c===void 0?!1:c,f=s.params,v=f===void 0?[]:f,d=l[o];if(typeof d=="function"&&(d=d.apply(void 0,Qe(v))),d===!0&&(d=void 0),!d){if(d===void 0||d===!1)return d;throw new Error("`".concat(o,"` was specified but was not a node, or did not return a node"))}var g=d;if(typeof d=="string"){try{g=r.querySelector(d)}catch(y){throw new Error("`".concat(o,'` appears to be an invalid selector; error="').concat(y.message,'"'))}if(!g&&!u)throw new Error("`".concat(o,"` as selector refers to no known node"))}return g},w=function(){var o=x("initialFocus",{hasFallback:!0});if(o===!1)return!1;if(o===void 0||o&&!re(o,l.tabbableOptions))if(h(r.activeElement)>=0)o=r.activeElement;else{var s=n.tabbableGroups[0],c=s&&s.firstTabbableNode;o=c||x("fallbackFocus")}else o===null&&(o=x("fallbackFocus"));if(!o)throw new Error("Your focus-trap needs to have at least one focusable element");return o},C=function(){if(n.containerGroups=n.containers.map(function(o){var s=He(o,l.tabbableOptions),c=Ge(o,l.tabbableOptions),u=s.length>0?s[0]:void 0,f=s.length>0?s[s.length-1]:void 0,v=c.find(function(y){return R(y)}),d=c.slice().reverse().find(function(y){return R(y)}),g=!!s.find(function(y){return O(y)>0});return{container:o,tabbableNodes:s,focusableNodes:c,posTabIndexesFound:g,firstTabbableNode:u,lastTabbableNode:f,firstDomTabbableNode:v,lastDomTabbableNode:d,nextTabbableNode:function(F){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,N=s.indexOf(F);return N<0?M?c.slice(c.indexOf(F)+1).find(function(z){return R(z)}):c.slice(0,c.indexOf(F)).reverse().find(function(z){return R(z)}):s[N+(M?1:-1)]}}}),n.tabbableGroups=n.containerGroups.filter(function(o){return o.tabbableNodes.length>0}),n.tabbableGroups.length<=0&&!x("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(n.containerGroups.find(function(o){return o.posTabIndexesFound})&&n.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},j=function(o){var s=o.activeElement;if(s)return s.shadowRoot&&s.shadowRoot.activeElement!==null?j(s.shadowRoot):s},E=function(o){if(o!==!1&&o!==j(document)){if(!o||!o.focus){E(w());return}o.focus({preventScroll:!!l.preventScroll}),n.mostRecentlyFocusedNode=o,rt(o)&&o.select()}},le=function(o){var s=x("setReturnFocus",{params:[o]});return s||(s===!1?!1:o)},ce=function(o){var s=o.target,c=o.event,u=o.isBackward,f=u===void 0?!1:u;s=s||H(c),C();var v=null;if(n.tabbableGroups.length>0){var d=h(s,c),g=d>=0?n.containerGroups[d]:void 0;if(d<0)f?v=n.tabbableGroups[n.tabbableGroups.length-1].lastTabbableNode:v=n.tabbableGroups[0].firstTabbableNode;else if(f){var y=n.tabbableGroups.findIndex(function(te){var ae=te.firstTabbableNode;return s===ae});if(y<0&&(g.container===s||re(s,l.tabbableOptions)&&!R(s,l.tabbableOptions)&&!g.nextTabbableNode(s,!1))&&(y=d),y>=0){var F=y===0?n.tabbableGroups.length-1:y-1,M=n.tabbableGroups[F];v=O(s)>=0?M.lastTabbableNode:M.lastDomTabbableNode}else B(c)||(v=g.nextTabbableNode(s,!1))}else{var N=n.tabbableGroups.findIndex(function(te){var ae=te.lastTabbableNode;return s===ae});if(N<0&&(g.container===s||re(s,l.tabbableOptions)&&!R(s,l.tabbableOptions)&&!g.nextTabbableNode(s))&&(N=d),N>=0){var z=N===n.tabbableGroups.length-1?0:N+1,ve=n.tabbableGroups[z];v=O(s)>=0?ve.firstTabbableNode:ve.firstDomTabbableNode}else B(c)||(v=g.nextTabbableNode(s))}}else v=x("fallbackFocus");return v},Y=function(o){var s=H(o);if(!(h(s,o)>=0)){if(L(l.clickOutsideDeactivates,o)){b.deactivate({returnFocus:l.returnFocusOnDeactivate});return}L(l.allowOutsideClick,o)||o.preventDefault()}},de=function(o){var s=H(o),c=h(s,o)>=0;if(c||s instanceof Document)c&&(n.mostRecentlyFocusedNode=s);else{o.stopImmediatePropagation();var u,f=!0;if(n.mostRecentlyFocusedNode)if(O(n.mostRecentlyFocusedNode)>0){var v=h(n.mostRecentlyFocusedNode),d=n.containerGroups[v].tabbableNodes;if(d.length>0){var g=d.findIndex(function(y){return y===n.mostRecentlyFocusedNode});g>=0&&(l.isKeyForward(n.recentNavEvent)?g+1<d.length&&(u=d[g+1],f=!1):g-1>=0&&(u=d[g-1],f=!1))}}else n.containerGroups.some(function(y){return y.tabbableNodes.some(function(F){return O(F)>0})})||(f=!1);else f=!1;f&&(u=ce({target:n.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(n.recentNavEvent)})),E(u||n.mostRecentlyFocusedNode||w())}n.recentNavEvent=void 0},Fe=function(o){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;n.recentNavEvent=o;var c=ce({event:o,isBackward:s});c&&(B(o)&&o.preventDefault(),E(c))},ue=function(o){(l.isKeyForward(o)||l.isKeyBackward(o))&&Fe(o,l.isKeyBackward(o))},fe=function(o){nt(o)&&L(l.escapeDeactivates,o)!==!1&&(o.preventDefault(),b.deactivate())},pe=function(o){var s=H(o);h(s,o)>=0||L(l.clickOutsideDeactivates,o)||L(l.allowOutsideClick,o)||(o.preventDefault(),o.stopImmediatePropagation())},be=function(){if(n.active)return we.activateTrap(i,b),n.delayInitialFocusTimer=l.delayInitialFocus?ke(function(){E(w())}):E(w()),r.addEventListener("focusin",de,!0),r.addEventListener("mousedown",Y,{capture:!0,passive:!1}),r.addEventListener("touchstart",Y,{capture:!0,passive:!1}),r.addEventListener("click",pe,{capture:!0,passive:!1}),r.addEventListener("keydown",ue,{capture:!0,passive:!1}),r.addEventListener("keydown",fe),b},me=function(){if(n.active)return r.removeEventListener("focusin",de,!0),r.removeEventListener("mousedown",Y,!0),r.removeEventListener("touchstart",Y,!0),r.removeEventListener("click",pe,!0),r.removeEventListener("keydown",ue,!0),r.removeEventListener("keydown",fe),b},Oe=function(o){var s=o.some(function(c){var u=Array.from(c.removedNodes);return u.some(function(f){return f===n.mostRecentlyFocusedNode})});s&&E(w())},ee=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(Oe):void 0,$=function(){ee&&(ee.disconnect(),n.active&&!n.paused&&n.containers.map(function(o){ee.observe(o,{subtree:!0,childList:!0})}))};return b={get active(){return n.active},get paused(){return n.paused},activate:function(o){if(n.active)return this;var s=p(o,"onActivate"),c=p(o,"onPostActivate"),u=p(o,"checkCanFocusTrap");u||C(),n.active=!0,n.paused=!1,n.nodeFocusedBeforeActivation=r.activeElement,s==null||s();var f=function(){u&&C(),be(),$(),c==null||c()};return u?(u(n.containers.concat()).then(f,f),this):(f(),this)},deactivate:function(o){if(!n.active)return this;var s=ye({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},o);clearTimeout(n.delayInitialFocusTimer),n.delayInitialFocusTimer=void 0,me(),n.active=!1,n.paused=!1,$(),we.deactivateTrap(i,b);var c=p(s,"onDeactivate"),u=p(s,"onPostDeactivate"),f=p(s,"checkCanReturnFocus"),v=p(s,"returnFocus","returnFocusOnDeactivate");c==null||c();var d=function(){ke(function(){v&&E(le(n.nodeFocusedBeforeActivation)),u==null||u()})};return v&&f?(f(le(n.nodeFocusedBeforeActivation)).then(d,d),this):(d(),this)},pause:function(o){return n.active?(n.manuallyPaused=!0,this._setPausedState(!0,o)):this},unpause:function(o){return n.active?(n.manuallyPaused=!1,i[i.length-1]!==this?this:this._setPausedState(!1,o)):this},updateContainerElements:function(o){var s=[].concat(o).filter(Boolean);return n.containers=s.map(function(c){return typeof c=="string"?r.querySelector(c):c}),n.active&&C(),$(),this}},Object.defineProperties(b,{_isManuallyPaused:{value:function(){return n.manuallyPaused}},_setPausedState:{value:function(o,s){if(n.paused===o)return this;if(n.paused=o,o){var c=p(s,"onPause"),u=p(s,"onPostPause");c==null||c(),me(),$(),u==null||u()}else{var f=p(s,"onUnpause"),v=p(s,"onPostUnpause");f==null||f(),C(),be(),$(),v==null||v()}return this}}}),b.updateContainerElements(e),b},ct=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,T=(a,e,t,r)=>{for(var i=r>1?void 0:r?dt(e,t):e,l=a.length-1,n;l>=0;l--)(n=a[l])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&ct(e,t,i),i};let _=class extends J{constructor(){super(...arguments),this.open=!1,this.noHeader=!1,this.noPadding=!1,this.closeOnOverlayClick=!0,this.closeOnEsc=!0,this._isVisible=!1,this._focusTrap=null,this._cleanupFocusTrap=null}connectedCallback(){super.connectedCallback(),this._handleDocumentKeyDown=this._handleDocumentKeyDown.bind(this),this.open&&this._activate()}disconnectedCallback(){super.disconnectedCallback(),this._deactivate()}updated(a){a.has("open")&&(this.open?this._activate():this._deactivate())}_activate(){this._isVisible||(this._isVisible=!0,document.addEventListener("keydown",this._handleDocumentKeyDown),requestAnimationFrame(()=>{this.open&&(this._initializeFocusTrap(),this.dispatchEvent(new CustomEvent("lmc-open",{bubbles:!0,composed:!0})))}))}_deactivate(){var a;this._isVisible&&(this._isVisible=!1,document.removeEventListener("keydown",this._handleDocumentKeyDown),(a=this._cleanupFocusTrap)==null||a.call(this))}_initializeFocusTrap(){var a;if(!(!this.open||!this._dialogElement))try{this._focusTrap=lt(this._dialogElement,{initialFocus:this._dialogElement}),(a=this._focusTrap)==null||a.activate(),this._cleanupFocusTrap=()=>{var e;return(e=this._focusTrap)==null?void 0:e.deactivate()}}catch(e){console.error("Error initializing focus trap:",e)}}_handleOverlayClick(a){var e;this.closeOnOverlayClick&&a.target===((e=this.shadowRoot)==null?void 0:e.querySelector(".modal-overlay"))&&this._requestClose("overlay-click")}_handleCloseButtonClick(){this._requestClose("close-button")}_handleDocumentKeyDown(a){this.closeOnEsc&&a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),this._requestClose("escape-key"))}_requestClose(a){console.log(`lmc-modal: Requesting close (reason: ${a})`),this.dispatchEvent(new CustomEvent("lmc-close",{detail:{reason:a},bubbles:!0,composed:!0}))}_getAriaLabel(){var e;if(this.label)return this.label;const a=(e=this._headerSlot)==null?void 0:e.assignedNodes({flatten:!0});return(a==null?void 0:a.map(t=>{var r;return(r=t.textContent)==null?void 0:r.trim()}).filter(Boolean).join(" "))||void 0}render(){return A`
      <div
        class="modal-overlay"
        part="overlay"
        @click=${this._handleOverlayClick}
      >
        <div
          class="modal-dialog"
          part="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${Ae(this._getAriaLabel())}
          aria-hidden=${!this.open}
        >
          ${this.noHeader?ne:A`
            <header part="header">
              <slot name="header"></slot>
              <button
                class="close-button"
                part="close-button"
                aria-label="Cerrar diálogo"
                @click=${this._handleCloseButtonClick}
              >
                × <!-- Símbolo 'X' -->
              </button>
            </header>
          `}

          <main part="body">
            <slot></slot> <!-- Slot por defecto para el contenido principal -->
          </main>

          <footer part="footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};_.styles=Z`
    :host {
      display: contents; /* No ocupa espacio por sí mismo cuando está cerrado */
    }

    .modal-overlay {
      display: none; /* Oculto por defecto */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--lmc-modal-overlay-background, rgba(0, 0, 0, 0.5));
      z-index: var(--lmc-modal-z-index, 1000);
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host([open]) .modal-overlay {
      display: flex; /* Mostrar como flex para centrar */
      opacity: 1;
    }

    .modal-dialog {
      background-color: var(--lmc-modal-background-color, white);
      border-radius: var(--lmc-modal-border-radius, 0.5rem);
      box-shadow: var(--lmc-modal-box-shadow, 0 5px 15px rgba(0,0,0,.2));
      width: var(--lmc-modal-width, 500px);
      max-width: var(--lmc-modal-max-width, 90vw);
      max-height: 90vh; /* Evita que sea más alto que la pantalla */
      display: flex;
      flex-direction: column;
      overflow: hidden; /* Para que border-radius funcione con contenido interno */
      transform: scale(0.95);
      transition: transform 0.2s ease-out;
    }
    :host([open]) .modal-dialog {
        transform: scale(1);
    }


    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--lmc-modal-header-padding, 1rem 1.5rem);
      border-bottom: var(--lmc-modal-header-border-bottom, 1px solid #eee);
      flex-shrink: 0; /* Evita que se encoja */
    }
    header ::slotted(*) { /* Estilos para el título/contenido del slot header */
       margin: 0;
       font-size: 1.25rem;
       font-weight: bold;
       flex-grow: 1; /* Ocupa espacio */
    }
    header:empty { /* Oculta si el slot está vacío */
       display: none;
    }
    :host([no-header]) header {
       display: none;
    }


    .close-button {
      background: none;
      border: none;
      padding: 0.5rem;
      margin: -0.5rem; /* Compensa el padding */
      margin-left: 1rem;
      font-size: 1.5rem;
      line-height: 1;
      color: var(--lmc-modal-close-button-color, grey);
      cursor: pointer;
      transition: color 0.15s ease-out;
    }
    .close-button:hover {
        color: black;
    }

    main {
      flex-grow: 1; /* Ocupa el espacio restante */
      padding: var(--lmc-modal-padding, 1.5rem);
      overflow-y: auto; /* Scroll si el contenido es muy largo */
    }
     :host([no-padding]) main {
        padding: 0;
     }

    footer {
      padding: var(--lmc-modal-footer-padding, 1rem 1.5rem);
      border-top: var(--lmc-modal-footer-border-top, 1px solid #eee);
      text-align: right;
      flex-shrink: 0; /* Evita que se encoja */
    }
     footer ::slotted(*) {
        margin-left: 0.5rem; /* Espacio entre botones/elementos del footer */
     }
     footer:empty {
         display: none;
     }

  `;T([k({type:Boolean,reflect:!0})],_.prototype,"open",2);T([k({type:String})],_.prototype,"label",2);T([k({type:Boolean,attribute:"no-header"})],_.prototype,"noHeader",2);T([k({type:Boolean,attribute:"no-padding"})],_.prototype,"noPadding",2);T([k({type:Boolean,attribute:"close-on-overlay-click"})],_.prototype,"closeOnOverlayClick",2);T([k({type:Boolean,attribute:"close-on-esc"})],_.prototype,"closeOnEsc",2);T([K()],_.prototype,"_isVisible",2);T([xe(".modal-dialog")],_.prototype,"_dialogElement",2);T([xe('slot[name="header"]')],_.prototype,"_headerSlot",2);_=T([Q("lmc-modal")],_);var ut=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,I=(a,e,t,r)=>{for(var i=r>1?void 0:r?ft(e,t):e,l=a.length-1,n;l>=0;l--)(n=a[l])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&ut(e,t,i),i};let S=class extends J{constructor(){super(...arguments),this.open=!1,this.message="",this.type="info",this.duration=4e3,this.position="bottom-center"}updated(a){console.log("[lmc-snackbar] updated. open=",this.open),a.has("open")&&(this.open?(console.log("[lmc-snackbar] Starting hide timer."),this._startHideTimeout()):(console.log("[lmc-snackbar] Clearing hide timer (because open is false)."),this._clearHideTimeout()))}_startHideTimeout(){this._clearHideTimeout(),this.duration>0&&(console.log(`[lmc-snackbar] Timeout set for ${this.duration}ms`),this._hideTimeoutId=setTimeout(()=>{console.log("[lmc-snackbar] Timeout finished. Requesting close."),this._emitClose("timeout")},this.duration))}_clearHideTimeout(){this._hideTimeoutId&&(console.log("[lmc-snackbar] Clearing existing timeout."),clearTimeout(this._hideTimeoutId),this._hideTimeoutId=void 0)}_handleActionClick(){console.log("[lmc-snackbar] Action button clicked."),this.dispatchEvent(new CustomEvent("lmc-action",{bubbles:!0,composed:!0})),this._emitClose("action"),this._clearHideTimeout()}_emitClose(a){console.log(`[lmc-snackbar] Emitting close event (reason: ${a})`),this.dispatchEvent(new CustomEvent("lmc-close",{detail:{reason:a},bubbles:!0,composed:!0}))}render(){return console.log(`[lmc-snackbar] render: open=${this.open}`),this.open?A`
      <div
        class="snackbar"
        role="alert"
        aria-live="assertive"
        part="container"
      >
        <span class="message" part="message">${this.message}</span>
        <span class="action" part="action">
          <slot name="action">
            ${this.actionText?A`
              <button type="button" @click=${this._handleActionClick}>${this.actionText}</button>
            `:ne}
          </slot>
        </span>
      </div>
    `:ne}};S.styles=Z`
    :host {
      display: block;
      position: fixed;
      z-index: var(--lmc-snackbar-z-index, 1010);
      /* Empieza invisible y fuera de lugar para la animación */
      opacity: 0;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
      pointer-events: none; /* No interactivo cuando está oculto */
      outline: none;
      box-sizing: border-box; /* Importante para consistencia */
      /* Posicionamiento por defecto (bottom-center) */
      bottom: var(--lmc-snackbar-margin, 1rem);
      left: 50%;
      transform: translateX(-50%) translateY(100%); /* Abajo y centrado */
    }

    /* Ajustes de posición */
    :host([position^='top-']) {
        top: var(--lmc-snackbar-margin, 1rem);
        bottom: auto;
        transform: translateX(-50%) translateY(-100%); /* Arriba y centrado */
    }
    :host([position*='-left']) {
        left: var(--lmc-snackbar-margin, 1rem);
        right: auto;
        /* Necesitamos quitar el translateX para left/right */
        transform: translateY(100%); /* Abajo a la izquierda (para bottom-left) */
    }
     :host([position='top-left']) {
         transform: translateY(-100%); /* Arriba a la izquierda */
     }

    :host([position*='-right']) {
        right: var(--lmc-snackbar-margin, 1rem);
        left: auto;
        transform: translateY(100%); /* Abajo a la derecha (para bottom-right) */
    }
     :host([position='top-right']) {
         transform: translateY(-100%); /* Arriba a la derecha */
     }


    /* Estado Visible: se controla solo con el atributo 'open' */
    :host([open]) {
      opacity: 1;
      pointer-events: auto; /* Se vuelve interactivo */
      /* Ajusta la transformación final según la posición */
      transform: translateX(0) translateY(0); /* Posición final por defecto */
    }
     /* Ajuste para centrado horizontal cuando está open */
     :host([open][position*='-center']) {
         transform: translateX(-50%) translateY(0);
     }
      /* Ajuste para left/right cuando está open */
     :host([open][position*='-left']:not([position*='center'])),
     :host([open][position*='-right']:not([position*='center'])) {
         transform: translateY(0);
     }


    .snackbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--lmc-snackbar-padding, 0.8rem 1.5rem);
      border-radius: var(--lmc-snackbar-border-radius, 4px);
      box-shadow: var(--lmc-snackbar-box-shadow, 0 3px 5px rgba(0,0,0,.2));
      min-width: var(--lmc-snackbar-min-width, 280px);
      max-width: var(--lmc-snackbar-max-width, 500px);
      box-sizing: border-box;
      pointer-events: auto;
      /* Colores por defecto (tipo info) */
      background-color: var(--lmc-snackbar-background-info, #333);
      color: var(--lmc-snackbar-color-info, white);
    }

    /* Estilos por tipo */
    :host([type='success']) .snackbar {
      background-color: var(--lmc-snackbar-background-success, #4CAF50);
      color: var(--lmc-snackbar-color-success, white);
    }
    :host([type='warning']) .snackbar {
      background-color: var(--lmc-snackbar-background-warning, #ff9800);
      color: var(--lmc-snackbar-color-warning, white);
    }
     :host([type='danger']) .snackbar {
      background-color: var(--lmc-snackbar-background-danger, #f44336);
      color: var(--lmc-snackbar-color-danger, white);
    }

    .message {
      flex-grow: 1;
      margin-right: 1rem;
    }

    .action ::slotted(button),
    .action lmc-basic-button, /* Si permites botones LegoMyCode dentro */
    .action button {
      background: none;
      border: none;
      color: var(--lmc-snackbar-action-color, var(--lmc-global-color-accent, #bb86fc));
      cursor: pointer;
      font-weight: bold;
      padding: 0.5rem;
      margin: -0.5rem;
      text-transform: uppercase;
      white-space: nowrap;
      font-size: 0.9em; /* Un poco más pequeño */
    }
     .action ::slotted(button:hover),
     .action lmc-basic-button:hover,
     .action button:hover {
         filter: brightness(1.2);
     }
  `;I([k({type:Boolean,reflect:!0})],S.prototype,"open",2);I([k({type:String})],S.prototype,"message",2);I([k({type:String,reflect:!0})],S.prototype,"type",2);I([k({type:Number})],S.prototype,"duration",2);I([k({type:String,reflect:!0})],S.prototype,"position",2);I([k({type:String,attribute:"action-text"})],S.prototype,"actionText",2);S=I([Q("lmc-snackbar")],S);var pt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,se=(a,e,t,r)=>{for(var i=r>1?void 0:r?bt(e,t):e,l=a.length-1,n;l>=0;l--)(n=a[l])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&pt(e,t,i),i};let q=class extends J{constructor(){super(...arguments),this.label="Cargando..."}updated(a){super.updated(a),a.has("size")&&this.size?this.style.setProperty("--_lmc-spinner-size-prop",this.size):a.has("size")&&!this.size&&this.style.removeProperty("--_lmc-spinner-size-prop")}render(){return A`
      <div
        class="spinner"
        role="status"
        aria-label=${this.label}
        part="spinner"
      >
        <span class="visually-hidden">${this.label}</span>
      </div>
    `}};q.styles=Z`
    :host {
      display: inline-flex; /* Para alinearse bien con texto u otros elementos */
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      /* Usa la prop size si existe, si no, la variable CSS, si no, el default */
      width: var(--_lmc-spinner-size-prop, var(--lmc-spinner-size, 2em));
      height: var(--_lmc-spinner-size-prop, var(--lmc-spinner-size, 2em));
      vertical-align: middle;
    }

    .spinner {
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: var(--lmc-spinner-border-width, 3px) solid var(--lmc-spinner-track-color, #eee);
      border-top-color: var(--lmc-spinner-color, var(--lmc-global-color-primary, blue));
      animation: lmc-spin var(--lmc-spinner-speed, 0.8s) linear infinite;
    }

    @keyframes lmc-spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Para accesibilidad: Oculta visualmente el span, pero es leído por lectores de pantalla */
    .visually-hidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      white-space: nowrap;
    }
  `;se([k({type:String})],q.prototype,"label",2);se([k({type:String})],q.prototype,"size",2);q=se([Q("lmc-spinner")],q);var mt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,V=(a,e,t,r)=>{for(var i=r>1?void 0:r?vt(e,t):e,l=a.length-1,n;l>=0;l--)(n=a[l])&&(i=(r?n(e,t,i):n(i))||i);return r&&i&&mt(e,t,i),i};let D=class extends J{constructor(){super(...arguments),this._isModalOpen=!1,this._isSnackbarOpen=!1,this._snackbarMessage="",this._alerts=[{type:"info",message:"Esto es una información general.",id:1},{type:"success",message:"¡Operación completada con éxito!",id:2},{type:"warning",message:"Advertencia: Algo podría necesitar atención.",id:3},{type:"danger",message:"Error: No se pudo completar la acción.",id:4}]}_openModal(){this._isModalOpen=!0}_closeModal(){this._isModalOpen=!1}_showSnackbar(a){this._snackbarMessage=a,this._isSnackbarOpen=!0}_handleSnackbarClose(){this._isSnackbarOpen=!1}_handleAlertClose(a){const e=Number(a.target.dataset.id);this._alerts=this._alerts.filter(t=>t.id!==e)}render(){return A`
      <lmc-container>
        <lmc-text-display level="h1">Feedback y Notificaciones</lmc-text-display>
        <lmc-text-display level="p">
          Componentes para proporcionar información y feedback al usuario.
        </lmc-text-display>

        <!-- Sección Alertas (lmc-alert) -->
        <div class="demo-section">
          <h2>Alertas (lmc-alert)</h2>
          <lmc-text-display level="p">
            Muestra mensajes contextuales con diferentes tipos (<code>info</code>, <code>success</code>, <code>warning</code>, <code>danger</code>)
            y opcionalmente cerrables (<code>closable</code>).
          </lmc-text-display>
          <div class="alert-showcase">
            ${this._alerts.map(a=>A`
              <lmc-alert
                type=${a.type}
                message=${a.message}
                closable
                data-id=${a.id}
                @lmc-close=${this._handleAlertClose}
              ></lmc-alert>
            `)}
          </div>
        </div>

        <!-- Sección Modal (lmc-modal) -->
        <div class="demo-section">
          <h2>Modal (lmc-modal)</h2>
          <lmc-text-display level="p">
            Muestra contenido en una ventana superpuesta (diálogo modal). Se controla con la propiedad <code>open</code>
            y emite <code>lmc-close</code> al intentar cerrar.
          </lmc-text-display>
          <div class="demo-controls">
            <lmc-basic-button appearance="primary" @lmc-click=${this._openModal}>Abrir Modal</lmc-basic-button>
          </div>

          <lmc-modal
            header-title="Título del Modal de Ejemplo"
            .open=${this._isModalOpen}
            @lmc-close=${this._closeModal}
          >
            <!-- Contenido principal (slot por defecto) -->
            <p>Este es el contenido principal del modal. Puedes poner aquí formularios, texto, imágenes, etc.</p>
            <p>Recuerda que el modal captura el foco y bloquea la interacción con el resto de la página.</p>
            <p>Usa el slot <strong>footer</strong> para acciones comunes.</p>

            <!-- Contenido del footer (slot="footer") -->
            <div slot="footer" style="text-align: right;">
              <lmc-basic-button appearance="secondary" @lmc-click=${this._closeModal}>Cancelar</lmc-basic-button>
              <lmc-basic-button appearance="primary" @lmc-click=${()=>{console.log("Acción Aceptar clickeada"),this._closeModal()}}>Aceptar</lmc-basic-button>
            </div>
          </lmc-modal>
        </div>

        <!-- Sección Snackbar (lmc-snackbar) -->
        <div class="demo-section">
          <h2>Snackbar (lmc-snackbar)</h2>
          <lmc-text-display level="p">
            Muestra notificaciones temporales (toasts) en la parte inferior de la pantalla.
            Se controla con <code>open</code> y <code>message</code>. Se cierra automáticamente o con <code>lmc-close</code>.
          </lmc-text-display>
           <div class="demo-controls">
            <lmc-basic-button @lmc-click=${()=>this._showSnackbar("Perfil guardado correctamente.")}>Mostrar Snackbar (Éxito)</lmc-basic-button>
            <lmc-basic-button appearance="secondary" @lmc-click=${()=>this._showSnackbar("No se pudo conectar al servidor.")}>Mostrar Snackbar (Error)</lmc-basic-button>
          </div>

           <lmc-snackbar
             .message=${this._snackbarMessage}
             .open=${this._isSnackbarOpen}
             @lmc-close=${this._handleSnackbarClose}
             duration="4000" /* 4 segundos */
           ></lmc-snackbar>
        </div>

        <!-- Sección Spinner (lmc-spinner) -->
        <div class="demo-section">
          <h2>Spinner (lmc-spinner)</h2>
          <lmc-text-display level="p">
            Indicador visual de carga o procesamiento en curso. Se puede personalizar el tamaño y color con CSS variables.
          </lmc-text-display>
           <div class="spinner-showcase">
             <lmc-spinner></lmc-spinner>
             <span>Cargando datos... (tamaño por defecto)</span>
           </div>
            <div class="spinner-showcase" style="margin-top: 1rem;">
             <lmc-spinner style="--lmc-spinner-size: 3rem; --lmc-spinner-color: var(--lmc-global-color-danger);"></lmc-spinner>
             <span>Procesando... (tamaño y color personalizados)</span>
           </div>
        </div>

      </lmc-container>
    `}};D.styles=Z`
    /* Estilos generales de la página */
    lmc-container { padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem); }
    h2 { margin-top: var(--lmc-global-spacing-xl, 3rem); margin-bottom: var(--lmc-global-spacing-md, 1rem); border-bottom: 1px solid var(--lmc-global-color-border, #eee); padding-bottom: var(--lmc-global-spacing-sm, 0.5rem); color: var(--lmc-global-color-text-default); }
    h2:first-of-type { margin-top: var(--lmc-global-spacing-lg, 2rem); }
    .demo-section { margin-bottom: var(--lmc-global-spacing-xl, 3rem); }
    .demo-controls { display: flex; flex-wrap: wrap; gap: var(--lmc-global-spacing-md, 1rem); margin-top: var(--lmc-global-spacing-sm, 0.5rem); }
    code { background-color: var(--lmc-global-color-background-tertiary, #e9ecef); color: var(--lmc-global-color-text-default); padding: 0.15em 0.4em; border-radius: var(--lmc-global-border-radius-sm, 3px); font-size: 0.9em; transition: background-color 0.3s ease, color 0.3s ease; }
    lmc-text-display { color: var(--lmc-global-color-text-default); }
    lmc-text-display[level="p"]:first-of-type { color: var(--lmc-global-color-text-muted); }

    /* Estilos específicos para esta demo */
    .alert-showcase lmc-alert { margin-bottom: var(--lmc-global-spacing-md, 1rem); }
    .spinner-showcase { display: flex; align-items: center; gap: var(--lmc-global-spacing-md, 1rem); }

    /* Estilos para contenido dentro del modal */
    lmc-modal p {
        margin: 0 0 var(--lmc-global-spacing-md, 1rem) 0;
        line-height: 1.6;
        color: var(--lmc-global-color-text-default); /* Asegura color de tema */
    }
    lmc-modal strong { color: var(--lmc-global-color-primary); }
  `;V([K()],D.prototype,"_isModalOpen",2);V([K()],D.prototype,"_isSnackbarOpen",2);V([K()],D.prototype,"_snackbarMessage",2);V([K()],D.prototype,"_alerts",2);D=V([Q("lmc-page-feedback")],D);export{D as LmcPageFeedback};
