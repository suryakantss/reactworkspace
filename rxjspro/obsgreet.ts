import { Observable } from "rxjs";

function greet() {
    let ob: Observable<string> = new Observable((sub) => {
        sub.next("Welcome to RxJS");
        sub.next("Happy Learning");
        sub.error("something went wrong!");
        sub.complete();    
    });
    return ob;
}

let sub = greet().subscribe({
    next: (m) => {
        console.log(m);
    }, 
    complete: () => {
        console.log('End of stream...');
        sub.unsubscribe();
    },
    error :(err)=>{
        console.log(err);
    }
});