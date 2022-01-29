import React from "react";
import style from './frontpage.module.scss';
import { Link } from "react-router-dom";

const FrontPage = () => {
    return (
        <>
            <div className={style.frontpage}>
                <div className={style.welcome}>
                    <div>
                        {/* <h1>Gia Huy Le</h1> */}
                        <ul>
                            <li>G</li>
                            <li>H</li>
                            <li>L</li>
                        </ul>
                        <h2 className={style.title}>Web Developer</h2>
                        <Link to="/main"><button>Enter</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontPage;