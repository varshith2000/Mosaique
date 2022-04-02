import React from "react";
import ReactDOM from 'react-dom';
import mosaique from "../mosaique.png";
import "./Navbar.css";
function Navbar() {
    return(
        <nav className="navbar">
            <img src={mosaique} alt="Mosaique" className="img" />
            <button className="home">Home</button>
        </nav>
    );
}

export default Navbar;