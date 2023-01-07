"use strict";
const result = document.querySelector("#result").textContent;

const magicNumber = (document.querySelector("#result").textContent = Math.floor(
  Math.random() * 21
));
let score = 20;

document.querySelector(".value").innerHTML = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".status").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😒 WRONG GUESS BUD";
  } else if (guess > magicNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "🥲 Too high Bud";
      score--;
      document.querySelector(".value").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Lost the Game. TRY AGAIN!";
    }
  } else if (guess < magicNumber) {
    if (score < 0) {
      document.querySelector(".message").textContent = "😤 TOO LOW BUD";
      score--;
      document.querySelector(".value").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "You Lost the Game. TRY AGAIN!";
    }
  } else if (guess === magicNumber) {
    document.querySelector(".message").textContent = "😊 YOU'RE A WEINER";
  }
});
