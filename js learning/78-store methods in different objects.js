// store methods in different objects (continuing with file77.js)

// as you can see in file77.js that if we were to create like a thousand users the memory lane it would make 
// a lot of objects for every user so to reduce some complexity we will store our functions of 'createUser'
// in an another object so this way javascript will not make a lot of objects for every user 

const userMethods ={  About: function (){
    return `${this.FirstName} is ${this.Age} years old`;
},
is18:function(){
    return this.Age>=18;
}
};

const CreateUser = function(FirstName,LastName,Age,email,Address){
    const user = {};
    user.FirstName=FirstName;
    user.LastName=LastName;
    user.Age=Age;
    user.email=email;
    user.Address=Address;
    user.About=userMethods.About;
    user.is18=userMethods.is18;
    return user;
};

const User1 = CreateUser("affan","Mirza",18,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")
const User2 = CreateUser("shahmeer","Mirza",17,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")

console.log(User2.About());
console.log(User2.is18());

// and now we are gonna improve this code more in file79.js

