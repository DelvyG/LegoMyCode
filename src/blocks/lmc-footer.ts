import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @element lmc-footer
 * @description Contenedor para el pie de página de una web. Utiliza un slot por defecto para el contenido.
 * @version 1.1.0 - Refinado para priorizar CSS Vars y usar fallbacks globales.
 *
 * @slot - Contenido del pie de página (texto de copyright, enlaces, iconos, etc.).
 *
 * @cssprop [--lmc-footer-background=var(--lmc-global-color-background-secondary, #f8f9fa)] - Color de fondo.
 * @cssprop [--lmc-footer-color=var(--lmc-global-color-text-muted, #6c757d)] - Color del texto.
 * @cssprop [--lmc-footer-padding=var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem)] - Padding interno.
 * @cssprop [--lmc-footer-border-top=1px solid var(--lmc-global-color-border, #dee2e6)] - Borde superior.
 * @cssprop [--lmc-footer-text-align=center] - Alineación del texto.
 * @cssprop [--lmc-footer-max-width=var(--lmc-container-max-width, 1200px)] - Ancho máximo del contenido del footer. Usa 'none' para ancho completo.
 * @cssprop [--lmc-footer-margin-inline=auto] - Margen horizontal. 'auto' centra el contenido si max-width aplica.
 * @cssprop [--lmc-footer-link-color=var(--lmc-global-color-primary, blue)] - Color de los enlaces dentro del footer.
 */
@customElement('lmc-footer')
export class LmcFooter extends LitElement {

  static styles = css`
    :host {
      display: block; /* Ocupa el ancho */
      margin-top: auto; /* Intenta empujar el footer hacia abajo si el contenido es corto */
      box-sizing: border-box; /* Padding no aumenta el tamaño */

      /* Aplica estilos directamente al host usando variables y fallbacks globales */
      background-color: var(--lmc-footer-background, var(--lmc-global-color-background-secondary, #f8f9fa));
      color: var(--lmc-footer-color, var(--lmc-global-color-text-muted, #6c757d));
      border-top: var(--lmc-footer-border-top, 1px solid var(--lmc-global-color-border, #dee2e6));
      padding: var(--lmc-footer-padding, var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem));
      max-width: var(--lmc-footer-max-width, var(--lmc-container-max-width, 1200px)); /* Usa el mismo max-width que el container por defecto */
      margin-inline: var(--lmc-footer-margin-inline, auto); /* Centrado por defecto si max-width aplica */
      text-align: var(--lmc-footer-text-align, center);

      font-size: 0.9em; /* Texto un poco más pequeño */

      /* Transición suave para cambio de tema */
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }

    /* Asegura que si max-width es 'none', realmente ocupe todo el ancho */
    :host([style*="--lmc-footer-max-width: none"]) {
        max-width: none;
    }

    /* Estilos para contenido directamente dentro del slot */
    ::slotted(p) {
       margin-top: 0;
       margin-bottom: var(--lmc-global-spacing-xs, 0.25rem); /* Menos espacio entre párrafos en footer */
    }

    /* Estilos para enlaces dentro del slot */
    ::slotted(a) {
       color: var(--lmc-footer-link-color, var(--lmc-global-color-primary, blue));
       text-decoration: none;
       transition: opacity 0.2s ease;
    }
    ::slotted(a:hover) {
        text-decoration: underline;
        opacity: 0.8;
    }
  `;

  render() {
    // Usamos la etiqueta semántica <footer> directamente
    return html`
      <footer role="contentinfo">
        <slot>
           <!-- Contenido por defecto si no se proporciona slot -->
          <p>© ${new Date().getFullYear()} LegoMyCode Project</p>
        </slot>
      </footer>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-footer': LmcFooter;
  }
}