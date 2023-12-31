// object inside array
// this is very useful in real world applications

const Humans = [
    {HumanId: 1, FirstName: "affan", Gender: "male"},
    {HumanId: 2, FirstName: "aman", Gender: "male"},
    {HumanId: 3, FirstName: "subhan",Gender: "male"}
];

for(let Human of Humans){
    console.log(Human);
    console.log(Human.FirstName);
};