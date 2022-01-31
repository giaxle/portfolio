import React from "react";
import { useState } from 'react';
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import burger from "../../assets/icons/menu-icon.svg";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const toggleNav = () => {
        setToggle(!toggle);
        console.log(toggle);
    }

    return(
        <>
            <nav>
                <h1><Link className={style.link} to='/'>GHL</Link></h1>
                <ul className={toggle?style.show:null}>
                    <li><a href="#about">About<div className={style.toggle} onClick={toggleNav}></div></a></li>
                    <li><a href="#projects">Projects<div className={style.toggle} onClick={toggleNav}></div></a></li>
                    <li><a href="#contact">Contact<div className={style.toggle} onClick={toggleNav}></div></a></li>
                </ul>
                <button onClick={toggleNav} className={style.burgerMenu}><img src={burger} alt="menu-icon"/></button>
            </nav>
        </>
    )
};

export default Header;