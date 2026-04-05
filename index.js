// //1st code
// let t1=performance.now()
// for(let i=1;i<=100;i++){
//     let child= document.createElement('p')
//     child.innerText=`this is line no ${i}`
//     document.body.appendChild(child)
// }
// let t2=performance.now()
// console.log(t2-t1)  //0.5

// //2nd code
// let t3=performance.now()
// let parent=document.createElement('div')
// for(let i=1;i<=100;i++){
//     let child= document.createElement('p')
//     child.innerText=`this is line no ${i}`
//     parent.appendChild(child)
// }
// document.body.appendChild(parent)
// let t4=performance.now()
// console.log(t4-t3)//0.09

// // //code 3
// // let t5=performance.now()
// // let fragment=document.createDocumentFragment()
// // for(let i=1;i<=100;i++){
// //     let child= document.createElement('p')
// //     child.innerText=`this is line no ${i}`
// //     fragment.appendChild(child)
// // }
// // document.body.appendChild(fragment)
// // let t6=performance.now()
// // console.log(t6-t5)

// import { createServer } from "http"

// createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})
//     res.end("hello world")

// }).listen(9000)

// const parent = {role:"Admin"};
// const user = Object.create(parent);

// user.age = 28;
// user.name = "Rajat";
// console.log(user)
// console.log(user.role);

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class TicTacToe {
  constructor(size, players) {
    this.size = size;
    this.board = new Board(size);
    this.isGameOver = false;
    this.players = players;
    this.observers = [];
    this.currentPlayer = 0;
    this.rules = new normalRules();
  }

  addObserver(obs) {
    this.observers.push(obs);
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  switchTurn() {
    this.currentPlayer++;

    if (this.currentPlayer >= this.players.length) {
      this.currentPlayer = 0;
    }
  }

  notify(msg) {
    this.observers.forEach((obs) => {
      obs.notify(msg);
    });
  }

  async startGame() {
    while (this.isGameOver != true) {
      let idx = this.getCurrentPlayer();
      let player = this.players[idx];
      let { row, col } = await player.getMove();

      if (!this.rules.isValid(row, col, this.board)) {
        console.log('Invalid Move');
        continue;
      }

      this.board.setGrid(row, col, player.symbol);
      this.notify(`Player ${player.name} place symbol ${player.symbol} on row-${row}, col- ${col}`);

      if (this.rules.checkWin(row, col, player.symbol, this.board)) {
        this.isGameOver = true;
        this.notify(`Player ${player.name} won`);
        process.exit(0);
      }

      if (this.rules.checkDrow(this.board)) {
        this.isGameOver = true;
        this.notify(`Game drew`);
        process.exit(0);
      }

      this.switchTurn();
    }
  }
}

class Board {
  constructor(size) {
    this.size = size;
    this.grid = Array.from({ length: size }, () => {
      return Array(size).fill('');
    });
  }

  isEmpty(row, col) {
    return this.grid[row][col] == '';
  }

  setGrid(row, col, symbol) {
    this.grid[row][col] = symbol;
  }
}

class Rules {
  constructor() {}
}

class normalRules extends Rules {
  constructor() {
    super();
  }

  isValid(row, col, board) {
    if (row > -1 && col > -1 && row < board.size && col < board.size && board.isEmpty(row, col)) {
      return true;
    }
    return false;
  }

  checkRow(row, symbol, size, grid) {
    let flag = true;
    for (let col = 0; col < size; col++) {
      if (grid[row][col] != symbol) {
        return (flag = false);
      }
    }

    return flag;
  }

  checkCol(col, symbol, size, grid) {
    let flag = true;
    for (let row = 0; row < size; row++) {
      if (grid[row][col] != symbol) {
        return (flag = false);
      }
    }
    return flag;
  }

  checkDiagonal(row, col, symbol, size, grid) {
    if (row != col && row + col != size - 1) return false;

    let winOne = true;
    let winTwo = true;

    // first diagonal
    if (row == col) {
      let newRow = row;
      let newCol = col;
      while (newRow < size) {
        if (grid[newRow][newCol] != symbol) {
          winOne = false;
        }
        newRow++;
        newCol++;
      }
      newRow = row;
      newCol = col;
      while (newRow > -1) {
        if (grid[newRow][newCol] != symbol) {
          winOne = false;
        }
        newRow--;
        newCol--;
      }
    } else {
      winOne = false;
    }

    // 2nd diagonal
    if (row + col == size - 1) {
      let newRow = row;
      let newCol = col;
      while (newCol < size) {
        //console.log(newRow, newCol);
        if (grid[newRow][newCol] != symbol) {
          winTwo = false;
        }
        newRow--;
        newCol++;
      }
      newRow = row;
      newCol = col;
      while (newCol > -1) {
        //console.log(newRow, newCol);
        if (grid[newRow][newCol] != symbol) {
          winTwo = false;
        }
        newRow++;
        newCol--;
      }
    } else {
      winTwo = false;
    }

    return winOne || winTwo;
  }

  checkWin(row, col, symbol, board) {
    let size = board.size;
    let grid = board.grid;
    let isWon =
      this.checkRow(row, symbol, size, grid) ||
      this.checkCol(col, symbol, size, grid) ||
      this.checkDiagonal(row, col, symbol, size, grid);

    return isWon;
  }

  checkDrow(board) {
    let grid = board.grid;
    let size = board.size;
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (grid[row][col] == '') return false;
      }
    }
    return true;
  }
}

class CustomRules extends Rules {
  constructor() {}
}

class Player {
  constructor(name, id, symbol) {
    this.name = name;
    this.id = id;
    this.symbol = symbol;
  }
}

class NormalPlayer extends Player {
  constructor(name, id, symbol, r1) {
    super(name, id, symbol);
    this.rl = r1;
  }

  getMove() {
    return new Promise((resolve) => {
      this.rl.question(`${this.name}, enter row: `, (row) => {
        this.rl.question(`${this.name}, enter col: `, (col) => {
          resolve({
            row: Number(row),
            col: Number(col),
          });
        });
      });
    });
  }
}

class AIPlayer extends Player {}

class IObserver {
  constructor() {}
}

class consoleNotifier extends IObserver {
  constructor() {
    super();
  }

  notify(msg) {
    console.log('{Notification}  ', msg);
  }
}

let playerOne = new NormalPlayer('Rajat', '1', 'X', rl);
let playerTwo = new NormalPlayer('Neelesh', '2', 'O', rl);
let game = new TicTacToe(3, [playerTwo, playerOne]);
let notifier = new consoleNotifier();
game.addObserver(notifier);
game.startGame();
