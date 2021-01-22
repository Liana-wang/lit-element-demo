var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
let LitButton = class LitButton extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * 是否禁用
         */
        this.disabled = false;
        /** 测试数据 */
        this.data = [];
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    render() {
        return html `
      <h1>Hello, ${JSON.stringify(this.data)}!</h1>
      <p>count: ${this.count}</p>
      <button @click=${this._onClick} part="button">
        <slot></slot>
      </button>
    `;
    }
    _onClick() {
        this.count++;
        let event = new CustomEvent('litClick', {
            detail: {
                count: this.count
            }
        });
        this.dispatchEvent(event);
    }
};
LitButton.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property({ type: Boolean })
], LitButton.prototype, "disabled", void 0);
__decorate([
    property({ type: Array })
], LitButton.prototype, "data", void 0);
__decorate([
    property({ type: Number })
], LitButton.prototype, "count", void 0);
LitButton = __decorate([
    customElement('lit-button')
], LitButton);
export { LitButton };
//# sourceMappingURL=lit-button.js.map