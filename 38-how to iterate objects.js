// how to iterate objects
// now to iterate objects two loop are going to be used in this program
// object.keys and for in loop
// for in:

const Human1= {
    Name:"affan",
    Age:"18",
    Hobbies:["playing games","reading books"]
};
for(let key in Human1){
     console.log(`${key}:${Human1[key]}`);
}
// object.keys:
console.log(Object.keys(Human1)); // object.keys gives us array
for(let keys of Object.keys(Human1)){
     console.log(keys,":",Human1[keys]);
}