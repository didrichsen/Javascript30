/*
This is part 4/30 in the Javascript30 - 30 days Vanilla JS coding Challenge. 
Credits to Wes Bos at Javascrpt30.com
*/

const inventors = [
	{ first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
	{ first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
	{ first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
	{ first: "Marie", last: "Curie", year: 1867, passed: 1934 },
	{ first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
	{ first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
	{ first: "Max", last: "Planck", year: 1858, passed: 1947 },
	{ first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
	{ first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
	{ first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
	{ first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
	{ first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter((investor) => {
	return investor.year >= 1500 && investor.year < 1600;

	/*
	if (investor.year >= 1500 && investor.year < 1600) {
		return true;}
    */
});

console.table(fifteen);

// Array.prototype.map() //Compated to filter, map will return the same amount of items at you give it.
// 2. Give us an array of the inventors first and last names

const fullname = inventors.map((inventor) => {
	return `${inventor.first} ${inventor.last}`;
});

console.table(fullname);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

/*
const sortedArray = inventors.sort((a, b) => {
	if (a.year > b.year) {
		return 1;
	} else {
		return -1;
	}
});
*/

const sortedArray = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(sortedArray);

//Exploring sort()
let array = [2, 3, 1, 5, 76, 3, 2, 35, 55, 543]; //Works bad on array due to for example 7 is bigger than 5.

console.log(array.sort()); //output: [1, 2, 2, 3, 3, 35, 5, 543, 55, 76]

let array2 = ["simen", "banana", "apple", "fruit"]; //Works for strings
console.log(array2.sort()); //['apple', 'banana', 'fruit', 'simen']

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const totalYearsLived = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYearsLived);

// 5. Sort the inventors by years lived

const oldest = inventors.sort((a, b) => {
	const lastGuy = a.passed - b.year;
	const nextGuy = b.passed - b.year;
	return lastGuy > nextGuy ? -1 : 1;
	/*
    if (lastGuy > nextGuy) {
		return -1;
	} else {
		return 1;
	}
    */
});

console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
//CODE NEED TO BE RUN IN THE CONSOLE OF WIKIPEDIA

/*
const category = document.querySelector(".mw-category-generated");
const links = Array.from(category.querySelectorAll("a")); //Need to change into array from nodelist

const de = links.map((link) => link.textContent);

const result = de.filter((streetname) => streetname.includes("de"));

*/

// 7. sort Exercise
// Sort the people alphabetically by last name

const people = [
	"Bernhard, Sandra",
	"Bethea, Erin",
	"Becker, Carl",
	"Bentsen, Lloyd",
	"Beckett, Samuel",
	"Blake, William",
	"Berger, Ric",
	"Beddoes, Mick",
	"Beethoven, Ludwig",
	"Belloc, Hilaire",
	"Begin, Menachem",
	"Bellow, Saul",
	"Benchley, Robert",
	"Blair, Robert",
	"Benenson, Peter",
	"Benjamin, Walter",
	"Berlin, Irving",
	"Benn, Tony",
	"Benson, Leana",
	"Bent, Silas",
	"Berle, Milton",
	"Berry, Halle",
	"Biko, Steve",
	"Beck, Glenn",
	"Bergman, Ingmar",
	"Black, Elk",
	"Berio, Luciano",
	"Berne, Eric",
	"Berra, Yogi",
	"Berry, Wendell",
	"Bevan, Aneurin",
	"Ben-Gurion, David",
	"Bevel, Ken",
	"Biden, Joseph",
	"Bennington, Chester",
	"Bierce, Ambrose",
	"Billings, Josh",
	"Birrell, Augustine",
	"Blair, Tony",
	"Beecher, Henry",
	"Biondo, Frank",
];

const alphaByLastName = people.sort((last, first) => {
	const [alastname, afirstname] = last.split(", ");
	const [blastname, bfirstname] = last.split(", ");
	return alastname > blastname ? -1 : 1;
});

console.log(alphaByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ["car", "car", "truck", "truck", "bike", "walk", "car", "van", "bike", "walk", "car", "van", "car", "truck"];

const numberOfInstances = data.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});

console.log(numberOfInstances);
