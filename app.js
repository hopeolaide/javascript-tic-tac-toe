const resetButton = document.querySelector("#resetButton");

const playerA = document.querySelector("#playerA");

const playerB = document.querySelector("#playerB");

const gameArena = document.querySelector("#arena");

const detailsDisplay = document.querySelector("#details");

const tiles = ["", "", "", "", "", "", "", "", ""];

function createGrid() {
  tiles.forEach((tile, position) => {
    const tileElement = document.createElement("div");
    tileElement.classList.add("tile");
    // Use position(index) to assign an id to each tile element (each square)
    tileElement.id = position;
    tileElement.textContent = position + 1; // Display the visible tile number (Different from index position!)
    gameArena.append(tileElement);
  });
}

createGrid();

