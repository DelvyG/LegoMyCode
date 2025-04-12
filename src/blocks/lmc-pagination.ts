import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { range } from '../../src/utils/range'; // Importa la función range

@customElement('lmc-pagination')
export class LmcPagination extends LitElement {
    static styles = css`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-family: sans-serif;
        }
         
        nav {
          padding: 0.5rem;
          background-color: var(--lmc-pagination-background-color, #f0f0f0);
          color: var(--lmc-pagination-text-color, #333);
          border-radius: var(--lmc-pagination-border-radius, 4px);
        }
        .page-number {
          padding:  0.5rem 1rem;
          border: none;
          background-color: transparent;
          color: inherit;
          cursor: pointer;
          border-radius: 4px;
          text-decoration: none;
        }
        button:disabled,
        .page-number.disabled {
          color: #999;
          cursor: not-allowed;
        }
        .current {
          font-weight: bold;
          color:  #fff;
          background-color:  #007bff;
          padding:  0.5rem 1rem;
          border: none;
          border-radius: 4px;
        }
        button {
          padding: 0.5rem 1rem;
          border: none;
          background-color: transparent;
          color: inherit;
          cursor: pointer;
          border-radius: 4px;
        }
    `;

    @property({ type: Number }) currentPage = 1;
    @property({ type: Number }) totalPages = 10;
    @property({ type: Number }) maxPagesVisible = 5;
    @property({ type: Boolean }) showFirstLast = true;
    @property({ type: String }) ariaLabel = 'Paginación';

    // Observa los cambios en currentPage
    updated(changedProperties: Map<string | number | symbol, unknown>) {
        if (changedProperties.has('currentPage')) {
            // Solicita una actualización del DOM cuando currentPage cambia
            this.requestUpdate();
        }
    }

    // Función para generar los números de página visibles
    private _getPageNumbers(): number[] {
        let startPage = Math.max(1, this.currentPage - Math.floor(this.maxPagesVisible / 2));
        let endPage = Math.min(this.totalPages, startPage + this.maxPagesVisible - 1);
        
        // Adjust start page if end page is too close to the total pages
        if (endPage - startPage + 1 < this.maxPagesVisible) {
            startPage = Math.max(1, endPage - this.maxPagesVisible + 1);
        }

        console.log('currentPage:', this.currentPage);
        console.log('totalPages:', this.totalPages);
        console.log('maxPagesVisible:', this.maxPagesVisible);
        console.log('startPage:', startPage);
        console.log('endPage:', endPage);
        
        return range(startPage, endPage);
    }

    render() {
        // Generar los números de página
        const pageNumbers = this._getPageNumbers();
        console.log('pageNumbers:', pageNumbers);
        
        return html`
            <nav aria-label="${this.ariaLabel}">
                ${this.showFirstLast && this.currentPage !== 1
                    ? html`<button @click="${() => this._goToPage(1)}">Primera</button>`
                    : ''}
                <button @click="${this._goToPreviousPage}" ?disabled="${this.currentPage === 1}">Anterior</button>
                
                ${pageNumbers.map(page => html`
                    <a
                        href="#"
                        class="page-number ${page === this.currentPage ? 'current' : ''}"
                        @click="${(e: Event) => {
                            e.preventDefault(); // Evita la navegación predeterminada
                            this._goToPage(page);
                        }}"
                    >${page}</a>
                `)}
                
                <button @click="${this._goToNextPage}" ?disabled="${this.currentPage === this.totalPages}">Siguiente</button>
                ${this.showFirstLast && this.currentPage !== this.totalPages
                    ? html`<button @click="${() => this._goToPage(this.totalPages)}">Última</button>`
                    : ''}
            </nav>
        `;
    }

    private _goToPreviousPage() {
        if (this.currentPage > 1) {
            this._dispatchPageChangeEvent(this.currentPage - 1);
        }
    }

    private _goToNextPage() {
        if (this.currentPage < this.totalPages) {
            this._dispatchPageChangeEvent(this.currentPage + 1);
        }
    }

    private _goToPage(page: number) {
        if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
            this._dispatchPageChangeEvent(page);
        }
    }

    private _dispatchPageChangeEvent(page: number) {
        this.dispatchEvent(new CustomEvent('lmc-page-change', {
            detail: { page },
            bubbles: true,
            composed: true
        }));
    }
}