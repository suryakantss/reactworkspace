import { filter, map, of } from "rxjs";

export function data(){

    return of(10,20,30,4,5,6,-10,-20);
}

//data().pipe(filter(n => n>0)).subscribe(r => console.log(r));

data().pipe(filter(n => n>0))
      .pipe(map(no => no+1))
      .subscribe(nn => console.log(nn));
