/*
This is part 5/30 in the Javascript30 - 30 days Vanilla JS coding Challenge. 
Credits to Wes Bos at Javascrpt30.com
*/

const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	console.log(this);
	this.classList.toggle("open");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));

function toggleActive(e) {
	console.log(e.propertyName);
	//Safari only has flex and not flex grow like FF and Chrome, so we use include insted of ====.
	if (e.propertyName.includes("flex")) {
		this.classList.toggle("open-active");
	}
}
