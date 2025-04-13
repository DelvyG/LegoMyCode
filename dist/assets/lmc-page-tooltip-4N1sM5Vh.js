import{a as c,n as d,i as m,x as u,t as v}from"./main-TYaH_DXW.js";var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,r=(a,t,s,e)=>{for(var o=e>1?void 0:e?b(t,s):t,i=a.length-1,l;i>=0;i--)(l=a[i])&&(o=(e?l(t,s,o):l(o))||o);return e&&o&&h(t,s,o),o};let n=class extends m{constructor(){super(...arguments),this.text="",this.position="top"}render(){return u`
      <div class="content">
        <slot></slot>
      </div>
      <div class="tooltip">${this.text}</div>
    `}};n.styles=c`
    :host {
      position: relative;
      display: inline-block; /* Permite que el tooltip se posicione correctamente */
    }

    .tooltip {
      visibility: hidden;
      background-color: var(--lmc-tooltip-background-color, #333);
      color: var(--lmc-tooltip-text-color, #fff);
      text-align: center;
      padding: var(--lmc-tooltip-padding, 5px);
      border-radius: var(--lmc-tooltip-border-radius, 4px);
      font-size: var(--lmc-tooltip-font-size, 12px);
      position: absolute;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s;
      /* Posicionamiento por defecto (arriba) */
      bottom: 125%;
      left: 50%;
      margin-left: -50%;
    }

    :host(:hover) .tooltip {
      visibility: visible;
      opacity: 1;
    }

    /* Posiciones alternativas */
    :host([position="bottom"]) .tooltip {
      top: 125%;
      bottom: auto;
    }

    :host([position="left"]) .tooltip {
      right: 125%;
      left: auto;
      top: 50%;
      transform: translateY(-50%);
    }

    :host([position="right"]) .tooltip {
      left: 125%;
      right: auto;
      top: 50%;
      transform: translateY(-50%);
    }

    /* Contenido (lo que dispara el tooltip) */
    .content {
      display: inline-block; /* Para que el host se ajuste al tamaño del contenido */
    }
  `;r([d({type:String})],n.prototype,"text",2);r([d({type:String,reflect:!0})],n.prototype,"position",2);n=r([v("lmc-tooltip")],n);var f=Object.getOwnPropertyDescriptor,x=(a,t,s,e)=>{for(var o=e>1?void 0:e?f(t,s):t,i=a.length-1,l;i>=0;i--)(l=a[i])&&(o=l(o)||o);return o};let p=class extends m{render(){return u`
      <lmc-container>
        <h1>Demo de Tooltip</h1>
        <p>Esta página demuestra el uso y la personalización del componente <code>lmc-tooltip</code>.</p>

        <div class="tooltip-container">
          <h2>Tooltip Básico</h2>
          <lmc-tooltip text="Este es un tooltip básico.">
            <span>Pasa el ratón por encima</span>
          </lmc-tooltip>
        </div>

        <div class="tooltip-container">
          <h2>Tooltip con diferentes posiciones</h2>
          <lmc-tooltip text="Tooltip en la parte inferior" position="bottom">
            <span>Pasa el ratón por encima (abajo)</span>
          </lmc-tooltip>
          <lmc-tooltip text="Tooltip a la izquierda" position="left">
            <span>Pasa el ratón por encima (izquierda)</span>
          </lmc-tooltip>
          <lmc-tooltip text="Tooltip a la derecha" position="right">
            <span>Pasa el ratón por encima (derecha)</span>
          </lmc-tooltip>
        </div>

        <div class="tooltip-container">
          <h2>Tooltip con contenido HTML</h2>
          <lmc-tooltip text="¡Puedes usar HTML aquí! Como un icono: <lmc-icon name='info'></lmc-icon>">
            <span>Pasa el ratón para ver HTML</span>
          </lmc-tooltip>
        </div>

        <div class="tooltip-container">
          <h2>Tooltip con un Botón</h2>
           <lmc-tooltip text="Este es un tooltip para un botón">
            <lmc-basic-button>Botón con Tooltip</lmc-basic-button>
          </lmc-tooltip>
        </div>


        <div class="tooltip-container">
          <h2>Tooltip Personalizado (Variables CSS)</h2>
          <p>Este tooltip se personaliza usando variables CSS definidas en los estilos de este componente.</p>
          <lmc-tooltip class="custom-tooltip" text="¡Tooltip personalizado!">
            <span>Pasa el ratón para ver el estilo personalizado</span>
          </lmc-tooltip>
        </div>

        <div class="tooltip-container">
            <h2>Personalización Global del Tooltip</h2>
            <p>Todos los tooltips en esta página heredan los estilos globales (fondo verde, etc.) definidos en la parte superior de los estilos de este componente.</p>
            <lmc-tooltip text="Este hereda estilos globales.">
                <span>Pasa el ratón (Global)</span>
            </lmc-tooltip>
        </div>

      </lmc-container>
    `}};p.styles=c`
    .tooltip-container {
      margin-bottom: 20px;
    }

    /* Ejemplo de personalización global de tooltips */
    :host {
      --lmc-tooltip-background-color: #4CAF50; /* Verde */
      --lmc-tooltip-text-color: white;
      --lmc-tooltip-border-radius: 8px;
    }

    /* Ejemplo de personalización local (dentro de este componente) */
    .custom-tooltip {
      --lmc-tooltip-background-color: navy;
      --lmc-tooltip-text-color: yellow;
      --lmc-tooltip-padding: 10px;
      --lmc-tooltip-font-size: 14px;
    }
  `;p=x([v("lmc-page-tooltip")],p);export{p as LmcPageTooltip};
