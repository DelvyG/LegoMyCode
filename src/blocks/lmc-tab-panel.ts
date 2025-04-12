import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-tab-panel
 * @description Panel de contenido asociado a un `lmc-tab`. Aplica padding interno. Su visibilidad es controlada por el padre.
 * @version 1.3.0 - Reintroduced internal padding for content spacing.
 *
 * @prop {boolean} [active=false] - Indica si este panel está activo.
 * @prop {string} id! - ID único.
 *
 * @slot - El contenido HTML de este panel.
 *
 * @cssprop [--lmc-tab-panel-padding=var(--lmc-global-spacing-lg, 1.5rem)] - Padding interno del panel.
 */
@customElement('lmc-tab-panel')
export class LmcTabPanel extends LitElement {

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: String, reflect: true })
  id!: string;

  static styles = css`
    :host {
      display: block; /* El padre controla si es 'none' o 'block' */
      box-sizing: border-box;
      color: var(--lmc-global-color-text-default);
      /* --- PADDING INTERNO APLICADO AQUÍ --- */
      padding: var(--lmc-tab-panel-padding, var(--lmc-global-spacing-lg, 1.5rem)); /* 24px por defecto en todos lados */
      /* Puedes ajustar los lados si quieres: */
      /* padding-top: var(--lmc-tab-panel-padding-top, var(--lmc-global-spacing-lg, 1.5rem)); */
      /* padding-bottom: var(--lmc-tab-panel-padding-bottom, var(--lmc-global-spacing-lg, 1.5rem)); */
      /* padding-left: var(--lmc-tab-panel-padding-x, var(--lmc-global-spacing-md, 1rem)); */
      /* padding-right: var(--lmc-tab-panel-padding-x, var(--lmc-global-spacing-md, 1rem)); */
      /* --- FIN PADDING --- */
    }

    :host([hidden]) { /* Asegurar ocultación si usamos atributo hidden */
        display: none;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tabpanel');
    // Asegurar estado inicial correcto (aunque el CSS del padre lo maneje)
    if (!this.hasAttribute('active')) {
        this.active = false; // Por si acaso no se define inicialmente
    }
    // this.hidden = !this.active; // Comentado si el padre usa display:none/block
  }

  // No necesitamos 'updated' si el padre controla la visibilidad con CSS y [active]

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-tab-panel': LmcTabPanel;
  }
}