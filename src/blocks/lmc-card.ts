import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @description Un contenedor genérico tipo tarjeta con padding, borde y sombra opcional.
 * @version 1.0.0
 *
 * @cssprop --lmc-card-padding=var(--lmc-global-spacing-base, 1rem) - Padding interno de la tarjeta.
 * @cssprop --lmc-card-background-color=var(--lmc-global-color-background, white) - Color de fondo.
 * @cssprop --lmc-card-border=1px solid var(--lmc-global-color-border, #dee2e6) - Borde de la tarjeta.
 * @cssprop --lmc-card-border-radius=var(--lmc-global-border-radius-base, 0.375rem) - Radio del borde.
 * @cssprop --lmc-card-box-shadow=none - Sombra de la tarjeta (ej: '0 2px 5px rgba(0,0,0,0.1)').
 *
 * @slot - Contenido principal de la tarjeta. Este es el slot por defecto (sin nombre).
 * @slot header - Contenido opcional para la cabecera de la tarjeta.
 * @slot footer - Contenido opcional para el pie de la tarjeta.
 */
@customElement('lmc-card')
export class LmcCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 16px;
      margin-bottom: 16px;
    }

    /* Estilos para pantallas pequeñas (móviles) */
    @media (max-width: var(--lmc-breakpoint-small)) {
      :host {
        padding: 8px;
        margin-bottom: 8px;
      }
    }

    /* Estilos para pantallas medianas (tablets) */
    @media (min-width: var(--lmc-breakpoint-medium)) {
      :host {
        padding: 24px;
        margin-bottom: 24px;
      }
    }
  `;

  @property({ type: String }) title = '';

  render() {
    return html`
      <h2>${this.title}</h2>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-card': LmcCard;
  }
}