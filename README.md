## CODE PLAN

order of operations:

1. `user input` -> **towersOfHanoi()**

   -towersOfHanoi(start, end){
   if (input === legal && move is legal){
   move the block;
   check for the win;
   }
   }

2. `validate input` -> **validInput()** = check for "a, b, c" only

   -validInput(input){
   if (input === a or b or c){
   tell towersOfHanoi()tm. true
   }
   }

3. `validate legal move` -> **isLegal()** = 'if' greater/less than

   -isLegal(start, end){
   if ('starts' top item < than 'ends' top item || if 'end' is empty){
   return true
   }
   }

4. `move block` -> **movePiece()** = pop and push with 'held' variable

   -movePiece(start, end){
   held = start.pop()
   end.push(held)
   }

5. `check for win` -> **checkForWin()** = equality to win state

   -checkForWin(){
   if (the array === win state){
   return true
   }
   }

6. repeat or notify win

## Additional test cases

1. ✔ move several blocks
2. ✔ test valid inputs
3. ✔ verify restart on win

<!-- ## Checklist -->

<!-- 1. 20pts - **Code Plan** - Include this in a `README.md` file in your folder with comments in your code -->
<!-- 1. 10pts - **Move Blocks** - User can move "blocks" from column to column -->
<!-- 1. 20pts - **Illegal Moves** - Prevents larger blocks from stacking on smaller blocks -->
<!-- 1. 20pts - **Notifies winner** - When all the blocks are stacked into column 2 or 1 the user is alerted they won! -->
<!-- 1. 20pts - **Minimum 3 Unit Tests** - Should be attached to your file the same way Tic, Tac, Toe, PigLatin or Rock Paper Scissors is done. -->

<!-- 1. 10pts - **Graphical User Interface** - Take this game out of the terminal by adding a User Interface that uses `towersOfHanoi()` function in `index.js`. -->

- **Extended Practice Bonus!!**
  - ✔ Keeps count of moves as player plays games
  - ✔ Sound Effects
  - ✔ Peaceful Background
  - ✔ Vertical columns
  - ✔ Proportional Stones/tokens
