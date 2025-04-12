import { LitElement, html, css } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

/**
 * @element lmc-navbar
 * @description Barra de navegación principal para la aplicación, con diseño responsive.
 * @version 1.4.0 - Añadido cierre automático del menú al hacer clic en enlaces
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

    @state() private _isMenuOpen = false;

    @query('#menu-button') menuButton!: HTMLElement;
    @query('#menu-content') menuContent!: HTMLElement;

    static styles = css`
        :host {
            display: block;
            background-color: var(--lmc-navbar-background, var(--lmc-global-color-background, #fff));
            color: var(--lmc-navbar-color, var(--lmc-global-color-text-default, #212529));
            box-shadow: var(--lmc-navbar-box-shadow, var(--lmc-global-box-shadow-sm));
            transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
            position: relative;
        }

        .navbar-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--lmc-navbar-padding, 0 var(--lmc-global-spacing-md, 1rem));
            height: var(--lmc-navbar-height, 60px);
            max-width: 100%;
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
            white-space: nowrap;
        }
        
        .default-slot ::slotted(lmc-nav-link[active]) {
            font-weight: bold;
            color: var(--lmc-global-color-primary); /* Hereda color primario global */
        }

        /* Estilos para el título del sitio */
        .site-title {
            font-size: 1.25rem;
            font-weight: bold;
            margin: 0;
            white-space: nowrap;
        }
        
        .menu-button {
            display: none; /* Oculta el botón de menú en pantallas grandes */
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
            font-size: 1.2rem;
            padding: 0.5rem;
        }

        .actions-slot {
            display: flex;
            align-items: center;
            gap: var(--lmc-navbar-action-gap, var(--lmc-global-spacing-sm, 0.5rem));
        }

        /* Estilos específicos para móvil */
        @media (max-width: 900px) {
            .menu-button {
                display: block;
            }
            
            .default-slot {
                display: none;
                flex-direction: column;
                position: absolute;
                top: var(--lmc-navbar-height, 60px);
                left: 0;
                width: 100%;
                background-color: var(--lmc-navbar-background, var(--lmc-global-color-background, #fff));
                box-shadow: var(--lmc-global-box-shadow-sm);
                z-index: 10;
                align-items: start;
                padding: 0.5rem 1rem;
            }
            
            .default-slot.open {
                display: flex;
            }
            
            .default-slot ::slotted(*) {
                margin: 0.5rem 0;
                width: 100%;
            }
        }
    `;

    connectedCallback() {
        super.connectedCallback();
        // Conectar el observador después de que el componente sea conectado al DOM
        this.addEventListener('click', this._handleMenuItemClick);
    }

    disconnectedCallback() {
        // Eliminar el observador cuando el componente sea desconectado del DOM
        this.removeEventListener('click', this._handleMenuItemClick);
        super.disconnectedCallback();
    }

    private _toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen;
        this.requestUpdate();
    }

    private _closeMenu() {
        if (this._isMenuOpen) {
            this._isMenuOpen = false;
            this.requestUpdate();
        }
    }

    private _handleMenuItemClick = (event: Event) => {
        // Identificar si el clic fue en un elemento del menú (un enlace o similar)
        const path = event.composedPath();
        
        // Verificar si el menú está abierto y si el clic fue dentro del área del menú pero no en el botón de menú
        if (this._isMenuOpen) {
            // Comprobar si se hizo clic en un elemento del menú
            for (const element of path) {
                if (element instanceof HTMLElement) {
                    // Solo cerramos si el clic fue en un elemento de navegación dentro del menú
                    // y no en el botón de menú
                    if (
                        element.tagName === 'A' || 
                        element.tagName === 'LMC-NAV-LINK' || 
                        element.tagName === 'BUTTON'
                    ) {
                        // Verificar que no sea el botón del menú
                        if (element !== this.menuButton) {
                            // Cerrar el menú solo si estamos en modo móvil
                            const isMobileView = window.matchMedia('(max-width: 900px)').matches;
                            if (isMobileView) {
                                this._closeMenu();
                            }
                            break;
                        }
                    }
                }
            }
        }
    };

    render() {
        return html`
            <nav class="navbar-container" aria-label="Main navigation">
                <div class="left-section">
                    <div class="brand-slot">
                        <slot name="brand">
                            ${this.siteTitle ? html`<span class="site-title">${this.siteTitle}</span>` : ''}
                        </slot>
                    </div>
                    <button id="menu-button" class="menu-button" @click=${this._toggleMenu} aria-expanded="${this._isMenuOpen}">
                        Menu
                    </button>
                </div>
                
                <div id="menu-content" class="default-slot ${this._isMenuOpen ? 'open' : ''}">
                    <slot></slot>
                </div>
                
                <div class="right-section">
                    <div class="actions-slot">
                        <slot name="actions"></slot>
                    </div>
                </div>
            </nav>
        `;
    }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-navbar': LmcNavbar;
  }
}