import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
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

@customElement('lmc-app-shell')
export class LmcAppShell extends LitElement {
  @state() private _isDarkMode = false;

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--lmc-global-color-background, #ffffff);
      color: var(--lmc-global-color-text-default, #000000);
      transition: background-color 0.3s ease, color 0.3s ease;
    }



    lmc-navbar lmc-basic-button[slot="actions"] lmc-icon {
    color: var(--lmc-global-color-text-default); /* Fuerza un color base visible */
    /* O podrías intentar forzarlo al color primario si prefieres */
    /* color: var(--lmc-global-color-primary); */
}

:host([data-theme="dark"]) lmc-navbar lmc-basic-button[slot="actions"] lmc-icon {
   color: var(--lmc-global-color-text-default); /* Debería ser blanco o claro en tema oscuro */
}

    main {
      flex-grow: 1; /* Ocupa el espacio vertical disponible */
      width: 100%;   /* Ocupa todo el ancho horizontal */
      /* El padding y max-width ahora lo gestiona el lmc-container DENTRO de cada página */
    }

    /* El botón de tema ya no necesita estilo flotante, se coloca en slot="actions" de lmc-navbar */
    /* .theme-toggle-button { ... } */

    lmc-navbar {
      /* Asegura que la navbar se quede fija arriba */
      position: sticky;
      top: 0;
      z-index: 100; /* Sobre el contenido al hacer scroll */
    }

    /* Opcional: Asegurar que el botón de tema en la navbar se vea bien */
    lmc-navbar lmc-basic-button[slot="actions"] {
        /* Hereda color para el icono */
       color: inherit;
        /* Puedes ajustar el padding si es necesario */
       /* --lmc-button-padding: 0.25rem; */
    }
     lmc-navbar lmc-basic-button[slot="actions"] lmc-icon {
          /* Asegura que el icono use el color del botón */
         color: currentColor;
     }
  `;

  connectedCallback() {
    super.connectedCallback();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this._isDarkMode = localStorage.getItem('lmc-theme') === 'dark' || (!localStorage.getItem('lmc-theme') && prefersDark);
    this._applyTheme();
    requestAnimationFrame(() => this._initRouter());
  }

  private _initRouter() {
    console.log('[Router] Attempting to initialize router...'); // LOG 1
    const outlet = this.shadowRoot?.querySelector('main');
    console.log('[Router] Outlet element found:', outlet); // LOG 2

    if (outlet) {
      const router = new Router(outlet);
      // Aseguramos el tipo Route[] para el array
      const routes: Route[] = [
        // Ruta para la página principal (Home)
        {
          path: '/',
          // Usamos function() para tipar 'this' si fuera necesario, aunque no lo usamos aquí
          action: async (context: RouteContext, commands: Commands) => {
            const routePath = context.pathname;
            console.log(`[Router] Action started for ${routePath}`);
            try {
              await import('./pages/lmc-page-home.ts');
              console.log(`[Router] Module ./pages/lmc-page-home.ts loaded successfully for ${routePath}`);
              return commands.component('lmc-page-home');
            } catch (error) {
              console.error(`[Router] Error loading module for ${routePath}:`, error);
              try {
                await import('./pages/lmc-page-not-found.ts');
                return commands.component('lmc-page-not-found');
              } catch (notFoundError) {
                 console.error(`[Router] CRITICAL: Error loading NOT FOUND module after failing ${routePath}:`, notFoundError);
                 outlet.innerHTML = '<h1>Error Crítico</h1><p>No se pudo cargar el contenido solicitado ni la página de error.</p>';
                 return commands.prevent();
              }
            }
          },
        },
        // Ruta para Accordion
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
              try {
                await import('./pages/lmc-page-not-found.ts');
                return commands.component('lmc-page-not-found');
              } catch (notFoundError) {
                 console.error(`[Router] CRITICAL: Error loading NOT FOUND module after failing ${routePath}:`, notFoundError);
                 outlet.innerHTML = '<h1>Error Crítico</h1><p>No se pudo cargar el contenido solicitado ni la página de error.</p>';
                 return commands.prevent();
              }
            }
          },
        },
        // Ruta Catch-all
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
        <!-- Logo en el slot 'brand' -->
        <div slot="brand">
          <!-- Asumiendo que la carpeta img está en /public -->
          <!-- Puedes envolverlo en un link a Home -->
           <a href="/" style="line-height: 0;"> <!-- line-height 0 para evitar espacio extra bajo la img -->
               <img src="/img/LegoMyCodeLogo-main.png" alt="LegoMyCode Logo" style="height: 40px; vertical-align: middle;" />
           </a>
        </div>

        <!-- Links de Navegación en el slot por defecto -->
        <lmc-nav-link href="/">Home</lmc-nav-link>
        <lmc-nav-link href="/accordion">Accordion</lmc-nav-link>
        <!-- Más links irán aquí -->

        <!-- Botón de cambio de tema en el slot 'actions' -->
        <div slot="actions">
            <lmc-basic-button
                class="theme-toggle-button"
                appearance="primary" /* Cambiado a un valor permitido */
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