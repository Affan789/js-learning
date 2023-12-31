// call,apply and bind methods
// Call:
// now i am gonna make a program in which i am going to make a function in an object and use the same function for another object

const User1 = {
    Name:"affan",
    Age:18,
    About:function(Gender,hobby){
        console.log(`name is ${this.Name} and age is ${this.Age} and gender is ${Gender} and hobby is ${hobby}`);
    }
};

const User2= {
    Name:"shahmeer",
    Age:17
};

User1.About("male","playing games");
User1.About.call(User2,"Male","football");
// and we can also pass arguments as well

// Apply:
// apply and call are almost the same thing
// the only difference is this:
User1.About.apply(User2,["Male","football"]);
// Bind:
// bind is also pretty much the same thing but what bind does is that it returns the value as a function 
// for example:
const Func=User1.About.bind(User2,"Male","football");
Func();


