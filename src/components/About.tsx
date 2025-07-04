import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

function About() {
    return (
    <div className="container" id="about">
        <div className="skills-container">
            <h1>About me</h1>
            <p>Hello, My name is Costanza, I’m a data scientist focused on turning complex data into actionable insights. 
                I build machine learning models and pipelines in Python, with projects spanning company profiling, 
                sustainability analysis, and energy consumption estimation. Recently, I’ve specialized in financial data, 
                working on wealth estimation and LLM-based tools for credit risk and investment support.</p>
            <p>Outside work, you’ll find me in the mountains either on my mountain bike or with a heavy backpack 
                or with my backcountry skiis on, chasing new views and extreme heights.</p>
        </div>
    </div>
    );
}

export default About;