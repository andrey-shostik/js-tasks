'use strict';

function MinesweeperView(model, controller, consoleController) {
  this.model = model;

  this.controller = controller;
  this.controller.setView(this);

  this.consoleController = consoleController;
  this.consoleController.setView(this);

  this.table = [];
  this.gridClones = [];
  this.dashboard();
}

MinesweeperView.prototype.createBoard = function (cells) {
  if (!document.getElementById('start-game')) {
    this.dashboard();
  }

  this.removeGrids();

  this.grid = document.createElement('table');
  this.grid.id = 'grid';
  document.body.appendChild(this.grid);

  this.table = [];
  for (var x = 0; x < this.model.size.x; x++) {
    var line = document.createElement('tr');
    this.table.push([]);
    this.grid.appendChild(line);

    for (var y = 0; y < this.model.size.y; y++) {
      var cell = document.createElement('td');
      cell.cell = cells[x][y];
      this.table[x].push(cell);
      line.appendChild(cell);
    }
  }

  var that = this;

  this.grid.addEventListener('click', function (e) {
    var elem = e.target;

    if (elem.nodeName == 'TD') {
      that.controller.onLeftClick(elem.cell.x, elem.cell.y);
    }
  });

  this.grid.oncontextmenu = function (e) {
    var elem = e.target;

    if (elem.nodeName == 'TD') {
      that.controller.onRightClick(elem.cell.x, elem.cell.y);
    }

    return false;
  };
};


MinesweeperView.prototype.removeGrids = function () {
  if (document.getElementById('grid')) {
    document.body.removeChild(document.getElementById('grid'));
  }
};

module.exports = MinesweeperView;
