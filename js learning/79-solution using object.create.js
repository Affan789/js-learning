// solution using object.create (continuing file78.js)
// so now we are gonna improve more of what was in file78.js

// const Object1 = {
//     key1:"value1",
//     key2:"value2"
// };

// const Object2 = {
//     key3:"value3"
// };
// console.log(Object2.key2);
// of course the console is saying undefined because key2 does not exist in Object2
// but there is a way that i can connect Object1 and Object2 and find key2 in object2

const Object1 = {
    key1:"value1",
    key2:"value2"
};

const Object2= Object.create(Object1);
Object2.key3="value3";
console.log(Object2.key2);
console.log(Object2);
// as you can see it founded key2 in Object2 
// so what is happening is that in the console in Object2 Object1 is also refferenced by the name of "__proto__" or "[[prototype]]"
// which that at first the console will try to see key2 in object2 if not then it will find key2 in Object1 which was being refferenced by the name of "[[prototype]]"
// __proto__ is also called [[prototype]] so both are the same thing
// and if we write __proto__ in console it will call Object1 :
console.log(Object2.__proto__);
console.log(Object2);
// so this is how Object.create works in javascript

// and now we are gonna implement this in file78`s code:

const userMethods ={  About: function (){
    return `${this.FirstName} is ${this.Age} years old`;
},
is18:function(){
    return this.Age>=18;
}
};

const CreateUser = function(FirstName,LastName,Age,email,Address){
    const user = Object.create(userMethods);
    user.FirstName=FirstName;
    user.LastName=LastName;
    user.Age=Age;
    user.email=email;
    user.Address=Address;
     return user;
};

const User1 = CreateUser("affan","Mirza",18,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")
const User2 = CreateUser("shahmeer","Mirza",17,"asasgamer112@gmail.com","house B-11,Sector W-4,gulshan-e-Maymar")

console.log(User2.About());
console.log(User1.is18());



