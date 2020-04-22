import {
    read,
    append,
    remove,
    edit
} from './storage.js';

export function init() {
    document.getElementById('form-add').addEventListener('submit', onSubmitAdd);
    document.getElementById('form-delete').addEventListener('submit', onSubmitDelete);
    document.getElementById('form-delete').addEventListener('change', onChangeDelete);
    navigator.serviceWorker.register('sw.js');
    render();
}

function onSubmitAdd(event) {
    let contacts = read()
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    data.set('id', contacts.length+1);
    const contact = Object.fromEntries(data);
    append(contact);
    render();
}

function onSubmitDelete(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const contacts = read();
    data.getAll('id').forEach(id => {
        const contact = contacts.find(contact => contact.id === id);
        if (contact) {
            remove(contact);
        }
    });
    form.reset();
    form.elements.delete.disabled = true;
    render();
}

function onChangeDelete(event) {
    const {
        form
    } = event.target;
    const data = new FormData(form);
    const hasChecked = data.getAll('id').length > 0;
    form.elements.delete.disabled = !hasChecked;
}



function onSubmitEdit(event,contact) {
    event.preventDefault();
    const {
        form
    } = event.target;

    const data = new FormData(form);


    //nush cum sa-i dau id-ul
    data.set('id', 0);
    const contactObj = Object.fromEntries(data);
    edit(contactObj)
    render()


}




function onChangeEdit(event) {
    let edit = event.path[0]
    edit.hidden = true
    let save = event.path[2].children[1].children[1]
    save.hidden = false;
    let cancel = event.path[2].children[1].children[2]
    cancel.hidden = false;
    for (let i = 1; i < 4; i++) {
        event.path[2].children[0].children[i].readOnly = false;
    }

    event.preventDefault();
    const {
        form
    } = event.target;

    const data = new FormData(form);
    const oldContact = Object.fromEntries(data);
    save.addEventListener('click', onSubmitEdit);


}

function render() {
    const contacts = read();
    const items = contacts.map(
        contact => `
    <li>
      <label>
        <input type="checkbox" name="id" value="${contact.id}">
        <input type="text" name="name" id="name" placeholder="Name" value=${contact.name} readonly required/>
        <input type="email" name="email" id="email" placeholder="E-mail" value=${contact.email} readonly/>
        <input type="tel" name="phone" id="phone" placeholder="Phone" value=${contact.phone} readonly/>
      </label>
      <label >
      <button type="button" class="editClass" name="id" > Edit</button>
      <button type="button" class="editClass" name="id" hidden > Save</button>
      <button type="cancel" class="editClass" name="id" hidden > Cancel</button>
      </label>
    </li>
  `
    );
    document.getElementById('list').innerHTML = items.join('');
    document.getElementById('form-delete').hidden = contacts.length === 0;
    let elements = document.getElementsByClassName('editClass')
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', onChangeEdit)
    }
}