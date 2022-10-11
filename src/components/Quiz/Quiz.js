import React from 'react';
import { Link } from 'react-router-dom';
import Start from '../Start/Start';
import './Quiz.css'

const quiz = (quiz) => {
    console.log(quiz);
    return ( 
        <div className='quiz'>
            <img src={quiz.quiz.logo} alt="" />
            <h3>Topic Name: {quiz.quiz.name}</h3>
            <p>Total Question: {quiz.quiz.total}</p>
            <p><small>Start the Quiz: <Link to={`/start/${quiz.quiz.id}`}>{quiz.quiz.name}</Link> </small></p>
        </div>
    );
};

export default quiz;