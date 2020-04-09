const main = {
    users: [],
    error: '',
    async init() {
        console.log('hello' +document.getElementById(list))
        const users =await  this.fetchUsers();
        if (users) {
            this.users = users;
        } else {
            this.error = 'an error has ocurred!';
        }
        this.render();
    },
    async fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return null;
        }
    },
    render() {
        if (this.error) {
            document.getElementById('error').textContent = this.error;
        } else {
            const items = this.users.map(user => `<li>${user.name} ${user.email} </li>`);
            const list = document.getElementById('list');
            list.innerHTML = items.join("");
        }
    },
    
};
