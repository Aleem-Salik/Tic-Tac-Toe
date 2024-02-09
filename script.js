const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");
const circle =
  "<img data-player='circle' class='circle' src='images/circle.svg' alt='circle' />";
const cross =
  "<img data-player='cross' class='cross' src='images/cross.svg' alt='cross' />";
let move = cross;

container.addEventListener("click", function (e) {
  if (!e.target) return;
  if (!e.target.classList.contains("cell")) return;
  e.target.innerHTML = move;

  move = move === cross ? circle : cross;
});
