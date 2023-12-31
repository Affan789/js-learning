// switch statement
// i am gonna make a program in which we will have to guess a day

let day = +prompt("guess the day");
// or let day = whatever;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
        case 3:
            console.log("wednesday");
            break;
            case 4:
                console.log("thursday");
                break;
                case 5:
                    console.log("friday");
                    break;
                    case 6:
                        console.log("saturday");
                        break;
                        case 7:
                            console.log("sunday");
                            break;
                            default:
                                console.log("invalid day");    
}