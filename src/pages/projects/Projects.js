import React from 'react'
import ProjectItem from "./ProjectItem"
import { ProjectList } from "../../helper/ProjectList"
import Footer from "../../components/footer/Footer"
import "./Projects.css"

const Projects = () => {
  return (
    <div>
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
