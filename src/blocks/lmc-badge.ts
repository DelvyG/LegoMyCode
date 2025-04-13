import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-badge
 * @description Un pequeño distintivo (badge) para mostrar un valor numérico, un estado o una etiqueta.
 * @version 1.0.0
 *
 * @prop {Number} value - El valor a mostrar en el badge.
 * @prop {'primary' | 'secondary' | 'success' | 'warning' | 'danger'} type - Tipo de badge.
 *
 * @cssprop [--lmc-badge-font-size=0.75rem] - Tamaño de la fuente.
 * @cssprop [--lmc-badge-padding=0.25rem 0.5rem] - Padding interno.
 * @cssprop [--lmc-badge-border-radius=0.25rem] - Radio del borde.
 * @cssprop [--lmc-badge-color=#fff] - Color del texto.
 * @cssprop [--lmc-badge-background-color=#6c757d] - Color de fondo.
 * @cssprop [--lmc-badge-primary-background-color=#007bff] - Color de fondo para el tipo 'primary'.
 * @cssprop [--lmc-badge-primary-color=#fff] - Color del texto para el tipo 'primary'.
 * @cssprop [--lmc-badge-success-background-color=#28a745] - Color de fondo para el tipo 'success'.
 * @cssprop [--lmc-badge-success-color=#fff] - Color del texto para el tipo 'success'.
 * @cssprop [--lmc-badge-warning-background-color=#ffc107] - Color de fondo para el tipo 'warning'.
 * @cssprop [--lmc-badge-warning-color=#212529] - Color del texto para el tipo 'warning'.
 * @cssprop [--lmc-badge-danger-background-color=#dc3545] - Color de fondo para el tipo 'danger'.
 * @cssprop [--lmc-badge-danger-color=#fff] - Color del texto para el tipo 'danger'.
 */
@customElement('lmc-badge')
export class LmcBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      font-size: var(--lmc-badge-font-size, 0.75rem);
      padding: var(--lmc-badge-padding, 0.25rem 0.5rem);
      border-radius: var(--lmc-badge-border-radius, 0.25rem);
      color: var(--lmc-badge-color, #fff);
      background-color: var(--lmc-badge-background-color, #6c757d);
    }

    :host([type="primary"]) {
      background-color: var(--lmc-badge-primary-background-color, #007bff);
      color: var(--lmc-badge-primary-color, #fff);
    }

    :host([type="success"]) {
      background-color: var(--lmc-badge-success-background-color, #28a745);
      color: var(--lmc-badge-success-color, #fff);
    }

    :host([type="warning"]) {
      background-color: var(--lmc-badge-warning-background-color, #ffc107);
      color: var(--lmc-badge-warning-color, #212529);
    }

    :host([type="danger"]) {
      background-color: var(--lmc-badge-danger-background-color, #dc3545);
      color: var(--lmc-badge-danger-color, #fff);
    }
  `;

  @property({ type: Number }) value = 0;
  @property({ type: String, reflect: true }) type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'secondary';

  render() {
    return html`${this.value}`;
  }
}