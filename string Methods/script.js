//String methods

var str1 = "This is first text    ";
var str2 = "This is second text";

// charAt()
console.log(str1.charAt(2));

// charCodeAt()
console.log(str1.charCodeAt(3));

// concat()
console.log(str1.concat(str2));

// endsWith()
console.log(str1.endsWith("text"));

// includes()
console.log(str1.includes("first"));

// fromChaarCode()
console.log(String.fromCharCode(114));

// indexOf()
console.log(str1.indexOf("f"));

// lastIndexOf()
console.log(str1.lastIndexOf("t"));

// match()
console.log(str1.match("first"));

// repeat()
console.log(str2.repeat(3));

// replace()
console.log(str2.replace("second", "third"));

// search()
console.log(str1.search("first"));

// slice()
console.log(str1.slice(9, 13));

// split()
console.log(str2.split(" "));

// length
console.log(str2.length);

// toUpperCase()
console.log(str1.toUpperCase());

//subString()
console.log(str2.substring(8, 14));

// toLowerCase()
console.log(str2.toLowerCase());
