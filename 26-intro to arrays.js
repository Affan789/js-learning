// intro to arrays (reference type)
// arrays mean ordered collection of item or elements
// now we are gonna make arrays and reassign them and check their types

let vegetables = ["carrot","onion","potato"]; //arrays are made by square brackets
console.log(vegetables);
// but if we want to find only one string from an array,then
console.log(vegetables[1]);
// we can store all types of values in arrays
// for example:
let mixed = [23,2.4,undefined,null,0];
console.log(mixed[3]);
// now we are gonna reasssign a value
vegetables[0] = "garlic";
console.log(vegetables);
console.log(typeof vegetables);
// so the console is saying its type is object ,this is because arrays are reference type and refernce types are called object in typeof
// so now we are going to find another method to see if we made an array or not or to identify arrays particularly
console.log(Array.isArray(vegetables));
console.log(Array.isArray(mixed));