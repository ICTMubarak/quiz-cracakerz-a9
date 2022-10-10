import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div>
                 <h3>OnlineQuiz.com</h3>
            </div>

            <div>
                <Link to ='home'>Home</Link>
                <Link to ='quizes'>QuizTopics</Link>
                <Link to ='statistics'>Statistics</Link>
                <Link to ='blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;