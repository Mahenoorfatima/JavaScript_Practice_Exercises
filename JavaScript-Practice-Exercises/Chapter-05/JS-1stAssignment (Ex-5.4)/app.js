let myTable = [];

let numRows = 11; 
let numCols = 5; 


let counter = 0;

for (let row = 0; row < numRows; row++) {

  let tempTable = [];

  for (let col = 0; col < numCols; col++) {

    counter++;

    tempTable.push(counter);
  }

  myTable.push(tempTable);
}

console.table(myTable);