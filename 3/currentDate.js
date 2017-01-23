window.onload = function () {
  var date = new Date();

  var currentDate = 'Current date is' +
    ' : ' + date.getUTCMonth() + 1 +
    '/' + date.getUTCDate() +
    '/' + date.getUTCFullYear();

  document.body.innerHTML += currentDate;
};
