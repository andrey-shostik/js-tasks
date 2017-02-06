'use strict';

function MinesweeperController(model) {
  this.model = model;
}

MinesweeperController.prototype.setView = function (view) {
  this.view = view;
};

MinesweeperController.prototype.onLeftClick = function (x, y) {};

MinesweeperController.prototype.onRightClick = function (x, y) {};

MinesweeperController.prototype.onShowBoardClick = function (x, y) {
  this.model.startGame(undefined, { x, y });
  this.view.createBoard(this.model.cells);
};

module.exports = MinesweeperController;
