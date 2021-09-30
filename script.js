// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// * When I click on the button, I get alerts asking for password length (8-128) where I input a value, if it is less than
// * or greater than, I get another alert that says it needs to be within 8-128 characters.
// * then 4 more alerts pop up in sequential order asking if I want lower case, upper, numeric or special characters
// * I can click ok to accept them or cancel to deny them.
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// * A password is made from a string or array of items in lowercase, uppercase, numeric and special characters put together
// * randomly at the specific length of what I chose.
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// * The password is then put into the the box for the page





// selecting id generate and assigning it to generateBtn
var generateBtn = document.querySelector("#generate");

// creating arrays for each case
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y", "x", "z"];
var upperCase = lowerCase.map(letter => letter.toUpperCase());
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", "#", "$", "@", "+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":", "\"",];


// function to get user's specific interest in the password
function getInfo() {
  // window prompt to choose password length
  var passwordLength = window.prompt("Pick a password length between 8 and 128 characters")
  console.log(passwordLength);
  // if password is less than 8 or more than 128 show alert saying that
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 and 128 characters");
    return null;
  } else {
    // once password length is answered new prompts come up to ask what characters the user wants
    var lowerCaseIncl = confirm("Would you like to include lowercase?");
    var upperCaseIncl = confirm("Would you like to include uppercase?");
    var numericIncl = confirm("Would you like to include numbers?");
    var specialCharIncl = confirm("Would you like to include a special character?");
    console.log(lowerCaseIncl);
    console.log(upperCaseIncl);
    console.log(numericIncl);
    console.log(specialCharIncl);
    // return an object with key and value pairs
    var answers = { 
      passwordLength,
      lowerCaseIncl,
      upperCaseIncl,
      numericIncl,
      specialCharIncl
    };

    console.log(answers);

    return answers;
  }
}

// function generateArray() {
//   let charCodes = [];
//   if (options.lowerCaseIncl) charCodes = charCodes.concat(lowerCase);
//   if (options.upperCaseIncl) charCodes = charCodes.concat(upperCase);
//   if (options.numericIncl) charCodes = charCodes.concat(numeric);
//   if (options.specialCharIncl) charCodes = charCodes.concat(specialChar);
//   if (!options.lowerCaseIncl && !options.upperCaseIncl && !options.numericIncl && !options.specialCharIncl) {
//     alert("Please choose characters to include in the password")
//   }
//   console.log(charCodes)
//   return charCodes;
// }


// Write password to the #password input
function writePassword() {
  //this tells me generatePassword function needs to have output
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// copy password function
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copy");
}

// define generatePassword
function generatePassword(){
  // var passwordToReturn = "Placeholder"
  var options = getInfo();
  // "if" functions to add the arrays for a boolean value true
  let charCodes = [];
  if (options.lowerCaseIncl) charCodes = charCodes.concat(lowerCase);
  if (options.upperCaseIncl) charCodes = charCodes.concat(upperCase);
  if (options.numericIncl) charCodes = charCodes.concat(numeric);
  if (options.specialCharIncl) charCodes = charCodes.concat(specialChar);
  if (!options.lowerCaseIncl && !options.upperCaseIncl && !options.numericIncl && !options.specialCharIncl) {
     alert("Please choose characters to include in the password")
  }
  console.log(charCodes);
  charCodes.join("");

  console.log(charCodes.length);
  // loop over password length and pick a random character from charCodes string
  var passwordToReturn = "";
  for ( var i = 0; i < options.passwordLength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordToReturn += characterCode;
  }
  return passwordToReturn;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
