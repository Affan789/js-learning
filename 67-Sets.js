// Sets (are iterable)
// we are gonna make a program using sets 

const numbers = new Set([2,4,6,8]);
// we cannot repeat a value in set and we also cannot access its index 
// and its order in which values are written is also not guranteed
console.log(numbers);
// and we can also write strings in set because they are also iterable
const strings = new Set("abc");
console.log(strings);
// and we can also declare set and add the value later
// for example:
const Values = new Set();
Values.add(6);
console.log(Values);
// we can also add different data types in set
const Myarray=["banana","carrot","mango"];
Values.add(Myarray);
// we can also add the same values in set but they have to be in different arrays for example:
Values.add(["banana","carrot","mango"]);
console.log(Values);

// now we are gonna make a program in which we check if a certain value of set is present or not
// for example:
if(Values.has(6)){
    console.log("6 is present");
}else{console.log("6 is not present");
}; 
// and now we are gonna check to see if sets are iterable or not by using for of loop
const elements= new Set();
elements.add(1);
elements.add(2);
elements.add(3);
elements.add(4);
elements.add(5);
elements.add(6);
elements.add(7);
for(let element of elements){
    console.log(element);
};
// set is mostly used when we want to store unique values do not want to repeat a value 
// like for example we can use sets in making user_ids
const YourArray = [2,4,5,4,5,6,6];
const UniqueValues = new Set(YourArray);
console.log(UniqueValues);
// now we are gonna find the length of this set by using for of loop
let length = 0;
for(let array of UniqueValues){
    length++;
};
console.log(length)


