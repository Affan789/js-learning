// hasOwnProperty
// now we are gonna make a program in which we are gonna call users keys ,but not their prototype keys

const CreateUser = function(FirstName,LastName,Age,email,Address){
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.Age=Age;
    this.email=email;
    this.Address=Address;
};

CreateUser.prototype.About=function (){
         return `${this.FirstName} is ${this.Age} years old`;
};
CreateUser.prototype.is18=function(){
     return this.Age>=18;
};
const User1 = new CreateUser("affan","Mirza",18,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")
const User2 = new CreateUser("shahmeer","Mirza",17,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")

for(let key in User1){
    if(User1.hasOwnProperty(key)){
        console.log(key);
    }
}