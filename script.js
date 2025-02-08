const container = document.querySelector("#grid-container");

let button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Reset grid";

button.addEventListener("click", function () {
  const userInput = prompt("Enter the number of squares per side (max 100).");

  const gridSize = Number(userInput);

  if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }

  createGrid(gridSize);
});

function createGrid(gridSize) {
  container.innerHTML = "";

  const squareSize = 960 / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);

    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "purple";
    });
  }
}

createGrid(16);
