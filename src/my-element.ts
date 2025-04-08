// =======================================================================
// IMPORTS
// =======================================================================
// Bloques LegoMyCode
import './blocks/lmc-text-display';
import './blocks/lmc-basic-button';
import './blocks/lmc-simple-image';
import './blocks/lmc-card';
import './blocks/lmc-input';
import './blocks/lmc-alert';
import './blocks/lmc-checkbox';
import './blocks/lmc-textarea';
import './blocks/lmc-select';
import type { LmcSelectOption } from './blocks/lmc-select';
import './blocks/lmc-form';
import './blocks/lmc-container';
import './blocks/lmc-nav-link';
import './blocks/lmc-navbar';
import './blocks/lmc-footer';
import './blocks/lmc-grid';

// Lit y Decoradores
import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// =======================================================================
// DEFINICIÓN DEL COMPONENTE PRINCIPAL: MyElement
// =======================================================================
@customElement('my-element')
export class MyElement extends LitElement {

  // =======================================================================
  // ESTADO INTERNO Y DATOS
  // =======================================================================
  @state() private _inputValue: string = 'Texto inicial input';
  @state() private _textareaValue: string = 'Texto inicial textarea\ncon varias líneas.';
  @state() private _isChecked1: boolean = false;
  @state() private _isChecked2: boolean = true; // Solo para demo fuera del form
  @state() private _selectedValue: string | number = '';

  private _selectOptions: LmcSelectOption[] = [
    { value: 'op1', label: 'Opción Uno' },
    { value: 'op2', label: 'Opción Dos' },
    { value: 'op3', label: 'Opción Tres (Deshabilitada)', disabled: true },
    { value: 100, label: 'Opción Cuatro (Número)' }
  ];

  // =======================================================================
  // MANEJADORES DE EVENTOS
  // =======================================================================
  private _handleButtonClick() {
    console.log('Botón genérico clickeado!');
    alert('¡Botón genérico pulsado!');
  }
  private _handleInputChange(event: CustomEvent) {
     // Asegurarse que event.detail y event.detail.value existen
     if (event.detail && typeof event.detail.value === 'string') {
       this._inputValue = event.detail.value;
     }
  }
  private _handleTextareaChange(event: CustomEvent) {
    if (event.detail && typeof event.detail.value === 'string') {
      this._textareaValue = event.detail.value;
    }
  }
  private _handleCheckboxChange(event: CustomEvent, checkboxId: string) {
    console.log(`Checkbox ${checkboxId} cambió:`, event.detail);
    // Asegurarse que event.detail y event.detail.checked existen
    if (event.detail && typeof event.detail.checked === 'boolean') {
        if (checkboxId === 'cb1') {
          this._isChecked1 = event.detail.checked;
        } else if (checkboxId === 'cb2') {
          this._isChecked2 = event.detail.checked;
        }
    }
  }
  private _handleSelectChange(event: CustomEvent) {
    console.log('Select cambió:', event.detail);
    if (event.detail && typeof event.detail.value !== 'undefined') { // Puede ser string o number
      this._selectedValue = event.detail.value;
    }
  }
  private _handleFormSubmit() {
    console.log('Manejador _handleFormSubmit ejecutado.');
    const formData = {
      input: this._inputValue,
      textarea: this._textareaValue,
      checkbox1: this._isChecked1,
      // select: this._selectedValue // El select no está en el form, lo quitamos de aquí
    };
    console.log('Datos del formulario:', formData);
    alert(`Formulario enviado con:\nInput: ${formData.input}\nTextarea: ${formData.textarea}\nCheckbox Confirmar: ${formData.checkbox1}`);
  }

  // =======================================================================
  // MÉTODO RENDER (CORREGIDO Y REORGANIZADO)
  // =======================================================================
  render() {
    const imageUrl = '/img/lego1.png';

    // Contenedor principal para centrar y limitar ancho
    return html`
      <lmc-container class="main-demo-wrapper" maxWidth="1000px" center-content padding="0">

        <!-- ================== Barra de Navegación ================== -->
        <lmc-navbar style="--lmc-navbar-background-color: #f8f9fa; --lmc-navbar-border-bottom: 1px solid #dee2e6;">
          <div slot="brand">
             <lmc-nav-link href="#" style="--lmc-nav-link-padding: 0.5rem 0;">
                <img src="/img/lego1.png" alt="LegoMyCode Logo" style="height: 30px; margin-right: 0.5rem;">
                <strong>LegoMyCode</strong>
             </lmc-nav-link>
          </div>
          <lmc-nav-link href="#inicio" active>Inicio</lmc-nav-link>
          <lmc-nav-link href="#componentes">Componentes</lmc-nav-link>
          <lmc-nav-link href="#acerca">Acerca De</lmc-nav-link>
          <lmc-nav-link href="#deshabilitado" disabled>Pronto</lmc-nav-link>
          <div slot="actions">
            <lmc-basic-button label="Login" @lmc-click=${() => alert('Click en Login!')}></lmc-basic-button>
          </div>
        </lmc-navbar>
        <!-- ================== Fin Barra de Navegación ================== -->

        <!-- Contenedor para el contenido principal con padding -->
        <lmc-container padding="1.5rem" class="main-content-area">

            <h1>Hola desde LegoMyCode!</h1>
            <p>Demostración de los bloques disponibles:</p>
            <hr>

             <!-- --- Sección lmc-text-display --- -->
            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-text-display</h2>
              <lmc-text-display text="Texto básico."></lmc-text-display>
              <br>
              <lmc-text-display
                text="Texto personalizado con estilo inline (variables CSS)."
                style="--lmc-text-display-color: var(--lmc-global-color-primary, blue); --lmc-text-display-font-size: 1.2em;"
              ></lmc-text-display>
            </lmc-container>

            <!-- --- Sección lmc-simple-image --- -->
            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-simple-image</h2>
              <div class="image-gallery">
                 <lmc-simple-image src=${imageUrl} alt="Lego 1" width="150px" height="150px" caption="Caption 1"></lmc-simple-image>
                 <lmc-simple-image src=${imageUrl} alt="Lego 2" style="--lmc-image-object-fit: contain; border: 1px solid grey;" width="200px" height="100px" caption="Contain"></lmc-simple-image>
                 <lmc-simple-image src="url_erronea" alt="Imagen rota" width="100px" height="100px"></lmc-simple-image>
              </div>
            </lmc-container>

            <!-- --- Sección lmc-basic-button --- -->
            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-basic-button</h2>
              <lmc-basic-button label="Botón Normal" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
              <lmc-basic-button label="Botón Deshabilitado" disabled @lmc-click=${this._handleButtonClick}></lmc-basic-button>
              <lmc-basic-button label="Botón tipo Submit (para forms)" type="submit"></lmc-basic-button>
            </lmc-container>

             <!-- --- Sección lmc-nav-link --- -->
            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-nav-link</h2>
              <p>Enlaces de navegación individuales:</p>
              <nav class="nav-example">
                <lmc-nav-link href="#inicio">Inicio</lmc-nav-link>
                <lmc-nav-link href="#servicios" active>Servicios (Activo)</lmc-nav-link>
                <lmc-nav-link href="#contacto">Contacto</lmc-nav-link>
                <lmc-nav-link href="#ayuda" disabled>Ayuda (Deshabilitado)</lmc-nav-link>
                <lmc-nav-link href="#tienda" style="--lmc-nav-link-text-color: darkorchid; --lmc-nav-link-text-decoration-hover: none;">
                  Tienda (Estilo Inline)
                </lmc-nav-link>
              </nav>
            </lmc-container>

           <!-- --- Sección lmc-card (usando lmc-grid) --- -->
            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-card (organizadas con lmc-grid)</h2>
              <lmc-grid style="--lmc-grid-min-item-width: 300px; --lmc-grid-gap: 1.5rem;">
                <!-- Tarjeta 1 -->
                <lmc-card class="demo-card">
                  <lmc-simple-image src="${imageUrl}" alt="Lego 1 en tarjeta" width="100%"></lmc-simple-image>
                  <lmc-text-display text="Contenido en slot por defecto." style="display: block; padding: 1rem 0;"></lmc-text-display>
                  <lmc-basic-button label="Acción Tarjeta 1" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
                </lmc-card>
                <!-- Tarjeta 2 -->
                <lmc-card class="demo-card">
                  <lmc-text-display slot="header" text="Tarjeta con Slots Nombrados"></lmc-text-display>
                  <p>Contenido principal (slot por defecto).</p>
                  <ul><li>Item 1</li><li>Item 2</li></ul>
                  <div slot="footer" class="card-footer-actions">
                    <lmc-basic-button label="Cancelar" @lmc-click=${() => console.log('Cancelar pulsado')}></lmc-basic-button>
                    <lmc-basic-button label="Aceptar" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
                  </div>
                </lmc-card>
                <!-- Tarjeta 3 -->
                <lmc-card class="demo-card">
                  <lmc-text-display slot="header" text="Otra Tarjeta"></lmc-text-display>
                  <p>Más contenido para llenar la cuadrícula y probar el responsive.</p>
                   <lmc-basic-button label="Ver Más" appearance="primary"></lmc-basic-button>
                </lmc-card>
                 <!-- Tarjeta 4 -->
                 <lmc-card class="demo-card">
                  <lmc-text-display slot="header" text="Última Tarjeta Ejemplo"></lmc-text-display>
                  <p>Elemento final en la cuadrícula.</p>
                </lmc-card>
              </lmc-grid>
            </lmc-container>

            <!-- --- Sección lmc-alert --- -->
            <lmc-container padding="1rem" class="demo-section">
                <h2>lmc-alert</h2>
                <lmc-alert type="info" message="Esta es una alerta informativa."></lmc-alert>
                <lmc-alert type="success" message="¡Operación completada con éxito!"></lmc-alert>
                <lmc-alert type="warning" message="Atención: revisa los datos ingresados."></lmc-alert>
                <lmc-alert type="danger" message="Error: no se pudo procesar la solicitud."></lmc-alert>
            </lmc-container>

           <!-- --- Sección Controles de Formulario Individuales --- -->
            <lmc-container padding="1rem" class="demo-section">
                <h2>Controles de Formulario</h2>
                <!-- lmc-input -->
                <div>
                    <h3>lmc-input</h3>
                    <lmc-input label="Input Normal:" placeholder="Escribe aquí..." .value=${this._inputValue} @lmc-input=${this._handleInputChange}></lmc-input>
                    <p>Valor: ${this._inputValue}</p>
                    <lmc-input label="Input Deshabilitado:" value="No editable" disabled></lmc-input>
                    <lmc-input label="Input de Contraseña:" type="password" placeholder="Contraseña"></lmc-input>
                </div>
                <!-- lmc-textarea -->
                <div class="form-field-spacing">
                    <h3>lmc-textarea</h3>
                    <lmc-textarea label="Textarea Normal:" .value=${this._textareaValue} @lmc-input=${this._handleTextareaChange}></lmc-textarea>
                    <p>Valor:</p>
                    <pre class="code-display">${this._textareaValue}</pre>
                    <lmc-textarea label="No redimensionable:" value="Fijo" resize="none" readonly></lmc-textarea>
                </div>
                <!-- lmc-checkbox -->
                <div class="form-field-spacing">
                  <h3>lmc-checkbox</h3>
                  <lmc-checkbox label="Checkbox 1 (controlado)" .checked=${this._isChecked1} @lmc-change=${(e: CustomEvent) => this._handleCheckboxChange(e, 'cb1')}></lmc-checkbox>
                  <p>Estado Checkbox 1: ${this._isChecked1}</p>
                  <lmc-checkbox label="Checkbox 2 (default checked)" .checked=${this._isChecked2} @lmc-change=${(e: CustomEvent) => this._handleCheckboxChange(e, 'cb2')}></lmc-checkbox>
                  <p>Estado Checkbox 2: ${this._isChecked2}</p>
                  <lmc-checkbox label="Checkbox Deshabilitado" disabled checked></lmc-checkbox>
                 </div>
                 <!-- lmc-select -->
                 <div class="form-field-spacing">
                    <h3>lmc-select</h3>
                    <lmc-select
                      label="Elige una opción:"
                      placeholder="-- Selecciona --"
                      .options=${this._selectOptions}
                      .value=${this._selectedValue}
                      @lmc-change=${this._handleSelectChange}
                    ></lmc-select>
                    <p>Valor seleccionado: <strong>${this._selectedValue || 'Ninguno'}</strong></p>
                    <lmc-select label="Select Deshabilitado:" disabled .options=${this._selectOptions} value="op1"></lmc-select>
                 </div>
            </lmc-container>

            <!-- Sección lmc-form (Usando los controles anteriores) --- -->
            <lmc-container padding="1rem" class="demo-section" style="--lmc-container-background-color: #fafafa;">
              <h2>lmc-form</h2>
              <p>Este formulario usa los controles definidos arriba y se envia con el botón 'type="submit"'.</p>
              <lmc-form @lmc-submit=${this._handleFormSubmit}>
                <div class="form-field">
                  <lmc-input label="Nombre (en Form):" placeholder="Tu nombre" .value=${this._inputValue} @lmc-input=${this._handleInputChange} required></lmc-input>
                </div>
                <div class="form-field">
                  <lmc-textarea label="Comentario (en Form):" placeholder="Tu comentario" rows="3" .value=${this._textareaValue} @lmc-input=${this._handleTextareaChange}></lmc-textarea>
                </div>
                <div class="form-field">
                  <lmc-checkbox label="Confirmar envío" .checked=${this._isChecked1} value="confirmed" @lmc-change=${(e: CustomEvent) => this._handleCheckboxChange(e, 'cb1')}></lmc-checkbox>
                </div>
                <div class="form-actions">
                  <lmc-basic-button label="Enviar Formulario" type="submit"></lmc-basic-button>
                   <lmc-basic-button label="Botón tipo Button (no envía)" type="button" @lmc-click=${()=> alert('Click en botón tipo button dentro del form!')}></lmc-basic-button>
                </div>
              </lmc-form>
            </lmc-container>

        </lmc-container> <!-- Fin del contenedor del contenido principal -->

        <!-- ================== Pie de Página ================== -->
        <lmc-footer>
           <lmc-text-display style="font-size: 0.9em;">
             © ${new Date().getFullYear()} LegoMyCode Project. Todos los derechos reservados.
           </lmc-text-display>
           <div style="margin-top: 0.5rem;">
             <lmc-nav-link href="#privacidad" style="font-size: 0.8em; --lmc-nav-link-padding: 0.2rem 0.5rem;">Política de Privacidad</lmc-nav-link>
             <span style="margin: 0 0.5em;">|</span>
             <lmc-nav-link href="#terminos" style="font-size: 0.8em; --lmc-nav-link-padding: 0.2rem 0.5rem;">Términos de Servicio</lmc-nav-link>
           </div>
        </lmc-footer>
        <!-- ================== Fin Pie de Página ================== -->

      </lmc-container> <!-- Fin del contenedor general main-demo-wrapper -->
    `;
  }

  // =======================================================================
  // ESTILOS ESTÁTICOS
  // =======================================================================
  static styles = css`
    :host {
      display: block;
    }
    .main-demo-wrapper {
      /* Estilos generales si son necesarios */
    }
    .main-content-area {
      /* Estilos para el área entre navbar y footer */
    }
    .demo-section {
        border: 1px solid #eee;
        border-radius: 8px;
        margin-top: 2rem;
    }
    .demo-section h2 {
      margin-top: 0;
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--lmc-global-color-border, #e0e0e0);
      font-size: 1.5em;
    }
     .demo-section h3 {
         margin-top: 1.5rem;
         margin-bottom: 0.8rem;
         font-size: 1.1em;
     }
    hr {
      margin-top: 2rem;
      margin-bottom: 2rem;
      border: none;
      border-top: 1px dashed var(--lmc-global-color-border, #ccc);
    }
    .form-field,
    .form-actions,
    .form-field-spacing,
    lmc-input + p,
    lmc-checkbox + p,
    lmc-textarea + p,
    lmc-select + p {
      margin-top: var(--lmc-global-spacing-base, 1rem);
    }
    .image-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: var(--lmc-global-spacing-base, 1rem);
        align-items: flex-start;
    }
    .demo-card {
        margin-top: 0 !important;
    }
     .card-footer-actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
     }
     .code-display {
        white-space: pre-wrap;
        border: 1px dashed var(--lmc-global-color-border, #ccc);
        padding: 0.5em;
        background-color: #f8f8f8;
        border-radius: var(--lmc-global-border-radius-base, 4px);
        max-height: 150px;
        overflow-y: auto;
        font-size: 0.9em;
        margin-top: 0.5rem;
     }
     .nav-example lmc-nav-link {
        margin-right: 0.5rem;
     }
  `;
}

// =======================================================================
// DECLARACIÓN GLOBAL
// =======================================================================
declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}