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
  
  // Create strings of the characters that we can draw from.
  const lower ='abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const number = '0123456789';
  const special = '!\"#$%&\'()*,-./:;<=>?@[\\]^_`{|}~';
  // prompt for the password length keep prompting until the password length is valid.
  do{
    passwordLength = window.prompt("Please enter a a password length between 8 and 128.");
  }  while((passwordLength < 7) && (passwordLength > 129));

  // console.log(passwordLength);
  // create an empty string.
  let charsSelected = '';

  // get user password selections
  let incLower = window.confirm('Include lowercase characters?');
  let incUpper = window.confirm('Include uppercase characters?');
  let numeric = window.confirm('Include numeric characters?');
  let specChar = window.confirm('Include Special Characters?');

  // create the conditions and add them to the randomized string.
  if(incLower === true) {
    charsSelected = charsSelected.concat(lower);
  }
  if(incUpper === true) {
    charsSelected = charsSelected.concat(upper);
  }
  if(numeric === true) {
    charsSelected = charsSelected.concat(number);
  }
  if(specChar === true) {
    charsSelected = charsSelected.concat(special);
  }

  // console.log(charsSelected);
  //Create an array to hold the password letters.
  let passwordSelect = '';

  let i = 0; 
  while(i < passwordLength){

    // select a random character from the string and build passwordSelect.
    passwordSelect += charsSelected.charAt(Math.floor(Math.random() * charsSelected.length));
    i++;
  }

  return passwordSelect;


  }