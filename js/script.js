// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}
// Ask user how many characters they want in a password
var length = Number(prompt("How many characters would you like your password to be? Enter a number between 8 and 128"));

// Ask user what type of character is preferred
var charType = prompt("Enter a character type: special, numeric, uppercase, lowercase, or mix.");

//generate password
function generatePassword() {

  // If statement to see what user will choose
  var charSet = "";
  var charTypeLower = charType.toLowerCase();
  if( charTypeLower === "lowercase" ) { // this shows how to get lowercase
    charSet = "abcdefghijklmnopqrstuvwxyz";
  } else if( charTypeLower === "uppercase" ) { // this shows how to get uppercase
    charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if( charTypeLower === "numeric" ) { // this shows how to get numeric
    charSet = "0123456789";
  } else if( charTypeLower === "special" ) { // this shows how to get special
    charSet = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if ( charTypeLower === "mix" ) { // Just for fun. this shows how to get all types of characters
    charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }
  //return value
  var endValue = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    endValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return endValue;
}
alert(generatePassword());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
