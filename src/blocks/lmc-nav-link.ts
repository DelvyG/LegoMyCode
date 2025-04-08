// src/blocks/lmc-nav-link.ts

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @element lmc-nav-link
 * @description Representa un enlace de navegación individual, típicamente usado dentro de barras de navegación o menús.
 * @version 1.0.0
 *
 * @prop {String} href - La URL a la que apunta el enlace. Requerida.
 * @prop {Boolean} [active=false] - Si es true, indica que este enlace representa la página/sección activa actualmente. Aplica estilos de activo.
 * @prop {Boolean} [disabled=false] - Si es true, el enlace aparece visualmente deshabilitado y no es interactivo.
 *
 * @slot - El contenido del enlace (texto, icono, etc.).
 *
 * @cssprop [--lmc-nav-link-padding=0.5rem 1rem] - Padding interno para crear área clickeable.
 * @cssprop [--lmc-nav-link-text-color=inherit] - Color del texto del enlace.
 * @cssprop [--lmc-nav-link-text-decoration=none] - Decoración del texto (ej: 'underline').
 * @cssprop [--lmc-nav-link-text-color-hover] - Color al pasar el ratón (fallback: --lmc-nav-link-text-color).
 * @cssprop [--lmc-nav-link-text-decoration-hover=underline] - Decoración al pasar el ratón.
 * @cssprop [--lmc-nav-link-text-color-active] - Color del texto cuando está activo (fallback: --lmc-global-color-primary, blue).
 * @cssprop [--lmc-nav-link-font-weight-active=bold] - Peso de fuente cuando está activo.
 * @cssprop [--lmc-nav-link-opacity-disabled=0.5] - Opacidad cuando está deshabilitado.
 */
@customElement('lmc-nav-link')
export class LmcNavLink extends LitElement {

  @property({ type: String })
  href!: string; // Hacemos que sea requerida implícitamente (no tiene valor por defecto)

  @property({ type: Boolean, reflect: true })
  active: boolean = false;

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  static styles = css`
    :host {
      display: inline-block; /* O inline-flex si se necesita alinear contenido interno */
      box-sizing: border-box;
      /* Aplicamos padding al host para que toda el área sea clickeable (si es necesario) */
      /* padding: var(--lmc-nav-link-padding, 0.5rem 1rem); */
      /* O aplicarlo directamente al <a> si preferimos */
    }

    a {
      display: inline-flex; /* Para alinear contenido interno y que padding funcione bien */
      align-items: center; /* Centra contenido del slot verticalmente */
      padding: var(--lmc-nav-link-padding, 0.5rem 1rem);
      color: var(--lmc-nav-link-text-color, inherit);
      text-decoration: var(--lmc-nav-link-text-decoration, none);
      cursor: pointer;
      transition: color 0.15s ease-out, text-decoration 0.15s ease-out, opacity 0.15s ease-out;
      height: 100%; /* Para que ocupe toda la altura del host si es necesario */
      box-sizing: border-box;
    }

    a:hover {
      color: var(--lmc-nav-link-text-color-hover, var(--lmc-nav-link-text-color, inherit));
      text-decoration: var(--lmc-nav-link-text-decoration-hover, underline);
    }

    /* Estilos cuando el ENLACE está activo */
    :host([active]) a {
      color: var(--lmc-nav-link-text-color-active, var(--lmc-global-color-primary, blue));
      font-weight: var(--lmc-nav-link-font-weight-active, bold);
      cursor: default; /* Opcional: indicar que ya está activo */
      text-decoration: var(--lmc-nav-link-text-decoration, none); /* Evita subrayado hover si está activo */
    }
     /* Quita hover si ya está activo */
    :host([active]) a:hover {
        color: var(--lmc-nav-link-text-color-active, var(--lmc-global-color-primary, blue));
        text-decoration: var(--lmc-nav-link-text-decoration, none);
    }


    /* Estilos cuando el ENLACE está deshabilitado */
    :host([disabled]) a {
      opacity: var(--lmc-nav-link-opacity-disabled, 0.5);
      pointer-events: none; /* Evita que el enlace reciba clics */
      cursor: not-allowed;
      color: var(--lmc-nav-link-text-color, inherit); /* Mantiene color base pero atenuado */
      text-decoration: var(--lmc-nav-link-text-decoration, none); /* Quita cualquier decoración */
    }
     /* Quita hover si está deshabilitado */
    :host([disabled]) a:hover {
        color: var(--lmc-nav-link-text-color, inherit);
        text-decoration: var(--lmc-nav-link-text-decoration, none);
    }
  `;

  // Añadimos un listener en el host para capturar clics
  // y prevenir la navegación si está deshabilitado.
  constructor() {
    super();
    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback(): void {
      super.disconnectedCallback();
      this.removeEventListener('click', this._handleClick);
  }


  private _handleClick(event: MouseEvent) {
    if (this.disabled || this.active) {
        console.log(`lmc-nav-link: Click prevenido (disabled=${this.disabled}, active=${this.active})`);
      event.preventDefault(); // Previene la navegación si está deshabilitado o activo
      event.stopPropagation(); // Detiene el evento aquí
    } else {
        console.log(`lmc-nav-link: Navegando a ${this.href}`);
        // Aquí podríamos disparar un evento lmc-nav-click si quisiéramos
        // this.dispatchEvent(new CustomEvent('lmc-nav-click', { detail: { href: this.href }, bubbles: true, composed: true }));
    }
  }


  render() {
    // Usamos ifDefined para no añadir aria-current si no está activo
    // Usamos tabindex para quitar del orden de tabulación si está deshabilitado
    return html`
      <a
        href=${this.href}
        ?disabled=${this.disabled}
        aria-current=${ifDefined(this.active ? 'page' : undefined)}
        tabindex=${this.disabled ? -1 : 0}
        part="link"
      >
        <slot part="content"></slot> <!-- El contenido (texto, icono) va aquí -->
      </a>
    `;
  }
}

// Declaración TypeScript para el registro global del elemento
declare global {
  interface HTMLElementTagNameMap {
    'lmc-nav-link': LmcNavLink;
  }
}