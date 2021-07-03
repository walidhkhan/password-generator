// Assignment code here


// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// ------------------------------------------------------------------------------------------

// DOM elements
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
// const generateBtn = document.getElementById('generate')

// Object with functions 
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Add event listener to generate button (copied)
// generateBtn.addEventListener("click", () => {
//   const upper = uppercaseEl.value;


//   console.log(getRandomUpper());
// });

// Generator functions 
// function to get random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +97);
}

// function to get random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// function to get random number 
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// function to get special character / symbol
function getRandomSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Alerts

// Welcoming alert to user 
window.alert("Welcome to Password Generator - Click on the Generate Password button to get started!");

// Pretending to hit generate password button
var passStart = window.prompt("Please enter how many characters you would like your password to be (Password MUST be 8-128 characters long)");
