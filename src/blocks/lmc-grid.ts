// src/blocks/lmc-grid.ts

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-grid
 * @description Un contenedor que organiza sus elementos hijos en una cuadrícula responsive usando CSS Grid.
 * @version 1.0.0
 *
 * @slot - Los elementos que se colocarán en la cuadrícula (ej: lmc-card, div, etc.).
 *
 * @cssprop [--lmc-grid-gap=1rem] - El espacio (gap) entre las filas y columnas de la cuadrícula.
 * @cssprop [--lmc-grid-min-item-width=250px] - El ancho mínimo deseado para cada elemento en la cuadrícula. La cuadrícula intentará ajustar tantas columnas de este ancho como quepan.
 * @cssprop [--lmc-grid-padding=0] - Padding interno opcional para el contenedor de la cuadrícula.
 */
@customElement('lmc-grid')
export class LmcGrid extends LitElement {

  // Nota: Podríamos añadir propiedades JS para 'gap' o 'minItemWidth' si quisiéramos
  // controlarlas directamente por atributo, pero usar solo CSS variables
  // para configuración de layout puede ser más flexible en muchos casos.

  static styles = css`
    :host {
      display: block; /* Ocupa espacio */
      padding: var(--lmc-grid-padding, 0); /* Padding opcional */
      box-sizing: border-box;
    }

    .grid-container {
      display: grid;
      gap: var(--lmc-grid-gap, 1rem); /* Espacio entre celdas */

      /*
       * La magia del grid responsive:
       * - grid-template-columns: Define las columnas.
       * - repeat(): Crea columnas repetitivas.
       * - auto-fit: Ajusta automáticamente el número de columnas para llenar el espacio disponible.
       * - minmax(): Define un rango de tamaño para las columnas.
       *   - var(--lmc-grid-min-item-width, 250px): El tamaño mínimo que queremos para una columna/ítem.
       *   - 1fr: Permite que las columnas crezcan para ocupar el espacio restante equitativamente.
       */
      grid-template-columns: repeat(auto-fit, minmax(var(--lmc-grid-min-item-width, 250px), 1fr));
      box-sizing: border-box;
    }

     /* Asegura que los elementos sloteados se estiren si es necesario (aunque no siempre deseado) */
     /* ::slotted(*) { width: 100%; } */
     /* Es mejor que los propios componentes sloteados manejen su ancho si es necesario */
  `;

  render() {
    return html`
      <div class="grid-container" part="container">
        <slot></slot> <!-- Los ítems de la cuadrícula van aquí -->
      </div>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-grid': LmcGrid;
  }
}