import { LitElement, html, css } from 'lit';
import { state } from 'lit/decorators.js';
import { customElement } from 'lit/decorators.js';
import '../blocks/lmc-container';
import '../blocks/lmc-pagination';
import '../blocks/lmc-text-display';

@customElement('lmc-page-pagination')
export class LmcPagePagination extends LitElement {
  static styles = css`
    /* Estilos para la página de demostración */
    .content {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      text-align: center;
    }
  `;

  @state() private _currentPage = 1; // Página actual

  private _handlePageChange(event: CustomEvent) {
    console.log('Page changed to:', event.detail.page);
    this._currentPage = event.detail.page; // Actualiza la página actual
    this.requestUpdate(); // Solicitar actualización explícita
  }

  render() {
    return html`
      <lmc-container>
        <lmc-text-display level="h1">Demo de Paginación</lmc-text-display>
        <lmc-text-display level="p">
          Esta página demuestra el componente <code>lmc-pagination</code>.
        </lmc-text-display>
        <lmc-pagination
          .currentPage="${this._currentPage}"
          .totalPages="${10}"
          .maxPagesVisible="${5}"
          ?showFirstLast="${true}"
          aria-label="Navegación de páginas"
          @lmc-page-change="${this._handlePageChange}"
        ></lmc-pagination>
        <div class="content">
          <lmc-text-display level="p">
            Estás viendo la página: ${this._currentPage}
          </lmc-text-display>
        </div>
      </lmc-container>
    `;
  }
}