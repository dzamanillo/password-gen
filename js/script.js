const rangeEl = document.querySelector("#character-count");
const currentEl = document.querySelector(".current-count");

// Update character counter
rangeEl.addEventListener("click", (event) => {
	event.preventDefault();
	const value = rangeEl.value;
	currentEl.innerHTML = value;
});

// Character Arrays

var lowerCaseArray = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"m",
	"n",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

var upperCaseArray = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"J",
	"K",
	"L",
	"M",
	"N",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialArray = ["!", "@", "#", "$", "%", "&", "*", "?"];

// Master Array
var masterArray = [];

//Random Number
var randomNumber = function (min, max) {
	var value = Math.floor(Math.random() * (max - min) + min);
	return value;
};

const formEl = document.querySelector(".options");
const btn = document.querySelector("#gen-btn");
var passwordEl = document.getElementById("password");

// Create Password
btn.addEventListener("click", function (event) {
	event.preventDefault();

	// Get inputs values
	const count = document.querySelector("#character-count").value;
	const lower = document.querySelector("#lower-case").checked;
	const upper = document.querySelector("#upper-case").checked;
	const numbers = document.querySelector("#numbers").checked;
	const special = document.querySelector("#special").checked;

	// Place input values into object
	let characterObject = {
		count,
		lower,
		upper,
		numbers,
		special,
	};

	// Init array and output
	masterArray = [];
	output = "";

	if (characterObject.lower) {
		lowerCaseArray.forEach((character) => masterArray.push(character));
	}
	if (characterObject.upper) {
		upperCaseArray.forEach((character) => masterArray.push(character));
	}
	if (characterObject.numbers) {
		numArray.forEach((character) => masterArray.push(character));
	}
	if (characterObject.special) {
		specialArray.forEach((character) => masterArray.push(character));
	}

	if (!masterArray.length) {
		M.toast({ html: "Please Select a Character Type!", classes: "rounded" });
		return;
	} else {
		// Generate password
		for (var i = 0; i < characterObject.count; i++) {
			output += masterArray[randomNumber(0, masterArray.length)];
		}
	}

	// Display to page
	passwordEl.innerHTML = output;
});

// Click to copy password
passwordEl.addEventListener("click", (event) => {
	event.preventDefault();

	// Get password value
	var passwordText = event.target.innerHTML;

	if (passwordText.length > 1) {
		navigator.clipboard.writeText(passwordText);
		M.toast({ html: "Password Added to Clipboard! 🎉", classes: "rounded" });
	}
});
