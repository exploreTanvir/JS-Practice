//Arrays & Array Methods

// there is two way to declear a array

//1
var arayName = ["item One", "item two", "item three", "..."];

//2
var arayN = new Array("item one", "item two", "item three", "...");

var color = ["red", "yellow", "green", "blue", "orange"];
var num = [25, 200, 56, 58, 95, 41, 25, 15, 44];
console.log(color[2]);

//length
console.log(color.length);

// isArray()
console.log(Array.isArray(color));

// indexOf()
console.log(color.indexOf("green"));

// push() add item in last of the array
console.log(color.push("white"));
console.log(color);

// unShift() add item in first of the array
console.log(color.unshift("white"));
console.log(color);

// pop() remove last item in the array
console.log(color.pop());
console.log(color);

// Shift() remove first item  in the array
console.log(color.shift());
console.log(color);

// reverse()
console.log(color.reverse());

//sort()
console.log(color.sort());
console.log(num.sort());

// sorting with compare function
console.log(
  num.sort(function (x, y) {
    return x - y;
  })
);

//concat()
console.log(arayName.concat(arayN));
