// warning
const User1 = {
    Name:"affan",
    Age:18,
    About:function(){
        console.log(`name is ${this.Name} and age is ${this.Age}`);
    }
};
// do not make this mistake
const myfunc = User1.About;
myfunc();
// so the console is thinking that we are writing a function without any given name and age
// const myfunc=function(){
//    console.log(`name is ${this.Name} and age is ${this.Age}`);
// }
// this is what the console is recieving
// now to correct this:
const yourfunc=User1.About.bind(User1);
yourfunc();