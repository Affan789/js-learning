// Iterables
// iterables means in which we can execute for of loop
// arrays and strings are iterables for example:

const name = "affan";
for(let char of name){
    console.log(char);
};

const Myarray=["item1","item2","item3"];
for(let array of Myarray){
    console.log(array);
};
// but we cannot use for of in obejcts for example:
// const Objects={name:"affan",Age:18,Gender:"male"};
// for(let object of Objects){
//     console.log(object);
//  };
 // as you can see the console is saying it is not iterable
 
//  Array like objects:
// array like objects are those which have length properties and we can access them by their index
// strings are array like objects for example:

const Human="affan";
console.log(Human.length);
console.log(Human[3]);





