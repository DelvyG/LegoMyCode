import{E as d,T as p,a as b,n as u,i as f,x as h,t as g}from"./index-DD_4F0BZ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},v=o=>(...t)=>({_$litDirective$:o,values:t});class y{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class i extends y{constructor(t){if(super(t),this.it=d,t.type!==m.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===d||t==null)return this._t=void 0,this.it=t;if(t===p)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}i.directiveName="unsafeHTML",i.resultType=1;const _=v(i);var $=Object.defineProperty,w=Object.getOwnPropertyDescriptor,c=(o,t,e,s)=>{for(var r=s>1?void 0:s?w(t,e):t,l=o.length-1,a;l>=0;l--)(a=o[l])&&(r=(s?a(t,e,r):a(r))||r);return s&&r&&$(t,e,r),r};let n=class extends f{constructor(){super(...arguments),this.type="info",this.closable=!1}_handleClose(){this.dispatchEvent(new CustomEvent("lmc-close",{bubbles:!0,composed:!0}))}render(){return h`
      <span>${_(this.message)}</span>
      ${this.closable?h`<button class="close-button" @click=${this._handleClose}>×</button>`:""}
    `}};n.styles=b`
    :host {
      display: flex; /* Use flexbox for alignment */
      align-items: center;
      justify-content: space-between; /* Push close button to the right */
      padding: 1rem;
      border-radius: 0.5rem;
      font-family: sans-serif;
      font-size: 1rem;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    :host([type='info']) {
      background-color: var(--lmc-alert-info-background-color, #e0f0ff);
      color: var(--lmc-alert-info-text-color, #035388);
    }

    :host([type='success']) {
      background-color: var(--lmc-alert-success-background-color, #d3f9d8);
      color: var(--lmc-alert-success-text-color, #2b7a0b);
    }

    :host([type='warning']) {
      background-color: var(--lmc-alert-warning-background-color, #fff3cd);
      color: var(--lmc-alert-warning-text-color, #856404);
    }

    :host([type='danger']) {
      background-color: var(--lmc-alert-danger-background-color, #f8d7da);
      color: var(--lmc-alert-danger-text-color, #721c24);
    }

    /* Estilos para el botón de cerrar */
    .close-button {
      background: none;
      border: none;
      color: inherit; /* Inherit text color from the alert */
      cursor: pointer;
      font-size: 1.2rem;
      padding: 0;
      margin-left: 1rem; /* Space between message and button */
    }
    .close-button:hover {
      opacity: 0.8;
    }

    /* Hide close button when not closable */
    :host(:not([closable])) .close-button {
      display: none;
    }
  `;c([u({type:String})],n.prototype,"message",2);c([u({type:String})],n.prototype,"type",2);c([u({type:Boolean,reflect:!0})],n.prototype,"closable",2);n=c([g("lmc-alert")],n);export{v as e,y as i,m as t};
