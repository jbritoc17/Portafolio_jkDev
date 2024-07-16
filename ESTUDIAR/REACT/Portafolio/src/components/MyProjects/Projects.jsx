import React, { useState } from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectsCard from "./ProjectsCard/ProjectsCard";

const Projects = () => {

  
  return (
    <section className="projects-container">
      <h5>Projects</h5>

      <div className="projects-content">
      {PROJECTS.map(item=>(
        
        <ProjectsCard className="projects-carrusel"
        key={item.tittle}
        imgUrl={item.image}
        title={item.tittle}
        skills={item.skills}
        />

        
      ))}
      </div>
    </section>
  );
};

export default Projects;
