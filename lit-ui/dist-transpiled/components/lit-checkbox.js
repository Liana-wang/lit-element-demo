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
        <div @click=${this._onClick}>
            <span class="checkbox ${this.checked ? 'checkbox-checked' : ''} ${this.disabled ? 'box-disabled' : ''}">
                <input class="checkbox-input ${this.disabled ? 'input-disabled' : ''}" type="checkbox" ?checked=${this.checked} ?disabled="${this.disabled}"/>
            </span>
            <span class="label"><slot></slot></span>
        </div>
    `;
    }
    _onClick() {
        if (!this.disabled) {
            this.checked = !this.checked;
            let event = new CustomEvent('litClick', {
                detail: {
                    checked: this.checked
                }
            });
            this.dispatchEvent(event);
        }
    }
};
LitCheckBox.styles = css `
    :host {
        display: inline-block;
        padding: 16px;
        max-width: 800px;
        cursor: pointer;
    }

    .checkbox {
        display: inline-block;
        position: relative;
        width: 14px;
        height: 14px;
        border: 1px solid #d3d4db;
        border-radius: 2px;
        box-sizing: border-box;
        vertical-align: middle;
        background: #fff;
    }

    .checkbox:hover {
        border-color: #779eea;
    }

    .box-disabled {
        background: rgba(228, 230, 237, 0.4);
        border: 1px solid #d3d4db;
        cursor: default;
    }

    .box-disabled:hover {
        border-color: #d3d4db;
    }

    .checkbox-checked {
        border-color: #779eea;
        background: #779eea;
    }

    .checkbox-checked::after {
        position: absolute;
        left: 3px;
        top: 0;
        width: 4px;
        height: 7px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg);
        content: '';
    }

    .checkbox-input {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 0;
        margin: 0;
        opacity: 0;
        cursor: default;
    }

    .label {
        display: inline-block;
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