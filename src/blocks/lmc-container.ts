import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-container
 * @description Un contenedor genérico para agrupar contenido, aplicar padding y opcionalmente limitar su ancho y centrarlo.
 * La personalización principal se realiza a través de variables CSS. Las propiedades/atributos sirven como alternativa.
 * @version 1.1.0 - Refinado para priorizar CSS Vars
 *
 * @slot - El contenido a renderizar dentro del contenedor.
 *
 * @cssprop [--lmc-container-padding=var(--lmc-global-spacing-md, 1rem)] - Padding interno del contenedor.
 * @cssprop [--lmc-container-max-width=1200px] - Ancho máximo del contenedor. Usa 'none' para ancho completo.
 * @cssprop [--lmc-container-margin-inline=auto] - Margen horizontal. 'auto' centra el contenedor si tiene max-width.
 * @cssprop [--lmc-container-background=transparent] - Color de fondo.
 * @cssprop [--lmc-container-border=none] - Borde.
 * @cssprop [--lmc-container-border-radius=0] - Radio del borde.
 *
 * @attr {string} padding - Alternativa para establecer el padding vía atributo (sobrescribe --lmc-container-padding si se usa).
 * @attr {string} max-width - Alternativa para establecer el ancho máximo vía atributo (sobrescribe --lmc-container-max-width si se usa).
 * @attr {string} margin-inline - Alternativa para establecer el margen horizontal vía atributo (sobrescribe --lmc-container-margin-inline si se usa).
 */
@customElement('lmc-container')
export class LmcContainer extends LitElement {

  // Propiedades opcionales para permitir configuración vía atributo/propiedad.
  // No usan reflect: true porque su efecto principal es establecer la variable CSS interna en updated().
  @property({ type: String })
  padding?: string;

  @property({ type: String, attribute: 'max-width' })
  maxWidth?: string;

  @property({ type: String, attribute: 'margin-inline' })
  marginInline?: string;

  static styles = css`
    :host {
      display: block; /* Asegura que ocupa espacio */
      width: 100%; /* Ocupa el ancho disponible por defecto */
      box-sizing: border-box; /* Padding incluido en el ancho/alto */

      /* Aplica los estilos usando las variables CSS públicas como fuente principal */
      /* Los fallbacks usan variables globales o valores sensatos */
      padding: var(--lmc-container-padding, var(--lmc-global-spacing-md, 1rem));
      max-width: var(--lmc-container-max-width, 1200px); /* Default razonable */
      margin-inline: var(--lmc-container-margin-inline, auto); /* Centrado por defecto si max-width aplica */
      background-color: var(--lmc-container-background, transparent);
      border: var(--lmc-container-border, none);
      border-radius: var(--lmc-container-border-radius, 0);
    }

    /* Asegura que si max-width es 'none', realmente ocupe todo el ancho */
    :host([style*="--lmc-container-max-width: none"]) {
        max-width: none;
        /* Si max-width es none, el centrado con margin: auto no tiene efecto, lo cual está bien */
    }

    /* Si se establece max-width explícitamente a 'none' vía atributo, también aplica */
    :host([max-width="none"]) {
       max-width: none;
       /* Podríamos forzar margin-inline a 0 si es necesario, pero 'auto' no hará nada */
       /* margin-inline: 0; */
    }
  `;

  // El render sigue siendo simple
  render() {
    return html`<slot></slot>`;
  }

  /**
   * Actualiza las variables CSS directamente en el :host si las propiedades
   * correspondientes (padding, maxWidth, marginInline) han sido establecidas.
   * Esto permite que los atributos/propiedades sobrescriban las variables CSS globales o de contenedores padre,
   * pero el estilo final siempre se lee desde las variables CSS en :host.
   */
  protected updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);

    if (changedProperties.has('padding') && this.padding !== undefined) {
      // Establece la variable CSS pública directamente en este host
      this.style.setProperty('--lmc-container-padding', this.padding);
    }
    if (changedProperties.has('maxWidth') && this.maxWidth !== undefined) {
      this.style.setProperty('--lmc-container-max-width', this.maxWidth);
    }
     if (changedProperties.has('marginInline') && this.marginInline !== undefined) {
      this.style.setProperty('--lmc-container-margin-inline', this.marginInline);
    }
  }
}

// Registro en HTMLElementTagNameMap
declare global {
  interface HTMLElementTagNameMap {
    'lmc-container': LmcContainer;
  }
}


