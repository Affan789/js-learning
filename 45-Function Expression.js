// function expression
// when we assign a funnction into a variable that is called function expression
// for example:

const Name = function(){
    console.log("your name is affan");
}; // this is called function expression
Name();

// adding two numbers expression
const SumNumbers = function(number1,number2,number3){
    return number1+number2+number3;
};
const Answer =SumNumbers(2,5,5);
console.log(Answer);

// Even and Odd expression
const Even_Odd = function(number){
    return number%2===0;
};
console.log(Even_Odd(10));

// find First character expression
const FirstCharacter = function(string){
    return string[0];
};
console.log(FirstCharacter("salman"));

// find index of the number expression
const FindIndex = function(Array,Target){
    for(let i=0;i<Array.length;i++){
        if(Array[i]===Target){
            return i;
        }        
    }return "enter correct Number";
}; 

const MyArray = [12,16,17,19];
console.log(FindIndex(MyArray,17));