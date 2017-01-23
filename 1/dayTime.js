window.onload = function () {
  var date = new Date(),
    weekday = new Array(7),
    dayField = document.getElementById('current-day'),
    timeField = document.getElementById('current-time');
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  dayField.innerHTML = 'Today is : ' + weekday[date.getDay()] + '';
  timeField.innerHTML = 'Current time is' +
    ' : ' + date.getHours() +
    ' : ' + date.getMinutes() +
    ' : ' + date.getSeconds();
};
