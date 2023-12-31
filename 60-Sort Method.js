// sort method
// sort method changes the original array it does not give us a separate array like foreach or map 
// so the sort method sort values for us 
// for example:
const Values = ["aman","Affan","salman","subhan"];
Values.sort();
console.log(Values);

// but if we try to sort numbers then it will give us a problem
const numbers = [2,6,10,200,250];
numbers.sort();
console.log(numbers);
// so the console is giving us a weird answer
// the problem is that the console is thinking that this is a string it does not take our value as numbers but as strings
// so it sorts our numbers by the asii table

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
// this is how it sees and sorts our numbers

// now to fix this:
// Ascending Order:
numbers.sort((a,b)=>{
    return a-b;
});
console.log(numbers);
// so as you can see now it is sorting our numbers properly
// so this how it is sorting our numbers in javascript
/*
2 "is a" - 6 "is b" = answer in negative(greater than 0) so a comes first
lets consider 250 is "a" and 200 is "b" so 250-200=answer comes in positive then b comes first
this is how it kind of works
*/
// and if we want our numbers to be sorted from descending order,then:
const descend = numbers.sort((a,b)=>{
    return b-a;
});
console.log(descend);

// now we are gonna make a program in which the sort method will tell us the prices of items from lowtohigh and hightolow
// low to high:

const Items = [
    {productNo:1,productName:"hp laptop",price:56000},
    {productNo:2,productName:"treadmill",price:58000},
    {productNo:3,productName:"fridge",price:49000}
];
const lowtohigh = Items.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowtohigh);
// high to low:
Items.sort((a,b)=>{
    return b.price-a.price;
});
console.log(Items);


