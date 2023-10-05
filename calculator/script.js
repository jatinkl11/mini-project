"use strict";

const screen = document.querySelector("#screen");
const button = document.querySelectorAll(".btn");
const PI = 22 / 7;
const eularNumber = 2.718281828459045;

for (let item of button) {
  item.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
    if (btnText === "x") {
      btnText = "*";
    }
    if (btnText === "÷") {
      btnText = "/";
    }
    if (
      btnText === "=" ||
      btnText === "Sin" ||
      btnText === "Cos" ||
      btnText === "tan" ||
      btnText === "CE" ||
      btnText === "x!" ||
      btnText === "AC" ||
      btnText === "CE" ||
      btnText == "Pi" ||
      btnText == "e" ||
      btnText == "log" ||
      btnText == "square" ||
      btnText == "root"
    ) {
      btnText = "";
    }
    screen.value += btnText;
  });
}

function sin() {
  screen.value = parseFloat(Math.sin(screen.value).toFixed(6));
}
function cos() {
  screen.value = parseFloat(Math.cos(screen.value).toFixed(6));
}
function tan() {
  screen.value = parseFloat(Math.tan(screen.value).toFixed(6));
}
function pow() {
  screen.value = parseFloat(Math.pow(screen.value, 2).toFixed(6));
}
function sqrt() {
  screen.value = parseFloat(Math.sqrt(screen.value, 2).toFixed(6));
}
function log() {
  screen.value = parseFloat(Math.log(screen.value).toFixed(6));
}
function pi() {
  screen.value = parseFloat(PI.toFixed(6));
}
function e() {
  screen.value = parseFloat(eularNumber.toFixed(6));
}
function fact() {
    let i, num = screen.value, f = 1;
    for (i = 1; i <= num; i++) {
        f = f*i
    }
    screen.value = f;
}
function clearEntry() {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}