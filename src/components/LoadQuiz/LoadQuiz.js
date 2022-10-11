import React from 'react';

const LoadQuiz = (quizQuestion) => {
    console.log('qq= ', quizQuestion);
    return (
        <div>
            <h4>question: {quizQuestion.quizQuestion.question}</h4>
            <p> 1. {quizQuestion.quizQuestion.options[0]} 2. {quizQuestion.quizQuestion.options[1]} 3. {quizQuestion.quizQuestion.options[2]} 4. {quizQuestion.quizQuestion.options[3]} </p>
        </div>
    );
};

export default LoadQuiz;