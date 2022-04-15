import React from "react";
import style from "./projects.module.scss";

const Project = ({ project }) => {
  return (
    <>
      <div className={style.project}>
        <img
          className={style.projectImg}
          src={project.img}
          alt={project.name}
        />
        <div className={style.projectContainer}>
          <div className={style.projectInfo}>
            <h3 className={style.projectTitle}>{project.name}</h3>
            <hr />
            <div className={style.projectTech}>
              {project.tech.map((item, i) => {
                return (
                  <img
                    key={i}
                    alt={item}
                    className={style.projectIcon}
                    src={item}
                  />
                );
              })}
            </div>
            <hr />

            <ul className={style.projectAbout}>
              {project.about.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
            <div className={style.linkContainer}>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Live
              </a>
              <a href={project.repo} target="_blank" rel="noopener noreferrer">
                Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
