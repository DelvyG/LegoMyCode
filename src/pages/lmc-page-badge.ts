import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../blocks/lmc-container';
import '../blocks/lmc-badge';
import '../blocks/lmc-text-display';

@customElement('lmc-page-badge')
export class LmcPageBadge extends LitElement {
  static styles = css`
    .badge-container {
      margin-bottom: 20px;
    }

    /* Ejemplo de personalización global de badges */
    :host {
      --lmc-badge-font-size: 1rem;
      --lmc-badge-padding: 0.5rem 0.75rem;
    }

    /* Ejemplo de personalización local (dentro de este componente) */
    .custom-badge {
      --lmc-badge-background-color: purple;
      --lmc-badge-color: white;
      --lmc-badge-border-radius: 10px;
    }
  `;

  render() {
    return html`
      <lmc-container>
        <lmc-text-display level="h1">Demo de Badge</lmc-text-display>
        <lmc-text-display level="p">
          Esta página demuestra el uso y la personalización del componente <code>lmc-badge</code>.
        </lmc-text-display>

        <div class="badge-container">
          <h2>Badge Básico</h2>
          <lmc-badge value="10"></lmc-badge>
        </div>

        <div class="badge-container">
          <h2>Badge con diferentes tipos</h2>
          <lmc-badge type="primary"></lmc-badge>
          <lmc-badge type="secondary"></lmc-badge>
          <lmc-badge type="success"></lmc-badge>
          <lmc-badge type="warning"></lmc-badge>
          <lmc-badge type="danger"></lmc-badge>
        </div>

        <div class="badge-container">
          <h2>Badge Personalizado (Variables CSS)</h2>
          <p>Este badge se personaliza usando variables CSS definidas en los estilos de este componente.</p>
          <lmc-badge class="custom-badge" value="42"></lmc-badge>
        </div>

        <div class="badge-container">
            <h2>Global Tooltip Customization</h2>
            <p>Todos los badges en esta página heredan los estilos globales definidos en la parte superior de los estilos de este componente.</p>
            <lmc-badge value="1"  ></lmc-badge>
        </div>

      </lmc-container>
    `;
  }
}