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
    #listItem{
    display:flex;
    flex-direction:row;
    }

    `
  }
  constructor() {
    super();
    this.list=[]

  }
  render() {
     return html`
     <h1> Todo List</h1>
        <ul>${this.list.map(todoItem=> html`
        <app-item id='${todoItem.id}' day='${todoItem.day}' todoText='${todoItem.todoText}'></app-item>
        `)}</ul>
        `
      }

     

}

  

window.customElements.define('app-list',AppList)