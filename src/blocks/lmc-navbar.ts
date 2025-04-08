// src/blocks/lmc-navbar.ts

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @element lmc-navbar
 * @description Contenedor principal para la barra de navegación superior. Utiliza slots para organizar el contenido (logo, enlaces, acciones).
 * @version 1.0.0
 *
 * @slot brand - Espacio para colocar el logo o nombre de la marca/sitio (típicamente a la izquierda).
 * @slot - Slot por defecto, destinado a los enlaces de navegación principales (`lmc-nav-link`).
 * @slot actions - Espacio para botones de acción, login, etc. (típicamente a la derecha).
 *
 * @cssprop [--lmc-navbar-background-color=transparent] - Color de fondo de la barra de navegación.
 * @cssprop [--lmc-navbar-padding=0 1rem] - Padding horizontal de la barra. El padding vertical suele venir del contenido (enlaces, logo).
 * @cssprop [--lmc-navbar-height=auto] - Altura fija si se desea (ej: '60px'). Por defecto se ajusta al contenido.
 * @cssprop [--lmc-navbar-border-bottom] - Para añadir un borde inferior (ej: '1px solid #eee').
 * @cssprop [--lmc-navbar-container-max-width=none] - Ancho máximo del *contenido* dentro de la navbar (útil si se quiere centrar el contenido en un layout más ancho).
 * @cssprop [--lmc-navbar-gap=1rem] - Espacio entre los elementos principales (brand, nav, actions).
 */
@customElement('lmc-navbar')
export class LmcNavbar extends LitElement {

  static styles = css`
    :host {
      display: block; /* Ocupa el ancho disponible */
      background-color: var(--lmc-navbar-background-color, transparent);
      border-bottom: var(--lmc-navbar-border-bottom);
      box-sizing: border-box;
    }

    .navbar-container {
      display: flex;
      align-items: center; /* Centra los elementos verticalmente */
      justify-content: space-between; /* Espacio máximo entre brand/nav y actions */
      padding: var(--lmc-navbar-padding, 0 1rem);
      height: var(--lmc-navbar-height, auto);
      max-width: var(--lmc-navbar-container-max-width, none);
      margin-inline: auto; /* Centra el contenido si max-width está definido */
      gap: var(--lmc-navbar-gap, 1rem); /* Espacio entre secciones */
      box-sizing: border-box;
    }

    .nav-links {
      display: flex;
      flex-grow: 1; /* Permite que ocupe el espacio sobrante si es necesario */
      justify-content: center; /* Centra los enlaces si hay espacio */
      gap: var(--lmc-navbar-link-gap, 0.5rem); /* Espacio entre enlaces individuales */
    }

    /* Estilos para los slots para asegurar que flex funcione */
    ::slotted(*) {
        /* Podríamos añadir estilos base a los elementos sloteados si es necesario */
    }
    slot[name="brand"], slot[name="actions"] {
        display: flex;
        align-items: center;
    }

  `;

  render() {
    return html`
      <div class="navbar-container" part="container">
        <slot name="brand"></slot>
        <div class="nav-links" part="nav-links">
           <slot></slot> <!-- Slot por defecto para los lmc-nav-link -->
        </div>
        <slot name="actions"></slot>
      </div>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-navbar': LmcNavbar;
  }
}