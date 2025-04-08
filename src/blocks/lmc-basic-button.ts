import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-basic-button
 * @description Un botón básico y clickeable con diferentes tipos y estado deshabilitado.
 * @version 1.1.0
 *
 * @prop {String} label - El texto a mostrar dentro del botón (default: 'Click Me').
 * @prop {Boolean} disabled - Si es true, el botón no es interactivo y aparece atenuado (default: false).
 * @prop {'button' | 'submit' | 'reset'} type - El tipo de botón HTML nativo (default: 'button'). Afecta el comportamiento dentro de formularios.
 * @prop {'primary' | 'secondary' | 'ghost'} [appearance] - (Opcional) Estilo visual predefinido. Requiere estilos CSS adicionales para funcionar.
 *
 * @cssprop [--lmc-button-background-color] - Color de fondo (fallback: --lmc-global-color-secondary, #eee).
 * @cssprop [--lmc-button-text-color] - Color de texto (fallback: --lmc-global-color-text, #333).
 * @cssprop [--lmc-button-padding] - Padding interno (fallback: calc(var(--lmc-global-spacing-base, 1rem) * 0.5) var(--lmc-global-spacing-base, 1rem)).
 * @cssprop [--lmc-button-border-radius] - Radio del borde (fallback: var(--lmc-global-border-radius-base, 4px)).
 * @cssprop [--lmc-button-opacity-disabled=0.5] - Opacidad cuando está deshabilitado.
 * @cssprop [--lmc-button-primary-bg-color] - Color de fondo para apariencia 'primary' (fallback: --lmc-global-color-primary, blue).
 * @cssprop [--lmc-button-primary-text-color] - Color de texto para apariencia 'primary' (fallback: white).
 *
 * @fires lmc-click - Se dispara cuando se hace clic en el botón, **solo si `type` no es 'submit'** y el botón no está deshabilitado. No contiene detail.
 */
@customElement('lmc-basic-button')
export class LmcBasicButton extends LitElement {

  // --- Estilos ---
  static styles = css`
    :host {
      display: inline-block;
      /* Variables internas para gestionar fallbacks y apariencias */
      --_lmc-button-bg-color: var(--lmc-button-background-color, var(--lmc-global-color-secondary, #eee));
      --_lmc-button-text-color: var(--lmc-button-text-color, var(--lmc-global-color-text, #333));
    }

    /* Estilos para apariencia primaria */
    :host([appearance="primary"]) {
       --_lmc-button-bg-color: var(--lmc-button-primary-bg-color, var(--lmc-global-color-primary, blue));
       --_lmc-button-text-color: var(--lmc-button-primary-text-color, white);
    }
     /* :host([appearance="ghost"]) { ... otros estilos ... } */

    /* Estilos del botón nativo interno */
    button {
      padding: var(--lmc-button-padding, calc(var(--lmc-global-spacing-base, 1rem) * 0.5) var(--lmc-global-spacing-base, 1rem));
      background-color: var(--_lmc-button-bg-color);
      color: var(--_lmc-button-text-color);
      border: none;
      border-radius: var(--lmc-button-border-radius, var(--lmc-global-border-radius-base, 4px));
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit; /* Asegura consistencia de altura */
      transition: filter 0.15s ease-out, background-color 0.15s ease-out, color 0.15s ease-out;
      -webkit-appearance: none; /* Quita estilos por defecto del navegador */
      appearance: none;
    }

    button:hover:not([disabled]) {
      filter: brightness(90%);
    }

    button:active:not([disabled]) {
      filter: brightness(80%);
    }

    /* Estilos cuando el botón nativo está deshabilitado */
    button[disabled] {
      cursor: not-allowed;
      opacity: var(--lmc-button-opacity-disabled, 0.5);
      filter: none; /* Quita efectos hover/active */
    }
  `;

  // --- Propiedades ---
  @property({ type: String })
  label: string = 'Click Me';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'button';

  // Opcional: Propiedad para controlar apariencia (requiere CSS en static styles)
  @property({ type: String, reflect: true })
  appearance?: 'primary' | 'secondary' | 'ghost';


  // --- Template (Render) ---
  render() {
    return html`
      <button
        type=${this.type}
        .disabled=${this.disabled}
        @click=${this._handleClick}
        part="button" <!-- Parte exportada para estilado externo si se necesita -->
      >
        <slot name="prefix"></slot> <!-- Slot para icono/contenido antes -->
        <span class="label" part="label">
           <slot>${this.label}</slot> <!-- Slot por defecto para sobreescribir label -->
        </span>
        <slot name="suffix"></slot> <!-- Slot para icono/contenido después -->
      </button>
    `;
  }

  // --- Lógica y Eventos (CORREGIDO Y COMPLETO) ---
  private _handleClick(event: MouseEvent) {
    console.log(`lmc-basic-button: _handleClick (type=${this.type}, disabled=${this.disabled})`);

    // Si está deshabilitado, no hacer nada más, pero importante detener
    // la propagación para evitar que otros listeners reaccionen.
    if (this.disabled) {
      event.stopPropagation();
      event.preventDefault(); // Previene cualquier acción por defecto residual
      return;
    }

    // SI Y SOLO SI el tipo NO es submit, disparamos nuestro evento lmc-click.
    // Para type="submit", dejamos que el evento 'click' nativo continúe
    // para que el <form> pueda recibirlo y disparar el evento 'submit'.
    if (this.type !== 'submit') {
      this.dispatchEvent(new CustomEvent('lmc-click', {
        bubbles: true,
        composed: true
      }));

      // Considera si los botones que NO son submit deben prevenir
      // cualquier comportamiento por defecto residual (raro para type=button)
      // event.preventDefault();
    }
    // Para type="reset", el navegador se encargará de resetear el formulario
    // si este botón está dentro de un <form>. No necesitamos hacer nada especial aquí.
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-basic-button': LmcBasicButton;
  }
}