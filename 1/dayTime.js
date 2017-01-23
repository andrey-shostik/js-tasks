window.onload = function () {
  var date = new Date(),
    dayField = document.getElementById('current-day'),
    timeField = document.getElementById('current-time'),
    weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    hours = getHours(date.getHours());

  function getHours(hours) {
    if (hours > 12) {
      hours = ((hours + 11) % 12 + 1) + ' PM';
      return hours;
    } else {
      return hours += ' AM';
    }
  }

  dayField.innerHTML = 'Today is : ' + weekday[date.getDay()];
  timeField.innerHTML = 'Current time is' +
    ' : ' + hours +
    ' : ' + date.getMinutes() +
    ' : ' + date.getSeconds();
};
