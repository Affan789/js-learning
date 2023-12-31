// parameter destructuring

const Human = {
    Name:"affan",
    Age:"18",
    Gender:"male"
};

// function Info(Details){
//     console.log(Details.Name);
//     console.log(Details.Age);
//     console.log(Details.Gender);
// };

// Info(Human);

// we can make this method more simpler by destructuring it
function Info({Name,Gender,Age}){
    console.log(Name);
    console.log(Age);
    console.log(Gender);
};
Info(Human);

