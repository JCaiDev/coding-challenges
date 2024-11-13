function isDuplicate(array) {
  let cache = {};
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value === ".") continue;
    if (value in cache) {
      return true;
    } else {
      cache[value] = 1;
    }
  }
  return false; // Return false if no duplicates are found
}

//Brute Force Method
/**
 * @param: (board: character[][])
 * @return: boolean
 * @examples: ...
 */

class Solution {
  isValidSudokuBruteForce(board) {
    //check row
    for (let row = 0; row < 9; row++) {
      let seen = new Set();
      for (let i = 0; i < 9; i++) {
        if (board[row][i] === ".") continue;
        if (seen.has(board[row][i])) return false;
        seen.add(board[row][i]);
      }
    }

    //check column
    for (let col = 0; col < 9; col++) {
      let seen = new Set();
      for (let i = 0; i < 9; i++) {
        if (board[i][column] === ".") continue;
        if (seen.has(board[i][col])) return false;
        seen.add(board[i][col]);
      }
    }

    //check subgrid 3x3
    for (let square = 0; square < 9; square++) {
      let seen = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let row = Math.floor(square / 3) * 3 + i;

          let col = (square % 3) * 3 + j;
          if (board[row[col]] === ".") continue;
          if (seen.has(board[row][col])) return false;
          seen.add(board[row][col]);
        }
      }
    }
    return true;
  }
  // seen = { 0: [ board[0][0], board[0][1], board[0][2],
  //               board[1][0], board[1][1], board[1][2],
  //               board[2][0], board[2][1], board[2][2] ],
  //          1: [ board[0][3], board[0][4], board[0][5],
  //               board[1][3], board[1][4], board[1][5],
  //               board[2][3], board[2][4], board[2][5] ],
  //        }
  // [["1","2",".",".","3",".",".",".","."],
  // ["4",".",".","5",".",".",".",".","."],
  // [".","9","1",".",".",".",".",".","3"],
  // ["5",".",".",".","6",".",".",".","4"],
  // [".",".",".","8",".","3",".",".","5"],
  // ["7",".",".",".","2",".",".",".","6"],
  // [".",".",".",".",".",".","2",".","."],
  // [".",".",".","4","1","9",".",".","8"],
  // [".",".",".",".","8",".",".","7","9"]]
}

// Hash Set with one pass

class Solution {
  isValidSudoku(board) {
    const cols = new Map();
    const rows = new Map();
    const squares = new Map();

    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === ".") continue;

        const squareKey = `${Math.floor(row / 3)}, ${Math.floor(col / 3)}`;

        if (
          (rows.get(row) && rows.get(row).has(board[row][col])) ||
          (cols.get(col) && cols.get(col).has(board[row][col])) ||
          (squares.get(squareKey) &&
            squares.get(squareKey).has(board[row][col]))
        ) {
          return false;
        }

        if (!rows.has(row)) rows.set(row, new Set());
        if (!cols.has(col)) cols.set(col, new Set());
        if (!squares.has(squareKey)) squares.set(squareKey, new Set());

        rows.get(row).add(board[row][col]);
        cols.get(col).add(board[row][col]);
        squares.get(squareKey).add(board[row][col]);
      }
    }
    return true;
  }
}

// bitmask - learn later
