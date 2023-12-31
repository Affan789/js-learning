// what is prototype
// javascript functions are the combination of functions and objects
// every function has a prototype that we can use 
// prototypes are also called objects in a function
// prototype is like an object in which we can add functions and properties
// we can treat function like objects as well for example:

function myfunc(){
    console.log("hello world")
};

myfunc.key="bigvalue";
console.log(myfunc.key);

// if we want to add key value pairs in a function then we use prototype
// and only functions can provide prototype properties
console.log(myfunc.prototype);
// to prove functions have prototype:
if(myfunc.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}
// as you can see the console is saying prototype is present and if i try this in an object,then:
const Obj1 = {key1:"value1"};
if(Obj1.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}
// as you can see the console is saying prototype is not present so this proves that only functions have prototype
// now we are gonna add a property in prototype:
myfunc.prototype.value1="element1";
console.log(myfunc.prototype);
// as you can see a property has been added in prototype
// we can add functions as well
myfunc.prototype.yourfunc=function(){
    return "GUTS";
};
console.log(myfunc.prototype.yourfunc());
console.log(myfunc.prototype);


