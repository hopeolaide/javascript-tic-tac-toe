const resetButton = document.querySelector("#resetButton");

const gameArena = document.querySelector("#arena");

const statusDisplay = document.querySelector("#status");

const tiles = ["", "", "", "", "", "", "", "", ""];

let move = "circle";

statusDisplay.textContent = "Make a move!";

function createGrid() {
    tiles.forEach((tile, position) => {
        const tileElement = document.createElement("div");
        tileElement.classList.add("tile");
        // Use position(index) to assign an id to each tile element (each square)
        tileElement.id = position;
        // const tileNumber = tileElement.textContent = position + 1; // Display the visible tile number (Different from index position!)
        tileElement.addEventListener("click", addMove);
        gameArena.append(tileElement);
    });
}

createGrid();

function addMove(e) {
    // console.log(e.target) /* Use to check/test which tile has been selected */
    const moveDisplay = document.createElement("div");

    /* This adds the move class to the tile/div element */
    moveDisplay.classList.add(move);
    e.target.append(moveDisplay);
    tiles[e.target.id] = move; /* This adds the move to the tiles array */
    // statusDisplay.textContent = `${move} selected`;
    /* Ternary operator to change move from circle to cross or vice versa */
    move = move === "circle" ? "cross" : "circle";
    statusDisplay.textContent = `${move}'s turn`;

    if (checkWin()) {
		move = move === "circle" ? "cross" : "circle";
        statusDisplay.textContent = `${move} wins!`;
		
        resetBoard();
    } else if (checkDraw()) {
        statusDisplay.textContent = "It's a draw!";
        resetBoard();
    } else {
        e.target.removeEventListener("click", addMove);
    }
}
function checkWin() {
    const winningCombinations = [
        // Horizontal winning combinations
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // Vertical winning combinations
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // Diagonal winning combinations
        [0, 4, 8],
        [2, 4, 6],
    ];

    /*This loop checks each winning condition */
    /*The value of i is equivalent to the index of the winning condition */
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return tiles.every((tile) => {
        return tile !== "";
    });
}

resetButton.addEventListener("click", resetBoard);

function resetBoard() {
    /* This function resets the board by  using the fill method to clear the tiles array. */
    tiles.fill("");
    const moveDisplays = document.querySelectorAll(".circle, .cross");
    /* We iterate the moveDisplays array and removing each selected element with the class of "circle" or "cross" from the DOM */
    moveDisplays.forEach((moveDisplay) => {
        moveDisplay.remove();
    });
}
