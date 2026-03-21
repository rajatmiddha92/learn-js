// class TicTacToe {
//   constructor(size) {
//     this.board = new Board(size);
//   }

//   isValid(row, col) {
//     let size = this.board.board.length;
//     if (row < 0 || col < 0 || row > size || col > size) {
//       console.log('invalid location');
//       return false;
//     }
//     if (this.board.board[row][col] != '') {
//       console.log('this pos is already filled');
//       return false;
//     }
//     return true;
//   }

//   isFilledAll() {
//     let matrix = this.board.board;
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] == '') {
//           return false;
//         }
//       }
//     }
//     console.log('game drew');
//     return true;
//   }

//   fill(row, col, symbol, name) {
//     if (this.isFilledAll()) return;
//     this.board.board[row][col] = symbol;
//     this.checkWin(row, col, symbol, name);
//   }

//   checkRow(symbol) {
//     let matrix = this.board.board;
//     for (let i = 0; i < matrix.length; i++) {
//       let win = true;
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] != symbol) {
//           win = false;
//           break;
//         }
//       }
//       if (win) return true;
//     }
//     return false;
//   }

//   checkCol(symbol) {
//     let matrix = this.board.board;
//     for (let i = 0; i < matrix.length; i++) {
//       let win = true;
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[j][i] != symbol) {
//           win = false;
//           break;
//         }
//       }
//       if (win) return true;
//     }
//     return false;
//   }

//   checkDiagonal(symbol) {
//     let win = true;
//     let matrix = this.board.board;
//     let n = matrix.length;
//     let i = 0;
//     let j = 0;
//     while (i < n && j < n) {
//       if (matrix[i][j] != symbol) {
//         win = false;
//         break;
//       }
//       i++;
//       j++;
//     }
//     if (win) return win;

//     (i = n - 1), (j = 0);
//     while (i > -1 && j < n) {
//       if (matrix[i][j] != symbol) {
//         win = false;
//         break;
//       }
//       i--;
//       j++;
//     }
//     return win;
//   }

//   checkWin(row, col, symbol, name) {
//     // 4 analogy to win
//     let matrix = this.board.board;
//     //console.log("row",row,col)
//     let win = this.checkRow(symbol) || this.checkCol(symbol) || this.checkDiagonal(symbol);

//     if (win) {
//       console.log(`player ${name} won`);
//     }
//   }
// }

// class Board {
//   constructor(size) {
//     this.board = Array.from({ length: size }, () => {
//       return Array(size).fill('');
//     });
//   }
// }

// class Player {
//   constructor(name, symbol, game) {
//     this.name = name;
//     this.symbol = symbol;
//     this.game = game;
//   }

//   play(row, col) {
//     if (this.game.isValid(row, col)) {
//       // console.log("rowdsds,",row,col)
//       this.game.fill(row, col, this.symbol, this.name);
//     }
//   }
// }

// let game = new TicTacToe(3);
// let player1 = new Player('Rajat', 'X', game);
// let player2 = new Player('Sunny', 'O', game);
// player1.play(0, 2);
// player2.play(1, 1);
// player1.play(2, 0);
// player2.play(0, 0);
// player1.play(2, 2);
// player2.play(2, 1);
// player1.play(1, 2);

// console.log(game.board.board);

// // ===================== Board =====================
// class Board {
//   constructor(size) {
//     this.size = size;
//     this.cells = Array.from({ length: size }, () => Array(size).fill(''));
//   }

//   getCell(row, col) {
//     return this.cells[row][col];
//   }

//   setCell(row, col, symbol) {
//     this.cells[row][col] = symbol;
//   }

//   isFull() {
//     return this.cells.every(row => row.every(cell => cell !== ''));
//   }

//   print() {
//     console.table(this.cells);
//   }
// }

// // ===================== TicTacToe =====================
// class TicTacToe {
//   constructor(size = 3) {
//     this.size = size;
//     this.board = new Board(size);
//     this.movesCount = 0;
//     this.winner = null;
//     this.gameState = 'PLAYING'; // PLAYING | DRAW | WON
//   }

//   isValid(row, col) {
//     if (row < 0 || col < 0 || row >= this.size || col >= this.size) {
//       console.log('Invalid move: out of bounds.');
//       return false;
//     }
//     if (this.board.getCell(row, col) !== '') {
//       console.log('Invalid move: cell already filled.');
//       return false;
//     }
//     return true;
//   }

//   playMove(row, col, player) {
//     if (this.gameState !== 'PLAYING') {
//       console.log(`Game over! ${this.winner ? this.winner.name : 'No one'} won.`);
//       return;
//     }

//     if (!this.isValid(row, col)) return;

//     this.board.setCell(row, col, player.symbol);
//     this.movesCount++;

//     if (this.checkWin(row, col, player.symbol)) {
//       this.winner = player;
//       this.gameState = 'WON';
//       console.log(`Player ${player.name} won!`);
//       this.board.print();
//       return;
//     }

//     if (this.board.isFull()) {
//       this.gameState = 'DRAW';
//       console.log('Game is a draw!');
//       this.board.print();
//       return;
//     }
//   }

//   checkWin(row, col, symbol) {
//     // Check row
//     if (this.board.cells[row].every(cell => cell === symbol)) return true;

//     // Check column
//     if (this.board.cells.every(r => r[col] === symbol)) return true;

//     // Check main diagonal
//     if (row === col && this.board.cells.every((r, i) => r[i] === symbol)) return true;

//     // Check anti-diagonal
//     if (row + col === this.size - 1 &&
//         this.board.cells.every((r, i) => r[this.size - 1 - i] === symbol)) return true;

//     return false;
//   }

//   printBoard() {
//     this.board.print();
//   }
// }

// ===================== Player =====================
// class Player {
//   constructor(name, symbol, game) {
//     this.name = name;
//     this.symbol = symbol;
//     this.game = game;
//   }

//   play(row, col) {
//     this.game.playMove(row, col, this);
//   }
// }

// // ===================== Example Game =====================
// const game = new TicTacToe(3);
// const player1 = new Player('Rajat', 'X', game);
// const player2 = new Player('Sunny', 'O', game);

// // Simulate some moves
// player1.play(0, 0);
// player2.play(1, 1);
// player1.play(0, 1);
// player2.play(2, 2);
// player1.play(0, 2); // Rajat should win here

// // Print final board
// game.printBoard();

// Observer Pattern
class IObserver {
  update(msg) {}
}

class ConsoleNotifier extends IObserver {
  update(msg) {
    console.log('[Notification]', msg);
  }
}

// Symbol class
class Symbol {
  constructor(mark) {
    this.mark = mark;
  }

  getMark() {
    return this.mark;
  }
}

// Board class
class Board {
  constructor(size) {
    this.size = size;
    this.emptyCell = new Symbol('-');
    this.grid = Array.from({ length: size }, () =>
      Array.from({ length: size }, () => this.emptyCell)
    );
  }

  isCellEmpty(row, col) {
    if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
      return false;
    }
    return this.grid[row][col] === this.emptyCell;
  }

  placeMark(row, col, symbol) {
    if (!this.isCellEmpty(row, col)) return false;
    this.grid[row][col] = symbol;
    return true;
  }

  getCell(row, col) {
    if (row < 0 || row >= this.size || col < 0 || col >= this.size) {
      return this.emptyCell;
    }
    return this.grid[row][col];
  }

  getSize() {
    return this.size;
  }

  getEmptyCell() {
    return this.emptyCell;
  }

  display() {
    console.log('\n  ' + [...Array(this.size).keys()].join(' '));
    for (let i = 0; i < this.size; i++) {
      let row = this.grid[i].map((cell) => cell.getMark()).join(' ');
      console.log(i + ' ' + row);
    }
    console.log();
  }
}

// Player class
class TicTacToePlayer {
  constructor(id, name, symbol) {
    this.playerId = id;
    this.name = name;
    this.symbol = symbol;
    this.score = 0;
  }

  getName() {
    return this.name;
  }

  getSymbol() {
    return this.symbol;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score++;
  }
}

// Strategy Pattern
class TicTacToeRules {
  isValidMove(board, row, col) {}
  checkWinCondition(board, symbol) {}
  checkDrawCondition(board) {}
}

class StandardTicTacToeRules extends TicTacToeRules {
  isValidMove(board, row, col) {
    return board.isCellEmpty(row, col);
  }

  checkWinCondition(board, symbol) {
    const size = board.getSize();

    // Rows
    for (let i = 0; i < size; i++) {
      let win = true;
      for (let j = 0; j < size; j++) {
        if (board.getCell(i, j) !== symbol) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }

    // Columns
    for (let j = 0; j < size; j++) {
      let win = true;
      for (let i = 0; i < size; i++) {
        if (board.getCell(i, j) !== symbol) {
          win = false;
          break;
        }
      }
      if (win) return true;
    }

    // Main diagonal
    let win = true;
    for (let i = 0; i < size; i++) {
      if (board.getCell(i, i) !== symbol) {
        win = false;
        break;
      }
    }
    if (win) return true;

    // Anti-diagonal
    win = true;
    for (let i = 0; i < size; i++) {
      if (board.getCell(i, size - 1 - i) !== symbol) {
        win = false;
        break;
      }
    }
    return win;
  }

  checkDrawCondition(board) {
    const size = board.getSize();
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (board.getCell(i, j) === board.getEmptyCell()) {
          return false;
        }
      }
    }
    return true;
  }
}

// Game class
class TicTacToeGame {
  constructor(size) {
    this.board = new Board(size);
    this.rules = new StandardTicTacToeRules();
    this.players = [];
    this.observers = [];
    this.gameOver = false;
    this.currentIndex = 0;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify(msg) {
    this.observers.forEach((o) => o.update(msg));
  }

  async play() {
    if (this.players.length < 2) {
      console.log('Need at least 2 players!');
      return;
    }

    const readline = (await import('node:readline')).createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const ask = (q) => new Promise((res) => readline.question(q, res));

    this.notify('Game Started!');

    while (!this.gameOver) {
      this.board.display();

      const player = this.players[this.currentIndex];
      const input = await ask(`${player.getName()} (${player.getSymbol().getMark()}) row col: `);
      const [row, col] = input.split(' ').map(Number);

      if (this.rules.isValidMove(this.board, row, col)) {
        this.board.placeMark(row, col, player.getSymbol());
        this.notify(`${player.getName()} played (${row},${col})`);

        if (this.rules.checkWinCondition(this.board, player.getSymbol())) {
          this.board.display();
          console.log(player.getName() + ' wins!');
          player.incrementScore();
          this.notify(player.getName() + ' wins!');
          this.gameOver = true;
        } else if (this.rules.checkDrawCondition(this.board)) {
          this.board.display();
          console.log("It's a draw!");
          this.notify('Game Draw!');
          this.gameOver = true;
        } else {
          this.currentIndex = (this.currentIndex + 1) % this.players.length;
        }
      } else {
        console.log('Invalid move! Try again.');
      }
    }

    readline.close();
  }
}

// Factory
const GameType = {
  STANDARD: 'STANDARD',
};

class TicTacToeGameFactory {
  static createGame(type, size) {
    if (type === GameType.STANDARD) {
      return new TicTacToeGame(size);
    }
    return null;
  }
}

// Main
(async () => {
  const readline = (await import('node:readline')).createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q) => new Promise((res) => readline.question(q, res));

  console.log('=== TIC TAC TOE ===');
  const size = parseInt(await ask('Enter board size: '));
  readline.close();

  const game = TicTacToeGameFactory.createGame(GameType.STANDARD, size);

  const notifier = new ConsoleNotifier();
  game.addObserver(notifier);

  const player1 = new TicTacToePlayer(1, 'Aditya', new Symbol('X'));
  const player2 = new TicTacToePlayer(2, 'Harshita', new Symbol('O'));

  game.addPlayer(player1);
  game.addPlayer(player2);

  await game.play();
})();
