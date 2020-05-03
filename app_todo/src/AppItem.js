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
        };
        .todoDay{
            font-size:25px;
            font-style:bold;
            position:relative;
            width:100%;
            height:50%;
        };
        .todoText{
            font-size:15px;
            position:relative;
            width:100%;
            height:50%;
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