'use strict'

window.onload = function () {
  function Shape() {}

  Shape.prototype.init = function (width, height) {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.height = width;
    canvas.width = height;
    var c = canvas.getContext('2d');

    var container = { x: 0, y: 0, width: canvas.width, height: canvas.height };
    var elements = [];

    canvas.addEventListener('click', function () {
      var colors = ['Chartreuse', 'Maroon', 'Orange', 'SteelBlue', 'SlateGray', 'SaddleBrown'];
      var randVX = Math.floor(Math.random() * (7 + 7 + 1)) - 7;
      var randVY = Math.floor(Math.random() * (7 + 7 + 1)) - 7;
      var randX = Math.floor(Math.random() * (width + 1));
      var randY = Math.floor(Math.random() * (height + 1));
      var randColor = colors[Math.floor(Math.random() * (colors.length))];

      if (randVY != 0 && randVX != 0) {
        var randSize = Math.floor(Math.random() * (25 - 75 + 1)) + 75;

        if (Math.floor(Math.random() * (2)) == 1) {
          elements.push({ x: 100, y: 100, width: randSize, height: randSize, color: randColor, vx: randVX, vy: randVY, name: 'rectangle' })
        } else {
          var randR = Math.floor(Math.random() * (30 - 15 + 1)) + 15;
          elements.push({ x: 100, y: 100, r: randR, color: randColor, vx: randVX, vy: randVY, name: 'circle' })
        }
      }
    });

    canvas.oncontextmenu = function () {
      elements.pop();
      return false
    };

    function draw() {
      c.fillStyle = 'black';
      c.strokeStyle = 'black';
      c.fillRect(container.x, container.y, container.width, container.height);

      for (var i = 0; i < elements.length; i++) {
        c.fillStyle = elements[i].color;
        c.beginPath();
        if (elements[i].name == 'circle') {
          c.arc(elements[i].x, elements[i].y, elements[i].r, 0, 2 * Math.PI, false);
        } else if (elements[i].name == 'rectangle') {
          c.fillRect(elements[i].x, elements[i].y, elements[i].width, elements[i].height);
        }
        c.fill();

        if (elements[i].name == 'circle' && (elements[i].x + elements[i].vx + elements[i].r > container.x + container.width) || (elements[i].x - elements[i].r + elements[i].vx < container.x)) {
          elements[i].vx = -elements[i].vx;
        }
        if (elements[i].name == 'circle' && (elements[i].y + elements[i].vy + elements[i].r > container.y + container.height) || (elements[i].y - elements[i].r + elements[i].vy < container.y)) {
          elements[i].vy = -elements[i].vy;
        }

        if (elements[i].name == 'rectangle' && (elements[i].x + elements[i].vx + elements[i].width > container.x + container.width) || (elements[i].x + elements[i].vx < container.x)) {
          elements[i].vx = -elements[i].vx;
        }
        if (elements[i].name == 'rectangle' && (elements[i].y + elements[i].vy + elements[i].height > container.y + container.height) || (elements[i].y + elements[i].vy < container.y)) {
          elements[i].vy = -elements[i].vy;
        }

        elements[i].x += elements[i].vx;
        elements[i].y += elements[i].vy;
      }
      requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);
  }

  function Rectangle() {
    Shape.apply(this, arguments);
  }
  Rectangle.prototype = Object.create(Shape.prototype)
  Rectangle.prototype.constructor = Rectangle;
  Rectangle.prototype.draw = function (context, x, y, width, height) {
    context.fillRect(x, y, width, height);
  };

  function Circle() {
    Shape.apply(this, arguments);
  }
  Circle.prototype = Object.create(Shape.prototype)
  Circle.prototype.constructor = Circle;
  Circle.prototype.draw = function (context, x, y, r) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'red';
    context.stroke();
  };

  var myShape = new Shape();

  var widthInput = document.getElementById('width-input');
  var heightInput = document.getElementById('height-input');
  var generateRectengle = document.getElementById('generate-rectangle');
  generateRectengle.addEventListener('click', function () {
    myShape.init(widthInput.value, heightInput.value);
  });
}
