'use strict';

// Clock hands
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Clock hands movement
function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90; /* 60 seconds per mnute; 360 degrees; 90 because we've started the transform: rotate at 90deg, so we need to add it back in order to get the hand on time */
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90; /* to avoid the hand jump when reaches 12, we add de movement for the percentage of the seconds (we multiply 6 because 6deg is the distance between one second and the other: 360deg / 60 sec */
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000); /* to call the function every second */
