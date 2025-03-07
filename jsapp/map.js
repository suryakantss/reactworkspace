
let cities = ['Pune','Mumbai','Chennai'];

cities.map(c=> c.toUpperCase()).forEach(ct => console.log(ct));

let ucities = cities.map(c=> c.toUpperCase());

console.log(ucities);

let nos = [10,20,30];
nos.map(n => n*n).forEach(nx => console.log(nx));