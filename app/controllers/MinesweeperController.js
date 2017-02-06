'use strict';

function MinesweeperController(model) {
  this.model = model;
}

MinesweeperController.prototype.setView = function (view) {
  this.view = view;
};

MinesweeperController.prototype.onLeftClick = function (x, y) {
  this.model.openCell(x, y);
  this.view.syncWithModel();

  if (this.model.isWin()) {
    this.view.showWinMessage();
  } else if (this.model.isGameOver()) {
    this.view.showGameOverMessage();
  }
};

MinesweeperController.prototype.onRightClick = function (x, y) {
  this.model.nextCellMark(x, y);
  this.view.syncWithModel();
  return false;
};

MinesweeperController.prototype.onShowBoardClick = function (x, y) {
  this.model.startGame(undefined, { x, y });
  this.view.createBoard(this.model.cells);
};

module.exports = MinesweeperController;
