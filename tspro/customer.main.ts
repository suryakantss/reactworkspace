import { CustomerService } from "./customer.service";

let cs:CustomerService = new CustomerService();

//cs.getAll().forEach(c => console.log(c));

cs.getAllAsync().then(c=>console.log(c)).catch();