import React from "react";
import style from "./projects.module.scss";
import Project from "./Project";
import data from "../../assets/projectData";

const Projects = () => {
  const header = "< Projects />";

  return (
    <>
      <div id="projects" className={style.projectsWrapper}>
        <div className={style.projectHeader}>{header}</div>
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
