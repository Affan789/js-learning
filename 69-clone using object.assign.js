// Clone using Object.assign
// object.assign also has more uses that will be later covered

const element1 = {
    Name:"affan",
    Address:"mayamr"
};
const element2 = element1;
element1.Age=18;
console.log(element1);
console.log(element2);
// as you can see that both elements have Age even though i changed only element1
// this is because both of them have the same address
// now to remove this problem we are going to use Object.assign:

const element3 = {
    Name:"affan",
    Address:"mayamr"
};

const element4=Object.assign({},element3);
element3.Gender="male";
console.log(element3);
console.log(element4);

