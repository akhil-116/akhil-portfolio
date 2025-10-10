import React from "react";
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

                <a href="#contact" className="contact-btn">Contact Me</a>

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