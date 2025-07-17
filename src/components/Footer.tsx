import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';
import {REACT_APP_GITHUB_URL, REACT_APP_LINKEDIN_URL} from "../config";

function Footer() {

  return (
    <footer>
      <div>
        <a href={REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href={REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;