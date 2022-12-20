let stone = null;
let size = null;
let rowStart = null;
let rowEnd = null;
let gameBoard = document.getElementById("board");
let moveCount = 0;
document.getElementById("move-count").innerHTML = moveCount;
let audio = new Audio("click.wav");

function playAudio() {
  audio.play();
}

// this function is called when a row is clicked.
const selectRow = (row) => {
  const currentRow = row.getAttribute("data-row");
  // const current = row.lastElementChild.getAttribute("data-size");
  console.log("Yay, we clicked an item", row);

  console.log("row id: ", row.id);
  // console.log("Here is the stone's data-size: ", current);

  if (stone === null) {
    pickUpStone(row.id);
    playAudio();
  } else {
    dropStone(row.id, stone);
    playAudio();
    stone = null;
    size = null;
    rowStart = null;
    moveCount++;
    document.getElementById("move-count").innerHTML = moveCount;
  }
};

// this function can be called to get the last stone in the stack
const pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  rowStart = rowID;
  console.log("selected: ", selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  size = stone.getAttribute("data-size");
  console.log("you picked up: ", size);
};

// this function can be called to drop the held stone
const dropStone = (rowID, stone) => {
  if (isLegal(rowStart, rowID) === true) {
    rowEnd = rowID;
    towersOfHanoi(rowStart, rowID);
    document.getElementById(rowID).appendChild(stone);
  } else {
    alert("invalid placement");
    document.getElementById(rowStart).appendChild(stone);
  }
};

const domWin = () => {
  alert("you Win!");
  resetGame();
};

function resetGame() {
  clearBoard();
  newBoard();
  moveCount = 0;
  document.getElementById("move-count").innerHTML = moveCount;
}

function clearBoard() {
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.lastChild);
  }
}

function newBoard() {
  // gameBoard.innerHTML =
  //   "<div id='c' data-row='top' class='red row' onclick='selectRow(this)'></div><div id='b' data-row='middle' class='yellow row' onclick='selectRow(this)'></div><div id='a' class='green row' data-row='bottom' onclick='selectRow(this)'><div id='4' data-size='4' data-color='yellow' class='stone'></div><div id='3' data-size='3' data-color='red' class='stone'></div><div id='2' data-size='2' data-color='green' class='stone'></div><div id='1' data-size='1' data-color='blue' class='stone'></div></div>";

  document.getElementById("board").innerHTML =
    "<div id='c' data-row='top' class='red row' onclick='selectRow(this)'></div><div id='b' data-row='middle' class='yellow row' onclick='selectRow(this)'></div><div id='a' class='green row' data-row='bottom' onclick='selectRow(this)'><div id='4' data-size='4' data-color='yellow' class='stone'></div><div id='3' data-size='3' data-color='red' class='stone'></div><div id='2' data-size='2' data-color='green' class='stone'></div><div id='1' data-size='1' data-color='blue' class='stone'></div></div>";

  const stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: [],
  };
  rowEnd = null;
}

// -------------------------------------------------------------

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: [],
};
let held = "";

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
};

// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  held = stacks[startStack].pop();
  stacks[endStack].push(held);
};

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (start, end) => {
  if (
    stacks[end].length === 0 ||
    stacks[start].slice(-1)[0] < stacks[end].slice(-1)[0] ||
    start === end
  ) {
    return true;
  } else {
    return false;
  }
};

//valid input format and check
const validInput = (input1, input2) => {
  if (
    (input1 === "a" || input1 === "b" || input1 === "c") &&
    (input2 === "a" || input2 === "b" || input2 === "c")
  ) {
    return true;
  } else {
    return false;
  }
};

//logic to check current array vs win-state

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }
  if (isPrimitive(obj1) && isPrimitive(obj2)) {
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

function isPrimitive(obj) {
  return obj !== Object(obj);
}

function isPrimitive(obj) {
  return obj !== Object(obj);
}

// check for win

const checkForWin = () => {
  if (
    deepEqual(stacks, { a: [], b: [4, 3, 2, 1], c: [] }) ||
    deepEqual(stacks, { a: [], b: [], c: [4, 3, 2, 1] })
  ) {
    domWin();
    console.log("You Win!");
    const stacks = {
      a: [4, 3, 2, 1],
      b: [],
      c: [],
    };
    return true;
  } else {
    return false;
  }
};

// When is this function called? What should it do with its argument?
const towersOfHanoi = (input1, input2) => {
  if (isLegal(input1, input2) === true) {
    movePiece(input1, input2);
    setTimeout(() => {
      checkForWin();
    }, 50);
  } else {
    console.error("Invalid placement");
  }
};
