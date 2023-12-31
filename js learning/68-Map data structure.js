// Map data structure (iterable)
// map method and map data strucuture are two different things
// maps are ordered fashion unlike object


// this is called object literal
// this is because javascript is considering all the keys as strings and most of the time object literals have only two two types of keys
// its 99% of the time is in strings and on very rare cases in keys are in symbol
const Info = {
    Name: "affan",
    Age: 18,
    1: "one"
};
// and if i put a number as a key in the object literal it will also consider the number as strings 
// for example:

console.log(Info);
console.log(typeof Info["1"]);
// as you can see it is telling us that the number is type string so this is how object literal works

// now we are gonna make a program using Map:
const Person = new Map();
//  or const Person = new Map([['Name',"affan"],['Age',18],[1,"one"]]);
// now we are gonna set key value pairs
Person.set('Name', "affan");
Person.set('Age', 18);
Person.set(1, "one");
console.log(Person);
// the difference between map and object is that in map we can set any type keys we want  
// and there is a different syntax for how we call a specific key in Map
console.log(Person.get(1));
// and if we want to print the keys on console,then:
console.log(Person.keys());
// and now we are gonna iterate it and put it into another variable
for (let key of Person.keys()) {
    console.log(key);
    console.log(typeof key);
};
// as you can see it is telling us that the key '1' is a number unlike in object
// maps are iterable as well :
for (let [key, value] of Person) {
    console.log(key, value);
    // console.log(Array.isArray(key))
};

// as you can see the console is giving us the output in an array form,so we are gonna check if it is array or not
// now we are gonna destructure it to not make the output look like array
// and we are gonna have to put square brackets to destructure it otherwise it is going to give us error

// now we are gonna make a program in which im going to assign some info in object and some extrainfo 
// of the same person in map and call it in console,for example:

const UserInfo = {
    Id:1,
    Name: "affan",
};

const Extrainfo = new Map();
Extrainfo.set(UserInfo , {age:18,Gender:"male"});
console.log(UserInfo.Id);
console.log(Extrainfo.get(UserInfo));
console.log(Extrainfo.get(UserInfo).Gender);