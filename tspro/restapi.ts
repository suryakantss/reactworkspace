
let url:string='https://jsonplaceholder.typicode.com/users';

fetch(url).then(data => data.json()).then(users => {
    users.forEach(u => console.log(u.username + ", " + u))
});