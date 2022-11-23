/*
This is part 3/30 in the Javascript30 - 30 days Vanilla JS coding Challenge. 
Credits to Wes Bos at Javascrpt30.com
*/

const inputs = document.querySelectorAll(".controls input");

//Returning a nodelist. Its okei since I'm using forEach.

function handleUpdate() {
	//console.log(this.dataset);//Exploring this.dataset
	const subscript = this.dataset.sizing || ""; //OR is added so I dont append undefined at the end
	document.documentElement.style.setProperty(`--${this.name}`, this.value + subscript);
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
