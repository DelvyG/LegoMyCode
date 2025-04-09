import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { uuid } from '../utils/uuid.ts';

/**
 * @element lmc-accordion-item
 * @description Un elemento individual colapsable dentro de un lmc-accordion.
 * Contiene una cabecera clickeable y un panel de contenido que se muestra/oculta.
 *
 * @prop {String} header - Texto principal que aparece en la cabecera. Requerido.
 * @prop {Boolean} open - Controla si el panel de contenido está abierto. Se refleja como atributo.
 * @prop {Boolean} disabled - Si es true, el item no se puede abrir/cerrar por interacción. Se refleja como atributo.
 *
 * @slot - El contenido principal que se muestra cuando el item está abierto.
 * @slot header-prefix - Contenido opcional para mostrar antes del texto del header (ej: icono).
 * @slot header-suffix - Contenido opcional para mostrar después del texto del header (ej: icono de flecha). Por defecto muestra una flecha.
 *
 * @cssprop [--lmc-accordion-item-border=1px solid var(--lmc-global-color-border, #ccc)] - Borde alrededor del item.
 * @cssprop [--lmc-accordion-item-border-radius=var(--lmc-global-border-radius-md, 4px)] - Radio del borde del item.
 * @cssprop [--lmc-accordion-item-margin-bottom=0] - Margen inferior del item (útil si el contenedor `lmc-accordion` no aplica gap).
 * @cssprop [--lmc-accordion-item-header-padding=var(--lmc-global-spacing-sm, 0.5rem) var(--lmc-global-spacing-md, 1rem)] - Padding de la cabecera.
 * @cssprop [--lmc-accordion-item-header-background=var(--lmc-global-color-background-secondary, #f8f9fa)] - Color de fondo de la cabecera.
 * @cssprop [--lmc-accordion-item-header-color=var(--lmc-global-color-text-default, #212529)] - Color del texto de la cabecera.
 * @cssprop [--lmc-accordion-item-header-font-weight=bold] - Peso de la fuente de la cabecera.
 * @cssprop [--lmc-accordion-item-header-hover-background=var(--lmc-global-color-background-tertiary, #e9ecef)] - Color de fondo de la cabecera al pasar el ratón (si no está deshabilitado).
 * @cssprop [--lmc-accordion-item-header-disabled-opacity=0.6] - Opacidad de la cabecera cuando está deshabilitada.
 * @cssprop [--lmc-accordion-item-header-icon-color=currentColor] - Color del icono de flecha por defecto.
 * @cssprop [--lmc-accordion-item-header-icon-transition=transform 0.3s ease] - Transición para la rotación del icono.
 * @cssprop [--lmc-accordion-item-content-padding=var(--lmc-global-spacing-md, 1rem)] - Padding del panel de contenido.
 * @cssprop [--lmc-accordion-item-content-background=var(--lmc-global-color-background, #fff)] - Color de fondo del panel de contenido.
 * @cssprop [--lmc-accordion-item-content-transition=grid-template-rows 0.3s ease] - Transición para el despliegue del contenido.
 *
 * @fires lmc-toggle - Se dispara cuando el estado 'open' cambia debido a la interacción del usuario. `detail: { open: boolean }`.
 *
 * @version 1.0.0
 * @author LegoMyCode Team
 */
@customElement('lmc-accordion-item')
export class LmcAccordionItem extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: var(--lmc-accordion-item-border, 1px solid var(--lmc-global-color-border, #ccc));
      border-radius: var(--lmc-accordion-item-border-radius, var(--lmc-global-border-radius-md, 4px));
      margin-bottom: var(--lmc-accordion-item-margin-bottom, 0);
      overflow: hidden; /* Asegura que el contenido no se desborde durante la transición */
      transition: margin 0.3s ease; /* Si el gap se gestiona con margen */
    }

    /* Ocultar borde superior si no es el primer item (cuando lmc-accordion gestiona bordes/gap) */
    :host(:not(:first-child)) {
        border-top: none; /* Considerar si el contenedor lmc-accordion se encarga */
    }

    .header {
      display: flex;
      align-items: center;
      width: 100%;
      padding: var(--lmc-accordion-item-header-padding, var(--lmc-global-spacing-sm, 0.5rem) var(--lmc-global-spacing-md, 1rem));
      background-color: var(--lmc-accordion-item-header-background, var(--lmc-global-color-background-secondary, #f8f9fa));
      color: var(--lmc-accordion-item-header-color, var(--lmc-global-color-text-default, #212529));
      font-weight: var(--lmc-accordion-item-header-font-weight, bold);
      border: none; /* Es un botón, quitamos borde por defecto */
      text-align: left;
      cursor: pointer;
      transition: background-color 0.2s ease;
      gap: var(--lmc-global-spacing-sm, 0.5rem); /* Espacio entre slots y texto */
    }

    .header:hover:not([disabled]) {
      background-color: var(--lmc-accordion-item-header-hover-background, var(--lmc-global-color-background-tertiary, #e9ecef));
    }

    .header:focus-visible {
       outline: 2px solid var(--lmc-global-color-primary, blue);
       outline-offset: -2px; /* Hacia adentro */
    }


    :host([disabled]) .header {
      cursor: not-allowed;
      opacity: var(--lmc-accordion-item-header-disabled-opacity, 0.6);
      background-color: var(--lmc-accordion-item-header-background, var(--lmc-global-color-background-secondary, #f8f9fa)); /* Evita hover en disabled */
    }

    .header-text {
       flex-grow: 1; /* Empuja el sufijo a la derecha */
    }

    .header-suffix-default-icon {
       display: inline-block;
       transition: var(--lmc-accordion-item-header-icon-transition, transform 0.3s ease);
       color: var(--lmc-accordion-item-header-icon-color, currentColor);
       line-height: 0; /* Ajusta para que el icono no afecte la altura */
    }

    :host([open]) .header-suffix-default-icon {
        transform: rotate(180deg);
    }


    .content-wrapper {
        display: grid;
        /* Truco para animación suave: 0fr (oculto) a 1fr (visible) */
        grid-template-rows: 0fr;
        transition: var(--lmc-accordion-item-content-transition, grid-template-rows 0.3s ease);
        background-color: var(--lmc-accordion-item-content-background, var(--lmc-global-color-background, #fff));
    }

    :host([open]) .content-wrapper {
        grid-template-rows: 1fr;
    }

    /* El contenido interno necesita overflow: hidden para que funcione el truco de grid */
    .content {
       overflow: hidden;
    }

    /* El panel con padding se coloca dentro del .content */
     .content-panel {
       padding: var(--lmc-accordion-item-content-padding, var(--lmc-global-spacing-md, 1rem));
     }

  `;

  @property({ type: String })
  header = '';

  @property({ type: Boolean, reflect: true })
  open = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  // IDs únicos para ARIA (generados una vez)
  @state() private _headerId = `lmc-acc-header-${uuid()}`;
  @state() private _contentId = `lmc-acc-content-${uuid()}`;


  private _handleHeaderClick() {
    if (this.disabled) {
      return;
    }
    this.open = !this.open;

    this.dispatchEvent(new CustomEvent('lmc-toggle', {
      detail: { open: this.open },
      bubbles: true, // Permite al contenedor padre (lmc-accordion) escucharlo
      composed: true // Cruza límites del Shadow DOM
    }));
  }

  render() {
    return html`
      <h3> <!-- Usamos h3 como base para la cabecera por semántica -->
        <button
          id="${this._headerId}"
          class="header"
          @click=${this._handleHeaderClick}
          ?disabled=${this.disabled}
          aria-expanded="${this.open}"
          aria-controls="${this._contentId}"
          aria-disabled="${this.disabled}"
          role="button"
        >
          <slot name="header-prefix"></slot>
          <span class="header-text">${this.header}</span>
          <slot name="header-suffix">
              <!-- Icono de flecha por defecto si no se provee slot -->
              <lmc-icon class="header-suffix-default-icon" name="expand_more"></lmc-icon>
          </slot>
        </button>
      </h3>

      <div
        id="${this._contentId}"
        class="content-wrapper"
        role="region"
        aria-labelledby="${this._headerId}"
        ?hidden=${!this.open}
      >
          <div class="content">
              <div class="content-panel">
                <slot></slot>
              </div>
          </div>
      </div>
    `;
  }
}

// --- Helper Function: UUID ---
// Necesitamos crear esta utilidad si no existe ya
// Crea un archivo src/utils/uuid.ts y pon esto dentro:
/*
export function uuid(): string {
  return window.crypto?.randomUUID?.() ?? // Usa la API nativa si está disponible
         Date.now().toString(36) + Math.random().toString(36).substring(2); // Fallback simple
}
*/
// Y asegúrate de importar arriba: import { uuid } from '../utils/uuid';

// --- Icon Dependency ---
// Este componente usa lmc-icon para la flecha por defecto.
// Asegúrate de que lmc-icon esté disponible/importado en tu aplicación (ya lo está en lmc-app-shell).

// --- TypeScript Declaration (Opcional si tu tsconfig está bien configurado) ---
// declare global {
//   interface HTMLElementTagNameMap {
//     'lmc-accordion-item': LmcAccordionItem;
//   }
// }