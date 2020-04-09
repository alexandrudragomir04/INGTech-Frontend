export function read(){
    const data=window.localStorage.getItem('ds--list--contacts')
    return data===null ? [] : JSON.parse(data)
}

function write(contacts){
    const data = JSON.stringify(contacts)
    window.localStorage.setItem('ds--list--contacts',data)

}

export function append(contact){
const contacts = read();
contacts.push(contact);
write(contacts);
}

