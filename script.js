// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character lists
const lowercaseCharList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercaseCharList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numericCharList = ['1','2','3','4','5','6','7','8','9','0'];
const specialCharList = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',"]",'^',"_",'`','{','|','}','~'];

const generatePassword = function () {

  let passLength = 0;
 
  // Confirm lowercase, uppercase, numeric, and/or special characters
  const lowercaseChar = confirm('Do you want your password to have lowercase characters?');
  const uppercaseChar = confirm('Do you want your password to have uppercase characters?');
  const numericChar = confirm('Do you want your password to have numeric characters?');
  const specialChar = confirm('Do you want your password to have special characters?');

  if ((lowercaseChar || uppercaseChar || numericChar || specialChar) === false) {
    alert("You must choose at least one character type!");
    generatePassword();
  }
   // Pick a password length, if not valid start at this step not character step
  const passLengthFunc = function () {

   const passLength = prompt('How long would you like your password to be (min 8 characters/max 128 characters)?');

  if ((passLength >= 8 && passLength < 129) !== true) {
    alert("Your password must be min 8 characters and max 128 characters!");
    passLengthFunc();
  }
  return passLength;
  }

  var passLengthNum = passLengthFunc();


  let listSelect = [];

  if (lowercaseChar) {
    listSelect = listSelect.concat(lowercaseCharList);
  }
  if (uppercaseChar) {
    listSelect = listSelect.concat(uppercaseCharList);
  }
  if (numericChar) {
    listSelect = listSelect.concat(numericCharList);
  }
  if (specialChar) {
    listSelect = listSelect.concat(specialCharList);
  }

  console.log(listSelect);
  
  let i = 0;
  let passwordNew = '';
  for (i=0; i <= passLengthNum-1; i++) {  
    // generate random between 0 ~ 
    const randomNum = Math.floor(Math.random() * listSelect.length);
    // console.log(randomNum);
    passwordNew=passwordNew+listSelect[randomNum];
    // console.log(passwordNew)
  }

return passwordNew;
}


// build list of potential characters




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

