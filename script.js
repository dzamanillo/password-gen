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

var btnEl = document.querySelector("#generate");
var formEl = document.querySelector(".options");
var errorEl = document.querySelector(".error-message");

formEl.addEventListener("submit", function (event) {
	event.preventDefault();

	// Get inputs
	var characterCountEl = document.querySelector("#character-count");
	var lowerCaseEl = document.querySelector("#lower-case");
	var upperCaseEl = document.querySelector("#upper-case");
	var numbersEl = document.querySelector("#numbers");
	var specialEl = document.querySelector("#special");

	// Get inputs values
	let characters = characterCountEl.value;
	let lower = lowerCaseEl.checked;
	let upper = upperCaseEl.checked;
	let numbers = numbersEl.checked;
	let special = specialEl.checked;

	// Place input values into object
	let characterObject = {
		characters,
		lower,
		upper,
		numbers,
		special,
	};

	// Init array and output
	masterArray = [];
	output = "";

	if (characterObject.lower) {
		// Build masterArray
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
		errorEl.classList.remove("hide");
		return;
	} else {
		errorEl.classList.add("hide");

		// Generate password
		for (var i = 0; i < characterObject.characters; i++) {
			output += masterArray[randomNumber(0, masterArray.length)];
		}
	}

	// Display to page
	document.getElementById("password").innerHTML = output;
});
