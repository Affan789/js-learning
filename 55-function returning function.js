// function returning function

function returning (){
    function hello(){
        return "hello world";
    };
    return hello;
};

const returned = returning();
console.log(returned());
// this was function returning function
