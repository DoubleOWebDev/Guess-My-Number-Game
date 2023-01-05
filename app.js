"use strict";
const result = document.querySelector("#result").textContent;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".status").value);
  if (guess != result) {
    document.querySelector(".message").textContent = "😒 WRONG GUESS BUD";
  } else if (guess === result) {
    document.querySelector(".message").textContent = "😊 YOU'RE A WEINER";
  }
});
