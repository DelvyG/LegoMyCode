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
    display: inline-block;
    /* Define el color de fondo base usando el secundario global como fallback */
    --_lmc-button-background-color: var(--lmc-button-background-color, var(--lmc-global-color-secondary, #eee));
    /* Define el color de texto base usando el texto global como fallback */
    --_lmc-button-text-color: var(--lmc-button-text-color, var(--lmc-global-color-text, #333));
  }

  button {
    /* Usan las variables internas definidas en :host */
    padding: var(--lmc-button-padding, calc(var(--lmc-global-spacing-base, 1rem) * 0.5) var(--lmc-global-spacing-base, 1rem)); /* Usa spacing global para padding por defecto */
    background-color: var(--_lmc-button-background-color);
    color: var(--_lmc-button-text-color);
    border: none;
    border-radius: var(--lmc-button-border-radius, var(--lmc-global-border-radius-base, 4px)); /* Usa border-radius global por defecto */
    cursor: pointer;
    font-family: inherit; /* Hereda del host, que debería heredar del body/global */
    font-size: inherit;
    transition: filter 0.15s ease-out;
  }

  button:hover:not([disabled]) {
    filter: brightness(90%);
  }

  button:active:not([disabled]) {
    filter: brightness(80%);
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: var(--lmc-button-opacity-disabled, 0.5);
  }

  /* Podríamos añadir estilos para un botón primario usando la variable global primaria */
  :host([appearance="primary"]) { /* Si tuvieras una prop appearance='primary' */
     --_lmc-button-background-color: var(--lmc-button-primary-bg-color, var(--lmc-global-color-primary, blue));
     --_lmc-button-text-color: var(--lmc-button-primary-text-color, white); /* Asumiendo texto blanco para primario */
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