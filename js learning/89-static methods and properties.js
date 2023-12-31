// static methods and properties
// static methods and properties are those which are related directly to class 
// they are not related with any other objects
class Person1 {
    constructor(firstName,LastName,Age){
        this.firstName=firstName;
        this.LastName=LastName;
        this.Age=Age;
    } 
     get fullName(){
        return `${this.firstName} ${this.LastName}`;
    }
     set setName(fullname){
        const [firstName,LastName]=fullname.split(" ");
        this.firstName=firstName;
        this.LastName=LastName;
    }
    // static method:
    static PcName(){
        return `hp`;
    }
    // static properties:
    static GraphicsCard = "GTX 750";
}
console.log(Person1.PcName());
console.log(Person1.GraphicsCard);

// we can store the values of these methods and properties in separate variables if we want to
// it is not necessary to store them in an object
