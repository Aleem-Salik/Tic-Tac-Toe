const container = document.querySelector(".container");
const cells = document.querySelectorAll(".cell");
const heading = document.querySelector(".heading");
const players = {
  cross:
    "<img data-player='cross' class='cross' src='images/cross.svg' alt='cross' />",
  nought:
    "<img data-player='circle' class='nought' src='images/circle.svg' alt='circle' />",
};

let move = "cross";

const checkWinner = function (line) {
  const rowData = [];
  document.querySelectorAll(`.${line}`).forEach((el) => {
    rowData.push(el.firstElementChild?.dataset.player);
  });
  if (rowData[0] == rowData[1] && rowData[1] == rowData[2]) {
    heading.innerText = `${move.toUpperCase()} WINS 🏆`;
    document.querySelectorAll(`.${line}`).forEach((cell) => {
      cell.style.backgroundColor = "Seagreen";
    });
  }
};

const checkDiagonal = function (element, index) {
  if (element.classList[index]) {
    const diagonal = element.classList[index];
    checkWinner(diagonal);
  }
};

container.addEventListener("click", function (e) {
  const element = e.target;
  if (element.innerHTML) return;
  if (!element) return;
  if (!element.classList.contains("cell")) return;
  element.innerHTML = players[move];

  const row = element.classList[1];
  checkWinner(row);

  const column = element.classList[2];
  checkWinner(column);

  checkDiagonal(element, 3);
  checkDiagonal(element, 4);

  move = move === "cross" ? "nought" : "cross";
});
