import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../styles/Home.css";

function About() {
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
                <p className="skills">
                    Hello and Welcome to my portfolio! I am a goal-oriented and hardworking individual with a passion for technology.
                    I started programming in grade 11 with C++ and have since developed small programs and web applications, constantly improving my skills.
                    <p>
                        I completed my undergraduate studies with a theoretical understanding of technology, but it was working on different projects that allowed me to grasp the practical aspects of it.
                        As a member of the Computer Society of India (CSI) and various clubs in my department, I was always curious to learn more about various cyber-attacks and programming languages.
                        After completing my undergraduate studies, I pursued a Master of Science in Computer Science degree. I gained proficiency in programming languages like Python, C, C++, JavaScript, and R,
                        as well as web technologies such as HTML/CSS, Node.JS, Express.Js, React.Js, and React with Redux. I am also experienced in working with operating systems like Mac, Linux, and Windows,
                        and have a strong understanding of database systems like SQL, MySQL, PostgreSQL, and Mongo DB. My software toolset includes Visual Studio Code, Sublime Text, Developer C++, Eclipse, Git, Postman, Jira, and R Studio.
                    </p>
                    <p>
                        I have gained valuable work experience:
                        First Worked as a Software Developer Intern at AMTAG Global LLP which was my first real-time working experience on Real time projects after which I was working full-time at
                        Cognizant Technology Solutions as a Programmer Analyst Trainee and I worked on iOS and Android application development project under Agile methodology. Lastly my recent work
                        experience at ADP as an Application Development Intern which has provided me with invaluable job experience. During my internship, I developed a system to monitor developer metrics
                        inside the organization, which increased coding time utilization by as much as 80%. To further modularize the backend data and translate it to the front end, I made use of webhooks
                        to collect data into multiple endpoints via queries to the server, and I made use of React's usestate and webhooks.

                        In addition to my technical skills, I possess personal qualities that make me an excellent team leader and a smart worker. I am quickly adaptable to new technologies and environments, and I have good communication skills that allow me to work effectively in a team. Thank you for taking the time to read my profile. If you think that my skills and experience align with your requirements, please don't hesitate to connect with me.
                    </p>
                </p>
            </div>
        </div>
    );
}

export default About;
