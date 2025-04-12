import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-navbar
 * @description Barra de navegación principal para la aplicación.
 * @version 1.1.0 - Usa fallbacks globales
 * @slot brand - Para colocar el logo o título personalizado a la izquierda.
 * @slot - Para los enlaces de navegación principales (centro/izquierda).
 * @slot actions - Para elementos a la derecha (botones, menú de usuario, etc.).
 * @cssprop [--lmc-navbar-background=var(--lmc-global-color-background, #fff)] - Color de fondo.
 * @cssprop [--lmc-navbar-color=var(--lmc-global-color-text-default, #212529)] - Color de texto por defecto.
 * @cssprop [--lmc-navbar-padding=0 var(--lmc-global-spacing-md, 1rem)] - Padding horizontal.
 * @cssprop [--lmc-navbar-height=60px] - Altura de la barra.
 * @cssprop [--lmc-navbar-box-shadow=var(--lmc-global-box-shadow-sm)] - Sombra inferior.
 * @cssprop [--lmc-navbar-brand-gap=var(--lmc-global-spacing-md, 1rem)] - Espacio junto al logo/título.
 * @cssprop [--lmc-navbar-link-gap=var(--lmc-global-spacing-md, 1rem)] - Espacio entre links principales.
 * @cssprop [--lmc-navbar-action-gap=var(--lmc-global-spacing-sm, 0.5rem)] - Espacio entre elementos de acción.
 */
@customElement('lmc-navbar')
export class LmcNavbar extends LitElement {
  @property({ type: String, attribute: 'site-title' })
  siteTitle = '';

  static styles = css`
    :host {
      display: block;
      /* Fallbacks globales */
      background-color: var(--lmc-navbar-background, var(--lmc-global-color-background, #fff));
      color: var(--lmc-navbar-color, var(--lmc-global-color-text-default, #212529));
      box-shadow: var(--lmc-navbar-box-shadow, var(--lmc-global-box-shadow-sm));
      transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--lmc-navbar-padding, 0 var(--lmc-global-spacing-md, 1rem));
      height: var(--lmc-navbar-height, 60px);
      max-width: var(--lmc-container-max-width, 1200px); /* Usa la misma var que lmc-container */
      margin: 0 auto;
    }

    .left-section, .right-section {
      display: flex;
      align-items: center;
    }

    .left-section {
      gap: var(--lmc-navbar-brand-gap, var(--lmc-global-spacing-md, 1rem));
    }

    .brand-slot ::slotted(*) {
        display: flex;
        align-items: center;
    }
    .brand-slot ::slotted(img) {
        max-height: calc(var(--lmc-navbar-height, 60px) * 0.6);
        width: auto;
        object-fit: contain;
    }

    .default-slot {
       display: flex;
       align-items: center;
       gap: var(--lmc-navbar-link-gap, var(--lmc-global-spacing-md, 1rem));
    }
    .default-slot ::slotted(lmc-nav-link) {
        color: inherit;
    }
     .default-slot ::slotted(lmc-nav-link[active]) {
         font-weight: bold;
         color: var(--lmc-global-color-primary); /* Hereda color primario global */
     }

    .right-section {
        gap: var(--lmc-navbar-action-gap, var(--lmc-global-spacing-sm, 0.5rem));
    }
    .actions-slot ::slotted(*) {
        display: flex;
        align-items: center;
    }
     .actions-slot ::slotted(lmc-basic-button) {
         color: inherit; /* Asegura que herede color de navbar para icono */
     }
     /* Ajuste específico para icono dentro de botón ghost en navbar */
     .actions-slot ::slotted(lmc-basic-button[appearance="ghost"]) {
         color: var(--lmc-global-color-text-muted); /* Podría ser mejor un gris */
     }
      .actions-slot ::slotted(lmc-basic-button[appearance="ghost"]:hover) {
         color: var(--lmc-global-color-text-default); /* Color normal al hacer hover */
     }


    .site-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0;
      white-space: nowrap;
    }
  `;

  // render() como estaba antes
  render() {
    return html`
      <nav class="navbar-container" aria-label="Main navigation">
        <div class="left-section">
          <div class="brand-slot">
            <slot name="brand">
              ${this.siteTitle ? html`<span class="site-title">${this.siteTitle}</span>` : ''}
            </slot>
          </div>
          <div class="default-slot">
            <slot></slot> <!-- Links principales -->
          </div>
        </div>
        <div class="right-section">
          <div class="actions-slot">
            <slot name="actions"></slot> <!-- Botones/acciones -->
          </div>
        </div>
      </nav>
    `;
  }
}