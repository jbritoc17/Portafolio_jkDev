import "./Projects.css";
import { PROJECTS } from "../../utils/data";
/* import ProjectsCard from "./ProjectsCard/ProjectsCard"; */

const Projects = () => {
  return (
    <section className="projects-container">
      <h5>Projects</h5>

      <div className="projects-content">
        {PROJECTS.map((item) => (
          <div className="projects-carrusel" key={item.tittle}>
            <a className="carrusel-img" href={item.url} target="_blank">
              <img src={item.image} alt={item.tittle} />
            </a>

            <span>{item.skills}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
