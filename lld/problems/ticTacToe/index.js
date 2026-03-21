class TicTacToe {
  constructor(size) {
    this.board = new Board(size);
  }

  isValid(row, col) {
    let size = this.board.board.length;
    if (row < 0 || col < 0 || row > size || col > size) {
      console.log('invalid location');
      return false;
    }
    if (this.board.board[row][col] != '') {
      console.log('this pos is already filled');
      return false;
    }
    return true;
  }

  isFilledAll() {
    let matrix = this.board.board;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == '') {
          return false;
        }
      }
    }
    console.log('game drew');
    return true;
  }

  fill(row, col, symbol, name) {
    if (this.isFilledAll()) return;
    this.board.board[row][col] = symbol;
    this.checkWin(row, col, symbol, name);
  }

  checkRow(symbol) {
    let matrix = this.board.board;
    for (let i = 0; i < matrix.length; i++) {
      let win = true;
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] != symbol) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }
    return false;
  }

  checkCol(symbol) {
    let matrix = this.board.board;
    for (let i = 0; i < matrix.length; i++) {
      let win = true;
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[j][i] != symbol) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }
    return false;
  }

  checkDiagonal(symbol) {
    let win = true;
    let matrix = this.board.board;
    let n = matrix.length;
    let i = 0;
    let j = 0;
    while (i < n && j < n) {
      if (matrix[i][j] != symbol) {
        win = false;
        break;
      }
      i++;
      j++;
    }
    if (win) return win;

    (i = n - 1), (j = 0);
    while (i > -1 && j < n) {
      if (matrix[i][j] != symbol) {
        win = false;
        break;
      }
      i--;
      j++;
    }
    return win;
  }

  checkWin(row, col, symbol, name) {
    // 4 analogy to win
    let matrix = this.board.board;
    //console.log("row",row,col)
    let win = this.checkRow(symbol) || this.checkCol(symbol) || this.checkDiagonal(symbol);

    if (win) {
      console.log(`player ${name} won`);
    }
  }
}

class Board {
  constructor(size) {
    this.board = Array.from({ length: size }, () => {
      return Array(size).fill('');
    });
  }
}

class Player {
  constructor(name, symbol, game) {
    this.name = name;
    this.symbol = symbol;
    this.game = game;
  }

  play(row, col) {
    if (this.game.isValid(row, col)) {
      // console.log("rowdsds,",row,col)
      this.game.fill(row, col, this.symbol, this.name);
    }
  }
}

let game = new TicTacToe(3);
let player1 = new Player('Rajat', 'X', game);
let player2 = new Player('Sunny', 'O', game);
player1.play(0, 2);
player2.play(1, 1);
player1.play(2, 0);
player2.play(0, 0);
player1.play(2, 2);
player2.play(2, 1);
player1.play(1, 2);

console.log(game.board.board);


class TicTacToe {
  constructor(size = 3) {
    this.size = size;
    this.board = Array.from({ length: size }, () => Array(size).fill(''));
    this.winner = null;
    this.movesCount = 0;
  }

  // Check if a move is valid
  isValid(row, col) {
    if (row < 0 || col < 0 || row >= this.size || col >= this.size) {
      console.log('Invalid location');
      return false;
    }
    if (this.board[row][col] !== '') {
      console.log('This position is already filled');
      return false;
    }
    return true;
  }

  // Make a move
  playMove(row, col, symbol, name) {
    if (this.winner) {
      console.log(`Game over! ${this.winner} already won.`);
      return;
    }

    if (!this.isValid(row, col)) return;

    this.board[row][col] = symbol;
    this.movesCount++;

    if (this.checkWin(row, col, symbol)) {
      this.winner = name;
      console.log(`Player ${name} won!`);
      return;
    }

    if (this.movesCount === this.size * this.size) {
      console.log('Game is a draw!');
    }
  }

  // Check if the current move wins
  checkWin(row, col, symbol) {
    // Check row
    if (this.board[row].every(cell => cell === symbol)) return true;

    // Check column
    if (this.board.every(r => r[col] === symbol)) return true;

    // Check main diagonal
    if (row === col && this.board.every((r, i) => r[i] === symbol)) return true;

    // Check anti-diagonal
    if (row + col === this.size - 1 && this.board.every((r, i) => r[this.size - 1 - i] === symbol)) return true;

    return false;
  }

  printBoard() {
    console.table(this.board);
  }
}

class Player {
  constructor(name, symbol, game) {
    this.name = name;
    this.symbol = symbol;
    this.game = game;
  }

  play(row, col) {
    this.game.playMove(row, col, this.symbol, this.name);
  }
}

// Example usage
const game = new TicTacToe(3);
const player1 = new Player('Rajat', 'X', game);
const player2 = new Player('Sunny', 'O', game);

player1.play(0, 2);
player2.play(1, 1);
player1.play(2, 0);
player2.play(0, 0);
player1.play(2, 2);
player2.play(2, 1);
player1.play(1, 2);

game.printBoard();