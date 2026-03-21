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




// ===================== Board =====================
class Board {
  constructor(size) {
    this.size = size;
    this.cells = Array.from({ length: size }, () => Array(size).fill(''));
  }

  getCell(row, col) {
    return this.cells[row][col];
  }

  setCell(row, col, symbol) {
    this.cells[row][col] = symbol;
  }

  isFull() {
    return this.cells.every(row => row.every(cell => cell !== ''));
  }

  print() {
    console.table(this.cells);
  }
}

// ===================== TicTacToe =====================
class TicTacToe {
  constructor(size = 3) {
    this.size = size;
    this.board = new Board(size);
    this.movesCount = 0;
    this.winner = null;
    this.gameState = 'PLAYING'; // PLAYING | DRAW | WON
  }

  isValid(row, col) {
    if (row < 0 || col < 0 || row >= this.size || col >= this.size) {
      console.log('Invalid move: out of bounds.');
      return false;
    }
    if (this.board.getCell(row, col) !== '') {
      console.log('Invalid move: cell already filled.');
      return false;
    }
    return true;
  }

  playMove(row, col, player) {
    if (this.gameState !== 'PLAYING') {
      console.log(`Game over! ${this.winner ? this.winner.name : 'No one'} won.`);
      return;
    }

    if (!this.isValid(row, col)) return;

    this.board.setCell(row, col, player.symbol);
    this.movesCount++;

    if (this.checkWin(row, col, player.symbol)) {
      this.winner = player;
      this.gameState = 'WON';
      console.log(`Player ${player.name} won!`);
      this.board.print();
      return;
    }

    if (this.board.isFull()) {
      this.gameState = 'DRAW';
      console.log('Game is a draw!');
      this.board.print();
      return;
    }
  }

  checkWin(row, col, symbol) {
    // Check row
    if (this.board.cells[row].every(cell => cell === symbol)) return true;

    // Check column
    if (this.board.cells.every(r => r[col] === symbol)) return true;

    // Check main diagonal
    if (row === col && this.board.cells.every((r, i) => r[i] === symbol)) return true;

    // Check anti-diagonal
    if (row + col === this.size - 1 &&
        this.board.cells.every((r, i) => r[this.size - 1 - i] === symbol)) return true;

    return false;
  }

  printBoard() {
    this.board.print();
  }
}

// ===================== Player =====================
class Player {
  constructor(name, symbol, game) {
    this.name = name;
    this.symbol = symbol;
    this.game = game;
  }

  play(row, col) {
    this.game.playMove(row, col, this);
  }
}

// ===================== Example Game =====================
const game = new TicTacToe(3);
const player1 = new Player('Rajat', 'X', game);
const player2 = new Player('Sunny', 'O', game);

// Simulate some moves
player1.play(0, 0);
player2.play(1, 1);
player1.play(0, 1);
player2.play(2, 2);
player1.play(0, 2); // Rajat should win here

// Print final board
game.printBoard();