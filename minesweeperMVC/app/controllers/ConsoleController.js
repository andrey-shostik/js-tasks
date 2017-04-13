'use strict';

function ConsoleController(model) {
  this.model = model;
}

ConsoleController.prototype.show = function () {
  console.log('game status: ' + this.model.gameStatus);
};

ConsoleController.prototype.setView = function (view) {
  this.view = view;
};

ConsoleController.prototype.open = function (x, y) {
  if (document.getElementById('grid')) {
    this.model.openCell(x, y);
    this.view.syncWithModel();

    if (this.model.isWin()) {
      this.view.showWinMessage();
      this.startNewGame();
    } else if (this.model.isGameOver()) {
      this.view.showGameOverMessage();
    }
  }
};

ConsoleController.prototype.setFlag = function (x, y) {
  if (document.getElementById('grid')) {
    this.model.nextCellMark(x, y);
    this.view.syncWithModel();
  }
};

ConsoleController.prototype.removeFlag = function (x, y) {
  this.setFlag(x, y);
};

ConsoleController.prototype.resign = function () {
  this.model.gameStatus = 'lose';
  this.view.showGameOverMessage();
};

ConsoleController.prototype.reset = function () {
  this.view.createBoard(this.model.cells);
};

module.exports = ConsoleController;
