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

//Prompts Function for Button
function prompts() {
  lowerCase();
  console.log(lowerCasePrompt);
  upperCase();
  console.log(upperCasePrompt);
}

generateBtn.addEventListener("click", prompts);
