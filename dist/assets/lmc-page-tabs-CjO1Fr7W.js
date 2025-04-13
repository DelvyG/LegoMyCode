import{a as b,n as i,r as y,o as x,i as m,x as g,t as u,b as P}from"./index-DD_4F0BZ.js";import{u as _}from"./uuid-0wVnwF9e.js";var C=Object.defineProperty,E=Object.getOwnPropertyDescriptor,p=(l,a,t,o)=>{for(var e=o>1?void 0:o?E(a,t):a,r=l.length-1,c;r>=0;r--)(c=l[r])&&(e=(o?c(a,t,e):c(e))||e);return o&&e&&C(a,t,e),e};let s=class extends m{connectedCallback(){super.connectedCallback(),this.addEventListener("lmc-tab-selected",this._handleTabSelected)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("lmc-tab-selected",this._handleTabSelected)}firstUpdated(l){var a,t;super.firstUpdated(l),this._initializeActiveTab(),console.log("[lmc-tab-group] Initialized. Tabs found:",((a=this._tabs)==null?void 0:a.length)??0,"Panels found:",((t=this._panels)==null?void 0:t.length)??0)}_initializeActiveTab(){if(!this._tabs||this._tabs.length===0||!this._panels||this._panels.length===0){console.warn("[lmc-tab-group] Initialization skipped: No tabs or panels found.");return}let l=this.initialTab;if(!l||!this._tabs.some(a=>a.controlsPanel===l&&!a.disabled)){const a=this._tabs.find(t=>!t.disabled);l=a==null?void 0:a.controlsPanel}if(!l){console.warn("[lmc-tab-group] No valid initial tab found to activate.");return}this._setActivePanel(l,!1)}_handleTabSelected(l){const a=l.detail.panelId;console.log(`[lmc-tab-group] Tab selected event received. Panel ID: ${a}`),this._setActivePanel(a)}_setActivePanel(l,a=!0){var t,o;!l||l===this._activePanelId||(console.log(`[lmc-tab-group] Setting active panel to: ${l}`),this._activePanelId=l,(t=this._tabs)==null||t.forEach(e=>{e.active=e.controlsPanel===l}),(o=this._panels)==null||o.forEach(e=>{e.active=e.id===l}),a&&(console.log(`[lmc-tab-group] Dispatching lmc-tab-change event. ID: ${l}`),this.dispatchEvent(new CustomEvent("lmc-tab-change",{detail:{activePanelId:l},bubbles:!0,composed:!0}))),this.requestUpdate())}render(){return g`
      <div class="tab-list" role="tablist" part="tab-list">
        <slot name="tabs"></slot>
         <!-- Escuchar cambios en el slot por defecto por si los tabs están ahí -->
         <slot @slotchange=${()=>this.requestUpdate()}></slot>
      </div>
      <div class="panels" part="panels">
        <slot name="panel"></slot>
         <!-- Escuchar cambios en el slot por defecto por si los paneles están ahí -->
         <slot @slotchange=${()=>this.requestUpdate()}></slot>
      </div>
    `}};s.styles=b`
    :host {
      display: block;
      color: var(--lmc-global-color-text-default);
      background-color: var(--lmc-global-color-background);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .tab-list {
      display: flex;
      flex-wrap: wrap;
      border-bottom: var(--lmc-tab-group-border-bottom, 1px solid var(--lmc-global-color-border, #ccc));
      gap: var(--lmc-tab-list-gap, 0);
      padding: 0;
      margin: 0;
      list-style: none;
      transition: border-color 0.3s ease;
    }

    .panels {
      /* Contenedor DIV para los paneles */
      /* !! CORREGIDO: Añadido padding-top generoso !! */
      padding-top: var(--lmc-panel-container-padding-top, var(--lmc-global-spacing-xl, 2.5rem)); /* 40px por defecto */
      /* Paddings horizontales e inferiores opcionales */
      padding-left: var(--lmc-panel-container-padding-x, 0);
      padding-right: var(--lmc-panel-container-padding-x, 0);
      padding-bottom: var(--lmc-panel-container-padding-bottom, 0);
      box-sizing: border-box;
    }

    /* CSS para controlar la visibilidad de los paneles sloteados */
    ::slotted(lmc-tab-panel) {
      display: none; /* Ocultar TODOS los paneles por defecto */
    }
    ::slotted(lmc-tab-panel[active]) {
      display: block; /* Mostrar SÓLO el que tenga el atributo 'active' */
    }
  `;p([i({type:String,attribute:"initial-tab"})],s.prototype,"initialTab",2);p([y()],s.prototype,"_activePanelId",2);p([x({selector:"lmc-tab",flatten:!0})],s.prototype,"_tabs",2);p([x({selector:"lmc-tab-panel",flatten:!0})],s.prototype,"_panels",2);s=p([u("lmc-tab-group")],s);var O=Object.defineProperty,D=Object.getOwnPropertyDescriptor,v=(l,a,t,o)=>{for(var e=o>1?void 0:o?D(a,t):a,r=l.length-1,c;r>=0;r--)(c=l[r])&&(e=(o?c(a,t,e):c(e))||e);return o&&e&&O(a,t,e),e};let n=class extends m{constructor(){super(...arguments),this.active=!1,this.disabled=!1,this._tabId=`lmc-tab-${_()}`}_handleClick(){if(console.log(`[lmc-tab] Clicked. ID: ${this._tabId}, Disabled: ${this.disabled}`),!this.disabled){if(console.log(`[lmc-tab] Dispatching lmc-tab-selected. controlsPanel value: '${this.controlsPanel}'`),this.controlsPanel===void 0||this.controlsPanel===null||this.controlsPanel===""){console.error(`[lmc-tab] ERROR: controlsPanel attribute/property is missing or empty on tab ${this._tabId}! Cannot select panel.`);return}this.dispatchEvent(new CustomEvent("lmc-tab-selected",{detail:{panelId:this.controlsPanel},bubbles:!0,composed:!0}))}}render(){return g`
      <button
        id=${this._tabId}
        role="tab"
        ?disabled=${this.disabled}
        aria-selected=${this.active?"true":"false"}
        aria-controls=${P(this.controlsPanel)}
        tabindex=${this.active?"0":"-1"}
        @click=${this._handleClick}
        part="button"
      >
        <slot name="prefix" part="prefix"></slot>
        <slot part="label"></slot> <!-- Slot por defecto para el label -->
        <slot name="suffix" part="suffix"></slot>
      </button>
    `}};n.styles=b`
    :host { display: inline-block; box-sizing: border-box; }
    button {
      display: inline-flex; align-items: center; justify-content: center;
      gap: var(--lmc-tab-gap, var(--lmc-global-spacing-xs, 0.4rem));
      font-family: inherit; font-size: inherit; font-weight: var(--lmc-tab-font-weight, inherit);
      padding: var(--lmc-tab-padding, var(--lmc-global-spacing-sm, 0.5rem) var(--lmc-global-spacing-md, 1rem));
      border: none; border-bottom: var(--lmc-tab-border-width-active, 2px) solid transparent;
      background-color: transparent;
      color: var(--lmc-tab-color, var(--lmc-global-color-text-muted, #6c757d));
      cursor: pointer; white-space: nowrap;
      transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
      margin-bottom: calc(-1 * var(--lmc-tab-border-width-active, 2px));
    }
    button:hover:not([disabled]) {
      background-color: var(--lmc-tab-hover-background, var(--lmc-global-color-background-secondary, #f8f9fa));
      color: var(--lmc-tab-color-active, var(--lmc-global-color-primary, blue));
    }
    button:focus-visible {
       outline: 2px solid var(--lmc-global-color-primary, blue);
       outline-offset: -2px;
       border-radius: var(--lmc-global-border-radius-sm, 3px);
    }
    :host([active]) button {
      color: var(--lmc-tab-color-active, var(--lmc-global-color-primary, blue));
      border-bottom-color: var(--lmc-tab-border-color-active, var(--lmc-global-color-primary, blue));
    }
    :host([disabled]) button {
      color: var(--lmc-tab-color-disabled, var(--lmc-global-color-text-muted, #6c757d));
      opacity: var(--lmc-global-disabled-opacity, 0.6); cursor: not-allowed;
    }
    :host([disabled]) button:hover { background-color: transparent; }
     ::slotted(*) { display: inline-flex; align-items: center; }
  `;v([i({type:Boolean,reflect:!0})],n.prototype,"active",2);v([i({type:Boolean,reflect:!0})],n.prototype,"disabled",2);v([i({type:String,attribute:"controls-panel"})],n.prototype,"controlsPanel",2);n=v([u("lmc-tab")],n);var A=Object.defineProperty,I=Object.getOwnPropertyDescriptor,f=(l,a,t,o)=>{for(var e=o>1?void 0:o?I(a,t):a,r=l.length-1,c;r>=0;r--)(c=l[r])&&(e=(o?c(a,t,e):c(e))||e);return o&&e&&A(a,t,e),e};let d=class extends m{constructor(){super(...arguments),this.active=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tabpanel"),this.hasAttribute("active")||(this.active=!1)}render(){return g`<slot></slot>`}};d.styles=b`
    :host {
      display: block; /* El padre controla si es 'none' o 'block' */
      box-sizing: border-box;
      color: var(--lmc-global-color-text-default);
      /* --- PADDING INTERNO APLICADO AQUÍ --- */
      padding: var(--lmc-tab-panel-padding, var(--lmc-global-spacing-lg, 1.5rem)); /* 24px por defecto en todos lados */
      /* Puedes ajustar los lados si quieres: */
      /* padding-top: var(--lmc-tab-panel-padding-top, var(--lmc-global-spacing-lg, 1.5rem)); */
      /* padding-bottom: var(--lmc-tab-panel-padding-bottom, var(--lmc-global-spacing-lg, 1.5rem)); */
      /* padding-left: var(--lmc-tab-panel-padding-x, var(--lmc-global-spacing-md, 1rem)); */
      /* padding-right: var(--lmc-tab-panel-padding-x, var(--lmc-global-spacing-md, 1rem)); */
      /* --- FIN PADDING --- */
    }

    :host([hidden]) { /* Asegurar ocultación si usamos atributo hidden */
        display: none;
    }
  `;f([i({type:Boolean,reflect:!0})],d.prototype,"active",2);f([i({type:String,reflect:!0})],d.prototype,"id",2);d=f([u("lmc-tab-panel")],d);var $=Object.getOwnPropertyDescriptor,S=(l,a,t,o)=>{for(var e=o>1?void 0:o?$(a,t):a,r=l.length-1,c;r>=0;r--)(c=l[r])&&(e=c(e)||e);return e};let h=class extends m{render(){return g`
      <lmc-container>
        <lmc-text-display level="h1">Pestañas (Tabs)</lmc-text-display>
        <lmc-text-display level="p">
          El sistema de pestañas permite mostrar diferentes paneles de contenido
          seleccionables a través de una lista de pestañas. Se compone de
          <code>lmc-tab-group</code>, <code>lmc-tab</code>, y <code>lmc-tab-panel</code>.
        </lmc-text-display>

        <!-- Sección de Ejemplo Básico -->
        <div class="demo-section">
          <h2>Ejemplo Básico</h2>
          <lmc-text-display level="p">
            Haz clic en las diferentes pestañas para mostrar su contenido asociado.
            El atributo <code>controls-panel</code> en <code>lmc-tab</code> debe coincidir
            con el atributo <code>id</code> del <code>lmc-tab-panel</code> correspondiente.
            La primera pestaña está activa por defecto (a menos que se especifique <code>active</code> en otra).
          </lmc-text-display>

          <lmc-tab-group aria-label="Ejemplo de Pestañas Básico">
              <!-- Lista de Pestañas -->
              <lmc-tab controls-panel="panel-1">Pestaña Uno</lmc-tab>
              <lmc-tab controls-panel="panel-2">Pestaña Dos</lmc-tab>
              <lmc-tab controls-panel="panel-3" disabled>Pestaña Tres (Deshab)</lmc-tab>
              <lmc-tab controls-panel="panel-4">Pestaña Cuatro</lmc-tab>

              <!-- Paneles de Contenido -->
              <lmc-tab-panel id="panel-1">
                  <h3>Contenido del Panel Uno</h3>
                  <p>Este es el contenido asociado a la primera pestaña. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </lmc-tab-panel>
              <lmc-tab-panel id="panel-2">
                  <h3>Contenido del Panel Dos</h3>
                  <p>Aquí va el contenido de la segunda pestaña. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              </lmc-tab-panel>
               <lmc-tab-panel id="panel-3">
                  <h3>Contenido del Panel Tres</h3>
                  <p>Este contenido no debería ser accesible inicialmente porque la pestaña está deshabilitada.</p>
              </lmc-tab-panel>
               <lmc-tab-panel id="panel-4">
                  <h3>Contenido del Panel Cuatro</h3>
                  <p>El último panel de ejemplo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                  <lmc-basic-button appearance="secondary">Botón de ejemplo</lmc-basic-button>
              </lmc-tab-panel>
          </lmc-tab-group>
        </div>

         <!-- Sección de Ejemplo con Iconos -->
        <div class="demo-section">
          <h2>Pestañas con Iconos</h2>
          <lmc-text-display level="p">
            Puedes añadir iconos (u otros elementos) a las pestañas usando los slots
            <code>prefix</code> o <code>suffix</code> dentro de <code>lmc-tab</code>.
          </lmc-text-display>

           <lmc-tab-group aria-label="Ejemplo de Pestañas con Iconos">
              <!-- Pestañas con Iconos -->
              <lmc-tab controls-panel="icon-panel-1">
                  <lmc-icon slot="prefix" name="home"></lmc-icon>
                  Inicio
              </lmc-tab>
              <lmc-tab controls-panel="icon-panel-2" active> <!-- Segunda activa por defecto -->
                   <lmc-icon slot="prefix" name="settings"></lmc-icon>
                   Configuración
              </lmc-tab>
               <lmc-tab controls-panel="icon-panel-3">
                   <lmc-icon slot="prefix" name="info"></lmc-icon>
                    Ayuda
              </lmc-tab>

              <!-- Paneles -->
              <lmc-tab-panel id="icon-panel-1">
                   <h3>Panel de Inicio</h3>
                   <p>Contenido de la sección de inicio.</p>
              </lmc-tab-panel>
              <lmc-tab-panel id="icon-panel-2">
                   <h3>Panel de Configuración</h3>
                   <p>Ajustes y preferencias irían aquí.</p>
                   <lmc-checkbox label="Activar opción X"></lmc-checkbox>
              </lmc-tab-panel>
               <lmc-tab-panel id="icon-panel-3">
                   <h3>Panel de Ayuda</h3>
                   <p>Información útil y FAQs.</p>
              </lmc-tab-panel>
          </lmc-tab-group>
        </div>

      </lmc-container>
    `}};h.styles=b`
    /* Estilos generales de la página */
    lmc-container { padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem); }
    h2 { margin-top: var(--lmc-global-spacing-xl, 3rem); margin-bottom: var(--lmc-global-spacing-md, 1rem); border-bottom: 1px solid var(--lmc-global-color-border, #eee); padding-bottom: var(--lmc-global-spacing-sm, 0.5rem); color: var(--lmc-global-color-text-default); }
    h2:first-of-type { margin-top: var(--lmc-global-spacing-lg, 2rem); }
    .demo-section { margin-bottom: var(--lmc-global-spacing-xl, 3rem); }
    code { background-color: var(--lmc-global-color-background-tertiary, #e9ecef); color: var(--lmc-global-color-text-default); padding: 0.15em 0.4em; border-radius: var(--lmc-global-border-radius-sm, 3px); font-size: 0.9em; transition: background-color 0.3s ease, color 0.3s ease; }
    lmc-text-display { color: var(--lmc-global-color-text-default); }
    lmc-text-display[level="p"]:first-of-type { color: var(--lmc-global-color-text-muted); }

    /* Estilos específicos para la demo de Tabs */
    lmc-tab-group {
        margin-top: var(--lmc-global-spacing-md, 1rem);
        /* Podríamos añadir un borde o fondo si quisiéramos enmarcar todo el grupo */
        /* border: 1px solid var(--lmc-global-color-border); */
        /* border-radius: var(--lmc-global-border-radius-md); */
    }

    /* Estilos para el contenido dentro de los paneles */
    lmc-tab-panel h3 {
        margin-top: 0; /* Quitar margen superior del primer título en el panel */
        color: var(--lmc-global-color-primary);
    }
    lmc-tab-panel p {
        line-height: 1.6;
        margin-bottom: var(--lmc-global-spacing-md, 1rem);
    }

    /* --- NUEVO CSS PARA CONTROLAR PANELES DESDE LA PÁGINA --- */

    /* Ocultar todos los paneles por defecto */
    lmc-tab-group lmc-tab-panel {
        display: none;
    }

    /* Mostrar solo el panel que tenga el atributo 'active' */
    lmc-tab-group lmc-tab-panel[active] {
        display: block;
    }
    /* --- FIN NUEVO CSS --- */
`;h=S([u("lmc-page-tabs")],h);export{h as LmcPageTabs};
