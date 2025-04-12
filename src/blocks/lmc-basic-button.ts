import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * @element lmc-basic-button
 * @description Un botón básico con diferentes apariencias, soporte para iconos y capacidad de actuar como enlace.
 * @version 1.2.0 - Corregido uso de variables CSS específicas para todas las apariencias.
 *
 * @prop {'primary' | 'secondary' | 'ghost'} [appearance=secondary] - Estilo visual del botón.
 * @prop {String} [label] - Texto del botón (si no se usa el slot por defecto).
 * @prop {Boolean} [disabled=false] - Si es true, el botón está deshabilitado.
 * @prop {String} [href] - Si se proporciona, el botón se renderiza como un enlace `<a>`.
 * @prop {String} [target] - Atributo `target` para el enlace (ej: '_blank'). Solo aplica si `href` está presente.
 * @prop {String} [download] - Atributo `download` para el enlace. Solo aplica si `href` está presente.
 * @prop {String} [title] - Atributo `title` para tooltips.
 *
 * @slot - Contenido principal del botón (generalmente texto). Reemplaza la propiedad `label`.
 * @slot prefix - Contenido para mostrar antes del slot principal/label (ej: icono).
 * @slot suffix - Contenido para mostrar después del slot principal/label (ej: icono).
 *
 * @cssprop [--lmc-button-padding=var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-md, 1rem)] - Padding interno.
 * @cssprop [--lmc-button-border-radius=var(--lmc-global-border-radius-md, 4px)] - Radio del borde.
 * @cssprop [--lmc-button-border-width=1px] - Grosor del borde.
 * @cssprop [--lmc-button-font-size=inherit] - Tamaño de fuente.
 * @cssprop [--lmc-button-font-weight=bold] - Peso de fuente.
 * @cssprop [--lmc-button-line-height=1.5] - Altura de línea.
 * @cssprop [--lmc-button-transition=all 0.2s ease-in-out] - Transición para hover/focus.
 * @cssprop [--lmc-button-disabled-opacity=0.6] - Opacidad cuando está deshabilitado.
 * @cssprop [--lmc-button-gap=var(--lmc-global-spacing-xs, 0.4rem)] - Espacio entre slots (prefix/suffix/default).
 *
 * @cssprop [--lmc-button-primary-bg-color=var(--lmc-global-color-primary, blue)] - Fondo para appearance='primary'.
 * @cssprop [--lmc-button-primary-text-color=var(--lmc-global-color-text-on-primary, white)] - Texto para appearance='primary'.
 * @cssprop [--lmc-button-primary-border-color=transparent] - Borde para appearance='primary'.
 * @cssprop [--lmc-button-primary-hover-bg-color] - Fondo hover para 'primary'. (Calculado si no se define)
 * @cssprop [--lmc-button-primary-hover-text-color] - Texto hover para 'primary'. (Igual que texto normal si no se define)
 * @cssprop [--lmc-button-primary-active-bg-color] - Fondo active para 'primary'. (Calculado si no se define)
 *
 * @cssprop [--lmc-button-secondary-bg-color=transparent] - Fondo para appearance='secondary'.
 * @cssprop [--lmc-button-secondary-text-color=var(--lmc-global-color-primary, blue)] - Texto para appearance='secondary'.
 * @cssprop [--lmc-button-secondary-border-color=var(--lmc-global-color-primary, blue)] - Borde para appearance='secondary'.
 * @cssprop [--lmc-button-secondary-hover-bg-color] - Fondo hover para 'secondary'. (Calculado si no se define)
 * @cssprop [--lmc-button-secondary-hover-text-color] - Texto hover para 'secondary'.
 * @cssprop [--lmc-button-secondary-active-bg-color] - Fondo active para 'secondary'. (Calculado si no se define)
 *
 * @cssprop [--lmc-button-ghost-bg-color=transparent] - Fondo para appearance='ghost'.
 * @cssprop [--lmc-button-ghost-text-color=var(--lmc-global-color-primary, blue)] - Texto para appearance='ghost'.
 * @cssprop [--lmc-button-ghost-border-color=transparent] - Borde para appearance='ghost'.
 * @cssprop [--lmc-button-ghost-hover-bg-color] - Fondo hover para 'ghost'. (Calculado si no se define)
 * @cssprop [--lmc-button-ghost-hover-text-color] - Texto hover para 'ghost'.
 * @cssprop [--lmc-button-ghost-active-bg-color] - Fondo active para 'ghost'. (Calculado si no se define)
 *
 * @fires lmc-click - Se dispara cuando se hace clic en el botón (si no está deshabilitado y no es un enlace). detail: { originalEvent: MouseEvent }
 */
@customElement('lmc-basic-button')
export class LmcBasicButton extends LitElement {
  @property({ type: String, reflect: true })
  appearance: 'primary' | 'secondary' | 'ghost' = 'secondary';

  @property({ type: String })
  label?: string;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @property({ type: String })
  href?: string;

  @property({ type: String })
  target?: string;

  @property({ type: String })
  download?: string;

  static styles = css`
    :host {
      display: inline-block;
      cursor: default;
      -webkit-user-select: none;
      user-select: none;
    }

    .button-base, a.button-base {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      box-sizing: border-box;
      /* Usa la variable para el grosor del borde */
      border: var(--lmc-button-border-width, 1px) solid transparent;
      padding: var(--lmc-button-padding, var(--lmc-global-spacing-xs, 0.4rem) var(--lmc-global-spacing-md, 1rem));
      border-radius: var(--lmc-button-border-radius, var(--lmc-global-border-radius-md, 4px));
      font-size: var(--lmc-button-font-size, inherit);
      font-weight: var(--lmc-button-font-weight, bold);
      line-height: var(--lmc-button-line-height, 1.5);
      text-decoration: none;
      cursor: pointer;
      transition: var(--lmc-button-transition, all 0.2s ease-in-out);
      gap: var(--lmc-button-gap, var(--lmc-global-spacing-xs, 0.4rem));
      white-space: nowrap;
    }

    /* Estilos Apariencia PRIMARY - CORREGIDO */
    :host([appearance='primary']) .button-base {
      background-color: var(--lmc-button-primary-bg-color, var(--lmc-global-color-primary, blue));
      color: var(--lmc-button-primary-text-color, var(--lmc-global-color-text-on-primary, white));
      border-color: var(--lmc-button-primary-border-color, transparent); /* Usa la var específica, fallback transparente */
    }
    :host([appearance='primary']) .button-base:not([disabled]):hover {
       background-color: var(--lmc-button-primary-hover-bg-color, color-mix(in srgb, var(--lmc-button-primary-bg-color, var(--lmc-global-color-primary, blue)) 85%, black));
       color: var(--lmc-button-primary-hover-text-color, var(--lmc-button-primary-text-color, var(--lmc-global-color-text-on-primary, white)));
    }
     :host([appearance='primary']) .button-base:not([disabled]):active {
       background-color: var(--lmc-button-primary-active-bg-color, color-mix(in srgb, var(--lmc-button-primary-bg-color, var(--lmc-global-color-primary, blue)) 70%, black));
    }

    /* Estilos Apariencia SECONDARY - CORREGIDO */
    :host([appearance='secondary']) .button-base {
      background-color: var(--lmc-button-secondary-bg-color, transparent);
      /* USA LAS VARIABLES ESPECÍFICAS */
      color: var(--lmc-button-secondary-text-color, var(--lmc-global-color-primary, blue));
      border-color: var(--lmc-button-secondary-border-color, var(--lmc-global-color-primary, blue));
    }
    :host([appearance='secondary']) .button-base:not([disabled]):hover {
       /* Usa las variables específicas o calcula basado en ellas */
       background-color: var(--lmc-button-secondary-hover-bg-color, color-mix(in srgb, var(--lmc-button-secondary-text-color, var(--lmc-global-color-primary, blue)) 10%, transparent));
       color: var(--lmc-button-secondary-hover-text-color, var(--lmc-button-secondary-text-color, var(--lmc-global-color-primary, blue)));
       /* Podríamos oscurecer el borde también si quisiéramos */
       /* border-color: var(--lmc-button-secondary-hover-border-color, color-mix(in srgb, var(--lmc-button-secondary-border-color, var(--lmc-global-color-primary, blue)) 85%, black)); */
    }
     :host([appearance='secondary']) .button-base:not([disabled]):active {
       background-color: var(--lmc-button-secondary-active-bg-color, color-mix(in srgb, var(--lmc-button-secondary-text-color, var(--lmc-global-color-primary, blue)) 20%, transparent));
    }


    /* Estilos Apariencia GHOST */
    :host([appearance='ghost']) .button-base {
      background-color: var(--lmc-button-ghost-bg-color, transparent);
      color: var(--lmc-button-ghost-text-color, var(--lmc-global-color-primary, blue));
      border-color: var(--lmc-button-ghost-border-color, transparent);
    }
     :host([appearance='ghost']) .button-base:not([disabled]):hover {
       background-color: var(--lmc-button-ghost-hover-bg-color, color-mix(in srgb, var(--lmc-button-ghost-text-color, var(--lmc-global-color-primary, blue)) 10%, transparent));
       color: var(--lmc-button-ghost-hover-text-color, var(--lmc-button-ghost-text-color, var(--lmc-global-color-primary, blue)));
    }
     :host([appearance='ghost']) .button-base:not([disabled]):active {
       background-color: var(--lmc-button-ghost-active-bg-color, color-mix(in srgb, var(--lmc-button-ghost-text-color, var(--lmc-global-color-primary, blue)) 20%, transparent));
    }


    /* Estilos Deshabilitado */
    .button-base[disabled] {
      opacity: var(--lmc-button-disabled-opacity, 0.6);
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Estilos para los slots */
    ::slotted(*) {
       display: inline-flex;
       align-items: center;
    }
  `;

  // _handleClick como estaba antes

  // render como estaba antes
  render() {
    const ariaLabel = this.title || this.label || this.textContent?.trim() || undefined;

    if (this.href) {
      // Renderizar como enlace <a>
      return html`
        <a
          class="button-base"
          href=${this.href}
          target=${ifDefined(this.target)}
          download=${ifDefined(this.download)}
          role="button"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          aria-label=${ifDefined(ariaLabel)}
          title=${ifDefined(this.title)}
          part="button link"
           @click=${(e: MouseEvent) => {if (this.disabled) e.preventDefault()}}
        >
          <slot name="prefix"></slot>
          <slot>${this.label}</slot>
          <slot name="suffix"></slot>
        </a>
      `;
    } else {
      // Renderizar como botón <button>
      return html`
        <button
          class="button-base"
          ?disabled=${this.disabled}
          @click=${this._handleClick}
          aria-label=${ifDefined(ariaLabel)}
          title=${ifDefined(this.title)}
          part="button"
          type="button"
        >
          <slot name="prefix"></slot>
          <slot>${this.label}</slot>
          <slot name="suffix"></slot>
        </button>
      `;
    }
  }
  // _handleClick definido como estaba
  private _handleClick(e: MouseEvent) {
    if (this.disabled || this.href) {
      return;
    }
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('lmc-click', {
      detail: { originalEvent: e },
      bubbles: true,
      composed: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-basic-button': LmcBasicButton;
  }
}