// new keyword
// the new keyword does three things 1.it creates an empty this={},this is also called an empty object2.it returns whatever has been assigned to it. 3.
// the new keyword creates an empty object and returns it to us
// and the new keyword creates the relation between prototype and "__proto__" like object.create so we
// do not have to make a connection manually like we did in object.create the new keyword will do all of that for us
// for example:

// function User(Name,Age){
//     this.Name=Name;
//     this.Age=Age;
// };
// const User1 = new User("Affan",18);
// console.log(User1);
// User.prototype.About=function(){
//     console.log(`${this.Name} is ${this.Age} years old`);
// };
// User1.About();
// console.log(User1);
// as you can see the new keyword added a connection with "__proto__" and prototype
// and now we are gonna use the new keyword in file 81's code in here

// and if we want our function to be later used by someone or us with the same keyword as new so then we are gonna start the letter of our function with a capital letter so that it only works with new keyword
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
console.log(User1.About());
console.log(User1);
console.log(User2.is18());


