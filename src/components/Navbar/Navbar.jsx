import React, { useState } from "react";
import Button from '../Button/Button';
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
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
                    <li>  <ScrollLink to="home" smooth={true} duration={300} onClick={closeMenu} className="nav-link">Home</ScrollLink></li>
                    <li><ScrollLink to="skills" smooth={true} duration={300} onClick={closeMenu} className="nav-link">Skills</ScrollLink></li>
                    
                    <li><ScrollLink to="about" smooth={true} duration={300} onClick={closeMenu} className="nav-link">About</ScrollLink></li>

                    <li><ScrollLink to="projects" smooth={true} duration={300} onClick={closeMenu} className="nav-link">Projects</ScrollLink></li>

                    <li className="mobile-btn">
                        <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>
                            <Button text="Contact Me" type="primary" />
                        </ScrollLink>
                    </li>
                </ul>

                <div className="desktop-btn">
                    <ScrollLink to="contact" smooth={true} duration={300} onClick={closeMenu} className="nav-link">
                            <Button text="Contact Me" type="primary" />
                        </ScrollLink>
                </div>
                
            
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