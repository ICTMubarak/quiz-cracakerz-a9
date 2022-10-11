import React from 'react';
import './loadquiz.css'

const LoadQuiz = (quizQuestion) => {
    //console.log('qq= ', quizQuestion);
    return (
        <div className='loadquiz'>
            <h4>question: {quizQuestion.quizQuestion.question}</h4>

            <input type="radio" value="1" name="quizOption" /> 1. {quizQuestion.quizQuestion.options[0]} <br/>
            <input type="radio" value="2" name="quizOption" /> 2. {quizQuestion.quizQuestion.options[1]} <br/>
            <input type="radio" value="3" name="quizOption" /> 3. {quizQuestion.quizQuestion.options[2]} <br/>
            <input type="radio" value="4" name="quizOption" /> 4. {quizQuestion.quizQuestion.options[3]}
        </div>
    );
};

export default LoadQuiz;