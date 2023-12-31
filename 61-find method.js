// find method
// we are gonna make a program in which we are going to find a specific value through find method

const Values=["apple","grapes","watermelon","mango"];

const Answer=Values.find((element)=>{
    return element.length===5;
});
console.log(Answer);
// and if there is an array that has two values of same length,then the find method will only return the one it read first

// now we are gonna make a program in which we are gonna find a value through its id
// for example:
const IDs = [
    {UserId:1,Name:"affan"},
    {UserId:2,Name:"salman"},
    {UserId:3,Name:"aman"},
    {UserId:4,Name:"fazeel"},
    {UserId:5,Name:"muneeb"}
];

const Find=IDs.find((user)=>{
    return user.UserId===4;
});
console.log(Find);





