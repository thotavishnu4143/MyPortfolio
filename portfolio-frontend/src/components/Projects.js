import React from "react";
import "./Projects.css";

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    <div className="project">
                        <img src="/vcode.png" alt="Project 1" />
                        <h3>VCODE</h3>
                        <p>
                        VCODE offers secure, encrypted note-taking and file management with a sleek, 
                        user-friendly interface. Safely create, store, and share notes and files, 
                        supporting PDFs, images, videos, and more.
                        </p>
                        <a href="#">View Project</a>
                    </div>
                    <div className="project">
                        <img src="car.jpeg" alt="Project 2" />
                        <h3>SELF DRIVING CAR </h3>
                        <p>
                        A self-driving car uses AI, sensors, and cameras to navigate roads without human intervention.
                         It enhances safety, reduces accidents, and offers a convenient, autonomous driving experience.
                        </p>
                        <a href="#">View Project</a>
                    </div>
                    <div className="project">
                        <img src="weather.jpeg" alt="Project 3" />
                        <h3>WEATHER API</h3>
                        <p>
                        creating a dynamic frontend web page to check waether of any city in the world
                        </p>
                        <a href="#">View Project</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
