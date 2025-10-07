let inputbox = document.querySelector(".input");
let button = document.querySelector(".btn");
let copy = document.querySelector(".copy")


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

button.addEventListener('click', () => {
    let randomPassword = generatePassword();
    inputbox.value = randomPassword; //put generated password in input

})

copy.addEventListener('click', () => {
    if (inputbox.value !== "") {
        navigator.clipboard.writeText(inputbox.value);
        alert("copied");

    }
})