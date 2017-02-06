'use strict';

var MinesweeperCell = require('./MinesweeperCell');

function MinesweeperModel() {
  this.STATUS_WIN = 'win';
  this.STATUS_LOSE = 'lose';
  this.STATUS_PLAYING = 'playing';

  this.MIN_X_COUNT = 5;
  this.MAX_X_COUNT = 30;
  this.MIN_Y_COUNT = 5;
  this.MAX_Y_COUNT = 30;

  this.gameStatus = MinesweeperModel.STATUS_PLAYING;
  this.cells = [];
  this.size = { x: false, y: false };
}

MinesweeperModel.prototype.startGame = function (mineCount, size) {
  this.gameStatus = this.STATUS_PLAYING;
  this.cells = [];
  if (size.x && size.y && size.x >= this.MIN_X_COUNT && size.x <= this.MAX_X_COUNT && size.y >= this.MIN_Y_COUNT && size.y <= this.MAX_Y_COUNT) {
    this.size = size;
  } else {
    this.size = { x: 10, y: 10 };
  }

  if (!mineCount) {
    this.mineCount = Math.floor((this.size.x * this.size.y)) / 6;
  } else if ((this.size.x * this.size.y) / mineCount < 2) {
    return false;
  }

  this.firstStep = true;

  for (var x = 0; x < this.size.x; x++) {
    var cellsX = [];
    for (var y = 0; y < this.size.y; y++) {
      cellsX.push(new MinesweeperCell(x, y));
    }
    this.cells.push(cellsX);
  }
};

MinesweeperModel.prototype.generateMines = function () {
  var x;
  var y;
  var cell;
  for (var i = 0; i < this.mineCount; i++) {
    while (true) {
      x = Math.floor(Math.random() * (this.size.x - 1 - 0 + 1)) + 0;
      y = Math.floor(Math.random() * (this.size.y - 1 - 0 + 1)) + 0;
      cell = this.getCell(x, y);
      if (!cell.state == 'opened' || !cell.mined) {
        cell.mined = true;
        break;
      }
    }
  }
};

module.exports = MinesweeperModel;
