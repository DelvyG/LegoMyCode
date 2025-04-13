import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nombre-del-custom-element')
export class NombreDelCustomElement extends LitElement {
 static styles = css`
  /* Tus estilos CSS aquí */
 `;
 
 render() {
  return html`
   
    Contenido del componente
   
  `;
 }
}