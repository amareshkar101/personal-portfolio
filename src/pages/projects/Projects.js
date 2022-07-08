import React from 'react'
import ProjectItem from "./ProjectItem"
import { ProjectList } from "../../helper/ProjectList"
import Footer from "../../components/footer/Footer"
import ScrollToTop from "react-scroll-to-top";
import "./Projects.css"

const Projects = () => {
  return (
    <div>
       <ScrollToTop smooth top={10} width="20" height="20" viewBox="50 0 280 325" />
      <div className="projects">
        <h1> My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
