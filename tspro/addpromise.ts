export function add(a:number,b:number):Promise<number>{
    let p:Promise<number> = new Promise<number>((resove,reject)=>{
        resove(a+b);
    });
    return p;
}

