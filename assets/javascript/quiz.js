const question = document.querySelector('#question')
const choices = document.querySelector('.choice-text')
const questionText = document.querySelector('#questionText')
const timerText = document.querySelector('#timerText')
const scoreText = document.querySelector('#score')
const progressTimer = document.querySelector('#timer')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let timerCounter = '60'

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choice1: '<js>',
        choice2: '<javascript>',
        choice3: '<script>',
        choice4: '<scripting>',
        answer: 3,
    },
    {
        question: 'What is the correct JavaScript syntax to change the content of the HTML element?: <p id="demo">This is a demonstration.</p>',
        choice1: '#demo.innerHTML = "Hello World!"',
        choice2: 'document.getElement("p").innerHTML = "Hello World!"',
        choice3: 'document.getElementByID("demo").innerHTML = "Hello World!"',
        choice4: 'document.getElementByName("p").innerHTML = "Hello World!"',
        answer: 3,
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        choice1: 'The <body> section',
        choice2: 'The <head> section',
        choice3: 'Both the <head> and the <body> section are correct.',
        choice4: 'Within the <main> tag',
        answer: 3,
    },
    {
        question: 'How do you create a function in JavaScript?',
        choice1: 'function myFunction()',
        choice2: 'function:myFunction()',
        choice3: 'function = myFunction()',
        choice4: 'function => ()',
        answer: 1,
    },
    {
        question: 'How do you write an IF statement in JavaScript?',
        choice1: 'if (i == 5)',
        choice2: 'if i = 5 then',
        choice3: 'if i == 5 then',
        choice4: 'if i = 5',
        answer: 1,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
    // May need to Set timer here too
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    questionText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        
    })
}