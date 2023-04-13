// Function

//stucture
/*Function functionName(parameter){
    code block
}
functionName(argument)*/

// Function Declaration
function funcName(a, b) {
  console.log(a + b);
}
// Function calling
funcName(10, 20);

//Local variables
function greet() {
  var username = "Tanvir"; //we can use this only between the function block
  console.log("Hello " + username);
}
greet();

// Global variables
var userN = "Raju";
function greeting() {
  console.log("Hello " + userN); // we can use this variables everywhere in this js code
}
greeting();
console.log(userN);

//Parameters and its evolution

// old way
function test(a, b) {
  if (typeof a === "undefined") {
    a = "Tanvir ";
  }
  if (typeof b === "undefined") {
    b = "Hossen";
  }
  console.log("Hello " + a + b);
}
test();

//ES6 or modern way

function func(a = "Tanvir ", b = "Hossen") {
  console.log("Hello " + a + b);
}
func();

// Returning a value
function square(x) {
  return x * x;
  // For store this function value on a variable we use return
}
let squareFour = square(4);
console.log(squareFour);
