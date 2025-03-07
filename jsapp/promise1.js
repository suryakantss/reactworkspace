function add(a,b){
    let p = new Promise((resolve,reject)=>{
        if(a<0 || b < 0)
            reject('Invalid Nos.');
        else
            resolve(a+b);
  });
    return p;
}

add(10,20).then((res)=> console.log(res)).catch((err)=> console.log(err));
console.log('Bye!!!!');
console.log('Bye!!!!');
