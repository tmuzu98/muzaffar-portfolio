import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href='https://www.facebook.com/tmuzu96'
        >
          <FacebookIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/muzaffarhusain/'
        >
          <LinkedInIcon />
        </a>
        <a
          href='https://www.instagram.com/muzaffarhusain_'
        >
          <InstagramIcon />
        </a>
        <a
          href='https://github.com/tmuzu98'
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
