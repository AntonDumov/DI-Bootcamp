const quizDB = {
    currentQuestionIndex: 0,
    score: 0,
    questions: [
        {
            question: 'What is the capital of France?',
            answer: 'Paris'
        },
        {
            question: 'Which planet is known as the Red Planet?',
            answer: 'Mars'
        },
        {
            question: 'What is the largest mammal in the world?',
            answer: 'Blue whale'
        },
        {
            question: 'In what year did the Titanic sink?',
            answer: '1912'
        },
        {
            question: 'Who wrote the play \'Romeo and Juliet\'?',
            answer: 'William Shakespeare'
        },
        {
            question: 'What is the chemical symbol for gold?',
            answer: 'Au'
        },
        {
            question: 'Which country is the largest by land area?',
            answer: 'Russia'
        },
        {
            question: 'What is the name of the world\'s longest river?',
            answer: 'Amazon River'
        },
        {
            question: 'Who is known as the father of modern physics?',
            answer: 'Albert Einstein'
        },
        {
            question: 'What is the hardest natural substance on Earth?',
            answer: 'Diamond'
        }
    ],
    getCurrent() {
        return this.questions[this.currentQuestionIndex];
    },
    setNextQuestion() {
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex === this.questions.length) {
            this.currentQuestionIndex = 0;
        }
    }
};

export default quizDB;