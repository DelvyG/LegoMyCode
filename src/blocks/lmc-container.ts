import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-container
 * @description Componente contenedor genérico para envolver otros bloques LegoMyCode con control de ancho, centrado y padding.
 * @version 1.0.0
 *
 * @cssprop [--lmc-container-background-color=transparent] - Color de fondo del contenedor.
 * @cssprop [--lmc-container-padding=0] - Padding interno del contenedor. Sobrescribe la propiedad `padding`.
 * @cssprop [--lmc-container-max-width=none] - Ancho máximo del contenedor. Sobrescribe la propiedad `maxWidth`.
 * @cssprop [--lmc-container-margin-inline=auto] - Margen horizontal usado para centrar contenido cuando está activo el centrado.
 */
@customElement('lmc-container')
export class LmcContainer extends LitElement {
  /**
   * Controla el ancho máximo del contenedor. Ejemplos: '1280px', '80ch'.
   * @attr max-width
   */
  @property({ type: String, attribute: 'max-width', reflect: true }) // reflect: true ayuda a aplicar estilos basados en el atributo
  maxWidth: string = 'none';

  /**
   * Si es true y maxWidth está definido (y no es 'none'), centra el contenedor horizontalmente.
   * @attr center-content
   */
  @property({ type: Boolean, attribute: 'center-content', reflect: true }) // reflect: true ayuda a aplicar estilos basados en el atributo
  centerContent: boolean = false;

  /**
   * Padding interno del contenedor. Ejemplos: '1rem', '20px', 'var(--lmc-global-spacing-md)'.
   * @attr padding
   */
  @property({ type: String, reflect: true }) // reflect: true ayuda a aplicar estilos basados en el atributo
  padding: string = '0';

  static styles = css`
    :host {
      /* Estilos base del contenedor */
      display: block;
      box-sizing: border-box; /* Importante para que el padding no aumente el tamaño total */
      background-color: var(--lmc-container-background-color, transparent);

      /* Aplica el padding usando la variable CSS o la propiedad reflejada */
      padding: var(--lmc-container-padding, var(--_internal-padding, 0));

      /* Aplica el ancho máximo usando la variable CSS o la propiedad reflejada */
      max-width: var(--lmc-container-max-width, var(--_internal-max-width, none));
    }

    /* Estilos para centrar: se aplican SOLO si el host tiene center-content y un max-width válido */
    :host([center-content]:not([max-width='none'])[max-width]) {
       /* Si se cumplen las condiciones, aplica el margen automático */
       margin-inline: var(--lmc-container-margin-inline, auto);
    }
  `;

  // El render es ahora mucho más simple, solo necesita el slot.
  // Los estilos se manejan completamente en CSS.
  render() {
    return html`<slot></slot>`;
  }

  // Este método ya no es necesario, lo eliminamos.
  // private _computeStyle(): string { ... }

  // Necesitamos actualizar las variables CSS internas cuando cambian las propiedades
  // para que los fallbacks en :host funcionen correctamente.
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('padding')) {
      this.style.setProperty('--_internal-padding', this.padding);
    }
    if (changedProperties.has('maxWidth')) {
      this.style.setProperty('--_internal-max-width', this.maxWidth);
    }
    // No es necesario para centerContent porque el selector CSS lo maneja con reflect:true
  }

}

// Registro en HTMLElementTagNameMap
declare global {
  interface HTMLElementTagNameMap {
    'lmc-container': LmcContainer;
  }
}