let array1= [1,2,4,5];
// so this is how we set values in our code
// but this is how javascript stores value in an array:
let array2=new Array(7,8,9);
// and this is how arrays have prototypes as well
// i know that we previously learned only functions can have prototypes
console.log(Object.getPrototypeOf(array2));
console.log(Object.getPrototypeOf(array1));
// and as yo can see there are a lot of methods in array2's prototype set by default
// and so this is how we were able to use so many different array methods in javascript like:splic(),shift(),unshift() and many others 
// because every array has had these methods in their prototypes by default
// and arrays have array prototypes as we can see in console by default
// and functions have object prototypes
// but we can also convert object prototypes to array prototypes as well
function func(){
    console.log("hello");
}
console.log(func.prototype);
func.prototype=[];
func.prototype.push("1");
console.log(func.prototype);
