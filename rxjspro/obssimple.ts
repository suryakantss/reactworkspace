import { Observable, of } from "rxjs";

function temperature() :Observable<number>{
    return of(1,2,3,4);
 }

temperature().subscribe((n)=> console.log(n));