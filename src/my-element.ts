// =======================================================================
// IMPORTS (Mantenlos como los tenías)
// =======================================================================
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
import './blocks/lmc-container'; // Asegúrate que está importado
import './blocks/lmc-nav-link';

import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

// =======================================================================
// DEFINICIÓN DEL COMPONENTE PRINCIPAL: MyElement
// =======================================================================
@customElement('my-element')
export class MyElement extends LitElement {

  // =======================================================================
  // ESTADO INTERNO Y DATOS (Mantenlos como los tenías)
  // =======================================================================
  @state() private _inputValue: string = 'Texto inicial input';
  @state() private _textareaValue: string = 'Texto inicial textarea\ncon varias líneas.';
  @state() private _isChecked1: boolean = false;
  @state() private _isChecked2: boolean = true;
  @state() private _selectedValue: string | number = '';

  private _selectOptions: LmcSelectOption[] = [
    { value: 'op1', label: 'Opción Uno' },
    { value: 'op2', label: 'Opción Dos' },
    { value: 'op3', label: 'Opción Tres (Deshabilitada)', disabled: true },
    { value: 100, label: 'Opción Cuatro (Número)' }
  ];

  // =======================================================================
  // MANEJADORES DE EVENTOS (Mantenlos como los tenías)
  // =======================================================================
  private _handleButtonClick() {
    console.log('Botón genérico clickeado!');
    alert('¡Botón genérico pulsado!');
  }
  private _handleInputChange(event: CustomEvent) {
     if (event.detail && typeof event.detail.value !== 'undefined') {
       this._inputValue = event.detail.value;
     }
  }
  private _handleTextareaChange(event: CustomEvent) {
    if (event.detail && typeof event.detail.value !== 'undefined') {
      this._textareaValue = event.detail.value;
    }
  }
  private _handleCheckboxChange(event: CustomEvent, checkboxId: string) {
    console.log(`Checkbox ${checkboxId} cambió:`, event.detail);
    if (checkboxId === 'cb1') {
      this._isChecked1 = event.detail.checked;
    } else if (checkboxId === 'cb2') {
      this._isChecked2 = event.detail.checked;
    }
  }
  private _handleSelectChange(event: CustomEvent) {
    console.log('Select cambió:', event.detail);
    if (event.detail && typeof event.detail.value !== 'undefined') {
      this._selectedValue = event.detail.value;
    }
  }
  private _handleFormSubmit() {
    console.log('Manejador _handleFormSubmit ejecutado.');
    const formData = {
      input: this._inputValue,
      textarea: this._textareaValue,
      checkbox1: this._isChecked1,
      select: this._selectedValue
    };
    console.log('Datos del formulario:', formData);
    alert(`Formulario enviado con:\nInput: ${formData.input}\nTextarea: ${formData.textarea}\nCheckbox Confirmar: ${formData.checkbox1}\nSelect (fuera del form): ${formData.select}`);
  }

  // =======================================================================
  // MÉTODO RENDER (¡REESTRUCTURADO!)
  // =======================================================================
  render() {
    const imageUrl = '/img/lego1.png'; // Mantenemos la variable

    // Usamos un contenedor principal para toda la página de demo
    return html`
      <lmc-container class="main-demo-wrapper" maxWidth="1000px" center-content padding="1.5rem">
        <h1>Hola desde LegoMyCode!</h1>
        <p>Demostración de los bloques disponibles:</p>
        <hr>

        <!-- Sección lmc-text-display -->
        <lmc-container padding="1rem" class="demo-section">
          <h2>lmc-text-display</h2>
          <lmc-text-display text="Texto básico."></lmc-text-display>
          <br>
          <lmc-text-display
            text="Texto personalizado con estilo inline (variables CSS)."
            style="--lmc-text-display-color: var(--lmc-global-color-primary, blue); --lmc-text-display-font-size: 1.2em;"
          ></lmc-text-display>
        </lmc-container>

        <!-- Sección lmc-simple-image -->
        <lmc-container padding="1rem" class="demo-section">
          <h2>lmc-simple-image</h2>
          <div class="image-gallery">
             <lmc-simple-image src=${imageUrl} alt="Lego 1" width="150px" height="150px" caption="Caption 1"></lmc-simple-image>
             <lmc-simple-image src=${imageUrl} alt="Lego 2" style="--lmc-image-object-fit: contain; border: 1px solid grey;" width="200px" height="100px" caption="Contain"></lmc-simple-image>
             <lmc-simple-image src="url_erronea" alt="Imagen rota" width="100px" height="100px"></lmc-simple-image>
          </div>
        </lmc-container>

        <!-- Sección lmc-basic-button -->
        <lmc-container padding="1rem" class="demo-section">
          <h2>lmc-basic-button</h2>
          <lmc-basic-button label="Botón Normal" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
          <lmc-basic-button label="Botón Deshabilitado" disabled @lmc-click=${this._handleButtonClick}></lmc-basic-button>
          <lmc-basic-button label="Botón tipo Submit (para forms)" type="submit"></lmc-basic-button>
           <!-- Podríamos añadir botones con 'appearance' si lmc-basic-button lo soporta -->
        </lmc-container>

        <!-- Sección lmc-card -->
        <lmc-container padding="1rem" class="demo-section">
          <h2>lmc-card</h2>
          <div class="card-gallery">
            <lmc-card class="demo-card">
              <!-- ¡ARREGLO IMAGEN! Añadimos width="100%" para que se ajuste a la card -->
              <lmc-simple-image src="${imageUrl}" alt="Lego 1 en tarjeta" width="100%"></lmc-simple-image>
              <lmc-text-display text="Contenido en slot por defecto." style="display: block; padding: 1rem 0;"></lmc-text-display>
              <lmc-basic-button label="Acción Tarjeta 1" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
            </lmc-card>

            <!-- Sección lmc-nav-link -->
      <lmc-container padding="1rem" class="demo-section">
        <h2>lmc-nav-link</h2>
        <p>Enlaces de navegación:</p>
        <nav class="nav-example"> <!-- Usamos <nav> semánticamente y una clase para estilizar si es necesario -->
          <lmc-nav-link href="#inicio">Inicio</lmc-nav-link>
          <lmc-nav-link href="#servicios" active>Servicios (Activo)</lmc-nav-link>
          <lmc-nav-link href="#contacto">Contacto</lmc-nav-link>
          <lmc-nav-link href="#ayuda" disabled>Ayuda (Deshabilitado)</lmc-nav-link>
          <lmc-nav-link href="#tienda" style="--lmc-nav-link-text-color: darkorchid; --lmc-nav-link-text-decoration-hover: none;">
            Tienda (Estilo Inline)
          </lmc-nav-link>
        </nav>
      </lmc-container>

    <hr> 
            <lmc-card class="demo-card">
              <lmc-text-display slot="header" text="Tarjeta con Slots Nombrados"></lmc-text-display>
              <!-- Usamos lmc-text-display en lugar de h3 para consistencia -->
              <p>Contenido principal (slot por defecto).</p>
              <ul><li>Item 1</li><li>Item 2</li></ul>
              <div slot="footer" class="card-footer-actions">
                <lmc-basic-button label="Cancelar" @lmc-click=${() => console.log('Cancelar pulsado')}></lmc-basic-button>
                <lmc-basic-button label="Aceptar" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
              </div>
            </lmc-card>
          </div>
        </lmc-container>

        <!-- Sección lmc-alert -->
        <lmc-container padding="1rem" class="demo-section">
            <h2>lmc-alert</h2>
            <lmc-alert type="info" message="Esta es una alerta informativa."></lmc-alert>
            <lmc-alert type="success" message="¡Operación completada con éxito!"></lmc-alert>
            <lmc-alert type="warning" message="Atención: revisa los datos ingresados."></lmc-alert>
            <lmc-alert type="danger" message="Error: no se pudo procesar la solicitud."></lmc-alert>
        </lmc-container>

        <!-- Sección Controles de Formulario Individuales -->
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


        <!-- Sección lmc-form (Usando los controles anteriores) -->
        <lmc-container padding="1rem" class="demo-section" style="--lmc-container-background-color: #fafafa;">
          <h2>lmc-form</h2>
                
<p>Este formulario usa los controles definidos arriba y se envia con el botón 'type="submit"'.</p>

    
          <lmc-form @lmc-submit=${this._handleFormSubmit}>
            <div class="form-field">
              <lmc-input
                label="Nombre (en Form):"
                placeholder="Tu nombre"
                .value=${this._inputValue}
                @lmc-input=${this._handleInputChange}
                required
              ></lmc-input>
            </div>

            <div class="form-field">
              <lmc-textarea
                label="Comentario (en Form):"
                placeholder="Tu comentario"
                rows="3"
                .value=${this._textareaValue}
                @lmc-input=${this._handleTextareaChange}
              ></lmc-textarea>
            </div>

            <div class="form-field">
              <lmc-checkbox
                label="Confirmar envío"
                .checked=${this._isChecked1}
                value="confirmed"
                @lmc-change=${(e: CustomEvent) => this._handleCheckboxChange(e, 'cb1')}
              ></lmc-checkbox>
            </div>

            <div class="form-actions">
              <lmc-basic-button
                label="Enviar Formulario"
                type="submit"
              ></lmc-basic-button>
               <lmc-basic-button
                label="Botón tipo Button (no envía)"
                type="button"
                 @lmc-click=${()=> alert('Click en botón tipo button dentro del form!')}
              ></lmc-basic-button>
            </div>
          </lmc-form>
        </lmc-container>

      </lmc-container> <!-- Fin del contenedor principal -->
    `;
  }

  // =======================================================================
  // ESTILOS ESTÁTICOS (REVISADOS)
  // =======================================================================
  static styles = css`
    :host {
      display: block; /* Asegura que ocupe espacio */
    }

    /* Contenedor principal de la demo (añadido para posible estilo global) */
    .main-demo-wrapper {
       /* Puedes añadir estilos globales aquí si lmc-container no los cubre */
    }

    /* Estilos para las secciones de demostración */
    .demo-section {
        border: 1px solid #eee;
        border-radius: 8px;
        margin-top: 2rem; /* Espacio entre secciones */
        /* Background y padding se controlan por atributos/CSS vars del lmc-container */
    }
    .demo-section h2 {
      margin-top: 0; /* Quita el margen superior del h2 dentro de la sección */
      margin-bottom: 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid var(--lmc-global-color-border, #e0e0e0);
    }

    hr {
      margin-top: 2rem;
      margin-bottom: 2rem;
      border: none;
      border-top: 1px dashed var(--lmc-global-color-border, #ccc);
    }

    /* Espaciado específico para campos de formulario y elementos relacionados */
    .form-field,
    .form-actions,
    .form-field-spacing, /* Clase para espaciar grupos de controles */
    lmc-input + p,
    lmc-checkbox + p,
    lmc-textarea + p,
    lmc-select + p {
      margin-top: var(--lmc-global-spacing-base, 1rem);
    }

    /* Galerías para imágenes y tarjetas */
    .image-gallery, .card-gallery {
        display: flex;
        flex-wrap: wrap; /* Permite que pasen a la siguiente línea */
        gap: var(--lmc-global-spacing-base, 1rem); /* Espacio entre ítems */
        align-items: flex-start; /* Alinea arriba */
    }
    .image-gallery lmc-simple-image {
        /* Estilos si necesitas ajustar las imágenes en la galería */
    }
    .card-gallery .demo-card {
        flex: 1 1 300px; /* Permite que las tarjetas crezcan y se ajusten, con base de 300px */
        margin-top: 0; /* Quita margen superior si se usa gap */
    }


     /* Footer de la tarjeta */
     .card-footer-actions {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
     }

     /* Display de código (para textarea) */
     .code-display {
        white-space: pre-wrap;
        border: 1px dashed var(--lmc-global-color-border, #ccc);
        padding: 0.5em;
        background-color: #f8f8f8;
        border-radius: var(--lmc-global-border-radius-base, 4px);
        max-height: 150px;
        overflow-y: auto;
        font-size: 0.9em;
     }
  `;
}

// =======================================================================
// DECLARACIÓN GLOBAL (Mantenla como la tenías)
// =======================================================================
declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}