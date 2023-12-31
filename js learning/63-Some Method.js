// some method
// some method is pretty much the opposite of every method
// if any one element in the condition is true then the some method will return true 
// for example:

const Odd_Even=[3,5,9,7,10];

const Answer= Odd_Even.some((number)=>{
    return number%2===0;
});
console.log(Answer);

// now we are gonna make a program in which we are going to check if the price of products is above 3500
// and if even one of the products price is above 3500 then the some method will return true
const Items = [
    {productNo:1,productName:"beans",price:300},
    {productNo:2,productName:"charger",price:3600},
    {productNo:3,productName:"notebook",price:600}
];

const Total = Items.some((product)=>{
    return product.price>3500;
});
console.log(Total);
