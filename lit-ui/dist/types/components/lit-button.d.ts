import { LitElement } from 'lit-element';
/**
 * An example element.
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
    /** 测试数据 */
    data: never[];
    /**
     * The number of times the button has been clicked.
     */
    count: number;
    render(): import("lit-element").TemplateResult;
    private _onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'lit-button': LitButton;
    }
}
//# sourceMappingURL=lit-button.d.ts.map