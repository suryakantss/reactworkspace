"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addpromise_1 = require("./addpromise");
(0, addpromise_1.add)(10, 20).then(function (r) { return console.log(r); }).catch();
