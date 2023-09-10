import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Muzaffar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
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
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
              BootStrap, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Java Spring, ExpressJS,
              MySQL,PostgreSQL, MongoDB, AWS S3, MS SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++, TypeScript, R</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
