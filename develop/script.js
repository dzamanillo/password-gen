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

//Prompts Function for Button
function prompts() {
  lowerCase();
  console.log(lowerCasePrompt);
  upperCase();
  console.log(upperCasePrompt);
  numberCharacter();
  console.log(numPrompt);
  specialCharacter();
  console.log(specialPrompt);
}

generateBtn.addEventListener("click", prompts);
