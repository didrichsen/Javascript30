const dogs = [
	{ name: "Snickers", age: 2 },
	{ name: "hugo", age: 8 },
];

function makeGreen() {
	const p = document.querySelector("p");
	p.style.color = "#BADA55";
	p.style.fontSize = "50px";
}

// Regular
console.log("I know this one");
// Interpolated //Alternative to backticks, so prob not that often used now.
console.log("Hello I am a %s string!", "christmas");

// Styled
console.log("%c looking forward to christmas!", "font-size: 50px; background:white;color:black;border: 2px solid red;");
// warning!
console.warn("Oh sh****t!");
// Error :|
console.error("Alarm,alarm!");
// Info
console.info("Kangaroos can jum 8 metres in a single jump");
// Testing //Fires only if its wrong.
const p = document.querySelector("p");
console.assert(p.classList.contains("coolClass"), "That is wrong"); //Will fire

console.assert(1 === 1, "That is wrong!"); //Will not fire

// clearing
console.clear();

// Viewing DOM Elements
console.log(p); // Shows you the element.
console.dir(p); //Thats actually really usefull. Everything that livs on that element.

console.clear();

// Grouping together
dogs.forEach((dog) => {
	//console.group(`${dog.name}`);
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} human-years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog-years old`);
	console.groupEnd(`${dog.name}`);
});
// counting

console.count("Simen");
console.count("Simen");
console.count("Simen");
console.count("Simen");
console.count("Fredrik");
console.count("Simen");
console.count("Simen");
console.count("Simen");
console.count("Simen");

// timing //Nice to check time wihtout making variables
console.time("fetching data");
fetch("https://api.github.com/users/didrichsen")
	.then((data) => data.json())
	.then((data) => {
		console.timeEnd("fetching data");
		console.log(data);
	});

//Table //Taking an array of objects and display as table.
console.table(dogs);
