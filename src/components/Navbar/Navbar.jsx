import React from "react";
import Button from '../Button/Button';
import "./Navbar.css";
const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="nav-logo">Akhil Dasari</h1>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <Button  text="Contact Me" href="#contact" type="dark"/>
            
                <div className="hamburger">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;