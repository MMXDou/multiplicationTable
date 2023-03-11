
const container = document.querySelector(".container");

let num = 9;

for (let i = 0; i < 9; i++) {
  let currentRow = addARow(i);
  for (let j = 0; j <= i; j++) {
    addACell(currentRow, i, j)
  }
}

function addARow(i) {
  let newRow = document.createElement('div');
  container.append(newRow);
  return newRow;
}

function addACell(currentRow, i, j) {
  let newCell = document.createElement('span');
  let multiplication = (i + 1) + " X " + (j + 1) + " = ";
  multiplication += (i + 1) * (j + 1);
  newCell.innerText = multiplication;
  currentRow.append(newCell);
}