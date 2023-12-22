let board = document.querySelector(".board");
let blackButton = document.querySelector(".btn-dark");
let randomButton = document.querySelector(".btn-warning");
let resetButton = document.querySelector(".btn-info");

blackButton.addEventListener('click', () => setColor('black'));
randomButton.addEventListener('click', () => setColor('random'));
resetButton.addEventListener('click', resetGrid);

// Set default size to 16 and create grid
createGrid(16);

function askForSize() {
    let size = prompt("Please enter the size (default is 16):");

    if (size !== null && size !== "") {
        size = parseInt(size);
        if (size > 64) {
            alert("The number should be below or equal to 64!");
        } else {
            createGrid(size);
        }
    } else {
        // If no size is provided, use default size (16)
        createGrid(16);
    }
}

function createGrid(size) {
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.classList.add("cell");
        board.appendChild(cell);

        cell.addEventListener("mouseover", function () {
            setColor(cell);
        });
    }
}

function setColor(cell) {
    let color;

    if (cell === 'black' || cell === 'random') {
        color = cell;
    } else {
        color = 'black';
    }

    if (color === 'random') {
        cell.style.backgroundColor = getRandomColor();
    } else {
        cell.style.backgroundColor = color;
    }
}

function resetGrid() {
    let cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
