// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Lower Case Function
var lowerCase = function () {
  var lowerCasePrompt = window.confirm(
    "Would you like to include lower case characters in your password?"
  );
};

generateBtn.addEventListener("click", lowerCase);
