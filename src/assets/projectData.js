import ticTacToe from "./images/tic-tac-toe.png";
import restaurantPage from "./images/fake-restaurant-page.png";
import todolist from "./images/todolist.png";
import portfolio from "./images/portfolio.png";
import country from "./images/countryinfoapp.png";

const data = [
    {   
        id: 1,
        name: "Portfolio Website",
        tech: "React, HTML, CSS, emailJs, react-router-dom, Sass",
        about: "You're already here. Look around!",
        live: "",
        repo: "",
        img: portfolio
    },
    {   
        id: 2,
        name: "Country Info App",
        tech: "React, OpenWeatherMap API, RestCountries API",
        about: "Lets users search for countries and display country data. It shows the country, population, flag, capital, and current weather in the capital.",
        live: "https://giaxle.github.io/countries/",
        repo: "https://github.com/giaxle/countries",
        img: country
    },
    {
        id: 3,
        name: "To Do List",
        tech: "JavaScript, HTML, CSS",
        about: "An app where users can create projects with lists of tasks to complete. It utilizes local storage and CRUD functionalities",
        repo: "https://github.com/giaxle/todolist",
        live: "https://giaxle.github.io/todolist/",
        img: todolist
    
    },
    {   
        id: 4,
        name: "Jackie's Taiwanese Chicken & Boba",
        tech: "Javascript, HTML, CSS",
        about: "A fake restaurant page to showcase skills using js, html, and css.",
        live: "https://giaxle.github.io/restaurantPage/",
        repo: "https://github.com/giaxle/restaurantPage",
        img: restaurantPage
    },
    {
        id: 5,
        name: "Tic-Tac-Toe",
        tech: "JavaScript, HTML, CSS",
        about: "The classic game, Tic-Tac-Toe, implemented in a web app. The game is made for two players, so find a friend and try it out!.",
        live: "https://giaxle.github.io/tic-tac-toe/",
        repo: "https://github.com/giaxle/tic-tac-toe",
        img: ticTacToe
    },
]

export default data;