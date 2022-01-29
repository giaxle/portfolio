import React from 'react'
import { useState } from 'react';
import style from './about.module.scss';
import profilePic from '../../assets//images/profile-pic.png'
import skillsData from '../../assets/skillsData';

const About = () => {

    const [languages, setLanguages] = useState(skillsData[0].languages);
    const [technologies, setTechnologies] = useState(skillsData[1].technologies);
    const [other, setOther] = useState(skillsData[2].other);


    return (
        <>
            <div id='about' className={style.aboutContainer}>
                {/* <img id='about' className={style.picture} src={profilePic} alt='profile-pic'/> */}
                <div className={style.title}>About Me</div>
                <hr/>
                <div className={style.aboutMeContent}>
                    My name is <strong>Gia Huy Le</strong>! I'm a self-taught full-stack developer. I love a challenge and enjoy problem solving. My current endeavors are focused in JavaScript and React, but I'm always open to learning other technologies.
                    <br/>
                    <br/>
                    Aside from that, my hobbies include mountain biking, weight lifting, piano, reading manga/comics, tinkering with PCs, and playing PC games.
                    
                </div>
                <div className={style.skillsContainer}>
                    <div className={style.title}>Toolbox</div>
                    <hr/>
                    <div className={style.skills}>
                        <div>
                            <h2>Languages</h2>
                            <div className={style.skill}>
                                {languages.map((language, i) => {
                                return (
                                    <div key={i} className={style.iconContainer}>
                                        <img className={style.icon} src={language.src} alt='icon' />
                                        <div>{language.name}</div>
                                    </div>
                                )
                                })}
                            </div>
                        </div>
                        <div>
                            <h2>Technologies</h2>
                            <div className={style.skill}>
                                {technologies.map((technology, i) => {
                                    return (
                                        <div key={i} className={style.iconContainer}>
                                            <img className={style.icon} src={technology.src} alt='icon' />
                                            <div>{technology.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <h2>Other Tools</h2>
                            <div className={style.skill}>
                                {other.map((technology, i) => {
                                    return (
                                        <div key={i} className={style.iconContainer}>
                                            <img className={style.icon} src={technology.src} alt='icon' />
                                            <div>{technology.name}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default About
