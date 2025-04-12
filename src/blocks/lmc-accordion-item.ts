import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
// Asumiendo que uuid.ts está en src/utils/
// Si moviste uuid.ts a otra ubicación, ajusta la ruta
import { uuid } from '../utils/uuid';

/**
 * @element lmc-accordion-item
 * @description Un elemento individual colapsable dentro de un lmc-accordion.
 * Contiene una cabecera clickeable y un panel de contenido que se muestra/oculta.
 * @version 1.1.0 - Usa fallbacks globales para tematización.
 *
 * @prop {String} header - Texto principal que aparece en la cabecera. Requerido.
 * @prop {Boolean} open - Controla si el panel de contenido está abierto. Se refleja como atributo.
 * @prop {Boolean} disabled - Si es true, el item no se puede abrir/cerrar por interacción. Se refleja como atributo.
 *
 * @slot - El contenido principal que se muestra cuando el item está abierto.
 * @slot header-prefix - Contenido opcional para mostrar antes del texto del header (ej: icono).
 * @slot header-suffix - Contenido opcional para mostrar después del texto del header (ej: icono de flecha). Por defecto muestra una flecha.
 *
 * @cssprop [--lmc-accordion-item-border=1px solid var(--lmc-global-color-border, #dee2e6)] - Borde alrededor del item.
 * @cssprop [--lmc-accordion-item-border-radius=var(--lmc-global-border-radius-md, 0.375rem)] - Radio del borde del item.
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
 * @author LegoMyCode Team
 */
@customElement('lmc-accordion-item')
export class LmcAccordionItem extends LitElement {
  static styles = css`
    :host {
      display: block;
      /* Fallbacks globales */
      border: var(--lmc-accordion-item-border, 1px solid var(--lmc-global-color-border, #dee2e6));
      border-radius: var(--lmc-accordion-item-border-radius, var(--lmc-global-border-radius-md, 0.375rem));
      margin-bottom: var(--lmc-accordion-item-margin-bottom, 0);
      overflow: hidden;
      transition: margin 0.3s ease;
      /* Transición para el borde al cambiar tema */
      transition: border-color 0.3s ease;
    }

    /* Quitar borde superior si se usa gap=0 en lmc-accordion (manejado por lmc-accordion) */
    /* :host(:not(:first-child)) { ... }  <- Esta lógica ahora está en lmc-accordion.ts */

    .header {
      display: flex;
      align-items: center;
      width: 100%;
      /* Fallbacks globales */
      padding: var(--lmc-accordion-item-header-padding, var(--lmc-global-spacing-sm, 0.5rem) var(--lmc-global-spacing-md, 1rem));
      background-color: var(--lmc-accordion-item-header-background, var(--lmc-global-color-background-secondary, #f8f9fa));
      color: var(--lmc-accordion-item-header-color, var(--lmc-global-color-text-default, #212529));
      font-weight: var(--lmc-accordion-item-header-font-weight, bold);
      border: none;
      text-align: left;
      cursor: pointer;
      /* Transición suave para cambio de tema/hover */
      transition: background-color 0.2s ease, color 0.2s ease;
      gap: var(--lmc-global-spacing-sm, 0.5rem);
    }

    .header:hover:not([disabled]) {
      /* Fallback global */
      background-color: var(--lmc-accordion-item-header-hover-background, var(--lmc-global-color-background-tertiary, #e9ecef));
    }

    .header:focus-visible {
       /* Fallback global */
       outline: 2px solid var(--lmc-global-color-primary, blue);
       outline-offset: -2px;
    }

    :host([disabled]) .header {
      cursor: not-allowed;
      opacity: var(--lmc-accordion-item-header-disabled-opacity, 0.6);
      /* Evita que el hover cambie el fondo en estado disabled */
       background-color: var(--lmc-accordion-item-header-background, var(--lmc-global-color-background-secondary, #f8f9fa));
    }

    .header-text {
       flex-grow: 1;
    }

    .header-suffix-default-icon {
       display: inline-block; /* Necesario para transform */
       transition: var(--lmc-accordion-item-header-icon-transition, transform 0.3s ease);
       color: var(--lmc-accordion-item-header-icon-color, currentColor); /* Hereda color */
       line-height: 0; /* Ajuste vertical */
       /* Asegura que no se seleccione texto */
       user-select: none;
    }

    :host([open]) .header-suffix-default-icon {
        transform: rotate(180deg);
    }

    .content-wrapper {
        display: grid;
        grid-template-rows: 0fr;
        transition: var(--lmc-accordion-item-content-transition, grid-template-rows 0.3s ease);
        /* Fallback global */
        background-color: var(--lmc-accordion-item-content-background, var(--lmc-global-color-background, #fff));
        /* Transición suave para cambio de tema */
        transition: background-color 0.3s ease, grid-template-rows 0.3s ease;
    }

    :host([open]) .content-wrapper {
        grid-template-rows: 1fr;
    }

    .content {
       overflow: hidden;
    }

    .content-panel {
       /* Fallback global */
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
    // Toggle open state
    this.open = !this.open;

    // Dispatch event AFTER state change
    this.dispatchEvent(new CustomEvent('lmc-toggle', {
      detail: { open: this.open },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <h3 part="header-container"> <!-- Añadido part para posible estilización externa del h3 -->
        <button
          id="${this._headerId}"
          class="header"
          part="header"
          @click=${this._handleHeaderClick}
          ?disabled=${this.disabled}
          aria-expanded="${this.open}"
          aria-controls="${this._contentId}"
          aria-disabled="${this.disabled}"
          role="button"
        >
          <slot name="header-prefix" part="header-prefix"></slot>
          <span class="header-text" part="header-text">${this.header}</span>
          <slot name="header-suffix" part="header-suffix">
              <lmc-icon
                 class="header-suffix-default-icon"
                 part="header-suffix-icon"
                 name="expand_more"
              ></lmc-icon>
          </slot>
        </button>
      </h3>

      <div
        id="${this._contentId}"
        class="content-wrapper"
        part="content-wrapper"
        role="region"
        aria-labelledby="${this._headerId}"
        ?hidden=${!this.open}
      >
          <div class="content" part="content">
              <div class="content-panel" part="content-panel">
                <slot></slot>
              </div>
          </div>
      </div>
    `;
  }
}

// Declaración TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'lmc-accordion-item': LmcAccordionItem;
  }
}