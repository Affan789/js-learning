// class practice and extends keywords

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

// but if i want to use the same code for other animals then i am going to use the 'extends' keyword
// and the class dog class is reffered as(sub class) And the animal is reffered as(base class) when using 'extends'
class Dog extends Animal{
   Eat(){
    return `${this.Name} eats bones`;
   }
}

const DogInfo = new Dog("Brian",3);
console.log(DogInfo);
console.log(DogInfo.Above5());
// so what the extends keyword does is that it finds the name,age or whatever thing i have called about the dog
// it will first try to find it in the dog class if not then the extends keyword will try to find it in the animal class



