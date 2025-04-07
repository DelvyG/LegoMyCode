import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @description Un contenedor genérico tipo tarjeta con padding, borde y sombra opcional.
 * @version 1.0.0
 *
 * @cssprop [--lmc-card-padding=var(--lmc-global-spacing-base, 1rem)] - Padding interno de la tarjeta.
 * @cssprop [--lmc-card-background-color=var(--lmc-global-color-background, white)] - Color de fondo.
 * @cssprop [--lmc-card-border=1px solid var(--lmc-global-color-border, #dee2e6)] - Borde de la tarjeta.
 * @cssprop [--lmc-card-border-radius=var(--lmc-global-border-radius-base, 0.375rem)] - Radio del borde.
 * @cssprop [--lmc-card-box-shadow=none] - Sombra de la tarjeta (ej: '0 2px 5px rgba(0,0,0,0.1)').
 *
 * @slot - Contenido principal de la tarjeta. Este es el slot por defecto (sin nombre).
 * @slot header - Contenido opcional para la cabecera de la tarjeta.
 * @slot footer - Contenido opcional para el pie de la tarjeta.
 */
@customElement('lmc-card')
export class LmcCard extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: block; /* Las tarjetas suelen ser elementos de bloque */
      background-color: var(--lmc-card-background-color, var(--lmc-global-color-background, white));
      border: var(--lmc-card-border, 1px solid var(--lmc-global-color-border, #dee2e6));
      border-radius: var(--lmc-card-border-radius, var(--lmc-global-border-radius-base, 0.375rem));
      box-shadow: var(--lmc-card-box-shadow, none);
      overflow: hidden; /* Para que el border-radius afecte a los hijos si es necesario */
    }

    .card-content {
      padding: var(--lmc-card-padding, var(--lmc-global-spacing-base, 1rem));
    }

    /* Estilos opcionales para slots específicos si los tuvieran */
    .card-header ::slotted(*), /* Estiliza elementos DENTRO del slot 'header' */
    ::slotted([slot="header"]) { /* Estiliza el propio elemento que tiene slot="header" */
        /* Ejemplo: Añadir un borde inferior a la cabecera */
       /* border-bottom: var(--lmc-card-border, 1px solid var(--lmc-global-color-border, #dee2e6)); */
       /* margin-bottom: var(--lmc-card-padding, var(--lmc-global-spacing-base, 1rem)); */
       /* padding-bottom: var(--lmc-card-padding, var(--lmc-global-spacing-base, 1rem)); */
    }

    .card-footer ::slotted(*),
    ::slotted([slot="footer"]) {
       /* Ejemplo: Añadir un borde superior al footer */
       /* border-top: var(--lmc-card-border, 1px solid var(--lmc-global-color-border, #dee2e6)); */
       /* margin-top: var(--lmc-card-padding, var(--lmc-global-spacing-base, 1rem)); */
       /* padding-top: var(--lmc-card-padding, var(--lmc-global-spacing-base, 1rem)); */
    }
  `;

  // --- Propiedades ---
  // Este componente no necesita propiedades propias por ahora,
  // su función principal es contener y estilizar.

  // --- Template (Render) ---
  render() {
    return html`
      <div class="card-header">
        <slot name="header"></slot> <!-- Área para proyectar contenido con slot="header" -->
      </div>
      <div class="card-content">
        <slot></slot> <!-- Área para proyectar contenido sin atributo slot (slot por defecto) -->
      </div>
      <div class="card-footer">
        <slot name="footer"></slot> <!-- Área para proyectar contenido con slot="footer" -->
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-card': LmcCard;
  }
}