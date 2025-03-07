const yargs = require("yargs").argv;

let op = yargs.op;
let n1 = yargs.n1;
let n2 = yargs.n2;

if(op=='add')
    console.log(parseInt(n1) + parseInt(n2));
if(op=='mul')
    console.log(parseInt(n1) * parseInt(n2));


