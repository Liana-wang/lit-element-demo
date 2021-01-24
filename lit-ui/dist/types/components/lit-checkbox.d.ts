import { LitElement } from 'lit-element';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class LitCheckBox extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * 是否禁用
     */
    disabled: boolean;
    /**
     * 是否checked
     */
    checked: boolean;
    render(): import("lit-element").TemplateResult;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'lit-checkbox': LitCheckBox;
    }
}
//# sourceMappingURL=lit-checkbox.d.ts.map