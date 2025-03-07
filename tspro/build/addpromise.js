"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(a, b) {
    var p = new Promise(function (resove, reject) {
        resove(a + b);
    });
    return p;
}
