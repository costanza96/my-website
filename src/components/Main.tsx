import React from "react";
import cv_pic from '../assets/images/cv-pic.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  const github_url = process.env.REACT_APP_GITHUB_URL
  const linkedin_url = process.env.REACT_APP_LINKEDIN_URL

  return (
    <div className="container">
      <div className="intro-section">
        <div className="image-wrapper">
          <img src={cv_pic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href={github_url} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={linkedin_url} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Costanza Calzolari</h1>
          <p>Data Scientist</p>

          <div className="mobile_social_icons">
            <a href={github_url} target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href={linkedin_url} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
