// arrow functions and this

const User1 = {
    Name:"affan",
    Age:18,
    About:()=>{
        console.log(`name is ${this.Name} and age is ${this.Age}`);
    }
};

User1.About();
// as you can see when i am using arrow functions it is saying undefined
// because in arrow functions it will not consider 'this' keyword as the whole object it is in
// the arrow function is precieving 'this' as something from an other object in the surroundings
