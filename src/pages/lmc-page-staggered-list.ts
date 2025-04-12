import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../blocks/lmc-container';
import '../blocks/lmc-staggered-list';
import '../blocks/lmc-card';

@customElement('lmc-page-staggered-list')
export class LmcPageStaggeredList extends LitElement {
  static styles = css`
    .example-list {
      list-style: none;
      padding: 0;
    }

    .example-list li {
      padding: 10px;
      border: 1px solid #eee;
      margin-bottom: 5px;
      background-color: #f9f9f9;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .horizontal-list {
        display: flex;
        gap: 10px;
    }
  `;

  render() {
    return html`
      <lmc-container>
        <h1>Demo de Lista Escalonada</h1>
        <p>Esta página demuestra el componente <code>lmc-staggered-list</code>, que muestra una lista de elementos con una aparición escalonada.</p>

        <h2>Lista Escalonada Básica</h2>
        <lmc-staggered-list>
          <ul class="example-list">
            <li>Elemento 1</li>
            <li>Elemento 2</li>
            <li>Elemento 3</li>
            <li>Elemento 4</li>
          </ul>
        </lmc-staggered-list>

        <h2>Lista Escalonada con Animación</h2>
        <p>Este ejemplo utiliza una animación <code>fadeIn</code> para cada elemento de la lista.</p>
        <lmc-staggered-list animation="fadeIn">
          <ul class="example-list">
            <li>Elemento A</li>
            <li>Elemento B</li>
            <li>Elemento C</li>
            <li>Elemento D</li>
          </ul>
        </lmc-staggered-list>

         <h2>Lista Escalonada Horizontal con Animación Deslizante</h2>
        <p>Este ejemplo utiliza una animación <code>slideInLeft</code> con dirección horizontal.</p>
        <lmc-staggered-list animation="slideInLeft" direction="horizontal">
            <lmc-card title="Tarjeta 1">Contenido 1</lmc-card>
            <lmc-card title="Tarjeta 2">Contenido 2</lmc-card>
            <lmc-card title="Tarjeta 3">Contenido 3</lmc-card>
        </lmc-staggered-list>


        <h2>Variables CSS Personalizadas</h2>
        <p>Este ejemplo personaliza la duración de la animación utilizando variables CSS.</p>
        <style>
          /* Define la animación fadeIn aquí para que esté disponible */
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        </style>
        <lmc-staggered-list animation="fadeIn" style="--lmc-staggered-list-item-animation-duration: 0.8s;">
          <ul class="example-list">
            <li>Elemento X</li>
            <li>Elemento Y</li>
            <li>Elemento Z</li>
          </ul>
        </lmc-staggered-list>
      </lmc-container>
    `;
  }
}