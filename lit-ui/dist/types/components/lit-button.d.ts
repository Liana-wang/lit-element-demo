import { LitElement } from 'lit-element';
/**
 * button
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class LitButton extends LitElement {
    static styles: import("lit-element").CSSResult;
    /**
     * 是否禁用
     */
    disabled: boolean;
    render(): import("lit-element").TemplateResult;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'lit-button': LitButton;
    }
}
//# sourceMappingURL=lit-button.d.ts.map