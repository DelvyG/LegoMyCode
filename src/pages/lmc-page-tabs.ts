import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Importar bloques necesarios para la demo
import '../blocks/lmc-container';
import '../blocks/lmc-text-display';
import '../blocks/lmc-tab-group'; // El contenedor principal
import '../blocks/lmc-tab';       // Las pestañas clickeables
import '../blocks/lmc-tab-panel'; // Los paneles de contenido
import '../blocks/lmc-icon';      // Para iconos en las pestañas

/**
 * @element lmc-page-tabs
 * @description Página de demostración para el sistema de pestañas (Tabs).
 */
@customElement('lmc-page-tabs')
export class LmcPageTabs extends LitElement {

static styles = css`
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
`;




  render() {
    return html`
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
    `;
  }
}

// Declaración TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'lmc-page-tabs': LmcPageTabs;
  }
}