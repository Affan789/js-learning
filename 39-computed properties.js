// computed properties

const name1="value1";
const name2="value2";

// we need to make value1 =key1 and value2=key2

const object1="key1";
const object2="key2";

let finalvalue={
    [name1]:object1,
    [name2]:object2,
    
};
console.log(finalvalue);

// another method to do this is:
let ultravalue={};
ultravalue[name1]=object1;
ultravalue[name2]=object2;
console.log(ultravalue);