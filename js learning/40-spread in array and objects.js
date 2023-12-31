// spread operator in array and objects
// spread operator in arrays:
// the spread operator spread the values 
// for example:
const newarray=[..."affan"];
console.log(newarray);
// and if we want to find out which character is in which position then:
console.log(newarray[2]);

// spread operator in objects:
const project1={
    key1:"value1",
    key2:"value2"
};

const project2={
    key1:"value10",
    key3:"value3",
    key4:"value4"
};

let Newproject = {...project1,...project2,key70:"value70"};
// we can also add more keys when we are spreading
// but if we try to repeat a key that is in both objects
// then it will only run the key that it last read in its memory and it will ignore the first same key and wont run it
// same key in an object wont be repeated twice
console.log(Newproject);


