class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    
    this.time = 0;

    this.days = document.querySelector(`${this.selector} span[data-value="days"]`);
    this.hours = document.querySelector(`${this.selector} span[data-value="hours"]`);
    this.mins = document.querySelector(`${this.selector} span[data-value="mins"]`);
    this.secs = document.querySelector(`${this.selector} span[data-value="secs"]`);
    this.start();
  }


  
  timerUpdate(deltatime) {

    const days = Math.floor(deltatime / (1000 * 60 * 60 * 24)).toString().padStart(2, "0");

    const hours = Math.floor((deltatime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");

    const mins = Math.floor((deltatime % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");

    const secs = Math.floor((deltatime % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    this.days.textContent = days;
    this.hours.textContent = hours;
    this.mins.textContent = mins;
    this.secs.textContent = secs;
  }

  start() {
     this.timerUpdate(0);
    setInterval(() => {
      const deltatime = this.targetDate - Date.now();
      this.timerUpdate(deltatime);
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jun 27, 2021"),
});

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