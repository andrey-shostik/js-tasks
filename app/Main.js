require('./Main.scss');

window.onload = function () {
  var model = new(require('../app/models/MinesweeperModel'));
  var controller = new(require('../app/controllers/MinesweeperController'))(model);
  var view = new(require('../app/views/MinesweeperView'))(model, controller);
};
