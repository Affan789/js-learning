// function declaration
// a function is something that can do work for us.
// for example if i want to make a function that writes my name every time i want to call it,then this is the way to make a function:

function Name() {
    console.log("your name is affan");
};
 Name();
// And we can make more than one function in a program


function Sum() {
    console.log(10+10);
};

Sum();
// another method to do this is:

function Add(){
    return 10+10;
};

console.log(Add());
// we can also add it into another variable. for example:
const AddedValue = Add();
console.log(AddedValue);

// but we donot want to make a function that is not reusable.so now we are gonna make a function that is actually usable
// Now we are gonna make a function that is going to sum whatever number we want to sum

function SumNumbers(number1,number2){
    return number1 + number2;
};
console.log(SumNumbers(2,2));
const SummedNumbers = SumNumbers(100,100);
console.log(SummedNumbers); //we can also make a function that can sum more than two values for us 

// now we are gonna make a function that is going to tell us if the number is even or odd
 function Even_Odd (number){
    if(number%2===0){
        return true;
    }
        return false; 

  }; // another method to do this was: return number%2===0; if we did this it would have given us the same answer

console.log(Even_Odd(6));

// now we are gonna make a function that is going to give us the first character of the given string
function Character(String){
    return String[0];
};
console.log(Character("affan"));

// now we are gonna make a function that is going to going to find us the index of the number we want to target
function FindIndex(Array,Target){
    for(let i=0;i<Array.length;i++){
        if(Array[i]===Target){
            return i;
        }
    }return "please enter the correct number";
};
const MyArray=[12,14,16,18,20];
const IndexAnswer = FindIndex(MyArray,16);
console.log(IndexAnswer);

