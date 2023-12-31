// Splice Method
// we are gonna make a program in which we are gonna delete a value from an array and store it into another variable 
// and we are gonna insert items as well in the arrray
// for delete:
const Values=["element1","element2","element3"];
 const newValue = Values.splice(2,1);
console.log(Values);
console.log(newValue);
// for insert and delete together:

const Items=["value1","value2","value3"];
Items.splice(1,1,"VALUE");
console.log(Items);
// for insert only:
Items.splice(2,0,"VALUE1");
console.log(Items);

