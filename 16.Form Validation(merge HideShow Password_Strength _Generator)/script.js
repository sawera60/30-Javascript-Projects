
const fullName = document.getElementById("fullName");
const fullnamevalidation = document.getElementById("fullnamevalidation")

const password = document.getElementById("password");
const passwordvalidation = document.getElementById("passwordvalidation");
const input = document.querySelector("input");//selecting input field
const img = document.querySelector("img"); //selecting image
const generateBtn = document.getElementById("generate-btn");


const phoneNo = document.getElementById("phoneNo");
const phonevalidation = document.getElementById("phonevalidation");


const emailId = document.getElementById("emailId");


const message = document.getElementById("message");


const submit = document.getElementById("submit");




// -------  FullName Validation -----------------------//
fullName.addEventListener("input", (e) => {
    const inputValue = e.target.value;// 👈 Get what user types (exactly as typed)
    const trimmedValue = inputValue.trim(); // 👈Remove spaces from start & end only
    const splittedValue = trimmedValue.split(" ")

    //.filter() goes through the array and keeps only non-empty words Example: From above ["Victor", "", "Sawera"] → ["Victor", "Sawera"]So even if a user types multiple spaces, this will still count the words correctly ✅.
    const finalInput = splittedValue.filter((word) => {
        return word !== ""; //only return those string of which are not empty if user types "sawera    sajid" return only "sawera sajid" with single space
    });

    //user jo bhi type krta hai us mai jo bhi junhi space aye ya phir finalInput ki length 2 words sy kam ha to phir 
    if (inputValue.includes(" ") && finalInput.length < 2) { // ✅ check the string (inputValue) for space on raw inputValue and length of finalInput
        fullnamevalidation.innerHTML = "Please enter full name"
        fullnamevalidation.style.color = "red";
    }
    else if (finalInput.length >= 2) {
        fullnamevalidation.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        fullnamevalidation.style.color = "green";

    }
    else {  // condition 3: still typing first name (no space yet)
        fullnamevalidation.innerHTML = ""; // clear message when valid ✅ If the user is still typing their first name only (they haven’t pressed space yet), then don’t show any error message or icon — keep the span empty
    }
});


// ----------- Password Validation (Hide/Show Password, Generate Password, password validation )
password.addEventListener("input", (e) => {
    //password strength check code
    const passwordValue = e.target.value;// 👈 Get what user types (exactly as typed)
    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;
    let specialcharacter = /[!@#$%^&*]/;

    const lowercaseCheck = lowercase.test(passwordValue);
    const uppercaseCheck = uppercase.test(passwordValue);
    const specialcharacterCheck = specialcharacter.test(passwordValue);
    if (passwordValue == "") {
        passwordvalidation.innerHTML = "Password is required";
    }
    else if (passwordValue.length < 8 || passwordValue) {
        passwordvalidation.innerHTML = "password is weak";
    }
    else if (passwordValue.length >= 8 && passwordValue.length <= 10) {
        passwordvalidation.innerHTML = "password is medium"
    }
    else if (lowercase.test(passwordValue) &&
        uppercase.test(passwordValue) &&
        specialcharacter.test(passwordValue) &&
        passwordValue.length > 1) {
        passwordvalidation.innerHTML = "password is strong"
    }
    else {
        passwordvalidation.innerHTML = "invalid format. Password should contain one small letter , one capital letter and one special character"
    }
})

//below is the code for toggle password
img.addEventListener("click", () => {
    if (input.type == "password") {
        img.src = "eye-icons/eye-open.png"
    }
    else {
        input.type == "text";
        input.type = "password"
        img.src = "eye-icons/eye-close.png"
    }
})
//password generator random
let passwordGenerator = [
    {
        alphabets: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],

        digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        specialCharacter: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
            "[", "]", "{", "}", ";", ":", "'", "\"", ",", ".", "<", ">", "/", "?", "\\", "|", "`", "~"]
    }
];
function generatePassword() {
    let val = passwordGenerator[0]; //take the object
    let allChars = [...val.alphabets, ...val.digits, ...val.specialCharacter]; // merge everything
    let password = ""

    //loop to generate an 8 character password
    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * allChars.length);
        password = password + allChars[randomIndex];

    }

    return password; //return final pasword

}

generateBtn.addEventListener('click', () => {
    let randomPassword = generatePassword();
    passwordvalidation.innerHTML = randomPassword; //put generated password in input

})

copy.addEventListener('click', () => {
    if (passwordvalidation !== "") {
        navigator.clipboard.writeText(password.value);
        alert("copied");

    }
})

// ----------- Phone validation ---------------------- //
phoneNo.addEventListener("input", (e) => {
    phoneInput = e.target.value;
    if (phoneInput == "") {
        phonevalidation.innerHTML = "phone no is required"
    }
    else if (phoneInput.length < 10) {
        phonevalidation.innerHTML = "phone no should be 10 digits"
    }
    else if (phoneInput >= 10) {
        phonevalidation.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    }

})





