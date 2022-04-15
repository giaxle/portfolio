import React from "react";
import style from "./about.module.scss";
import skillsData from "../../assets/skillsData";
import headshot from "../../assets/images/headshot.png";

const About = () => {
  const skills = skillsData;
  const header = "< About Me />";
  const skillHeader = "< Skills />";
  return (
    <>
      <div id="about" className={style.aboutWrapper}>
        <div className={style.about}>
          <div className={style.aboutHeader}>{header}</div>

          <div className={style.aboutMeContent}>
            <img className={style.avatar} src={headshot} alt="headshot" />
            <div>
              I'm <strong>Gia Huy Le</strong>! I'm a music teacher/web developer
              with a thirst for knowledge and a dedication to learning. I
              started my web development journey with theOdinProject and
              freeCodeCamp. As I've ascended the cliffs of software development,
              I realized the end never comes into sight. But looking back, I see
              where I started and the height I've climbed. It's a fullfilling
              journey and I look forward to experiencing more. Software
              development started off as a hobby, but turned into a lifestyle.
              <br />
              <br />
              Personal Hobbies: Mountain biking, weight lifting, tinkering with
              PCs, reading manga, and gaming.
            </div>
          </div>
          <div className={style.skillsContainer}>
            <div>
              <div className={style.title}>Languages</div>
              <div className={style.skill}>
                {skills[0].map((skill, i) => {
                  return (
                    <div key={i}>
                      <div>{skill.name}</div>
                      <img src={skill.src} alt={skill.src} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <div className={style.title}>Technologies</div>
              <div className={style.skill}>
                {skills[1].map((skill, i) => {
                  return (
                    <div key={i}>
                      <div>{skill.name}</div>
                      <img src={skill.src} alt={skill.src} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className={style.title}>Other</div>

              <div className={style.skill}>
                {skills[2].map((skill, i) => {
                  return (
                    <div key={i}>
                      <div>{skill.name}</div>
                      <img src={skill.src} alt={skill.src} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
