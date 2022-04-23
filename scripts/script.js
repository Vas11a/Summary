'use strict';

const navigation = document.querySelector('.nav');
const menuLogo = document.querySelector('.menu_logo');

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