// Assignment Code

// Default Settings
var lowerCasePrompt = true;
var upperCasePrompt = true;
var numPrompt = true;
var specialPrompt = true;
var passwordLengthPrompt = 8;
var output = "";

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

// Lower Case Function
function lowerCase() {
  lowerCasePrompt = window.confirm(
    "Would you like to include lower case characters in your password?"
  );
}

// Upper Case Function
function upperCase() {
  upperCasePrompt = window.confirm(
    "Would you like to include upper case characters in your password?"
  );
}

// Number Function
function numberCharacter() {
  numPrompt = window.confirm(
    "Would you like to include numbers in your password?"
  );
}

// Special Character Function
function specialCharacter() {
  specialPrompt = window.confirm(
    "Would you like to use special characters in your password?"
  );
}

// Password Length Function
function passwordLength() {
  passwordLengthPrompt = window.prompt(
    "How many characters would you like your password to include? Min-8. Max-128."
  );
}

//Prompts Function for Button
function prompts() {
  // Password length selector
  var lengthSelection = function () {
    passwordLength();
    console.log(passwordLengthPrompt);
    // If length is less than 8 or more than 128 run function again
    if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
      window.alert(
        "You have selected an invalid character length. Please try again."
      );
      lengthSelection();
    }
  };
  lengthSelection();

  // Character type selectors
  var characterSelection = function () {
    lowerCase();
    console.log(lowerCasePrompt);
    upperCase();
    console.log(upperCasePrompt);
    numberCharacter();
    console.log(numPrompt);
    specialCharacter();
    console.log(specialPrompt);
    // If no types are selected run function again
    if (!lowerCasePrompt && !upperCasePrompt && !numPrompt && !specialPrompt) {
      window.alert("You have not made a valid selection. Please try again.");
      characterSelection();
    }
  };
  characterSelection();
}

// Master Array
var masterArray = [];

function masterArrayBuilder() {
  if (lowerCasePrompt) {
    masterArray = masterArray.concat(lowerCaseArray);
  }
  if (upperCasePrompt) {
    masterArray = masterArray.concat(upperCaseArray);
  }
  if (numPrompt) {
    masterArray = masterArray.concat(numArray);
  }
  if (specialPrompt) {
    masterArray = masterArray.concat(specialArray);
  }
}

//Random Number
var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min) + min);
  return value;
};

//Generator
function generator() {
  for (var i = 0; i < passwordLengthPrompt; i++) {
    output += masterArray[randomNumber(0, masterArray.length)];
  }
}

// Button Function
function button() {
  masterArray = [];
  output = "";
  prompts();
  masterArrayBuilder();
  console.log(masterArray);
  generator();
  console.log(output);
  document.getElementById("password").innerHTML = output;
}

//Button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", button);
