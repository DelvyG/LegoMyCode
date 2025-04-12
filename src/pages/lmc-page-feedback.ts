import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';

// Importar bloques necesarios para la demo
import '../blocks/lmc-container';
import '../blocks/lmc-text-display';
import '../blocks/lmc-basic-button';
import '../blocks/lmc-alert';
import '../blocks/lmc-modal';
import '../blocks/lmc-snackbar';
import '../blocks/lmc-spinner';
import '../blocks/lmc-icon'; // Para iconos en botones/modal

/**
 * @element lmc-page-feedback
 * @description Página de demostración para componentes de feedback: Alert, Modal, Snackbar, Spinner.
 */
@customElement('lmc-page-feedback')
export class LmcPageFeedback extends LitElement {

  // Estado para controlar la visibilidad del Modal y Snackbar
  @state() private _isModalOpen = false;
  @state() private _isSnackbarOpen = false;
  @state() private _snackbarMessage = '';

  // Estado para las alertas (array de datos)
  @state() private _alerts: { type: 'info' | 'success' | 'warning' | 'danger'; message: string; id: number }[] = [
    { type: 'info', message: 'Esto es una información general.', id: 1 },
    { type: 'success', message: '¡Operación completada con éxito!', id: 2 },
    { type: 'warning', message: 'Advertencia: Algo podría necesitar atención.', id: 3 },
    { type: 'danger', message: 'Error: No se pudo completar la acción.', id: 4 },
  ];

  static styles = css`
    /* Estilos generales de la página */
    lmc-container { padding: var(--lmc-global-spacing-lg, 2rem) var(--lmc-global-spacing-md, 1rem); }
    h2 { margin-top: var(--lmc-global-spacing-xl, 3rem); margin-bottom: var(--lmc-global-spacing-md, 1rem); border-bottom: 1px solid var(--lmc-global-color-border, #eee); padding-bottom: var(--lmc-global-spacing-sm, 0.5rem); color: var(--lmc-global-color-text-default); }
    h2:first-of-type { margin-top: var(--lmc-global-spacing-lg, 2rem); }
    .demo-section { margin-bottom: var(--lmc-global-spacing-xl, 3rem); }
    .demo-controls { display: flex; flex-wrap: wrap; gap: var(--lmc-global-spacing-md, 1rem); margin-top: var(--lmc-global-spacing-sm, 0.5rem); }
    code { background-color: var(--lmc-global-color-background-tertiary, #e9ecef); color: var(--lmc-global-color-text-default); padding: 0.15em 0.4em; border-radius: var(--lmc-global-border-radius-sm, 3px); font-size: 0.9em; transition: background-color 0.3s ease, color 0.3s ease; }
    lmc-text-display { color: var(--lmc-global-color-text-default); }
    lmc-text-display[level="p"]:first-of-type { color: var(--lmc-global-color-text-muted); }

    /* Estilos específicos para esta demo */
    .alert-showcase lmc-alert { margin-bottom: var(--lmc-global-spacing-md, 1rem); }
    .spinner-showcase { display: flex; align-items: center; gap: var(--lmc-global-spacing-md, 1rem); }

    /* Estilos para contenido dentro del modal */
    lmc-modal p {
        margin: 0 0 var(--lmc-global-spacing-md, 1rem) 0;
        line-height: 1.6;
        color: var(--lmc-global-color-text-default); /* Asegura color de tema */
    }
    lmc-modal strong { color: var(--lmc-global-color-primary); }
  `;

  // --- Handlers para Modal ---
  private _openModal() { this._isModalOpen = true; }
  private _closeModal() { this._isModalOpen = false; }

  // --- Handlers para Snackbar ---
  private _showSnackbar(message: string) {
    this._snackbarMessage = message;
    this._isSnackbarOpen = true;
  }
  // El snackbar se cierra solo por duración o si el usuario lo cierra (evento lmc-close)
  private _handleSnackbarClose() { this._isSnackbarOpen = false; }

  // --- Handler para cerrar alertas
  private _handleAlertClose(event: CustomEvent) {
    // Obtener el ID de la alerta que se cerró (desde el atributo 'data-id' o similar)
    const alertId = Number((event.target as HTMLElement).dataset.id);

    // Filtrar el array de alertas para eliminar la que se cerró
    this._alerts = this._alerts.filter(alert => alert.id !== alertId);
  }


  render() {
    return html`
      <lmc-container>
        <lmc-text-display level="h1">Feedback y Notificaciones</lmc-text-display>
        <lmc-text-display level="p">
          Componentes para proporcionar información y feedback al usuario.
        </lmc-text-display>

        <!-- Sección Alertas (lmc-alert) -->
        <div class="demo-section">
          <h2>Alertas (lmc-alert)</h2>
          <lmc-text-display level="p">
            Muestra mensajes contextuales con diferentes tipos (<code>info</code>, <code>success</code>, <code>warning</code>, <code>danger</code>)
            y opcionalmente cerrables (<code>closable</code>).
          </lmc-text-display>
          <div class="alert-showcase">
            ${this._alerts.map(alert => html`
              <lmc-alert
                type=${alert.type}
                message=${alert.message}
                closable
                data-id=${alert.id}
                @lmc-close=${this._handleAlertClose}
              ></lmc-alert>
            `)}
          </div>
        </div>

        <!-- Sección Modal (lmc-modal) -->
        <div class="demo-section">
          <h2>Modal (lmc-modal)</h2>
          <lmc-text-display level="p">
            Muestra contenido en una ventana superpuesta (diálogo modal). Se controla con la propiedad <code>open</code>
            y emite <code>lmc-close</code> al intentar cerrar.
          </lmc-text-display>
          <div class="demo-controls">
            <lmc-basic-button appearance="primary" @lmc-click=${this._openModal}>Abrir Modal</lmc-basic-button>
          </div>

          <lmc-modal
            header-title="Título del Modal de Ejemplo"
            .open=${this._isModalOpen}
            @lmc-close=${this._closeModal}
          >
            <!-- Contenido principal (slot por defecto) -->
            <p>Este es el contenido principal del modal. Puedes poner aquí formularios, texto, imágenes, etc.</p>
            <p>Recuerda que el modal captura el foco y bloquea la interacción con el resto de la página.</p>
            <p>Usa el slot <strong>footer</strong> para acciones comunes.</p>

            <!-- Contenido del footer (slot="footer") -->
            <div slot="footer" style="text-align: right;">
              <lmc-basic-button appearance="secondary" @lmc-click=${this._closeModal}>Cancelar</lmc-basic-button>
              <lmc-basic-button appearance="primary" @lmc-click=${() => { console.log('Acción Aceptar clickeada'); this._closeModal(); }}>Aceptar</lmc-basic-button>
            </div>
          </lmc-modal>
        </div>

        <!-- Sección Snackbar (lmc-snackbar) -->
        <div class="demo-section">
          <h2>Snackbar (lmc-snackbar)</h2>
          <lmc-text-display level="p">
            Muestra notificaciones temporales (toasts) en la parte inferior de la pantalla.
            Se controla con <code>open</code> y <code>message</code>. Se cierra automáticamente o con <code>lmc-close</code>.
          </lmc-text-display>
           <div class="demo-controls">
            <lmc-basic-button @lmc-click=${() => this._showSnackbar('Perfil guardado correctamente.')}>Mostrar Snackbar (Éxito)</lmc-basic-button>
            <lmc-basic-button appearance="secondary" @lmc-click=${() => this._showSnackbar('No se pudo conectar al servidor.')}>Mostrar Snackbar (Error)</lmc-basic-button>
          </div>

           <lmc-snackbar
             .message=${this._snackbarMessage}
             .open=${this._isSnackbarOpen}
             @lmc-close=${this._handleSnackbarClose}
             duration="4000" /* 4 segundos */
           ></lmc-snackbar>
        </div>

        <!-- Sección Spinner (lmc-spinner) -->
        <div class="demo-section">
          <h2>Spinner (lmc-spinner)</h2>
          <lmc-text-display level="p">
            Indicador visual de carga o procesamiento en curso. Se puede personalizar el tamaño y color con CSS variables.
          </lmc-text-display>
           <div class="spinner-showcase">
             <lmc-spinner></lmc-spinner>
             <span>Cargando datos... (tamaño por defecto)</span>
           </div>
            <div class="spinner-showcase" style="margin-top: 1rem;">
             <lmc-spinner style="--lmc-spinner-size: 3rem; --lmc-spinner-color: var(--lmc-global-color-danger);"></lmc-spinner>
             <span>Procesando... (tamaño y color personalizados)</span>
           </div>
        </div>

      </lmc-container>
    `;
  }
}

// Declaración TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'lmc-page-feedback': LmcPageFeedback;
  }
}