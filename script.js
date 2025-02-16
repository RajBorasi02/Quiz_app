const quizData = [
    {
        question: "What is the capital of France",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        answer: "Paris"
    },
    {
        question: "who create a java programming Language",
        options: ["Jam Goslin", "Mikal Jackson", "Tarzon", "Micky"],
        answer: "Jam Goslin"
    },
    {
        question: "What is the National Animal of India",
        options: ["Lion", "Dog", "Tiger", "Bull"],
        answer: "Tiger"
    },
    {
        question: "Where Mahakaaleswar Jyotiling in India",
        options: ["Indore MP", "Ujjain MP", "Mumbai M", "Pune M"],
        answer: "Ujjain MP"
    },
];

const questionNumberEl = document.getElementById("question-number");
const questionEl = document.getElementById("question");
const optionEl = document.querySelectorAll(".option");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("next-Btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let currentquestion = 0;
let score = 0;
let timeLeft = 10;
let answerSelected = false;

function loadquestion(){
    const {question, options} = quizData[currentquestion];
    questionNumberEl.textContent = `Question ${currentquestion + 1} of ${quizData.length}`;
    questionEl.textContent = question;
    optionEl.forEach((option, index) =>{   
        option.textContent = options[index];
        option.classList.remove("correct","incorrect");
        option.onclick = () => selectoption(option);  
    });
    answerSelected = false;
}

function selectoption(option) {
    if (!answerSelected) { // Corrected condition to allow selection only if no answer is selected yet
        answerSelected = true;
        const selectAnswer = option.textContent;
        const correctAnswer = quizData[currentquestion].answer;
        if (selectAnswer === correctAnswer) {
            option.classList.add("correct");
        } else {
            option.classList.add("incorrect");
            optionEl.forEach(opt => {
                if (opt.textContent === correctAnswer) {
                    opt.classList.add("correct");
                }
            });
        }
        nextBtn.disabled = false;
    }
}









loadquestion();