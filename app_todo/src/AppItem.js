import { LitElement, html, css } from "lit-element"


export class AppItem extends LitElement {
    static get properties() {
        return {
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
    `;

    }

    constructor() {
        super();

    }
    render() {
        console.log(this.day)
        return html`
    <li>       
    <div class="todoDay">${this.day}</div>         
    <div class="todoText">${this.todoText}</div>
    </li>
        `
    }

}

window.customElements.define("app-item", AppItem);