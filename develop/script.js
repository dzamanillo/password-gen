// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();

//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Default Settings
var lowerCasePrompt = true;
var upperCasePrompt = true;
var numPrompt = true;
var specialPrompt = true;
var passwordLengthPrompt = 8;

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
}

// Button
generateBtn.addEventListener("click", prompts);
