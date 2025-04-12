import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

/**
 * @element lmc-alert
 * @description Componente de alerta para mostrar mensajes informativos, de éxito, advertencia o error.
 *
 * @cssprop --lmc-alert-info-background-color - Color de fondo para tipo "info".
 * @cssprop --lmc-alert-info-text-color - Color de texto para tipo "info".
 *
 * @cssprop --lmc-alert-success-background-color - Color de fondo para tipo "success".
 * @cssprop --lmc-alert-success-text-color - Color de texto para tipo "success".
 *
 * @cssprop --lmc-alert-warning-background-color - Color de fondo para tipo "warning".
 * @cssprop --lmc-alert-warning-text-color - Color de texto para tipo "warning".
 *
 * @cssprop --lmc-alert-danger-background-color - Color de fondo para tipo "danger".
 * @cssprop --lmc-alert-danger-text-color - Color de texto para tipo "danger".
 *
 * @fires lmc-close - Disparado cuando el usuario cierra la alerta.
 */
@customElement('lmc-alert')
export class LmcAlert extends LitElement {
  /**
   * Mensaje que se mostrará en la alerta.
   */
  @property({ type: String })
  message!: string;

  /**
   * Tipo de alerta: 'info' | 'success' | 'warning' | 'danger'.
   * Afecta los colores visuales del componente.
   * @default 'info'
   */
  @property({ type: String })
  type: 'info' | 'success' | 'warning' | 'danger' = 'info';

   /**
   * Indica si la alerta puede ser cerrada por el usuario.
   */
  @property({ type: Boolean, reflect: true })
  closable = false;

  static styles = css`
    :host {
      display: flex; /* Use flexbox for alignment */
      align-items: center;
      justify-content: space-between; /* Push close button to the right */
      padding: 1rem;
      border-radius: 0.5rem;
      font-family: sans-serif;
      font-size: 1rem;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    :host([type='info']) {
      background-color: var(--lmc-alert-info-background-color, #e0f0ff);
      color: var(--lmc-alert-info-text-color, #035388);
    }

    :host([type='success']) {
      background-color: var(--lmc-alert-success-background-color, #d3f9d8);
      color: var(--lmc-alert-success-text-color, #2b7a0b);
    }

    :host([type='warning']) {
      background-color: var(--lmc-alert-warning-background-color, #fff3cd);
      color: var(--lmc-alert-warning-text-color, #856404);
    }

    :host([type='danger']) {
      background-color: var(--lmc-alert-danger-background-color, #f8d7da);
      color: var(--lmc-alert-danger-text-color, #721c24);
    }

    /* Estilos para el botón de cerrar */
    .close-button {
      background: none;
      border: none;
      color: inherit; /* Inherit text color from the alert */
      cursor: pointer;
      font-size: 1.2rem;
      padding: 0;
      margin-left: 1rem; /* Space between message and button */
    }
    .close-button:hover {
      opacity: 0.8;
    }

    /* Hide close button when not closable */
    :host(:not([closable])) .close-button {
      display: none;
    }
  `;

  private _handleClose() {
    this.dispatchEvent(new CustomEvent('lmc-close', { bubbles: true, composed: true }));
  }


  render() {
    return html`
      <span>${unsafeHTML(this.message)}</span>
      ${this.closable ? html`<button class="close-button" @click=${this._handleClose}>×</button>` : ''}
    `;
  }
}