// src/blocks/lmc-tab-panel.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-tab-panel
 * @description Representa el panel de contenido asociado a una `lmc-tab` dentro de un `lmc-tab-group`.
 * @version 1.0.0
 *
 * @prop {Boolean} [active=false] - (Gestionado por lmc-tab-group) Indica si este panel es el activo y debe mostrarse.
 * @prop {String} id - ID único para este panel, referenciado por la propiedad `panel` de `lmc-tab`. Requerido.
 *
 * @slot - El contenido HTML a mostrar cuando esta pestaña esté activa.
 *
 * @cssprop [--lmc-tab-panel-padding=1.5rem] - Padding interno del panel de contenido.
 */
@customElement('lmc-tab-panel')
export class LmcTabPanel extends LitElement {

  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  // Forzamos a que el ID sea requerido
  @property({ type: String, reflect: true })
  override id!: string;

  static styles = css`
    :host {
      display: none; /* Oculto por defecto */
      padding: var(--lmc-tab-panel-padding, 1.5rem);
      box-sizing: border-box;
    }

    :host([active]) {
      display: block; /* Visible cuando está activo */
    }
  `;

   connectedCallback(): void {
       super.connectedCallback();
       this.setAttribute('role', 'tabpanel');
       // Aseguramos que el id exista aunque no se ponga en el html (menos ideal)
       if (!this.id) {
           this.id = `lmc-panel-${Math.random().toString(36).substring(2)}`;
           console.warn('lmc-tab-panel: Se generó un ID automáticamente. Es recomendable asignar un ID explícito.', this);
       }
       // Nota: El aria-labelledby debería establecerlo el tab-group al saber qué tab lo controla
   }

  render() {
    // Ocultamos con CSS, así que solo renderizamos el slot
    return html`<slot part="content"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-tab-panel': LmcTabPanel;
  }
}