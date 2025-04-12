import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Importar bloques necesarios para la demo
import '../blocks/lmc-container';
import '../blocks/lmc-text-display';
import '../blocks/lmc-accordion';      // Importar el contenedor del acordeón
import '../blocks/lmc-accordion-item'; // Importar el item del acordeón
import '../blocks/lmc-icon';           // Importar icono si queremos usarlo en slots

@customElement('lmc-page-accordion')
export class LmcPageAccordion extends LitElement {
  static styles = css`
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

  `;

  render() {
    return html`
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
    `;
  }
}