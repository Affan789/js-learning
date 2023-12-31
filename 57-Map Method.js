// map method
// we are gonna make a program in which we take an input array value and then square it and make a new array out of the answer
// map method is similar to foreach method
// the map method returns us a new array when its taking input from another array
// for example:

const numbers = [2,3,5,7];

const Value_Square = function(number){
    return number * number;
};

const Answer = numbers.map(Value_Square);
console.log(Answer);
// another method to do this is:

const Output = numbers.map(function(number){
    return number * number;
});
console.log(Output);


// we are gonna make a program in which we are going to take input of the names and make a new variable out of it
const Humans = [
    {Firstname:"affan",Age:"18"},
    {Firstname:"salman",Age:"58"},
    {Firstname:"subhan",Age:"30"}
];

const UserNames = Humans.map((user)=>{
    return user.Firstname;
});

console.log(UserNames);