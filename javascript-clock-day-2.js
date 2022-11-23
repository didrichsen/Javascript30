/*
This is part 2/30 in the Javascript30 - 30 days Vanilla JS coding Challenge. 
Credits to Wes Bos at Javascrpt30.com
*/

const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
	const now = new Date();
	console.log(now);

	const sec = now.getSeconds();
	const secDegress = (sec / 60) * 360 + 90;
	secHand.style.transform = `rotate(${secDegress}deg)`;
	console.log(sec);
	console.log(secDegress);

	const min = now.getMinutes();
	const minDegrees = (min / 60) * 360 + 90; /* +90 since I adjusted 90deg in css*/
	minHand.style.transform = `rotate(${minDegrees}deg)`;

	const hour = now.getHours();
	const hourDegrees = (hour / 12) * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
