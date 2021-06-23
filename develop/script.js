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
  var characterSelection = function () {
    lowerCase();
    console.log(lowerCasePrompt);
    upperCase();
    console.log(upperCasePrompt);
    numberCharacter();
    console.log(numPrompt);
    specialCharacter();
    console.log(specialPrompt);

    if (!lowerCasePrompt && !upperCasePrompt && !numPrompt && !specialPrompt) {
      window.alert("You have not made a valid selection. Please try again.");
      characterSelection();
    }
  };
  characterSelection();

  var lengthSelection = function () {
    passwordLength();
    console.log(passwordLengthPrompt);

    if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
      window.alert(
        "You have selected an invalid character length. Please try again."
      );
      lengthSelection();
    }
  };
  lengthSelection();
}

generateBtn.addEventListener("click", prompts);
