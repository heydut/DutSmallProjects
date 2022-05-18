// ------------ Color Flipper //
const button = document.querySelector("button");
button.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// ------------ (End) Color Flipper //
