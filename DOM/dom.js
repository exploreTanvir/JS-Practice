// Document Object Model (DOM)

/*-------------------------------
-----------node type-------------

    Element_Node                :    1
    Attribute_Node              :    2
    Text_Node                   :    3
    Cdata_selection_Node        :    4
    entity_reference_Node       :    5
    Entity_Node                 :    6
    Processing_instruction_Node :    7
    Comment_Node                :    8
    Document_Node               :    9
    Document_type_Node          :    10
    Document_fragment_Node      :    11
    Notation_Node               :    12


    [deplecated    2,5,6,12]
-------------------------------*/

// GetElementById()

const heading = document.getElementById("list");
console.log(heading);

// querySelector()

let text = document.querySelector("li");
console.log(text); //select first element..
text.textContent = "Hello world";

// getElementsByTagName()

let para = document.getElementsByTagName("li"); // could not use forEach function in this selector..

console.log(para[3]);
for (i = 0; i < para.length; i++) {
  para[3].style.color = "red";
}

// getElementsByClassName()
let className = document.getElementsByClassName("paragraph"); // could not use forEach function in this selector..
console.log(className);

// querySelectorAll()

let select = document.querySelectorAll("p"); //we can use forEach function in this selector..
select.forEach((elem) => {
  elem.style.color = "white";
  elem.style.background = "blue";
  elem.style.padding = "10px 8px";
});
console.log(select);

// chideNodes

const ListItem = document.querySelector("ul").childNodes;
console.log(ListItem);
console.log(ListItem[1]);

// children
let child = document.querySelector("ul").children;
console.log(child);

// DOM manupulation

//innerText
//textContent
//innerHTML
const param = document.querySelector(".paragraph");
console.log(param.innerText);
console.log(param.textContent);
console.log(param.innerHTML);
param.style.color = "red";

// value
const formN = document.querySelector("input");
console.log(formN.value);

// GetAttribute

const nli = document.querySelector("li");
console.log(nli.getAttribute("class"));

// setAttribute

console.log(nli.setAttribute("id", "newName"));
var a = document.querySelector("a").setAttribute("href", "https://github.com/");

var img = document.querySelector("img");
img.src =
  "https://images.unsplash.com/photo-1681238093173-4ec3a8eea941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60";
img.style.height = "100px";
img.style.width = "120px";

// Parant element

var li = document.querySelector("li").parentElement;
console.log(li);

//Children

const ul = document.querySelector("ul").children;
console.log(ul);

// nextElementSibling
var li = document.querySelector("li");
console.log(li.nextElementSibling);

// previouseElementSibling
console.log(li.previousElementSibling);

// nextSibling

console.log(li.nextSibling);

// previouseSibling

console.log(li.previousSibling);

// grtCoputerdStyle
var compcs = window.getComputedStyle(img);
console.log(compcs);
console.log(compcs.height);

// classList
console.log(li.classList);

// createElement

var nUl = document.querySelector("ul");
const newElement = (document.createElement("li").innerHTML = "item Five");
//appendChild
console.log(nUl.append(newElement));

//prepend
console.log(nUl.prepend(newElement));

//insertBefore
var lis = document.querySelectorAll("li");

// console.log(nUl.insertBefore(newElement, lis[2]));

// var myImg = (document.createElement = "img");
// myImg.src =
//   "https://images.unsplash.com/photo-1681238093173-4ec3a8eea941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60";
var head = document.querySelector("h2");
// document.body.head.insertAdjacentElement("afterbegin", myImg);

// removechild
nUl.removeChild(lis[0]);

//remove
lis[1].remove();

//Window object
function docu() {
  var w = window.open();
  w.document.open();
  w.document.write("Hello i'm Tanvir Hossen Raju");
}
