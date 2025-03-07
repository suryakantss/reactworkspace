"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function greet() {
    var ob = new rxjs_1.Observable(function (sub) {
        sub.next("Welcome to RxJS");
        sub.next("Happy Learning");
        sub.error("something went wrong!");
        sub.complete();
    });
    return ob;
}
var sub = greet().subscribe({
    next: function (m) {
        console.log(m);
    },
    complete: function () {
        console.log('End of stream...');
        sub.unsubscribe();
    },
    error: function (err) {
        console.log(err);
    }
});
