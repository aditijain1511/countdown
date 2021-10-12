const daysEI = document.getElementById("da");
const hoursEI = document.getElementById("hr");
const minEI = document.getElementById("mi");
const secEI = document.getElementById("se");

const birthday = "15 Nov 2021";

function countdown() {
  const birthdate = new Date(birthday);
  const currDate = new Date();
  const totalSeconds = (birthdate - currDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds) % 60;

  daysEI.innerHTML = days;
  hoursEI.innerHTML = formatTime(hours);
  minEI.innerHTML = formatTime(mins);
  secEI.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
//initial call
countdown();

setInterval(countdown, 1000);
