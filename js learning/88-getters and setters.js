// getters and setters
// get
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
}
const User1 = new Person1("Affan","Mirza",18);
// console.log(User1.fullName());
// but if i want to treat my method like a property without writing paranthesis() in console,then i am going to use 'get'
// by adding 'get' we won't have to call our method with paranthesis:
console.log(User1.fullName);


// set
// now if i wanna change the fullname like this:User1.setName="Shahmeer Ashraf",then:
User1.setName="Shahmeer Ashraf";
console.log(User1.fullName);
 