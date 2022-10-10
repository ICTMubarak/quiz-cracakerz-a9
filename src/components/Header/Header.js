import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css';

const Header = () => {
    return (
       <div>
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

            <div>
                <h1>website headline</h1>
                
            </div>
        </div>
    );
};

export default Header;