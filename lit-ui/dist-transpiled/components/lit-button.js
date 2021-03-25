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
 * button
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
        return _this;
    }
    LitButton.prototype.render = function () {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      <button class=\"btn\" @click=", " part=\"button\">\n        <slot></slot>\n      </button>\n    "], ["\n      <button class=\"btn\" @click=", " part=\"button\">\n        <slot></slot>\n      </button>\n    "])), this._onClick);
    };
    LitButton.prototype._onClick = function () {
        var event = new CustomEvent('litClick');
        this.dispatchEvent(event);
    };
    LitButton.styles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    :host {\n      display: inline-block;\n    }\n\n    .btn {\n      height: 30px;\n      padding: 0 8px;\n      border: none;\n      border-radius: 4px;\n      background: #6775CD;\n      color: #fff;\n      box-shadow: none;\n      line-height: normal;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n    }\n\n    .btn:hover {\n      opacity: 0.8;\n    }\n  "], ["\n    :host {\n      display: inline-block;\n    }\n\n    .btn {\n      height: 30px;\n      padding: 0 8px;\n      border: none;\n      border-radius: 4px;\n      background: #6775CD;\n      color: #fff;\n      box-shadow: none;\n      line-height: normal;\n      text-align: center;\n      cursor: pointer;\n      outline: none;\n    }\n\n    .btn:hover {\n      opacity: 0.8;\n    }\n  "])));
    __decorate([
        property({ type: Boolean })
    ], LitButton.prototype, "disabled", void 0);
    LitButton = __decorate([
        customElement('lit-button')
    ], LitButton);
    return LitButton;
}(LitElement));
export { LitButton };
var templateObject_1, templateObject_2;
//# sourceMappingURL=lit-button.js.map