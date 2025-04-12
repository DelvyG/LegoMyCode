import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js'; // Añadir query

/**
 * @element lmc-form
 * @description Contenedor para agrupar campos de formulario y manejar el evento de envío.
 * Envuelve el contenido del slot en una etiqueta <form> nativa.
 * @version 1.2.0 - Añadido requestFormSubmit() y corregido _handleSubmit.
 *
 * @slot - Contenido del formulario (generalmente lmc-form-fields y un botón de submit).
 *
 * @fires lmc-submit - Se dispara cuando el formulario se envía (ej: al llamar a requestFormSubmit o al presionar Enter en un campo si el navegador lo soporta).
 * El `detail` del evento contiene `{ formData: FormData }` con los datos del formulario.
 */
@customElement('lmc-form')
export class LmcForm extends LitElement {

  // Query para obtener referencia al elemento <form> interno en el Shadow DOM
  @query('form') private _formElement?: HTMLFormElement;

  static styles = css`
    :host {
      display: block; /* Ocupa espacio por defecto */
    }
    /* El form interno no debe afectar el layout de los elementos del slot */
    form {
      display: contents;
    }
  `;

  /**
   * Maneja el evento 'submit' nativo del elemento <form> interno.
   * Este evento se dispara por la acción del navegador (ej: Enter) o
   * cuando se llama a `requestSubmit()` en el elemento form.
   * Previene el envío por defecto del navegador, crea FormData y dispara
   * el evento personalizado 'lmc-submit'.
   */
  private _handleSubmit(event: Event) {
    console.log('[lmc-form] Native form _handleSubmit triggered.'); // LOG 1
    // ¡CRUCIAL! Evita la recarga/navegación de la página.
    event.preventDefault();
    console.log('[lmc-form] Default prevented.'); // LOG 2

    // Usamos la referencia obtenida por @query si está disponible, si no, el target
    const form = this._formElement ?? event.target as HTMLFormElement;
    if (!form) {
        console.error('[lmc-form] Could not get form element reference.');
        return;
    }
    // Actualiza la referencia si usamos event.target
    if (!this._formElement) this._formElement = form;

    try {
      // Crear FormData a partir del elemento form interno
      const formData = new FormData(form);
      console.log('[lmc-form] FormData created via _handleSubmit:', formData); // LOG 3

      // Disparar el evento personalizado hacia fuera del componente
      this.dispatchEvent(new CustomEvent('lmc-submit', {
          detail: { formData: formData },
          bubbles: true,  // Permite que el evento suba por el DOM
          composed: true // Permite que el evento cruce los límites del Shadow DOM
      }));
      console.log('[lmc-form] lmc-submit dispatched via _handleSubmit.'); // LOG 4
    } catch (error) {
      console.error('[lmc-form] Error in native _handleSubmit:', error);
    }
  }

  /**
   * Método público para solicitar el envío del formulario desde fuera
   * (ej: desde un botón externo al Shadow DOM del form).
   * Intenta llamar a requestSubmit() en el form interno, lo cual
   * ejecutará la validación del navegador y disparará el evento 'submit' (que captura _handleSubmit).
   */
  public requestFormSubmit() { // <-- ¡MÉTODO AÑADIDO!
    console.log('[lmc-form] requestFormSubmit() called programmatically.'); // LOG NUEVO 1
    const formToSubmit = this._formElement ?? this.shadowRoot?.querySelector('form'); // Intenta buscar si @query falló

    if (formToSubmit) {
      try {
          // requestSubmit() simula el envío, incluyendo validación.
          // Si es válido, disparará el evento 'submit' que capturamos en _handleSubmit.
          formToSubmit.requestSubmit();
          console.log('[lmc-form] Native form.requestSubmit() called successfully.'); // LOG NUEVO 2
      } catch (error) {
           console.error('[lmc-form] Error calling requestSubmit():', error);
      }
    } else {
       console.error('[lmc-form] Cannot request submit: internal <form> element not found.');
    }
  }

  render() {
    // El listener @submit captura el evento 'submit' del <form> interno,
    // ya sea disparado por el navegador (Enter) o por requestSubmit().
    return html`
      <form @submit=${this._handleSubmit}>
        <slot></slot>
      </form>
    `;
  }
}

// Declaración TypeScript
// (Eliminé la interfaz extra LmcFormHTMLElementTagNameMap, no es estrictamente necesaria aquí)
declare global {
  interface HTMLElementTagNameMap {
    'lmc-form': LmcForm;
  }
}