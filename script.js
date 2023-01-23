// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", ".", "/", "?", ";", ":"];

var result = [];
var user = [];

var promptLength = prompt ("Choose a length of at least 8 characters and no more than 128 characters");
console.log(promptLength);
var upperCasePrompt = confirm ("Do you want to include uppercase characters?");
console.log(upperCasePrompt);
var lowerCasePrompt = confirm ("Do you want to include lowercase characters?");
console.log(lowerCasePrompt);
var numericPrompt = confirm ("Do you want to include numeric characters?");
console.log(numericPrompt);
var specialCharacters = confirm ("Do you want special characters?")
console.log(specialCharacters);

if (upperCasePrompt){
    result = result.concat(upperCase)
} if (lowerCasePrompt){
    result = result.concat(lowerCase)
} if (numericPrompt){
    result = result.concat(numeric)
} if (specialCharacters){
    result = result.concat(symbols)
}
//console.log(result)


for (var i = 0; i < promptLength; i++) {
    user.push (result[Math.floor(Math.random() * result.length)]);
}
return user.join("");
}

//function getRandom() {
   // var resultIndex = Math.floor(Math.random() * result.length);
   // var resultElement = result[resultIndex];
   // return resultElement;
//}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);