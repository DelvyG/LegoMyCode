import './blocks/lmc-text-display'; // Importa para registrar el custom element
import './blocks/lmc-basic-button'; // 
import './blocks/lmc-simple-image';
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


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
  
   


  render() {
    return html`
    <div>
        <h1>Hola desde LegoMyCode!</h1>

        <lmc-text-display text="Este es mi primer bloque funcionando."></lmc-text-display>
        <br/>
        <lmc-text-display
          text="Este es otro bloque, personalizado!"
          style="--lmc-text-display-color: blue; --lmc-text-display-font-size: 20px;"
        ></lmc-text-display>

        <hr/>

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
