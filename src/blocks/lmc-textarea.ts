import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

/**
 * @description Un componente textarea reutilizable para entrada de texto multilínea.
 * @version 1.0.0
 *
 * @prop {String} label - Etiqueta opcional que se muestra encima o al lado del textarea.
 * @prop {String} value - El valor actual del textarea.
 * @prop {String} placeholder - Texto placeholder para el textarea.
 * @prop {Boolean} disabled - Si el textarea está deshabilitado.
 * @prop {Boolean} readonly - Si el textarea es de solo lectura.
 * @prop {Number} rows - Número sugerido de filas visibles (afecta la altura inicial). Default: 3.
 * @prop {'none' | 'vertical' | 'horizontal' | 'both'} resize - Controla si el usuario puede redimensionar el textarea. Default: 'vertical'.
 *
 * @cssprop [--lmc-textarea-label-color=inherit] - Color del texto de la etiqueta.
 * @cssprop [--lmc-textarea-background-color=var(--lmc-global-color-background, white)] - Color de fondo.
 * @cssprop [--lmc-textarea-text-color=var(--lmc-global-color-text, black)] - Color del texto.
 * @cssprop [--lmc-textarea-border=1px solid var(--lmc-global-color-border, grey)] - Borde.
 * @cssprop [--lmc-textarea-border-radius=var(--lmc-global-border-radius-base, 4px)] - Radio del borde.
 * @cssprop [--lmc-textarea-padding=0.5em 0.75em] - Padding interno.
 * @cssprop [--lmc-textarea-focus-border-color=var(--lmc-global-color-primary, blue)] - Color del borde al enfocar.
 * @cssprop [--lmc-textarea-disabled-opacity=0.5] - Opacidad cuando está deshabilitado.
 * @cssprop [--lmc-textarea-min-height=auto] - Altura mínima para el textarea.
 *
 * @fires lmc-input - Se dispara cada vez que el valor del textarea cambia. detail: { value: string }
 * @fires lmc-change - Se dispara cuando el valor del textarea cambia y pierde el foco. detail: { value: string }
 */
@customElement('lmc-textarea')
export class LmcTextarea extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: block; /* Textareas suelen ser elementos de bloque */
      width: auto;
    }

    .textarea-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.25em;
    }

    label {
      font-size: 0.9em;
      color: var(--lmc-textarea-label-color, inherit);
      cursor: default;
    }

    textarea {
      font-family: inherit;
      font-size: 1em;
      padding: var(--lmc-textarea-padding, 0.5em 0.75em);
      border: var(--lmc-textarea-border, 1px solid var(--lmc-global-color-border, grey));
      border-radius: var(--lmc-textarea-border-radius, var(--lmc-global-border-radius-base, 4px));
      background-color: var(--lmc-textarea-background-color, var(--lmc-global-color-background, white));
      color: var(--lmc-textarea-text-color, var(--lmc-global-color-text, black));
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      box-sizing: border-box;
      width: 100%;
      min-height: var(--lmc-textarea-min-height, auto);
      line-height: var(--lmc-global-line-height-base, 1.5); /* Usa el interlineado base */
      resize: var(--lmc-textarea-resize, vertical); /* Controla redimensionamiento */
    }

    textarea:focus,
    textarea:focus-visible {
      outline: none;
      border-color: var(--lmc-textarea-focus-border-color, var(--lmc-global-color-primary, blue));
      /* box-shadow: 0 0 0 2px rgba(var(--lmc-global-color-primary-rgb, 0, 123, 255), 0.25); */
    }

    textarea[disabled] {
      cursor: not-allowed;
      opacity: var(--lmc-textarea-disabled-opacity, 0.5);
    }

    textarea[readonly] {
      /* Estilos opcionales para readonly */
    }
  `;

  // --- Propiedades ---
  @property({ type: String }) label?: string;
  @property({ type: String }) value: string = '';
  @property({ type: String }) placeholder?: string;
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) readonly: boolean = false;
  @property({ type: Number }) rows: number = 3; // Default rows
  @property({ type: String }) resize: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical';

  // --- State ---
  @state() private _textareaId = `lmc-textarea-${Math.random().toString(36).substring(2, 9)}`;

  // --- Template (Render) ---
  render() {
    return html`
      <div class="textarea-wrapper">
        ${this.label ? html`<label for=${this._textareaId}>${this.label}</label>` : nothing}
        <textarea
          id=${this._textareaId}
          .value=${live(this.value)}
          placeholder=${this.placeholder ?? ''}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          rows=${this.rows}
          style="resize: ${this.resize};" /* Aplica resize vía style para sobreescribir CSS si es necesario */
          @input=${this._handleInput}
          @change=${this._handleChange}
          aria-label=${this.label ?? 'Text area'} /* Añade aria-label si no hay label visible */
          aria-disabled=${this.disabled ? 'true' : 'false'}
        ></textarea>
      </div>
    `;
  }

  // --- Lógica y Eventos ---
  private _handleInput(event: Event) {
    const textareaElement = event.target as HTMLTextAreaElement;
    this.value = textareaElement.value;

    this.dispatchEvent(new CustomEvent('lmc-input', {
      detail: { value: this.value },
      bubbles: true,
      composed: true
    }));
  }

  private _handleChange(event: Event) {
    const textareaElement = event.target as HTMLTextAreaElement;
    this.dispatchEvent(new CustomEvent('lmc-change', {
      detail: { value: textareaElement.value },
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-textarea': LmcTextarea;
  }
}