/*
export class GreetService {
    public msgs:Array<string> =['Hello React','Happy Leaning','Good Day Ahead'];
      public getMessages():Array<string>{
        return this.msgs;
    }
}
    */

let datastore:Array<string> = ['Hello React','Happy Leaning','Good Day Ahead']

export function getMessages():Array<string>{
    return datastore;
} 

export function putMessage(m:string) : void {
        datastore = [...datastore,m];
}

