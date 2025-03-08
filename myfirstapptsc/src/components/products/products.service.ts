import { Observable } from "rxjs";
import { Product } from "./product.model";

let datastore:Array<Product> = [
    {id:'1',name:'Mouse',price:400},
    {id:'2',name:'Keyboard',price:700},   
];

function getProducts():Promise<Array<Product>>
{
     let p:Promise<Array<Product>> = new Promise((resolve,reject)=>{
        resolve(datastore);
     }) ;
     return p;
}

function getProductsOBS():Observable<Array<Product>> {
  
    let o:Observable<Array<Product>> = new Observable((s)=>{
            s.next(datastore);
    });
    return o;
}

export const ProductService =  {getProducts:getProducts,getProductsOBS:getProductsOBS};
