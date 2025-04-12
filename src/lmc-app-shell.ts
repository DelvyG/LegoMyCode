import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
// Importa Router y los tipos correctos directamente
import { Router } from '@vaadin/router';
// Nota: Usamos RouteContext, Commands, y Route de @vaadin/router
import type { Commands, Route, RouteContext } from '@vaadin/router';

// Importamos los bloques necesarios para el Shell y el tema global
import './blocks/lmc-navbar';
import './blocks/lmc-footer';
import './blocks/lmc-nav-link';
import './blocks/lmc-basic-button';
import './blocks/lmc-icon';
// Asegúrate de importar lmc-container aquí si las páginas lo usarán consistentemente
import './blocks/lmc-container';
import './theme.css'; // Importamos el tema global

import './pages/lmc-page-layout';
import './pages/lmc-page-staggered-list';
import './pages/lmc-page-pagination';


@customElement('lmc-app-shell')
export class LmcAppShell extends LitElement {
  @state() private _isDarkMode = false;

  // Query para el router outlet
  @query('#router-outlet')
  routerOutlet!: HTMLElement;


  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--lmc-global-color-background, #ffffff);
      color: var(--lmc-global-color-text-default, #000000);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    main {
      flex-grow: 1; /* Ocupa el espacio vertical disponible */
      width: 100%;   /* Ocupa todo el ancho horizontal */
      /* El padding y max-width ahora lo gestiona el lmc-container DENTRO de cada página */
    }

    lmc-navbar {
      /* Asegura que la navbar se quede fija arriba */
      position: sticky;
      top: 0;
      z-index: 100; /* Sobre el contenido al hacer scroll */
    }

    /* Estilos para el botón de tema en la navbar */
    lmc-navbar lmc-basic-button[slot="actions"] {
       /* Hereda color del texto de la navbar (que viene del tema) */
       color: inherit;
       /* Podríamos ajustar padding si fuera necesario */
       /* --lmc-button-padding: 0.25rem; */
    }
     /* El icono dentro ya debería heredar via 'currentColor' en lmc-icon */
     /* No necesitamos reglas específicas aquí si lmc-icon funciona bien */
     /* lmc-navbar lmc-basic-button[slot="actions"] lmc-icon { ... } */
     /* :host([data-theme="dark"]) lmc-navbar lmc-basic-button[slot="actions"] lmc-icon { ... } */
  `;

  connectedCallback() {
    super.connectedCallback();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this._isDarkMode = localStorage.getItem('lmc-theme') === 'dark' || (!localStorage.getItem('lmc-theme') && prefersDark);
    this._applyTheme();
  }

  firstUpdated() {
    this._initRouter();
  }


  private async _initRouter() {
    console.log('[Router] Attempting to initialize router...'); // LOG 1
    const outlet = this.shadowRoot?.querySelector('main');
    console.log('[Router] Outlet element found:', outlet); // LOG 2

    if (outlet) {
      const router = new Router(outlet);
      const routes: Route[] = [
        // --- RUTA HOME ---
        {
          path: '/',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-home.ts');
              console.log(`[Router] Module ./pages/lmc-page-home.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-home');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },
        

        {
          path: '/pagination',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-pagination.ts');
              console.log(`[Router] Module ./pages/lmc-page-pagination.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-pagination');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },




        {
          path: '/staggered',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-staggered-list.ts');
              console.log(`[Router] Module ./pages/lmc-page-staggered-list.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-staggered-list');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },

        
        // --- RUTA ABOUT ---

        {
          path: '/about',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-about.ts');
              console.log(`[Router] Module ./pages/lmc-page-about.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-about');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },
        // --- RUTA ACCORDION ---
        {
          path: '/accordion',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-accordion.ts');
              console.log(`[Router] Module ./pages/lmc-page-accordion.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-accordion');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
               return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },
        // --- RUTA BUTTONS ---
        {
          path: '/buttons',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-buttons.ts');
              console.log(`[Router] Module ./pages/lmc-page-buttons.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-buttons');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
               return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },
        // --- RUTA FORMS ---
        {
          path: '/forms',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-forms.ts');
              console.log(`[Router] Module ./pages/lmc-page-forms.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-forms');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },
        // --- RUTA FEEDBACK ---
        {
          path: '/feedback',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-feedback.ts');
              console.log(`[Router] Module ./pages/lmc-page-feedback.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-feedback');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },
        // --- RUTA TABS ---
        {
          path: '/tabs',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-tabs.ts');
              console.log(`[Router] Module ./pages/lmc-page-tabs.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-tabs');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },
        // --- RUTA LAYOUT ---
        {
          path: '/layout',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-layout.ts');
              console.log(`[Router] Module ./pages/lmc-page-layout.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-layout');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },



        {
          path: '/tooltip',
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-tooltip.ts');
              console.log(`[Router] Module ./pages/lmc-page-tooltip.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-tooltip');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              return this._handleRouteError(outlet, commands, routePath, error);
            }
          },
        },





        // --- RUTA CATCH-ALL ---
        {
          path: '(.*)',
           action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for catch-all route ${routePath}`);
            try {
              await import('./pages/lmc-page-not-found.ts');
              console.log(`[Router] Module ./pages/lmc-page-not-found.ts loaded successfully for ${routePath}`);
               return commands.component('lmc-page-not-found');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              // Fallback final si ni 404 carga
              outlet.innerHTML = '<h1>Error Crítico</h1><p>No se pudo cargar la página solicitada ni la página de error.</p>';
              return commands.prevent();
            }
          },
        }
      ];
      router.setRoutes(routes);
      console.log('[Router] Routes configured successfully. Router instance:', router);
    } else {
      console.error('[Router] CRITICAL: Router outlet element <main> not found in lmc-app-shell shadow DOM!');
    }
  }

  // Helper para manejar errores de carga de ruta y mostrar 404
  private async _handleRouteError(outlet: HTMLElement, commands: Commands, failedPath: string, error: unknown) {
      try {
        await import('./pages/lmc-page-not-found.ts');
        return commands.component('lmc-page-not-found');
      } catch (notFoundError) {
         console.error(`[Router] CRITICAL: Error loading NOT FOUND module after failing ${failedPath}:`, notFoundError, 'Original error:', error);
         outlet.innerHTML = '<h1>Error Crítico</h1><p>No se pudo cargar el contenido solicitado ni la página de error.</p>';
         return commands.prevent();
      }
  }


  private _toggleTheme() {
    this._isDarkMode = !this._isDarkMode;
    localStorage.setItem('lmc-theme', this._isDarkMode ? 'dark' : 'light');
    this._applyTheme();
  }

  private _applyTheme() {
    document.documentElement.setAttribute('data-theme', this._isDarkMode ? 'dark' : 'light');
  }

  render() {
    return html`
      <lmc-navbar>
        <!-- Logo -->
        <div slot="brand">
           <a href="/" style="line-height: 0;">
               <img src="/img/LegoMyCodeLogo-main.png" alt="LegoMyCode Logo" style="height: 40px; vertical-align: middle;" />
           </a>
        </div>

        <!-- Links -->
        <lmc-nav-link href="/">Home</lmc-nav-link>
        <lmc-nav-link href="/about">About</lmc-nav-link>
        <lmc-nav-link href="/accordion">Accordion</lmc-nav-link>
        <lmc-nav-link href="/buttons">Buttons</lmc-nav-link>
        <lmc-nav-link href="/forms">Forms</lmc-nav-link>
        <lmc-nav-link href="/feedback">Feedback</lmc-nav-link>
        <lmc-nav-link href="/tabs">Tabs</lmc-nav-link>
        <lmc-nav-link href="/layout">Layout</lmc-nav-link>
        <lmc-nav-link href="/tooltip">Tooltip</lmc-nav-link>
        <lmc-nav-link href="/staggered">Staggered</lmc-nav-link>
        <lmc-nav-link href="/pagination">Paginación</lmc-nav-link>

    

    

    
        <!-- Más links irán aquí -->

        <!-- Actions -->
        <div slot="actions">
            <lmc-basic-button
                class="theme-toggle-button"
                appearance="ghost" /* Mejor apariencia para navbar */
                @lmc-click=${this._toggleTheme}
                title=${this._isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            >
                <lmc-icon slot="prefix" name=${this._isDarkMode ? 'light_mode' : 'dark_mode'}></lmc-icon>
            </lmc-basic-button>
        </div>
      </lmc-navbar>

      <!-- El Router insertará el componente de página aquí -->
      <main id="router-outlet" role="main"></main>

      <lmc-footer>
        <p>© ${new Date().getFullYear()} LegoMyCode Project. Hecho con Legos!</p>
      </lmc-footer>
    `;
  }
}