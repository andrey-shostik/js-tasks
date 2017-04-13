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

MinesweeperView.prototype.cloneGrid = function () {
  if (document.getElementById('grid')) {
    this.gridClones.push(this.grid.cloneNode(true));
    this.gridClones[this.gridClones.length - 1].setAttribute('id', 'clone-' + (this.gridClones.length - 1));
    document.body.appendChild(this.gridClones[this.gridClones.length - 1]);
  }
};

MinesweeperView.prototype.dashboard = function () {
  var that = this;
  var xInput = document.createElement('input');
  xInput.setAttribute('type', 'text');
  xInput.setAttribute('value', '10');
  document.body.appendChild(xInput);

  var yInput = document.createElement('input');
  yInput.setAttribute('type', 'text');
  yInput.setAttribute('value', '10');
  document.body.appendChild(yInput);

  var startGame = document.createElement('button');
  startGame.innerHTML = 'startGame';
  startGame.setAttribute('id', 'start-game');
  document.body.appendChild(startGame);

  var cloneGrid = document.createElement('button');
  cloneGrid.innerHTML = 'cloneGrid';
  cloneGrid.setAttribute('id', 'clone-grid');
  document.body.appendChild(cloneGrid);

  startGame.addEventListener('click', function () {
    that.controller.onShowBoardClick(xInput.value, yInput.value);
  });

  cloneGrid.addEventListener('click', function () {
    that.cloneGrid();
  });
};

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

MinesweeperView.prototype.syncWithModel = function () {
  var cell;
  var tableCell;
  var cloneGrid;
  for (var x = 0; x < this.model.size.x; x++) {
    for (var y = 0; y < this.model.size.y; y++) {
      cell = this.model.getCell(x, y);
      if (cell) {
        tableCell = this.table[x][y];

        if (this.model.isGameOver() && cell.mined) {
          tableCell.style.background = 'black';
          tableCell.style.backgroundImage = '';
        }

        if (cell.state == 'closed') {
          tableCell.style.background = 'grey';
          tableCell.innerHTML = '';
        } else if (cell.state == 'opened') {
          tableCell.style.background = 'Lavender';
          if (cell.counter > 0) {
            tableCell.innerHTML = cell.counter;
          } else if (cell.mined) {
            tableCell.style.background = 'red';
          }
        } else if (cell.state == 'flagged') {
          tableCell.style.backgroundImage = 'url(http://s8.hostingkartinok.com/uploads/images/2017/01/96ddfade536bcd2c61d695d426cbfb69.png)';
          tableCell.style.backgroundSize = 'cover';
        }
      }
    }
  }

  if (this.gridClones.length > 0) {
    for (var i = 0; i < this.gridClones.length; i++) {
      cloneGrid = this.grid.cloneNode(true);
      cloneGrid.setAttribute('id', 'clone-' + i);
      this.gridClones[i] = cloneGrid;
      document.body.removeChild(document.getElementById('clone-' + i));
      document.body.appendChild(this.gridClones[i]);
    }
  }
};

MinesweeperView.prototype.removeGrids = function () {
  if (document.getElementById('grid')) {
    document.body.removeChild(document.getElementById('grid'));
  }

  if (this.gridClones.length > 0) {
    for (var i = 0; i < this.gridClones.length; i++) {
      document.body.removeChild(document.getElementById('clone-' + i));
    }
    this.gridClones = [];
  }
};

MinesweeperView.prototype.showWinMessage = function () {
  alert('You Win');
  this.removeGrids();
};

MinesweeperView.prototype.showGameOverMessage = function () {
  alert('Game Over');
  document.body.removeChild(document.getElementById('grid'));
  this.removeGrids();
};

module.exports = MinesweeperView;
