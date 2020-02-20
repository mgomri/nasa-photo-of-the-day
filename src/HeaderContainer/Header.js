import React from 'react';
import './Header.css';
import nasa from '../assets/nasa.png';

const Header = () =>{

    return(
        <div className="header-container">
        <img className="logo" src={nasa} alt="NASA logo"/>
        <nav className="navigation">
            <span href="http://localhost:3000/">Home</span>
            <span href="http://localhost:3000/">About</span>
            <span href="http://localhost:3000/">News</span>
            <span href="http://localhost:3000/">Contact</span>
        </nav>
        
        </div>
    );
}

export default Header;