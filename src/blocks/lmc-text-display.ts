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


static styles = css`
  :host {
    display: inline;
    /* Usa la variable específica, con fallback a la global, con fallback final al valor por defecto del navegador */
    color: var(--lmc-text-display-color, var(--lmc-global-color-text, inherit));
    font-size: var(--lmc-text-display-font-size, inherit); /* Mantenemos inherit como fallback final para font-size */
    font-family: var(--lmc-text-display-font-family, var(--lmc-global-font-family-base, inherit)); /* Añadido para consistencia */
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