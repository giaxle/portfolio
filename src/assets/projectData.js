// ---------Project Images----------
import portfolio from "./images/portfolio.png";
import penguin from "./images/penguin.png";
import cv from "./images/cv-sandbox.png";
// ---------Project Images----------

// -------- Icons -----------
import js from "../assets/icons/javascript-original.svg";
import react from "../assets/icons/react-original.svg";
import html from "../assets/icons/html5-original.svg";
import css from "../assets/icons/css3-original.svg";
import node from "../assets/icons/nodejs-original.svg";
import sass from "../assets/icons/sass-original.svg";
import mongo from "../assets/icons/mongodb.svg";
// -------- Icons -----------
// tech: [react, mongo, css, node],
const data = [
  {
    name: "Penguin - Live Chat App",
    tech: [react, mongo, html, css, node],

    about: [
      "- Full-stack instant messaging app",
      "- User authentication/authorization",
      "- Chat, group chat, notification functionality",
    ],
    live: "https://mern-penguin.herokuapp.com/",
    repo: "https://github.com/giaxle/penguin",
    img: penguin,
  },
  {
    name: "CV - Sandbox",
    tech: [react, mongo, html, sass, node],

    about: [
      "- Full-stack resume generator",
      "- Stores user progress in MongoDB database",
      "- Generates PDF when finished",
    ],
    live: "https://mern-cv-sandbox.herokuapp.com/",
    repo: "https://github.com/giaxle/cv-sandbox",
    img: cv,
  },
  {
    name: "https://giahuyle.com/",
    tech: [react, html, css, sass, js],

    about: [
      "- React SPA",
      "- My personal website to showcase my work",
      "- You're already here. Take a look around!",
    ],
    live: "https://giahuyle.com/",
    repo: "https://github.com/giaxle/portfolio",
    img: portfolio,
  },
];

export default data;
