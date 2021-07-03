var userResponse = {};
var password = "";

// function to get random lowercase letter
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
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

// Generate Password Button event
function passGen() {
    var passStart = window.confirm("Let's Create Your Password");
    if (!passStart) {
        return alert("restart when you're ready");
    }
    // Prompt for password length
    var passLength = parseInt(window.prompt("Please enter how many characters you would like your password to be. (Password MUST be 8-128 characters long!)"));
    if (passLength < 8 || passLength > 129) {

         alert("Invalid length, please re-enter");
         return passGen();
    }
    // Prompt for lowercase letters
    var passLower = window.confirm("Would you like your password to contain lowercase letters?");
    if (passLower) {
        // getRandomLower();
        userResponse.lower = passLower;
        console.log("Random lowercase letter " + getRandomLower());
    }
    // Prompt for uppercase letters
    var passUpper = window.confirm("Would you like your password to contain uppercase letters?");
    if (passUpper) {
        // getRandomUpper();
        userResponse.upper = passUpper;
        console.log("Random uppercase letter " + getRandomUpper());
    }
    // Prompt for numbers
    var passNum = window.confirm("Would you like your password to contain numbers?");
    if (passNum) {
        // getRandomNumber();
        userResponse.num = passNum;
        console.log("Random number " + getRandomNumber());
    }
    // Prompt for special characters 
    var passSym = window.confirm("Would you like your password to contain special characters?");
    if (passSym) {
        // getRandomSymbol();
        userResponse.sym = passSym;
        console.log("Random special character " + getRandomSymbol());
    }

    // While loop which considers user's inputs from prompts and adds them to the password
    while (password.length < passLength) {
        if (userResponse.lower) { password += getRandomLower(); }
        if (userResponse.upper) { password += getRandomUpper(); }
        if (userResponse.num) { password += getRandomNumber(); }
        if (userResponse.sym) { password += getRandomSymbol(); }
        console.log(password);
    }

    // Substring which matches random characters to user inputed character length
    password = password.substring(0, passLength);

    // Displaying completed password to textarea in HTML
    var passEl = document.querySelector("#password");
    passEl.value = password
}

// Welcoming alert to user 
window.alert("Welcome to Password Generator - Click on the Generate Password button to get started!");






