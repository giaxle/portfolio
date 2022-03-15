import React from "react";
import About from "../about/About";
import Projects from "../projects/Projects";
import Header from "../header/Header";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import style from "./main.module.scss";

const Main = () => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.main}>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
