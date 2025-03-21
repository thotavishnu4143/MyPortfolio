import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
