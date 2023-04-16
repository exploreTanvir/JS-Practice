// const btn = document.querySelector("button");
// btn.onclick = function () {
//   alert("Hello");
// };

// btn.addEventListener("click", function () {
//   alert("Hello world");
//   console.log("Hello world");
// });

const colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "orange",
  "purple",
  "violet",
  "indigo",
];
const container = document.querySelector("section");
const h2 = document.querySelector("h2");
const selectedColor = document.querySelector("#selectedColor");

for (color of colors) {
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
  box.style.background = color;
  box.addEventListener("click", function () {
    h2.innerText = "You have selected : ";
    selectedColor.innerText = box.style.background;
    selectedColor.style.background = box.style.background;
  });
}
