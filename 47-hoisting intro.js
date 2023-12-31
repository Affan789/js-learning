// hoisting
// we can call a function before declaring it and this behaviour is called hoisting
// hoisting only works in function declaration and not in function expression
// for example:

Name();
 function Name() {
    console.log("affan mirza");
 };

 console.log(hello);
var hello = "hello world";
// so the console is saying undefined but if we do that in let or const it will give us error 
// this will be covered later as to why it is acting like that
//  this topic is later covered in detail