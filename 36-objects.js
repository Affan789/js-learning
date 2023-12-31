// objects (reference type)
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects do not have index
// how to create objects

const Student = {
    Name:"affan",
Age:"18" ,
hobbies:["playing games","reading books"]};

console.log(Student);

// how to access data from objects
console.log(Student.Name);
console.log(Student.Age);
console.log(Student.hobbies[1]);
// we can also make arrays inside of objects
console.log(typeof Student);
// how to add key value pair to objects

Student.gender="male";
console.log(Student.gender);

// let i =0;
// while(i <= Student.hobbies.length-1){
//     console.log("while loop",Student.hobbies[i]);
//     i++;
// }






