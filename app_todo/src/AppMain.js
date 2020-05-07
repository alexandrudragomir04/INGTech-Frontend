import { LitElement, html,css } from "lit-element"

import "./AppList"

export class AppMain extends LitElement {
  static get properties() {
    return {
        list:[]
    };
  }

  static get styles(){
    return css`  
    :host{
        display:flex;
        margin-top:5%;
        flex-direction:column;
        font-family:'Verdana';
        justify-content:center;
        align-items:center;
    }
    h1{
        margin-top:5%;
    }
    h2{
        font-size:30px;
    }
    form{
        display:flex;
        flex-direction:row;
        align:items:center;
    }
    input{
        margin-right:25px;
        padding:10px;
    }
    button{
        border-radius:15px;
        font-size:15px;
        color:white;
        background-color:black;
        padding:10px;
    }
    `
  }

  constructor() {
    super();
    const jsonLocalStorageList = JSON.parse(window.localStorage.getItem('ds-items'))
    this.list=jsonLocalStorageList?jsonLocalStorageList:[]
  }

  render() {
    return html` 
    <h2>Add todo</h2>  
    <form @submit=${this._onSubmit}>
    <label
        >Please specify a day:
        <input type="text" name="day"/>
      </label>
      <label
        >Please specify todo:
        <input type="text" name="todo"/>
      </label>
      <button>Add Todo</button>
    </form>
    <app-list .list='${this.list}'></app-list>
    `
  }

   async _onSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd);
    this.list = [...this.list, { id:Date.now(),day: data.day, todoText: data.todo }]    
    window.localStorage.setItem("ds-items",JSON.stringify(this.list))
    await this.requestUpdate()

  }

}
