// function execution context
let go = "go";
console.log(go);

function getfullName(firstName,lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}
const personName = getfullName("affan","mirza");
console.log(personName);

