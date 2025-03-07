function ucase(str) {
    let p = new Promise((success,failure)=>{
        success(str.toUpperCase());
    });
    return p;
}
ucase('happy learning').then((res)=> console.log(res)).catch((err)=> console.log(err));
console.log('==================');
console.log('==================');
