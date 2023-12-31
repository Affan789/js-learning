// Arrow functions
// if we want to convert a normal function into an arrow function then we are going to remove the keyword 'function' and after the paranthesis() we are going to write =>
// how to declare arrow functions: 

const Name = () => {
    console.log("your name is affan");
}; 
Name();

// adding two numbers expression
const SumNumbers =(number1,number2,number3) => {
    return number1+number2+number3;
};
const Answer =SumNumbers(2,5,5);
console.log(Answer);

// Even and Odd expression
const Even_Odd = (number) => {
    return number%2===0;
};
console.log(Even_Odd(10));

// find First character expression
const FirstCharacter = (string) => {
    return string[0];
};
console.log(FirstCharacter("salman"));

// find index of the number expression
const FindIndex = (Array,Target) => {
    for(let i=0;i<Array.length;i++){
        if(Array[i]===Target){
            return i;
        }        
    }return "enter correct Number";
}; 

const MyArray = [12,16,17,19];
console.log(FindIndex(MyArray,17));

// and if a function is going to take only one parameter then we can remove the paranthesis 
// for example:
const SecondCharacter = string => {
    return string[1];
};
console.log(SecondCharacter("affan"));

// if our function is returning a value in a single line then we can make the function a bit more shorter by
// removing the keyword 'return' and removing the curly braces
// for example:
const EvenOdd = number => number%2===0;
console.log(EvenOdd(4));