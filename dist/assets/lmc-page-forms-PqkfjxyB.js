import{T as S,E,a as x,n as a,r as _,i as k,b as s,x as u,t as w,o as A}from"./main-TYaH_DXW.js";import{e as I,i as T,t as y}from"./lmc-alert-Dnal9PuH.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=l=>l.strings===void 0,z={},D=(l,e=z)=>l._$AH=e;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=I(class extends T{constructor(l){if(super(l),l.type!==y.PROPERTY&&l.type!==y.ATTRIBUTE&&l.type!==y.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!j(l))throw Error("`live` bindings can only contain a single expression")}render(l){return l}update(l,[e]){if(e===S||e===E)return e;const r=l.element,t=l.name;if(l.type===y.PROPERTY){if(e===r[t])return S}else if(l.type===y.BOOLEAN_ATTRIBUTE){if(!!e===r.hasAttribute(t))return S}else if(l.type===y.ATTRIBUTE&&r.getAttribute(t)===e+"")return S;return D(l),e}});var B=Object.defineProperty,F=Object.getOwnPropertyDescriptor,m=(l,e,r,t)=>{for(var o=t>1?void 0:t?F(e,r):e,i=l.length-1,c;i>=0;i--)(c=l[i])&&(o=(t?c(e,r,o):c(o))||o);return t&&o&&B(e,r,o),o};let n=class extends k{constructor(){super(...arguments),this.type="text",this.value="",this.disabled=!1,this.required=!1,this._invalid=!1}_handleInput(l){const e=l.target;this.value=e.value,this.dispatchEvent(new CustomEvent("lmc-input",{detail:{value:this.value}}))}_handleChange(l){const e=l.target;this.dispatchEvent(new CustomEvent("lmc-change",{detail:{value:this.value}})),this._invalid=!e.checkValidity(),this.toggleAttribute("invalid",this._invalid)}render(){const l=!this.closest("lmc-form-field")&&this.label?this.label:void 0;return u`
      <input
        part="input"
        type=${this.type}
        name=${s(this.name)}
        .value=${C(this.value)} /* Usar live(this.value) es más seguro que String() */
        placeholder=${s(this.placeholder)}
        ?disabled=${this.disabled}
        ?required=${this.required}
        pattern=${s(this.pattern)}
        minlength=${s(this.minlength)}
        maxlength=${s(this.maxlength)}
        min=${s(this.min)}
        max=${s(this.max)}
        step=${s(typeof this.step=="string"?parseFloat(this.step):this.step)}
        aria-label=${s(l)}
        aria-invalid=${this._invalid?"true":"false"}
        @input=${this._handleInput}
        @change=${this._handleChange}
      />
    `}};n.styles=x`
    :host {
      display: block; /* Cambiado a block para consistencia */
      width: 100%;
    }
    input {
      /* Estilos como en la versión anterior verificada */
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding: var(--lmc-input-padding, var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-sm, 0.8rem));
      border: var(--lmc-input-border, 1px solid var(--lmc-global-color-border, #dee2e6));
      border-radius: var(--lmc-input-border-radius, var(--lmc-global-border-radius-md, 0.375rem));
      background-color: var(--lmc-input-background, var(--lmc-global-color-background, #fff));
      color: var(--lmc-input-color, var(--lmc-global-color-text-default, #212529));
      font-size: var(--lmc-input-font-size, inherit);
      font-family: inherit;
      line-height: 1.5;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.3s ease, color 0.3s ease;
    }
    input:focus {
      border-color: var(--lmc-input-focus-border-color, var(--lmc-global-color-primary, #0d6efd));
      outline: 0;
      box-shadow: 0 0 0 0.25rem var(--lmc-input-focus-ring-color, rgba(var(--lmc-global-color-primary-rgb, 13, 110, 253), 0.25));
    }
    input::placeholder { color: var(--lmc-input-placeholder-color, var(--lmc-global-color-text-muted, #6c757d)); opacity: 1; }
    input:disabled {
      background-color: var(--lmc-input-disabled-background, #e9ecef);
      color: var(--lmc-input-disabled-color, #6c757d);
      cursor: not-allowed;
    }
    :host([invalid]) input, input:invalid {
      border-color: var(--lmc-input-invalid-border-color, red);
      background-color: var(--lmc-input-invalid-background, #ffe6e6);
    }
    :host([invalid]) input:focus, input:invalid:focus {
      border-color: var(--lmc-input-invalid-focus-border-color, red);
      box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.25);
    }
  `;m([a({type:String})],n.prototype,"type",2);m([a({type:String})],n.prototype,"label",2);m([a({type:String})],n.prototype,"name",2);m([a({type:String})],n.prototype,"value",2);m([a({type:String})],n.prototype,"placeholder",2);m([a({type:Boolean,reflect:!0})],n.prototype,"disabled",2);m([a({type:Boolean,reflect:!0})],n.prototype,"required",2);m([a({type:String})],n.prototype,"pattern",2);m([a({type:Number})],n.prototype,"minlength",2);m([a({type:Number})],n.prototype,"maxlength",2);m([a()],n.prototype,"min",2);m([a()],n.prototype,"max",2);m([a()],n.prototype,"step",2);m([_()],n.prototype,"_invalid",2);n=m([w("lmc-input")],n);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P="important",R=" !"+P,N=I(class extends T{constructor(l){var e;if(super(l),l.type!==y.ATTRIBUTE||l.name!=="style"||((e=l.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(l){return Object.keys(l).reduce((e,r)=>{const t=l[r];return t==null?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${t};`},"")}update(l,[e]){const{style:r}=l.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)e[t]==null&&(this.ft.delete(t),t.includes("-")?r.removeProperty(t):r[t]=null);for(const t in e){const o=e[t];if(o!=null){this.ft.add(t);const i=typeof o=="string"&&o.endsWith(R);t.includes("-")||i?r.setProperty(t,i?o.slice(0,-11):o,i?P:""):r[t]=o}}return S}});var L=Object.defineProperty,V=Object.getOwnPropertyDescriptor,p=(l,e,r,t)=>{for(var o=t>1?void 0:t?V(e,r):e,i=l.length-1,c;i>=0;i--)(c=l[i])&&(o=(t?c(e,r,o):c(o))||o);return t&&o&&L(e,r,o),o};let d=class extends k{constructor(){super(...arguments),this.value="",this.disabled=!1,this.required=!1,this.rows=3,this.wrap="soft",this.resize="vertical",this._invalid=!1}_handleInput(){}_handleChange(){}render(){const l=!this.closest("lmc-form-field")&&this.label?this.label:void 0,e={resize:this.disabled?"none":this.resize};return u`
      <textarea
        part="textarea"
        style=${N(e)} /* Aplicar resize vía styleMap */
        name=${s(this.name)}
        .value=${C(this.value)}
        placeholder=${s(this.placeholder)}
        ?disabled=${this.disabled}
        ?required=${this.required}
        rows=${this.rows}
        cols=${s(this.cols)}
        minlength=${s(this.minlength)}
        maxlength=${s(this.maxlength)}
        wrap=${this.wrap==="off"?"soft":this.wrap}
        aria-label=${s(l)}
        aria-invalid=${this._invalid?"true":"false"}
        @input=${this._handleInput}
        @change=${this._handleChange}
      ></textarea>
    `}};d.styles=x`
    :host {
      display: block; /* Cambiado a block */
      width: 100%;
    }
    textarea {
      display: block;
      box-sizing: border-box;
      width: 100%;
      /* Hereda estilos de input por defecto via variables */
      padding: var(--lmc-textarea-padding, var(--lmc-input-padding, var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-sm, 0.8rem)));
      border: var(--lmc-textarea-border, var(--lmc-input-border, 1px solid var(--lmc-global-color-border, #dee2e6)));
      border-radius: var(--lmc-textarea-border-radius, var(--lmc-input-border-radius, var(--lmc-global-border-radius-md, 0.375rem)));
      background-color: var(--lmc-textarea-background, var(--lmc-input-background, var(--lmc-global-color-background, #fff)));
      color: var(--lmc-textarea-color, var(--lmc-input-color, var(--lmc-global-color-text-default, #212529)));
      font-size: var(--lmc-textarea-font-size, inherit);
      font-family: inherit;
      line-height: var(--lmc-textarea-line-height, 1.5);
      /* El resize se aplica ahora en el render con styleMap o desde CSS var */
      resize: var(--lmc-textarea-resize, vertical);
      min-height: var(--lmc-textarea-min-height, auto);
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.3s ease, color 0.3s ease;
    }
    textarea:focus {
      outline: 2px solid var(--lmc-textarea-focus-outline, #007bff);
      outline-offset: 2px;
    }
    textarea::placeholder {
      color: var(--lmc-textarea-placeholder-color, #6c757d);
      opacity: 1; /* Ensure placeholder is visible */
    }
    textarea:disabled {
      opacity: 0.5; /* Example style for disabled textarea */
      cursor: not-allowed;
    }
    :host([invalid]) textarea, textarea:invalid {
      border-color: var(--lmc-textarea-invalid-border-color, red);
    }
    :host([invalid]) textarea:focus, textarea:invalid:focus {
      outline: 2px solid var(--lmc-textarea-invalid-focus-outline, red);
    }
  `;p([a({type:String})],d.prototype,"label",2);p([a({type:String})],d.prototype,"name",2);p([a({type:String})],d.prototype,"value",2);p([a({type:String})],d.prototype,"placeholder",2);p([a({type:Boolean,reflect:!0})],d.prototype,"disabled",2);p([a({type:Boolean,reflect:!0})],d.prototype,"required",2);p([a({type:Number})],d.prototype,"rows",2);p([a({type:Number})],d.prototype,"cols",2);p([a({type:Number})],d.prototype,"minlength",2);p([a({type:Number})],d.prototype,"maxlength",2);p([a({type:String})],d.prototype,"wrap",2);p([a({type:String})],d.prototype,"resize",2);p([_()],d.prototype,"_invalid",2);d=p([w("lmc-textarea")],d);var M=Object.defineProperty,U=Object.getOwnPropertyDescriptor,$=(l,e,r,t)=>{for(var o=t>1?void 0:t?U(e,r):e,i=l.length-1,c;i>=0;i--)(c=l[i])&&(o=(t?c(e,r,o):c(o))||o);return t&&o&&M(e,r,o),o};let g=class extends k{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this._inputId=`lmc-checkbox-${Math.random().toString(36).substring(2,9)}`}render(){return u`
      <label for=${this._inputId}>
        <input
          type="checkbox"
          id=${this._inputId}
          .checked=${C(this.checked)}
          ?disabled=${this.disabled}
          value=${this.value??""}
          @change=${this._handleChange}
          aria-checked=${this.checked?"true":"false"}
          aria-disabled=${this.disabled?"true":"false"}
        />
        <span class="checkbox-control" aria-hidden="true">
          <svg class="checkmark" viewBox="0 0 16 16">
            <polyline points="3.75 8 6.75 11 12.25 5.5"></polyline>
          </svg>
        </span>
        ${this.label?u`<span class="label-text">${this.label}</span>`:E}
      </label>
    `}_handleChange(l){const e=l.target;this.checked=e.checked,this.dispatchEvent(new CustomEvent("lmc-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}};g.styles=x`
    :host {
      display: inline-flex; /* Para alinear cuadro y label */
      align-items: center; /* Centra verticalmente */
      gap: var(--lmc-checkbox-gap, 0.5em);
      cursor: pointer; /* Hace que toda el área sea clickeable */
      font-family: var(--lmc-global-font-family-base); /* Hereda fuente */
    }

    /* Ocultamos el input nativo, pero lo mantenemos accesible */
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
      pointer-events: none;
    }

    /* Nuestro cuadro personalizado */
    .checkbox-control {
      display: inline-flex; /* Para centrar el checkmark dentro */
      align-items: center;
      justify-content: center;
      width: var(--lmc-checkbox-size, 1.15em);
      height: var(--lmc-checkbox-size, 1.15em);
      border: 1px solid var(--lmc-checkbox-border-color, var(--lmc-global-color-muted, grey));
      border-radius: var(--lmc-checkbox-border-radius, calc(var(--lmc-global-border-radius-base, 4px) * 0.5));
      background-color: var(--lmc-global-color-background, white); /* Fondo por defecto */
      transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    }

    /* Estilos cuando está marcado */
    input[type="checkbox"]:checked + .checkbox-control {
      background-color: var(--lmc-checkbox-checked-background-color, var(--lmc-global-color-primary, blue));
      border-color: var(--lmc-checkbox-checked-background-color, var(--lmc-global-color-primary, blue));
    }

    /* El símbolo de verificación (checkmark) - Usamos un SVG inline */
    .checkmark {
      display: none; /* Oculto por defecto */
      width: 65%; /* Tamaño relativo al control */
      height: 65%;
      stroke: var(--lmc-checkbox-checkmark-color, white);
      stroke-width: 3px;
      fill: none;
      /* Forma del checkmark */
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    input[type="checkbox"]:checked + .checkbox-control .checkmark {
      display: block; /* Visible cuando está marcado */
    }

    /* Estilo del label */
    label {
      color: var(--lmc-checkbox-label-color, inherit);
      user-select: none; /* Evita seleccionar el texto del label al hacer clic */
      line-height: 1; /* Ajusta altura de línea para mejor alineación */
    }

    /* Estilos cuando está deshabilitado */
    :host([disabled]) {
      cursor: not-allowed;
      opacity: var(--lmc-checkbox-disabled-opacity, 0.5);
    }

    /* Estilos de foco (aplicados al control personalizado cuando el input nativo oculto recibe foco) */
    input[type="checkbox"]:focus-visible + .checkbox-control {
      outline: 2px solid var(--lmc-global-color-primary, blue);
      outline-offset: 2px;
    }
  `;$([a({type:Boolean,reflect:!0})],g.prototype,"checked",2);$([a({type:String})],g.prototype,"label",2);$([a({type:Boolean,reflect:!0})],g.prototype,"disabled",2);$([a({type:String})],g.prototype,"value",2);$([_()],g.prototype,"_inputId",2);g=$([w("lmc-checkbox")],g);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*G(l,e){if(l!==void 0){let r=0;for(const t of l)yield e(t,r++)}}var H=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,f=(l,e,r,t)=>{for(var o=t>1?void 0:t?Y(e,r):e,i=l.length-1,c;i>=0;i--)(c=l[i])&&(o=(t?c(e,r,o):c(o))||o);return t&&o&&H(e,r,o),o};let b=class extends k{constructor(){super(...arguments),this.value="",this.options=[],this.disabled=!1,this.required=!1,this._invalid=!1}_handleChange(l){const e=l.target;if(this.disabled){console.warn("[lmc-select] Change ignored: disabled.");return}this.value=e.value,console.log(`[lmc-select] Value changed: ${this.value}`),this.dispatchEvent(new CustomEvent("lmc-change",{detail:{value:this.value},bubbles:!0,composed:!0})),console.log("[lmc-select] lmc-change event dispatched."),this._updateValidityState(e)}_updateValidityState(l=(e=>(e=this.shadowRoot)==null?void 0:e.querySelector("select"))()){l?(this._invalid=!l.checkValidity(),this.toggleAttribute("invalid",this._invalid),console.log(`[lmc-select] Validity checked. Invalid: ${this._invalid}`)):(console.warn("[lmc-select] Could not find native select element for validity check."),this._invalid=!1,this.toggleAttribute("invalid",!1))}checkValidity(){return this._updateValidityState(),!this._invalid}reportValidity(){var e;const l=(e=this.shadowRoot)==null?void 0:e.querySelector("select");return l?(this._invalid=!l.reportValidity(),this.toggleAttribute("invalid",this._invalid),!this._invalid):!0}updated(l){super.updated(l),(l.has("value")||l.has("required"))&&this._updateValidityState()}render(){const l=!this.closest("lmc-form-field")&&this.label?this.label:void 0;return u`
      <select
        part="select"
        name=${s(this.name)}
        .value=${C(String(this.value??""))}
        ?disabled=${this.disabled}
        ?required=${this.required}
        aria-label=${s(l)}
        aria-invalid=${this._invalid?"true":"false"}
        @change=${this._handleChange}
      >
        ${G(this.options,e=>u`
          <option
            value=${e.value}
            ?disabled=${e.disabled??!1}
            .selected=${String(e.value)===String(this.value)}
          >
            ${e.label}
          </option>
        `)}
      </select>
    `}};b.styles=x`
    :host {
      display: block; width: 100%; position: relative; opacity: 1;
      cursor: default; color: var(--lmc-global-color-text-default);
      transition: opacity 0.2s ease;
    }
    :host([disabled]) { opacity: var(--lmc-global-disabled-opacity, 0.6); cursor: not-allowed; }
    select {
      display: block; box-sizing: border-box; width: 100%;
      padding: var(--lmc-select-padding, var(--lmc-input-padding, var(--lmc-global-spacing-xs, 0.4rem) 2.2rem var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-sm, 0.8rem)));
      border: var(--lmc-select-border, var(--lmc-input-border, var(--lmc-global-border-width, 1px) solid var(--lmc-global-color-border, #dee2e6)));
      border-radius: var(--lmc-select-border-radius, var(--lmc-input-border-radius, var(--lmc-global-border-radius-md, 0.375rem)));
      background-color: var(--lmc-select-background, var(--lmc-input-background, var(--lmc-global-color-background, #fff)));
      color: var(--lmc-select-color, var(--lmc-input-color, inherit));
      font-size: var(--lmc-select-font-size, inherit); font-family: inherit;
      line-height: var(--lmc-global-line-height-base, 1.5);
      appearance: none; -webkit-appearance: none; -moz-appearance: none;
      background-image: var(--lmc-select-arrow-image, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%236c757d' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"));
      background-repeat: no-repeat;
      background-position: right var(--lmc-global-spacing-sm, 0.8rem) center;
      background-size: 16px 12px; cursor: pointer;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.3s ease, color 0.3s ease;
    }
    select:focus {
      border-color: var(--lmc-select-focus-border-color, var(--lmc-global-color-primary, #86b7fe));
      outline: 0;
      box-shadow: var(--lmc-select-focus-box-shadow, 0 0 0 0.2rem color-mix(in srgb, var(--lmc-global-color-primary, blue) 25%, transparent));
    }
    select:disabled {
      background-color: var(--lmc-global-color-background-secondary, #e9ecef);
      cursor: not-allowed; background-image: none;
    }
    :host([invalid]) select, select:invalid {
      border-color: var(--lmc-select-invalid-border-color, var(--lmc-global-color-danger, #dc3545));
    }
    :host([invalid]) select:focus, select:invalid:focus {
      box-shadow: var(--lmc-select-invalid-focus-box-shadow, 0 0 0 0.2rem color-mix(in srgb, var(--lmc-global-color-danger, red) 25%, transparent));
    }
    option[value=""][disabled] { color: var(--lmc-global-color-text-muted, grey); }
  `;f([a({type:String})],b.prototype,"label",2);f([a({type:String})],b.prototype,"name",2);f([a({type:String})],b.prototype,"value",2);f([a({type:Array})],b.prototype,"options",2);f([a({type:Boolean,reflect:!0})],b.prototype,"disabled",2);f([a({type:Boolean,reflect:!0})],b.prototype,"required",2);f([_()],b.prototype,"_invalid",2);b=f([w("lmc-select")],b);var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,v=(l,e,r,t)=>{for(var o=t>1?void 0:t?Q(e,r):e,i=l.length-1,c;i>=0;i--)(c=l[i])&&(o=(t?c(e,r,o):c(o))||o);return t&&o&&J(e,r,o),o};let W=0,h=class extends k{constructor(){super(...arguments),this.label="",this.invalid=!1,this.required=!1,this._generatedId=`lmc-ff-${W++}`,this._controlId=""}_handleSlotChange(){const e=this._slottedElements.find(r=>r instanceof HTMLElement&&!r.hasAttribute("slot"));if(e){this._controlId=this.fieldId||this._generatedId,e.id||(e.id=this._controlId);const r=this.errorMessage||this.helpText?`msg-${this._controlId}`:void 0;r?(e.setAttribute("aria-describedby",r),e.setAttribute("aria-invalid",this.invalid?"true":"false")):(e.removeAttribute("aria-describedby"),e.removeAttribute("aria-invalid")),this.requestUpdate()}}render(){this._controlId=this.fieldId||this._generatedId;const l=this.errorMessage||this.helpText?`msg-${this._controlId}`:void 0;return u`
      <div class="form-field-container" part="container">
        ${this.label?u`
          <label for=${this._controlId} part="label">
            ${this.label}
            ${this.required?u`<span class="required-indicator" aria-hidden="true">*</span>`:E}
          </label>
        `:E}

        <div class="control-container" part="control">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>

        <div class="message-container" part="message" id=${s(l)}>
          ${this.invalid&&this.errorMessage?u`
            <span class="error-message" part="error-message">${this.errorMessage}</span>
          `:this.helpText?u`
            <span class="help-text" part="help-text">${this.helpText}</span>
          `:E}
        </div>
      </div>
    `}};h.styles=x`
    :host {
      display: block;
      margin-bottom: var(--lmc-form-field-margin-bottom, var(--lmc-global-spacing-md, 1rem));
    }

    label {
      display: inline-block; /* O block si se prefiere etiqueta encima siempre */
      color: var(--lmc-form-field-label-color, inherit);
      font-weight: var(--lmc-form-field-label-font-weight, bold);
      margin-bottom: var(--lmc-form-field-label-margin-bottom, var(--lmc-global-spacing-xs, 0.25rem));
      cursor: pointer; /* Indica que es clickeable (para asociar con input) */
    }

    .required-indicator {
      color: var(--lmc-form-field-required-color, var(--lmc-global-color-danger, red));
      margin-left: 0.25em;
      font-weight: normal; /* No tan fuerte como el label */
    }

    .control-container ::slotted(*) {
       /* Asegura que el control ocupe el ancho disponible si es un input/select/textarea común */
       /* Cuidado si se slotean checkboxes o radios */
       /* display: block; */
       /* width: 100%; */
    }

     /* Estilos para cuando el campo es inválido */
     :host([invalid]) label {
        color: var(--lmc-form-field-error-text-color, var(--lmc-global-color-danger, red));
     }
     /* Podríamos añadir un borde al control sloteado, pero es complejo sin ::part */
     /* :host([invalid]) .control-container ::slotted(lmc-input) {
         border-color: var(--lmc-form-field-error-text-color, var(--lmc-global-color-danger, red));
     } */


    .message-container {
      margin-top: var(--lmc-form-field-message-margin-top, var(--lmc-global-spacing-xs, 0.25rem));
      font-size: var(--lmc-form-field-message-font-size, var(--lmc-global-font-size-sm, 0.875em));
      min-height: 1.2em; /* Reserva espacio aunque no haya mensaje */
    }

    .help-text {
      color: var(--lmc-form-field-help-text-color, var(--lmc-global-color-muted, grey));
    }

    .error-message {
      color: var(--lmc-form-field-error-text-color, var(--lmc-global-color-danger, red));
      font-weight: var(--lmc-global-font-weight-base, 400); /* O bold si se prefiere */
    }
  `;v([a({type:String})],h.prototype,"label",2);v([a({type:String,attribute:"field-id"})],h.prototype,"fieldId",2);v([a({type:String,attribute:"help-text"})],h.prototype,"helpText",2);v([a({type:String,attribute:"error-message"})],h.prototype,"errorMessage",2);v([a({type:Boolean,reflect:!0})],h.prototype,"invalid",2);v([a({type:Boolean,reflect:!0})],h.prototype,"required",2);v([A({flatten:!0})],h.prototype,"_slottedElements",2);h=v([w("lmc-form-field")],h);var Z=Object.defineProperty,K=Object.getOwnPropertyDescriptor,q=(l,e,r,t)=>{for(var o=t>1?void 0:t?K(e,r):e,i=l.length-1,c;i>=0;i--)(c=l[i])&&(o=(t?c(e,r,o):c(o))||o);return t&&o&&Z(e,r,o),o};let O=class extends k{constructor(){super(...arguments),this._formData=null,this._formSubmitCount=0,this._queryTypeOptions=[{value:"",label:"-- Selecciona una opción --",disabled:!0},{value:"general",label:"Consulta General"},{value:"support",label:"Soporte Técnico"},{value:"sales",label:"Ventas"}],this._individualSelectOptions=[{value:"a",label:"Opción A"},{value:"b",label:"Opción B"},{value:"c",label:"Opción C"}]}_handleFormSubmit(l){console.log("[lmc-page-forms] _handleFormSubmit CAPTURADO (vía lmc-submit)!"),this._formSubmitCount++;const e=l.detail.formData;console.log("[lmc-page-forms] Raw FormData:",e);const r={};e.forEach((t,o)=>{Object.prototype.hasOwnProperty.call(r,o)?(Array.isArray(r[o])||(r[o]=[r[o]]),r[o].push(t)):r[o]=t}),Object.prototype.hasOwnProperty.call(r,"subscribe")?r.subscribe=r.subscribe==="on":r.subscribe=!1,this._formData=r,console.log("[lmc-page-forms] Form data processed (object):",this._formData)}_handleButtonClick(){console.log("[lmc-page-forms] Submit button clicked.");const l=this.renderRoot.querySelector("#contact-form");l&&typeof l.requestFormSubmit=="function"?(console.log("[lmc-page-forms] Calling formElement.requestFormSubmit()..."),l.requestFormSubmit()):(console.error('[lmc-page-forms] Could not find lmc-form element with id="contact-form" or its requestFormSubmit method.'),l?console.error("[lmc-page-forms] Found the element, but requestFormSubmit is not a function:",l):console.error("[lmc-page-forms] Element #contact-form NOT FOUND in renderRoot."))}render(){return console.log("[lmc-page-forms] Rendering..."),u`
      <lmc-container>
        <lmc-text-display level="h1">Formularios (Forms)</lmc-text-display>
        <lmc-text-display level="p">
            Demostración de los componentes para crear formularios: <code>lmc-form</code>,
            <code>lmc-form-field</code>, <code>lmc-input</code>, <code>lmc-textarea</code>,
            <code>lmc-checkbox</code>, y <code>lmc-select</code>.
        </lmc-text-display>

        <div class="demo-section">
          <h2>Ejemplo de Formulario Completo</h2>
          <lmc-text-display level="p">
              Este formulario utiliza <code>lmc-form</code> para agrupar los campos.
              El evento se maneja haciendo clic en el botón y llamando a un método del formulario.
              (Actualmente, el envío no muestra los datos visualmente debido a un problema pendiente).
          </lmc-text-display>

          <lmc-form id="contact-form" @lmc-submit=${this._handleFormSubmit}>
            <lmc-form-field label="Nombre Completo">
              <lmc-input name="fullName" placeholder="Ej: Ana García" required></lmc-input>
            </lmc-form-field>
            <lmc-form-field label="Correo Electrónico">
              <lmc-input name="email" type="email" placeholder="tu@correo.com" required></lmc-input>
            </lmc-form-field>
            <lmc-form-field label="Tipo de Consulta">
               <lmc-select name="queryType" required .options=${this._queryTypeOptions} .value=${""}></lmc-select>
            </lmc-form-field>
            <lmc-form-field label="Mensaje">
               <lmc-textarea name="message" rows="4" placeholder="Escribe tu mensaje aquí..."></lmc-textarea>
            </lmc-form-field>
            <lmc-form-field>
               <lmc-checkbox name="subscribe" label="Suscribirme al boletín"></lmc-checkbox>
            </lmc-form-field>
            <div class="submit-button-container">
               <lmc-basic-button appearance="primary" @lmc-click=${this._handleButtonClick}>
                 Enviar Formulario
               </lmc-basic-button>
             </div>
          </lmc-form>

          <!-- Sección de Datos Recibidos (se mostrará si el submit funcionara) -->
          ${this._formData?u`
            <h3 style="color: orange;">(DEBUG) Datos Recibidos (Submit #${this._formSubmitCount}):</h3>
            <pre><code>${JSON.stringify(this._formData,null,2)}</code></pre>
            <lmc-alert type="success" style="margin-top: 1rem; max-width: 600px; margin-inline: auto;">
                (DEBUG) ¡Evento submit capturado! Mira la consola para ver los datos crudos.
            </lmc-alert>
          `:""}
        </div>

        <!-- Sección de Controles Individuales -->
        <div class="demo-section">
             <h2>Controles Individuales</h2>
             <lmc-text-display level="p">
                 Ejemplos de los diferentes controles de formulario fuera de un <code>lmc-form</code>.
             </lmc-text-display>
             <div class="controls-showcase">
                 <lmc-form-field label="Input de Texto (disabled)"><lmc-input value="Valor fijo" disabled></lmc-input></lmc-form-field>
                 <lmc-form-field label="Input de Contraseña"><lmc-input type="password" placeholder="Introduce contraseña"></lmc-input></lmc-form-field>
                 <lmc-form-field label="Input Numérico"><lmc-input type="number" value="10"></lmc-input></lmc-form-field>
                 <lmc-form-field label="Textarea (readonly)"><lmc-textarea rows="3" readonly>Este texto no se puede editar.</lmc-textarea></lmc-form-field>
                 <lmc-form-field label="Checkbox (checked y disabled)"><lmc-checkbox checked disabled label="Opción inmutable"></lmc-checkbox></lmc-form-field>
                 <lmc-form-field label="Select (preseleccionado)"><lmc-select value="b" .options=${this._individualSelectOptions}></lmc-select></lmc-form-field>
             </div>
        </div>
      </lmc-container>
    `}};O.styles=x`
    /* --- ESTILOS COMPLETOS Y CORREGIDOS --- */
    lmc-form-field {
        display: block; /* Asegura que cada campo ocupe su línea */
        width: 100%; /* Opcional, pero ayuda a controlar */
        margin-bottom: var(--lmc-global-spacing-md, 1rem); /* Espacio estándar entre campos */
    }
    lmc-container { padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem); }
    h2 { margin-top: var(--lmc-global-spacing-xl, 3rem); margin-bottom: var(--lmc-global-spacing-md, 1rem); border-bottom: 1px solid var(--lmc-global-color-border, #eee); padding-bottom: var(--lmc-global-spacing-sm, 0.5rem); color: var(--lmc-global-color-text-default); }
    h2:first-of-type { margin-top: var(--lmc-global-spacing-lg, 2rem); }
    h3 { margin-top: var(--lmc-global-spacing-lg, 1.5rem); margin-bottom: var(--lmc-global-spacing-sm, 0.5rem); color: var(--lmc-global-color-text-muted); }
    .demo-section { margin-bottom: var(--lmc-global-spacing-xl, 3rem); }
    .controls-showcase {
        display: flex; flex-wrap: wrap; gap: var(--lmc-global-spacing-lg, 1.5rem);
        align-items: flex-start; padding: var(--lmc-global-spacing-md, 1rem);
        border: 1px dashed var(--lmc-global-color-border, #ccc);
        border-radius: var(--lmc-global-border-radius-md, 4px);
        background-color: var(--lmc-global-color-background-secondary, #f8f9fa);
        transition: background-color 0.3s ease, border-color 0.3s ease;
        margin-top: var(--lmc-global-spacing-md, 1rem);
    }
     .controls-showcase lmc-form-field {
         flex: 1 1 250px;
         min-width: 200px;
         margin-bottom: 0; /* Quitar margen inferior extra en showcase */
     }
    lmc-form {
        max-width: 600px;
        margin-left: auto; margin-right: auto; display: block;
    }
    /* Ya no se necesita la regla específica lmc-form lmc-form-field */
    /* Controles internos */
    lmc-form lmc-form-field > lmc-input,
    lmc-form lmc-form-field > lmc-textarea,
    lmc-form lmc-form-field > lmc-select {
        width: 100%; box-sizing: border-box;
    }
    .submit-button-container { text-align: right; margin-top: var(--lmc-global-spacing-lg, 1.5rem); }
    pre { background-color: var(--lmc-global-color-background-secondary); border: 1px solid var(--lmc-global-color-border); border-radius: var(--lmc-global-border-radius-md); padding: var(--lmc-global-spacing-md); overflow-x: auto; max-width: 600px; margin-left: auto; margin-right: auto; margin-top: var(--lmc-global-spacing-md); font-size: 0.9em; color: var(--lmc-global-color-text-default); transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; }
    code { background-color: var(--lmc-global-color-background-tertiary, #e9ecef); color: var(--lmc-global-color-text-default); padding: 0.15em 0.4em; border-radius: var(--lmc-global-border-radius-sm, 3px); font-size: 0.9em; transition: background-color 0.3s ease, color 0.3s ease; }
    lmc-text-display { color: var(--lmc-global-color-text-default); }
    lmc-text-display[level="p"]:first-of-type { color: var(--lmc-global-color-text-muted); }
  `;q([_()],O.prototype,"_formData",2);q([_()],O.prototype,"_formSubmitCount",2);O=q([w("lmc-page-forms")],O);export{O as LmcPageForms};
