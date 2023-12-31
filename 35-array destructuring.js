// array destructuring

const variable=["var1","var2","var3"];
let element1= variable[0];
let element2= variable[1];

console.log(element1);
console.log(element2);
// as you can see this method is a bit long so now we are going to use the array destructuring method

// let [element3,element4]=variable;
// console.log(element3);
// console.log(element4);
// and if we want add var2 and var3 in element 3 and 4 or maybe skip a value then this is the way to do this:
 let [element3,  ,element4]=variable;
// another way to do this is:
//  let [element3,element4,...Myarray]=variable;
//  console.log(Myarray);
console.log(element3);
console.log(element4);
// and if we want to make a new array out of var2 and var3,then:

let Newarray=variable.slice(1);
console.log(Newarray);
