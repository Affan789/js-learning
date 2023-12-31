// Every Method
// we are gonna make a program in which the every method will tell us if all the elements in the array are even or odd

const Even_Odd=[2,4,6,8,10,12];

const Answer=Even_Odd.every((number)=>{
    return number%2===0;
});
console.log(Answer);
// if even one element in the array was odd the every method would have said "false"

// now we are gonna make a program in which we are going to check if the price of products is below 3500

const Items = [
    {productNo:1,productName:"beans",price:400},
    {productNo:2,productName:"charger",price:2000},
    {productNo:3,productName:"notebook",price:600}
];

const Total = Items.every((product)=>{
    return product.price<3500;
});
console.log(Total);
