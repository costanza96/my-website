import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  const email = process.env.REACT_APP_EMAIL
  const linkedin_url = process.env.REACT_APP_LINKEDIN_URL

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
              href={`mailto:${email}`}
            >
              Drop me an email
            </Button>

            <Button
              component="a"
              endIcon={<LinkedInIcon />}
              href={linkedin_url}
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