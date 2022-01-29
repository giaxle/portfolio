import js from '../assets/icons/javascript-original.svg';
import react from '../assets/icons/react-original.svg';
import html from '../assets/icons/html5-original.svg'
import css from '../assets/icons/css3-original.svg';
import node from '../assets/icons/nodejs-original.svg'
import boot from '../assets/icons/bootstrap-original.svg'
import sass from '../assets/icons/sass-original.svg'
import linux from '../assets/icons/linux-original.svg'
import code from '../assets/icons/vscode-original.svg'
import git from '../assets/icons/git-original.svg'
import npm from '../assets/icons/npm-original-wordmark.svg'
import webpack from '../assets/icons/webpack-original.svg'

const skillsData = [
    { 
        languages: [
            {
                name: 'Javascript',
                src: js
            },
            {
                name: 'HTML',
                src: html
            },
            {
                name: 'CSS',
                src: css
            },
        ],
    },
    {
        technologies: [
            {
                name: 'React',
                src: react
            },
            {
                name: 'Node',
                src: node
            },
            {
                name: 'Bootstrap',
                src: boot
            },
            
            {
                name: 'Sass',
                src: sass
            },
        ]
    },
    {
        other: [
            {
                name: 'Linux Cli',
                src: linux
            },
            {
                name: 'VS Code',
                src: code
            },
            {
                name: 'Webpack',
                src: webpack
            },
            {
                name: 'Git',
                src: git
            },
            {
                name: 'Npm',
                src: npm
            }
        ]
    }
    
    
]

export default skillsData;