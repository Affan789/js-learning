// do while loop
// we are gonna make a program which is going to repeat itself until the condition meets the logic
// do while executes the condition only once even if the condition is false

let i = 0;
do{
    console.log(i);
    i++;
}while(i<=9)
console.log(`value of i is ${i}`);
// now we are gonna run a false condition

let g = 10;
do{
    console.log(g);
    g++;
}while(g<=9)
console.log(`the current value of g is ${g}`);
// as you can see do while loop still runs the condition once even if it is false
