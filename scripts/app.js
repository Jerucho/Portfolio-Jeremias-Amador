// --------- NAVBAR ------------

const burguer = document.querySelector(".header__burguer");
const navbar = document.querySelector(".header__ul");
if (burguer) {
  burguer.addEventListener("click", () => {
    navbar.classList.toggle("header__nav-show");
    navbar.classList.toggle("header__ul");
  });
}

// ------------------ WINDOW ----------------------
/* const ventana = document.querySelector(".window");
const iconos = document.querySelectorAll(".section-skills__img");

// - Inner

/* const h2 = document.querySelector(".window__h2");
const p = document.querySelector(".window__p");
const phrase = [
  {
    h2_text: "Html",
    p_text: "",
  },
  { h2_text: "Css", p_text: "UWUUUUUU" },
  { h2_text: "Js", p_text: "UWUsUUUUU" },
  { h2_text: "React", p_text: "UWdUUUUUU" },
  { h2_text: "Node", p_text: "UWUdUUUUU" },
  { h2_text: "Php", p_text: "UWUUUssUUU" },
];

let html = document.getElementById("html");
let css = document.getElementById("css");
let js = document.getElementById("js");
let react = document.getElementById("react");
let node = document.getElementById("node");
let php = document.getElementById("php");
const exit = document.querySelector(".window__exit");
let retornar;
if (iconos) {
  console.log("ventana");
  iconos.forEach(function (btn) {
    btn.addEventListener("click", () => {
      ventana.classList.toggle("window__quit");
      ventana.classList.toggle("window");

      if (btn === html) {
        h2.innerHTML = phrase[0]["h2_text"];
        p.innerHTML = phrase[0]["p_text"];
      } else if (btn === css) {
        h2.innerHTML = phrase[1]["h2_text"];
        p.innerHTML = phrase[1]["p_text"];
      } else if (btn === js) {
        h2.innerHTML = phrase[2]["h2_text"];
        p.innerHTML = phrase[2]["p_text"];
      } else if (btn === react) {
        h2.innerHTML = phrase[3]["h2_text"];
        p.innerHTML = phrase[3]["p_text"];
      } else if (btn === node) {
        h2.innerHTML = phrase[4]["h2_text"];
        p.innerHTML = phrase[4]["p_text"];
      } else if (btn === php) {
        h2.innerHTML = phrase[5]["h2_text"];
        p.innerHTML = phrase[5]["p_text"];
      }
    });
  });
}
if (exit) {
  exit.addEventListener("click", () => {
    h2.innerHTML = "";
    p.innerHTML = "";
    ventana.classList.toggle("window__quit");
    ventana.classList.toggle("window");
  });
