// src/blocks/lmc-tab-group.ts
import { LitElement, html, css } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import type { LmcTab } from './lmc-tab'; // Importa el tipo para TypeScript
import type { LmcTabPanel } from './lmc-tab-panel'; // Importa el tipo

/**
 * @element lmc-tab-group
 * @description Contenedor principal que gestiona un conjunto de pestañas (`lmc-tab`) y sus paneles de contenido (`lmc-tab-panel`).
 * @version 1.0.0
 *
 * @prop {String} [activeTabId] - ID del `lmc-tab-panel` que debe estar activo inicialmente. Si no se especifica, se activa el primero.
 * @prop {'manual' | 'auto'} [activation='auto'] - 'auto' activa la pestaña al enfocarla con flechas, 'manual' requiere Enter/Espacio. (Por ahora implementamos clic simple).
 *
 * @slot tabs - Lugar designado para colocar los elementos `lmc-tab`. Si no se usa, se buscan `lmc-tab` en el slot por defecto.
 * @slot - Lugar para los elementos `lmc-tab-panel`. Si se usa el slot 'tabs', los `lmc-tab` también pueden ir aquí.
 *
 * @fires lmc-tab-change - Se dispara cuando la pestaña activa cambia. detail: { activeTabId: string }
 *
 * @cssprop [--lmc-tab-group-border-bottom=1px solid #ccc] - Borde debajo de la lista de encabezados de pestañas.
 * @cssprop [--lmc-tab-list-padding=0] - Padding alrededor de la lista de encabezados.
 */
@customElement('lmc-tab-group')
export class LmcTabGroup extends LitElement {

  @property({ type: String, attribute: 'active-tab-id' })
  activeTabId?: string;

  // Estado interno para rastrear el ID activo actual
  @state() private _currentActiveTabId?: string;

  // Query para obtener los elementos lmc-tab sloteados
  @queryAssignedElements({ slot: 'tabs', selector: 'lmc-tab', flatten: true })
  private _tabsInNamedSlot!: Array<LmcTab>;

  @queryAssignedElements({ selector: 'lmc-tab:not([slot])', flatten: true })
  private _tabsInDefaultSlot!: Array<LmcTab>;

  // Query para obtener los paneles sloteados
  @queryAssignedElements({ selector: 'lmc-tab-panel', flatten: true })
  private _panels!: Array<LmcTabPanel>;

  static styles = css`
    :host {
      display: block;
    }

    .tab-list {
      display: flex;
      flex-wrap: wrap; /* Permite que los tabs pasen a la siguiente línea si no caben */
      border-bottom: var(--lmc-tab-group-border-bottom, 1px solid #ccc);
      padding: var(--lmc-tab-list-padding, 0);
      margin: 0; /* Reset de lista */
      list-style: none; /* Reset de lista */
    }

    /* Los paneles se gestionan con su propio CSS (display: none/block) */
    .panels {
      display: block; /* Ensures panels are block elements */
      padding: var(--lmc-panel-padding, 0); /* Adds customizable padding */
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('lmc-tab-selected', this._handleTabSelected as EventListener);
    // Necesitamos esperar a que el slotting inicial ocurra
    this.updateComplete.then(() => this._initializeActiveTab());
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('lmc-tab-selected', this._handleTabSelected as EventListener);
  }

  private get _tabs(): LmcTab[] {
      // Prioriza el slot nombrado 'tabs', si no, usa los tabs del slot por defecto
      return this._tabsInNamedSlot?.length > 0 ? this._tabsInNamedSlot : this._tabsInDefaultSlot;
  }


  private _initializeActiveTab() {
      // Si no hay tabs, no hacer nada
      if (!this._tabs || this._tabs.length === 0) return;

      let initialTabId = this.activeTabId;

      // Si no se proporcionó un ID activo, o si el ID proporcionado no existe,
      // activa el primer tab no deshabilitado.
      if (!initialTabId || !this._panels.some(p => p.id === initialTabId)) {
          const firstEnabledTab = this._tabs.find(tab => !tab.disabled);
          initialTabId = firstEnabledTab?.panel; // Usa el ID del panel asociado al primer tab
      }

      this._setActiveTab(initialTabId, false); // false para no emitir evento inicial
  }


  private _handleTabSelected(event: CustomEvent<{ panelId: string }>) {
    const newTabId = event.detail.panelId;
    this._setActiveTab(newTabId);
  }

  private _setActiveTab(newTabId?: string, emitChangeEvent = true) {
    if (!newTabId || newTabId === this._currentActiveTabId) {
        // No hacer nada si el ID es inválido o ya está activo
        return;
    }

    this._currentActiveTabId = newTabId;

    // Actualizar estado 'active' en tabs y paneles
    this._tabs.forEach(tab => {
      const isActive = tab.panel === newTabId;
      tab.active = isActive;
      // Vincula aria-labelledby del panel con el id del tab activo
      if(isActive && !tab.disabled){
        const panel = this._panels.find(p => p.id === newTabId);
        panel?.setAttribute('aria-labelledby', tab.id);
      }
    });

    this._panels.forEach(panel => {
      panel.active = panel.id === newTabId;
    });

    if (emitChangeEvent) {
      this.dispatchEvent(new CustomEvent('lmc-tab-change', {
        detail: { activeTabId: newTabId },
        bubbles: true,
        composed: true
      }));
    }

    // Opcional: Actualizar la propiedad externa si queremos two-way binding (más complejo)
    // this.activeTabId = newTabId;
  }

  render() {
    return html`
      <div class="tab-list" role="tablist" part="tab-list">
        <slot name="tabs">
             ${/* Si no se usa slot="tabs", busca tabs en el slot por defecto */''}
             <slot @slotchange=${() => this.requestUpdate()}></slot>
        </slot>
      </div>
      <div class="panels" part="panels">
        <slot @slotchange=${() => this.requestUpdate()}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lmc-tab-group': LmcTabGroup;
  }
}