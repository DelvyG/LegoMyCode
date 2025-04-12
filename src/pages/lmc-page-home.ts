import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Importamos bloques necesarios para esta página
import '../blocks/lmc-container';
import '../blocks/lmc-text-display';
import '../blocks/lmc-basic-button';

@customElement('lmc-page-home')
export class LmcPageHome extends LitElement {
  static styles = css`
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
  `;

  render() {
    return html`
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
    `;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'lmc-page-home': LmcPageHome;
//   }
// }