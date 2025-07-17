import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {REACT_APP_EMAIL, REACT_APP_LINKEDIN_URL} from "../config";

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>I'm always looking for opportunities to chanllenge my self and learn new things. <br/>
            Do not esitate to contact me!</p>
          <div className="contact-buttons">
            <Button
              endIcon={<SendIcon />}
              href={`mailto:${REACT_APP_EMAIL}`}
            >
              Drop me an email
            </Button>

            <Button
              component="a"
              endIcon={<LinkedInIcon />}
              href={REACT_APP_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;