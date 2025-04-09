import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import type { LmcAccordionItem } from './lmc-accordion-item'; // Import type for casting

/**
 * @element lmc-accordion
 * @description Un contenedor para agrupar y gestionar varios elementos `lmc-accordion-item`.
 * Puede controlar si solo un item puede estar abierto a la vez.
 *
 * @prop {Boolean} multiple - Si es true, permite que múltiples items estén abiertos simultáneamente. Si es false (default), abrir un item cierra los demás.
 *
 * @slot - Lugar donde se deben colocar los elementos `<lmc-accordion-item>`.
 *
 * @cssprop [--lmc-accordion-gap=0] - Espacio vertical entre los items del acordeón. Si es 0, los bordes de los items pueden necesitar ajustarse.
 * @cssprop [--lmc-accordion-border=none] - Borde alrededor del contenedor del acordeón completo.
 * @cssprop [--lmc-accordion-border-radius=var(--lmc-global-border-radius-md, 4px)] - Radio del borde del contenedor del acordeón.
 *
 * @version 1.0.0
 * @author LegoMyCode Team
 */
@customElement('lmc-accordion')
export class LmcAccordion extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: var(--lmc-accordion-border, none);
      border-radius: var(--lmc-accordion-border-radius, var(--lmc-global-border-radius-md, 4px));
      overflow: hidden; /* Si se aplica borde/radius al contenedor */
    }

    .container {
      display: flex;
      flex-direction: column;
      /* Aplicar gap si se define, para separar items */
      gap: var(--lmc-accordion-gap, 0);
    }

    /* Ajustes si usamos gap > 0: Los items no necesitan margen inferior */
    ::slotted(lmc-accordion-item) {
       margin-bottom: 0 !important; /* Sobrescribe posible margen por defecto del item */
    }

    /* Ajustes si no usamos gap (gap = 0, default): Colapsar bordes */
    :host([style*="--lmc-accordion-gap: 0"]) ::slotted(lmc-accordion-item:not(:first-child)),
    :host(:not([style*="--lmc-accordion-gap"])) ::slotted(lmc-accordion-item:not(:first-child)) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        /* Si los items tienen borde, podemos ocultar el borde superior para que colapsen */
         border-top: none;
    }
     :host([style*="--lmc-accordion-gap: 0"]) ::slotted(lmc-accordion-item:not(:last-child)),
     :host(:not([style*="--lmc-accordion-gap"])) ::slotted(lmc-accordion-item:not(:last-child)) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
     }
  `;

  /**
   * Si es true, permite que múltiples items estén abiertos simultáneamente.
   * Si es false (default), abrir un item cierra los demás.
   */
  @property({ type: Boolean, reflect: true })
  multiple = false;

  // Query para obtener una referencia a los elementos lmc-accordion-item asignados al slot
  @queryAssignedElements({ slot: undefined, selector: 'lmc-accordion-item' })
  _items!: Array<LmcAccordionItem>; // Nota: Usamos '!' porque esperamos que estén presentes al usarse

  connectedCallback() {
    super.connectedCallback();
    // Añadir el listener cuando el componente se conecta
    this.addEventListener('lmc-toggle', this._handleItemToggle as EventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Limpiar el listener cuando el componente se desconecta
    this.removeEventListener('lmc-toggle', this._handleItemToggle as EventListener);
  }

  private _handleItemToggle(event: CustomEvent<{ open: boolean }>) {
    const toggledItem = event.target as LmcAccordionItem;

    // Si no estamos en modo 'multiple' y el item se está abriendo
    if (!this.multiple && event.detail.open) {
      this._items.forEach(item => {
        // Cerramos todos los demás items
        if (item !== toggledItem && item.open) {
          item.open = false;
        }
      });
    }
    // No necesitamos hacer nada si se cierra un item o si 'multiple' es true,
    // ya que el propio item gestiona su estado 'open'.
  }

  render() {
    return html`
      <div class="container" role="presentation">
        <!-- Los lmc-accordion-item irán aquí -->
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `;
  }

  // Es buena práctica re-evaluar cuando los elementos del slot cambian,
  // aunque en este caso simple (solo leer _items cuando ocurre un toggle)
  // no es estrictamente necesario para la lógica de cierre/apertura.
  // Podría ser útil si quisiéramos hacer algo al inicio con los items.
  private _handleSlotChange() {
    // console.log('Accordion items slot changed:', this._items);
    // Podríamos inicializar algún estado aquí si fuera necesario
    this.requestUpdate(); // Solicita un re-renderizado si la apariencia depende de los hijos
  }
}

// --- TypeScript Declaration (Opcional) ---
// declare global {
//   interface HTMLElementTagNameMap {
//     'lmc-accordion': LmcAccordion;
//   }
// }