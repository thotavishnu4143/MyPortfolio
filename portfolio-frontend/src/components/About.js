import React from "react";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container about-text">
                <center>
                    <img src="pic.jpg" alt="Profile Picture" />
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i> <span>thotavishnu4143@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i> <span>6304403750</span>
                        </div>
                    </div>
                </center>
                <h2>About Me</h2>
                <p>
                    I'm Vishnu Thota, a driven and enthusiastic third-year B.Tech student at Vignan University.
                    With a strong foundation in technical skills and a knack for effective communication,
                    I am eager to embark on a career in front-end development. As a fresh graduate, I am actively seeking
                    opportunities to apply my knowledge and contribute to innovative projects.
                </p>
                <ul>
                    <li><strong>Name:</strong> Vishnu Vardhan</li>
                    <li><strong>Profession:</strong> Student || Web Developer</li>
                    <li><strong>Location:</strong> Guntur, Andhra Pradesh, India</li>
                </ul>
            </div>
        </section>
    );
};

export default About;
