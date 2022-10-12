import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadQuiz from '../LoadQuiz/LoadQuiz';

const Start = () => {
    
    const startQuiz = useLoaderData();

    const quizQuestion = startQuiz.data.questions;

   


    return (
        <div>
            <h2>Attend The Quiz and Incrise your Knoledge.</h2>
            {
                quizQuestion.map(quizQuestion => <LoadQuiz quizQuestion={quizQuestion}></LoadQuiz>)
            }
        </div>
    );
};

export default Start;