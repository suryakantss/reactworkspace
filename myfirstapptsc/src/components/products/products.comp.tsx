import { useEffect, useState } from 'react';
import { Product } from './product.model';
import './products.css';
import { ProductService } from './products.service';
export function Products(){
    let [productstore,setProductStore] = useState<Array<Product>>([]);
/*
    ProductService.getProducts().then((res)=>{
        setProductStore(res);
        
    });
 */

    useEffect(()=>{
        ProductService.getProductsOBS().subscribe({next:(res)=>{
            setProductStore(res);
            console.log(res);
        }});
    },[])

    return (
        <div>
            <h3>Products</h3>
            <table width='800px'>
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productstore.map(p => <tr key={p.id}><td>{p.id}</td><td>{p.name}</td><td>{p.price}</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}