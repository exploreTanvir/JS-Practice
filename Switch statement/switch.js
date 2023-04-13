// Switch statement

//switch statement structure

/*switch(expression){
    case condition:
        code block
    break
}
    case condition:
        code block
    break
    default:
        code block
}*/

var text;
var rollNum = 5;

switch (rollNum) {
  case 1:
    text = "congratulation you are first";
    break;
  case 2:
    text = "Not bad you are second";
    break;
  case 3:
    text = "You can do better";
    break;
  default:
    text = "what is your roll ?";
}
console.log(text);

// Grouping case

let color = "yellow";

switch (color) {
  case "red":
  case "green":
  case "blue":
    console.log("You are selected RGB color");
    break;
  case "cyan":
  case "magenta":
  case "yellow":
  case "black":
    console.log("You are selected CMYR color");
}
