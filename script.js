const questions = [
    {
        question : "What is the square root of 144?",
        answers:[
             {text:"10",correct: false},
             {text:"12",correct: true},
             {text:"14",correct: false},
             {text:"16",correct: false},
        
        ]
    },
    {
        question : "What is the value of π (pi) rounded to two decimal places?",
        answers:[
             {text:"3.12",correct: false},
             {text:"3.16",correct: false},
             {text:"3.18",correct: false},
             {text:"3.14",correct: true},
        
        ]
    },
    {
        question : "What is the result of 7 * 9?",
        answers:[
             {text:"63",correct: true},
             {text:"56",correct: false},
             {text:" 72",correct: false},
             {text:"45",correct: false},
        
        ]
    },
    {
        question: "What is the area of a rectangle with length 8 units and width 5 units?",
        answers: [
            { text: "13 sq units", correct: false },
            { text: "30 sq units", correct: false },
            { text: "40 sq units", correct: true },
            { text: "45 sq units", correct: false }
        ]
    },
    {
        question: "Solve for x: 2x - 5 = 11",
        answers: [
            { text: "3", correct: false },
            { text: "6", correct: false },
            { text: "16", correct: false },
            { text: "8", correct: true },
        ]
    },
    {
        question: "What is the next number in the Fibonacci sequence after 5, 8, 13, 21?",
        answers: [
            { text: "24", correct: false },
            { text: "34", correct: true },
            { text: "28", correct: false },
            { text: "36", correct: false }
        ]
    },
    {
        question: "What is the value of 3 to the power of 4?",
        answers: [
            { text: "27", correct: false },
            { text: "81", correct: false },
            { text: "64", correct: true },
            { text: "243", correct: false }
        ]
    },
    {
        question: "What is the perimeter of a square with a side length of 10 units?",
        answers: [
            { text: "40 units", correct: true },
            { text: "20 units", correct: false },
            { text: "30 units", correct: false },
            { text: "50 units", correct: false }
        ]
    },
    {
        question: "What is the value of sin(90 degrees)?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "0.5", correct: false },
            { text: "-1", correct: false }
        ]
    },
    {
        question: "If a triangle has angles measuring 45°, 45°, and 90°, what type of triangle is it?",
        answers: [
            { text: "Equilateral", correct: false },
            { text: "Isosceles", correct: false },
            { text: "Scalene", correct: false },
            { text: "Right", correct: true }
        ]
    },
    {
        question: "What is the result of 15 divided by 3?",
        answers: [
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "10", correct: false },
            { text: "15", correct: false }
        ]
    },
    {
        question: "What is the value of 10 factorial (10!)?",
        answers: [
            { text: "100", correct: false },
            { text: "720", correct: false },
            { text: "3,628,800", correct: true },
            { text: "10,000", correct: false }
        ]
    },
    {
        question: "What is the circumference of a circle with a radius of 6 units (rounded to the nearest whole number)?",
        answers: [
            { text: "12 units", correct: false },
            { text: "18 units", correct: false },
            { text: "24 units", correct: false },
            { text: "38 units", correct: true }
        ]
    },
    {
        question: "What is the value of log₂(16)?",
        answers: [
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false }
        ]
    },
    {
        question: "If a car travels at a speed of 60 miles per hour, how many miles will it travel in 3 hours?",
        answers: [
            { text: "120 miles", correct: false },
            { text: "150 miles", correct: false },
            { text: "180 miles", correct: true },
            { text: "200 miles", correct: false }
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + "."+ currentQuestion.question;

    currentQuestion.answers.forEach( answer =>{
        
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button  => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
    showQuestion();
    }else{
        showScore();
    }
};

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});
startQuiz();


