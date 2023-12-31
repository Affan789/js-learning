// nested destructuring

const Humans = [
    {HumanId: 1, FirstName: "affan", Gender: "male"},
    {HumanId: 2, FirstName: "aman", Gender: "male"},
    {HumanId: 3, FirstName: "subhan",Gender: "male"}
];

const [part1,part2,part3] =Humans;
console.log(part1);
// but if we want specific objects from the array,then:
const [{FirstName:Human1Name},{FirstName:Human2Name},{FirstName:Human3Name}] = Humans;
console.log(Human1Name);
console.log(Human1Name,Human2Name,Human3Name);
