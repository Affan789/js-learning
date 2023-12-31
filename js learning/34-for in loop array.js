// for in loop in array
// so what for in loop does is that it shows the index of each value in the console
// for example:

let dishes = ["biryani","qarhai","daal"];
for(let index in dishes){
    console.log(index);
}
// as you can see this is showing us the index of the array
// but if we want to print the values like we did in for of we are gonna write this:

let fruits=["apple","banana","mango"];
for(let index in fruits){
    console.log(fruits[index])
}
// for of loop is more used than for in loop