import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "R",
    "SQL",
    "pandas",
    "dask",
    "scikit-learn",
    "matplotlib",
    "plotly",
    "streamlit",
    "Dash",
    "R Shiny"
];

const labelsSecond = [
    "scikit-learn",
    "statmodels",
    "XGBoost",
    "PyTorch",
    "Keras",
    "Git",
    "Docker",
    "Kubernetes",
    "Kubeflow",
    "Argo Workflows",
    "Ci/CD",
    "MLflow",
    "AWS",
];

const labelsThird = [
    "RAG",
    "chatbot",
    "OpenAI",
    "Qwen",
    "Llama",
    "Groq",
    "LangChain",
    "LangGraph",
    "LangFuse",
    "Hugging Face",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Data Analysis, manipulation & visualization</h3>
                    <p>The very start of every Data Science and Machine Learning project begins with a good knolowdge of your data, 
                        being able to analyse complex and messy dataset is essential to be able to tackle complex problems. 
                        Through the years have had many experience with such situations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>ML & MLOps</h3>
                    <p>Once the you have a grasp the data it's time to start building models.
                        I have developed stong experience in choosing, building, training and deploying models.
                        From the very beginning of this process to the last part of being able to get the models up and running for production.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;