import { useRef } from "react"

export function CompA(props){
    let tref=useRef('');
  
    return (
        <div>
            <h3>CompA</h3>
            <div>
                <input type="text" ref={tref} />
                <button onClick={()=> props.send(tref)}>Send</button>
            </div>
        </div>
    )
}