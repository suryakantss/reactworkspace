import { Product } from "./product.model";
function getProducts():Array<Product>
{
     return  [
            {id:'1',name:'Mouse',price:400},
            {id:'2',name:'Keyboard',price:700},   
        ];
}

export const ProductService =  {getProducts:getProducts};