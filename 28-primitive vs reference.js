// primitive vs reference data types
// primitive:
let num1 = 16;
let num2 = num1;
console.log(`${num1} and ${num2}`);
num1++;
console.log(`${num1} and ${num2}`);

// refernce:
let array1= ["copy1","copy2"];
let array2= array1;
console.log(`${array1} and ${array2}`);
array1.push("copy3");
console.log(`${array1} and ${array2}`);

// the real differce beteween primitive and referce is that primitive has a stack memory and reference has a heap memory
// now the stack memory makes 2 different variables in its memory and the heap memory did the same thing
// but the difference is that when the value of num1 increments the stack memory changed only the num1 variable not num2
// on the other hand heap did almost the same thing but the address of array1 was same as array2 in the memory lane
// that is why in the console when we print the value out array1 and array2 are same beacuse they have the same address
// beacuse we changed the value in array1,array2 had the same address so it printed out the same thing
   


