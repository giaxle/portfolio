import React from "react";
import style from "./about.module.scss";
import skillsData from "../../assets/skillsData";
import headshot from "../../assets/images/headshot.png";

const About = () => {
  const skills = skillsData;
  const aboutTitle = "< About Me />";
  return (
    <>
      <div id="about" className={style.aboutContainer}>
        {/* <hr /> */}
        <div className={style.title}>{aboutTitle}</div>

        <div className={style.about}>
          <div className={style.aboutMeContent}>
            <img className={style.avatar} src={headshot} />
            <div>
              I'm <strong>Gia Huy Le</strong>! I'm a music teacher and
              full-stack developer with a thirst for knowledge. I'm dedicated to
              the life-long process of learning. As I've ascended the cliffs of
              software development, I realized the end never comes into sight.
              But looking back, I see where I started and the height I've
              climbed. Software development started off as a hobby, but turned
              into a lifestyle.
              <br />
              <br />
              Personal Hobbies: Mountain biking, weight lifting, tinkering with
              PCs, reading manga, and gaming.
            </div>
          </div>
          <div className={style.skillsContainer}>
            {skills.map((skill, i) => {
              return (
                <div key={i} className={style.iconContainer}>
                  <img className={style.icon} src={skill.src} alt="icon" />
                  <div>{skill.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
