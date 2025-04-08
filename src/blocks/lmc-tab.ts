// src/blocks/lmc-tab.ts
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-tab
 * @description Representa el encabezado clickeable de una pestaña dentro de un `lmc-tab-group`.
 * @version 1.0.0
 *
 * @prop {String} panel - El ID del `lmc-tab-panel` asociado a esta pestaña. Requerido.
 * @prop {Boolean} [active=false] - (Gestionado por lmc-tab-group) Indica si esta pestaña es la activa.
 * @prop {Boolean} [disabled=false] - Si es true, la pestaña no es interactiva.
 *
 * @slot - El contenido del encabezado de la pestaña (texto, icono, etc.).
 *
 * @fires lmc-tab-selected - Evento interno que se dispara al hacer clic, indicando al `lmc-tab-group` que esta pestaña quiere activarse. detail: { panelId: string }
 *
 * @cssprop [--lmc-tab-padding=0.75rem 1.25rem] - Padding del encabezado de la pestaña.
 * @cssprop [--lmc-tab-color=inherit] - Color del texto.
 * @cssprop [--lmc-tab-color-hover=var(--lmc-tab-color)] - Color del texto al pasar el ratón.
 * @cssprop [--lmc-tab-color-active=var(--lmc-global-color-primary, blue)] - Color del texto cuando está activo.
 * @cssprop [--lmc-tab-background-hover=rgba(0,0,0,0.05)] - Fondo ligero al pasar el ratón.
 * @cssprop [--lmc-tab-border-color-active=var(--lmc-tab-color-active)] - Color del borde inferior cuando está activo.
 * @cssprop [--lmc-tab-border-width-active=2px] - Ancho del borde inferior cuando está activo.
 * @cssprop [--lmc-tab-opacity-disabled=0.5] - Opacidad cuando está deshabilitado.
 */
@customElement('lmc-tab')
export class LmcTab extends LitElement {

  @property({ type: String, reflect: true }) // Reflejar panel puede ser útil para CSS
  panel!: string;

  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  static styles = css`
    :host {
      display: inline-block;
      cursor: pointer;
      border-bottom: var(--lmc-tab-border-width-active, 2px) solid transparent; /* Espacio para el borde activo */
      margin-bottom: calc(-1 * var(--lmc-tab-border-width-active, 2px)); /* Compensa el borde para alinear con otros */
      transition: border-color 0.2s ease-out, color 0.2s ease-out, background-color 0.2s ease-out;
    }

    button {
      all: inherit; /* Hereda estilos del host (cursor, etc.) */
      font-family: inherit;
      font-size: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: var(--lmc-tab-padding, 0.75rem 1.25rem);
      border: none;
      background-color: transparent;
      color: var(--lmc-tab-color, inherit);
      white-space: nowrap;
    }

    :host(:not([disabled])) button:hover {
      background-color: var(--lmc-tab-background-hover, rgba(0,0,0,0.05));
      color: var(--lmc-tab-color-hover, var(--lmc-tab-color, inherit));
    }

    :host([active]:not([disabled])) {
      color: var(--lmc-tab-color-active, var(--lmc-global-color-primary, blue));
      border-color: var(--lmc-tab-border-color-active, var(--lmc-tab-color-active, var(--lmc-global-color-primary, blue)));
    }
     /* Sobrescribe hover si está activo */
     :host([active]:not([disabled])) button:hover {
         background-color: transparent;
         color: var(--lmc-tab-color-active, var(--lmc-global-color-primary, blue));
     }


    :host([disabled]) {
      cursor: not-allowed;
      opacity: var(--lmc-tab-opacity-disabled, 0.5);
    }
    :host([disabled]) button {
        pointer-events: none; /* Asegura que el botón interno no reciba clics */
    }

  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
    // Los atributos aria-* se manejan en el render y cuando cambie 'active'/'panel'
  }

  private _handleClick() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('lmc-tab-selected', {
        detail: { panelId: this.panel },
        bubbles: true, // Sube hasta el tab-group
        composed: true // Cruza Shadow DOM
      }));
    }
  }

  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    // Actualiza aria-selected cuando cambia 'active'
    if (changedProperties.has('active')) {
      this.setAttribute('aria-selected', this.active ? 'true' : 'false');
    }
    // Actualiza aria-controls cuando cambia 'panel' (o al inicio)
    if (changedProperties.has('panel') || !this.hasAttribute('aria-controls')) {
      this.setAttribute('aria-controls', this.panel);
    }
    // Asegura que tenga un ID para ser referenciado por el panel
    if (!this.id) {
        this.id = `lmc-tab-${this.panel || Math.random().toString(36).substring(2)}`;
    }
  }


  render() {
    // Asegura que el panel tenga un ID para aria-labelledby
    // (Se gestionará mejor en el panel, pero es una idea)
    // const panelId = this.panel; // Ya viene de la propiedad

    return html`
      <button
        @click=${this._handleClick}
        role="presentation" /* El rol 'tab' está en el host */
        tabindex=${this.active ? 0 : -1} /* Solo el tab activo es enfocable */
        ?disabled=${this.disabled}
        part="button"
      >
        <slot part="content"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-tab': LmcTab;
  }
}