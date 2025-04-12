import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { map } from 'lit/directives/map.js';

// Interfaz para las opciones (exportada aquí mismo)
export interface LmcSelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

/**
 * @element lmc-select
 * @description Control de selección desplegable estilizado. Recibe las opciones vía la propiedad 'options'.
 * @version 2.3.1 - Corregido error de re-exportación de tipo.
 * // ... resto del JSDoc ...
 */
@customElement('lmc-select')
export class LmcSelect extends LitElement {
  @property({ type: String }) label?: string;
  @property({ type: String }) name?: string;
  @property({ type: String }) value: string | number = '';
  @property({ type: Array }) options: LmcSelectOption[] = [];
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;

  @state() private _invalid = false;

  static styles = css`
    :host {
      display: block; width: 100%; position: relative; opacity: 1;
      cursor: default; color: var(--lmc-global-color-text-default);
      transition: opacity 0.2s ease;
    }
    :host([disabled]) { opacity: var(--lmc-global-disabled-opacity, 0.6); cursor: not-allowed; }
    select {
      display: block; box-sizing: border-box; width: 100%;
      padding: var(--lmc-select-padding, var(--lmc-input-padding, var(--lmc-global-spacing-xs, 0.4rem) 2.2rem var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-sm, 0.8rem)));
      border: var(--lmc-select-border, var(--lmc-input-border, var(--lmc-global-border-width, 1px) solid var(--lmc-global-color-border, #dee2e6)));
      border-radius: var(--lmc-select-border-radius, var(--lmc-input-border-radius, var(--lmc-global-border-radius-md, 0.375rem)));
      background-color: var(--lmc-select-background, var(--lmc-input-background, var(--lmc-global-color-background, #fff)));
      color: var(--lmc-select-color, var(--lmc-input-color, inherit));
      font-size: var(--lmc-select-font-size, inherit); font-family: inherit;
      line-height: var(--lmc-global-line-height-base, 1.5);
      appearance: none; -webkit-appearance: none; -moz-appearance: none;
      background-image: var(--lmc-select-arrow-image, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%236c757d' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e"));
      background-repeat: no-repeat;
      background-position: right var(--lmc-global-spacing-sm, 0.8rem) center;
      background-size: 16px 12px; cursor: pointer;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.3s ease, color 0.3s ease;
    }
    select:focus {
      border-color: var(--lmc-select-focus-border-color, var(--lmc-global-color-primary, #86b7fe));
      outline: 0;
      box-shadow: var(--lmc-select-focus-box-shadow, 0 0 0 0.2rem color-mix(in srgb, var(--lmc-global-color-primary, blue) 25%, transparent));
    }
    select:disabled {
      background-color: var(--lmc-global-color-background-secondary, #e9ecef);
      cursor: not-allowed; background-image: none;
    }
    :host([invalid]) select, select:invalid {
      border-color: var(--lmc-select-invalid-border-color, var(--lmc-global-color-danger, #dc3545));
    }
    :host([invalid]) select:focus, select:invalid:focus {
      box-shadow: var(--lmc-select-invalid-focus-box-shadow, 0 0 0 0.2rem color-mix(in srgb, var(--lmc-global-color-danger, red) 25%, transparent));
    }
    option[value=""][disabled] { color: var(--lmc-global-color-text-muted, grey); }
  `;

  // _handleChange, _updateValidityState, checkValidity, reportValidity, updated - sin cambios

  private _handleChange(event: Event) {
     const selectElement = event.target as HTMLSelectElement;
     if (this.disabled) { console.warn('[lmc-select] Change ignored: disabled.'); return; }
     this.value = selectElement.value;
     console.log(`[lmc-select] Value changed: ${this.value}`);
     this.dispatchEvent(new CustomEvent('lmc-change', { detail: { value: this.value }, bubbles: true, composed: true }));
     console.log('[lmc-select] lmc-change event dispatched.');
     this._updateValidityState(selectElement);
  }

  private _updateValidityState(selectElement: HTMLSelectElement | null | undefined = this.shadowRoot?.querySelector('select')) {
      if (selectElement) {
          this._invalid = !selectElement.checkValidity();
          this.toggleAttribute('invalid', this._invalid);
          console.log(`[lmc-select] Validity checked. Invalid: ${this._invalid}`);
      } else {
           console.warn('[lmc-select] Could not find native select element for validity check.');
           this._invalid = false; this.toggleAttribute('invalid', false);
      }
  }

  checkValidity(): boolean { this._updateValidityState(); return !this._invalid; }

  reportValidity(): boolean {
    const select = this.shadowRoot?.querySelector('select');
    if (select) {
      this._invalid = !select.reportValidity(); this.toggleAttribute('invalid', this._invalid);
      return !this._invalid;
    }
    return true;
  }

  protected updated(changedProperties: PropertyValues<this>): void {
      super.updated(changedProperties);
      if (changedProperties.has('value') || changedProperties.has('required')) {
          this._updateValidityState();
      }
  }

  render() {
    const ariaLabel = !this.closest('lmc-form-field') && this.label ? this.label : undefined;
    return html`
      <select
        part="select"
        name=${ifDefined(this.name)}
        .value=${live(String(this.value ?? ''))}
        ?disabled=${this.disabled}
        ?required=${this.required}
        aria-label=${ifDefined(ariaLabel)}
        aria-invalid=${this._invalid ? 'true' : 'false'}
        @change=${this._handleChange}
      >
        ${map(this.options, (option) => html`
          <option
            value=${option.value}
            ?disabled=${option.disabled ?? false}
            .selected=${String(option.value) === String(this.value)}
          >
            ${option.label}
          </option>
        `)}
      </select>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-select': LmcSelect;
  }
}

// ELIMINADA la línea siguiente:
// export { LmcSelectOption };