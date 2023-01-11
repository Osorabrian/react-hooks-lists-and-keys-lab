import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  const item = projects.map((data) => {
    return <ProjectItem key={data.id} name={data.name} about={data.about} technologies={data.technologies}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {item}
      </div>
    </div>
  );
}

export default ProjectList;
