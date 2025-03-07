"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function temperature() {
    return (0, rxjs_1.of)(1, 2, 3, 4);
}
temperature().subscribe(function (n) { return console.log(n); });
