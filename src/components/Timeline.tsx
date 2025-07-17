import React from "react";
//import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience and Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2022 - Present"
            iconStyle={{ background: '#569fd3', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist - <a href="https://www.spaziodati.eu/" target="_blank" rel="noopener noreferrer">SpazioDati</a></h3>
            <h4 className="vertical-timeline-element-subtitle">Trento, Italy</h4>
            <p>
              At SpazioDati, I work end-to-end on machine learning pipelines and data products that support banks and financial institutions.
              My projects span company profiling, credit risk modeling, and sustainability analytics, with a focus on extracting business-relevant signals
              from large, often unstructured datasets.
            </p>
            <p>
              One of the most complex challenges I’ve tackled was estimating personal wealth starting from company ownership structures and financial filings—
              working with minimal individual-level information to generate predictions that feed directly into decision-support tools for commercial clients.
              I’ve also worked on extracting insights from balance sheets and financial statement notes to help sales teams spot new opportunities,
              as well as on models for energy consumption estimation and ESG profiling at the company level.
            </p>
            <p>
              More recently, I’ve contributed to the development of AI assistants powered by large language models, building RAG pipelines and prototypes
              that support credit risk analysis and portfolio insights. Occasionally, I get to explore more creative use cases too—like mapping investment
              patterns in niche sectors such as wine production.
            </p>
            <p>
              In addition to modeling, I contribute to MLOps and CI/CD pipelines, ensuring scalability and reproducibility across environments,
              and I collaborate closely with backend, product, and design teams to bring ideas from concept to production.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            iconStyle={{ background: '#569fd3', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist - <a href="https://www.bip-group.com/en-uk/who-we-are/practices/x-tech/" target="_blank" rel="noopener noreferrer">BIP x-Tech</a></h3>
            <h4 className="vertical-timeline-element-subtitle">Milan, Italy</h4>
            <p>
              At BIP x-Tech, I worked on applied machine learning use cases aimed at improving operational efficiency for enterprise clients.
              I helped develop models that turned raw transactional and operational data into insights that supported strategy and business decision-making.
              The role gave me my first exposure to working directly with stakeholders, translating abstract business needs into solvable ML problems.
              It also introduced me to the fast pace and diversity of consulting work, which I found energizing and rewarding.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: '#569fd3', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist Internship - <a href="https://www.araneum.ch/" target="_blank" rel="noopener noreferrer"> Araneum Technologies</a> </h3 >
            <h4 className="vertical-timeline-element-subtitle">Zurich, Switzerland</h4>
            <p>
              This internship focused on natural language processing applied to bank transaction data.
              I researched methods to extract meaning from short, structured descriptions and helped define an implementation plan for clustering and linking
              customers based on behavioral signals. It was my first real dive into NLP and data-driven product thinking,
              and it shaped my interest in building tools that bridge technical rigor and user-facing impact.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            date="2017 - 2021"
            iconStyle={{ background: '#569fd3', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master in Data Science - ETH</h3>
            <h4 className="vertical-timeline-element-subtitle">Zurich, Switzerland</h4>
            <p>
              A rigorous and research-driven program with a minor in biomedical applications of machine learning.
              My coursework spanned statistical theory, scalable systems, and applied AI, including:
              <em> Probabilistic AI, Fairness in ML, Medical Image Analysis, Natural Language Understanding, and Optimization for Data Science</em>.
            </p>
            <p>
              I worked on several applied research projects during my studies:
              my <strong>Master’s thesis</strong> explored the impact of missing data in clinical readmission prediction.
              I developed a <em>Variational Autoencoder</em> to impute hospital claims data and evaluated how imputation influenced downstream classifiers
              for predicting early hospital readmissions—a key challenge in reducing healthcare inefficiencies and penalties.
            </p>
            <p>
              In an earlier project, I trained <strong>unimodal and bimodal VAEs</strong> on CT and PET scans of the lungs to explore how generative models
              can learn rich representations from medical imaging data. This work focused on enabling self-supervised learning across modalities
              to support tasks like metastasis detection and diagnosis support.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            date="2014 - 2017"
            iconStyle={{ background: '#569fd3', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor in Statistics - Double Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">Univerity of Bologna, Bologna, Italy</h4>
            <h4 className="vertical-timeline-element-subtitle">Glasgow Univeristy, Glasgow, Scotland</h4>
            <p>
              A mathematically intensive curriculum focused on statistical theory, probability, and data analysis.
              I was selected among the top three students in my year at the University of Bologna to participate in the international double-degree program with the University of Glasgow.
            </p>
            <p>
              I graduated <em>110 cum laude</em> in Bologna and earned a <em>First Class with Honours</em> in Glasgow.
              My thesis focused on <strong>statistical inference in viral antigenicity data</strong>, using large-scale biological datasets to explore model robustness and precision.
              Supervised by Dirk Husmeier and Vinny Davies.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;