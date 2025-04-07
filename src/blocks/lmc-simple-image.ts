import { LitElement, html, css, nothing } from 'lit'; // Import 'nothing' for conditional rendering
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js'; // To handle optional attributes like width/height

/**
 * @description Un bloque para mostrar una imagen con alt text y caption opcional.
 * @version 1.0.0
 *
 * @prop {String} src - URL de la imagen a mostrar. Requerido.
 * @prop {String} alt - Texto alternativo para la imagen (accesibilidad). Requerido.
 * @prop {String} width - Ancho CSS para la imagen (ej: '100px', '100%', 'auto'). Opcional.
 * @prop {String} height - Alto CSS para la imagen (ej: '150px', 'auto'). Opcional.
 * @prop {String} caption - Texto opcional que aparece debajo de la imagen.
 *
 * @cssprop [--lmc-image-border-radius=0] - Radio del borde de la imagen.
 * @cssprop [--lmc-image-object-fit=cover] - Cómo la imagen debe ajustarse a su contenedor (cover, contain, fill, etc.).
 * @cssprop [--lmc-image-caption-color=inherit] - Color del texto del caption.
 * @cssprop [--lmc-image-caption-align=center] - Alineación del texto del caption.
 * @cssprop [--lmc-image-figure-margin=0 0 1em 0] - Margen del contenedor figure (si hay caption).
 */
@customElement('lmc-simple-image')
export class LmcSimpleImage extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: inline-block; /* O 'block' si prefieres que ocupe todo el ancho */
      line-height: 0; /* Para evitar espacio extra debajo de la imagen inline */
    }

    figure {
      margin: var(--lmc-image-figure-margin, 0 0 1em 0);
      padding: 0;
      line-height: initial; /* Restaura line-height para el caption */
    }

    img {
      display: block; /* Para que width/height funcionen correctamente */
      width: var(--lmc-image-width, auto); /* Usa la variable CSS o el fallback auto */
      height: var(--lmc-image-height, auto);
      max-width: 100%; /* Previene que la imagen se desborde si no se especifica width */
      object-fit: var(--lmc-image-object-fit, cover);
      border-radius: var(--lmc-image-border-radius, 0);
    }

    figcaption {
      margin-top: 0.5em;
      font-size: 0.9em;
      color: var(--lmc-image-caption-color, inherit);
      text-align: var(--lmc-image-caption-align, center);
    }
  `;

  // --- Propiedades ---
  @property({ type: String })
  src: string = ''; // Requerido, pero inicializado a vacío

  @property({ type: String })
  alt: string = ''; // Requerido, crucial para accesibilidad

  @property({ type: String })
  width?: string; // Opcional

  @property({ type: String })
  height?: string; // Opcional

  @property({ type: String })
  caption?: string; // Opcional

  // --- Template (Render) ---
  render() {
    if (!this.src) {
      // No renderizar nada si no hay src (o podrías mostrar un placeholder)
      return nothing;
    }

    // Construir estilos inline para width/height si se proporcionan como propiedades
    // Esto tiene más precedencia que las variables CSS, pero permite control directo
    const imgStyles = `
      ${this.width ? `width: ${this.width};` : ''}
      ${this.height ? `height: ${this.height};` : ''}
    `;

    // Plantilla base de la imagen
    const imgTag = html`
      <img
        src="${this.src}"
        alt="${this.alt}"
        style="${imgStyles}"
        width="${ifDefined(this.width?.endsWith('px') ? this.width.slice(0,-2) : undefined)}"
        height="${ifDefined(this.height?.endsWith('px') ? this.height.slice(0,-2) : undefined)}"
      >`;
      // Nota: Los atributos width/height HTML solo funcionan bien con píxeles puros.
      // Usamos inline style para más flexibilidad con unidades CSS.

    // Si hay caption, envolvemos en <figure> y añadimos <figcaption>
    if (this.caption) {
      return html`
        <figure>
          ${imgTag}
          <figcaption>${this.caption}</figcaption>
        </figure>
      `;
    } else {
      // Si no hay caption, solo la imagen
      return imgTag;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-simple-image': LmcSimpleImage;
  }
}