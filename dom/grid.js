window.onload = function () {
  var initializeGrid = function (gridColumns, gridLines) {
    if (gridColumns === '' || gridColumns === '0' || gridLines === '' || gridLines === '0') {
      return false;
    } else if (document.getElementById('grid')) {
      document.body.removeChild(document.getElementById('grid'));
    }

    var grid = document.createElement('table');
    document.body.appendChild(grid);

    for (var i = 0; i < gridColumns; i++) {
      var column = document.createElement('tr');
      grid.appendChild(column);

      for (var j = 0; j < gridLines; j++) {
        var cell = document.createElement('td');
        cell.style.background = 'white';
        column.appendChild(cell);
      }
    }
    grid.setAttribute("border", "1");
    grid.setAttribute("id", "grid");

    grid.addEventListener('click', function (e) {
      var elem = e.target;

      if (elem.nodeName == 'TD') {
        elem.style.background = 'black';
      }
    });

    grid.addEventListener('mouseover', function (e) {
      var elem = e.target;

      if (elem.nodeName == 'TD') {
        elem.style.cursor = 'pointer';
      }
    });

    var paintCellsBtn = document.getElementById('paint-cells');
    paintCellsBtn.disabled = false;

    return grid;
  };

  var initializeDashboard = function () {
    var gridBtn = document.getElementById('generate-grid');

    promsie = new Promise(function (resolve, reject) {});

    gridBtn.addEventListener('click',
      function () {
        gridColumns = document.getElementById('grid-columns').value;
        gridLines = document.getElementById('grid-lines').value;
        initializeGrid.call(this, gridColumns, gridLines);
      }
    );

    var paintCellsBtn = document.getElementById('paint-cells');
    paintCellsBtn.addEventListener('click', function () {
      if (document.getElementById('grid')) {
        var grid = document.getElementById('grid');

        for (var i in grid.children) {
          if (grid.children.hasOwnProperty(i)) {
            for (var j in grid.children[i].children) {
              if (grid.children[i].children.hasOwnProperty(j)) {
                grid.children[i].children[j].style.background = 'black';
              }
            }
          }
        }
      }
    });
  };


  initializeDashboard();
};
