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
import './blocks/lmc-modal';
import './blocks/lmc-icon';
import './blocks/lmc-tab-group';
import './blocks/lmc-tab';
import './blocks/lmc-tab-panel';
import './blocks/lmc-spinner';
import './blocks/lmc-snackbar';
import './theme.css';


// Lit y Decoradores
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js'; // 'property' no se usa directamente aquí

// =======================================================================
// DEFINICIÓN DEL COMPONENTE PRINCIPAL: MyElement
// =======================================================================
/**
 * Componente principal de demostración para los bloques LegoMyCode.
 * Muestra ejemplos de uso de los diferentes componentes creados.
 */
@customElement('my-element')
export class MyElement extends LitElement {

  // =======================================================================
  // ESTADO INTERNO Y DATOS
  // =======================================================================
  @state() private _isModalOpen: boolean = false;
  @state() private _inputValue: string = 'Texto inicial input';
  @state() private _textareaValue: string = 'Texto inicial textarea\ncon varias líneas.';
  @state() private _isChecked1: boolean = false;
  @state() private _isChecked2: boolean = true; // Para demo fuera del form
  @state() private _selectedValue: string | number = '';
  @state() private _snackbarOpen: boolean = false;
  @state() private _snackbarMessage: string = '';
  @state() private _snackbarType: 'info' | 'success' | 'warning' | 'danger' = 'info';
  @state() private _snackbarActionText?: string;
  // @state() private _snackbarDuration: number = 4000; // Si quisiéramos controlar duración

  private _selectOptions: LmcSelectOption[] = [
    { value: 'op1', label: 'Opción Uno' },
    { value: 'op2', label: 'Opción Dos' },
    { value: 'op3', label: 'Opción Tres (Deshabilitada)', disabled: true },
    { value: 100, label: 'Opción Cuatro (Número)' }
  ];

  // =======================================================================
  // MANEJADORES DE EVENTOS Y MÉTODOS
  // =======================================================================
  private _openModal() {
    console.log('MyElement: Abriendo modal...');
    this._isModalOpen = true;
  }

  private _closeModal() {
    console.log('MyElement: Cerrando modal...');
    this._isModalOpen = false;
  }

  private _handleButtonClick() {
    console.log('MyElement: Botón genérico clickeado!');
    alert('¡Botón genérico pulsado!');
  }

  private _handleInputChange(event: CustomEvent) {
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
    console.log(`MyElement: Checkbox ${checkboxId} cambió:`, event.detail);
    if (event.detail && typeof event.detail.checked === 'boolean') {
        if (checkboxId === 'cb1') {
          this._isChecked1 = event.detail.checked;
        } else if (checkboxId === 'cb2') {
          this._isChecked2 = event.detail.checked;
        }
    }
  }

  private _handleSelectChange(event: CustomEvent) {
    console.log('MyElement: Select cambió:', event.detail);
    if (event.detail && typeof event.detail.value !== 'undefined') {
      this._selectedValue = event.detail.value;
    }
  }

  private _handleFormSubmit() {
    console.log('MyElement: Manejador _handleFormSubmit ejecutado.');
    const formData = {
      input: this._inputValue,
      textarea: this._textareaValue,
      checkbox1: this._isChecked1
    };
    console.log('MyElement: Datos del formulario:', formData);
    // Mostramos un snackbar de éxito en lugar de alert
    this._showSnackbar({
        message: `Formulario enviado con Input: ${formData.input}`,
        type: 'success'
    });
  }

  // Método para mostrar el Snackbar
  private _showSnackbar(options: { message: string, type?: 'info' | 'success' | 'warning' | 'danger', actionText?: string, duration?: number }) {
    console.log('MyElement: Mostrando snackbar:', options.message);
    this._snackbarMessage = options.message;
    this._snackbarType = options.type || 'info';
    this._snackbarActionText = options.actionText;
    // this._snackbarDuration = options.duration || 4000; // Para pasar duración
    this._snackbarOpen = true; // Dispara la apertura
  }

  // Manejador para el evento lmc-close del Snackbar
  private _handleSnackbarClose() {
      if (this._snackbarOpen) { // Evita logs si ya está cerrado
         console.log('MyElement: Snackbar cerrado (evento recibido)');
         this._snackbarOpen = false;
      }
  }

  // Manejador para el evento lmc-action del Snackbar
   private _handleSnackbarAction() {
      console.log('MyElement: Acción del Snackbar ejecutada!');
      alert('Acción del Snackbar ejecutada!');
      // Nota: el snackbar se cierra solo internamente después de la acción por defecto.
      // No necesitamos llamar a _snackbarOpen = false aquí necesariamente.
  }

  // =======================================================================
  // MÉTODO RENDER
  // =======================================================================
  render() {
    const imageUrl = '/img/lego1.png';

    return html`
      <lmc-container class="main-demo-wrapper" maxWidth="1000px" center-content padding="0">

        <lmc-navbar style="--lmc-navbar-background-color: #f8f9fa; --lmc-navbar-border-bottom: 1px solid #dee2e6;">
          <div slot="brand">
             <lmc-nav-link href="#" style="--lmc-nav-link-padding: 0.5rem 0;">
                <img src="${imageUrl}" alt="LegoMyCode Logo" style="height: 30px; margin-right: 0.5rem;">
                <strong>LegoMyCode</strong>
             </lmc-nav-link>
          </div>
          <lmc-nav-link href="#inicio" active>Inicio</lmc-nav-link>
          <lmc-nav-link href="#componentes">Componentes</lmc-nav-link>
          <lmc-nav-link href="#acerca">Acerca De</lmc-nav-link>
          <lmc-nav-link href="#deshabilitado" disabled>Pronto</lmc-nav-link>
          <div slot="actions">
            <lmc-basic-button label="Login" @lmc-click=${() => this._showSnackbar({message: 'Login presionado!', type:'info'})}></lmc-basic-button>
          </div>
        </lmc-navbar>

        <lmc-container padding="1.5rem" class="main-content-area">

            <h1>Hola desde LegoMyCode!</h1>
            <p>Demostración de los bloques disponibles:</p>
            <hr>

            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-modal</h2>
              <p>Ventana de diálogo flotante.</p>
              <lmc-basic-button
                label="Abrir Modal"
                @lmc-click=${this._openModal}
                appearance="primary"
              ></lmc-basic-button>
            </lmc-container>

            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-text-display</h2>
              <lmc-text-display text="Texto básico."></lmc-text-display>
              <br>
              <lmc-text-display
                text="Texto personalizado con estilo inline (variables CSS)."
                style="--lmc-text-display-color: var(--lmc-global-color-primary, blue); --lmc-text-display-font-size: 1.2em;"
              ></lmc-text-display>
            </lmc-container>

            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-simple-image</h2>
              <div class="image-gallery">
                 <lmc-simple-image src=${imageUrl} alt="Lego 1" width="150px" height="150px" caption="Caption 1"></lmc-simple-image>
                 <lmc-simple-image src=${imageUrl} alt="Lego 2" style="--lmc-image-object-fit: contain; border: 1px solid grey;" width="200px" height="100px" caption="Contain"></lmc-simple-image>
                 <lmc-simple-image src="url_erronea" alt="Imagen rota" width="100px" height="100px"></lmc-simple-image>
              </div>
            </lmc-container>

            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-basic-button</h2>
              <lmc-basic-button label="Botón Normal" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
              <lmc-basic-button label="Botón Deshabilitado" disabled @lmc-click=${this._handleButtonClick}></lmc-basic-button>
              <lmc-basic-button label="Botón tipo Submit (para forms)" type="submit"></lmc-basic-button>
            </lmc-container>

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

            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-card (organizadas con lmc-grid)</h2>
              <lmc-grid style="--lmc-grid-min-item-width: 300px; --lmc-grid-gap: 1.5rem;">
                <lmc-card class="demo-card">
                  <lmc-simple-image src="${imageUrl}" alt="Lego 1 en tarjeta" width="100%"></lmc-simple-image>
                  <lmc-text-display text="Contenido en slot por defecto." style="display: block; padding: 1rem 0;"></lmc-text-display>
                  <lmc-basic-button label="Acción Tarjeta 1" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
                </lmc-card>
                <lmc-card class="demo-card">
                  <lmc-text-display slot="header" text="Tarjeta con Slots Nombrados"></lmc-text-display>
                  <p>Contenido principal (slot por defecto).</p>
                  <ul><li>Item 1</li><li>Item 2</li></ul>
                  <div slot="footer" class="card-footer-actions">
                    <lmc-basic-button label="Cancelar" @lmc-click=${() => console.log('Cancelar pulsado')}></lmc-basic-button>
                    <lmc-basic-button label="Aceptar" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
                  </div>
                </lmc-card>
                <lmc-card class="demo-card">
                  <lmc-text-display slot="header" text="Otra Tarjeta"></lmc-text-display>
                  <p>Más contenido para llenar la cuadrícula y probar el responsive.</p>
                   <lmc-basic-button label="Ver Más" appearance="primary"></lmc-basic-button>
                </lmc-card>
                 <lmc-card class="demo-card">
                  <lmc-text-display slot="header" text="Última Tarjeta Ejemplo"></lmc-text-display>
                  <p>Elemento final en la cuadrícula.</p>
                </lmc-card>
              </lmc-grid>
            </lmc-container>

            <lmc-container padding="1rem" class="demo-section">
                <h2>lmc-alert</h2>
                <lmc-alert type="info" message="Esta es una alerta informativa."></lmc-alert>
                <lmc-alert type="success" message="¡Operación completada con éxito!"></lmc-alert>
                <lmc-alert type="warning" message="Atención: revisa los datos ingresados."></lmc-alert>
                <lmc-alert type="danger" message="Error: no se pudo procesar la solicitud."></lmc-alert>
            </lmc-container>

            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-icon</h2>
              <p>
                Icono Home: <lmc-icon name="home"></lmc-icon> |
                Settings: <lmc-icon name="settings" style="--lmc-icon-color: var(--lmc-global-color-primary);" label="Configuración"></lmc-icon> |
                Delete (tamaño grande): <lmc-icon name="delete" size="36px" style="--lmc-icon-color: red;"></lmc-icon> |
                Filled Star: <lmc-icon name="star" style="--lmc-icon-font-variation-settings: 'FILL' 1; --lmc-icon-color: gold;"></lmc-icon>
              </p>
              <p>
                Botón con icono:
                <lmc-basic-button>
                  <lmc-icon name="download" slot="prefix" size="1.2em"></lmc-icon> Descargar
                </lmc-basic-button>
                 <lmc-basic-button appearance="primary">
                   Guardar <lmc-icon name="save" slot="suffix" size="1.2em"></lmc-icon>
                </lmc-basic-button>
                 <lmc-basic-button disabled>
                   <lmc-icon name="cloud_off" slot="prefix" size="1.2em"></lmc-icon> Offline
                </lmc-basic-button>
              </p>
              <p>
                Enlace con icono:
                <lmc-nav-link href="#perfil">
                  <lmc-icon name="account_circle" size="1.2em" style="margin-right: 0.3em;"></lmc-icon> Mi Perfil
                </lmc-nav-link>
              </p>
            </lmc-container>

             <lmc-container padding="1rem" class="demo-section">
                <h2>Controles de Formulario</h2>
                <div>
                    <h3>lmc-input</h3>
                    <lmc-input label="Input Normal:" placeholder="Escribe aquí..." .value=${this._inputValue} @lmc-input=${this._handleInputChange}></lmc-input>
                    <p>Valor: ${this._inputValue}</p>
                    <lmc-input label="Input Deshabilitado:" value="No editable" disabled></lmc-input>
                    <lmc-input label="Input de Contraseña:" type="password" placeholder="Contraseña"></lmc-input>
                </div>
                <div class="form-field-spacing">
                    <h3>lmc-textarea</h3>
                    <lmc-textarea label="Textarea Normal:" .value=${this._textareaValue} @lmc-input=${this._handleTextareaChange}></lmc-textarea>
                    <p>Valor:</p>
                    <pre class="code-display">${this._textareaValue}</pre>
                    <lmc-textarea label="No redimensionable:" value="Fijo" resize="none" readonly></lmc-textarea>
                </div>
                <div class="form-field-spacing">
                  <h3>lmc-checkbox</h3>
                  <lmc-checkbox label="Checkbox 1 (controlado)" .checked=${this._isChecked1} @lmc-change=${(e: CustomEvent) => this._handleCheckboxChange(e, 'cb1')}></lmc-checkbox>
                  <p>Estado Checkbox 1: ${this._isChecked1}</p>
                  <lmc-checkbox label="Checkbox 2 (default checked)" .checked=${this._isChecked2} @lmc-change=${(e: CustomEvent) => this._handleCheckboxChange(e, 'cb2')}></lmc-checkbox>
                  <p>Estado Checkbox 2: ${this._isChecked2}</p>
                  <lmc-checkbox label="Checkbox Deshabilitado" disabled checked></lmc-checkbox>
                 </div>
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

            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-tab-group, lmc-tab, lmc-tab-panel</h2>
              <p>Organización de contenido en pestañas.</p>
              <lmc-tab-group active-tab-id="panel-b">
                <lmc-tab slot="tabs" panel="panel-a">Pestaña A</lmc-tab>
                <lmc-tab slot="tabs" panel="panel-b">Pestaña B</lmc-tab>
                <lmc-tab slot="tabs" panel="panel-c">Pestaña C</lmc-tab>
                <lmc-tab slot="tabs" panel="panel-d" disabled>Deshabilitada</lmc-tab>
                <lmc-tab-panel id="panel-a">
                  <h3>Contenido del Panel A</h3>
                  <p>Este es el contenido asociado a la primera pestaña.</p>
                  <lmc-alert type="info" message="Estás viendo el panel A."></lmc-alert>
                </lmc-tab-panel>
                <lmc-tab-panel id="panel-b">
                  <h3>Contenido del Panel B</h3>
                  <p>Información diferente para la segunda pestaña.</p>
                  <lmc-input label="Campo en Pestaña B:" placeholder="..."></lmc-input>
                </lmc-tab-panel>
                <lmc-tab-panel id="panel-c">
                  <h3>Contenido del Panel C</h3>
                  <p>Y un tercer panel con más cosas.</p>
                  <ul><li>Item 1</li><li>Item 2</li></ul>
                </lmc-tab-panel>
                <lmc-tab-panel id="panel-d">
                   <p>Este contenido no debería ser visible porque el tab está deshabilitado.</p>
                </lmc-tab-panel>
              </lmc-tab-group>
            </lmc-container>

             <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-spinner</h2>
              <p>Indicador de carga:</p>
              <div>
                Spinner tamaño default (2em): <lmc-spinner label="Cargando datos..."></lmc-spinner>
              </div>
              <div style="margin-top: 1rem;">
                Spinner pequeño (1em) color secundario:
                <lmc-spinner size="1em" style="--lmc-spinner-color: grey; --lmc-spinner-border-width: 2px;"></lmc-spinner>
              </div>
              <div style="margin-top: 1rem;">
                Spinner grande (48px) más lento:
                <lmc-spinner size="48px" style="--lmc-spinner-border-width: 4px; --lmc-spinner-speed: 1.5s;"></lmc-spinner>
              </div>
              <div style="margin-top: 1rem;">
                 <lmc-basic-button>
                    <lmc-spinner size="1em" style="margin-right: 0.5em; --lmc-spinner-color: white; --lmc-spinner-track-color: rgba(255,255,255,0.3); --lmc-spinner-border-width: 2px;" slot="prefix"></lmc-spinner>
                    Cargando...
                 </lmc-basic-button>
              </div>
            </lmc-container>

            <lmc-container padding="1rem" class="demo-section">
              <h2>lmc-snackbar</h2>
              <p>Notificaciones temporales (toasts).</p>
              <div class="button-group">
                <lmc-basic-button
                  label="Mostrar Info"
                  @lmc-click=${() => this._showSnackbar({ message: 'Esta es una notificación informativa.' })}
                ></lmc-basic-button>
                <lmc-basic-button
                  label="Mostrar Success"
                   appearance="primary"
                  @lmc-click=${() => this._showSnackbar({ message: '¡Operación completada!', type: 'success' })}
                ></lmc-basic-button>
                 <lmc-basic-button
                  label="Mostrar Warning"
                  style="--lmc-button-primary-bg-color: orange;"
                  @lmc-click=${() => this._showSnackbar({ message: 'Cuidado, algo requiere atención.', type: 'warning' })}
                ></lmc-basic-button>
                 <lmc-basic-button
                  label="Mostrar Danger con Acción"
                  style="--lmc-button-primary-bg-color: red;"
                  @lmc-click=${() => this._showSnackbar({ message: 'Error al guardar. ¿Deshacer?', type: 'danger', actionText: 'Deshacer' })}
                ></lmc-basic-button>
              </div>
            </lmc-container>

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

        </lmc-container> ${// <!-- Fin del Contenedor Principal del Contenido -->
                          ''}

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

        <lmc-modal
          .open=${this._isModalOpen}
          label="Título del Modal Accesible"
          @lmc-close=${this._closeModal}
        >
            <lmc-text-display slot="header">Título Visible del Modal</lmc-text-display>
            <p>Este es el contenido principal del diálogo modal.</p>
            <p>Puedes poner cualquier bloque aquí dentro.</p>
            <lmc-input label="Campo dentro del modal:" placeholder="..."></lmc-input>
            <div slot="footer">
                <lmc-basic-button
                    label="Cerrar"
                    @lmc-click=${this._closeModal}
                ></lmc-basic-button>
                <lmc-basic-button
                    label="Aceptar Acción"
                    appearance="primary"
                    @lmc-click=${() => { alert('Acción Aceptada!'); this._closeModal(); }}
                ></lmc-basic-button>
            </div>
        </lmc-modal>

        <lmc-snackbar
          .open=${this._snackbarOpen}
          .message=${this._snackbarMessage}
          .type=${this._snackbarType}
          .actionText=${this._snackbarActionText}
          position="bottom-right"
          @lmc-close=${this._handleSnackbarClose}
          @lmc-action=${this._handleSnackbarAction}
        ></lmc-snackbar>

      </lmc-container> ${// <!-- Fin del Contenedor General -->
                          ''}
    `;
  }

  // =======================================================================
  // ESTILOS ESTÁTICOS
  // =======================================================================
  static styles = css`
    :host {
      display: block;
    }
    /* Contenedor principal de la demo */
    .main-demo-wrapper {
       padding: 0; /* Ensure navbar and footer touch edges */
    }
    /* Contenedor del contenido principal (excluye navbar y footer) */
    /* Removed empty ruleset for .main-content-area */

    /* Estilos para las secciones de demostración */
    .demo-section {
        border: 1px solid #eee;
        border-radius: 8px;
        margin-top: 2rem;
        padding: 1.5rem; /* Padding directo para consistencia */
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

    /* Espaciado específico para campos de formulario y elementos relacionados */
    .form-field,
    .form-actions,
    .form-field-spacing,
    lmc-input + p,
    lmc-checkbox + p,
    lmc-textarea + p,
    lmc-select + p {
      margin-top: var(--lmc-global-spacing-base, 1rem);
    }

    /* Galerías para imágenes y botones de snackbar */
    .image-gallery, .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: var(--lmc-global-spacing-base, 1rem);
        align-items: flex-start;
    }
    .demo-card {
        margin-top: 0 !important; /* Anula margen si está dentro de un grid con gap */
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
        margin-top: 0.5rem;
     }

     /* Estilo para la demo de nav-link individuales */
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