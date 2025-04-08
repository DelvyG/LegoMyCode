// src/blocks/lmc-spinner.ts

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-spinner
 * @description Muestra una animación simple para indicar carga o procesamiento.
 * @version 1.0.0
 *
 * @prop {String} [label='Cargando...'] - Texto accesible (aria-label) para describir qué está cargando.
 * @prop {String} [size] - Tamaño del spinner (ej: '24px', '3em'). Si no se especifica, usa la variable CSS.
 *
 * @cssprop [--lmc-spinner-color=var(--lmc-global-color-primary, blue)] - Color del indicador giratorio.
 * @cssprop [--lmc-spinner-track-color=#eee] - Color del fondo o "riel" del spinner.
 * @cssprop [--lmc-spinner-size=2em] - Tamaño (ancho y alto) por defecto del spinner.
 * @cssprop [--lmc-spinner-border-width=3px] - Grosor del borde del spinner.
 * @cssprop [--lmc-spinner-speed=0.8s] - Velocidad de la animación de rotación.
 */
@customElement('lmc-spinner')
export class LmcSpinner extends LitElement {

  @property({ type: String })
  label: string = 'Cargando...';

  @property({ type: String })
  size?: string;

  static styles = css`
    :host {
      display: inline-flex; /* Para alinearse bien con texto u otros elementos */
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      /* Usa la prop size si existe, si no, la variable CSS, si no, el default */
      width: var(--_lmc-spinner-size-prop, var(--lmc-spinner-size, 2em));
      height: var(--_lmc-spinner-size-prop, var(--lmc-spinner-size, 2em));
      vertical-align: middle;
    }

    .spinner {
      box-sizing: border-box;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: var(--lmc-spinner-border-width, 3px) solid var(--lmc-spinner-track-color, #eee);
      border-top-color: var(--lmc-spinner-color, var(--lmc-global-color-primary, blue));
      animation: lmc-spin var(--lmc-spinner-speed, 0.8s) linear infinite;
    }

    @keyframes lmc-spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Para accesibilidad: Oculta visualmente el span, pero es leído por lectores de pantalla */
    .visually-hidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      white-space: nowrap;
    }
  `;

  // Actualiza la variable CSS interna cuando la propiedad 'size' cambia
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('size') && this.size) {
      this.style.setProperty('--_lmc-spinner-size-prop', this.size);
    } else if (changedProperties.has('size') && !this.size) {
        this.style.removeProperty('--_lmc-spinner-size-prop');
    }
  }

  render() {
    return html`
      <div
        class="spinner"
        role="status"
        aria-label=${this.label}
        part="spinner"
      >
        <span class="visually-hidden">${this.label}</span>
      </div>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-spinner': LmcSpinner;
  }
}