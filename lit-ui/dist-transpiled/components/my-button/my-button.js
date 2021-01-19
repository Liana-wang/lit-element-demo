/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
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
let MyButton = class MyButton extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = 'World';
        this.data = [];
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    render() {
        return html `
      <h1>Hello, ${JSON.stringify(this.data)}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
    }
    _onClick() {
        this.count++;
        let event = new CustomEvent('myEvent', {
            detail: {
                count: this.count
            }
        });
        this.dispatchEvent(event);
    }
    foo() {
        return 'foo';
    }
};
MyButton.styles = css `
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;
__decorate([
    property()
], MyButton.prototype, "name", void 0);
__decorate([
    property({ type: Array })
], MyButton.prototype, "data", void 0);
__decorate([
    property({ type: Number })
], MyButton.prototype, "count", void 0);
MyButton = __decorate([
    customElement('my-button')
], MyButton);
export { MyButton };
//# sourceMappingURL=my-button.js.map