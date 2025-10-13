const success = document.querySelector(".success");
const error = document.querySelector(".error");
const invalid = document.querySelector(".invalid");

const toastBox = document.querySelector(".toastBox");

let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i> Invalid input, check again';

function showToast(msg, type) {
    let div = document.createElement("div");
    div.classList.add("toast", type);
    div.innerHTML = msg;
    toastBox.appendChild(div);

    setTimeout(() => {
        div.remove();
    }, 6000);
}

success.addEventListener("click", () => {
    showToast(successMsg, "success");
});
error.addEventListener("click", () => {
    showToast(errorMsg, "error");
});
invalid.addEventListener("click", () => {
    showToast(invalidMsg, "invalid");
});
