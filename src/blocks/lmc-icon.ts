import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-icon
 * @description Muestra un icono de la fuente Material Symbols (Outlined). Asegúrate de que la fuente esté cargada en la página.
 * @version 1.1.0 - Refinado para priorizar CSS Vars y simplificar herencia de color/tamaño.
 * @see https://fonts.google.com/icons?selected=Material+Symbols+Outlined
 *
 * @prop {String} name! - El nombre (ligature) del icono de Material Symbols. Requerido.
 * @prop {String} [label] - Etiqueta accesible (aria-label). Si no se proporciona, se usa `name`.
 * @prop {String} [size] - Alternativa para establecer el tamaño vía atributo (sobrescribe --lmc-icon-size).
 * @prop {String} [color] - Alternativa para establecer el color vía atributo (sobrescribe --lmc-icon-color).
 *
 * @cssprop [--lmc-icon-color=currentColor] - Color del icono. Usa `currentColor` por defecto para heredar del contexto.
 * @cssprop [--lmc-icon-size=1.2em] - Tamaño del icono (relativo al font-size del contexto por defecto).
 * @cssprop [--lmc-icon-weight=400] - Peso de la fuente.
 * @cssprop [--lmc-icon-fill=0] - Variable 'FILL' de Material Symbols (0 o 1).
 * @cssprop [--lmc-icon-grade=0] - Variable 'GRAD' de Material Symbols.
 * @cssprop [--lmc-icon-opsz=24] - Variable 'opsz' (Optical Size) de Material Symbols.
 */
@customElement('lmc-icon')
export class LmcIcon extends LitElement {

  @property({ type: String, reflect: true }) // reflect: true puede ser útil para seleccionar por nombre si es necesario
  name!: string;

  @property({ type: String })
  label?: string;

  // Propiedades opcionales que sobrescriben las CSS Vars si se establecen
  @property({ type: String })
  size?: string;

  @property({ type: String })
  color?: string;


  static styles = css`
    :host {
      display: inline-flex; /* Se comporta mejor que inline-block para centrado */
      align-items: center;
      justify-content: center;
      vertical-align: middle; /* Alinea mejor con texto */
      box-sizing: border-box;
      /* El tamaño ahora lo controla font-size directamente */
      width: var(--lmc-icon-size, 1.2em); /* Ancho consistente */
      height: var(--lmc-icon-size, 1.2em); /* Alto consistente */
      /* Color: Usa currentColor para heredar por defecto */
      color: var(--lmc-icon-color, currentColor);
      line-height: 1; /* Evita afectar la altura de línea del contenedor */
      /* Transición suave si el color cambia */
      transition: color 0.2s ease;
    }

    /* Estilos aplicados al span que contiene el icono */
    .material-symbols-outlined {
      /* Fuente requerida */
      font-family: 'Material Symbols Outlined';
      /* Estilos necesarios para que funcione como icono */
      font-weight: normal;
      font-style: normal;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block; /* o block */
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;

      /* Aplica el tamaño directamente como font-size */
      font-size: var(--lmc-icon-size, 1.2em);
       /* Aplica el color heredado del host */
      color: inherit;

      /* Configuraciones de fuente variable usando las CSS Vars */
      font-variation-settings:
        'FILL' var(--lmc-icon-fill, 0),
        'wght' var(--lmc-icon-weight, 400),
        'GRAD' var(--lmc-icon-grade, 0),
        'opsz' var(--lmc-icon-opsz, 24);
    }
  `;

  /**
   * Actualiza las variables CSS directamente en el :host si las propiedades
   * 'size' o 'color' han sido establecidas.
   */
  protected updated(changedProperties: PropertyValues<this>): void {
    super.updated(changedProperties);
    if (changedProperties.has('size')) {
      if (this.size) {
        this.style.setProperty('--lmc-icon-size', this.size);
      } else {
         // Si size se quita, elimina la sobreescritura para usar el CSS por defecto
        this.style.removeProperty('--lmc-icon-size');
      }
    }
    if (changedProperties.has('color')) {
       if (this.color) {
        this.style.setProperty('--lmc-icon-color', this.color);
      } else {
        this.style.removeProperty('--lmc-icon-color');
      }
    }
  }


  render() {
    if (!this.name) {
      // En desarrollo, podríamos mostrar un placeholder o error
      console.warn('lmc-icon: La propiedad "name" es requerida.');
      return html`<span style="color: red; font-size: 0.8em;">[X]</span>`; // Placeholder de error
    }

    // Usa el 'name' como aria-label si no se proporciona 'label'
    const ariaLabel = this.label || this.name.replace(/_/g, ' '); // Reemplaza guiones bajos para mejor lectura

    return html`
      <span
        class="material-symbols-outlined"
        aria-label=${ariaLabel}
        role="img"
        part="icon"
        title=${ariaLabel} /* Añade tooltip por defecto */
      >
        ${this.name}
      </span>
    `;
  }
}

// Declaración TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'lmc-icon': LmcIcon;
  }
}