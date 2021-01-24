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
let LitCheckBox = class LitCheckBox extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * 是否禁用
         */
        this.disabled = false;
        /**
         * 是否checked
         */
        this.checked = false;
    }
    render() {
        return html `
        <input type="checkbox" @click=${this._onClick} checked=${this.checked}/>
        <span class="label"><slot></slot></span>
    `;
    }
    _onClick() {
        this.checked = !this.checked;
        let event = new CustomEvent('litClick', {
            detail: {
                checked: this.checked
            }
        });
        this.dispatchEvent(event);
    }
};
LitCheckBox.styles = css `
    :host {
      display: inline-block;
      padding: 16px;
      max-width: 800px;
    }

    .label {
        display: inline-block;
        margin-left: 10px;
    }
  `;
__decorate([
    property({ type: Boolean })
], LitCheckBox.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], LitCheckBox.prototype, "checked", void 0);
LitCheckBox = __decorate([
    customElement('lit-checkbox')
], LitCheckBox);
export { LitCheckBox };
//# sourceMappingURL=lit-checkbox.js.map