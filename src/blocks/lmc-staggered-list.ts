import { LitElement, html, css } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
import { customElement, property } from 'lit/decorators.js';

@customElement('lmc-staggered-list')
export class LmcStaggeredList extends LitElement {
    static styles = css`
        :host {
            display: block;
        }

        ::slotted(*) {
            opacity: 0;
            transition: opacity var(--lmc-staggered-list-item-animation-duration, 0.5s) var(--lmc-staggered-list-item-animation-timing-function, ease-in-out);
        }

        :host([animationType="fade"]) ::slotted(*) {
            animation-name: fadeIn;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }


        :host([direction="horizontal"]) {
            display: flex;
            /* flex-wrap: wrap;  Optional: For wrapping items to the next line */
        }

    `;

    @property({ type: Number }) delay = 200;
    @property({ type: String, reflect: true }) animationType: 'none' | 'fade' = 'none';
    @property({ type: String, reflect: true }) direction = 'vertical';

    @queryAssignedElements()
    slottedElements!: Array<HTMLElement>;

    protected firstUpdated() {
        this._staggerChildren();
    }

    private _staggerChildren() {
        this.slottedElements.forEach((el, index) => {
            const animationDelay = `${this.delay * index}ms`;
            el.style.animationDelay = animationDelay;
            el.style.transitionDelay = animationDelay; // Apply delay even without animationType
            if (this.animationType !== 'none') {
                el.style.animationFillMode = 'both';
                el.style.animationDuration = 'var(--lmc-staggered-list-item-animation-duration, 0.5s)';
            }
            el.style.opacity = '1'; // Make visible after delay
        });
    }

    render() {
        return html`<slot></slot>`;
    }
}