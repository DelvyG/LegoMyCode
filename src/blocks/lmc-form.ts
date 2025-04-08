import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @element lmc-form
 * @description Componente contenedor de formularios. Permite insertar campos personalizados mediante slots. Maneja el evento submit previniendo el comportamiento por defecto del navegador y emitiendo un evento 'lmc-submit'.
 * @version 1.0.0
 *
 * @slot - Contenido del formulario (inputs, textareas, botones, etc.).
 *
 * @fires lmc-submit - Se dispara cuando el formulario es enviado (a través de un botón type="submit" interno). No contiene datos en detail por defecto.
 */
@customElement('lmc-form')
export class LmcForm extends LitElement {

  // 👇 *** AÑADIR ESTA LÍNEA ***
  /**
   * Indica que este elemento está asociado a formularios.
   * Ayuda con la gestión de eventos y el estado del formulario.
   */
  static formAssociated = true;

  // Estilos mínimos
  static styles = css`
    :host {
      display: block; /* Comportamiento de bloque por defecto */
    }
    /* El formulario interno no necesita estilos por defecto aquí,
       se estiliza el contenido a través del slot */
    form {
       display: contents; /* Hace que el form no afecte el layout del slot */
    }
  `;

  /**
   * Manejador interno para el evento 'submit' del formulario nativo.
   * Previene el envío por defecto y dispara el evento personalizado 'lmc-submit'.
   * @param {SubmitEvent} event - El evento de envío original.
   */
  private _handleSubmit(event: SubmitEvent) {
    console.log('lmc-form: _handleSubmit ejecutado'); // Log para depuración
    event.preventDefault(); // Evita la recarga de la página

    // Dispara el evento personalizado para que los componentes padres reaccionen
    this.dispatchEvent(
      new CustomEvent('lmc-submit', {
        bubbles: true, // Permite que el evento suba por el DOM
        composed: true // Permite que cruce los límites del Shadow DOM
        // 'detail' podría usarse en el futuro para enviar datos del formulario automáticamente
      })
    );
  }

  /**
   * Renderiza el elemento <form> nativo con un slot para el contenido.
   * Adjunta el listener @submit al manejador interno.
   */
  render() {
    return html`
      <form @submit=${this._handleSubmit}>
        <slot></slot> <!-- Aquí se insertarán los campos del formulario -->
      </form>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-form': LmcForm;
  }
}