// now we are gonna use prototype with file79's code
// i created another object in which i added functions for CreateUser. but i am gonna remove that and store these functions
// in CreateUser's prototype 

// const userMethods ={  About: function (){
//     return `${this.FirstName} is ${this.Age} years old`;
// },
// is18:function(){
//     return this.Age>=18;
// }
// };

const CreateUser = function(FirstName,LastName,Age,email,Address){
    const user = Object.create(CreateUser.prototype);
    user.FirstName=FirstName;
    user.LastName=LastName;
    user.Age=Age;
    user.email=email;
    user.Address=Address;
     return user;
};

CreateUser.prototype.About=function (){
         return `${this.FirstName} is ${this.Age} years old`;
};
CreateUser.prototype.is18=function(){
     return this.Age>=18;
};
const User1 = CreateUser("affan","Mirza",18,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")
const User2 = CreateUser("shahmeer","Mirza",17,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")

console.log(User2.About());
console.log(User1);
console.log(User1.is18());

// we need to keep in mind that "[[prototype]]" and "prototype" are not the sam thing