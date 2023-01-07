"use strict";
const gameNumber = Math.floor(Math.random() * 21);

let score = 20;
const gameReset = document
  .querySelector(".reset")
  .addEventListener("click", function () {
    score = 0;
    guess = 0;
  });
document.querySelector(".value").innerHTML = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".status").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😒 NO NUMBER BUD";
    //When guess is too high
  } else if (guess > gameNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🥲 Too high Bud";
      score--;
      document.querySelector(".value").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😑You Lost the Game. TRY AGAIN!";
      document.querySelector(".value").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector("#result").textContent = gameNumber;
    }
    //When guess is too low
  } else if (guess < gameNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😤 TOO LOW BUD";
      score--;
      document.querySelector(".value").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😑You Lost the Game. TRY AGAIN!";
      document.querySelector(".value").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector("#result").textContent = gameNumber;
    }
    //When guess is equal to mystery number
  } else if (guess === gameNumber) {
    document.querySelector(".message").textContent = "😊 YOU'RE A WEINER";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector("#result").textContent = gameNumber;
    document.querySelector("highScore").textContent = score;
  }
});
