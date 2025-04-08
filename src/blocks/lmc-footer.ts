// src/blocks/lmc-footer.ts

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @element lmc-footer
 * @description Contenedor para el pie de página de una web. Utiliza un slot por defecto para el contenido.
 * @version 1.0.0
 *
 * @slot - Contenido del pie de página (texto de copyright, enlaces, iconos, etc.).
 *
 * @cssprop [--lmc-footer-background-color=#f8f9fa] - Color de fondo del pie de página.
 * @cssprop [--lmc-footer-text-color=#6c757d] - Color del texto dentro del pie de página.
 * @cssprop [--lmc-footer-padding=2rem 1rem] - Padding interno del pie de página.
 * @cssprop [--lmc-footer-border-top=1px solid #dee2e6] - Borde superior del pie de página.
 * @cssprop [--lmc-footer-text-align=center] - Alineación del texto.
 * @cssprop [--lmc-footer-container-max-width=none] - Ancho máximo del *contenido* dentro del footer.
 */
@customElement('lmc-footer')
export class LmcFooter extends LitElement {

  static styles = css`
    :host {
      display: block; /* Ocupa el ancho */
      margin-top: auto; /* Intenta empujar el footer hacia abajo si el contenido es corto (en un layout flex column principal) */
      background-color: var(--lmc-footer-background-color, #f8f9fa);
      color: var(--lmc-footer-text-color, #6c757d);
      border-top: var(--lmc-footer-border-top, 1px solid #dee2e6);
      box-sizing: border-box;
    }

    .footer-container {
      padding: var(--lmc-footer-padding, 2rem 1rem);
      max-width: var(--lmc-footer-container-max-width, none);
      margin-inline: auto; /* Centra el contenido si max-width está definido */
      text-align: var(--lmc-footer-text-align, center);
      box-sizing: border-box;
    }

    /* Estilos opcionales para enlaces dentro del footer */
    ::slotted(a), .footer-container a {
       color: var(--lmc-footer-link-color, var(--lmc-global-color-primary, blue));
       text-decoration: none;
    }
    ::slotted(a:hover), .footer-container a:hover {
        text-decoration: underline;
    }
  `;

  render() {
    return html`
      <div class="footer-container" part="container">
        <slot></slot> <!-- Contenido del footer va aquí -->
      </div>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-footer': LmcFooter;
  }
}