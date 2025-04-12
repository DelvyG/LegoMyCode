import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { LmcForm } from '../blocks/lmc-form';
// Importar otros bloques y tipos necesarios
import '../blocks/lmc-container';
import '../blocks/lmc-text-display';
import '../blocks/lmc-input';
import '../blocks/lmc-textarea';
import '../blocks/lmc-checkbox';
import '../blocks/lmc-select';
import type { LmcSelectOption } from '../blocks/lmc-select';
import '../blocks/lmc-form-field';
import '../blocks/lmc-basic-button';
import '../blocks/lmc-alert';

@customElement('lmc-page-forms')
export class LmcPageForms extends LitElement {

  @state() private _formData: Record<string, any> | null = null;
  @state() private _formSubmitCount = 0;

  private _queryTypeOptions: LmcSelectOption[] = [
    { value: "", label: "-- Selecciona una opción --", disabled: true },
    { value: "general", label: "Consulta General" },
    { value: "support", label: "Soporte Técnico" },
    { value: "sales", label: "Ventas" }
  ];

  private _individualSelectOptions: LmcSelectOption[] = [
    { value: "a", label: "Opción A" },
    { value: "b", label: "Opción B" },
    { value: "c", label: "Opción C" }
  ];

  // Removed unused _lmcFormElement property

  static styles = css`
    /* --- ESTILOS COMPLETOS Y CORREGIDOS --- */
    lmc-form-field {
        display: block; /* Asegura que cada campo ocupe su línea */
        width: 100%; /* Opcional, pero ayuda a controlar */
        margin-bottom: var(--lmc-global-spacing-md, 1rem); /* Espacio estándar entre campos */
    }
    lmc-container { padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem); }
    h2 { margin-top: var(--lmc-global-spacing-xl, 3rem); margin-bottom: var(--lmc-global-spacing-md, 1rem); border-bottom: 1px solid var(--lmc-global-color-border, #eee); padding-bottom: var(--lmc-global-spacing-sm, 0.5rem); color: var(--lmc-global-color-text-default); }
    h2:first-of-type { margin-top: var(--lmc-global-spacing-lg, 2rem); }
    h3 { margin-top: var(--lmc-global-spacing-lg, 1.5rem); margin-bottom: var(--lmc-global-spacing-sm, 0.5rem); color: var(--lmc-global-color-text-muted); }
    .demo-section { margin-bottom: var(--lmc-global-spacing-xl, 3rem); }
    .controls-showcase {
        display: flex; flex-wrap: wrap; gap: var(--lmc-global-spacing-lg, 1.5rem);
        align-items: flex-start; padding: var(--lmc-global-spacing-md, 1rem);
        border: 1px dashed var(--lmc-global-color-border, #ccc);
        border-radius: var(--lmc-global-border-radius-md, 4px);
        background-color: var(--lmc-global-color-background-secondary, #f8f9fa);
        transition: background-color 0.3s ease, border-color 0.3s ease;
        margin-top: var(--lmc-global-spacing-md, 1rem);
    }
     .controls-showcase lmc-form-field {
         flex: 1 1 250px;
         min-width: 200px;
         margin-bottom: 0; /* Quitar margen inferior extra en showcase */
     }
    lmc-form {
        max-width: 600px;
        margin-left: auto; margin-right: auto; display: block;
    }
    /* Ya no se necesita la regla específica lmc-form lmc-form-field */
    /* Controles internos */
    lmc-form lmc-form-field > lmc-input,
    lmc-form lmc-form-field > lmc-textarea,
    lmc-form lmc-form-field > lmc-select {
        width: 100%; box-sizing: border-box;
    }
    .submit-button-container { text-align: right; margin-top: var(--lmc-global-spacing-lg, 1.5rem); }
    pre { background-color: var(--lmc-global-color-background-secondary); border: 1px solid var(--lmc-global-color-border); border-radius: var(--lmc-global-border-radius-md); padding: var(--lmc-global-spacing-md); overflow-x: auto; max-width: 600px; margin-left: auto; margin-right: auto; margin-top: var(--lmc-global-spacing-md); font-size: 0.9em; color: var(--lmc-global-color-text-default); transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; }
    code { background-color: var(--lmc-global-color-background-tertiary, #e9ecef); color: var(--lmc-global-color-text-default); padding: 0.15em 0.4em; border-radius: var(--lmc-global-border-radius-sm, 3px); font-size: 0.9em; transition: background-color 0.3s ease, color 0.3s ease; }
    lmc-text-display { color: var(--lmc-global-color-text-default); }
    lmc-text-display[level="p"]:first-of-type { color: var(--lmc-global-color-text-muted); }
  `;

  private _handleFormSubmit(event: CustomEvent<{ formData: FormData }>) {
    console.log('[lmc-page-forms] _handleFormSubmit CAPTURADO (vía lmc-submit)!');
    this._formSubmitCount++;
    const rawData = event.detail.formData;
    console.log('[lmc-page-forms] Raw FormData:', rawData);
    const data: Record<string, any> = {};
    rawData.forEach((value, key) => {
       if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (!Array.isArray(data[key])) { data[key] = [data[key]]; }
        (data[key] as any[]).push(value);
      } else { data[key] = value; }
    });
    if (Object.prototype.hasOwnProperty.call(data, 'subscribe')) { data['subscribe'] = (data['subscribe'] === 'on'); }
    else { data['subscribe'] = false; }
    this._formData = data;
    console.log('[lmc-page-forms] Form data processed (object):', this._formData);
  }

  private _handleButtonClick() {
    console.log('[lmc-page-forms] Submit button clicked.');
    const formElement = this.renderRoot.querySelector<LmcForm>('#contact-form');
    if (formElement && typeof formElement.requestFormSubmit === 'function') {
      console.log('[lmc-page-forms] Calling formElement.requestFormSubmit()...');
      formElement.requestFormSubmit();
    } else {
      console.error('[lmc-page-forms] Could not find lmc-form element with id="contact-form" or its requestFormSubmit method.');
       if (formElement) { console.error('[lmc-page-forms] Found the element, but requestFormSubmit is not a function:', formElement); }
       else { console.error('[lmc-page-forms] Element #contact-form NOT FOUND in renderRoot.'); }
    }
  }

  render() {
    console.log('[lmc-page-forms] Rendering...');
    return html`
      <lmc-container>
        <lmc-text-display level="h1">Formularios (Forms)</lmc-text-display>
        <lmc-text-display level="p">
            Demostración de los componentes para crear formularios: <code>lmc-form</code>,
            <code>lmc-form-field</code>, <code>lmc-input</code>, <code>lmc-textarea</code>,
            <code>lmc-checkbox</code>, y <code>lmc-select</code>.
        </lmc-text-display>

        <div class="demo-section">
          <h2>Ejemplo de Formulario Completo</h2>
          <lmc-text-display level="p">
              Este formulario utiliza <code>lmc-form</code> para agrupar los campos.
              El evento se maneja haciendo clic en el botón y llamando a un método del formulario.
              (Actualmente, el envío no muestra los datos visualmente debido a un problema pendiente).
          </lmc-text-display>

          <lmc-form id="contact-form" @lmc-submit=${this._handleFormSubmit}>
            <lmc-form-field label="Nombre Completo">
              <lmc-input name="fullName" placeholder="Ej: Ana García" required></lmc-input>
            </lmc-form-field>
            <lmc-form-field label="Correo Electrónico">
              <lmc-input name="email" type="email" placeholder="tu@correo.com" required></lmc-input>
            </lmc-form-field>
            <lmc-form-field label="Tipo de Consulta">
               <lmc-select name="queryType" required .options=${this._queryTypeOptions} .value=${""}></lmc-select>
            </lmc-form-field>
            <lmc-form-field label="Mensaje">
               <lmc-textarea name="message" rows="4" placeholder="Escribe tu mensaje aquí..."></lmc-textarea>
            </lmc-form-field>
            <lmc-form-field>
               <lmc-checkbox name="subscribe" label="Suscribirme al boletín"></lmc-checkbox>
            </lmc-form-field>
            <div class="submit-button-container">
               <lmc-basic-button appearance="primary" @lmc-click=${this._handleButtonClick}>
                 Enviar Formulario
               </lmc-basic-button>
             </div>
          </lmc-form>

          <!-- Sección de Datos Recibidos (se mostrará si el submit funcionara) -->
          ${this._formData ? html`
            <h3 style="color: orange;">(DEBUG) Datos Recibidos (Submit #${this._formSubmitCount}):</h3>
            <pre><code>${JSON.stringify(this._formData, null, 2)}</code></pre>
            <lmc-alert type="success" style="margin-top: 1rem; max-width: 600px; margin-inline: auto;">
                (DEBUG) ¡Evento submit capturado! Mira la consola para ver los datos crudos.
            </lmc-alert>
          ` : '' /* ELIMINADO EL PLACEHOLDER QUE CAUSABA LA LÍNEA AZUL */
          }
        </div>

        <!-- Sección de Controles Individuales -->
        <div class="demo-section">
             <h2>Controles Individuales</h2>
             <lmc-text-display level="p">
                 Ejemplos de los diferentes controles de formulario fuera de un <code>lmc-form</code>.
             </lmc-text-display>
             <div class="controls-showcase">
                 <lmc-form-field label="Input de Texto (disabled)"><lmc-input value="Valor fijo" disabled></lmc-input></lmc-form-field>
                 <lmc-form-field label="Input de Contraseña"><lmc-input type="password" placeholder="Introduce contraseña"></lmc-input></lmc-form-field>
                 <lmc-form-field label="Input Numérico"><lmc-input type="number" value="10"></lmc-input></lmc-form-field>
                 <lmc-form-field label="Textarea (readonly)"><lmc-textarea rows="3" readonly>Este texto no se puede editar.</lmc-textarea></lmc-form-field>
                 <lmc-form-field label="Checkbox (checked y disabled)"><lmc-checkbox checked disabled label="Opción inmutable"></lmc-checkbox></lmc-form-field>
                 <lmc-form-field label="Select (preseleccionado)"><lmc-select value="b" .options=${this._individualSelectOptions}></lmc-select></lmc-form-field>
             </div>
        </div>
      </lmc-container>
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'lmc-page-forms': LmcPageForms; } }