// src/blocks/lmc-snackbar.ts

import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-snackbar
 * @description Muestra notificaciones temporales (toasts) en una posición fija de la pantalla.
 * @version 1.1.0 (Simplificado)
 *
 * @prop {Boolean} open - Controla si el snackbar está visible. Cambiar a true lo muestra por la duración especificada.
 * @prop {String} message - El mensaje principal a mostrar.
 * @prop {'info' | 'success' | 'warning' | 'danger'} [type='info'] - Tipo de notificación, afecta el estilo.
 * @prop {Number} [duration=4000] - Duración en milisegundos antes de ocultarse automáticamente. 0 o negativo para persistente.
 * @prop {'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right'} [position='bottom-center'] - Posición en la pantalla.
 * @prop {String} [actionText] - Texto opcional para un botón de acción.
 *
 * @slot action - Permite insertar un botón u otro elemento de acción personalizado en lugar de usar `actionText`.
 *
 * @fires lmc-close - Se dispara cuando el snackbar se cierra (automáticamente o por acción). detail: { reason: 'timeout' | 'action' | 'programmatic' }
 * @fires lmc-action - Se dispara cuando se hace clic en el botón de acción (si existe via `actionText` o slot `action`).
 *
 * @cssprop [--lmc-snackbar-background-info=#333] - Fondo para tipo 'info'.
 * @cssprop [--lmc-snackbar-color-info=white] - Color de texto para 'info'.
 * (Define aquí el resto de las variables CSS como antes)
 * @cssprop [--lmc-snackbar-padding=0.8rem 1.5rem] - Padding interno.
 * @cssprop [--lmc-snackbar-border-radius=4px] - Radio del borde.
 * @cssprop [--lmc-snackbar-box-shadow=0 3px 5px rgba(0,0,0,.2)] - Sombra.
 * @cssprop [--lmc-snackbar-z-index=1010] - Nivel de apilamiento (z-index).
 * @cssprop [--lmc-snackbar-margin=1rem] - Margen respecto al borde de la pantalla.
 * @cssprop [--lmc-snackbar-min-width=280px] - Ancho mínimo.
 * @cssprop [--lmc-snackbar-max-width=500px] - Ancho máximo.
 * @cssprop [--lmc-snackbar-action-color=var(--lmc-global-color-accent, #bb86fc)] - Color del botón de acción.
 */
@customElement('lmc-snackbar')
export class LmcSnackbar extends LitElement {

  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  @property({ type: String })
  message: string = '';

  @property({ type: String, reflect: true })
  type: 'info' | 'success' | 'warning' | 'danger' = 'info';

  @property({ type: Number })
  duration: number = 4000;

  @property({ type: String, reflect: true })
  position: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right' = 'bottom-center';

  @property({ type: String, attribute: 'action-text' })
  actionText?: string;

  // Eliminamos el estado interno _show
  private _hideTimeoutId?: ReturnType<typeof setTimeout>;

  static styles = css`
    :host {
      display: block;
      position: fixed;
      z-index: var(--lmc-snackbar-z-index, 1010);
      /* Empieza invisible y fuera de lugar para la animación */
      opacity: 0;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
      pointer-events: none; /* No interactivo cuando está oculto */
      outline: none;
      box-sizing: border-box; /* Importante para consistencia */
      /* Posicionamiento por defecto (bottom-center) */
      bottom: var(--lmc-snackbar-margin, 1rem);
      left: 50%;
      transform: translateX(-50%) translateY(100%); /* Abajo y centrado */
    }

    /* Ajustes de posición */
    :host([position^='top-']) {
        top: var(--lmc-snackbar-margin, 1rem);
        bottom: auto;
        transform: translateX(-50%) translateY(-100%); /* Arriba y centrado */
    }
    :host([position*='-left']) {
        left: var(--lmc-snackbar-margin, 1rem);
        right: auto;
        /* Necesitamos quitar el translateX para left/right */
        transform: translateY(100%); /* Abajo a la izquierda (para bottom-left) */
    }
     :host([position='top-left']) {
         transform: translateY(-100%); /* Arriba a la izquierda */
     }

    :host([position*='-right']) {
        right: var(--lmc-snackbar-margin, 1rem);
        left: auto;
        transform: translateY(100%); /* Abajo a la derecha (para bottom-right) */
    }
     :host([position='top-right']) {
         transform: translateY(-100%); /* Arriba a la derecha */
     }


    /* Estado Visible: se controla solo con el atributo 'open' */
    :host([open]) {
      opacity: 1;
      pointer-events: auto; /* Se vuelve interactivo */
      /* Ajusta la transformación final según la posición */
      transform: translateX(0) translateY(0); /* Posición final por defecto */
    }
     /* Ajuste para centrado horizontal cuando está open */
     :host([open][position*='-center']) {
         transform: translateX(-50%) translateY(0);
     }
      /* Ajuste para left/right cuando está open */
     :host([open][position*='-left']:not([position*='center'])),
     :host([open][position*='-right']:not([position*='center'])) {
         transform: translateY(0);
     }


    .snackbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--lmc-snackbar-padding, 0.8rem 1.5rem);
      border-radius: var(--lmc-snackbar-border-radius, 4px);
      box-shadow: var(--lmc-snackbar-box-shadow, 0 3px 5px rgba(0,0,0,.2));
      min-width: var(--lmc-snackbar-min-width, 280px);
      max-width: var(--lmc-snackbar-max-width, 500px);
      box-sizing: border-box;
      pointer-events: auto;
      /* Colores por defecto (tipo info) */
      background-color: var(--lmc-snackbar-background-info, #333);
      color: var(--lmc-snackbar-color-info, white);
    }

    /* Estilos por tipo */
    :host([type='success']) .snackbar {
      background-color: var(--lmc-snackbar-background-success, #4CAF50);
      color: var(--lmc-snackbar-color-success, white);
    }
    :host([type='warning']) .snackbar {
      background-color: var(--lmc-snackbar-background-warning, #ff9800);
      color: var(--lmc-snackbar-color-warning, white);
    }
     :host([type='danger']) .snackbar {
      background-color: var(--lmc-snackbar-background-danger, #f44336);
      color: var(--lmc-snackbar-color-danger, white);
    }

    .message {
      flex-grow: 1;
      margin-right: 1rem;
    }

    .action ::slotted(button),
    .action lmc-basic-button, /* Si permites botones LegoMyCode dentro */
    .action button {
      background: none;
      border: none;
      color: var(--lmc-snackbar-action-color, var(--lmc-global-color-accent, #bb86fc));
      cursor: pointer;
      font-weight: bold;
      padding: 0.5rem;
      margin: -0.5rem;
      text-transform: uppercase;
      white-space: nowrap;
      font-size: 0.9em; /* Un poco más pequeño */
    }
     .action ::slotted(button:hover),
     .action lmc-basic-button:hover,
     .action button:hover {
         filter: brightness(1.2);
     }
  `;

  // El método updated ahora solo gestiona el temporizador
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    console.log('[lmc-snackbar] updated. open=', this.open); // Log para ver si se ejecuta
    if (changedProperties.has('open')) {
      if (this.open) {
        console.log('[lmc-snackbar] Starting hide timer.');
        this._startHideTimeout();
      } else {
        console.log('[lmc-snackbar] Clearing hide timer (because open is false).');
        this._clearHideTimeout();
      }
    }
  }

  private _startHideTimeout() {
    this._clearHideTimeout();
    if (this.duration > 0) {
      console.log(`[lmc-snackbar] Timeout set for ${this.duration}ms`);
      this._hideTimeoutId = setTimeout(() => {
        console.log('[lmc-snackbar] Timeout finished. Requesting close.');
        // En lugar de poner open = false directamente, emitimos el evento
        // para que el padre controle el estado.
        this._emitClose('timeout');
      }, this.duration);
    }
  }

  private _clearHideTimeout() {
    if (this._hideTimeoutId) {
      console.log('[lmc-snackbar] Clearing existing timeout.');
      clearTimeout(this._hideTimeoutId);
      this._hideTimeoutId = undefined;
    }
  }

  private _handleActionClick() {
    console.log('[lmc-snackbar] Action button clicked.');
    this.dispatchEvent(new CustomEvent('lmc-action', { bubbles: true, composed: true }));
    // Emitimos close aquí también, ya que la acción suele cerrar el snackbar
    this._emitClose('action');
    // No cambiamos this.open = false aquí, dejamos que el padre lo haga
    this._clearHideTimeout(); // Limpia el timer si la acción lo cierra antes
  }

  private _emitClose(reason: 'timeout' | 'action') {
    console.log(`[lmc-snackbar] Emitting close event (reason: ${reason})`);
    this.dispatchEvent(new CustomEvent('lmc-close', {
        detail: { reason },
        bubbles: true,
        composed: true
    }));
  }

  render() {
    console.log(`[lmc-snackbar] render: open=${this.open}`); // Log para ver si renderiza
    // No necesitamos classMap si usamos el atributo :host([open]) para la animación

    // Renderizamos la estructura interna solo si open es true,
    // pero la visibilidad y animación final la controla el CSS del :host
    return this.open ? html`
      <div
        class="snackbar"
        role="alert"
        aria-live="assertive"
        part="container"
      >
        <span class="message" part="message">${this.message}</span>
        <span class="action" part="action">
          <slot name="action">
            ${this.actionText ? html`
              <button type="button" @click=${this._handleActionClick}>${this.actionText}</button>
            ` : nothing }
          </slot>
        </span>
      </div>
    ` : nothing;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-snackbar': LmcSnackbar;
  }
}




