import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lit-button')
export class LitButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled = false;

  /** 测试数据 */
  @property({ type: Array })
  data = []

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  render() {
    return html`
      <h1>Hello, ${JSON.stringify(this.data)}!</h1>
      <p>count: ${this.count}</p>
      <button @click=${this._onClick} part="button">
        <slot></slot>
      </button>
    `;
  }

  private _onClick() {
    this.count++;
    let event = new CustomEvent('lit-event', {
      detail: {
        count: this.count
      }
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-button': LitButton;
  }
}