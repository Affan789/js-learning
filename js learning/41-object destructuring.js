// object destructuring

const Game = {
    gamecompany:"valve",
    Famousgame:"counter strike",
    Favouritegame:"half life",
    Year:"1996"
};
let var1 = Game.gamecompany;
let var2 = Game.Favouritegame;
console.log(var1, var2);
// this method is a bit long so we are going to use the object destructuring method
// and if we want to make another object from the remaining constants as well ,then:

 const {gamecompany:var3,Favouritegame:var4,...remainingvariable}=Game;
 console.log(var3);
 console.log(var4);
 console.log(remainingvariable);