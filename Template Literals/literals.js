// Template Literals

var name = "Tanvir";
var age = 20;
var job = "Student";
var city = "Jhenaidah";

function hello() {
  return "Hello";
}

// Template Literals (es6)
var html = `<ul>
<li>Name: ${name} </li>
<li>Age: ${age} </li>
<li>Job: ${job} </li>
<li>City: ${city} </li>
<li>Function: ${hello()} </li>
</ul>`;

document.body.innerHTML = html;
