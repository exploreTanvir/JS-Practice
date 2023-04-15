// Global variable or Global scope

var global = "Hello i'm Global"; // we can access this variable in anywhere in the code

// Local variable or function scope

function any() {
  var local = "Hello i'm Local"; // we can just use it on a code block in this code
  console.log(global);
  console.log(local);

  if (true) {
    console.log(global);
    console.log(local);
    var insideIf = "Hello i'm inside the IF";
  }
  console.log(insideIf);
}
any();

//console.log(insideIf); //could not run

// Hosting  it works inside a function

var hosistingTest = "Hosting Test";
function hoisting() {
  console.log(hosistingTest); //undefined //for this problem we should use to define a variable into let or const not var..
  var hosistingTest = "Hosting Test";
}
hoisting();
