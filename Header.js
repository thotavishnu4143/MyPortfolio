import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <h1>Vishnu Vardhan Thota</h1>
            <p>Welcome to my portfolio!!!!</p>
            <nav>
                <ul>
                    <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
                    <li><a href="#skills"><i className="fas fa-tools"></i> Skills</a></li>
                    <li><a href="#Projects"><i className="fas fa-project-diagram"></i> Projects</a></li>
                    <li><a href="#Education"><i className="fas fa-graduation-cap"></i> Education</a></li>
                    <li><a href="#Contact"><i className="fas fa-envelope"></i> Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

