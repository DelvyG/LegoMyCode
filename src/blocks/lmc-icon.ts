// src/blocks/lmc-icon.ts

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-icon
 * @description Muestra un icono de la fuente Material Symbols (Outlined). Asegúrate de que la fuente esté cargada en la página.
 * @version 1.0.0
 * @see https://fonts.google.com/icons?selected=Material+Symbols+Outlined
 *
 * @prop {String} name - El nombre (ligature) del icono de Material Symbols a mostrar (ej: 'home', 'settings', 'delete'). Requerido.
 * @prop {String} [label] - Etiqueta accesible (aria-label) para el icono. Si no se proporciona, se usa el `name`.
 * @prop {String} [size] - Tamaño del icono (ej: '24px', '1.5em', 'var(--lmc-icon-size-lg)'). Usa la variable CSS por defecto.
 *
 * @cssprop [--lmc-icon-color=inherit] - Color del icono. Hereda el color del texto por defecto.
 * @cssprop [--lmc-icon-size=1.5em] - Tamaño de fuente del icono (controla el tamaño del icono).
 * @cssprop [--lmc-icon-font-weight=400] - Peso de la fuente (algunos iconos pueden variar).
 * @cssprop [--lmc-icon-font-variation-settings] - Para ajustes finos de fuentes variables (opcional, avanzado). Ver doc de Material Symbols.
 */
@customElement('lmc-icon')
export class LmcIcon extends LitElement {

  @property({ type: String })
  name!: string; // Nombre/ligature del icono (requerido)

  @property({ type: String })
  label?: string;

  @property({ type: String })
  size?: string;

  // Nota: Podríamos añadir props para 'weight', 'fill', 'grade', 'opticalSize'
  // si quisiéramos controlarlas directamente desde JS, pero por ahora
  // se pueden controlar con la variable CSS --lmc-icon-font-variation-settings.

  static styles = css`
    :host {
      display: inline-flex; /* Se comporta como un carácter/imagen en línea */
      align-items: center;
      justify-content: center;
      vertical-align: middle; /* Alinea mejor con texto adyacente */
      box-sizing: border-box;
      width: var(--lmc-icon-size, 1.5em); /* Ancho igual al tamaño para consistencia */
      height: var(--lmc-icon-size, 1.5em); /* Alto igual al tamaño */
    }

    /* Estilos aplicados al span que contiene el icono */
    .material-symbols-outlined {
      font-family: 'Material Symbols Outlined';
      font-weight: normal; /* Resetear peso por defecto de la fuente */
      font-style: normal;
      font-size: var(--lmc-icon-size, 1.5em); /* Tamaño del icono */
      line-height: 1; /* Evita espacio extra vertical */
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      /* Configuraciones de fuente variable (opcional) */
      font-variation-settings: var(--lmc-icon-font-variation-settings);
      /* Color del icono */
      color: var(--lmc-icon-color, inherit);
       /* Aplicar tamaño desde prop si existe */
      font-size: var(--_lmc-icon-size-prop, var(--lmc-icon-size, 1.5em));
      /* Aplicar peso desde variable si existe */
      font-weight: var(--lmc-icon-font-weight, 400);

    }
  `;

  // Actualiza la variable CSS interna cuando la propiedad 'size' cambia
  protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('size') && this.size) {
      this.style.setProperty('--_lmc-icon-size-prop', this.size);
    } else if (changedProperties.has('size') && !this.size) {
        this.style.removeProperty('--_lmc-icon-size-prop');
    }
  }

  render() {
    if (!this.name) {
      console.warn('lmc-icon: La propiedad "name" es requerida.');
      return html``; // No renderizar nada si no hay nombre
    }

    // Usa el 'name' como aria-label si no se proporciona 'label'
    const ariaLabel = this.label || this.name;

    return html`
      <span
        class="material-symbols-outlined"
        aria-label=${ariaLabel}
        role="img"
        part="icon"
      >
        ${this.name}
      </span>
    `;
    // El texto dentro del <span> (this.name) es la ligature que la fuente convierte en icono.
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-icon': LmcIcon;
  }
}