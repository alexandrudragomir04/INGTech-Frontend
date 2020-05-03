import { LitElement, html } from "lit-element";

import "./AppHeader";
import "./AppContent";
import "./AppFooter";

export class AppMain extends LitElement {
  static get properties() {
    return {
      year: { type: Number },
      title: { type: String },
    };
  }
  constructor() {
    super();
    this.year = 2020;
    this.title = "My app :(";
  }
  render() {
    return html`
    <app-header .title=${this.title}></app-header>
    <app-content @input-change=${this._ChangeEvent}></app-content>
    <app-footer .year=${this.year}></footer>`;
  }

  _ChangeEvent(event) {
    if (event.detail.year) this.year = event.detail.year;
    if (event.detail.title) this.title = event.detail.title;
  }
}
