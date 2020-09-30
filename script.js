var time = document.getElementById("timer")
var score1 = document.getElementById("score")
var scoreDisplay = document.getElementById("score2")
var startPage = document.getElementById("startPage")
var choices = document.getElementById("choices")
var start = document.getElementById("start")
var quiz = document.getElementById("questions")
var isCorrect = document.getElementById("isCorrect")
var next = document.getElementById("nextQ")
var finish = document.getElementById("finish1")
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")
var finished = document.getElementById("finished")
var highscores = document.getElementById("highscore")
var submit = document.getElementById("submit")
var initial = document.getElementById("initial")
var input = document.getElementById("highscores")
var score = 0
var timer = 60
var clicked = false

var currentQuestionIndex = 0

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "C",


    },
    {
        question: "The condition in an if/else statement is enclosed within ______.:",
        choiceA: "quotes",
        choiceB: "curly brackets",
        choiceC: "parenthesis",
        choiceD: "square brackets",
        correct: "C",

    },
    {
        question: "Arrays in JavaScript can be used to store ___:",
        choiceA: "numbers and strings",
        choiceB: "other arrays",
        choiceC: "booleans",
        choiceD: "all of the above",
        correct: "D",


    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables:",
        choiceA: "quotes",
        choiceB: "commas",
        choiceC: "curly brackets",
        choiceD: "parenthesis",
        correct: "A",


    },
    {
        question: "A very useful tool used during developement and debugging for printing content to the debugger is:",
        choiceA: "console.log",
        choiceB: "Javascript",
        choiceC: "for loops",
        choiceD: "terimnal/bash",
        correct: "A",



    },

]

start.addEventListener("click", startGame)
choiceA.addEventListener('click', checkAnswer)
choiceB.addEventListener('click', checkAnswer)
choiceC.addEventListener('click', checkAnswer)
choiceD.addEventListener('click', checkAnswer)
next.addEventListener("click", nextQuestion)
submit.addEventListener("click", highScore)
finish.addEventListener('click', finishQuiz)


function setTime() {
    var timerInterval = setInterval(function () {
        timer--;
        time.textContent = "Time: " + timer;

        if (timer <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
        }

    }, 1000);
}

function finishQuiz() {
    quiz.classList.add("hide")
    finished.classList.remove("hide")
    choices.classList.add("hide")
    score1.textContent = "Your final score is: " + score
    timer = 0
    
}



function startGame() {
    start.classList.add("hide")
    startPage.classList.add("hide")
    quiz.classList.remove("hide")
    choices.classList.remove("hide")
    next.classList.remove("hide")
    showQuestions()
    setTime()
}