// use const for creating arrays

const vegetables=["potato","carrot"];
vegetables.push("onion");
console.log(vegetables);

// now in the console it is not giving us any error even though we know that if we try to change a const value it will give us error
// to explain this let us consider that the array vegetables has an address 0x11 in the heap memory lane
// and we tried to push another value in the array or in the address without changing anything
// this is why it isnt giving us any error beacuse we pushed a value in the same address
