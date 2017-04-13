'use strict';

function MinesweeperCell(x, y) {
  // this.state;
  // closed - закрыта
  // opened - открыта
  // flagged - помечена флажком

  this.x = x;
  this.y = y;
  this.state = 'closed';
  this.mined = false;
  this.counter = 0;
}

MinesweeperCell.prototype.nextMark = function () {
  var markSequence = ['closed', 'flagged'];

  if (markSequence.indexOf(this.state) !== -1) {
    var stateIndex = markSequence.indexOf(this.state);
    this.state = markSequence[(stateIndex + 1) % markSequence.length];
  }
};

MinesweeperCell.prototype.open = function () {
  if (this.state != 'flagged') {
    this.state = 'opened';
  }
};

module.exports = MinesweeperCell;
