// ---------Project Images----------
import portfolio from "./images/portfolio.png";
import penguin from "./images/penguin.png";
import cv from "./images/cv-sandbox.png";
import composer from "./images/composer.png";
// ---------Project Images----------

// -------- Icons -----------
import js from "../assets/icons/javascript-original.svg";
import ts from "../assets/icons/typescript-original.svg";
import react from "../assets/icons/react-original.svg";
import html from "../assets/icons/html5-original.svg";
import css from "../assets/icons/css3-original.svg";
import node from "../assets/icons/nodejs-original.svg";
import sass from "../assets/icons/sass-original.svg";
import mongo from "../assets/icons/mongodb.svg";
// -------- Icons -----------

const data = [
  {
    name: "Penguin - Live Chat App",
    tech: [react, mongo, html, css, node],

    about: [
      "MERN-stack live instant messaging app.",
      "A penguin themed chat app. (Expansion to full social media site in progress...)",
      "Features user authentication/authorization, REST API, chat/group chat creation, and messaging/notifications.",
      "Utlizes Socket.IO for live messages and notifcations.",
    ],
    live: "https://mern-penguin.herokuapp.com/",
    repo: "https://github.com/giaxle/penguin",
    img: penguin,
  },
  {
    name: "CV - Sandbox",
    tech: [react, mongo, html, css, sass, node],

    about: [
      "MERN-stack resume generator.",
      "An app for users to build their resumes.",
      "Features user authentication/authorization, REST API, and user progress storage on a MongoDB cloud database.",
      "Utilizes react-to-print package to generate PDFs",
    ],
    live: "https://mern-cv-sandbox.herokuapp.com/",
    repo: "https://github.com/giaxle/cv-sandbox",
    img: cv,
  },
  {
    name: "Composer Encyclopedia",
    tech: [react, html, css, sass, ts],

    about: [
      "React SPA.",
      "An encyclopedia of classical composers and their popular works.",
      "Fetches JSON data from the Open Opus API, destructures it, and displays it on the front-end.",
      "This project was built for my music students to supplement their learning.",
    ],
    live: "https://giaxle.github.io/composer-pedia/",
    repo: "https://github.com/giaxle/composer-pedia",
    img: composer,
  },
  {
    name: "https://giahuyle.com/",
    tech: [react, html, css, sass, js],

    about: [
      "React SPA.",
      "My personal website to showcase my work. You're already here so have a look around!",
    ],
    live: "https://giahuyle.com/",
    repo: "https://github.com/giaxle/portfolio",
    img: portfolio,
  },
];

export default data;
