// Assignment code here
var lowerCaseChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var upperCaseChar = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var spclChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?"]


function generatePassword() {
  var length = prompt("Your password can be between 8 and 125 characters. Please enter your selection to continue.");
  retVal = "";
  for (var i = 0, n = passChar.length; i < length; ++i) {
      retVal += passChar.charAt(Math.floor(Math.random() * n));
      
  }
  while(length === "" || length === null || length > 125 || length < 8)
        {
          window.alert("Please choose the number of characters you would like between 8 and 125")
          return generatePassword();
        }

        
  return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);