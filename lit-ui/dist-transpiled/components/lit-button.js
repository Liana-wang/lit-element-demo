var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, customElement, property, css } from 'lit-element';
/**
 * button
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
    }
    render() {
        return html `
      <button class="btn" @click=${this._onClick} part="button">
        <slot></slot>
      </button>
    `;
    }
    _onClick() {
        let event = new CustomEvent('litClick');
        this.dispatchEvent(event);
    }
};
LitButton.styles = css `
    :host {
      display: inline-block;
    }

    .btn {
      height: 30px;
      padding: 0 8px;
      border: none;
      border-radius: 4px;
      background: #6775CD;
      color: #fff;
      box-shadow: none;
      line-height: normal;
      text-align: center;
      cursor: pointer;
      outline: none;
    }

    .btn:hover {
      filter: saturate(.9) brightness(1.2);
    }
  `;
__decorate([
    property({ type: Boolean })
], LitButton.prototype, "disabled", void 0);
LitButton = __decorate([
    customElement('lit-button')
], LitButton);
export { LitButton };
//# sourceMappingURL=lit-button.js.map