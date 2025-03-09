import { useState } from "react";
import { CompA } from "./compa";
import { CompB } from "./compb";

export function Communication(){
    let [data,setData] = useState('');
    function send(r){
        setData(r.current.value);

    }
    return (
        <div>
            <h3>Communication : {data}</h3>
            <CompA send={send}></CompA>
            <hr />
            <CompB data={data}></CompB>
        </div>
    )
}