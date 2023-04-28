// JSON JavaScript Object Notation
// https://jsonlint.com  browse here to varify json data

/*JSON support just this type of data type
 * string
 * number
 * object
 * array
 * boolean
 * null
 */

var student = {
  name: "Tanvir",
  age: 20,
  hometown: "Jhenaidah",
};

// convert object to JSON format
var student_json = JSON.stringify(student);
console.log(student_json);

// convert JSON to object
var studentNew = JSON.parse(student_json);
console.log(studentNew);

// browse data from another file {data.json}
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
