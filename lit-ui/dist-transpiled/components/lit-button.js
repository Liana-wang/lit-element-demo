var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var LitButton = /** @class */ (function (_super) {
    __extends(LitButton, _super);
    function LitButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 是否禁用
         */
        _this.disabled = false;
        /** 测试数据 */
        _this.data = [];
        /**
         * The number of times the button has been clicked.
         */
        _this.count = 0;
        return _this;
    }
    LitButton.prototype.render = function () {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <h1>Hello, ", "!</h1>\n      <p>count: ", "</p>\n      <button @click=", " part=\"button\">\n        <slot></slot>\n      </button>\n    "], ["\n      <h1>Hello, ", "!</h1>\n      <p>count: ", "</p>\n      <button @click=", " part=\"button\">\n        <slot></slot>\n      </button>\n    "])), JSON.stringify(this.data), this.count, this._onClick);
    };
    LitButton.prototype._onClick = function () {
        this.count++;
        var event = new CustomEvent('lit-event', {
            detail: {
                count: this.count
            }
        });
        this.dispatchEvent(event);
    };
    LitButton.styles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    :host {\n      display: block;\n      border: solid 1px gray;\n      padding: 16px;\n      max-width: 800px;\n    }\n  "], ["\n    :host {\n      display: block;\n      border: solid 1px gray;\n      padding: 16px;\n      max-width: 800px;\n    }\n  "])));
    __decorate([
        property({ type: Boolean })
    ], LitButton.prototype, "disabled");
    __decorate([
        property({ type: Array })
    ], LitButton.prototype, "data");
    __decorate([
        property({ type: Number })
    ], LitButton.prototype, "count");
    LitButton = __decorate([
        customElement('lit-button')
    ], LitButton);
    return LitButton;
}(LitElement));
export { LitButton };
var templateObject_1, templateObject_2;
//# sourceMappingURL=lit-button.js.map