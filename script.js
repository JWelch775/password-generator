// Assignment code here
var lowerCaseChar = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperCaseChar = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var spclChar = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?"];
var charSelector = [];

function generatePassword() 
    {
        var useLowerCase = confirm("Do you want to use lowercase characters?");
        var useUpperCase = confirm("Do you want to use uppercase characters?");
        var useNum = confirm("Do you want to use numbers?");
        var useSpcl = confirm("Do you want to use special characters?");

        //run while loop to see if all vars are false. prompt to select again if so
        while(useLowerCase === false && useUpperCase === false && useNum === false && useSpcl === false)
            {
                window.alert("Please choose at lease one type of character");
                var useLowerCase = confirm("Do you want to use lowercase characters?");
                var useUpperCase = confirm("Do you want to use uppercase characters?");
                var useNum = confirm("Do you want to use numbers?");
                var useSpcl = confirm("Do you want to use special characters?");
            }

        // run a while loop to see if password length is met
        var passwordLength = prompt("Your password can be between 8 and 125 characters. Please enter your selection to continue.");
        while(passwordLength < 8 || passwordLength > 128 || passwordLength === "" || passwordLength === null)
            {
                window.alert("Please choose an amount that is between 8 and 125 characters");
                passwordLength = prompt("Your password can be between 8 and 125 characters. Please enter your selection to continue.");
            }
        
        if(useLowerCase === true)
            {
                charSelector.push(lowerCaseChar);
            }

        if (useUpperCase === true)
            {
                charSelector.push(upperCaseChar);
            }

        if(useSpcl === true)
            {
                charSelector.push(spclChar);
            }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //retVal = "";
  //for (var i = 0, n = passChar.length; i < length; ++i) {
      //retVal += passChar.charAt(Math.floor(Math.random() * n));
      
  //}
  //while(length === "" || length === null || length > 125 || length < 8)
        //{
          //window.alert("Please choose the number of characters you would like between 8 and 125")
          //return generatePassword();
        //}

        
  //return retVal;
//}

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