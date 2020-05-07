import { LitElement, html, css } from "lit-element"


export class AppItem extends LitElement {
    static get properties() {
        return {
            id:{
                type:Number
            },
                day:{
                    type:String
                },
                todoText:{
                    type:String
                }
            
        };
    }

    static get styles() {
        return css`
        :host{
            display:flex;
            flex-direction:column;
            border:1px solid black;
            padding-right:15px;
            padding-top:5px;
            padding-bottom:5px;
            padding-left:20px;
            margin-bottom:5%;
            border-radius:5px;
            color:white;
            background-color:black;
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
            border-radius:10px;
            background-color:black;
            color:white;
            margin-left:2%;
          }
    `;

    }

    constructor() {
        super();

    }
    render() {
        return html`   
        <form id="listItem"'>
    <div class='id' hidden>${this.id}</div>
    <div class="todoDay">${this.day}</div>         
    <div class="todoText">${this.todoText}</div>
        </form>
        <button @click='${this.onDelete}}' id='deleteButton'>Delete</button>
        `
    }

    onDelete() {
        const list = window.localStorage.getItem('ds-items')?JSON.parse(window.localStorage.getItem('ds-items')):[]
        if(list.length>0){
            const deletedIndex = list.find((item) => item.id === this.id);
            if (deletedIndex) list.splice(deletedIndex, 1);
            window.localStorage.setItem('ds-items',JSON.stringify(list));
        }
        this.remove(this)
        this.dispatchEvent('removedItem',{bubbles:true,cancelable:true})
    }
}

window.customElements.define("app-item", AppItem);