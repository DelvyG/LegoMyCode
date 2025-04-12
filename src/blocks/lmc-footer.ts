import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @element lmc-footer
 * @description Contenedor para el pie de página. El fondo y borde superior ocupan todo el ancho, mientras que el contenido interno se centra y tiene un ancho máximo.
 * @version 1.2.0 - Corregido layout para centrar contenido interno, no el host.
 *
 * @slot - Contenido del pie de página (texto de copyright, enlaces, iconos, etc.).
 *
 * @cssprop [--lmc-footer-background=var(--lmc-global-color-background-secondary, #f8f9fa)] - Color de fondo (ocupa todo el ancho).
 * @cssprop [--lmc-footer-color=var(--lmc-global-color-text-muted, #6c757d)] - Color del texto del contenido.
 * @cssprop [--lmc-footer-padding-vertical=var(--lmc-global-spacing-lg, 2rem)] - Padding vertical del área del footer.
 * @cssprop [--lmc-footer-padding-horizontal=var(--lmc-global-spacing-md, 1rem)] - Padding horizontal del *contenido* interno.
 * @cssprop [--lmc-footer-border-top=1px solid var(--lmc-global-color-border, #dee2e6)] - Borde superior (ocupa todo el ancho).
 * @cssprop [--lmc-footer-content-max-width=var(--lmc-container-max-width, 1200px)] - Ancho máximo del *contenido* interno.
 * @cssprop [--lmc-footer-content-text-align=center] - Alineación del texto del contenido.
 * @cssprop [--lmc-footer-link-color=var(--lmc-global-color-primary, blue)] - Color de los enlaces dentro del footer.
 */
@customElement('lmc-footer')
export class LmcFooter extends LitElement {

  static styles = css`
    :host {
      display: block; /* Ocupa el ancho disponible */
      margin-top: auto; /* Empuja hacia abajo en layouts flex */
      box-sizing: border-box;
      /* Estilos aplicados al HOST (full-width) */
      background-color: var(--lmc-footer-background, var(--lmc-global-color-background-secondary, #f8f9fa));
      border-top: var(--lmc-footer-border-top, 1px solid var(--lmc-global-color-border, #dee2e6));
      /* Padding vertical aplicado al host */
      padding-top: var(--lmc-footer-padding-vertical, var(--lmc-global-spacing-lg, 2rem));
      padding-bottom: var(--lmc-footer-padding-vertical, var(--lmc-global-spacing-lg, 2rem));
      /* El color base del texto se define aquí para que lo herede el contenido */
      color: var(--lmc-footer-color, var(--lmc-global-color-text-muted, #6c757d));
      font-size: 0.9em;
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
    }

    /* Contenedor INTERNO para centrar y limitar el ancho del contenido */
    .footer-content {
      width: 100%; /* Ocupa el ancho del host */
      max-width: var(--lmc-footer-content-max-width, var(--lmc-container-max-width, 1200px)); /* Ancho máximo del contenido */
      margin-left: auto;  /* Centrado */
      margin-right: auto; /* Centrado */
      /* Padding horizontal aplicado al contenido interno */
      padding-left: var(--lmc-footer-padding-horizontal, var(--lmc-global-spacing-md, 1rem));
      padding-right: var(--lmc-footer-padding-horizontal, var(--lmc-global-spacing-md, 1rem));
      text-align: var(--lmc-footer-content-text-align, center);
      box-sizing: border-box;
    }

    /* Estilos para contenido y enlaces DENTRO del slot */
    ::slotted(p) {
       margin-top: 0;
       margin-bottom: var(--lmc-global-spacing-xs, 0.25rem);
    }
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
    // Usamos la etiqueta semántica <footer> y un div interno para el contenido
    return html`
      <footer role="contentinfo" part="footer">
        <div class="footer-content" part="content">
          <slot>
            <!-- Contenido por defecto si no se proporciona slot -->
            <p>© ${new Date().getFullYear()} LegoMyCode Project. Hecho con Legos!</p>
          </slot>
        </div>
      </footer>
    `;
  }
}

// Declaración TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'lmc-footer': LmcFooter;
  }
}