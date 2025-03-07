class Customer {
    constructor(name,email){
        this.name = name;
        this.email=email;
    }
    display(){
        setTimeout(()=>{
            console.log(this.name);
            console.log(this.email)
    
        },4000);
    } 
}
let c = new Customer('Veeru','veeru@sholay.com');
c.display();
