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

  active = !active

  if (active) {
    toggle.classList.add("active")
    text.innerHTML = "ON"
    app.style.backgroundColor = "#ECFDF5"
    title.classList.add("dark-title")
  } else {
    toggle.classList.remove("active")
    text.innerHTML = "OFF"
    app.style.backgroundColor = "#1F2937"
    title.classList.remove("dark-title")
  }
})


// Password generator:

let inputEl1 = document.getElementById("input-el1")
let inputEl2 = document.getElementById("input-el2")
let generatePassword = document.getElementById("generatePassword")
// Password will be of 15 characters/symbols long
let passwordLength = 15

// TODO: Password length selector

// generate a randomic password
generatePassword.addEventListener("click", function() {

  let password1 = ""
  let password2 = ""

  for (let i =0; i < passwordLength; i++) {
    // generate a randomic value of 15 indexes in the character array
    let randomIndex1 = Math.floor(Math.random()*characters.length)
    let randomIndex2 = Math.floor(Math.random()*characters.length)
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

