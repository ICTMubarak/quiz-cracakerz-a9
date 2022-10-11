import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadQuiz from '../LoadQuiz/LoadQuiz';

const Start = () => {
    
    const startQuiz = useLoaderData();

    const quizQuestion = startQuiz.data.questions;

   


    return (
        <div>
            <h1>start ok</h1>
            {
                quizQuestion.map(quizQuestion => <LoadQuiz quizQuestion={quizQuestion}></LoadQuiz>)
            }
        </div>
    );
};

export default Start;