import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import { map } from 'lit/directives/map.js'; // Para iterar sobre las opciones

// Definimos una interfaz para la estructura de las opciones
export interface LmcSelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

/**
 * @description Un componente select (desplegable) reutilizable.
 * @version 1.0.0
 *
 * @prop {String} label - Etiqueta opcional que se muestra encima o al lado del select.
 * @prop {String | Number} value - El valor de la opción actualmente seleccionada.
 * @prop {LmcSelectOption[]} options - Array de objetos para las opciones del select. Cada objeto debe tener 'value' y 'label', opcionalmente 'disabled'.
 * @prop {String} placeholder - Texto opcional para la primera opción deshabilitada (sirve como indicación).
 * @prop {Boolean} disabled - Si el select está deshabilitado.
 * @prop {Boolean} required - Si el select es obligatorio en un formulario.
 *
 * @cssprop [--lmc-select-label-color=inherit] - Color del texto de la etiqueta.
 * @cssprop [--lmc-select-background-color=var(--lmc-global-color-background, white)] - Color de fondo.
 * @cssprop [--lmc-select-text-color=var(--lmc-global-color-text, black)] - Color del texto.
 * @cssprop [--lmc-select-border=1px solid var(--lmc-global-color-border, grey)] - Borde.
 * @cssprop [--lmc-select-border-radius=var(--lmc-global-border-radius-base, 4px)] - Radio del borde.
 * @cssprop [--lmc-select-padding=0.5em 0.75em] - Padding interno. (Padding derecho puede necesitar ajuste para el arrow).
 * @cssprop [--lmc-select-focus-border-color=var(--lmc-global-color-primary, blue)] - Color del borde al enfocar.
 * @cssprop [--lmc-select-disabled-opacity=0.5] - Opacidad cuando está deshabilitado.
 * @cssprop [--lmc-select-arrow-color=var(--lmc-global-color-text, black)] - Color de la flecha desplegable (si se personaliza).
 *
 * @fires lmc-change - Se dispara cuando se selecciona una opción diferente. detail: { value: string | number }
 */
@customElement('lmc-select')
export class LmcSelect extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: block; /* Selects suelen ser block o inline-block */
      width: auto;
    }

    .select-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.25em;
    }

    label {
      font-size: 0.9em;
      color: var(--lmc-select-label-color, inherit);
      cursor: default;
    }

    select {
      font-family: inherit;
      font-size: 1em;
      /* Añadir padding derecho extra para no solapar la flecha por defecto */
      padding: var(--lmc-select-padding, 0.5em 2.5em 0.5em 0.75em);
      border: var(--lmc-select-border, 1px solid var(--lmc-global-color-border, grey));
      border-radius: var(--lmc-select-border-radius, var(--lmc-global-border-radius-base, 4px));
      background-color: var(--lmc-select-background-color, var(--lmc-global-color-background, white));
      color: var(--lmc-select-text-color, var(--lmc-global-color-text, black));
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      box-sizing: border-box;
      width: 100%;
      cursor: pointer;
      /* Apariencia (permite estilizar flecha, aunque puede ser complejo) */
      /* appearance: none; */
      /* background-image: url('data:image/svg+xml;charset=US-ASCII,<svg ...>'); */ /* Ejemplo de flecha SVG */
      /* background-repeat: no-repeat; */
      /* background-position: right 0.75em center; */
      /* background-size: 0.65em auto; */
    }

    select:focus,
    select:focus-visible {
      outline: none;
      border-color: var(--lmc-select-focus-border-color, var(--lmc-global-color-primary, blue));
      /* box-shadow: 0 0 0 2px rgba(var(--lmc-global-color-primary-rgb, 0, 123, 255), 0.25); */
    }

    select[disabled] {
      cursor: not-allowed;
      opacity: var(--lmc-select-disabled-opacity, 0.5);
    }

    /* Estilo para la opción placeholder */
    option[value=""][disabled] {
      color: var(--lmc-global-color-muted, grey);
    }
  `;

  // --- Propiedades ---
  @property({ type: String }) label?: string;
  @property({ type: String }) value: string | number = '';
  @property({ type: Array }) options: LmcSelectOption[] = []; // Array para las opciones
  @property({ type: String }) placeholder?: string;
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) required: boolean = false;

  // --- State ---
  @state() private _selectId = `lmc-select-${Math.random().toString(36).substring(2, 9)}`;

  // --- Template (Render) ---
  render() {
    return html`
      <div class="select-wrapper">
        ${this.label ? html`<label for=${this._selectId}>${this.label}</label>` : nothing}
        <select
          id=${this._selectId}
          .value=${live(this.value)} /* Sincroniza el valor seleccionado */
          ?disabled=${this.disabled}
          ?required=${this.required}
          @change=${this._handleChange}
          aria-label=${this.label ?? 'Select option'}
          aria-disabled=${this.disabled ? 'true' : 'false'}
        >
          <!-- Opción Placeholder (si se proporciona) -->
          ${this.placeholder
            ? html`<option value="" disabled ?selected=${this.value === ''}>
                  ${this.placeholder}
                </option>`
            : nothing}

          <!-- Opciones del array -->
          ${map(this.options, (option) => html`
            <option
              value=${option.value}
              ?disabled=${option.disabled ?? false}
            >
              ${option.label}
            </option>
          `)}
        </select>
      </div>
    `;
  }

  // --- Lógica y Eventos ---
  private _handleChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.value = selectElement.value;

    // Dispara el evento 'lmc-change'
    this.dispatchEvent(new CustomEvent('lmc-change', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-select': LmcSelect;
  }
  // Exporta la interfaz para poder usarla en otros archivos si es necesario
  export { LmcSelectOption };
}
// Exporta la interfaz también a nivel de módulo
export { LmcSelectOption };