console.log("select a option\n1. add\n2. subtract\n3. mumtipy\n4. divide");

var n1 = parseInt(prompt("Enter first number"));
var n2 = parseInt(prompt("Enter second number"));
var option = parseInt(prompt("Select a option"));

var nulln1 = isNaN(n1);
var nulln2 = isNaN(n2);
var nulloption = isNaN(option);

if (nulln1 || nulln2 || nulloption) {
  console.log("Invalid number");
}

switch (option) {
  case 1:
    console.log(`the ans of first option add is ${n1 + n2}`);
    break;
  case 2:
    console.log(`the ans of second option subtract is ${n1 - n2}`);
    break;
  case 3:
    console.log(`the ans of third option multipy is ${n1 * n2}`);
    break;
  case 4:
    console.log(`the ans of fourth option divide is ${n1 / n2}`);
    break;
}
