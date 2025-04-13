import{i as c,x as s,a as m,t as p}from"./index-DD_4F0BZ.js";var d=Object.getOwnPropertyDescriptor,g=(o,l,i,r)=>{for(var e=r>1?void 0:r?d(l,i):l,a=o.length-1,t;a>=0;a--)(t=o[a])&&(e=t(e)||e);return e};let n=class extends c{render(){return s`
      <lmc-container>
        <lmc-text-display level="h1">Bienvenido a LegoMyCode</lmc-text-display>
        <p>
          LegoMyCode es un proyecto para explorar una nueva forma de crear interfaces web
          utilizando componentes modulares y autocontenidos ("Legos").
          Está diseñado pensando en la colaboración con Inteligencia Artificial,
          facilitando la generación y composición de UIs complejas a partir de
          instrucciones en lenguaje natural.
        </p>
        <p>
          Navega por las diferentes secciones para ver demostraciones de los
          bloques disponibles. ¡Esta propia página está construida con ellos!
        </p>
        <div class="button-container">
            <!-- Podríamos enlazar a una página "Get Started" o "Components" en el futuro -->
             <lmc-basic-button appearance="primary" href="/components">
                Explorar Componentes (Próximamente)
            </lmc-basic-button>
             <lmc-basic-button appearance="secondary" href="https://github.com/DelvyG/LegoMyCode" target="_blank">
                Ver en GitHub
            </lmc-basic-button>
        </div>

      </lmc-container>
    `}};n.styles=m`
    lmc-container {
      padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem);
      text-align: center;
    }

    lmc-text-display[level="h1"] {
      color: var(--lmc-global-color-primary, blue);
      margin-bottom: var(--lmc-global-spacing-md, 1rem);
    }

    p {
        max-width: 70ch; /* Limita el ancho de línea para mejor legibilidad */
        margin: 0 auto var(--lmc-global-spacing-lg, 2rem) auto;
        line-height: 1.6;
    }

    .button-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Permite que los botones se envuelvan a la siguiente línea */
    gap: var(--lmc-global-spacing-md, 1rem);
}
  `;n=g([p("lmc-page-home")],n);export{n as LmcPageHome};
