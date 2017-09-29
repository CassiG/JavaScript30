const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function clockTick() {
  const date = new Date();

  // this math divides the seconds by 60 to get in a base 10 format and then multiplies it by 360 to get it in the 360 rotation. However we had to offset by 90deg to get it at the top so you have to add 90

  const seconds = date.getSeconds();
  const secondDegrees = (( seconds / 60 ) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = date.getMinutes();
  const minDegrees = (( minutes / 60 ) * 360) + 90;
  minuteHand.style.transform = `rotate(${minDegrees}deg)`;

  const hours = date.getHours();
  const hourDegrees = (( hours / 12 ) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(clockTick, 1000);
