window.onload = function () {
  var printButton = document.getElementsByClassName('print-button')[0];
  printButton.addEventListener('click', function () {
    window.print();
  });
};
