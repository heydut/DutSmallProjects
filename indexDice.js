// ------------ Dice Game //

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

// img1.setAttribute(`src: images/dice${randomNumber1}.png`);
// img2.setAttribute(`src: images/dice${randomNumber1}.png`);

img1.src = `images/dice${randomNumber1}.png`;
img2.src = `images/dice${randomNumber2}.png`;

///

const h1 = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  h1.innerText = "Player 1 wins!";
} else if (randomNumber1 === randomNumber2) {
  h1.innerText = "Try again! :(";
} else {
  h1.innerText = "Player 2 wins!";
}

// ------------ (End) Dice Game //
