// how to clone arrays
// now we are gonna make a program in which we are going to clone arrays by three different methods
// method 1(slice):

let array1=["copy1","copy2"];
 let array2=array1.slice(0).concat(["copy3","copy4"]); // slice is the fastest method
//  we can also add more elements when we are cloning.this will work in all the three methods

array1.push("copy3");
console.log(array1===array2);
console.log(array1);
console.log(array2);

// concat method:
let array3=["item1","item2"];
let array4=[].concat(array3,"item3","item4");

array3.push("item3");
console.log(array3===array4);
console.log(array3);
console.log(array4);

// spread operator method:
let array5=["app1","app2"];
let array6=[...array5,"app3","app4"];

array5.push("app3");
console.log(array5===array6);
console.log(array5);
console.log(array6);
