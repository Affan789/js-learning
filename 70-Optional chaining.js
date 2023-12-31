// Optional Chaining

const Location = {
    Address:"maymar",
    // Sector:{houseNo:"W-4 b-11"}
};
// as you can see the console is giving us error because sector key does not exist at the moment 
// but if we want the console to give us 'undefined' instead of giving us an error then we are going to use the optional chaining method 

console.log(Location.Address);
console.log(Location?.Sector?.houseNo);
// so by adding the question mark the console is giving us undefined because it checks if the value exists or not
// if the value does not exist then it is going to give us undefined

