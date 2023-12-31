// array push pop and array shift unshift
// push:
// if we want to add another element in an array we are going to use push method
// push method adds another element in the last array0
// for example:

let fruits = ["mango","grape","peach"];
console.log(fruits);
fruits.push("watermelon");
console.log(fruits);
// this method only works in reference types

// pop:
// the pop method removes the last element from an array
// for example:
// console.log(fruits.pop());
let poppedfruit = (fruits.pop());
console.log(fruits);
// but the method removes the value then it can return it to us as well
// and we can also make a variable from the removed string
console.log(poppedfruit);

// and now we are going to add and remove a string from the start
// array unshift and shift:
// Unshift:
// unshift adds another element from the start
fruits.unshift("banana");
 console.log(fruits); //we can also add more than one element

//  Shift:
// shift removes the element from the start
let removedfruit = fruits.shift();
console.log(fruits);
console.log(removedfruit);
// we can also add the removed element in another variable

// but we need to note one thing that the push pop method is faster than the shift unshift method


