function add(a,b,fx){
    let res = a+b;
        fx(res);
}

let res  = add(10,20,function(r){
    console.log(r);
});

console.log('Bye!!!!!!!!');