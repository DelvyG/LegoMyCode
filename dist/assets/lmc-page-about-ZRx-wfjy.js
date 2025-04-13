import{i as n,x as s,a as m,t as p}from"./index-DD_4F0BZ.js";var d=Object.getOwnPropertyDescriptor,g=(e,l,c,r)=>{for(var a=r>1?void 0:r?d(l,c):l,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=i(a)||a);return a};let t=class extends n{render(){return s`
      <lmc-container>

        <lmc-text-display level="h1">¿Qué es LegoMyCode?</lmc-text-display>

        <lmc-text-display level="p" class="intro-paragraph">
          LegoMyCode es una exploración hacia una nueva forma de construir interfaces web:
          modular, intuitiva y potenciada por la colaboración con Inteligencia Artificial.
        </lmc-text-display>

        <lmc-text-display level="h2">La Esencia: Construir con "Legos"</lmc-text-display>
        <lmc-text-display level="p">
          Imagina construir una web como si armaras figuras con piezas de Lego. Cada "Lego"
          en nuestro sistema es un <strong>Bloque</strong> (un Web Component autocontenido:
          <code><lmc-nombre-bloque></code>) que encapsula su propia estructura (HTML),
          apariencia (CSS) y comportamiento (JavaScript).
        </lmc-text-display>
        <lmc-text-display level="p">
          Estos bloques están diseñados para encajar unos con otros (componibilidad) y
          ser fácilmente adaptables (personalización) sin necesidad de modificar su
          código interno.
        </lmc-text-display>

        <lmc-text-display level="h2">Objetivo: IA como Co-piloto</lmc-text-display>
        <lmc-text-display level="p">
          El gran objetivo es que una Inteligencia Artificial pueda entender estos bloques
          y ayudarte a construir interfaces complejas simplemente describiendo lo que
          necesitas en lenguaje natural. LegoMyCode proporciona la estructura y las
          convenciones claras (el "Block Schema") para que la IA pueda generar el código
          HTML correspondiente de forma eficiente y correcta.
        </lmc-text-display>

        <lmc-text-display level="h2">Principios Fundamentales</lmc-text-display>
        <ul>
          <li><strong>Modularidad:</strong> Piezas independientes y reutilizables.</li>
          <li><strong>Encapsulación:</strong> Estilos y lógica contenidos (Shadow DOM).</li>
          <li><strong>Componibilidad:</strong> Bloques que se anidan para crear UIs complejas.</li>
          <li><strong>Personalización:</strong> Adaptación vía Atributos, Slots y Variables CSS.</li>
          <li><strong>Simplicidad para IA:</strong> Diseño claro para generación automática.</li>
          <li><strong>Basado en Estándares Web:</strong> Prioridad a Web Components nativos y Lit.</li>
        </ul>

        <lmc-text-display level="h2">¿Cómo Funciona?</lmc-text-display>
        <lmc-text-display level="p">
          Utilizamos tecnologías web estándar como Web Components y la librería Lit para
          crear los bloques <code>lmc-*</code>. Cada bloque expone una API clara:
          atributos para configuración, slots para contenido personalizado y variables CSS
          para ajustar la apariencia. El sistema de tematización global permite una
          apariencia consistente y adaptable (¡prueba el modo oscuro!).
        </lmc-text-display>

        <div class="cta-section">
           <lmc-basic-button appearance="primary" href="/buttons">
                Explorar Bloques
           </lmc-basic-button>
                 
<lmc-basic-button appearance="secondary" href=${"https://github.com/DelvyG/LegoMyCode"} target="_blank">
       <lmc-icon slot="prefix" name=${"code"}></lmc-icon>
        Ver en GitHub
   </lmc-basic-button>

    
        </div>

      </lmc-container>
    `}};t.styles=m`
    :host {
      display: block;
    }

    lmc-container {
      padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem);
    }

    lmc-text-display[level="h1"] {
      text-align: center;
      margin-bottom: var(--lmc-global-spacing-lg, 1.5rem);
      color: var(--lmc-global-color-primary);
    }

    lmc-text-display[level="h2"] {
      margin-top: var(--lmc-global-spacing-xl, 2.5rem);
      margin-bottom: var(--lmc-global-spacing-md, 1rem);
      border-bottom: 1px solid var(--lmc-global-color-border);
      padding-bottom: var(--lmc-global-spacing-xs, 0.25rem);
      /* Asegura que el color del texto se adapte al tema */
      color: var(--lmc-global-color-text-default);
    }
    /* Ajuste para el primer h2 */
     lmc-text-display[level="h2"]:first-of-type {
         margin-top: var(--lmc-global-spacing-lg, 1.5rem);
     }


    lmc-text-display[level="p"], ul {
      max-width: 75ch;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: var(--lmc-global-spacing-md, 1rem);
      line-height: 1.7;
      /* Asegura que el color del texto se adapte al tema */
      color: var(--lmc-global-color-text-default);
    }

     .intro-paragraph {
         text-align: center;
         font-size: 1.1em;
         /* Usa color muted para el párrafo introductorio */
         color: var(--lmc-global-color-text-muted);
     }

    ul {
      list-style: none;
      padding-left: var(--lmc-global-spacing-md, 1rem);
    }
    li {
      position: relative;
      padding-left: var(--lmc-global-spacing-lg, 1.5rem);
      margin-bottom: var(--lmc-global-spacing-sm, 0.5rem);
       /* Asegura que el color del texto se adapte al tema */
      color: var(--lmc-global-color-text-muted); /* Color base para la descripción */
    }
    li::before {
      content: '🧱';
      position: absolute;
      left: 0;
      top: 0.1em;
      color: var(--lmc-global-color-primary);
      font-size: 1em;
    }
    li strong {
        color: var(--lmc-global-color-text-default); /* Color normal para el título */
    }

    .cta-section {
        text-align: center;
        margin-top: var(--lmc-global-spacing-xl, 2.5rem);
        padding-top: var(--lmc-global-spacing-lg, 1.5rem);
        border-top: 1px dashed var(--lmc-global-color-border);
    }
    .cta-section lmc-basic-button {
        margin: 0 var(--lmc-global-spacing-sm, 0.5rem);
    }

    code {
      background-color: var(--lmc-global-color-background-tertiary, #e9ecef);
      color: var(--lmc-global-color-text-default); /* Asegura que el texto sea visible */
      padding: 0.15em 0.4em;
      border-radius: var(--lmc-global-border-radius-sm, 3px);
      font-size: 0.9em;
    }
  `;t=g([p("lmc-page-about")],t);export{t as LmcPageAbout};
