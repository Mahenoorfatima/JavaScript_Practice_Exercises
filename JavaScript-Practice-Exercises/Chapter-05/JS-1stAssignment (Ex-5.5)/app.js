let grid = [];

let numCells = 64;

let counter = 0;

let row = [];

for (let i = 0; i <= numCells; i++) {
  if (counter % 8 === 0) {
    if (row !== undefined) {
      grid.push(row);
    }
    row = [];
  }

  counter++;
  row.push(counter);

  if (counter === 8) {
    grid.push(row);
  }
}

console.log(grid);