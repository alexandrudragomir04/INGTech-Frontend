import { LitElement, html, css } from "lit-element"


export class AppItem extends LitElement {
    static get properties() {
        return {
            idd: {
                type: Number
            },
            day: {
                type: String
            },
            todoText: {
                type: String
            },
            color: {
                type: String
            }

        };
    }

    static get styles() {
        return css`
        :host{
            display:flex;
            flex-direction:column;
            margin-bottom:2%;
            border-radius:5px;
            color:white;
            align-items:center;
            text-align:center;
            min-width:200px;
            
        };
        .todoDay{
            font-size:25px;
            font-style:bold;
            width:200px;

        };
        .todoText{
            font-size:15px;
            width:200px;
            height:fit-content;
            overflow-wrap:break-word;
        }
        #deleteButton{
            border-radius:1px solid white;
            margin-top:5%;
            border-radius:5px;
            height:25px;
            background-color:black;
            color:white;
            margin-left:2%;
          }
          #app-item{
              display:flex;
              position:relative;
              flex-direction:column;
              width:100%;
              height:100%;
            align-items:center;
            justify-content:center;
            padding-top:5px;
            padding-bottom:5px;
            color:white;
          }
    `;

    }

    constructor() {
        super();
        this.color = ''

    }
    render() {
        return html`
        <div id='app-item' style='border-radius:7.5px;border:1px solid ${this.color};  background-color:${this.color};'>   
        <form id="listItem">
    <div  hidden>${this.idd}</div>
    <div class="todoDay">${this.day}</div>         
    <div class="todoText">${this.todoText}</div>
        </form>
        <button @click='${this.onDelete}}' id='deleteButton'>Delete</button>
        </div>
        `
    }

    onDelete() {
        const list = window.localStorage.getItem('ds-items') ? JSON.parse(window.localStorage.getItem('ds-items')) : []
        if (list.length > 0) {
            const deletedIndex = list.find((item) => item.idd === this.idd);
            if (deletedIndex) list.splice(deletedIndex, 1);
            window.localStorage.setItem('ds-items', JSON.stringify(list));
        }
        this.remove(this)
        
    }
}

window.customElements.define("app-item", AppItem);