// this keyword

console.log(this);
// as you can see the console is showing us the global object of the javascript if we write this in console
// and if we write 'window' in console it will also give us the same object
console.log(window);
// if we directly write this or window in console it will give us the same thing
function Object(){
    "use strict";
    console.log("hello world");
    // console.log(this);
}
Object();
// as you can see even in a function it is showing us the object window now to remove this:
// "use strict";
// by using strict it is saying undefined
// and if we see the window object it will also show us our function as well
window.Object();

// the reason this is being discussed in here is because this can be asked in interviews
// a lot of people use "use strict" in their function when they want to work with 'this' keyword in some other scenarios
// they do not want the whole window object to come up 