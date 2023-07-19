const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
  "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
  "x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!",
  "@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",",
  "|",":",";","<",">",".","?","/"
];

// Toggle dark/light mode:

let active = false

document.getElementById("toggleId").addEventListener("click", () => {
  // take control of the elements involved in the toggle
  let app = document.getElementById("app")
  let toggle = document.querySelector(".toggle")
  let text = document.querySelector(".text")
  let title = document.querySelector(".white-title")
  let label = document.querySelector(".label")

  active = !active

  if (active) {
    toggle.classList.add("active")
    text.innerHTML = "ON"
    app.style.backgroundColor = "#ECFDF5"
    title.classList.add("dark-title")
    label.classList.add("")
  } else {
    toggle.classList.remove("active")
    text.innerHTML = "OFF"
    app.style.backgroundColor = "#1F2937"
    title.classList.remove("dark-title")
  }
})


// Password generator:

// take control of the input fields
let inputEl1 = document.getElementById("input-el1")
let inputEl2 = document.getElementById("input-el2")
// the button to generate passwords
let generatePassword = document.getElementById("generatePassword")
// and the password length elements in the settings container
let passwordLength = document.getElementById("length")
let passwordLengthResult = document.getElementById("length-result")


document.addEventListener("DOMContentLoaded", () => {
  // event listener sets the initial value of the pass length
  let length = passwordLength.value // 15 which is the max
  // then it updates the content of "length-result" element with the initial value
  passwordLengthResult.textContent = length

  inputEl1.value = generatePassword(length)
  inputEl2.value = generatePassword(length)
})

// listen for password length change:
// when I change the value of the selector, the event listener is triggered
// and it retrieves the new value of length from the event target
// and updates the content of the passwordLengthResult element with the new value
passwordLength.addEventListener("change", (e) => {
  let length = e.target.value
  passwordLengthResult.textContent = length
})

// Generate a randomic password
generatePassword.addEventListener("click", function() {
  // take the whichever is the value of the password length selector and store it into a variable
  let length = passwordLength.value
  // define two empty variables to store the generated passwords
  let password1 = ""
  let password2 = ""

  // loop over length to generate random characters for the password
  for (let i =0; i < length; i++) {
    // generate a randomic value of 15 indexes in the character array
    let randomIndex1 = Math.floor(Math.random() * characters.length)
    let randomIndex2 = Math.floor(Math.random() * characters.length)
    // access to the indexes string values
    let randomCharacter1 = characters[randomIndex1]
    let randomCharacter2 = characters[randomIndex2]
    // generate password
    password1 += randomCharacter1
    password2 += randomCharacter2
  }

  inputEl1.value = password1
  inputEl2.value = password2
})

// copy on click function
let copyButton = document.getElementById("copyButton")

copyButton.addEventListener("click", function() {
  //select text field
  inputEl2.select(); // select() method selects all the text in a <textarea> element or in an <input> element that includes a text field

  // Copy the text inside the text field
  navigator.clipboard.writeText(inputEl2.value);

  // Alert the copied text
  alert("Copied the password: " + inputEl2.value);
  })

