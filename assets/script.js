var startQuiz = document.getElementById('start-Quiz');
var questionContainerEl = document.getElementById('question-container');

startQuiz.addEventListener('click', beginQuiz);

var shuffledQuestions = currentQuestionIndex


function beginQuiz() {
    console.log('start');
    startQuiz.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    nextQuestion();
};

function showQuestion(myQuestions) {

}

var myQuestions = [
    {
        question: 'Which of these is not a primitive type',
        answers: [
            { text: 'boolean' },
            { text: 'number' },
            { text: 'string' },
            { text: 'method' }],
        correctAnswer: 'method'
    },
    {
        question: 'what does a conditonal statement start with?',
        answers: [
            { text: 'if' },
            { text: 'else' },
            { text: 'when' },
            { text: 'for' }],
        correctAnswer: 'if'
    },
    {
        question: 'what is the proper variable syntaxt when setting a variable?',
        answers: [
            { text: 'Element = Var = 1' },
            { text: 'var Element = 1' },
            { text: 'var = Element 1' },
            { text: '1 = ElementVar' }],
        correctAnswer: 'var Element = 1'
    },
    {
        question: 'which of these is a string?',
        answers: [
            { text: 'false' },
            { text: '90' },
            { text: '"21"' },
            { text: 'true' }],
        correctAnswer: '"21"'
    },

    {
        question: 'Which of these  comparisons means strict equality?',
        answers: [
            { text: '>=' },
            { text: '||' },
            { text: '!=' },
            { text: '&&' }],
        correctAnswer: '>='
    }
];