const img = document.querySelector(".img"); //selecting eyeicon
const input = document.querySelector("input");//selecting input field

img.addEventListener('click', (e) => {
    if (input.type == "password") {
        input.type = "text";
        img.src = "eye-icons/eye-open.png"
    }
    else {

        input.type == "text";
        input.type = "password"
        img.src = "eye-icons/eye-close.png"
    }
})




