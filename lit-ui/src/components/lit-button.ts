import { LitElement, html, customElement, property, css } from 'lit-element';

/**
 * button
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('lit-button')
export class LitButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .btn {
      height: 30px;
      padding: 0 8px;
      border: none;
      border-radius: 4px;
      background: #6775CD;
      color: #fff;
      box-shadow: none;
      line-height: normal;
      text-align: center;
      cursor: pointer;
      outline: none;
    }

    .btn:hover {
      filter: saturate(.9) brightness(1.2);
    }
  `;

  /**
   * 是否禁用
   */
  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <button class="btn" @click=${this._onClick} part="button">
        <slot></slot>
      </button>
    `;
  }

  private _onClick() {
    let event = new CustomEvent('litClick');
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-button': LitButton;
  }
}