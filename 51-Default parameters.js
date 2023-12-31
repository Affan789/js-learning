// default parameters

function Addition (a,b){
    return a+b;
};
const Answer = Addition(8,8);
console.log(Answer);
// but if we do not want to set a value in 'b' then we are gonna use the default parameters method:
function add(c,d=0){
    return c+d;
};
const ans = add(4);
console.log(ans);
