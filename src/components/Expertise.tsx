import React from "react";

import '@fortawesome/free-regular-svg-icons'
import { ChartScatter, Cpu, Bot } from 'lucide-react'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "R",
    "SQL",
    "pandas",
    "dask",
    "polars",
    "scikit-learn",
    "statsmodels",
    "matplotlib",
    "seaborn",
    "plotly",
    "streamlit",
    "Dash",
    "R Shiny"
];

const labelsSecond = [
    "scikit-learn",
    "XGBoost",
    "LightGBM",
    "PyTorch",
    "Keras",
    "Git",
    "Docker",
    "Kubernetes",
    "Kubeflow",
    "Argo Workflows",
    "MLflow",
    "CI/CD",
    "AWS"
];

const labelsThird = [
    "RAG",
    "LangChain",
    "LangGraph",
    "LangFuse",
    "chatbot",
    "DeepEval",
    "Hugging Face",
    "OpenAI",
    "Qwen",
    "LLaMA",
    "Groq",
    "Vector DBs",
    "Prompt engineering"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Skills</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <ChartScatter size={48} />
                        <h3>Data Wrangling & Storytellng</h3>
                        <p>Every successful data science project begins with understanding your data.
                            Over the years, I’ve built strong intuition working with messy, unstructured, or sparse datasets
                            transforming them into clean, usable formats and uncovering patterns that matter.
                            From company profiling to ESG metrics, I use visual and statistical exploration to guide model design and business insight.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <Cpu size={48} />
                        <h3>Machine Leanring & MLOps</h3>
                        <p>Once the data is ready, I design and implement machine learning models tailored to the problem at hand.
                            My experience spans supervised and unsupervised learning, time series, and ranking models,
                            with a focus on financial and operational use cases.
                            I work across the full lifecycle—from feature engineering to monitoring,
                            ensuring reproducibility and robust delivery through MLOps pipelines.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <Bot size={48} />
                        <h3>LLM Application & GenAI</h3>
                        <p>I’ve worked on building enterprise-grade tools powered by large language models,
                            including RAG pipelines and AI assistants for credit risk and investment support.
                            My work spans tool orchestration, embedding-based retrieval, prompt and context engineering.
                            I’m especially interested in making GenAI systems explainable, testable, and useful in real-world decision-making.</p>
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