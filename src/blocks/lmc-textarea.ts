import { LitElement, html, css } from 'lit'; // 'nothing' ELIMINADO
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { styleMap } from 'lit/directives/style-map.js'; // Importar styleMap

/**
 * @element lmc-textarea
 * @description Área de texto multilínea.
 * @version 1.3.0 - Tipos corregidos, bindings corregidos.
 * @prop {string} [label] - aria-label si no se usa lmc-form-field.
 * @prop {string} [name] - Nombre para serialización.
 * @prop {string} [value=''] - Valor actual.
 * @prop {string} [placeholder] - Placeholder.
 * @prop {boolean} [disabled=false] - Deshabilitado.
 * @prop {boolean} [required=false] - Requerido.
 * @prop {number} [rows=3] - Filas visibles.
 * @prop {number} [cols] - Columnas (menos común).
 * @prop {number} [minlength] - Longitud mínima.
 * @prop {number} [maxlength] - Longitud máxima.
 * @prop {'soft' | 'hard' | 'off'} [wrap=soft] - Ajuste de línea.
 * @prop {'none' | 'vertical' | 'horizontal' | 'both'} [resize=vertical] - Redimensionamiento.
 * @cssprop [--lmc-textarea-padding=...] etc. (como antes)
 * @fires lmc-input
 * @fires lmc-change
 */
@customElement('lmc-textarea')
export class LmcTextarea extends LitElement {
  @property({ type: String }) label?: string;
  @property({ type: String }) name?: string;
  @property({ type: String }) value = '';
  @property({ type: String }) placeholder?: string;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Number }) rows = 3;
  @property({ type: Number }) cols?: number;
  @property({ type: Number }) minlength?: number;
  @property({ type: Number }) maxlength?: number;
  @property({ type: String }) wrap: 'soft' | 'hard' | 'off' = 'soft';
  @property({ type: String }) resize: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical';

  @state() private _invalid = false;

  static styles = css`
    :host {
      display: block; /* Cambiado a block */
      width: 100%;
    }
    textarea {
      display: block;
      box-sizing: border-box;
      width: 100%;
      /* Hereda estilos de input por defecto via variables */
      padding: var(--lmc-textarea-padding, var(--lmc-input-padding, var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-sm, 0.8rem)));
      border: var(--lmc-textarea-border, var(--lmc-input-border, 1px solid var(--lmc-global-color-border, #dee2e6)));
      border-radius: var(--lmc-textarea-border-radius, var(--lmc-input-border-radius, var(--lmc-global-border-radius-md, 0.375rem)));
      background-color: var(--lmc-textarea-background, var(--lmc-input-background, var(--lmc-global-color-background, #fff)));
      color: var(--lmc-textarea-color, var(--lmc-input-color, var(--lmc-global-color-text-default, #212529)));
      font-size: var(--lmc-textarea-font-size, inherit);
      font-family: inherit;
      line-height: var(--lmc-textarea-line-height, 1.5);
      /* El resize se aplica ahora en el render con styleMap o desde CSS var */
      resize: var(--lmc-textarea-resize, vertical);
      min-height: var(--lmc-textarea-min-height, auto);
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.3s ease, color 0.3s ease;
    }
    textarea:focus {
      outline: 2px solid var(--lmc-textarea-focus-outline, #007bff);
      outline-offset: 2px;
    }
    textarea::placeholder {
      color: var(--lmc-textarea-placeholder-color, #6c757d);
      opacity: 1; /* Ensure placeholder is visible */
    }
    textarea:disabled {
      opacity: 0.5; /* Example style for disabled textarea */
      cursor: not-allowed;
    }
    :host([invalid]) textarea, textarea:invalid {
      border-color: var(--lmc-textarea-invalid-border-color, red);
    }
    :host([invalid]) textarea:focus, textarea:invalid:focus {
      outline: 2px solid var(--lmc-textarea-invalid-focus-outline, red);
    }
  `;

  private _handleInput() { /* como antes */ }
  private _handleChange() { /* como antes */ }

  render() {
    const ariaLabel = !this.closest('lmc-form-field') && this.label ? this.label : undefined;
    // Aplicar resize dinámicamente si está deshabilitado
    const styles = {
      resize: this.disabled ? 'none' : this.resize
    };

    return html`
      <textarea
        part="textarea"
        style=${styleMap(styles)} /* Aplicar resize vía styleMap */
        name=${ifDefined(this.name)}
        .value=${live(this.value)}
        placeholder=${ifDefined(this.placeholder)}
        ?disabled=${this.disabled}
        ?required=${this.required}
        rows=${this.rows}
        cols=${ifDefined(this.cols)}
        minlength=${ifDefined(this.minlength)}
        maxlength=${ifDefined(this.maxlength)}
        wrap=${this.wrap === 'off' ? 'soft' : this.wrap}
        aria-label=${ifDefined(ariaLabel)}
        aria-invalid=${this._invalid ? 'true' : 'false'}
        @input=${this._handleInput}
        @change=${this._handleChange}
      ></textarea>
    `;
  }
}
// Declaración global como antes