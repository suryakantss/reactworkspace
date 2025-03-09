import { useParams } from "react-router"

export function Details(){
    let params:any= useParams();
    return (
        <div>
            <h3>Product Details : {params.id}</h3>
            
        </div>
    )
}