
const newQuote = document.querySelector(".new-quote");
const tweet = document.querySelector(".tweet");
const div = document.querySelector(".div");
const twitter_URL = "https://twitter.com/intent/tweet?text=";

let quotes = [
    "Believe you can and you're halfway there.",
    "Do what you can, with what you have, where you are.",
    "Happiness depends upon ourselves.",
    "Turn your wounds into wisdom.",
    "Dream big and dare to fail.",
    "It always seems impossible until it's done.",
    "Keep going. Everything you need will come to you at the perfect time.",
    "Don't wait. The time will never be just right.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Doubt kills more dreams than failure ever will.",
    "Small steps in the right direction can turn out to be the biggest step of your life.",
    "Stay hungry, stay foolish.",
    "Push yourself, because no one else is going to do it for you.",
    "Do something today that your future self will thank you for."
];

let currentQuote = ""; // keep track of current quote

function quoteGenerator() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote = quotes[randomIndex]; // store it
    div.innerHTML = ""; // clear old one
    let h2 = document.createElement("h2");
    h2.classList = "generated-quote";
    h2.style.backgroundColor = "yellow";
    h2.innerText = currentQuote;
    div.appendChild(h2);
}

// show random quote immediately on page load
quoteGenerator();

newQuote.addEventListener("click", () => {
    quoteGenerator();
});

// on click of tweet then share on twitter
tweet.addEventListener("click", function () {
    window.open(twitter_URL + encodeURIComponent(currentQuote), "_blank");
});


