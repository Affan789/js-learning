// Super keyword
// now we are gonna use file 86's code to use super

class Animal{
    constructor(Name,Age){
        this.Name=Name;
        this.Age=Age;
    }

    Eat(){
       return `${this.Name} eats meat and fish`;
    }
    Above5(){
        return this.Age<5;
    }
}
const Cat = new Animal("Tom",5);
console.log(Cat.Name);
console.log(Cat.Eat());
console.log(Cat.Above5());

class Dog extends Animal{
    constructor(Name,Age,price){
        super(Name,Age);
        this.price=price;
    }
    Sell(){
        return `the dog will be sold for ${this.price}`;
    }
    Eat(){
        return `${this.Name} eats bones`;
    }
}
// now i also added a price to the dog which was not added in the animal class so i made the constructor
// for Name,Age,price and then i used the 'super' keyword which is reffering to the Animal class(Also called base class)  
// and the super keyword will use the base class code for Name,Age 
const DogInfo = new Dog("brian",3,10000);
console.log(DogInfo.Sell());
console.log(DogInfo);
console.log(DogInfo.Eat());

