// lexical environment, scope chain

const lastName="mirza";

const printName=function() {
    const firstName="affan";
    console.log(firstName);
    console.log(lastName);
}
printName();