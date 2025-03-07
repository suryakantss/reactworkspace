let customer  = {
    name:'Jack',
    email : 'jacksparrow@msn.com',
    
}

let newcustomer = {...customer,cellNo:'9877766545',email:'jack@msn.com'};
console.log(newcustomer);

let {email,cellNo} = newcustomer;
console.log(email); 
console.log(cellNo); 

