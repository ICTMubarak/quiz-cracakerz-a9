import React from 'react';

const Quiz = (quiz) => {
    console.log(quiz);
    return (
        <div>
            <img src={quiz.quiz.logo} alt="" />
            <h3>Name: {quiz.quiz.name}</h3>

        </div>
    );
};

export default Quiz;