"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_service_1 = require("./customer.service");
var cs = new customer_service_1.CustomerService();
//cs.getAll().forEach(c => console.log(c));
cs.getAllAsync().then(function (c) { return console.log(c); }).catch();
