import myPhoto from './imgs/mph.jpg'
import games from './imgs/games.jpg'
import shop from './imgs/shop.jpg'
import spa from './imgs/spa.jpg'
import todo from './imgs/todo.jpg'
import widget from './imgs/wwidget.jpg'
import calendar from './imgs/calendar.jpg'
import ghProfiles from './imgs/gh-profiles.jpg'
import life from './imgs/lifeGame.png'
import qr from './imgs/qr.jpg'

import gh from './imgs/ghub.png'
import gmail from './imgs/gmai;.png'
import lin from './imgs/l-in.png'
import tg from './imgs/tg.png'

const data = {
    mainPage: { 
        menu: { 
            names: ['Home', 'About me', 'Skills','Education','Work', 'Pet projects', 'Contacts'], 
            links: ['/', 'about', 'skills','education' , 'work' ,'projects', 'contacts'] 
        }, 
        myInfo: { 
            name: 'Vasia Panov', 
            data: 'Frontend Developer 19 years old, Kyiv/Warsaw', 
            photo: myPhoto
        }  
    },
    aboutPage: {
        title: 'About me',
        info: `Hi, I am Vasyl a frontend developer from Ukraina. I have 2 years
        of development experience and more than year of
        commercial experience with frontend technologies.
        Now I'm studying at the university in Warsaw(distance)
        and improve my programming skills. Looking for a job
        as a junior-middle frontend developer. `
    },
    scillsPage: {
        title: 'Skills',
        skills: ['Html/Css' , 'Scss/Tailwind.css' ,'Bootstrap', 'Java Script', 'Type Script' , 'React/next.js', 'Redux/redux-toolkit','Vue/vuex','Node/express(base)','MongoDB','Docker', 'RestFull API', 'Git']
    },
    educationPage: {
        title: 'Education',
        univer: {data: '(2022 - 2025)', name: 'AEH Warsaw', faculty: 'faculty of informatics, specialization - web applications'},
        lang: {title: 'Languages', langs: [ {name: 'English' , know: 'B2'}, {name: 'Polish' , know: 'B1'}, {name: 'Ukrainian' , know: 'native'}, {name: 'Russian' , know: 'native'}]}
    },
    comExpPage: {
        title: 'Work experience',
        companis:[
            {
                role: 'Middle front-end developer',
                compName: 'Gettraff(14.03.2023 - now)',
                resps: ['Creating frontend part of the projects using react and its infrastructure','Creating simple sites(html,css,js,php)', 'Working in team(back devs, designers, etc)']
            },
            {
                role: 'Middle front-end developer',
                compName: 'StartUp(2022 – 2023), 4 months',
                resps: ['Self-development frontend part of the projects using react and its infrastructure', 'Interaction with other team members','Project - web app for managing telegram bots/user bots']
            },
            {
                role: 'Trainee front-end developer',
                compName: 'memCrab(2022 – 2022), 6 months',
                resps: ['Website layout creation(Html, Css)', 'Creating and updating react components','Creating API on the client side']
            },
        ]
    },
    worksPage: {
        title: 'Pet projects',
        blocks: [
            { photo: calendar, name: 'Calendar Online', steck: 'MERN, Tailwind Css, Type script', link: 'https://vas11a.github.io/frontend-calendar-online/' , lang: 'node'},
            { photo: life, name: 'Life Game', steck: 'React, Redux-toolkit(DT only!)', link: 'https://vas11a.github.io/life-game/' , lang: 'js'},
            { photo: ghProfiles, name: 'GitHub profiles', steck: 'React Redux-toolkit Type script', link: 'https://vas11a.github.io/github-profiles/' , lang: 'ts'},
            { photo: shop, name: 'Fruit shop', steck: 'React, redux, mokapi.io', link: 'https://vas11a.github.io/Fruit-shop/' , lang: 'js'},
            { photo: qr, name: 'Qr generator', steck: 'Vue, vuex, tailwind css', link: 'https://qr-generator-43wb.onrender.com/' , lang: 'js'},
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