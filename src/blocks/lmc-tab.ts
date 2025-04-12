import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js'; // Importar ifDefined
import { uuid } from '../utils/uuid';

/**
 * @element lmc-tab
 * @description Representa una pestaña individual clickeable dentro de un `lmc-tab-group`.
 * @version 1.1.1 - Added logging for controlsPanel.
 *
 * @prop {boolean} [active=false] - Indica si la pestaña está activa. Controlado por `lmc-tab-group`. Refleja como atributo.
 * @prop {boolean} [disabled=false] - Indica si la pestaña está deshabilitada. Refleja como atributo.
 * @prop {string} controlsPanel! - **Requerido.** El ID del `lmc-tab-panel` que esta pestaña controla. Debe coincidir con el atributo `controls-panel`.
 *
 * @slot - Contenido principal de la pestaña (generalmente texto).
 * @slot prefix - Contenido opcional antes del texto (ej: icono).
 * @slot suffix - Contenido opcional después del texto.
 *
 * @fires lmc-tab-selected - Se dispara cuando se hace clic en una pestaña habilitada. detail: { panelId: string }
 *
 * @cssprop [--lmc-tab-padding=var(--lmc-global-spacing-sm) var(--lmc-global-spacing-md)] - Padding interno.
 * @cssprop [--lmc-tab-color=var(--lmc-global-color-text-muted)] - Color del texto inactivo.
 * @cssprop [--lmc-tab-color-active=var(--lmc-global-color-primary)] - Color del texto activo.
 * @cssprop [--lmc-tab-color-disabled=var(--lmc-global-color-text-muted)] - Color del texto deshabilitado.
 * @cssprop [--lmc-tab-border-color-active=var(--lmc-global-color-primary)] - Color del borde inferior activo.
 * @cssprop [--lmc-tab-border-width-active=2px] - Grosor del borde inferior activo.
 * @cssprop [--lmc-tab-hover-background=var(--lmc-global-color-background-secondary)] - Fondo al pasar el ratón.
 * @cssprop [--lmc-tab-gap=var(--lmc-global-spacing-xs)] - Espacio entre prefix/suffix y texto.
 */
@customElement('lmc-tab')
export class LmcTab extends LitElement {

  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: String, attribute: 'controls-panel' }) controlsPanel!: string;

  private _tabId = `lmc-tab-${uuid()}`;

  static styles = css`
    :host { display: inline-block; box-sizing: border-box; }
    button {
      display: inline-flex; align-items: center; justify-content: center;
      gap: var(--lmc-tab-gap, var(--lmc-global-spacing-xs, 0.4rem));
      font-family: inherit; font-size: inherit; font-weight: var(--lmc-tab-font-weight, inherit);
      padding: var(--lmc-tab-padding, var(--lmc-global-spacing-sm, 0.5rem) var(--lmc-global-spacing-md, 1rem));
      border: none; border-bottom: var(--lmc-tab-border-width-active, 2px) solid transparent;
      background-color: transparent;
      color: var(--lmc-tab-color, var(--lmc-global-color-text-muted, #6c757d));
      cursor: pointer; white-space: nowrap;
      transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
      margin-bottom: calc(-1 * var(--lmc-tab-border-width-active, 2px));
    }
    button:hover:not([disabled]) {
      background-color: var(--lmc-tab-hover-background, var(--lmc-global-color-background-secondary, #f8f9fa));
      color: var(--lmc-tab-color-active, var(--lmc-global-color-primary, blue));
    }
    button:focus-visible {
       outline: 2px solid var(--lmc-global-color-primary, blue);
       outline-offset: -2px;
       border-radius: var(--lmc-global-border-radius-sm, 3px);
    }
    :host([active]) button {
      color: var(--lmc-tab-color-active, var(--lmc-global-color-primary, blue));
      border-bottom-color: var(--lmc-tab-border-color-active, var(--lmc-global-color-primary, blue));
    }
    :host([disabled]) button {
      color: var(--lmc-tab-color-disabled, var(--lmc-global-color-text-muted, #6c757d));
      opacity: var(--lmc-global-disabled-opacity, 0.6); cursor: not-allowed;
    }
    :host([disabled]) button:hover { background-color: transparent; }
     ::slotted(*) { display: inline-flex; align-items: center; }
  `;

  private _handleClick() {
    console.log(`[lmc-tab] Clicked. ID: ${this._tabId}, Disabled: ${this.disabled}`); // LOG 1
    if (this.disabled) {
      return;
    }
    // LOG 2: Verificar el valor JUSTO ANTES de disparar el evento
    console.log(`[lmc-tab] Dispatching lmc-tab-selected. controlsPanel value: '${this.controlsPanel}'`);
    if (this.controlsPanel === undefined || this.controlsPanel === null || this.controlsPanel === '') {
        console.error(`[lmc-tab] ERROR: controlsPanel attribute/property is missing or empty on tab ${this._tabId}! Cannot select panel.`);
        return; // No disparar evento si no hay ID
    }

    this.dispatchEvent(new CustomEvent('lmc-tab-selected', {
      detail: { panelId: this.controlsPanel }, // Usar el valor de la propiedad
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <button
        id=${this._tabId}
        role="tab"
        ?disabled=${this.disabled}
        aria-selected=${this.active ? 'true' : 'false'}
        aria-controls=${ifDefined(this.controlsPanel)}
        tabindex=${this.active ? '0' : '-1'}
        @click=${this._handleClick}
        part="button"
      >
        <slot name="prefix" part="prefix"></slot>
        <slot part="label"></slot> <!-- Slot por defecto para el label -->
        <slot name="suffix" part="suffix"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-tab': LmcTab;
  }
}