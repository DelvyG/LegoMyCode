import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @description Un bloque simple para mostrar un texto configurable.
 * @version 1.0.0
 * @author LegoMyCode Team
 *
 * @prop {String} text - El texto que se mostrará en el bloque.
 *
 * @cssprop [--lmc-text-display-color=inherit] - Color del texto.
 * @cssprop [--lmc-text-display-font-size=inherit] - Tamaño de fuente del texto.
 */
@customElement('lmc-text-display')
export class LmcTextDisplay extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: inline; /* O 'block' según necesites */
      color: var(--lmc-text-display-color, inherit);
      font-size: var(--lmc-text-display-font-size, inherit);
    }
  `;

  // --- Propiedades ---
  @property({ type: String })
  text: string = 'Texto por defecto'; // Añadir un valor por defecto

  // --- Template (Render) ---
  render() {
    return html`${this.text}`; // Simplemente renderiza la propiedad text
  }
}

// Declaración para asegurar que el módulo se reconozca como tal,
// y para tipado global si se necesita en el futuro.
declare global {
  interface HTMLElementTagNameMap {
    'lmc-text-display': LmcTextDisplay;
  }
}