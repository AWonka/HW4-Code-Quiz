const question = document.querySelector('#question')
const choices = document.querySelectorAll('.choice-text')
const questionText = document.querySelector('#questionText')
const scoreText = document.querySelector('#score')
const progressTimer = document.querySelector('#timer')

let sec = 60
let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []
let timerCounter = 0

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
    timerStart()
    // May need to Set timer here too
}

function timerStart() {
    sec--;
    var timer = setInterval(function(){
        document.getElementById('timerText').innerHTML='00:'+sec;
        sec--;
        if (sec <= 0) {
            clearInterval(timer)
            return window.location.assign('./index.html')
        }
    }, 1000)
}


getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    questionText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        acceptingAnswers = false

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        } else{classToApply === 'incorrect'
        sec += -15
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})


incrementScore = num => {
    score += num
    scoreText.innerText = score
}



startGame()