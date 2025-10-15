import React, { useState } from "react";
import Button from '../Button/Button';
import "./Navbar.css";
const Navbar = () => {

     const [isOpen, setIsOpen] = useState(false);

        const toggleMenu = () => {
            setIsOpen(!isOpen);
        };

        const closeMenu = () => {
            setIsOpen(false);
        };

    return(
        <nav className="navbar">
            <div className="nav-container">
                <h1 className="nav-logo">Akhil Dasari</h1>

                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><a href="/" className="active" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>

                <Button  text="Contact Me" href="#contact" type="primary"/>
            
                <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;