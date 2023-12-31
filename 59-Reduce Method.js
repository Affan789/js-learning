// reduce method
// we are gonna make a program in which we are going to sum all of the numbers in the array using reduce method
// reduce method is like a loop with memory

const Numbers = [1,2,3,8,9,10];

const sum = Numbers.reduce((addedValue,NewValue)=>{
    return addedValue + NewValue;
});
console.log(sum);
// now let me explain as to how the reduce method works
/* 
addedValue                 NewValue               return   
   1                          2                      3  
   3                          3                      6  
   6                          8                      14 
   14                         9                      23
   23                         10                     33    


   so this is how the reduce method works
*/

// now we are gonna make a program in which we are going to sum up the prices of the items

const Items = [
    {productNo:1,productName:"beans",price:400},
    {productNo:2,productName:"charger",price:2000},
    {productNo:3,productName:"notebook",price:600}
];

const Total_price = Items.reduce((Addedprice,product)=>{
    console.log(`${product.productName} price is ${product.price}`);
    return Addedprice + product.price;
},0);
console.log(`totalprice is ${Total_price}`);

// we can also set an initial value for the first variable of the parameter in reduce
 