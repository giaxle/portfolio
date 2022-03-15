// ---------Project Images----------
import todolist from "./images/todolist.png";
import portfolio from "./images/portfolio.png";
import country from "./images/countryinfoapp.png";
import penguin from "./images/penguin.png";
// ---------Project Images----------

// -------- Icons -----------
import js from "../assets/icons/javascript-original.svg";
import react from "../assets/icons/react-original.svg";
import html from "../assets/icons/html5-original.svg";
import css from "../assets/icons/css3-original.svg";
import node from "../assets/icons/nodejs-original.svg";
import sass from "../assets/icons/sass-original.svg";
import linux from "../assets/icons/linux-original.svg";
import npm from "../assets/icons/npm-original-wordmark.svg";
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
    name: "CV Sandbox",
    tech: [react, mongo, html, css, node],

    about: [
      "- Full-stack resume generator",
      "- Stores user progress in MongoDB database",
      "- Generates PDF when finished",
    ],
    live: "https://mern-penguin.herokuapp.com/",
    repo: "https://github.com/giaxle/penguin",
    img: penguin,
  },
  {
    name: "MyWeatherNow",
    tech: [react, html, css, js],

    about: [
      "- React SPA",
      "- Fetches weather data from third-party API",
      "- Displays 7-day forecast",
    ],
    live: "https://mern-penguin.herokuapp.com/",
    repo: "https://github.com/giaxle/penguin",
    img: penguin,
  },
];

export default data;
