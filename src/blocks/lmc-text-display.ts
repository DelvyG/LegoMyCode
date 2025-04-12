import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-text-display
 * @description Muestra texto con el nivel semántico HTML apropiado (h1-h6, p) y estilos base adaptables al tema.
 * @version 1.1.0 - Refuerza herencia de color global y estilos base.
 *
 * @prop {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'} [level=p] - Nivel semántico y de estilo. Se refleja como atributo.
 *
 * @slot - El texto o contenido HTML a mostrar dentro de la etiqueta semántica.
 *
 * @cssprop [--lmc-text-display-color=var(--lmc-global-color-text-default)] - Color del texto. Hereda el color global por defecto.
 * @cssprop [--lmc-text-display-font-size=inherit] - Tamaño de fuente base. Sobrescrito por niveles específicos (h1-h6).
 * @cssprop [--lmc-text-display-font-weight=inherit] - Peso de fuente base. Sobrescrito por niveles específicos.
 * @cssprop [--lmc-text-display-line-height=var(--lmc-global-line-height-base, 1.5)] - Altura de línea base.
 * @cssprop [--lmc-text-display-margin=0] - Margen exterior del elemento. Controlar desde CSS externo o por nivel.
 * @cssprop [--lmc-text-display-h1-font-size=2.5rem] - Tamaño específico para h1.
 * @cssprop [--lmc-text-display-h1-font-weight=bold] - Peso específico para h1.
 * @cssprop [--lmc-text-display-h1-margin=0 0 0.5em 0] - Margen específico para h1.
 * @cssprop [--lmc-text-display-h1-line-height=1.2] - Altura de línea específica para h1.
 * @cssprop [--lmc-text-display-h2-font-size=2rem] - Tamaño específico para h2.
 * @cssprop [--lmc-text-display-h2-font-weight=bold] - Peso específico para h2.
 * @cssprop [--lmc-text-display-h2-margin=0 0 0.5em 0] - Margen específico para h2.
 * @cssprop [--lmc-text-display-h2-line-height=1.3] - Altura de línea específica para h2.
 * @cssprop [--lmc-text-display-p-font-weight=var(--lmc-global-font-weight-base, normal))] - Peso específico para p.
 * @cssprop [--lmc-text-display-p-line-height=var(--lmc-global-line-height-base, 1.5))] - Altura de línea específica para p.
 * @cssprop [...] - Puedes definir variables similares para h3-h6 si necesitas control fino.
 */
@customElement('lmc-text-display')
export class LmcTextDisplay extends LitElement {
  @property({ type: String, reflect: true })
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' = 'p';

  static styles = css`
    :host {
      display: block; /* Comportamiento de bloque por defecto */
      box-sizing: border-box;
      /* Estilos base aplicados al host, heredables por el slot */
      margin: var(--lmc-text-display-margin, 0); /* Controlar margen desde fuera o por nivel */
      padding: 0; /* Sin padding por defecto */
      color: var(--lmc-text-display-color, var(--lmc-global-color-text-default, inherit)); /* HEREDA COLOR GLOBAL */
      font-size: var(--lmc-text-display-font-size, inherit);
      font-weight: var(--lmc-text-display-font-weight, inherit);
      line-height: var(--lmc-text-display-line-height, var(--lmc-global-line-height-base, 1.5));
      transition: color 0.3s ease; /* Transición para cambio de tema */
    }

    /* Estilos base para los elementos internos (h1-p) */
    h1, h2, h3, h4, h5, h6, p {
      margin: inherit; /* Hereda el margen del host por defecto */
      padding: inherit; /* Hereda el padding del host por defecto */
      font-size: inherit; /* Hereda tamaño del host por defecto */
      font-weight: inherit; /* Hereda peso del host por defecto */
      line-height: inherit; /* Hereda altura de línea del host */
      color: inherit; /* Hereda color del host (que ya tiene el fallback global) */
    }

    /* --- Sobrescrituras específicas por nivel usando el atributo reflejado en :host --- */

    /* H1 */
    :host([level="h1"]) {
      font-size: var(--lmc-text-display-h1-font-size, 2.5rem);
      font-weight: var(--lmc-text-display-h1-font-weight, bold);
      line-height: var(--lmc-text-display-h1-line-height, 1.2);
      margin: var(--lmc-text-display-h1-margin, 0 0 0.5em 0);
    }

    /* H2 */
    :host([level="h2"]) {
      font-size: var(--lmc-text-display-h2-font-size, 2rem);
      font-weight: var(--lmc-text-display-h2-font-weight, bold);
      line-height: var(--lmc-text-display-h2-line-height, 1.3);
      margin: var(--lmc-text-display-h2-margin, 0 0 0.5em 0);
    }

    /* H3 (Ejemplo adicional) */
    :host([level="h3"]) {
      font-size: var(--lmc-text-display-h3-font-size, 1.75rem);
      font-weight: var(--lmc-text-display-h3-font-weight, bold);
      line-height: var(--lmc-text-display-h3-line-height, 1.4);
      margin: var(--lmc-text-display-h3-margin, 0 0 0.5em 0);
    }

    /* H4 (Ejemplo adicional) */
    :host([level="h4"]) {
        font-size: var(--lmc-text-display-h4-font-size, 1.5rem);
        font-weight: var(--lmc-text-display-h4-font-weight, bold);
        line-height: var(--lmc-text-display-h4-line-height, 1.4);
        margin: var(--lmc-text-display-h4-margin, 0 0 0.5em 0);
    }

    /* H5 (Ejemplo adicional) */
     :host([level="h5"]) {
        font-size: var(--lmc-text-display-h5-font-size, 1.25rem);
        font-weight: var(--lmc-text-display-h5-font-weight, bold);
        line-height: var(--lmc-text-display-h5-line-height, 1.5);
        margin: var(--lmc-text-display-h5-margin, 0 0 0.5em 0);
     }

     /* H6 (Ejemplo adicional) */
      :host([level="h6"]) {
        font-size: var(--lmc-text-display-h6-font-size, 1rem);
        font-weight: var(--lmc-text-display-h6-font-weight, bold);
        line-height: var(--lmc-text-display-h6-line-height, 1.5);
        margin: var(--lmc-text-display-h6-margin, 0 0 0.5em 0);
      }


    /* Párrafo (nivel 'p') */
    :host([level="p"]) {
      /* Hereda la mayoría de los estilos base de :host */
      font-weight: var(--lmc-text-display-p-font-weight, var(--lmc-global-font-weight-base, normal));
      line-height: var(--lmc-text-display-p-line-height, var(--lmc-global-line-height-base, 1.5));
       /* Podemos añadir un margen inferior por defecto si queremos */
       /* margin-bottom: var(--lmc-global-spacing-md, 1rem); */
    }
  `;

  render() {
    // Elige la etiqueta HTML correcta basada en la propiedad 'level'
    let tag;
    switch (this.level) {
      case 'h1': tag = html`<h1><slot></slot></h1>`; break;
      case 'h2': tag = html`<h2><slot></slot></h2>`; break;
      case 'h3': tag = html`<h3><slot></slot></h3>`; break;
      case 'h4': tag = html`<h4><slot></slot></h4>`; break;
      case 'h5': tag = html`<h5><slot></slot></h5>`; break;
      case 'h6': tag = html`<h6><slot></slot></h6>`; break;
      default: tag = html`<p><slot></slot></p>`; break; // level='p' es el default
    }
    return tag;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-text-display': LmcTextDisplay;
  }
}