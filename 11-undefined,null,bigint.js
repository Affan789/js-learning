// undefined
let FirstName;
console.log(typeof FirstName);
// as you can see i only declared the value but didnt assign it and that is why the console is saying undefined
// and if we do the same thing in var it is also going to say undefinded
// however if we do the same thing in const it is going to give error
FirstName = "affan";
console.log(typeof FirstName,FirstName);

// null (means nothing) for example:
let size = null;
console.log(typeof size);
// so now if we find out the type the console is not saying it is a null type but it is saying object
// this is because of an error in javascript
size = 12;
console.log(typeof size);
// i can also change the null value

// BigInt
// bigint is used if we want to store a very big number 
// to find the limit of the normal number:
// console.log(Number.MAX_SAFE_INTEGER);
// this command tells us how many number can we store in a normal integer
let myNumber =BigInt(100);
// with bigint we can store both small and large numbers easily
// another way to write the bigint command is
let yourNumber = 67n;
let Number = myNumber + yourNumber;
console.log(Number);
// we can only add to bigint numbers with bigint numbers only
// we cannot add a normal integer and a bigint


