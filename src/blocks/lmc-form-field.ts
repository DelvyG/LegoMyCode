// src/blocks/lmc-form-field.ts

import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

let formFieldCounter = 0; // Contador simple para IDs automáticos

/**
 * @element lmc-form-field
 * @description Envuelve un control de formulario (input, select, etc.) con su etiqueta y mensajes opcionales de ayuda/error. Facilita la accesibilidad y el estilo consistente.
 * @version 1.0.0
 *
 * @prop {String} label - El texto visible de la etiqueta para el control.
 * @prop {String} [fieldId] - ID único para asociar la etiqueta y el control. Si no se provee, se genera uno.
 * @prop {String} [helpText] - Texto de ayuda descriptivo que aparece debajo del control.
 * @prop {String} [errorMessage] - Mensaje de error que se muestra (y reemplaza a helpText) cuando `invalid` es true.
 * @prop {Boolean} [invalid=false] - Indica si el control tiene un error de validación. Aplica estilos de error.
 * @prop {Boolean} [required=false] - Indica si el campo es obligatorio. Muestra un indicador visual.
 *
 * @slot - Lugar para insertar el control de formulario real (ej: <lmc-input>, <textarea>, <select>). El componente intentará asociar la etiqueta al primer elemento sloteado.
 *
 * @cssprop [--lmc-form-field-margin-bottom=var(--lmc-global-spacing-md, 1rem)] - Margen inferior del campo completo.
 * @cssprop [--lmc-form-field-label-color=inherit] - Color del texto de la etiqueta.
 * @cssprop [--lmc-form-field-label-font-weight=bold] - Peso de la fuente de la etiqueta.
 * @cssprop [--lmc-form-field-label-margin-bottom=var(--lmc-global-spacing-xs, 0.25rem)] - Espacio debajo de la etiqueta.
 * @cssprop [--lmc-form-field-required-color=var(--lmc-global-color-danger, red)] - Color del indicador de requerido.
 * @cssprop [--lmc-form-field-help-text-color=var(--lmc-global-color-muted, grey)] - Color del texto de ayuda.
 * @cssprop [--lmc-form-field-error-text-color=var(--lmc-global-color-danger, red)] - Color del texto de error.
 * @cssprop [--lmc-form-field-message-font-size=var(--lmc-global-font-size-sm, 0.875em)] - Tamaño de fuente para mensajes de ayuda/error.
 * @cssprop [--lmc-form-field-message-margin-top=var(--lmc-global-spacing-xs, 0.25rem)] - Espacio encima de los mensajes.
 */
@customElement('lmc-form-field')
export class LmcFormField extends LitElement {

  @property({ type: String })
  label: string = '';

  @property({ type: String, attribute: 'field-id' })
  fieldId?: string;

  @property({ type: String, attribute: 'help-text' })
  helpText?: string;

  @property({ type: String, attribute: 'error-message' })
  errorMessage?: string;

  @property({ type: Boolean, reflect: true })
  invalid: boolean = false;

  @property({ type: Boolean, reflect: true })
  required: boolean = false;

  // Query para obtener el control sloteado
  @queryAssignedElements({ flatten: true })
  private _slottedElements!: Array<HTMLElement>;

  private _generatedId = `lmc-ff-${formFieldCounter++}`;
  private _controlId: string = '';

  static styles = css`
    :host {
      display: block;
      margin-bottom: var(--lmc-form-field-margin-bottom, var(--lmc-global-spacing-md, 1rem));
    }

    label {
      display: inline-block; /* O block si se prefiere etiqueta encima siempre */
      color: var(--lmc-form-field-label-color, inherit);
      font-weight: var(--lmc-form-field-label-font-weight, bold);
      margin-bottom: var(--lmc-form-field-label-margin-bottom, var(--lmc-global-spacing-xs, 0.25rem));
      cursor: pointer; /* Indica que es clickeable (para asociar con input) */
    }

    .required-indicator {
      color: var(--lmc-form-field-required-color, var(--lmc-global-color-danger, red));
      margin-left: 0.25em;
      font-weight: normal; /* No tan fuerte como el label */
    }

    .control-container ::slotted(*) {
       /* Asegura que el control ocupe el ancho disponible si es un input/select/textarea común */
       /* Cuidado si se slotean checkboxes o radios */
       /* display: block; */
       /* width: 100%; */
    }

     /* Estilos para cuando el campo es inválido */
     :host([invalid]) label {
        color: var(--lmc-form-field-error-text-color, var(--lmc-global-color-danger, red));
     }
     /* Podríamos añadir un borde al control sloteado, pero es complejo sin ::part */
     /* :host([invalid]) .control-container ::slotted(lmc-input) {
         border-color: var(--lmc-form-field-error-text-color, var(--lmc-global-color-danger, red));
     } */


    .message-container {
      margin-top: var(--lmc-form-field-message-margin-top, var(--lmc-global-spacing-xs, 0.25rem));
      font-size: var(--lmc-form-field-message-font-size, var(--lmc-global-font-size-sm, 0.875em));
      min-height: 1.2em; /* Reserva espacio aunque no haya mensaje */
    }

    .help-text {
      color: var(--lmc-form-field-help-text-color, var(--lmc-global-color-muted, grey));
    }

    .error-message {
      color: var(--lmc-form-field-error-text-color, var(--lmc-global-color-danger, red));
      font-weight: var(--lmc-global-font-weight-base, 400); /* O bold si se prefiere */
    }
  `;

  // Lógica para asignar IDs y asociar label/control
  private _handleSlotChange() {
    const elements = this._slottedElements;
    const control = elements.find(el => el instanceof HTMLElement && !el.hasAttribute('slot')) as HTMLElement | undefined; // Busca el primer elemento sin slot (el control principal)

    if (control) {
        // Prioriza el ID proporcionado, si no, genera uno
        this._controlId = this.fieldId || this._generatedId;
        // Asigna el ID al control sloteado si no tiene uno
        if (!control.id) {
            control.id = this._controlId;
        }
        // Asocia el aria-describedby si hay mensajes
        const messageId = this.errorMessage || this.helpText ? `msg-${this._controlId}` : undefined;
        if (messageId) {
            control.setAttribute('aria-describedby', messageId);
             // Añade aria-invalid si es necesario
             control.setAttribute('aria-invalid', this.invalid ? 'true' : 'false');
        } else {
            control.removeAttribute('aria-describedby');
             control.removeAttribute('aria-invalid'); // O poner false explícitamente
        }
        this.requestUpdate(); // Actualiza el render para usar el _controlId en el label
    }
  }

  render() {
    this._controlId = this.fieldId || this._generatedId; // Asegura que _controlId tenga un valor para el render inicial
    const messageId = this.errorMessage || this.helpText ? `msg-${this._controlId}` : undefined;

    return html`
      <div class="form-field-container" part="container">
        ${this.label ? html`
          <label for=${this._controlId} part="label">
            ${this.label}
            ${this.required ? html`<span class="required-indicator" aria-hidden="true">*</span>` : nothing}
          </label>
        ` : nothing}

        <div class="control-container" part="control">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>

        <div class="message-container" part="message" id=${ifDefined(messageId)}>
          ${this.invalid && this.errorMessage ? html`
            <span class="error-message" part="error-message">${this.errorMessage}</span>
          ` : this.helpText ? html`
            <span class="help-text" part="help-text">${this.helpText}</span>
          ` : nothing}
        </div>
      </div>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-form-field': LmcFormField;
  }
}