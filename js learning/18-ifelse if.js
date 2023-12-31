// if else if
// we are gonna make a program in which the program is going to identify if the weather is hot or cold
// we are gonna make two programs one for hot and one for cold weather
// for cold

let enterTemp = 50;

if(enterTemp<0){
    console.log("the weather is extremely cold");

}else if(enterTemp<10){
    console.log("the weather is cold");
}else if(enterTemp<20){
    console.log("the weather is a bit cold");
}else if(enterTemp<30){
    console.log("the weather is warm");
}else if(enterTemp<40){
    console.log("the weather is hot");
}else{
    console.log("the weather is too hot");
}

// for hot
let temperature = 35;
if(temperature>40){
    console.log("the weather is hot");    
}else if(temperature>30){
    console.log("the weather is a bit hot");
}else if(temperature>20){
    console.log("the weather is cold");
}else if(temperature>10){
    console.log("the weather is too cold");
}else {
    console.log("the weather is extremely cold");
}
