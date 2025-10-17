
const fullName = document.getElementById("fullName");
const fullnamevalidation = document.getElementById("fullnamevalidation")
const password = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const phoneNo = document.getElementById("phoneNo");
const emailId = document.getElementById("emailId");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

fullName.addEventListener("input", (e) => {
    const inputValue = e.target.value;// 👈 Get what user types (exactly as typed)
    const trimmedValue = inputValue.trim(); // 👈Remove spaces from start & end only
    const splittedValue = trimmedValue.split(" ")

    //.filter() goes through the array and keeps only non-empty words Example: From above ["Victor", "", "Sawera"] → ["Victor", "Sawera"]So even if a user types multiple spaces, this will still count the words correctly ✅.
    const finalInput = splittedValue.filter((word) => {
        return word !== ""; //only return those string of which are not empty if user types "sawera    sajid" return only "sawera sajid" with single space
    });


    if (inputValue.includes(" ") && finalInput.length < 2) { //// ✅ check the string (inputValue) for space on raw inputValue and length of finalInput
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




