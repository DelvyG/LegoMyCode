import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Importamos bloques necesarios
import '../blocks/lmc-container';
import '../blocks/lmc-text-display';
import '../blocks/lmc-nav-link'; // Para el enlace de vuelta a Home

@customElement('lmc-page-not-found')
export class LmcPageNotFound extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding-top: 4rem;
      text-align: center;
    }
    lmc-text-display[level="h2"] {
      margin-bottom: 1rem;
      color: var(--lmc-global-color-error, red);
    }
    lmc-nav-link {
        margin-top: 2rem;
        font-size: 1.1rem;
    }
  `;

  render() {
    return html`
      <lmc-container>
        <lmc-text-display level="h2">Oops! Página no encontrada (404)</lmc-text-display>
        <lmc-text-display>La página que buscas no existe o ha sido movida.</lmc-text-display>
        <lmc-nav-link href="/">Volver a la página principal</lmc-nav-link>
      </lmc-container>
    `;
  }
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'lmc-page-not-found': LmcPageNotFound;
//   }
// }