// booleans and comparison operators
// booleans can give only one answer its either true or false

let num1 = 18;
let num2 = 14;
console.log(num1>num2)

let num3 = 6;
let num4 = 8;
console.log(num4>=num3);

// difference between == vs ===
let num5 = "9";
let num6 = 9;
console.log(num5==num6);
// as you can see that the num5 is in strings but the console still told us that the condition is true
// this is because == only checks if the value is same or not it doesnt check the data type of the value
// if we want to check the data type as well as the value then we will use ===
console.log(num5===num6);

// differnce between != vs !==
let num7 = "5";
let num8 = 5;
console.log(num7!=num8);
// != checks if the value is equal or not if the value is not equal it is goin to show true and if the value is equal it is going to show false
// != only checks the value not the data type
console.log(num7!==num8)

