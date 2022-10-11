import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'

const Quizes = () => {
    const quizes = useLoaderData();
    const quizArray = quizes.data

    //console.log(quizArray);
    return (
        <div>
            <h1>This is Quizes</h1>
            <div className='quizes'>
              {
                quizArray.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
              }
            </div>
            
        </div>
    );
};

export default Quizes;