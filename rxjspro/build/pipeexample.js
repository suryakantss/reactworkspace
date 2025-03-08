"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = data;
var rxjs_1 = require("rxjs");
function data() {
    return (0, rxjs_1.of)(10, 20, 30, 4, 5, 6, -10, -20);
}
//data().pipe(filter(n => n>0)).subscribe(r => console.log(r));
data().pipe((0, rxjs_1.filter)(function (n) { return n > 0; }))
    .pipe((0, rxjs_1.map)(function (no) { return no + 1; }))
    .subscribe(function (nn) { return console.log(nn); });
