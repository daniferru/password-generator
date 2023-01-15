// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", ".", "/", "?", ";", ":"];
var result = [];

var promptLength = prompt ("Choose a length of at least 8 characters and no more than 128 characters");
var upperCasePrompt = confirm ("Do you want to include uppercase characters?");
var lowerCasePrompt = confirm ("Do you want to include lowercase characters?");
var numericPrompt = confirm ("Do you want to include numeric characters?");
var specialCharacters = confirm ("Do you want special characters?")

if (upperCasePrompt){
    result = result.concat(upperCase)
} if (lowerCasePrompt){
    result = result.contact(lowerCase)
} if (numericPrompt){
    result = result.contact(numeric)
} if (specialCharacters){
    result = result.contact(symbols)
}
console.log(result)
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);