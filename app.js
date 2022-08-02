// TIMER
let today = new Date();
let tomorrow = today.setUTCHours(24, 0, 0, 0);
let bossResetDate = new Date(
  today.setUTCDate(today.getUTCDate() + ((7 - today.getUTCDay() + 4) % 7 || 7))
);
let questResetDate = new Date(
  today.setUTCDate(today.getUTCDate() + ((7 - today.getUTCDay() + 0) % 7 || 7))
);

let dailyCountdown = setInterval(function () {
  let currentTime = new Date().getTime();
  let timeleft = tomorrow - currentTime;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById('days').innerHTML = days + 'd ';
  document.getElementById('hours').innerHTML = hours + 'h ';
  document.getElementById('mins').innerHTML = minutes + 'm ';
  document.getElementById('secs').innerHTML = seconds + 's';
}, 1000);

let weeklyBossCountdown = setInterval(function () {
  let currentTime = new Date().getTime();
  let timeleft = bossResetDate - currentTime;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById('week-bosses-days').innerHTML = days + 'd ';
  document.getElementById('week-bosses-hours').innerHTML = hours + 'h ';
  document.getElementById('week-bosses-mins').innerHTML = minutes + 'm ';
  document.getElementById('week-bosses-secs').innerHTML = seconds + 's';
}, 1000);

let weeklyQuestCountdown = setInterval(function () {
  let currentTime = new Date().getTime();
  let timeleft = questResetDate - currentTime;

  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById('week-quests-days').innerHTML = days + 'd ';
  document.getElementById('week-quests-hours').innerHTML = hours + 'h ';
  document.getElementById('week-quests-mins').innerHTML = minutes + 'm ';
  document.getElementById('week-quests-secs').innerHTML = seconds + 's';
}, 1000);
