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


function generatePassword() {

  // prompt for the password length keep prompting until the password length is valid.
  do{
    let passwordLength = window.prompt("Please enter a a password length between 8 and 128.");
  }  while((passwordLength < 7) && (passwordLength > 129));

  // console.log(passwordLength);

  // get user password selections
  let incLower = window.confirm("Include lowercase characters?");
  let incUpper = window.confirm("Include uppercase characters?");
  let numeric = window.confirm("Include numeric characters?");
  let specChar = window.confirm("Include Special CHaracters?");

  //console.log(incLower);




  }