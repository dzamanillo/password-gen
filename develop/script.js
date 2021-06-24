// Assignment Code

// Default Settings
var lowerCasePrompt = true;
var upperCasePrompt = true;
var numPrompt = true;
var specialPrompt = true;
var passwordLengthPrompt = 8;
var output = "";
// Master Array
var masterArray = [];

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
  if (lowerCasePrompt) {
    for (var i = 0; i < lowerCaseArray.length; i++) {
      masterArray.push(lowerCaseArray[i]);
    }
  }
  console.log(masterArray);
}

// Upper Case Function
function upperCase() {
  upperCasePrompt = window.confirm(
    "Would you like to include upper case characters in your password?"
  );
  if (upperCasePrompt) {
    for (var i = 0; i < upperCaseArray.length; i++) {
      masterArray.push(upperCaseArray[i]);
    }
  }
  console.log(masterArray);
}

// Number Function
function numberCharacter() {
  numPrompt = window.confirm(
    "Would you like to include numbers in your password?"
  );
  if (numPrompt) {
    for (var i = 0; i < numArray.length; i++) {
      masterArray.push(numArray[i]);
    }
  }
  console.log(masterArray);
}

// Special Character Function
function specialCharacter() {
  specialPrompt = window.confirm(
    "Would you like to use special characters in your password?"
  );
  if (specialPrompt) {
    for (var i = 0; i < specialArray.length; i++) {
      masterArray.push(specialArray[i]);
    }
  }
  console.log(masterArray);
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
    if (masterArray.length <= 0) {
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

// Button  Count
var buttonCount = 0;

// Button Function
// when generate password button is clicked the first time user is asked to fill prompts
function buttonOption1() {
  document.getElementById("generateNew").style.display = "none";
  masterArray = [];
  output = "";
  prompts();
  generator();
  console.log(output);
  document.getElementById("password").innerHTML = output;
  buttonCount += 1;
  document.getElementById("generateNew").style.display = "initial";
}

// Button 2 Function
// when gerate button has been clicked again, user is given a new password with the same peramiters they previously selected
function buttonOption2() {
  output = "";
  generator();
  console.log(output);
  document.getElementById("password").innerHTML = output;
}

function genPassWordButton() {
  if (buttonCount > 0) {
    buttonOption2();
  } else {
    buttonOption1();
  }
}

//Button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", genPassWordButton);

var generateNewBtn = document.querySelector("#generateNew");
generateNewBtn.addEventListener("click", buttonOption1);
