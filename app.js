"use strict";
const gameNumber = Math.floor(Math.random() * 21);

let score = 20;

document.querySelector(".value").innerHTML = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".status").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😒 NO NUMBER BUD";
    //When guess is too high
  }
  if (guess !== gameNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > gameNumber ? "🥲 Too high Bud" : "😤 TOO LOW BUD";
      score--;
      document.querySelector(".value").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😑You Lost the Game. TRY AGAIN!";
      document.querySelector(".value").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector("#result").textContent = gameNumber;
    }
  } else {
    document.querySelector(".message").textContent = "😊 YOU'RE A WEINER";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("#result").textContent = gameNumber;
    document.querySelector("#highScore").textContent = score;
  }
});

let gameReset = document.querySelector(".reset");
gameReset.addEventListener("click", function () {
  console.log("You just clicked me!");

  score = 20;
  document.querySelector(".value").textContent = score;

  document.querySelector("body").style.backgroundColor = "rgb(143, 143, 143)";
  document.querySelector(".message").textContent = "Start Guessing...";
});
