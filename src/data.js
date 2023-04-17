import myPhoto from './imgs/mph.jpg'
import games from './imgs/games.jpg'
import shop from './imgs/shop.jpg'
import spa from './imgs/spa.jpg'
import todo from './imgs/todo.jpg'
import widget from './imgs/wwidget.jpg'
import calendar from './imgs/calendar.jpg'
import ghProfiles from './imgs/gh-profiles.jpg'
import life from './imgs/lifeGame.png'

import gh from './imgs/ghub.png'
import gmail from './imgs/gmai;.png'
import lin from './imgs/l-in.png'
import tg from './imgs/tg.png'

const data = {
    mainPage: { 
        menu: { 
            names: ['Home', 'About me', 'Skills','Education', 'Works', 'Contacts'], 
            links: ['/', 'about', 'skills','education' , 'works', 'contacts'] 
        }, 
        myInfo: { 
            name: 'Vasia Panov', 
            data: 'Frontend Developer 19 years old, Kyiv/Warsaw', 
            photo: myPhoto
        }  
    },
    aboutPage: {
        title: 'About me',
        info: 
        `Hi, I'm Vasil – Frontend React developer. I'm interested in Web and everything connected with it. I have been programming for about 2.5 years, and the web for about a 1.5 years. I have about half a year commercial experience as a react developer in small web studio. Now learn new technologies like node.js+express `
    },
    scillsPage: {
        title: 'Skills',
        skills: ['Html/Css' , 'Scss/Tailwind.css' , 'Java Script', 'Type Script' , 'Jquery', 'React', 'Redux/redux-toolkit','Node/express(base)','MongoDB', 'RestFull API', 'Git']
    },
    educationPage: {
        title: 'Education',
        univer: {data: '(2022 - 2025)', name: 'AEH Warsaw', faculty: 'faculty of informatics, specialization - web applications'},
        lang: {title: 'Languages', langs: [ {name: 'English' , know: 'B2'}, {name: 'Polish' , know: 'B1'}, {name: 'Ukrainian' , know: 'native'}, {name: 'Russian' , know: 'native'}]}
    },
    worksPage: {
        title: 'Works',
        blocks: [
            { photo: calendar, name: 'Calendar Online', steck: 'MERN, Tailwind Css, Type script', link: 'https://vas11a.github.io/frontend-calendar-online/' , lang: 'node'},
            { photo: life, name: 'Life Game', steck: 'React, Redux-toolkit(DT only!)', link: 'https://vas11a.github.io/life-game/' , lang: 'js'},
            { photo: ghProfiles, name: 'GitHub profiles', steck: 'React Redux-toolkit Type script', link: 'https://vas11a.github.io/github-profiles/' , lang: 'ts'},
            { photo: shop, name: 'Fruit shop', steck: 'React, redux, mokapi.io', link: 'https://vas11a.github.io/Fruit-shop/' , lang: 'js'},
            { photo: todo, name: 'To Do List', steck: 'React, Redux', link: 'https://vas11a.github.io/todolist-by-react/' , lang: 'js'},
            { photo: widget, name: 'Weather widget', steck: 'React, Type Script', link: 'https://vas11a.github.io/weather-widget-ts/' , lang: 'ts'},
            { photo: games, name: 'Mini games', steck: 'Java script', link: 'https://vas11a.github.io/mini-games/', lang: 'js'},
            { photo: spa, name: 'Spa landing', steck: 'Jquery (plagins), Html, Scss', link: 'https://vas11a.github.io/Spa-web-site/' , lang: 'js'},
        ]
    },
    footerPage: [
        { photo: gh, link: 'https://github.com/Vas11a'},
        { photo: lin, link: 'https://www.linkedin.com/in/vasia-panov-34586b241' },
        { photo: tg, link: 'https://t.me/panoclv' },
        { photo: gmail, link: 'mailto:vasapanov721@gmail.com' },
    ]
}

export default data;