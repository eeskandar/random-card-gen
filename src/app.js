/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomStuff(max) {
  return Math.floor(Math.random() * max);
}

window.onload = function() {
  //bringing the elements from HTML
  const signTop = document.querySelector(".sign-top");
  const cardText = document.querySelector(".card-t");
  const signBot = document.querySelector(".sign-bot");

  //defining values
  let number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let pinta = ["♦", "♥", "♠", "♣"];

  //doing the random stuff
  let blackOrRed = randomStuff(4);
  let numberRandom = number[randomStuff(number.length)];
  let pintaRandom = pinta[blackOrRed];

  //to know if the sign should be red
  if (blackOrRed == 0 || blackOrRed == 1) {
    signTop.classList.add("red");
    signBot.classList.add("red");
  }

  //values to display
  signTop.textContent = pintaRandom;
  cardText.textContent = numberRandom;
  signBot.textContent = pintaRandom;
};
