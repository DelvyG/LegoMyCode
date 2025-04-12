import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../blocks/lmc-container';
import '../blocks/lmc-grid';
import '../blocks/lmc-card';
import '../blocks/lmc-simple-image';

@customElement('lmc-page-layout')
export class LmcPageLayout extends LitElement {
  static styles = css`
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .card {
      border: 1px solid #ccc;
      padding: 16px;
      margin-bottom: 16px;
    }
  `;

  render() {
    return html`
      <lmc-container>
        <h1>Layout y Tarjetas</h1>
        <p>Ejemplos de cómo usar <code>lmc-container</code>, <code>lmc-grid</code>, <code>lmc-card</code> y <code>lmc-simple-image</code> para crear layouts.</p>

        <h2>Grid Layout</h2>
        <p>Un ejemplo simple usando <code>lmc-grid</code> para un layout de dos columnas:</p>
        <lmc-grid columns="2">
          <div>
            <h3>Columna 1</h3>
            <p>Contenido de la columna 1.</p>
          </div>
          <div>
            <h3>Columna 2</h3>
            <p>Contenido de la columna 2.</p>
          </div>
        </lmc-grid>

        <h2>Card Layout</h2>
        <p>Ejemplos de cómo usar <code>lmc-card</code>:</p>
        <div class="card-grid">
          <lmc-card title="Tarjeta 1">
            <p>Este es el contenido de la tarjeta 1.</p>
          </lmc-card>

          <lmc-card title="Tarjeta 2">
            <lmc-simple-image src="https://via.placeholder.com/300x200" alt="Imagen de ejemplo"></lmc-simple-image>
            <p>Este es el contenido de la tarjeta 2 con una imagen.</p>
          </lmc-card>

          <lmc-card title="Tarjeta 3">
            <ul>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
            </ul>
          </lmc-card>
        </div>
      </lmc-container>
    `;
  }
}