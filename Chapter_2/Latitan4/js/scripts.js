document.write("Hello World!!");
document.write("<h2>Saya Sedang Belajar DOM</h2>");

//Dome Selector get element by id
const app = document.getElementById("app");
app.innerText = "This is app Element";
app.style.backgroundColor = "gold";
app.style.padding = "10px";
app.style.width = "500px";

//DOM selector get Elemet by class name
const paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);
//paragraph 1
paragraphs[0].innerHTML = "This is first paragraph";
paragraphs[0].style.color = "red";

//Paragraph 2
paragraphs[1].style.color = "green";

//paragraph
paragraphs[2].style.color = "blue";

setTimeout(() => {
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "black";
  }
}, 5000);

//DOM manipulation
const title = document.createElement("h1");
title.textContent = "This is title created by DOM";
document.body.append(title);
// ingin menghapus paragraph 3 setelah 7 sec
setTimeout(() => {
  paragraphs[2].remove();
}, 7000);

//change background and text color
const bgColor = document.getElementById("bgColor");
const textColor = document.getElementById("textColor");

//bg color input
bgColor.addEventListener("change", (event) => {
  document.body.style.backgroundColor = bgColor.value;
});

textColor.addEventListener("change", (event) => {
  document.body.style.color = textColor.value;
});
