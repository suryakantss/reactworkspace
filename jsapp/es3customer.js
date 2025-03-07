function Customer(name,email){
    this.name=name;
    this.email=email;
    this.display = function(){
        console.log(this.name);
        console.log(this.email);
    }
}
var c = new Customer('Jai','jai@sholay.com');
c.display();
