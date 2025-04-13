import{a as g,n as i,i as b,x as m,t as p}from"./index-DD_4F0BZ.js";var u=Object.defineProperty,v=Object.getOwnPropertyDescriptor,n=(c,a,d,r)=>{for(var e=r>1?void 0:r?v(a,d):a,o=c.length-1,l;o>=0;o--)(l=c[o])&&(e=(r?l(a,d,e):l(e))||e);return r&&e&&u(a,d,e),e};let s=class extends b{constructor(){super(...arguments),this.value=0,this.type="secondary"}render(){return m`${this.value}`}};s.styles=g`
    :host {
      display: inline-block;
      font-size: var(--lmc-badge-font-size, 0.75rem);
      padding: var(--lmc-badge-padding, 0.25rem 0.5rem);
      border-radius: var(--lmc-badge-border-radius, 0.25rem);
      color: var(--lmc-badge-color, #fff);
      background-color: var(--lmc-badge-background-color, #6c757d);
    }

    :host([type="primary"]) {
      background-color: var(--lmc-badge-primary-background-color, #007bff);
      color: var(--lmc-badge-primary-color, #fff);
    }

    :host([type="success"]) {
      background-color: var(--lmc-badge-success-background-color, #28a745);
      color: var(--lmc-badge-success-color, #fff);
    }

    :host([type="warning"]) {
      background-color: var(--lmc-badge-warning-background-color, #ffc107);
      color: var(--lmc-badge-warning-color, #212529);
    }

    :host([type="danger"]) {
      background-color: var(--lmc-badge-danger-background-color, #dc3545);
      color: var(--lmc-badge-danger-color, #fff);
    }
  `;n([i({type:Number})],s.prototype,"value",2);n([i({type:String,reflect:!0})],s.prototype,"type",2);s=n([p("lmc-badge")],s);var f=Object.getOwnPropertyDescriptor,y=(c,a,d,r)=>{for(var e=r>1?void 0:r?f(a,d):a,o=c.length-1,l;o>=0;o--)(l=c[o])&&(e=l(e)||e);return e};let t=class extends b{render(){return m`
      <lmc-container>
        <lmc-text-display level="h1">Demo de Badge</lmc-text-display>
        <lmc-text-display level="p">
          Esta página demuestra el uso y la personalización del componente <code>lmc-badge</code>.
        </lmc-text-display>

        <div class="badge-container">
          <h2>Badge Básico</h2>
          <lmc-badge value="10"></lmc-badge>
        </div>

        <div class="badge-container">
          <h2>Badge con diferentes tipos</h2>
          <lmc-badge type="primary"></lmc-badge>
          <lmc-badge type="secondary"></lmc-badge>
          <lmc-badge type="success"></lmc-badge>
          <lmc-badge type="warning"></lmc-badge>
          <lmc-badge type="danger"></lmc-badge>
        </div>

        <div class="badge-container">
          <h2>Badge Personalizado (Variables CSS)</h2>
          <p>Este badge se personaliza usando variables CSS definidas en los estilos de este componente.</p>
          <lmc-badge class="custom-badge" value="42"></lmc-badge>
        </div>

        <div class="badge-container">
            <h2>Global Tooltip Customization</h2>
            <p>Todos los badges en esta página heredan los estilos globales definidos en la parte superior de los estilos de este componente.</p>
            <lmc-badge value="1"  ></lmc-badge>
        </div>

      </lmc-container>
    `}};t.styles=g`
    .badge-container {
      margin-bottom: 20px;
    }

    /* Ejemplo de personalización global de badges */
    :host {
      --lmc-badge-font-size: 1rem;
      --lmc-badge-padding: 0.5rem 0.75rem;
    }

    /* Ejemplo de personalización local (dentro de este componente) */
    .custom-badge {
      --lmc-badge-background-color: purple;
      --lmc-badge-color: white;
      --lmc-badge-border-radius: 10px;
    }
  `;t=y([p("lmc-page-badge")],t);export{t as LmcPageBadge};
