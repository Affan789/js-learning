// Methods
// functions inside object are called methods

const Method1 = {
   Name:"Affan",
   Age:18,
   Gender:"male",
   About:function(){
    console.log(`name is ${this.Name} and Age is ${this.Age} and the gender is ${this.Gender}`);
   } 
};

Method1.About();
// in this program i have made a function in an object and the function calls the name,age and gender of the person
// and i have added 'this' keyword in the template string 
// so the this keyword includes the whole object and then calls the name age and gender otherwise if i didnt added this keyword
// then it would have given us an error the 'this' is being referred to as the whole object so that it calls the name age and gender from the object

// now i am gonna make a program in which i am going to make call different peoples Info using this method

function PersonInfo(){
    console.log(`name is ${this.Name} and Age is ${this.Age} and the gender is ${this.Gender}`);
}

 const Person1 = {
    Name:"Affan",
    Age:18,
    Gender:"male",
    About:PersonInfo   
 };
 const Person2 = {
    Name:"Salman",
    Age:56,
    Gender:"male",
    About:PersonInfo   
 };
 const Person3 = {
    Name:"Aman",
    Age:26,
    Gender:"male",
    About:PersonInfo   
 };
 const Person4 = {
    Name:"Subhan",
    Age:30,
    Gender:"male",
    About:PersonInfo   
 };
 const Person5 = {
    Name:"Shagufta",
    Age:50,
    Gender:"Female",
    About:PersonInfo   
 };

 Person1.About();
 Person2.About();
 Person3.About();
 Person4.About();
 Person5.About();

