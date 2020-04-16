import {append,read,write} from './storage.js'

export function init() {
    window.addEventListener('DOMContentLoaded',onLoad);

}


function onLoad(){
    document.getElementById("form-add").addEventListener('submit', onSubmitAdd);
    document.getElementById("form-delete").addEventListener('submit', onSubmitDelete);
    render();

}

function onSubmitAdd(event) {
event.preventDefault();
console.log(event.target)
const formData = new FormData(event.target);
const data = Object.fromEntries(formData)
console.log(data)
append(data)
render();
}

function onSubmitDelete(event) {
    event.preventDefault()
    console.log(event)
    const contacts = read();
    const list = document.getElementById('list');
    const newCts = new Array();
    for (let i = 0; i < contacts.length; i++) {
        console.log(list)
        if (!list.children[i].getElementsByTagName('input')[0].checked) {
            newCts.push(contacts[i]);
        }
    }
    write(newCts);
    render();
}

function render() {
const contacts = read();
const items = contacts.map(item => `<li><input type='checkbox' name='delete'> ${item.name} &lt; ${item.email} &gt; ${item.phone}</li>`)
document.getElementById("list").innerHTML = items.join(' ')
const formDelete = document.getElementById("form-delete-button").hidden=contacts.length === 0;
}


