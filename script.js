// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// constants
const lower = 'abcdefghijklmnopqrstuvwxyz'
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const number = '1234567890'
const special = '~!@#$%^&*?'

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword () {

  // Set up connections with html and take the value from user input fields (checkbox, number input field)
  var lowerCaseLink = document.querySelector("#lowercaseBox");
  var allowLowerCase = lowerCaseLink.checked

  var uppercaseLink = document.querySelector("#uppercaseBox");
  var allowUpperCase = uppercaseLink.checked

  var numberLink = document.querySelector("#numberBox");
  var allowNumber = numberLink.checked

  var specialLink = document.querySelector("#specialBox");
  var allowSpecial = specialLink.checked

  var passwordLengthLink = document.querySelector("#quantity")
  var passwordLength = passwordLengthLink.value
  
  // var characters is the candidate  char set, I'm building charset by checking all those user input boolean values
  var characters = ""
  console.log(characters)
  if (allowLowerCase) {
    characters += lower
  }

  if (allowUpperCase) {
    characters += upper
  }

  if (allowNumber) {
    characters += number
  }

  if (allowSpecial) {
    characters += special
  }

  // In console log see what's the candidate set has been built
  console.log("Candidate char set", characters)

  // Generating x number of chars by randomly selecting from candidate char set and concatenating them in the final result
  var result = ""
  const charactersLength = characters.length;
  for ( let i = 0; i < passwordLength; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  // return the final generated result
  return result
}
