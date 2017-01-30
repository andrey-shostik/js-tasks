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


    var minesCoord = [];

    function generate_mines() {
      if (document.getElementById('grid')) {
        var grid = document.getElementById('grid');
        var randTr;
        var randTd;
        var value = '';
        for (var t = 0; t < mines; t++) {
          randTr = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
          randTd = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
          value = randTr.toString() + ',' + randTd.toString();

          if (minesCoord.indexOf(value) == -1) {
            minesCoord.push(value);

            for (var i in grid.children) {
              if (grid.children.hasOwnProperty(i) && i == randTr) {
                for (var j in grid.children[i].children) {
                  if (grid.children[i].children.hasOwnProperty(j) && j == randTd) {
                    grid.children[i].children[j].removeAttribute("style");
                    grid.children[i].children[j].className = 'mine';
                    grid.children[i].children[j].style.background = 'grey';
                  }
                }
              }
            }
          } else {
            t--;
          }
        }
      }
    }

    generate_mines();
  }
  gridInit();
};
