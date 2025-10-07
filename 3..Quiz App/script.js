
const question = document.getElementById("question");
const answerButton = document.querySelector(".answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0
let score=0

function startQuiz(){
    currentQuestionIndex=0
    score=0
    nextButton.innerHTML="next";
    showQuestion();
}

function showQuestion(){
    questions.map(()=>{

    })
}
const questions = [
    {
        question1: "which is the larget animal in the world",
        answers: [

            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            {
                text: "Giraffe", correct: false
            }

        ]
    },
    {
        question2: "who is your father",
        answers: [

            { text: "salman", correct: false },
            { text: "sajid", correct: true },
            { text: "anwar", correct: false },
            {
                text: "iqbal", correct: false
            }

        ]
    },
    {
        question1: "what is the capital of pakistan",
        answers: [

            { text: "karachi", correct: false },
            { text: "islamabad", correct: true },
            { text: "peshawar", correct: false },
            {
                text: "lahore", correct: false
            }

        ]
    },


];