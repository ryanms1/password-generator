// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "@", "#", "$", "^", "&", "*", "(", ")"];


function generatePassword() {
  // password length
 var passLength = window.prompt("How many characters would you like your password to be?")

 if (passLength > 7 && passLength < 129) {

  //lower case letter confirm
  var lowerConfirm = window.confirm("Click OK to confirm including lower case letters.")
  
  //upper case letter confirm
  var upperConfirm = window.confirm("Click OK to confirm including upper case letters.")

  //number confirm
  var numConfirm = window.confirm("Click OK to confirm including numbers.")

  //special character confirm
  var specialConfirm = window.confirm("Click OK to confirm incuding special characters.")
  }
  //invalid password length
  else {
    window.alert("Password must be at least 8 and no more than 128 characters.");
  };

//Criteria selection

  //if 0 criteria selected
  if (!lowerConfirm && !upperConfirm && !numConfirm && !specialConfirm) {
      window.alert("You must select at least one criteria for your password!")
  }
  //all 4 criteria confirmed 
  else if (lowerConfirm && upperConfirm && numConfirm && specialConfirm) {
    criteria = lowerCase.concat(upperCase, num, specialChar);
  }
  //if 3 criteria are confirmed
  else if (lowerConfirm && upperConfirm && numConfirm) {
    criteria = lowerCase.concat(upperCase, num);
  }
  else if (lowerConfirm && upperConfirm && specialConfirm) {
    criteria = lowerCase.concat(upperCase, specialChar)
  }
  else if (upperConfirm && numConfirm && specialConfirm) {
    criteria = upperCase.concat(num, specialChar);
  }
  else if (lowerConfirm && numConfirm && specialConfirm) {
    criteria = lowerCase.concat(num, specialChar);
  }
  //if 2 criteria are confirmed 
  else if (lowerConfirm && upperConfirm) {
    criteria = lowerCase.concat(upperCase);
  }
  else if (lowerConfirm && numConfirm) {
    criteria = lowerCase.concat(num);
  }
  else if (lowerConfirm && specialConfirm) {
    criteria = lowerCase.concat(specialChar);
  }
  else if (upperConfirm && specialConfirm) {
    criteria = upperCase.concat(specialChar);
  }
  else if (numConfirm && specialConfirm) {
    criteria = num.concat(specialChar);
  }
  //if 1 criteria is confirmed
  else if (lowerConfirm) {
    criteria = lowerCase;
  }
  else if (upperConfirm) {
    criteria = upperCase;
  }
  else if (numConfirm) {
    criteria = num;
  }
  else if (specialConfirm) {
    criteria = specialChar;
  }
  //newPass variable string placeholder
  var newPass = "";
  //for loop to generate random password into newPass string
  for (var i = 0; i < passLength; i++) {
    newPass = newPass + criteria[Math.floor(Math.random() * criteria.length)]
    console.log(newPass)
  }
  return newPass;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
