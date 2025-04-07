import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js'; // Necesario para sincronizar value con el input

/**
 * @description Un componente input reutilizable y personalizable.
 * @version 1.0.0
 *
 * @prop {String} type - Tipo del input HTML (text, password, email, number, etc.). Default: 'text'.
 * @prop {String} label - Etiqueta opcional que se muestra encima o al lado del input.
 * @prop {String | Number} value - El valor actual del input.
 * @prop {String} placeholder - Texto placeholder para el input.
 * @prop {Boolean} disabled - Si el input está deshabilitado.
 * @prop {Boolean} readonly - Si el input es de solo lectura.
 *
 * @cssprop [--lmc-input-label-color=inherit] - Color del texto de la etiqueta.
 * @cssprop [--lmc-input-background-color=var(--lmc-global-color-background, white)] - Color de fondo del input.
 * @cssprop [--lmc-input-text-color=var(--lmc-global-color-text, black)] - Color del texto del input.
 * @cssprop [--lmc-input-border=1px solid var(--lmc-global-color-border, grey)] - Borde del input.
 * @cssprop [--lmc-input-border-radius=var(--lmc-global-border-radius-base, 4px)] - Radio del borde.
 * @cssprop [--lmc-input-padding=0.5em 0.75em] - Padding interno del input.
 * @cssprop [--lmc-input-focus-border-color=var(--lmc-global-color-primary, blue)] - Color del borde al enfocar.
 * @cssprop [--lmc-input-disabled-opacity=0.5] - Opacidad cuando está deshabilitado.
 *
 * @fires lmc-input - Se dispara cada vez que el valor del input cambia (equivale al evento 'input' nativo). detail: { value: string | number }
 * @fires lmc-change - Se dispara cuando el valor del input cambia y pierde el foco (equivale al evento 'change' nativo). detail: { value: string | number }
 */
@customElement('lmc-input')
export class LmcInput extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: inline-block; /* O 'block' si quieres que ocupe todo el ancho */
      width: auto; /* Ajusta según necesidad */
    }

    .input-wrapper {
      display: flex;
      flex-direction: column; /* Label arriba, input abajo por defecto */
      gap: 0.25em; /* Pequeño espacio entre label e input */
    }

    label {
      font-size: 0.9em;
      color: var(--lmc-input-label-color, inherit);
      cursor: default;
    }

    input {
      font-family: inherit; /* Hereda fuente */
      font-size: 1em; /* Tamaño base */
      padding: var(--lmc-input-padding, 0.5em 0.75em);
      border: var(--lmc-input-border, 1px solid var(--lmc-global-color-border, grey));
      border-radius: var(--lmc-input-border-radius, var(--lmc-global-border-radius-base, 4px));
      background-color: var(--lmc-input-background-color, var(--lmc-global-color-background, white));
      color: var(--lmc-input-text-color, var(--lmc-global-color-text, black));
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      box-sizing: border-box; /* Asegura que padding y border estén incluidos en el width/height */
      width: 100%; /* El input ocupa todo el ancho del wrapper */
    }

    input:focus,
    input:focus-visible {
      /* Estilo al enfocar: borde más prominente y quizás sombra */
      outline: none; /* Quita el outline feo del navegador */
      border-color: var(--lmc-input-focus-border-color, var(--lmc-global-color-primary, blue));
      /* box-shadow: 0 0 0 2px rgba(var(--lmc-global-color-primary-rgb, 0, 123, 255), 0.25); */
      /* Nota: necesitarías definir --lmc-global-color-primary-rgb si quieres sombra */
    }

    input[disabled] {
      cursor: not-allowed;
      opacity: var(--lmc-input-disabled-opacity, 0.5);
      /* background-color: #eee; */ /* Opcional: cambiar fondo en disabled */
    }

    input[readonly] {
      /* background-color: #f8f8f8; */ /* Opcional: indicar visualmente readonly */
    }
  `;

  // --- Propiedades ---
  @property({ type: String }) type: string = 'text';
  @property({ type: String }) label?: string;
  @property({ type: String }) value: string | number = ''; // El valor controlado
  @property({ type: String }) placeholder?: string;
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) readonly: boolean = false;

  // --- State ---
  // Usamos un ID interno para conectar label y input (accesibilidad)
  @state() private _inputId = `lmc-input-${Math.random().toString(36).substring(2, 9)}`;

  // --- Template (Render) ---
  render() {
    return html`
      <div class="input-wrapper">
        ${this.label ? html`<label for=${this._inputId}>${this.label}</label>` : nothing}
        <input
          id=${this._inputId}
          type=${this.type}
          .value=${live(this.value)} /* 'live' es crucial para sincronizar bien el valor */
          placeholder=${this.placeholder ?? ''}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          @input=${this._handleInput}
          @change=${this._handleChange}
        />
      </div>
    `;
  }

  // --- Lógica y Eventos ---
  private _handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value; // Actualiza la propiedad 'value' del componente

    // Dispara el evento 'lmc-input' (similar al 'input' nativo)
    this.dispatchEvent(new CustomEvent('lmc-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  private _handleChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    // Dispara el evento 'lmc-change' (similar al 'change' nativo)
    this.dispatchEvent(new CustomEvent('lmc-change', {
      detail: { value: inputElement.value }, // Podrías usar this.value también
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-input': LmcInput;
  }
}