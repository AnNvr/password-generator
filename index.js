const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// I set the values to store in variables as constants
let passwordLength = 15
let passwordOneEl = document.getElementById('box-left')
let passwordTwoEl = document.getElementById('box-right')

// generation of a random character
function generateCharacter() {
    let index = Math.floor(Math.random()*characters.length)
    return characters[index]
}

// generation of a random password
function generatePassword() {
    let password = ''
    for (let i = 0; i < passwordLength; i++) {
        password += generateCharacter()
    } return password
}

// I store the value of randomic password into a variable for each box
const passwordOne = generatePassword()
const passwordTwo = generatePassword()

// I return the values to screen with a function linked to the button
function button() {
    passwordOneEl.textContent = generatePassword()
    passwordTwoEl.textContent = generatePassword()
}

