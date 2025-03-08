import { useRef, useState } from 'react';
import './greet.css';
import { getMessages, putMessage } from './greet.service';
//import { GreetService } from './greet.service';
export function Greet(){
    //let msgs = new GreetService().getMessages();
    let [msgs,setMsgs] = useState(getMessages());
    let mref:any = useRef('');
    function addMsg(){
        putMessage(mref.current.value);        
        setMsgs([...getMessages()]);
        mref.current.value='';
        mref.current.focus();
    }
    
       return (
        <div>
            <h3>Messages</h3>
            <ol>
            {msgs.map(m=><li key={m}>{m}</li>)}
            </ol>
            <input ref={mref}></input>
            <button onClick={addMsg}>Add</button>
        </div>
    )
}