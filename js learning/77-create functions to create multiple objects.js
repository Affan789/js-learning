// create functions to create multiple objects

// we are gonna make a program in which a function will take our name,age,address,email as an input 
// and it will return an object in return

const CreateUser = function(FirstName,LastName,Age,email,Address){
    const user = {};
    user.FirstName=FirstName;
    user.LastName=LastName;
    user.Age=Age;
    user.email=email;
    user.Address=Address;
    user.About= function (){
        return `${this.FirstName} is ${this.Age} years old`;
    };
    user.is18=function(){
        return this.Age>=18;
    };
    return user;
};

const User1 = CreateUser("affan","Mirza",18,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")
console.log(User1);
console.log(User1.About());
const is18 = User1.is18();
console.log(is18);

