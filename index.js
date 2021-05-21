const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
};

function pad(value) {
  return String(value).padStart(2, '0');
}

function updateTimerFields(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = mins;
  refs.seconds.textContent = secs;
}

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  start() {
    updateTimerFields(0);

    setInterval(() => {
      const delta = this.targetDate - Date.now();

      updateTimerFields(delta);
    }, 1000);
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 27, 2021'),
});

countdownTimer.start();

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#775548',
  '#795538',
  '#795748',
  '#795948',

];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeColor = function () {
  let intervalID = null;
  
  if (intervalID === null) {
    intervalID = setInterval(() => {
      let index = randomIntegerFromInterval(0, colors.length - 1);
      document.querySelector("body").style.backgroundColor = colors[index];
    }, 1000);
  }
};
changeColor();