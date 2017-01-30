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
	  }
	  gridInit();
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);