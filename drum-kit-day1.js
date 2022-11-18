/*
This is part 1/30 in the Javascript30 - 30 days Vanilla JS coding Challenge. 
Credits to Wes Bos at Javascrpt30.com
*/

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");

function removeTransistion(e) {
	if (e.propertyName !== "transform") return;
	this.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransistion));

/* Just to try out alternative way of adding eventlistener. 
for (let key of keys) {
	key.addEventListener("transitionend", removeTransistion);
}
*/

window.addEventListener("keydown", playSound);
