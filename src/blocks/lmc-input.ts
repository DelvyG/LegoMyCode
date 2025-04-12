import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

// Define los tipos válidos para el atributo 'type' del input HTML
type ValidInputType = | 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'color';

/**
 * @element lmc-input
 * @description Campo de entrada genérico. Se integra con lmc-form-field.
 * @version 1.3.0 - Tipos corregidos, estructura final.
 * @prop {ValidInputType} [type=text] - Tipo de input HTML válido.
 * @prop {string} [label] - aria-label si no se usa lmc-form-field.
 * @prop {string} [name] - Nombre para serialización.
 * @prop {string} [value=''] - Valor actual.
 * @prop {string} [placeholder] - Placeholder.
 * @prop {boolean} [disabled=false] - Deshabilitado.
 * @prop {boolean} [required=false] - Requerido.
 * @prop {string} [pattern] - Patrón regex.
 * @prop {number} [minlength] - Longitud mínima.
 * @prop {number} [maxlength] - Longitud máxima.
 * @prop {number | string} [min] - Valor mínimo.
 * @prop {number | string} [max] - Valor máximo.
 * @prop {number | string} [step] - Incremento.
 * @cssprop [--lmc-input-padding=...] etc. (como antes)
 * @fires lmc-input
 * @fires lmc-change
 */
@customElement('lmc-input')
export class LmcInput extends LitElement {
  // Usa el tipo específico ValidInputType
  @property({ type: String }) type: ValidInputType = 'text';
  @property({ type: String }) label?: string;
  @property({ type: String }) name?: string;
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder?: string;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: String }) pattern?: string;
  // Asegurar que estos sean number | undefined para que ifDefined funcione bien
  @property({ type: Number }) minlength?: number;
  @property({ type: Number }) maxlength?: number;
  @property() min?: number | string;
  @property() max?: number | string;
  @property() step?: number | string;

  @state() private _invalid = false;

  static styles = css`
    :host {
      display: block; /* Cambiado a block para consistencia */
      width: 100%;
    }
    input {
      /* Estilos como en la versión anterior verificada */
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding: var(--lmc-input-padding, var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-sm, 0.8rem));
      border: var(--lmc-input-border, 1px solid var(--lmc-global-color-border, #dee2e6));
      border-radius: var(--lmc-input-border-radius, var(--lmc-global-border-radius-md, 0.375rem));
      background-color: var(--lmc-input-background, var(--lmc-global-color-background, #fff));
      color: var(--lmc-input-color, var(--lmc-global-color-text-default, #212529));
      font-size: var(--lmc-input-font-size, inherit);
      font-family: inherit;
      line-height: 1.5;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.3s ease, color 0.3s ease;
    }
    input:focus {
      border-color: var(--lmc-input-focus-border-color, var(--lmc-global-color-primary, #0d6efd));
      outline: 0;
      box-shadow: 0 0 0 0.25rem var(--lmc-input-focus-ring-color, rgba(var(--lmc-global-color-primary-rgb, 13, 110, 253), 0.25));
    }
    input::placeholder { color: var(--lmc-input-placeholder-color, var(--lmc-global-color-text-muted, #6c757d)); opacity: 1; }
    input:disabled {
      background-color: var(--lmc-input-disabled-background, #e9ecef);
      color: var(--lmc-input-disabled-color, #6c757d);
      cursor: not-allowed;
    }
    :host([invalid]) input, input:invalid {
      border-color: var(--lmc-input-invalid-border-color, red);
      background-color: var(--lmc-input-invalid-background, #ffe6e6);
    }
    :host([invalid]) input:focus, input:invalid:focus {
      border-color: var(--lmc-input-invalid-focus-border-color, red);
      box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.25);
    }
  `;

  private _handleInput(event: Event) { /* como antes */
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.dispatchEvent(new CustomEvent('lmc-input', { detail: { value: this.value } }));
  }
  private _handleChange(event: Event) { /* como antes */
    const inputElement = event.target as HTMLInputElement;
    this.dispatchEvent(new CustomEvent('lmc-change', { detail: { value: this.value } }));
    this._invalid = !inputElement.checkValidity();
    this.toggleAttribute('invalid', this._invalid);
  }

  render() {
    const ariaLabel = !this.closest('lmc-form-field') && this.label ? this.label : undefined;
    return html`
      <input
        part="input"
        type=${this.type}
        name=${ifDefined(this.name)}
        .value=${live(this.value)} /* Usar live(this.value) es más seguro que String() */
        placeholder=${ifDefined(this.placeholder)}
        ?disabled=${this.disabled}
        ?required=${this.required}
        pattern=${ifDefined(this.pattern)}
        minlength=${ifDefined(this.minlength)}
        maxlength=${ifDefined(this.maxlength)}
        min=${ifDefined(this.min)}
        max=${ifDefined(this.max)}
        step=${ifDefined(typeof this.step === 'string' ? parseFloat(this.step) : this.step)}
        aria-label=${ifDefined(ariaLabel)}
        aria-invalid=${this._invalid ? 'true' : 'false'}
        @input=${this._handleInput}
        @change=${this._handleChange}
      />
    `;
  }
}
// Declaración global como antes