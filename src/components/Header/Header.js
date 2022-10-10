import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to ='home'>Home</Link>
            <Link to ='quizes'>Quizes</Link>
        </div>
    );
};

export default Header;