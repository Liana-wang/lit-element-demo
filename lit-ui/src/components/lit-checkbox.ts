import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lit-checkbox')
export class LitCheckBox extends LitElement {
    static styles = css`
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

    /**
     * 是否禁用
     */
    @property({ type: Boolean })
    disabled = false;

    /**
     * 是否checked
     */
    @property({ type: Boolean })
    checked = false;

    render() {
        return html`
        <input type="checkbox" @click=${this._onClick} checked=${this.checked}/>
        <span class="label"><slot></slot></span>
    `;
    }

    private _onClick() {
        this.checked = !this.checked
        let event = new CustomEvent('litClick', {
            detail: {
                checked: this.checked
            }
        });
        this.dispatchEvent(event);
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'lit-checkbox': LitCheckBox;
    }
}