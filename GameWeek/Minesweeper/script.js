const startBtn = document.querySelector("#startGameBtn");
const numberField = document.querySelector("#gameSize");
const gameArea = document.querySelector("#gameArea");
let mines = new Set();

const startGame = () => {
  gameArea.innerHTML = "";
  gameArea.appendChild(generateField());
  mines = createMines();
};
const generateField = () => {
  const gameField = document.createElement("div");
  gameField.classList.add("gameField");
  for (let i = 0; i < numberField.value; i++) {
    const row = document.createElement("div");
    row.classList.add("gameRow");
    gameField.appendChild(row);
    for (let j = 1; j <= numberField.value; j++) {
      const cell = document.createElement("div");
      cell.classList.add("gameCell");
      cell.classList.add("notChecked");
      cell.id = i * numberField.value + j;
      row.appendChild(cell);

      cell.addEventListener("click", clickedCell);
    }
  }
  return gameField;
};
const createMines = () => {
  const mineAmount = Math.ceil(
    Math.random() * ((numberField.value * numberField.value) / 3) +
      Number(numberField.value)
  );
  console.log(mineAmount);
  const minePlacements = new Set();
  while (minePlacements.size < mineAmount) {
    minePlacements.add(
      Math.ceil(Math.random() * numberField.value * numberField.value)
    );
  }
  return minePlacements;
};
const clickedCell = (event) => {
    checkPos(event.target);
}
const checkPos = (cell) => {
  if (mines.has(Number(cell.id))) {
    console.log("Boom");
    cell.classList.remove("notChecked");
    cell.classList.add("boom")
  } else {
    cell.classList.remove("notChecked");
    cell.classList.add("checked");
    const {mineCounter, checkedCells} = checkAdjacents(cell.id);
    cell.innerHTML = mineCounter

    if(mineCounter == 0) {
        checkedCells.forEach(cellID => {
            const cellToCheck = document.getElementById(cellID)
            if(!cellToCheck.classList.contains("checked")) checkPos(cellToCheck)
        })
    }
  }
};
const checkAdjacents = (checkedPos) => {
    const size = Number(numberField.value);
    const row = Math.floor((checkedPos - 1) / size);
    const col = (checkedPos - 1) % size;
  
    const cellsToCheck = [
      { r: row - 1, c: col - 1 }, { r: row - 1, c: col }, { r: row - 1, c: col + 1 },
      { r: row, c: col - 1 }, { r: row, c: col + 1 },
      { r: row + 1, c: col - 1 }, { r: row + 1, c: col }, { r: row + 1, c: col + 1 }
    ];
  
    let mineCounter = 0;
    const checkedCells = []
    cellsToCheck.forEach(({ r, c }) => {
      if (r >= 0 && r < size && c >= 0 && c < size) {
        const cellId = r * size + c + 1; 
        if (mines.has(cellId)) mineCounter++;
        checkedCells.push(cellId)
      }
    });
    return {mineCounter, checkedCells};
  };
  

startBtn.addEventListener("click", startGame);
