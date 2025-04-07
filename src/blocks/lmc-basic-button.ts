import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @description Un botón básico y clickeable.
 * @version 1.0.0
 *
 * @prop {String} label - El texto a mostrar dentro del botón.
 * @prop {Boolean} disabled - Si es true, el botón no es interactivo y aparece atenuado.
 *
 * @cssprop [--lmc-button-background-color=#eee] - Color de fondo del botón.
 * @cssprop [--lmc-button-text-color=#333] - Color del texto del botón.
 * @cssprop [--lmc-button-padding=8px 16px] - Padding interno del botón.
 * @cssprop [--lmc-button-border-radius=4px] - Radio del borde.
 * @cssprop [--lmc-button-opacity-disabled=0.5] - Opacidad cuando está deshabilitado.
 *
 * @fires lmc-click - Se dispara cuando se hace clic en el botón (y no está deshabilitado). No contiene detail.
 */
@customElement('lmc-basic-button')
export class LmcBasicButton extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: inline-block; /* Para que el botón se comporte como un elemento en línea */
    }

    button {
      padding: var(--lmc-button-padding, 8px 16px);
      background-color: var(--lmc-button-background-color, #eee);
      color: var(--lmc-button-text-color, #333);
      border: none;
      border-radius: var(--lmc-button-border-radius, 4px);
      cursor: pointer;
      font-family: inherit; /* Hereda la fuente */
      font-size: inherit;   /* Hereda el tamaño */
      transition: filter 0.15s ease-out;
    }

    button:hover:not([disabled]) {
      filter: brightness(90%); /* Efecto hover simple */
    }

    button:active:not([disabled]) {
      filter: brightness(80%); /* Efecto al presionar */
    }

    button[disabled] {
      cursor: not-allowed;
      opacity: var(--lmc-button-opacity-disabled, 0.5);
    }
  `;

  // --- Propiedades ---
  @property({ type: String })
  label: string = 'Click Me';

  @property({ type: Boolean, reflect: true }) // reflect: true es útil para 'disabled' para estilado CSS
  disabled: boolean = false;

  // --- Template (Render) ---
  render() {
    // Usamos .disabled=${this.disabled} para pasar el booleano directamente al elemento <button>
    // El evento @click del <button> interno llama a nuestro método _handleClick
    return html`
      <button .disabled=${this.disabled} @click=${this._handleClick}>
        ${this.label}
      </button>
    `;
  }

  // --- Lógica y Eventos ---
  private _handleClick(event: MouseEvent) {
    // Si el botón está deshabilitado, no hacemos nada (aunque el CSS ya previene el click)
    if (this.disabled) {
      event.stopPropagation(); // Detiene la propagación del evento click nativo
      return;
    }

    // Creamos y disparamos nuestro evento personalizado 'lmc-click'
    this.dispatchEvent(new CustomEvent('lmc-click', {
      bubbles: true, // Permite que suba por el DOM
      composed: true // Permite que cruce límites de Shadow DOM
      // No necesitamos 'detail' para un click simple
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-basic-button': LmcBasicButton;
  }
}