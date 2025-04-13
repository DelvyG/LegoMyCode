import{a as p,n as s,o as x,i as b,x as h,t as u,r as f}from"./main-TYaH_DXW.js";import{u as v}from"./uuid-0wVnwF9e.js";var y=Object.defineProperty,_=Object.getOwnPropertyDescriptor,g=(c,o,a,r)=>{for(var e=r>1?void 0:r?_(o,a):o,i=c.length-1,t;i>=0;i--)(t=c[i])&&(e=(r?t(o,a,e):t(e))||e);return r&&e&&y(o,a,e),e};let d=class extends b{constructor(){super(...arguments),this.multiple=!1}connectedCallback(){super.connectedCallback(),this.addEventListener("lmc-toggle",this._handleItemToggle)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("lmc-toggle",this._handleItemToggle)}_handleItemToggle(c){const o=c.target;!this.multiple&&c.detail.open&&this._items.forEach(a=>{a!==o&&a.open&&(a.open=!1)})}render(){return h`
      <div class="container" role="presentation">
        <!-- Los lmc-accordion-item irán aquí -->
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `}_handleSlotChange(){this.requestUpdate()}};d.styles=p`
    :host {
      display: block;
      border: var(--lmc-accordion-border, none);
      border-radius: var(--lmc-accordion-border-radius, var(--lmc-global-border-radius-md, 4px));
      overflow: hidden; /* Si se aplica borde/radius al contenedor */
    }

    .container {
      display: flex;
      flex-direction: column;
      /* Aplicar gap si se define, para separar items */
      gap: var(--lmc-accordion-gap, 0);
    }

    /* Ajustes si usamos gap > 0: Los items no necesitan margen inferior */
    ::slotted(lmc-accordion-item) {
       margin-bottom: 0 !important; /* Sobrescribe posible margen por defecto del item */
    }

    /* Ajustes si no usamos gap (gap = 0, default): Colapsar bordes */
    :host([style*="--lmc-accordion-gap: 0"]) ::slotted(lmc-accordion-item:not(:first-child)),
    :host(:not([style*="--lmc-accordion-gap"])) ::slotted(lmc-accordion-item:not(:first-child)) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        /* Si los items tienen borde, podemos ocultar el borde superior para que colapsen */
         border-top: none;
    }
     :host([style*="--lmc-accordion-gap: 0"]) ::slotted(lmc-accordion-item:not(:last-child)),
     :host(:not([style*="--lmc-accordion-gap"])) ::slotted(lmc-accordion-item:not(:last-child)) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
     }
  `;g([s({type:Boolean,reflect:!0})],d.prototype,"multiple",2);g([x({slot:void 0,selector:"lmc-accordion-item"})],d.prototype,"_items",2);d=g([u("lmc-accordion")],d);var A=Object.defineProperty,k=Object.getOwnPropertyDescriptor,n=(c,o,a,r)=>{for(var e=r>1?void 0:r?k(o,a):o,i=c.length-1,t;i>=0;i--)(t=c[i])&&(e=(r?t(o,a,e):t(e))||e);return r&&e&&A(o,a,e),e};let l=class extends b{constructor(){super(...arguments),this.header="",this.open=!1,this.disabled=!1,this._headerId=`lmc-acc-header-${v()}`,this._contentId=`lmc-acc-content-${v()}`}_handleHeaderClick(){this.disabled||(this.open=!this.open,this.dispatchEvent(new CustomEvent("lmc-toggle",{detail:{open:this.open},bubbles:!0,composed:!0})))}render(){return h`
      <h3 part="header-container"> <!-- Añadido part para posible estilización externa del h3 -->
        <button
          id="${this._headerId}"
          class="header"
          part="header"
          @click=${this._handleHeaderClick}
          ?disabled=${this.disabled}
          aria-expanded="${this.open}"
          aria-controls="${this._contentId}"
          aria-disabled="${this.disabled}"
          role="button"
        >
          <slot name="header-prefix" part="header-prefix"></slot>
          <span class="header-text" part="header-text">${this.header}</span>
          <slot name="header-suffix" part="header-suffix">
              <lmc-icon
                 class="header-suffix-default-icon"
                 part="header-suffix-icon"
                 name="expand_more"
              ></lmc-icon>
          </slot>
        </button>
      </h3>

      <div
        id="${this._contentId}"
        class="content-wrapper"
        part="content-wrapper"
        role="region"
        aria-labelledby="${this._headerId}"
        ?hidden=${!this.open}
      >
          <div class="content" part="content">
              <div class="content-panel" part="content-panel">
                <slot></slot>
              </div>
          </div>
      </div>
    `}};l.styles=p`
    :host {
      display: block;
      /* Fallbacks globales */
      border: var(--lmc-accordion-item-border, 1px solid var(--lmc-global-color-border, #dee2e6));
      border-radius: var(--lmc-accordion-item-border-radius, var(--lmc-global-border-radius-md, 0.375rem));
      margin-bottom: var(--lmc-accordion-item-margin-bottom, 0);
      overflow: hidden;
      transition: margin 0.3s ease;
      /* Transición para el borde al cambiar tema */
      transition: border-color 0.3s ease;
    }

    /* Quitar borde superior si se usa gap=0 en lmc-accordion (manejado por lmc-accordion) */
    /* :host(:not(:first-child)) { ... }  <- Esta lógica ahora está en lmc-accordion.ts */

    .header {
      display: flex;
      align-items: center;
      width: 100%;
      /* Fallbacks globales */
      padding: var(--lmc-accordion-item-header-padding, var(--lmc-global-spacing-sm, 0.5rem) var(--lmc-global-spacing-md, 1rem));
      background-color: var(--lmc-accordion-item-header-background, var(--lmc-global-color-background-secondary, #f8f9fa));
      color: var(--lmc-accordion-item-header-color, var(--lmc-global-color-text-default, #212529));
      font-weight: var(--lmc-accordion-item-header-font-weight, bold);
      border: none;
      text-align: left;
      cursor: pointer;
      /* Transición suave para cambio de tema/hover */
      transition: background-color 0.2s ease, color 0.2s ease;
      gap: var(--lmc-global-spacing-sm, 0.5rem);
    }

    .header:hover:not([disabled]) {
      /* Fallback global */
      background-color: var(--lmc-accordion-item-header-hover-background, var(--lmc-global-color-background-tertiary, #e9ecef));
    }

    .header:focus-visible {
       /* Fallback global */
       outline: 2px solid var(--lmc-global-color-primary, blue);
       outline-offset: -2px;
    }

    :host([disabled]) .header {
      cursor: not-allowed;
      opacity: var(--lmc-accordion-item-header-disabled-opacity, 0.6);
      /* Evita que el hover cambie el fondo en estado disabled */
       background-color: var(--lmc-accordion-item-header-background, var(--lmc-global-color-background-secondary, #f8f9fa));
    }

    .header-text {
       flex-grow: 1;
    }

    .header-suffix-default-icon {
       display: inline-block; /* Necesario para transform */
       transition: var(--lmc-accordion-item-header-icon-transition, transform 0.3s ease);
       color: var(--lmc-accordion-item-header-icon-color, currentColor); /* Hereda color */
       line-height: 0; /* Ajuste vertical */
       /* Asegura que no se seleccione texto */
       user-select: none;
    }

    :host([open]) .header-suffix-default-icon {
        transform: rotate(180deg);
    }

    .content-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        transition: var(--lmc-accordion-item-content-transition, grid-template-rows 0.3s ease);
        /* Fallback global */
        background-color: var(--lmc-accordion-item-content-background, var(--lmc-global-color-background, #fff));
        /* Transición suave para cambio de tema */
        transition: background-color 0.3s ease, grid-template-rows 0.3s ease;
    }

    :host([open]) .content-wrapper {
        grid-template-rows: 1fr;
    }

    .content {
       overflow: hidden;
    }

    .content-panel {
       /* Fallback global */
       padding: var(--lmc-accordion-item-content-padding, var(--lmc-global-spacing-md, 1rem));
    }
  `;n([s({type:String})],l.prototype,"header",2);n([s({type:Boolean,reflect:!0})],l.prototype,"open",2);n([s({type:Boolean,reflect:!0})],l.prototype,"disabled",2);n([f()],l.prototype,"_headerId",2);n([f()],l.prototype,"_contentId",2);l=n([u("lmc-accordion-item")],l);var S=Object.getOwnPropertyDescriptor,w=(c,o,a,r)=>{for(var e=r>1?void 0:r?S(o,a):o,i=c.length-1,t;i>=0;i--)(t=c[i])&&(e=t(e)||e);return e};let m=class extends b{render(){return h`
      <lmc-container>
        <lmc-text-display level="h1">Acordeón (Accordion)</lmc-text-display>
        <lmc-text-display level="p">
          El componente Acordeón permite mostrar y ocultar secciones de contenido.
          Se compone de <code>lmc-accordion</code> (contenedor) y <code>lmc-accordion-item</code> (elementos individuales).
        </lmc-text-display>

        <!-- Sección de Demo 1: Acordeón Simple -->
        <div class="demo-section">
          <h2>Acordeón Simple (Solo uno abierto a la vez)</h2>
          <lmc-text-display level="p">
              Por defecto (sin el atributo <code>multiple</code>), solo un item puede estar abierto.
              Al abrir uno, los demás se cierran automáticamente.
          </lmc-text-display>
          <lmc-accordion>
            <lmc-accordion-item header="Sección 1: Introducción">
              <div class="item-content">
                <p>Este es el contenido de la primera sección. Puedes poner texto, imágenes, u otros componentes aquí.</p>
                <p>Observa cómo al abrir otra sección, esta se cerrará.</p>
              </div>
            </lmc-accordion-item>

            <lmc-accordion-item header="Sección 2: Características Principales" open> <!-- Empieza abierto -->
               <div class="item-content">
                <p>El acordeón es útil para FAQs, menús colapsables, etc.</p>
                <ul>
                    <li>Gestiona apertura/cierre</li>
                    <li>Accesible (ARIA attributes)</li>
                    <li>Personalizable con CSS Variables</li>
                </ul>
              </div>
            </lmc-accordion-item>

            <lmc-accordion-item header="Sección 3: Deshabilitado" disabled>
               <div class="item-content">
                   <p>Este contenido no debería ser visible porque el item está deshabilitado y no se puede abrir.</p>
               </div>
            </lmc-accordion-item>

             <lmc-accordion-item>
                 <!-- Usando el slot header-prefix y un header por defecto si no se pasa prop -->
                 <lmc-icon slot="header-prefix" name="info">git add .</lmc-icon>
                 <span slot="header">Sección 4: Con Prefijo y Header en Slot</span>
                 <div class="item-content">
                    <p>Se puede personalizar la cabecera usando los slots <code>header-prefix</code> y <code>header-suffix</code>, o incluso reemplazar todo el header con el slot <code>header</code>.</p>
                 </div>
            </lmc-accordion-item>

          </lmc-accordion>
        </div>


        <!-- Sección de Demo 2: Acordeón Múltiple -->
        <div class="demo-section">
          <h2>Acordeón Múltiple</h2>
          <lmc-text-display level="p">
              Usando el atributo <code>multiple</code> en <code>lmc-accordion</code>, se permite que varios items estén abiertos simultáneamente.
          </lmc-text-display>
           <lmc-accordion multiple>
              <lmc-accordion-item header="Item A">
                  <div class="item-content"><p>Contenido del item A.</p></div>
              </lmc-accordion-item>
              <lmc-accordion-item header="Item B" open>
                  <div class="item-content"><p>Contenido del item B (empieza abierto).</p></div>
              </lmc-accordion-item>
              <lmc-accordion-item header="Item C" open>
                  <div class="item-content"><p>Contenido del item C (también empieza abierto).</p></div>
              </lmc-accordion-item>
           </lmc-accordion>
        </div>

         <!-- Sección de Demo 3: Apariencia Personalizada -->
        <div class="demo-section">
          <h2>Acordeón con Apariencia Personalizada</h2>
          <lmc-text-display level="p">
              Se pueden sobrescribir las variables CSS para cambiar la apariencia.
          </lmc-text-display>
           <lmc-accordion class="custom-appearance-accordion">
              <lmc-accordion-item header="Estilo Personalizado 1">
                  <div class="item-content"><p>Este acordeón usa variables CSS específicas definidas en esta página.</p></div>
              </lmc-accordion-item>
              <lmc-accordion-item header="Estilo Personalizado 2">
                  <div class="item-content"><p>Observa el espacio entre items (gap) y los bordes/fondos diferentes.</p></div>
              </lmc-accordion-item>
           </lmc-accordion>
        </div>

      </lmc-container>
    `}};m.styles=p`
    lmc-container {
      padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem);
    }

    h2 {
      margin-bottom: var(--lmc-global-spacing-lg, 2rem);
      border-bottom: 1px solid var(--lmc-global-color-border, #eee);
      padding-bottom: var(--lmc-global-spacing-sm, 0.5rem);
    }

    .demo-section {
      margin-bottom: var(--lmc-global-spacing-xl, 3rem);
    }

    lmc-accordion {
       margin-top: var(--lmc-global-spacing-md, 1rem);
       /* Podemos añadir un max-width para que no sea demasiado ancho en pantallas grandes */
       max-width: 800px;
    }

    /* Ejemplo de personalización de un acordeón específico */
    .custom-appearance-accordion {
        --lmc-accordion-gap: 10px; /* Añade espacio entre items */
        --lmc-accordion-item-border: 1px dashed blue; /* Cambia borde de items */
        --lmc-accordion-item-header-background: lightblue;
        --lmc-accordion-item-header-hover-background: steelblue;
        --lmc-accordion-item-header-color: black;
        --lmc-accordion-item-header-icon-color: darkblue;
        --lmc-accordion-item-content-background: #e0f7ff;
    }

    /* Estilos para contenido dentro de un item */
     .item-content p {
         margin-top: 0;
         margin-bottom: var(--lmc-global-spacing-md, 1rem);
         line-height: 1.6;
     }
     .item-content code {
         background-color: var(--lmc-global-color-background-secondary, #f0f0f0);
         padding: 0.1em 0.3em;
         border-radius: var(--lmc-global-border-radius-sm, 2px);
     }

  `;m=w([u("lmc-page-accordion")],m);export{m as LmcPageAccordion};
