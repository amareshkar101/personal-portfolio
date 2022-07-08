import React from 'react'
import Footer from "../../components/footer/Footer"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import ScrollToTop from "react-scroll-to-top";

function Experience() {
  return (
    <div className="experience">
      <ScrollToTop smooth top={10} width="20" height="20" viewBox="50 0 280 325" />
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2016"
          iconStyle={{ background: "#8A2BE2", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Siliguri Boys' High School, Siliguri, India
          </h3>
          <p> High School(12th)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#8A2BE2", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kalinga Institure of Industrial Technology, Bhubaneswar, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Electronics & Eletrical Engineering(EEE)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2022"
          iconStyle={{ background: "#8A2BE2", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Cloud Engineer - Accenture
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore, India
          </h4>
          <p>Worked on SAP CX and Azure as a Cloud Engineer to ensure customer application uptime.</p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#8A2BE2", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Twitch
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#8A2BE2", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer (Apprenticeship)
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Remote
          </h4>

          <p> Learned in-demand tech skills through real work experience in Frontend Web Development by
            building real-life web applications. Completed 4 projects in HTML, CSS, React, Redux,JavaScript.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      <Footer />
    </div>
  );
}

export default Experience;

