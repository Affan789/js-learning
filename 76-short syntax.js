// short syntax

const User1 = {
    Name:"affan",
    Age:18,
    About:function(){
        console.log(`name is ${this.Name} and age is ${this.Age}`);
    }
};

// we can make this syntax shorter like this:
const User2 = {
    Name:"shahmeer",
    Age:17,
    About(){
        console.log(`name is ${this.Name} and age is ${this.Age}`);
    }
};
User2.About();