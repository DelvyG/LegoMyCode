import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import type { LmcTab } from './lmc-tab';
import type { LmcTabPanel } from './lmc-tab-panel';

/**
 * @element lmc-tab-group
 * @description Contenedor principal que gestiona un conjunto de pestañas (`lmc-tab`) y sus paneles de contenido (`lmc-tab-panel`). Controla la visibilidad de los paneles mediante CSS.
 * @version 1.2.3 - Reinstated and increased top padding on panels container.
 *
 * @prop {string} [initialTab] - El valor del atributo `controls-panel` del `lmc-tab` que debe estar activo inicialmente. Si no se especifica, se activa el primer tab no deshabilitado.
 *
 * @slot - Lugar donde se deben colocar los elementos `<lmc-tab>` y `<lmc-tab-panel>`. Se recomienda poner los `lmc-tab` primero.
 *
 * @fires lmc-tab-change - Se dispara cuando la pestaña activa cambia. detail: { activePanelId: string }
 *
 * @cssprop [--lmc-tab-group-border-bottom=1px solid var(--lmc-global-color-border, #ccc)] - Borde debajo de la lista de tabs.
 * @cssprop [--lmc-tab-list-gap=0] - Espacio horizontal entre tabs.
 * @cssprop [--lmc-panel-container-padding-top=var(--lmc-global-spacing-xl, 2.5rem)] - **ESPACIO SUPERIOR entre tabs y contenido del panel.**
 * @cssprop [--lmc-panel-container-padding-x=0] - Padding horizontal del contenedor de paneles.
 * @cssprop [--lmc-panel-container-padding-bottom=0] - Padding inferior del contenedor de paneles.
 */
@customElement('lmc-tab-group')
export class LmcTabGroup extends LitElement {

  @property({ type: String, attribute: 'initial-tab' })
  initialTab?: string;

  @state() private _activePanelId?: string;

  @queryAssignedElements({ selector: 'lmc-tab', flatten: true })
  private _tabs!: Array<LmcTab>;

  @queryAssignedElements({ selector: 'lmc-tab-panel', flatten: true })
  private _panels!: Array<LmcTabPanel>;

  static styles = css`
    :host {
      display: block;
      color: var(--lmc-global-color-text-default);
      background-color: var(--lmc-global-color-background);
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .tab-list {
      display: flex;
      flex-wrap: wrap;
      border-bottom: var(--lmc-tab-group-border-bottom, 1px solid var(--lmc-global-color-border, #ccc));
      gap: var(--lmc-tab-list-gap, 0);
      padding: 0;
      margin: 0;
      list-style: none;
      transition: border-color 0.3s ease;
    }

    .panels {
      /* Contenedor DIV para los paneles */
      /* !! CORREGIDO: Añadido padding-top generoso !! */
      padding-top: var(--lmc-panel-container-padding-top, var(--lmc-global-spacing-xl, 2.5rem)); /* 40px por defecto */
      /* Paddings horizontales e inferiores opcionales */
      padding-left: var(--lmc-panel-container-padding-x, 0);
      padding-right: var(--lmc-panel-container-padding-x, 0);
      padding-bottom: var(--lmc-panel-container-padding-bottom, 0);
      box-sizing: border-box;
    }

    /* CSS para controlar la visibilidad de los paneles sloteados */
    ::slotted(lmc-tab-panel) {
      display: none; /* Ocultar TODOS los paneles por defecto */
    }
    ::slotted(lmc-tab-panel[active]) {
      display: block; /* Mostrar SÓLO el que tenga el atributo 'active' */
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('lmc-tab-selected', this._handleTabSelected as EventListener);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('lmc-tab-selected', this._handleTabSelected as EventListener);
  }

  protected firstUpdated(changedProperties: PropertyValues<this>): void {
      super.firstUpdated(changedProperties);
      this._initializeActiveTab();
      console.log('[lmc-tab-group] Initialized. Tabs found:', this._tabs?.length ?? 0, 'Panels found:', this._panels?.length ?? 0);
  }

  private _initializeActiveTab() {
    if (!this._tabs || this._tabs.length === 0 || !this._panels || this._panels.length === 0) {
        console.warn('[lmc-tab-group] Initialization skipped: No tabs or panels found.');
        return;
    }
    let targetPanelId = this.initialTab;
    if (!targetPanelId || !this._tabs.some(tab => tab.controlsPanel === targetPanelId && !tab.disabled)) {
        const firstEnabledTab = this._tabs.find(tab => !tab.disabled);
        targetPanelId = firstEnabledTab?.controlsPanel;
    }
    if(!targetPanelId) {
        console.warn('[lmc-tab-group] No valid initial tab found to activate.');
        return;
    }
    this._setActivePanel(targetPanelId, false);
  }

  private _handleTabSelected(event: CustomEvent<{ panelId: string }>) {
    const selectedPanelId = event.detail.panelId;
    console.log(`[lmc-tab-group] Tab selected event received. Panel ID: ${selectedPanelId}`);
    this._setActivePanel(selectedPanelId);
  }

  private _setActivePanel(newPanelId?: string, emitChangeEvent = true) {
    if (!newPanelId || newPanelId === this._activePanelId) { return; }
    console.log(`[lmc-tab-group] Setting active panel to: ${newPanelId}`);
    this._activePanelId = newPanelId;

    this._tabs?.forEach(tab => { tab.active = (tab.controlsPanel === newPanelId); });
    this._panels?.forEach(panel => { panel.active = (panel.id === newPanelId); });

    if (emitChangeEvent) {
      console.log(`[lmc-tab-group] Dispatching lmc-tab-change event. ID: ${newPanelId}`);
      this.dispatchEvent(new CustomEvent('lmc-tab-change', {
        detail: { activePanelId: newPanelId },
        bubbles: true, composed: true
      }));
    }
     this.requestUpdate();
  }

  render() {
    // console.log('[lmc-tab-group] Rendering...');
    return html`
      <div class="tab-list" role="tablist" part="tab-list">
        <slot name="tabs"></slot>
         <!-- Escuchar cambios en el slot por defecto por si los tabs están ahí -->
         <slot @slotchange=${() => this.requestUpdate()}></slot>
      </div>
      <div class="panels" part="panels">
        <slot name="panel"></slot>
         <!-- Escuchar cambios en el slot por defecto por si los paneles están ahí -->
         <slot @slotchange=${() => this.requestUpdate()}></slot>
      </div>
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'lmc-tab-group': LmcTabGroup; } }