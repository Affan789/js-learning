// forEach Method
// foreach method is very similar to callback function 
// foreach,filter,map,reduce are array methods

// Now we are gonna make a program in which the function will input from an array 
// by the help of foreach method and show us the value and the index of the array values and then
// we are gonna make the same program again and multiply the array values by 2 

const Array = [2,3,5,7];

function Output(number,index){
    console.log(`the index is ${index} and the value is ${number}`);
};

for(let i = 0;i<Array.length;i++){
    Output(Array[i],i);
};

function Input_Value(number,index){
    console.log(`the index is ${index} and the value ${number}*2 = ${number*2} `);
};

Input_Value(Array[0],0);
Input_Value(Array[1],1);
Input_Value(Array[2],2);
Input_Value(Array[3],3);

// so this method is a bit long so now we are going to use the foreach method
// so what the foreach method does is that it takes the index and the value automatically from the array when you write it

// Array.forEach(Output);
// another method to do this is:
console.log("forEach method");

Array.forEach(function(number,index){
    console.log(`the index is ${index} and the value is ${number}`);        
});
console.log("forEach method");

Array.forEach(function(number,index){
    console.log(`the index is ${index} and the value ${number}*2 = ${number*2} `);    
});

// we are gonna make a program in which we are going to take input of the names by the help of forEach

const Humans = [
    {Firstname:"affan",Age:"18"},
    {Firstname:"salman",Age:"58"},
    {Firstname:"subhan",Age:"30"}
];
 Humans.forEach((human)=>{
        console.log(`name is ${human.Firstname} and age is ${human.Age}`);
  }); 
 




