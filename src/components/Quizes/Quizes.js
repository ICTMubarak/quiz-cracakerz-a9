import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const quizArray = quizes.data

    //console.log(quizArray);
    return (
        <div>
            <h1>This is Quizes</h1>
            {
                quizArray.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizes;