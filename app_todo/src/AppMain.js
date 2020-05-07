import { LitElement, html, css } from "lit-element";

import "./AppList";

export class AppMain extends LitElement {
  static get properties() {
    return {
      list: [],
      categoriesAndColors: [],
    };
  }

  static get styles() {
    return css`  
    :host{
        display:flex;
        margin-top:5%;
        flex-direction:column;
        font-family:'Verdana';
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
    #add-todo{
      text-align:center;
      flex-direction:column;
      display:flex;
    }
    #list{
      display:flex;
      flex-direction:column;
      align-items:center;
      width:100%;
    }
    #legend{
      display:flex;
      flex-direction:column;
      margin-left:15%;
      margin-top:5%;
      position:fixed;
    }
    #content{
      display:flex;
      flex-direction:row;
      width:100%;
    }
    `;
  }

  constructor() {
    super();
    const jsonLocalStorageList = JSON.parse(
      window.localStorage.getItem("ds-items")
    );
    this.list = jsonLocalStorageList ? jsonLocalStorageList : [];
    this.categoriesAndColors = ["black", "orange", "blue", "green", "red"];
  }

  render() {
    return html` 
    <div id='add-todo'>
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
       <label
       >Please specify category:
       <select name='category'>
      <option  value='${this.categoriesAndColors[0]}'>Late</option>
      <option  value='${this.categoriesAndColors[1]}'>Medium</option>
      <option  value='${this.categoriesAndColors[2]}'>Important</option>
      <option  value='${this.categoriesAndColors[3]}'>Very Important</option>
      <option  value='${this.categoriesAndColors[4]}'>Optional</option>
    </select>
      </label> 
      <button>Add Todo</button>
    </form>
    </div>

    
    <div id='content'>   
      <div id='legend'>
      <h2 '>Legend</h2>
      <h3 style='color:${this.categoriesAndColors[0]}'>Late</h3>
      <h3 style='color:${this.categoriesAndColors[1]}'>Medium</h3>
      <h3 style='color:${this.categoriesAndColors[2]}'>Important</h3>
      <h3 style='color:${this.categoriesAndColors[3]}'>Very important</h3>
      <h3 style='color:${this.categoriesAndColors[4]}'>Optional</h3>
     </div>
     <div id='list'>
      <h1> Todo List</h1>
        <app-list .list='${this.list}'></app-list>
      </div>
    </div>
    `;
  }

  _onSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd);
    this.list = [
      ...this.list,
      {
        id: Date.now(),
        day: data.day,
        todoText: data.todo,
        color: data.category,
      },
    ];
    window.localStorage.setItem("ds-items", JSON.stringify(this.list));
  }
}
