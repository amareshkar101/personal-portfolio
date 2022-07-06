import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helper/ProjectList"
import "./ProjectDisplay.css"

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <br />
      <p>
        Skills: {project.skills}
      </p>
      <div>
        <a href={project.sourcecode} target="_blank" >
          <button >
            Source Code
          </button>
        </a>

        <a href={project.livedemo} target="_blank" >
          <button >
            Live Demo
          </button>
        </a>

      </div>
    </div>

  );
}

export default ProjectDisplay;