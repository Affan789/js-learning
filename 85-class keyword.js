// class keyword
// class keyword came out in es6/2015
// now we are gonna make the same program we made in file82.js but with class keyword
// in class keyword all the code will happen in the class keyword

class CreateUser{
    constructor(FirstName,LastName,Age,email,Address){
        this.FirstName=FirstName;
        this.LastName=LastName;
        this.Age=Age;
        this.email=email;
        this.Address=Address;
    };

    About(){
        return `${this.FirstName} is ${this.Age} years old`;
    };
    is18(){
        return this.Age>=18;
    }
}
// as you can see that this is way cleaner and easier than we did in file82.js
// in class we dont have to write a separate code for making methods in prototype
// everything can done within class object

// the class keyword cannot be called without new keyword
const User1 = new CreateUser("affan","Mirza",18,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")
const User2 = new CreateUser("shahmeer","Mirza",17,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")

console.log(User1.About());
console.log(User2.is18());
console.log(CreateUser.prototype)
