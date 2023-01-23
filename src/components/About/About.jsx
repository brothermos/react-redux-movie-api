import React from "react";
import "./About.scss";
function About() {
    return (
        <div className="about-container">
            <h2>This project using</h2>
            <ul className="about-list-container">
                <li className="about-list">React</li>
                <li className="about-list">Redux Toolkit</li>
                <li className="about-list">Scss</li>
            </ul>
        </div>
    );
}

export default About;
