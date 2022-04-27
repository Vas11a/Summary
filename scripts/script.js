'use strict';

const navigation = document.querySelector('.nav');
const menuLogo = document.querySelector('.menu_logo');
const nav = document.querySelector('.nav');
const colorcircle = document.querySelector('.color-circle');
const color = document.querySelector('.color');
const wrapper = document.querySelector('.wrapper');
const about = document.querySelector('.about-me');

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
	} else{
		colorcircle.classList.add('other-color')
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

