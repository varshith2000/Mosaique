import React from 'react';
import ReactDOM from 'react-dom';
import mq from "../main.png";
import './Header.css';

function Header() {
    return(
    <div>
        <img src={mq} alt="M1" className="imgq" />
    </div>
    );
}

export default Header;