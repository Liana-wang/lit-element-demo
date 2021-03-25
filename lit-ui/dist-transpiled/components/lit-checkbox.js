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
var LitCheckBox = /** @class */ (function (_super) {
    __extends(LitCheckBox, _super);
    function LitCheckBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 是否禁用
         */
        _this.disabled = false;
        /**
         * 是否checked
         */
        _this.checked = false;
        return _this;
    }
    LitCheckBox.prototype.render = function () {
        return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div @click=", ">\n            <span class=\"checkbox ", " ", "\">\n                <input class=\"checkbox-input ", "\" type=\"checkbox\" ?checked=", " ?disabled=\"", "\"/>\n            </span>\n            <span class=\"label\"><slot></slot></span>\n        </div>\n    "], ["\n        <div @click=", ">\n            <span class=\"checkbox ", " ", "\">\n                <input class=\"checkbox-input ", "\" type=\"checkbox\" ?checked=", " ?disabled=\"", "\"/>\n            </span>\n            <span class=\"label\"><slot></slot></span>\n        </div>\n    "])), this._onClick, this.checked ? 'checkbox-checked' : '', this.disabled ? 'box-disabled' : '', this.disabled ? 'input-disabled' : '', this.checked, this.disabled);
    };
    LitCheckBox.prototype._onClick = function () {
        if (!this.disabled) {
            this.checked = !this.checked;
            var event_1 = new CustomEvent('litClick', {
                detail: {
                    checked: this.checked
                }
            });
            this.dispatchEvent(event_1);
        }
    };
    LitCheckBox.styles = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    :host {\n        display: inline-block;\n        padding: 16px;\n        max-width: 800px;\n        cursor: pointer;\n    }\n\n    .checkbox {\n        display: inline-block;\n        position: relative;\n        width: 14px;\n        height: 14px;\n        border: 1px solid #d3d4db;\n        border-radius: 2px;\n        box-sizing: border-box;\n        vertical-align: middle;\n        background: #fff;\n    }\n\n    .checkbox:hover {\n        border-color: #779eea;\n    }\n\n    .box-disabled {\n        background: rgba(228, 230, 237, 0.4);\n        border: 1px solid #d3d4db;\n        cursor: default;\n    }\n\n    .box-disabled:hover {\n        border-color: #d3d4db;\n    }\n\n    .checkbox-checked {\n        border-color: #779eea;\n        background: #779eea;\n    }\n\n    .checkbox-checked::after {\n        position: absolute;\n        left: 3px;\n        top: 0;\n        width: 4px;\n        height: 7px;\n        border: 2px solid #fff;\n        border-top: 0;\n        border-left: 0;\n        transform: rotate(45deg);\n        content: '';\n    }\n\n    .checkbox-input {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        cursor: default;\n    }\n\n    .label {\n        display: inline-block;\n    }\n  "], ["\n    :host {\n        display: inline-block;\n        padding: 16px;\n        max-width: 800px;\n        cursor: pointer;\n    }\n\n    .checkbox {\n        display: inline-block;\n        position: relative;\n        width: 14px;\n        height: 14px;\n        border: 1px solid #d3d4db;\n        border-radius: 2px;\n        box-sizing: border-box;\n        vertical-align: middle;\n        background: #fff;\n    }\n\n    .checkbox:hover {\n        border-color: #779eea;\n    }\n\n    .box-disabled {\n        background: rgba(228, 230, 237, 0.4);\n        border: 1px solid #d3d4db;\n        cursor: default;\n    }\n\n    .box-disabled:hover {\n        border-color: #d3d4db;\n    }\n\n    .checkbox-checked {\n        border-color: #779eea;\n        background: #779eea;\n    }\n\n    .checkbox-checked::after {\n        position: absolute;\n        left: 3px;\n        top: 0;\n        width: 4px;\n        height: 7px;\n        border: 2px solid #fff;\n        border-top: 0;\n        border-left: 0;\n        transform: rotate(45deg);\n        content: '';\n    }\n\n    .checkbox-input {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        cursor: default;\n    }\n\n    .label {\n        display: inline-block;\n    }\n  "])));
    __decorate([
        property({ type: Boolean })
    ], LitCheckBox.prototype, "disabled", void 0);
    __decorate([
        property({ type: Boolean })
    ], LitCheckBox.prototype, "checked", void 0);
    LitCheckBox = __decorate([
        customElement('lit-checkbox')
    ], LitCheckBox);
    return LitCheckBox;
}(LitElement));
export { LitCheckBox };
var templateObject_1, templateObject_2;
//# sourceMappingURL=lit-checkbox.js.map