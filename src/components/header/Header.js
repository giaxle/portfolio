import React from "react";
import { useState } from "react";
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import burger from "../../assets/icons/menu-icon.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <>
      <nav>
        <h1>
          <Link className={style.link} to="/">
            GHL
          </Link>
        </h1>
        <ul className={toggle ? style.show : null}>
          <li
            onClick={() => {
              setToggle(false);
              backToTop();
            }}
          >
            <a>About</a>
          </li>
          <li onClick={() => setToggle(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setToggle(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button onClick={toggleNav} className={style.burgerMenu}>
          <img src={burger} alt="menu-icon" />
        </button>
      </nav>
    </>
  );
};

export default Header;
