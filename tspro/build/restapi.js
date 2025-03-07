var url = 'https://jsonplaceholder.typicode.com/users';
fetch(url).then(function (data) { return data.json(); }).then(function (users) {
    users.forEach(function (u) { return console.log(u.username + ", " + u); });
});
