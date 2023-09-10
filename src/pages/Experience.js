import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Nagpur University, Nagpur, India
          </h3>
          <p>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelors Degree - Computer Science
            </h4>
          </p>
          <h4 className="vertical-timeline-element-subtitle">
            Related Courses
          </h4>
          <p> Data Structures and Program Designing, Advanced C Programming and Logical Designing, Operating Systems, Object Oriented Programming, Language Processor, Design and Analysis of Algorithms</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2020 - Sept 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer Intern - AMTAG Global Llp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bhopal, India
          </h4>
          <p><ul>
            <li>Developed websites from front-end using HTML, HTML5, CSS, Bootstrap (3.0, 4.0 & 5.0) and JavaScript</li>
            <li>Enhanced user experience & accomplished webpage objectives by creating site structure, navigation, and page optimization</li>
            <li>Designed and maintained both corporate and client websites, using scripting languages and content management systems leading to a 40% higher user engagement satisfaction rate</li>
            <li>Addressed 30+ tasks on web design and development track to complete day to day goals given during training</li>
          </ul></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb 2021 - July 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Programmer Analyst Trainee - Cognizant
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune, India
          </h4>
          <p><ul>
            <li>Handled iOS and android application development project, under Agile methodology to test and mange application's cross platform compatibility i.e., web application as well as mobile application</li>
            <li>Optimized manual testing time by 80% by automating order placement process on web as well as mobile applications using Selenium Web Driver </li>
            <li>Built a user interface for users to whitelist artifacts associated to their account using Ajax and JavaScript</li>
            <li>Practiced strong Agile principles by having daily standups and demos planned at the end of weekly sprints</li>
          </ul></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Stevens Institute of Technology, Hoboken, New Jersey, United States of America
          </h3>
          <p>
            <h4 className="vertical-timeline-element-subtitle">
              Masters Degree - Computer Science
            </h4>
          </p>
          <h4 className="vertical-timeline-element-subtitle">
            Related Courses
          </h4>
          <p> Algorithms, Database Management Systems, Web Programming, Knowledge Discovery and Data Mining, Introduction to Cloud Computing, Fundamentals of Cyber Security</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" June 2022 - Aug 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Associate Application Developer Intern - ADP
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Roseland, New Jersey
          </h4>
          <p><ul>
            <li>Improved code time utilization up to 80% by building an application to track developer’s metrics in company</li>
            <li>Followed concept of web hooks to gather data into various endpoints using requests to server</li>
            <li>Utilized react use state and hooks to modularize backend data and mapping data to front end</li>
          </ul></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Associate Application Developer - ADP
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Roseland, New Jersey
          </h4>
          <p>
            Working as a full stack application developer utilizing PostgreSQL, Node, Express and React
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
