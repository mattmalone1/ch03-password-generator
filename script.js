// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  let passwordLength = 0;
  // prompt for the password length keep prompting until the password length is valid.
  do{
    passwordLength = window.prompt("Please enter a a password length between 8 and 128.");
  }  while((passwordLength < 7) && (passwordLength > 129));

  // console.log(passwordLength);

  // get user password selections
  let incLower = window.confirm("Include lowercase characters?");
  let incUpper = window.confirm("Include uppercase characters?");
  let numeric = window.confirm("Include numeric characters?");
  let specChar = window.confirm("Include Special CHaracters?");

  //Create an array to hold the password letters.
  let passwordSelect = Array(passwordLength);

  let i = 0; 
  while(i < passwordLength){

    // This construction is Unicode and excludes the space when getting a random character.
    passwordSelect[i] = String.fromCharCode(0x0021 + Math.random() * (0x007E-0x0021+1));
    i++;
  }

  return passwordSelect.join("");


  }