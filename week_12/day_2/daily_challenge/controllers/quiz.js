import quizDB from '../config/db.js';

export const getQuestion = (req, res) => {
    res.json({
        ok: true,
        data: {
            question: quizDB.getCurrent().question,
            score: quizDB.score
        }
    });
};

export const postAnswer = (req, res) => {
    if (quizDB.getCurrent().answer.toLowerCase() === req.body.answer.toLowerCase()) {
        quizDB.score++;
    }
    quizDB.setNextQuestion();
    let quizDone = false;
    if (quizDB.currentQuestionIndex === 0) {
        quizDone = true;
    }
    res.json({
        ok: true, data: {
            quizDone:quizDone, score: quizDB.score, nextQuestion: quizDB.getCurrent().question
        }
    });
    if (quizDone) {
        quizDB.score = 0;
    }
};

export const getScore = (req, res) => {
    res.json({
        ok: true,
        data: {
            score: quizDB.score
        }
    });
};