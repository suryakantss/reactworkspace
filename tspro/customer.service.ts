import { Customer } from "./customer.model";

export class CustomerService {
    customers:Array<Customer> = [
        {name:'Jack',email:'jack@msn.com'},
        {name:'James',email:'james@msn.com'},  
    ];
    public getAll() :Array<Customer>{
        return this.customers;
    }
    public async getAllAsync() :Promise<Array<Customer>>{
        return this.customers;
    }
    
}