// block scope vs function scope


// let and const are block scope
// var is function scope
// for example:

{
let Name = "affan";
//   console.log(Name);
}
// console.log(Name);
// so the console is giving us error this because if let and const are declared inside of a block they can only be used inside of that block
// we cannot use let or const outside of a block if we have declared it inside of a block
// this is why let and const are called block scope

{
var LastName="Mirza";
 console.log(LastName);
}
console.log(LastName);
// as you can see we did the same thing with var but the console is not giving us any error
// this is because it doesnt matter if we declared var in a block or outside of a block
// we can access var anytime anywhere we want to
// and this why var is called function scope