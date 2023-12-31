// filter method
// filter method is mostly used true or false conditions

const Even_Odd = [1,3,4,6,8,9,10];
// now we are gonna find out which number is even and which number is even or odd by the help of filter method
// For Even:

const filter_Even = function(number){
    return number%2===0;
};
const AnswerEven = Even_Odd.filter(filter_Even);
console.log(AnswerEven);

// For Odd:

const Answer_Odd = Even_Odd.filter(function(number){
    return number%2!==0;
});
console.log(Answer_Odd);