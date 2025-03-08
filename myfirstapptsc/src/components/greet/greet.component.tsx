import './greet.css';
import { getMessages } from './greet.service';
//import { GreetService } from './greet.service';
export function Greet(){
    //let msgs = new GreetService().getMessages();
    let msgs = getMessages();
       return (
        <div>
            <h3>Messages</h3>
            <ol>
            {msgs.map(m=><li key={m}>{m}</li>)}
            </ol>
        </div>
    )
}