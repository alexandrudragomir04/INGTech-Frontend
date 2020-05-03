import { LitElement, html,css } from "lit-element"

import "./AppItem"

export class AppList extends LitElement {
  static get properties() {
    return {
        list:{type:Array}
    };
  }

  static get styles(){
    return css`
    :host{
      display:flex;
      width:100%;
      flex-direction:column;
      justify-content:center;
      align-items:center;
    }
    `
  }
  constructor() {
    super();
    this.list=[]

  }
  render() {
     return html`
        <ul>${this.list.map(todoItem=> html`<app-item day='${todoItem.day}' todoText='${todoItem.todoText}'></app-item>`)}</ul>
        `
      }


}

  

window.customElements.define('app-list',AppList)