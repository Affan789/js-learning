// rest parameters

function Values (a,b,c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
};
Values(3,4,6,8,10,12);
// but if i want to make a variable that can store more than one value ,then
// we are going to use rest parameters method:

function AddedValue(...numbers){
    let total = 0;
  for(let number of numbers){
    total = total+number;
  };
  console.log(Array.isArray(numbers));
  return total;
};
const Rest_answer = AddedValue(10,20,30,40,50);
console.log(Rest_answer);


