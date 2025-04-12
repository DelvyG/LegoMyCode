import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js'; // Añadir state para demo interactiva

// Importar bloques necesarios para la demo
import '../blocks/lmc-container';
import '../blocks/lmc-text-display';
import '../blocks/lmc-basic-button'; // El componente a demostrar
import '../blocks/lmc-icon';           // Para los iconos en los botones

@customElement('lmc-page-buttons')
export class LmcPageButtons extends LitElement {
  // Estado para la demo interactiva de eventos
  @state() private _clickCount = 0;

  static styles = css`
    /* Estilos generales de la página */
    lmc-container {
      padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem);
    }

    h2 {
      margin-top: var(--lmc-global-spacing-xl, 3rem);
      margin-bottom: var(--lmc-global-spacing-md, 1rem);
      border-bottom: 1px solid var(--lmc-global-color-border, #eee);
      padding-bottom: var(--lmc-global-spacing-sm, 0.5rem);
    }
    h2:first-of-type {
        margin-top: var(--lmc-global-spacing-lg, 2rem); /* Menos espacio para el primer título */
    }

    .demo-section {
      margin-bottom: var(--lmc-global-spacing-lg, 2rem);
    }

    /* Contenedor para mostrar varios botones juntos */
    .button-showcase {
      display: flex;
      flex-wrap: wrap; /* Permite que los botones pasen a la siguiente línea */
      gap: var(--lmc-global-spacing-md, 1rem); /* Espacio entre botones */
      align-items: center; /* Alinea botones verticalmente si tienen diferentes alturas */
      padding: var(--lmc-global-spacing-md, 1rem);
      border: 1px dashed var(--lmc-global-color-border, #ccc); /* Borde para visualizar el área */
      border-radius: var(--lmc-global-border-radius-md, 4px);
      background-color: var(--lmc-global-color-background-secondary, #f8f9fa); /* Fondo sutil */
    }




    
    code {
      background-color: var(--lmc-global-color-background-tertiary, #e9ecef);
      padding: 0.15em 0.4em;
      border-radius: var(--lmc-global-border-radius-sm, 3px);
      font-size: 0.9em;
    }

     .click-counter {
         font-weight: bold;
         color: var(--lmc-global-color-primary);
         margin-left: 1em;
     }
  `;

  private _handleDemoClick() {
    this._clickCount++;
    console.log('Botón de demostración clickeado!');
  }

  render() {
    return html`
      <lmc-container>
        <lmc-text-display level="h1">Botón Básico (lmc-basic-button)</lmc-text-display>
        <lmc-text-display level="p">
          El componente <code>lmc-basic-button</code> es un botón versátil con diferentes apariencias,
          soporte para iconos, estado deshabilitado y capacidad de actuar como enlace.
        </lmc-text-display>

        <!-- Apariencias -->
        <div class="demo-section">
          <h2>Apariencias (Appearance)</h2>
          <lmc-text-display level="p">
            Usa el atributo <code>appearance</code> para cambiar el estilo visual:
            <code>primary</code>, <code>secondary</code> (defecto), <code>ghost</code>.
          </lmc-text-display>
          <div class="button-showcase">
            <lmc-basic-button appearance="primary">Primario</lmc-basic-button>
            <lmc-basic-button appearance="secondary">Secundario</lmc-basic-button>
            <lmc-basic-button appearance="ghost">Fantasma (Ghost)</lmc-basic-button>
          </div>
        </div>

        <!-- Estado Deshabilitado -->
        <div class="demo-section">
          <h2>Estado Deshabilitado (Disabled)</h2>
          <lmc-text-display level="p">
            Añade el atributo booleano <code>disabled</code> para deshabilitar el botón.
          </lmc-text-display>
          <div class="button-showcase">
            <lmc-basic-button appearance="primary" disabled>Primario Deshabilitado</lmc-basic-button>
            <lmc-basic-button disabled>Secundario Deshabilitado</lmc-basic-button>
            <lmc-basic-button appearance="ghost" disabled>Ghost Deshabilitado</lmc-basic-button>
          </div>
        </div>

        <!-- Con Iconos -->
        <div class="demo-section">
          <h2>Con Iconos (Slots)</h2>
          <lmc-text-display level="p">
            Usa los slots <code>prefix</code> y <code>suffix</code> para añadir iconos (u otros elementos)
            antes o después del texto del botón.
          </lmc-text-display>
          <div class="button-showcase">
            <lmc-basic-button appearance="primary">
              <lmc-icon slot="prefix" name="add_circle"></lmc-icon>
              Añadir
            </lmc-basic-button>
            <lmc-basic-button appearance="secondary">
              Editar
              <lmc-icon slot="suffix" name="edit"></lmc-icon>
            </lmc-basic-button>
             <lmc-basic-button appearance="ghost">
              <lmc-icon slot="prefix" name="delete"></lmc-icon>
              Eliminar
            </lmc-basic-button>
             <lmc-basic-button appearance="secondary" title="Solo icono (con tooltip)">
               <lmc-icon slot="prefix" name="settings"></lmc-icon>
            </lmc-basic-button>
          </div>
        </div>

        <!-- Como Enlace -->
        <div class="demo-section">
          <h2>Como Enlace (href)</h2>
          <lmc-text-display level="p">
            Si proporcionas el atributo <code>href</code>, el botón se renderizará como un enlace
            (<code><a></a></code>) pero manteniendo la apariencia de botón. Usa <code>target="_blank"</code>
            para abrir en nueva pestaña.
          </lmc-text-display>
          <div class="button-showcase">
            <lmc-basic-button appearance="primary" href="https://github.com/DelvyG/LegoMyCode" target="_blank">
              Ver en GitHub
              <lmc-icon slot="suffix" name="open_in_new"></lmc-icon>
            </lmc-basic-button>
             <lmc-basic-button appearance="secondary" href="/">
              Ir a Home (Interno)
            </lmc-basic-button>
          </div>
        </div>

        <!-- Evento Click -->
        <div class="demo-section">
          <h2>Evento <code>lmc-click</code></h2>
          <lmc-text-display level="p">
            El botón emite un evento <code>lmc-click</code> cuando se hace clic en él (y no está deshabilitado).
            Puedes escucharlo con <code>@lmc-click</code>.
          </lmc-text-display>
          <div class="button-showcase">
             <lmc-basic-button appearance="primary" @lmc-click=${this._handleDemoClick}>
                Haz Clic Aquí
            </lmc-basic-button>
             <span class="click-counter">Veces clickeado: ${this._clickCount}</span>
          </div>
        </div>

         <!-- Personalización CSS -->
        <div class="demo-section">
          <h2>Personalización con Variables CSS</h2>
          <lmc-text-display level="p">
            Puedes sobrescribir las variables CSS del botón para una personalización más profunda.
          </lmc-text-display>
          <div class="button-showcase">
             <lmc-basic-button
                appearance="primary"
                style="--lmc-button-primary-bg-color: darkorange; --lmc-button-border-radius: 20px; --lmc-button-padding: 0.5em 2em;"
             >
                Botón Muy Naranja y Redondo
            </lmc-basic-button>
              <lmc-basic-button
                appearance="secondary"
                style="--lmc-button-secondary-border-color: green; --lmc-button-secondary-text-color: green; --lmc-button-border-width: 2px;"
             >
                Borde Verde
            </lmc-basic-button>
          </div>
        </div>

      </lmc-container>
    `;
  }
}