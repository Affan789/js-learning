// nested if else
// we are gonna make a game.the game is guess the correct number
// the correct number is 19
// below 17 is too low
// above 23 is too high
let winning_Number = 19;
let GuessingNumber = +prompt("Guess a Number");
// the keyword prompt is used to take input from the user and it is a string type.to confirm this
console.log(typeof GuessingNumber,GuessingNumber);
// so that is why i have converted prompt from string to number by adding a + before prompt

if(GuessingNumber===winning_Number){
    console.log("your guess is correct");
}else{
    if(winning_Number>GuessingNumber){
        console.log("too low");
    }else{
        console.log("too high");
    
    }
}

