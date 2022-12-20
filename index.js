let stone = null;

// this function is called when a row is clicked.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row");

  console.log("Yay, we clicked an item", row);
  console.log("Here is the stone's id: ", row.id);
  console.log("Here is the stone's data-size: ", currentRow);

  if (stone === null) {
    pickUpStone(row.id);
  } else {
    dropStone(row.id, stone);
    stone = null;
  }
};

// this function can be called to get the last stone in the stack
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  console.log("selected: ", selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  console.log("you picked up: ", stone);
};

// this function can be called to drop the held stone
const dropStone = (rowID, stone) => {
  document.getElementById(rowID).appendChild(stone);
};
