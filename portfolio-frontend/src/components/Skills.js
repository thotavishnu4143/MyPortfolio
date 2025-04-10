import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skill">
                    <div className="circle">
                        <span>90%</span>
                    </div>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <div className="circle">
                        <span>80%</span>
                    </div>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <div className="circle">
                        <span>75%</span>
                    </div>
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <div className="circle">
                        <span>85%</span>
                    </div>
                    <p>Python</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
