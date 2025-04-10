import React from "react";
import "./Education.css";

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container">
                <h2>Education</h2>
                <ul className="timeline">
                    <li>
                        <i className="fas fa-university education-icon"></i>
                        <h3>Bachelor's Degree in Computer Science</h3>
                        <p>Vignan's University, 2022-2026</p>
                    </li>
                    <li>
                        <i className="fas fa-graduation-cap education-icon"></i>
                        <h3>Intermediate</h3>
                        <p>Narayana Junior College, 2020-2022</p>
                    </li>
                    <li>
                        <i className="fas fa-school education-icon"></i>
                        <h3>Schooling</h3>
                        <p>Katuri Public School, 2019-2020</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Education;
