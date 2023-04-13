// loops

// For loop

// syntax

/*for(Start;stop;increment/decrement){
    condeition
}*/

for (i = 0; i < 10; i += 1) {
  console.log(i);
}

let arr = ["one", "two", "three", "four", "five"];
var lnt = arr.length;
for (i = 0; i < lnt; i++) {
  console.log(arr[i]);
}

// while loop

// syntax

/*let i = 0;
while (condition) {
  statement;
  increment / decrement;
}*/

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

var i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// do while loop

// syntax

/*initialization;
do {
  statement;
  increment / decrement;
} while (condition);*/

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// forEach loop

let arrr = ["one", "two", "three", "four", "five"];
arrr.forEach((elem, index) => {
  console.log(elem, index);
});

// for..of loop    we use it on a array

for ([index, element] of arr.entries()) {
  if (element === 2) {
    continue;
  }
  console.log(index, element);
}

// for..in loop   we use it on a object

var myobj = { name: "Tanvir", age: 20, city: "Jhenaidah" };

for (element in myobj) {
  console.log(`property: ${element} and value: ${myobj[element]}`);
}

// Exicution Time

let myarr = [100000];
console.time("for");
for (i = 0; i < myarr[0]; i++) {}
console.timeEnd("for");

console.time("while");
var i = 0;
while (i < myarr[0]) {
  i++;
}
console.timeEnd("while");

console.time("forEach");
myarr.forEach((elem) => {
  "";
});
console.timeEnd("forEach");

console.time("for..of");
for (elem of myarr) {
}
console.timeEnd("for..of");
