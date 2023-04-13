console.log("select a option\n1. add\n2. subtract\n3. mumtipy\n4. divide");

var n1 = parseInt(prompt("Enter first number"));
var n2 = parseInt(prompt("Enter second number"));
var option = parseInt(
  prompt("Select a option \n\n1. Add 2.  Subtract  3. Mumtipy  4. Divide")
);

var nulln1 = isNaN(n1);
var nulln2 = isNaN(n2);
var nulloption = isNaN(option);

if (nulln1 || nulln2 || nulloption) {
  console.log("Invalid number");
}

switch (option) {
  case 1:
    text = `The ans of first option add is ${n1 + n2}`;
    break;
  case 2:
    text = `The ans of second option subtract is ${n1 - n2}`;
    break;
  case 3:
    text = `The ans of third option mumtipy is ${n1 * n2}`;
    break;
  case 4:
    text = `The ans of fourth option divide is ${n1 / n2}`;
    break;
}

document.querySelector("#text").innerHTML = text;
