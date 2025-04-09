// src/blocks/lmc-navbar.ts

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * @element lmc-navbar
 * @description Barra de navegación principal para la aplicación.
 *
 * @prop {String} siteTitle - Título principal o nombre del sitio a mostrar (opcional si se usa slot brand).
 *
 * @slot brand - Para colocar el logo o título personalizado a la izquierda.
 * @slot - Para los enlaces de navegación principales (centro/izquierda).
 * @slot actions - Para elementos a la derecha (botones, menú de usuario, etc.).
 *
 * @cssprop [--lmc-navbar-background=var(--lmc-global-color-background, #fff)] - Color de fondo.
 * @cssprop [--lmc-navbar-color=var(--lmc-global-color-text-default, #212529)] - Color de texto por defecto.
 * @cssprop [--lmc-navbar-padding=0 var(--lmc-global-spacing-md, 1rem)] - Padding horizontal.
 * @cssprop [--lmc-navbar-height=60px] - Altura de la barra.
 * @cssprop [--lmc-navbar-box-shadow=0 2px 4px rgba(0, 0, 0, 0.1)] - Sombra inferior.
 * @cssprop [--lmc-navbar-brand-gap=var(--lmc-global-spacing-sm, 0.5rem)] - Espacio junto al logo/título.
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
      background-color: var(--lmc-navbar-background, var(--lmc-global-color-background, #fff));
      color: var(--lmc-navbar-color, var(--lmc-global-color-text-default, #212529));
      box-shadow: var(--lmc-navbar-box-shadow, 0 2px 4px rgba(0, 0, 0, 0.1));
      /* Transición suave para cambio de tema */
      transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
    }

    .navbar-container {
      display: flex;
      align-items: center;
      justify-content: space-between; /* Empuja brand/links y actions a los extremos */
      padding: var(--lmc-navbar-padding, 0 var(--lmc-global-spacing-md, 1rem));
      height: var(--lmc-navbar-height, 60px);
      max-width: var(--lmc-container-max-width, 1200px); /* Centra el contenido interno si se aplica max-width */
      margin: 0 auto; /* Centra el contenido interno */
    }

    .left-section, .right-section {
      display: flex;
      align-items: center;
    }

    .left-section {
      gap: var(--lmc-navbar-brand-gap, var(--lmc-global-spacing-md, 1rem)); /* Espacio entre brand y links */
    }

    .brand-slot ::slotted(*) {
        display: flex; /* Asegura que el slot se comporte bien con flex */
        align-items: center;
        /* Estilos específicos para el logo si es necesario */
    }
    .brand-slot ::slotted(img) {
        max-height: calc(var(--lmc-navbar-height, 60px) * 0.6); /* Ajusta el 60% según necesites */
        width: auto;
        object-fit: contain;
    }

    .default-slot {
       display: flex;
       align-items: center;
       gap: var(--lmc-navbar-link-gap, var(--lmc-global-spacing-md, 1rem));
    }
    /* Estilos para los links dentro de la navbar */
    .default-slot ::slotted(lmc-nav-link) {
        /* Puedes añadir estilos específicos aquí, ej: text-decoration: none; */
        color: inherit; /* Hereda el color de la navbar */
    }
     .default-slot ::slotted(lmc-nav-link[active]) {
         /* Estilo para link activo */
         font-weight: bold;
         color: var(--lmc-global-color-primary, blue);
     }


    .right-section {
        gap: var(--lmc-navbar-action-gap, var(--lmc-global-spacing-sm, 0.5rem));
    }
    .actions-slot ::slotted(*) {
        display: flex; /* Asegura buen comportamiento */
        align-items: center;
    }
    /* Estilos específicos para el botón de tema dentro de las acciones */
     .actions-slot ::slotted(lmc-basic-button) {
         /* Ajusta el color del icono dentro del botón para que coincida con el texto */
         --lmc-icon-color: currentColor;
     }

    .site-title {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0;
      white-space: nowrap;
    }
  `;

  render() {
    return html`
      <nav class="navbar-container" aria-label="Main navigation">
        <div class="left-section">
          <div class="brand-slot">
            <slot name="brand">
              <!-- Muestra el título solo si no hay nada en el slot 'brand' -->
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