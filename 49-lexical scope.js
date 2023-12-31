// Lexical Scope
const val="value1";
function MyFunc(){
    //  const val ="value2";
    function YourFunc(){
        // const val="value45";
        console.log("inside your func",val);
        function func2(){
            console.log("inside func2",val);
        }
        func2();
    }
    console.log(val);
    YourFunc();
};
MyFunc();
// so the javascript will try to see if theres a variable inside yourfunc if not then it will try to see 
// things in lexical scope and print the value that was outside yourfunc 
// so now i have put the variable outside of the myfunc and so the javascript will try to see if the variable is in func2 then it will try to it in myfunc and then it will see if it is in yourfunc
// if not then it will try to see the variable in lexical environment