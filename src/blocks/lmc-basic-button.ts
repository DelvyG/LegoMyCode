import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-basic-button
 * @description Un botón básico y clickeable con diferentes tipos, apariencias y estado deshabilitado. Utiliza variables globales de tema como fallback.
 * @version 1.2.0 (Con Tematización Global)
 *
 * @prop {String} label - El texto a mostrar dentro del botón (default: 'Click Me'). El contenido del slot por defecto tiene prioridad.
 * @prop {Boolean} [disabled=false] - Si es true, el botón no es interactivo y aparece atenuado.
 * @prop {'button' | 'submit' | 'reset'} [type='button'] - El tipo de botón HTML nativo.
 * @prop {'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'} [appearance] - Estilo visual predefinido basado en variables globales. Si no se especifica, usa colores 'secondary' por defecto.
 *
 * @slot - Contenido principal del botón, sobrescribe la propiedad `label`.
 * @slot prefix - Para contenido (ej: lmc-icon) antes del label/slot principal.
 * @slot suffix - Para contenido (ej: lmc-icon) después del label/slot principal.
 *
 * @fires lmc-click - Se dispara cuando se hace clic en el botón, **solo si `type` no es 'submit'** y el botón no está deshabilitado. No contiene detail.
 *
 * @cssprop [--lmc-button-padding] - Padding interno (fallback: basado en variables globales de espaciado).
 * @cssprop [--lmc-button-border-radius] - Radio del borde (fallback: variable global base).
 * @cssprop [--lmc-button-opacity-disabled=0.65] - Opacidad cuando está deshabilitado (valor Bootstrap).
 * @cssprop [--lmc-button-min-height=auto] - Altura mínima si se necesita consistencia vertical.
 * (Nota: Los colores de fondo y texto se controlan principalmente por las variables globales via 'appearance', aunque se podrían definir específicas como --lmc-button-primary-bg-color si se necesita sobreescribir.)
 */
@customElement('lmc-basic-button')
export class LmcBasicButton extends LitElement {

  @property({ type: String })
  label: string = 'Click Me'; // Servirá como fallback si el slot está vacío

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'button';

  @property({ type: String, reflect: true })
  appearance?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';

  // --- Estilos ---
  static styles = css`
    :host {
      display: inline-block; /* Se comporta como un botón normal */
      vertical-align: middle; /* Alinea bien con otros elementos inline */
    }

    button {
      /* Reseteo básico y herencia */
      all: unset; /* Quita casi todos los estilos por defecto del navegador */
      box-sizing: border-box;
      display: inline-flex; /* Permite alinear contenido interno (iconos, texto) */
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      cursor: pointer;
      white-space: nowrap; /* Evita que el texto se parta */
      user-select: none; /* Evita selección de texto accidental */
      -webkit-user-select: none;

      /* Estilos Base (Derivados de Tema Global 'secondary' por defecto) */
      padding: var(--lmc-button-padding, var(--lmc-global-spacing-sm, 0.5rem) var(--lmc-global-spacing-md, 1rem));
      border-radius: var(--lmc-button-border-radius, var(--lmc-global-border-radius-base, 0.375rem));
      min-height: var(--lmc-button-min-height, auto);
      font-family: var(--lmc-global-font-family-base, sans-serif);
      font-size: var(--lmc-global-font-size-base, 1rem);
      font-weight: var(--lmc-global-font-weight-base, 400);
      line-height: var(--lmc-global-line-height-base, 1.5);
      text-align: center;
      text-decoration: none; /* Para botones que parecen enlaces */

      /* Colores base (usan 'secondary' si no hay appearance) */
      background-color: var(--_lmc-button-bg-color, var(--lmc-global-color-secondary, #6c757d));
      color: var(--_lmc-button-text-color, var(--lmc-global-color-white, #ffffff));
      border: var(--lmc-global-border-width, 1px) solid transparent; /* Borde transparente para mantener tamaño */

      transition: filter 0.15s ease-out, background-color 0.15s ease-out, border-color 0.15s ease-out, color 0.15s ease-out, box-shadow 0.15s ease-out;
    }

    /* Estilos por Apariencia - Usan variables globales */
    :host([appearance="primary"]) button {
       --_lmc-button-bg-color: var(--lmc-global-color-primary, #0d6efd);
       --_lmc-button-text-color: var(--lmc-global-color-white, #ffffff);
       border-color: var(--_lmc-button-bg-color); /* Borde del mismo color */
    }
    :host([appearance="secondary"]) button {
       --_lmc-button-bg-color: var(--lmc-global-color-secondary, #6c757d);
       --_lmc-button-text-color: var(--lmc-global-color-white, #ffffff);
        border-color: var(--_lmc-button-bg-color);
    }
     :host([appearance="success"]) button {
       --_lmc-button-bg-color: var(--lmc-global-color-success, #198754);
       --_lmc-button-text-color: var(--lmc-global-color-white, #ffffff);
        border-color: var(--_lmc-button-bg-color);
    }
     :host([appearance="danger"]) button {
       --_lmc-button-bg-color: var(--lmc-global-color-danger, #dc3545);
       --_lmc-button-text-color: var(--lmc-global-color-white, #ffffff);
        border-color: var(--_lmc-button-bg-color);
    }
     :host([appearance="warning"]) button {
       --_lmc-button-bg-color: var(--lmc-global-color-warning, #ffc107);
       --_lmc-button-text-color: var(--lmc-global-color-dark, #212529); /* Texto oscuro en warning */
        border-color: var(--_lmc-button-bg-color);
    }
     :host([appearance="info"]) button {
       --_lmc-button-bg-color: var(--lmc-global-color-info, #0dcaf0);
       --_lmc-button-text-color: var(--lmc-global-color-dark, #212529); /* Texto oscuro en info */
        border-color: var(--_lmc-button-bg-color);
    }
     :host([appearance="light"]) button {
       --_lmc-button-bg-color: var(--lmc-global-color-light, #f8f9fa);
       --_lmc-button-text-color: var(--lmc-global-color-dark, #212529);
       border-color: #dee2e6; /* Borde sutil para light */
    }
     :host([appearance="dark"]) button {
       --_lmc-button-bg-color: var(--lmc-global-color-dark, #212529);
       --_lmc-button-text-color: var(--lmc-global-color-white, #ffffff);
        border-color: var(--_lmc-button-bg-color);
    }
    :host([appearance="link"]) button {
       --_lmc-button-bg-color: transparent;
       --_lmc-button-text-color: var(--lmc-global-color-primary, #0d6efd);
       border-color: transparent;
       text-decoration: underline;
    }
    :host([appearance="link"]) button:hover:not([disabled]) {
        filter: brightness(70%); /* Oscurece un poco el link */
    }


    /* Estados :hover y :active (aplican a la mayoría de apariencias) */
    button:hover:not([disabled]) {
      filter: brightness(90%);
    }
    button:active:not([disabled]) {
      filter: brightness(80%);
    }

    /* Estado Deshabilitado */
    button[disabled] {
      cursor: not-allowed;
      opacity: var(--lmc-button-opacity-disabled, 0.65); /* Valor Bootstrap */
      filter: none; /* Quita efectos hover/active */
      pointer-events: none; /* Asegura no interacción */
    }

    /* Estilos para contenido sloteado (iconos, etc.) */
    .label {
       /* Si necesitas estilos específicos para el texto */
    }
    ::slotted(lmc-icon) {
       /* Ajusta el tamaño o margen del icono si es necesario */
       font-size: 1.2em; /* Ejemplo */
    }
    /* Espacio entre icono y texto si ambos existen */
    slot[name="prefix"]::slotted(*) + .label,
    .label + slot[name="suffix"]::slotted(*) {
       margin-left: var(--lmc-global-spacing-sm, 0.5rem);
    }
     slot[name="prefix"]::slotted(*) {
         margin-right: var(--lmc-global-spacing-sm, 0.5rem);
     }
      slot[name="suffix"]::slotted(*) {
         margin-left: var(--lmc-global-spacing-sm, 0.5rem);
     }

  `;

  // --- Propiedades (ya definidas arriba) ---

  // --- Template (Render) ---
  render() {
    return html`
      <button
        type=${this.type}
        .disabled=${this.disabled}
        @click=${this._handleClick}
        part="button"
      >
        <slot name="prefix" part="prefix"></slot>
        <span class="label" part="label">
           <slot>${this.label}</slot> ${/* Usa la propiedad label como fallback si el slot está vacío */''}
        </span>
        <slot name="suffix" part="suffix"></slot>
      </button>
    `;
  }

  // --- Lógica y Eventos ---
  private _handleClick(event: MouseEvent) {
    // No es necesario log aquí a menos que depuremos
    if (this.disabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }
    if (this.type !== 'submit') {
      this.dispatchEvent(new CustomEvent('lmc-click', {
        bubbles: true,
        composed: true
      }));
    }
    // El navegador maneja el submit y reset automáticamente
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-basic-button': LmcBasicButton;
  }
}