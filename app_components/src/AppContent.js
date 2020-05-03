import { LitElement, html, css } from "lit-element";

export class AppContent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 2rem;
        height: 5 rem;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      year: { type: Number },
    };
  }
  render() {
    return html` <form @submit=${this._onSubmit}>
      <label
        >Please choose a year:
        <input type="number" name="year" min="2020" max="2030" />
      </label>

      <label
        >Please choose a title:
        <input type="text" name="title" />
      </label>
      <button>OK</button>
    </form>`;
  }

  _onSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd);
    console.log(data, event.target.elements);
    this.dispatchEvent(new CustomEvent("input-change", { detail: data }));
  }
}

window.customElements.define("app-content", AppContent);
