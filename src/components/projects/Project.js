import React from 'react'
import style from './projects.module.scss';

const Project = ({ project }) => {
    return (
        <>
            <div className={style.project}>
                <img className={style.projectImg} src={project.img} alt={project.name}/>
                <div className={style.projectContainer}>
                    <div className={style.projectInfo}>
                        <h3 className={style.projectTitle}>{project.name}</h3>
                        <div className={style.projectTech}>
                            <strong>Built with: </strong>{project.tech}
                        </div>
                        <div className={style.projectAbout}>{project.about}</div>
                    </div>
                </div>
                <div className={style.linkContainer}>
                    <a
                        href={project.live}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >Live</a>
                    <a 
                        href={project.repo}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >Repo</a>
                </div>
            </div>
        </>
        
    )
}

export default Project
