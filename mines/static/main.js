require('./main.scss');

window.onload = function () {
  function gridInit() {
    if (document.getElementById('grid')) {
      document.body.removeChild(document.getElementById('grid'));
    }

    var mines = 40;
    var flags = mines;
    var grid = document.createElement('table');
    document.body.appendChild(grid);

    for (var i = 0; i < 16; i++) {
      var column = document.createElement('tr');
      grid.appendChild(column);

      for (var j = 0; j < 16; j++) {
        var cell = document.createElement('td');
        cell.style.width = '26px';
        cell.style.height = '26px';
        cell.style.background = 'grey';
        cell.style.fontSize = '22px';
        cell.style.textAlign = 'center';
        cell.className = 'not-opened';
        column.appendChild(cell);
      }
    }
    grid.setAttribute("border", "1");
    grid.setAttribute("id", "grid");
  }
  gridInit();
};
