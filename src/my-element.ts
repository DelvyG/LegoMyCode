import './blocks/lmc-text-display'; // Importa para registrar el custom element
import './blocks/lmc-basic-button'; // 
import './blocks/lmc-simple-image';
import './blocks/lmc-card';
import './blocks/lmc-input';
import './blocks/lmc-alert';
import './blocks/lmc-checkbox';
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { customElement, property, state } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more'

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0


   // ¡NUEVO MÉTODO!
    private _handleButtonClick() {
      console.log('¡El botón LegoMyCode fue clickeado!');
      alert('¡Botón pulsado!'); // Mostramos una alerta simple
    }
  
   

    @state() private _isChecked1: boolean = false;
    @state() private _isChecked2: boolean = true;
  
    // ... (métodos existentes) ...
  
    // 👇 ¡NUEVO MÉTODO! Para manejar el cambio de cualquier checkbox
    private _handleCheckboxChange(event: CustomEvent, checkboxId: string) {
      console.log(`Checkbox ${checkboxId} cambió:`, event.detail);
      // Actualiza el estado correspondiente basado en un identificador (o podrías tener handlers separados)
      if (checkboxId === 'cb1') {
        this._isChecked1 = event.detail.checked;
      } else if (checkboxId === 'cb2') {
        this._isChecked2 = event.detail.checked;
      }
    }





  render() {

    const imageUrl = '/img/lego1.png'; 

    return html`
    <div>
        <h1>Hola desde LegoMyCode!</h1>

        <lmc-text-display text="Este es mi primer bloque funcionando."></lmc-text-display>
        <br/>
        <lmc-text-display
          text="Este es otro bloque, personalizado!"
          style="--lmc-text-display-color: blue; --lmc-text-display-font-size: 20px;"
        ></lmc-text-display>


        <h2>Probando la Tarjeta:</h2>

<lmc-card style="max-width: 350px; margin-bottom: 1rem; --lmc-card-box-shadow: 0 2px 5px rgba(0,0,0,0.15); margin-left: auto; margin-right: auto;">
  <!-- Contenido para el slot por defecto -->
  <lmc-simple-image src="${imageUrl}" alt="Lego 1 en tarjeta"></lmc-simple-image> 
  <lmc-text-display text="Este texto está dentro de la primera tarjeta. Usa el slot por defecto." style="display: block; padding: 1rem 0;"></lmc-text-display>
  <lmc-basic-button label="Acción Tarjeta 1" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
</lmc-card>


        <hr/>


        <lmc-card>
      <lmc-text-display slot="header" text="Título de la Tarjeta IA"></lmc-text-display>

      <lmc-input
        label="Comentario IA:"
        placeholder="Escribe algo..."
        .value=${this._commentValue}
        @lmc-input=${this._handleCommentChange}
      ></lmc-input>

      <lmc-basic-button
        slot="footer"
        label="Enviar IA"
      ></lmc-basic-button>
    </lmc-card>



    <h2>Demo del componente &lt;lmc-alert&gt;</h2>

<lmc-alert type="info" message="Esta es una alerta informativa."></lmc-alert>
<lmc-alert type="success" message="¡Operación completada con éxito!"></lmc-alert>
<lmc-alert type="warning" message="Atención: revisa los datos ingresados."></lmc-alert>
<lmc-alert type="danger" message="Error: no se pudo procesar la solicitud."></lmc-alert>

<h3>Ejemplo con estilos personalizados:</h3>
  <style>
    lmc-alert[type="info"] {
      --lmc-alert-info-background-color: #d1ecf1;
      --lmc-alert-info-text-color: #0c5460;
    }
  </style>
  <lmc-alert type="info" message="Estilos sobrescritos con CSS variables."></lmc-alert>


        <h2>Probando el Input:</h2>
        <!-- 👇 HTML NUEVO: Añade esta sección para los inputs -->
        <lmc-input
          label="Nombre de Usuario:"
          placeholder="Escribe tu nombre"
          .value=${this._inputValue} /* Enlaza al estado */
          @lmc-input=${this._handleInputChange} /* Llama al manejador cuando cambia */
        ></lmc-input>

        <p>Valor actual en el estado: <strong>${this._inputValue}</strong></p> <!-- Muestra el estado -->

        <lmc-input
          label="Input Deshabilitado:"
          value="No puedes escribir aquí"
          disabled
        ></lmc-input>

        <lmc-input
          label="Input de Contraseña:"
          type="password"
          placeholder="Contraseña secreta"
        ></lmc-input>


        <h2>Probando el Checkbox:</h2>

<lmc-checkbox
  label="Acepto los términos y condiciones"
  .checked=${this._isChecked1}
  value="terms_accepted" /* Ejemplo de value */
  @lmc-change=${(e: CustomEvent) => this._handleCheckboxChange(e, 'cb1')}
></lmc-checkbox>
<p>Estado del primer checkbox: ${this._isChecked1 ? 'Marcado' : 'No marcado'}</p>

<lmc-checkbox
  label="Recibir notificaciones (marcado por defecto)"
  .checked=${this._isChecked2}
  @lmc-change=${(e: CustomEvent) => this._handleCheckboxChange(e, 'cb2')}
></lmc-checkbox>
<p>Estado del segundo checkbox: ${this._isChecked2 ? 'Marcado' : 'No marcado'}</p>

<lmc-checkbox
  label="Opción deshabilitada"
  disabled
></lmc-checkbox>


        <h2>Probando el Botón:</h2>
        <!-- ¡NUEVO BOTÓN! -->
        <lmc-basic-button
          label="Púlsame"
          @lmc-click=${this._handleButtonClick}
        ></lmc-basic-button>

        <br/><br/>

        <lmc-basic-button
          label="Estoy Deshabilitado"
          disabled
          @lmc-click=${this._handleButtonClick}
        ></lmc-basic-button>


        

        <lmc-card style="max-width: 400px; margin-left: auto; margin-right: auto;">
          <!-- Usando slots nombrados -->
          <h3 slot="header">Tarjeta con Slots Nombrados</h3>

          <!-- Contenido para el slot por defecto -->
          <lmc-text-display text="Este es el contenido principal (slot por defecto)."></lmc-text-display>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul> 
      

          <!-- Contenido para el slot footer -->
          <div slot="footer" style="display: flex; justify-content: flex-end; gap: 0.5rem;">
             <lmc-basic-button label="Cancelar" appearance="secondary" @lmc-click=${() => console.log('Cancelar pulsado')}></lmc-basic-button>
             <lmc-basic-button label="Aceptar" @lmc-click=${this._handleButtonClick}></lmc-basic-button>
          </div>
        </lmc-card>



        <h2>Probando la Imagen:</h2>

<lmc-simple-image
  src="/img/lego1.png"
  alt="Imagen placeholder 150x150"
  width="150px"
  height="150px"
  caption="Placeholder 1"
  style="--lmc-image-border-radius: 10px;"
></lmc-simple-image>

<lmc-simple-image
  src="/img/lego1.png"
  alt="Imagen placeholder rectangular"
  caption="Placeholder 2 - Rectangular con object-fit: contain"
  style="--lmc-image-object-fit: contain; border: 1px solid grey;" /* Forzar contain */
  width="300px"
  height="100px"
></lmc-simple-image>

<lmc-simple-image
  src=""
  alt="Imagen pequeña sin caption ni tamaño explícito"
></lmc-simple-image>

<lmc-simple-image
  src="URL_IMAGEN_INEXISTENTE"
  alt="Esta imagen no se mostrará, pero el alt text es importante"
></lmc-simple-image>


      </div>
    `;
  }


  

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
