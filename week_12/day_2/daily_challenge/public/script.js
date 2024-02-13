const form = document.querySelector('form#quizForm');
const score = document.querySelector('#currentScore');
const question = document.querySelector('#currentQuestion');
const message = document.querySelector('#message');
const answerInput = document.querySelector('#answer');

form.addEventListener('submit', async (e) => {
    message.style.display = 'none';
    e.preventDefault();
    const answer = answerInput.value.trim();
    try {
        const r = await fetch('/quiz/', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                answer: answer
            })
        });
        const rJSON = await r.json();
        if (rJSON.ok) {
            score.innerHTML = 'Your score is:' + rJSON.data.score;
            question.innerHTML = rJSON.data.nextQuestion;
            if (rJSON.data.quizDone) {
                message.innerHTML = `Done! Your final score is ${rJSON.data.score}`;
                message.style.display = 'block';
            }
        }
    } catch (e) {
        message.innerHTML = `Something went wrong:\n ${e}`;
        message.style.display = 'block';
    }
});

window.addEventListener('load', async () => {
    try {
        const r = await fetch('/quiz/', {
            method: 'get'
        });
        const rJSON = await r.json();
        if (rJSON.ok) {
            question.innerHTML = rJSON.data.question;
        }
    } catch (e) {
        message.innerHTML = `Something went wrong:\n ${e}`;
        message.style.display = 'block';
    }
});