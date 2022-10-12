import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './Header.css';
import Banner from './banner.png';



const Header = () => {
    return (
       <div>
            <div className='header'>
                <div>
                     <h3>OnlineQuiz.com</h3>
                </div>

                <div className='menu'>
                    <Link to ='home'>Home</Link>
                    <Link to ='quizes'>QuizTopics</Link>
                    <Link to ='statistics'>Statistics</Link>
                    <Link to ='blog'>Blog</Link>
                </div>
            </div>

            <div className='banner'>
                <h1>Online Quiz for your practice!</h1>
                <img src={Banner}/>
                
            </div>
            
        </div>
    );
};

export default Header;