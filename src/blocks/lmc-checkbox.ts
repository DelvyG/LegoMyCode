import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { nothing } from 'lit';

/**
 * @description Un componente checkbox reutilizable con etiqueta.
 * @version 1.0.0
 *
 * @prop {Boolean} checked - El estado actual del checkbox (marcado o no).
 * @prop {String} label - Etiqueta de texto que se muestra al lado del checkbox.
 * @prop {Boolean} disabled - Si el checkbox está deshabilitado.
 * @prop {String} value - Un valor asociado al checkbox (útil en formularios).
 *
 * @cssprop [--lmc-checkbox-label-color=inherit] - Color del texto de la etiqueta.
 * @cssprop [--lmc-checkbox-size=1.15em] - Tamaño del cuadro del checkbox.
 * @cssprop [--lmc-checkbox-border-color=var(--lmc-global-color-muted, grey)] - Color del borde del cuadro.
 * @cssprop [--lmc-checkbox-border-radius=calc(var(--lmc-global-border-radius-base, 4px) * 0.5)] - Radio del borde del cuadro.
 * @cssprop [--lmc-checkbox-checked-background-color=var(--lmc-global-color-primary, blue)] - Color de fondo cuando está marcado.
 * @cssprop [--lmc-checkbox-checkmark-color=white] - Color del símbolo de verificación (check).
 * @cssprop [--lmc-checkbox-disabled-opacity=0.5] - Opacidad cuando está deshabilitado.
 * @cssprop [--lmc-checkbox-gap=0.5em] - Espacio entre el cuadro y la etiqueta.
 *
 * @fires lmc-change - Se dispara cuando el estado 'checked' del checkbox cambia. detail: { checked: boolean, value?: string }
 */
@customElement('lmc-checkbox')
export class LmcCheckbox extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: inline-flex; /* Para alinear cuadro y label */
      align-items: center; /* Centra verticalmente */
      gap: var(--lmc-checkbox-gap, 0.5em);
      cursor: pointer; /* Hace que toda el área sea clickeable */
      font-family: var(--lmc-global-font-family-base); /* Hereda fuente */
    }

    /* Ocultamos el input nativo, pero lo mantenemos accesible */
    input[type="checkbox"] {
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
      pointer-events: none;
    }

    /* Nuestro cuadro personalizado */
    .checkbox-control {
      display: inline-flex; /* Para centrar el checkmark dentro */
      align-items: center;
      justify-content: center;
      width: var(--lmc-checkbox-size, 1.15em);
      height: var(--lmc-checkbox-size, 1.15em);
      border: 1px solid var(--lmc-checkbox-border-color, var(--lmc-global-color-muted, grey));
      border-radius: var(--lmc-checkbox-border-radius, calc(var(--lmc-global-border-radius-base, 4px) * 0.5));
      background-color: var(--lmc-global-color-background, white); /* Fondo por defecto */
      transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    }

    /* Estilos cuando está marcado */
    input[type="checkbox"]:checked + .checkbox-control {
      background-color: var(--lmc-checkbox-checked-background-color, var(--lmc-global-color-primary, blue));
      border-color: var(--lmc-checkbox-checked-background-color, var(--lmc-global-color-primary, blue));
    }

    /* El símbolo de verificación (checkmark) - Usamos un SVG inline */
    .checkmark {
      display: none; /* Oculto por defecto */
      width: 65%; /* Tamaño relativo al control */
      height: 65%;
      stroke: var(--lmc-checkbox-checkmark-color, white);
      stroke-width: 3px;
      fill: none;
      /* Forma del checkmark */
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    input[type="checkbox"]:checked + .checkbox-control .checkmark {
      display: block; /* Visible cuando está marcado */
    }

    /* Estilo del label */
    label {
      color: var(--lmc-checkbox-label-color, inherit);
      user-select: none; /* Evita seleccionar el texto del label al hacer clic */
      line-height: 1; /* Ajusta altura de línea para mejor alineación */
    }

    /* Estilos cuando está deshabilitado */
    :host([disabled]) {
      cursor: not-allowed;
      opacity: var(--lmc-checkbox-disabled-opacity, 0.5);
    }

    /* Estilos de foco (aplicados al control personalizado cuando el input nativo oculto recibe foco) */
    input[type="checkbox"]:focus-visible + .checkbox-control {
      outline: 2px solid var(--lmc-global-color-primary, blue);
      outline-offset: 2px;
    }
  `;

  // --- Propiedades ---
  @property({ type: Boolean, reflect: true }) checked: boolean = false;
  @property({ type: String }) label?: string;
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;
  @property({ type: String }) value?: string; // Valor opcional asociado

  // --- State ---
  @state() private _inputId = `lmc-checkbox-${Math.random().toString(36).substring(2, 9)}`;

  // --- Template (Render) ---
  render() {
    // Toda la estructura está envuelta en un <label> para mejorar la accesibilidad
    // Al hacer clic en cualquier parte del label (incluido nuestro control), se activa el input oculto.
    return html`
      <label for=${this._inputId}>
        <input
          type="checkbox"
          id=${this._inputId}
          .checked=${live(this.checked)}
          ?disabled=${this.disabled}
          value=${this.value ?? ''}
          @change=${this._handleChange}
          aria-checked=${this.checked ? 'true' : 'false'}
          aria-disabled=${this.disabled ? 'true' : 'false'}
        />
        <span class="checkbox-control" aria-hidden="true">
          <svg class="checkmark" viewBox="0 0 16 16">
            <polyline points="3.75 8 6.75 11 12.25 5.5"></polyline>
          </svg>
        </span>
        ${this.label ? html`<span class="label-text">${this.label}</span>` : nothing}
      </label>
    `;
  }

  // --- Lógica y Eventos ---
  private _handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.checked = inputElement.checked; // Actualiza la propiedad 'checked'

    // Dispara el evento 'lmc-change'
    this.dispatchEvent(new CustomEvent('lmc-change', {
      detail: {
        checked: this.checked,
        value: this.value // Incluye el value si se proporcionó
      },
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-checkbox': LmcCheckbox;
  }
}