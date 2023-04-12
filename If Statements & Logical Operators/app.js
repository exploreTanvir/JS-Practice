// If Statements & Logical Operators

// if-else statement syntax
// if (condition) {
//   statement;
// } else {
//   statement;
// }

// example
let num = 1;

if (num == 25) {
  console.log("yes");
} else {
  console.log("noooo");
}

if (num > 0) {
  console.log("The number is positive");
} else if (num < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is 0");
}

//difference between == and ===
// ==
var number = "34";
if (number == 34) {
  console.log("true");
} else {
  console.log("false");
}

// ===
var numb = "34";
if (numb === 34) {
  console.log("true");
} else {
  console.log("false");
}

// logical operators :&& || !
let name = "Tanvir";
let age = 20;
let degree = false;
let experince = 5;

// &&
if ((degree = true && experince >= 6)) {
  console.log(`${name} is capalel for this work `);
} else {
  console.log(`${name} is not capable for this work `);
}

// ||
if (age >= 15 || experince >= 3) {
  console.log(`${name} is capalel for this work `);
} else {
  console.log(`${name} is not  capalel for this work `);
}

// !
if (age != 20) {
  console.log("yesss");
} else {
  console.log("noooo");
}
