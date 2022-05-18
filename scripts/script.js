'use strict';

const navigation = document.querySelector('.nav');
const menuLogo = document.querySelector('.menu_logo');
const nav = document.querySelector('.nav');
const colorcircle = document.querySelector('.color-circle');
const color = document.querySelector('.color');
const wrapper = document.querySelector('.wrapper');
const about = document.querySelector('.about-me');
const lang = document.querySelector('.lang');
const langCirc = document.querySelector('.lang-circle');

function closeMenu (e) {
	navigation.classList.remove('visible')
	menuLogo.classList.remove('logo__menue_cross')
}

nav.onclick = closeMenu;

function openMenu (e) {
	if (navigation.classList.contains('visible')) {
		navigation.classList.remove('visible')
		menuLogo.classList.remove('logo__menue_cross')
	} else {
		navigation.classList.add('visible')
		menuLogo.classList.add('logo__menue_cross')
	}
}

menuLogo.onclick = openMenu;

function changeColor(e) {
	if (colorcircle.classList.contains('other-color')) {
		colorcircle.classList.remove('other-color')
		langCirc.classList.remove('other-color')
	} else{
		colorcircle.classList.add('other-color')
		langCirc.classList.add('other-color')
	}

	if (wrapper.classList.contains('dark')) {
		wrapper.classList.remove('dark')
	} else{
		wrapper.classList.add('dark')
	}

	if (about.classList.contains('dark-about')) {
		about.classList.remove('dark-about')
	} else{
		about.classList.add('dark-about')
	}
}

color.onclick = changeColor;


// change language

const subtTit = document.querySelector('.sub-title');
const home = document.querySelector('.home');
const aboutM = document.querySelector('.about');
const skills = document.querySelector('.skills');
const progs = document.querySelector('.progs');
const cont = document.querySelector('.cont');
const nameM = document.querySelector('.title');
const aboutM2 = document.querySelector('.main__title');
const first = document.querySelector('.first');
const sec = document.querySelector('.sec');
const third = document.querySelector('.third');
const skills2 = document.querySelector('.scill__title');
const partJs = document.querySelector('.partJs');
const partBem = document.querySelector('.partBem');
const progs2 = document.querySelector('.prog__title');
const subProgs = document.querySelector('.sub-prog');
const footTit = document.querySelector('.footer__title');
const footSub = document.querySelector('.footer__sub-title');
const works = document.querySelector('.works');
const worksTitle = document.querySelector('.works__title');
const subPhoto = document.querySelector('.subtitle-photo');
const subJuice = document.querySelector('.subtitle-juice');




function changeLang(e) {
	if (langCirc.classList.contains('other-lang')) {
		langCirc.classList.remove('other-lang')

		subtTit.innerHTML = 'Frontend Developer 18 years old, Kyiv';
		home.innerHTML = 'Home';
		aboutM.innerHTML = 'About me';
		aboutM2.innerHTML = 'About me';
		skills.innerHTML = 'Scills';
		skills2.innerHTML = 'Scills';
		works.innerHTML = 'Works';
		worksTitle.innerHTML = 'Portfolio';
		progs.innerHTML = 'Using programms';
		progs2.innerHTML = 'Using Programms';
		cont.innerHTML = 'Contacts';
		nameM.innerHTML = 'Vasia Panov';
		first.innerHTML = "Hi, I'm Vasil – HTML / CSS / JS developer from Kyiv.I'm interested in Web and everything connected with it.";
		sec.innerHTML = 'I went through a lot of lessons on site layout. The main direction is to create the look of the site using PSD layouts. Worked as an freelancer, making small sites and landings.';
		third.innerHTML = 'Ready to implement excellent projects with wonderful people.';
		partJs.innerHTML = 'Java Script - I have basic knowledge and those used to create a site. For example: sliders, popups, menus, spoilers, etc.';
		partBem.innerHTML = 'BEM(methodology) - understend and sometimes use';
		subProgs.innerHTML = 'I work in such programs as';
		footTit.innerHTML = 'Contacts';
		footSub.innerHTML = 'Want to know more or just chat? You are welcome!';
		subPhoto.innerHTML = 'Using vanilla Js';
		subJuice.innerHTML = 'Using jquery';
		
	} else {
		langCirc.classList.add('other-lang')

		subtTit.innerHTML = 'Фронтенд разработчик, 18 лет , Киев';
		home.innerHTML = 'Домой';
		aboutM.innerHTML = 'Про меня';
		aboutM2.innerHTML = 'Про меня';
		skills.innerHTML = 'Знания';
		skills2.innerHTML = 'Знания';
		works.innerHTML = 'Роботы';
		worksTitle.innerHTML = 'Портфолио';
		progs.innerHTML = 'Программы';
		progs2.innerHTML = 'Программы';
		cont.innerHTML = 'Контакты';
		nameM.innerHTML = 'Василий Панов';
		first.innerHTML = 'Привет, я Василий — HTML/CSS/JS разработчик из Киева. Я интересуюсь в Web и все, что с ним связано.';
		sec.innerHTML = 'Я прошел много уроков по верстке сайта. Основное направление — создание внешнего вида сайта используя PSD-макеты. Работал фрилансером, делал небольшие сайты и лендинги.';
		third.innerHTML = 'Готов реализовать отличные проекты с замечательными людьми.';
		partJs.innerHTML = 'Java Script - Имею базовие знания синтаксиса и умение работы с DOM деревом.';
		partBem.innerHTML = 'BEM(метадология) - понимаю принципи, иногда использую';
		subProgs.innerHTML = 'Я работаю в таких программах:';
		footTit.innerHTML = 'Контакты';
		footSub.innerHTML = 'По всем вопросам, пишите сюда';
		subPhoto.innerHTML = 'Используя Java Script';
		subJuice.innerHTML = 'Используя Jquery';
	}
}

lang.onclick = changeLang;
