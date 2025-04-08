// src/blocks/lmc-modal.ts

import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { createFocusTrap } from 'focus-trap'; // Asegúrate de instalar 'focus-trap'
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @element lmc-modal
 * @description Muestra contenido en una ventana de diálogo flotante sobre el resto de la página.
 * @version 1.0.0
 *
 * @prop {Boolean} open - Controla si el modal está visible o no. Cambiar esta propiedad muestra u oculta el modal.
 * @prop {String} [label] - Etiqueta accesible para el modal (anunciada por lectores de pantalla). Si no se proporciona, intentará usar el texto del slot 'header'.
 * @prop {Boolean} [noHeader=false] - Si es true, oculta el área del header por defecto (incluyendo el botón de cierre).
 * @prop {Boolean} [noPadding=false] - Si es true, elimina el padding por defecto del cuerpo del modal.
 * @prop {Boolean} [closeOnOverlayClick=true] - Si es true, el modal se cierra al hacer clic en el fondo semitransparente.
 * @prop {Boolean} [closeOnEsc=true] - Si es true, el modal se cierra al presionar la tecla Escape.
 *
 * @slot header - Contenido para la cabecera del modal (ej: título).
 * @slot - Contenido principal (cuerpo) del modal.
 * @slot footer - Contenido para el pie del modal (ej: botones de acción).
 *
 * @fires lmc-close - Se dispara cuando el modal solicita cerrarse (por botón 'X', clic fuera o tecla Esc). El componente padre debe escuchar este evento y poner `open` a `false`.
 * @fires lmc-open - Se dispara cuando el modal termina de abrirse y es visible.
 *
 * @cssprop [--lmc-modal-overlay-background=rgba(0, 0, 0, 0.5)] - Color y opacidad del fondo semitransparente.
 * @cssprop [--lmc-modal-background-color=white] - Color de fondo del diálogo modal.
 * @cssprop [--lmc-modal-border-radius=0.5rem] - Radio del borde del diálogo.
 * @cssprop [--lmc-modal-padding=1.5rem] - Padding interno del cuerpo del modal (si noHeader=false).
 * @cssprop [--lmc-modal-header-padding=1rem 1.5rem] - Padding de la cabecera.
 * @cssprop [--lmc-modal-footer-padding=1rem 1.5rem] - Padding del pie de página.
 * @cssprop [--lmc-modal-header-border-bottom=1px solid #eee] - Borde inferior de la cabecera.
 * @cssprop [--lmc-modal-footer-border-top=1px solid #eee] - Borde superior del pie de página.
 * @cssprop [--lmc-modal-width=500px] - Ancho del diálogo modal.
 * @cssprop [--lmc-modal-max-width=90vw] - Ancho máximo del diálogo (útil en pantallas pequeñas).
 * @cssprop [--lmc-modal-z-index=1000] - Nivel de apilamiento (z-index) del modal.
 * @cssprop [--lmc-modal-box-shadow=0 5px 15px rgba(0,0,0,.2)] - Sombra del diálogo.
 * @cssprop [--lmc-modal-close-button-color=grey] - Color del botón de cierre.
 */
@customElement('lmc-modal')
export class LmcModal extends LitElement {

  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  @property({ type: String })
  label?: string;

  @property({ type: Boolean, attribute: 'no-header' })
  noHeader: boolean = false;

  @property({ type: Boolean, attribute: 'no-padding' })
  noPadding: boolean = false;

  @property({ type: Boolean, attribute: 'close-on-overlay-click' })
  closeOnOverlayClick: boolean = true;

  @property({ type: Boolean, attribute: 'close-on-esc' })
  closeOnEsc: boolean = true;

  // Estados internos
  @state() private _isVisible: boolean = false;
  private _focusTrap: { activate: () => void; deactivate: () => void } | null = null;
  private _cleanupFocusTrap: (() => void) | null = null;

  // Queries para elementos internos
  @query('.modal-dialog') private _dialogElement!: HTMLElement;
  @query('slot[name="header"]') private _headerSlot!: HTMLSlotElement;

  static styles = css`
    :host {
      display: contents; /* No ocupa espacio por sí mismo cuando está cerrado */
    }

    .modal-overlay {
      display: none; /* Oculto por defecto */
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--lmc-modal-overlay-background, rgba(0, 0, 0, 0.5));
      z-index: var(--lmc-modal-z-index, 1000);
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }

    :host([open]) .modal-overlay {
      display: flex; /* Mostrar como flex para centrar */
      opacity: 1;
    }

    .modal-dialog {
      background-color: var(--lmc-modal-background-color, white);
      border-radius: var(--lmc-modal-border-radius, 0.5rem);
      box-shadow: var(--lmc-modal-box-shadow, 0 5px 15px rgba(0,0,0,.2));
      width: var(--lmc-modal-width, 500px);
      max-width: var(--lmc-modal-max-width, 90vw);
      max-height: 90vh; /* Evita que sea más alto que la pantalla */
      display: flex;
      flex-direction: column;
      overflow: hidden; /* Para que border-radius funcione con contenido interno */
      transform: scale(0.95);
      transition: transform 0.2s ease-out;
    }
    :host([open]) .modal-dialog {
        transform: scale(1);
    }


    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--lmc-modal-header-padding, 1rem 1.5rem);
      border-bottom: var(--lmc-modal-header-border-bottom, 1px solid #eee);
      flex-shrink: 0; /* Evita que se encoja */
    }
    header ::slotted(*) { /* Estilos para el título/contenido del slot header */
       margin: 0;
       font-size: 1.25rem;
       font-weight: bold;
       flex-grow: 1; /* Ocupa espacio */
    }
    header:empty { /* Oculta si el slot está vacío */
       display: none;
    }
    :host([no-header]) header {
       display: none;
    }


    .close-button {
      background: none;
      border: none;
      padding: 0.5rem;
      margin: -0.5rem; /* Compensa el padding */
      margin-left: 1rem;
      font-size: 1.5rem;
      line-height: 1;
      color: var(--lmc-modal-close-button-color, grey);
      cursor: pointer;
      transition: color 0.15s ease-out;
    }
    .close-button:hover {
        color: black;
    }

    main {
      flex-grow: 1; /* Ocupa el espacio restante */
      padding: var(--lmc-modal-padding, 1.5rem);
      overflow-y: auto; /* Scroll si el contenido es muy largo */
    }
     :host([no-padding]) main {
        padding: 0;
     }

    footer {
      padding: var(--lmc-modal-footer-padding, 1rem 1.5rem);
      border-top: var(--lmc-modal-footer-border-top, 1px solid #eee);
      text-align: right;
      flex-shrink: 0; /* Evita que se encoja */
    }
     footer ::slotted(*) {
        margin-left: 0.5rem; /* Espacio entre botones/elementos del footer */
     }
     footer:empty {
         display: none;
     }

  `;

  connectedCallback(): void {
    super.connectedCallback();
    this._handleDocumentKeyDown = this._handleDocumentKeyDown.bind(this); // Bind para usar removeEventListener
    if (this.open) {
        this._activate(); // Activar si se renderiza abierto
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._deactivate(); // Limpiar al desconectar
  }

  // Observa cambios en la propiedad 'open'
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    if (changedProperties.has('open')) {
      if (this.open) {
        this._activate();
      } else {
        this._deactivate();
      }
    }
  }

  private _activate() {
    // Ya está visible, no hacer nada extra
    if (this._isVisible) return;

    this._isVisible = true;
    document.addEventListener('keydown', this._handleDocumentKeyDown);

    // Esperar a que termine la transición CSS antes de activar focus trap
    // y emitir evento 'open'
    // Nota: Usar requestAnimationFrame o un pequeño timeout es más simple
    // que escuchar transitionend que puede ser complejo.
    requestAnimationFrame(() => {
        if (!this.open) return; // Comprobar si se cerró rápidamente

        this._initializeFocusTrap();
        this.dispatchEvent(new CustomEvent('lmc-open', { bubbles: true, composed: true }));
    });
  }

  private _deactivate() {
      if (!this._isVisible) return; // Ya inactivo

      this._isVisible = false;
      document.removeEventListener('keydown', this._handleDocumentKeyDown);
      this._cleanupFocusTrap?.(); // Desactivar focus trap
  }

  private _initializeFocusTrap() {
      if (!this.open || !this._dialogElement) return;

      try {
          // Inicializar focus-trap.
          // Nota: Podrías necesitar configurar opciones específicas si hay iframes o web components anidados.
          this._focusTrap = createFocusTrap(this._dialogElement, { initialFocus: this._dialogElement });
          this._focusTrap?.activate();
          this._cleanupFocusTrap = () => this._focusTrap?.deactivate();
      } catch (e) {
          console.error('Error initializing focus trap:', e);
      }
  }


  private _handleOverlayClick(event: MouseEvent) {
    // Cierra solo si se hace clic directamente en el overlay
    if (this.closeOnOverlayClick && event.target === this.shadowRoot?.querySelector('.modal-overlay')) {
      this._requestClose('overlay-click');
    }
  }

  private _handleCloseButtonClick() {
    this._requestClose('close-button');
  }

  private _handleDocumentKeyDown(event: KeyboardEvent) {
    if (this.closeOnEsc && event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      this._requestClose('escape-key');
    }
  }

  private _requestClose(reason: string) {
    console.log(`lmc-modal: Requesting close (reason: ${reason})`);
    // No cambiamos 'open' aquí directamente. Emitimos un evento.
    this.dispatchEvent(new CustomEvent('lmc-close', {
        detail: { reason },
        bubbles: true,
        composed: true
    }));
    // El componente padre es responsable de poner this.open = false;
  }

  private _getAriaLabel(): string | undefined {
      if (this.label) return this.label;
      // Intenta usar el texto del header como fallback
      const headerNodes = this._headerSlot?.assignedNodes({ flatten: true });
      return headerNodes?.map(node => node.textContent?.trim()).filter(Boolean).join(' ') || undefined;
  }


  render() {
    // Usamos 'nothing' de Lit para no renderizar nada si no está abierto (más eficiente)
    // aunque el CSS con display:none también funciona.
    // return this.open ? html`...` : nothing;
    // O dejamos que CSS maneje la visibilidad con :host([open])

    return html`
      <div
        class="modal-overlay"
        part="overlay"
        @click=${this._handleOverlayClick}
      >
        <div
          class="modal-dialog"
          part="dialog"
          role="dialog"
          aria-modal="true"
          aria-label=${ifDefined(this._getAriaLabel())}
          aria-hidden=${!this.open}
        >
          ${!this.noHeader ? html`
            <header part="header">
              <slot name="header"></slot>
              <button
                class="close-button"
                part="close-button"
                aria-label="Cerrar diálogo"
                @click=${this._handleCloseButtonClick}
              >
                × <!-- Símbolo 'X' -->
              </button>
            </header>
          ` : nothing}

          <main part="body">
            <slot></slot> <!-- Slot por defecto para el contenido principal -->
          </main>

          <footer part="footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-modal': LmcModal;
  }
}