const display = document.querySelector('input[name="display"]');
const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.value;
        if (value === 'AC') {
            display.value = "" //clear everthing
        }
        else if (value === "DE") {
            //slice(0, -1) If end is negative, it counts from the end of the string->means: Start at index 0 , End 1 character before the end.
            display.value = display.value.slice(0, -1); // It simply removes the last character of the string.
        }
        else if (value === "=") {
            try {   //eval() is a JavaScript function that takes a string and executes it as code.display.value is a string like "2+3*5 so eval("2+3*5") → JavaScript actually runs the math and gives 17 so it calculates the result and displays result

                display.value = eval(display.value) || "";
            } catch {
                display.value = "Error";
            }
        }
        else {  //when pressing numbers/operators
            // display.value += value; // append numbers/operators
            display.value = `${display.value}${value}`;   //template literals ok so display.value This is just the text inside your calculator’s input field. each new value (button you press) gets concatenated (joined) with the previous display.value
        }

    })
})