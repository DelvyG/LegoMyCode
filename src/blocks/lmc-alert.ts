import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

  static styles = css`
    :host {
      display: block;
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
  `;

  render() {
    return html`${this.message}`;
  }
}
