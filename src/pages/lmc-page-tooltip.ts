import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../blocks/lmc-container';
import '../blocks/lmc-tooltip';
import '../blocks/lmc-basic-button';
import '../blocks/lmc-icon';

@customElement('lmc-page-tooltip')
export class LmcPageTooltip extends LitElement {
  static styles = css`
    .tooltip-container {
      margin-bottom: 20px;
    }

    /* Ejemplo de personalización global de tooltips */
    :host {
      --lmc-tooltip-background-color: #4CAF50; /* Verde */
      --lmc-tooltip-text-color: white;
      --lmc-tooltip-border-radius: 8px;
    }

    /* Ejemplo de personalización local (dentro de este componente) */
    .custom-tooltip {
      --lmc-tooltip-background-color: navy;
      --lmc-tooltip-text-color: yellow;
      --lmc-tooltip-padding: 10px;
      --lmc-tooltip-font-size: 14px;
    }
  `;

  render() {
    return html`
      <lmc-container>
        <h1>Demo de Tooltip</h1>
        <p>Esta página demuestra el uso y la personalización del componente <code>lmc-tooltip</code>.</p>

        <div class="tooltip-container">
          <h2>Tooltip Básico</h2>
          <lmc-tooltip text="Este es un tooltip básico.">
            <span>Pasa el ratón por encima</span>
          </lmc-tooltip>
        </div>

        <div class="tooltip-container">
          <h2>Tooltip con diferentes posiciones</h2>
          <lmc-tooltip text="Tooltip en la parte inferior" position="bottom">
            <span>Pasa el ratón por encima (abajo)</span>
          </lmc-tooltip>
          <lmc-tooltip text="Tooltip a la izquierda" position="left">
            <span>Pasa el ratón por encima (izquierda)</span>
          </lmc-tooltip>
          <lmc-tooltip text="Tooltip a la derecha" position="right">
            <span>Pasa el ratón por encima (derecha)</span>
          </lmc-tooltip>
        </div>

        <div class="tooltip-container">
          <h2>Tooltip con contenido HTML</h2>
          <lmc-tooltip text="¡Puedes usar HTML aquí! Como un icono: <lmc-icon name='info'></lmc-icon>">
            <span>Pasa el ratón para ver HTML</span>
          </lmc-tooltip>
        </div>

        <div class="tooltip-container">
          <h2>Tooltip con un Botón</h2>
           <lmc-tooltip text="Este es un tooltip para un botón">
            <lmc-basic-button>Botón con Tooltip</lmc-basic-button>
          </lmc-tooltip>
        </div>


        <div class="tooltip-container">
          <h2>Tooltip Personalizado (Variables CSS)</h2>
          <p>Este tooltip se personaliza usando variables CSS definidas en los estilos de este componente.</p>
          <lmc-tooltip class="custom-tooltip" text="¡Tooltip personalizado!">
            <span>Pasa el ratón para ver el estilo personalizado</span>
          </lmc-tooltip>
        </div>

        <div class="tooltip-container">
            <h2>Personalización Global del Tooltip</h2>
            <p>Todos los tooltips en esta página heredan los estilos globales (fondo verde, etc.) definidos en la parte superior de los estilos de este componente.</p>
            <lmc-tooltip text="Este hereda estilos globales.">
                <span>Pasa el ratón (Global)</span>
            </lmc-tooltip>
        </div>

      </lmc-container>
    `;
  }
}