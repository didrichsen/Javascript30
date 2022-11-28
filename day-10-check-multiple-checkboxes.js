const checkboxes = document.querySelectorAll(".inbox input[type=checkbox]");

let lastChecked;

function handleCheck(e) {
	//Check if shiftkey are pressed down and that its not unchecked after
	let inBetween = false;
	if (e.shiftKey && this.checked) {
		checkboxes.forEach((checkbox) => {
			//This is where the magic happens
			if (checkbox === this || checkbox === lastChecked) {
				inBetween = !inBetween;
			}
			if (inBetween) {
				checkbox.checked = true;
			}
		});
	}
	lastChecked = this;
}

checkboxes.forEach((checkbox) => checkbox.addEventListener("click", handleCheck));
