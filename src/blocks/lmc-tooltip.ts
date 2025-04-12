import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('lmc-tooltip')
export class LmcTooltip extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: inline-block; /* Permite que el tooltip se posicione correctamente */
    }

    .tooltip {
      visibility: hidden;
      background-color: var(--lmc-tooltip-background-color, #333);
      color: var(--lmc-tooltip-text-color, #fff);
      text-align: center;
      padding: var(--lmc-tooltip-padding, 5px);
      border-radius: var(--lmc-tooltip-border-radius, 4px);
      font-size: var(--lmc-tooltip-font-size, 12px);
      position: absolute;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.3s;
      /* Posicionamiento por defecto (arriba) */
      bottom: 125%;
      left: 50%;
      margin-left: -50%;
    }

    :host(:hover) .tooltip {
      visibility: visible;
      opacity: 1;
    }

    /* Posiciones alternativas */
    :host([position="bottom"]) .tooltip {
      top: 125%;
      bottom: auto;
    }

    :host([position="left"]) .tooltip {
      right: 125%;
      left: auto;
      top: 50%;
      transform: translateY(-50%);
    }

    :host([position="right"]) .tooltip {
      left: 125%;
      right: auto;
      top: 50%;
      transform: translateY(-50%);
    }

    /* Contenido (lo que dispara el tooltip) */
    .content {
      display: inline-block; /* Para que el host se ajuste al tamaño del contenido */
    }
  `;

  @property({ type: String }) text = '';
  @property({ type: String, reflect: true }) position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  render() {
    return html`
      <div class="content">
        <slot></slot>
      </div>
      <div class="tooltip">${this.text}</div>
    `;
  }
}