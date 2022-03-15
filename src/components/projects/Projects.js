import React from "react";
import style from "./projects.module.scss";
import Project from "./Project";
import data from "../../assets/projectData";

const Projects = () => {
  const title = "< Projects />";

  return (
    <>
      <div className={style.projects}>
        <div id="projects" className={style.title}>
          {title}
        </div>
        <div className={style.projectsContainer}>
          {data.map((project, i) => {
            return <Project key={i} project={project} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
