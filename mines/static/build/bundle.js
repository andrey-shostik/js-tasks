/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

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

	    function setColorToTd(elem) {
	      if (elem.innerHTML == '1') {
	        elem.style.color = 'DodgerBlue ';
	      } else if (elem.innerHTML == '2') {
	        elem.style.color = 'green';
	      } else if (elem.innerHTML == '3') {
	        elem.style.color = 'red';
	      } else if (elem.innerHTML == '4') {
	        elem.style.color = 'DarkBlue';
	      } else if (elem.innerHTML == '5') {
	        elem.style.color = 'FireBrick';
	      }
	      elem.style.fontWeight = '900';
	    }

	    grid.addEventListener('click', function (e) {
	      var elem = e.target;

	      if (elem.nodeName == 'TD' && elem.style.background == 'grey' && elem.innerHTML !== '' && elem.className != 'mine') {
	        elem.style.background = 'white';
	        elem.className = "";

	        setColorToTd(elem);

	      } else if (elem.className == 'mine' && elem.style.backgroundSize != 'cover') {
	        elem.style.background = 'red';
	        setTimeout(function () {
	          alert('BOOM!!! YOU LOSE');
	          gridInit();
	        }, 10);
	      } else if (elem.nodeName == 'TD' && elem.innerHTML === '' && elem.style.backgroundSize != 'cover') {
	        openCells(indexOf(elem.parentElement.children, elem), indexOf(grid.children, elem.parentElement));
	      }
	    });

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
	                    setCountMinesToCells(grid.children[i].children[j], grid.children[i]);
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

	    function indexOf(line, value) {
	      return Array.prototype.indexOf.call(line, value);
	    }

	    function setCountMinesToCells(cell, line) {
	      var cellNumber = indexOf(line.children, cell);

	      setCountMinesInLine(grid.children[indexOf(grid.children, line) - 1], cellNumber);
	      setCountMinesInLine(line, cellNumber);
	      setCountMinesInLine(grid.children[indexOf(grid.children, line) + 1], cellNumber);
	    }

	    function setCountMinesInLine(currentLine, cellNumber) {
	      if (currentLine !== undefined) {
	        if (currentLine.children[cellNumber - 1] !== undefined && cellNumber - 1 >= 0 && currentLine.children[cellNumber - 1].className != 'mine') {
	          currentLine.children[cellNumber - 1].innerHTML = Number(currentLine.children[cellNumber - 1].innerHTML) + 1;
	        }

	        currentLine.children[cellNumber].innerHTML = Number(currentLine.children[cellNumber].innerHTML) + 1;

	        if (currentLine.children[cellNumber + 1] !== undefined && cellNumber + 1 <= 16 && currentLine.children[cellNumber + 1].className != 'mine') {
	          currentLine.children[cellNumber + 1].innerHTML = Number(currentLine.children[cellNumber + 1].innerHTML) + 1;
	        }
	      }
	    }

	    function openCells(x, y) {
	      if (x < 0 || x > 15 || y < 0 || y > 15) return false;
	      line = grid.children[y];
	      cell = line.children[x];
	      if (cell.style.background == 'white') return false;
	      cell.style.background = 'white';
	      cell.className = "";
	      setColorToTd(cell);
	      if (cell.innerHTML > 0) return false;

	      for (var dx = -1; dx < 2; dx++)
	        for (var dy = -1; dy < 2; dy++) openCells(x + dx, y + dy);
	    }

	    generate_mines();
	  }
	  gridInit();
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);