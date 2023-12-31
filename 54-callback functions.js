// CallBack Functions
// we are gonna make a program in which we will make a function that is going to be the input for another function
// for example:

function Addition(num1,num2){
    return num1+num2;
};

function MyFunction(CallBack){
    console.log(CallBack(5,5));
};
MyFunction(Addition);

// this is callback function