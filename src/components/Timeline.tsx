import React from "react";
//import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
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
              Design and implement machine learning models and data pipelines in
              Python, focusing on company and financial data. Projects span
              sustainability profiling, keyword extraction, energy consumption
              estimation, and wealth prediction. Recently, I have led LLM-based
              initiatives for credit risk management, developing chatbots and AI
              assistants to enhance financial decision-making.
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
              Development of machine learning algorithms to help clients improve their
              business while leveraging information mined from their data.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019"
            iconStyle={{ background: '#569fd3', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Scientist Internship - Araneum Technologies</h3>
            <h4 className="vertical-timeline-element-subtitle">Zurich, Switzerland</h4>
            <p>
              Review of natural language processing methods and defined
              implementation plan for project on bank transaction data to determine
              connections between bank customers.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            date="2017 - 2021"
            iconStyle={{ background: '#569fd3', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Master in Data Science - ETH</h3>
            <h4 className="vertical-timeline-element-subtitle">Zurich, Switzerland</h4>
            <p>
              Minor: machine learning applications to biomedicine
              Final thesis: “Missing Data Imputation in Hospital Administrative Claims Data for Predicting Early Hospital Readmissions”, 
              Supervisors: Julia Vogt, Thomas Sutter.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--school"
            date="2014 - 2017"
            iconStyle={{ background: '#569fd3', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor in Statistics - Double Degree</h3>
            <h4 className="vertical-timeline-element-subtitle">Univerity of Bologna, Bologna, Italy</h4>
            <h4 className="vertical-timeline-element-subtitle">Glasgow Univeristy, Glasgow, Scotland</h4>
            <p>
              Final thesis: "Statistical Inference in Big Viral Antigenicity Data", Supervisors: Dirk Husmeier, Vinny Davies
              Grade: 110 cum Laude (University of Bologna), First Class with Honors (University of Glasgow)
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;