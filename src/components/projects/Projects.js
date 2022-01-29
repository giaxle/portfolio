import React from 'react';
import style from './projects.module.scss';
import Project from './Project';
import data from '../../assets/projectData';

const Projects = () => {
    return (
        <>
            <div className={style.projects}>
                <div id='projects' className={style.title}>
                    My Projects
                </div>
                <hr />
                <div className={style.projectsContainer}>
                    {
                        data.map(project => {
                            return (
                                    <Project key={project.id} project={project}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
        
    )
}

export default Projects
