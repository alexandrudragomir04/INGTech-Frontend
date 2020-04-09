import {append} from './storage.js'

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

}

function render() {

}


