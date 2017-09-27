const date = new Date();
const seconds = date.getSeconds();
const minutes = date.getMinutes();
const hours = date.getHours();

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime()
function clockTick() {
  // this math divides the seconds by 60 to get in a base 10 format and then multiplies it by 360 to get it in the 360 rotation. However we had to offset by 90deg to get it at the top so you have to add 90
  const secondDegrees = (( seconds / 60 ) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`
}

setInterval(clockTick, 1000);
