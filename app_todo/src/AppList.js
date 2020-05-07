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
    #deleteButton{
      height:54px;
      border-radius:10px;
      background-color:black;
      color:white;
      margin-left:2%;
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
        <form id="listItem" @submit='onDelete'>
        <app-item id='${todoItem.id}' day='${todoItem.day}' todoText='${todoItem.todoText}'></app-item>
        <button id='deleteButton'>Delete</button>
        </form>
        `)}</ul>
        `
      }

      onDelete(event) {
        event.preventDefault();
        //nu inteleg dc doar da refresh la pagina fara sa faca nimic
        console.log('asd')
      //   const fd = new FormData(event.target);
      //   const data = Object.fromEntries(fd);
      //   console.log(data)
      //   const deletedItemIndex = this.list.find((item) => item.id === data.id);
      //   if (deletedItemIndex) {
      //     this.todos.splice(deletedItemIndex, 1);
      //   }
      //   window.localStorage.setItem("ds-todos", JSON.stringify(this.list));
      }

}

  

window.customElements.define('app-list',AppList)