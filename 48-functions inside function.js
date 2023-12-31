// functions inside function
// we can make functions inside function 
// for example:

const Functions = function() {
    const hello = () => {
        console.log("hello world");
    }
    const Addition = (num1,num2) => {
        return num1+num2;
    }
    const Multiply = (num1,num2) => num1*num2;
    hello();
    console.log(Addition(6,6));
    console.log(Multiply(5,5));
};
Functions();


