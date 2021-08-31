'use strict';
let unlock = true;
let popupBody = document.querySelector('.popup__body');
let popup = document.querySelector('.popup');
let bodyBlock = document.querySelector('.wrapper');

function menuBurger() {
	let menuBody = document.querySelector('.menu__body');
	let iconMenu = document.querySelector('.icon-menu');
	let headerContent = document.querySelector('.header__content');

	menuBody.classList.toggle('_active');
	iconMenu.classList.toggle('_active');
	headerContent.classList.toggle('_active');
	bodyBlock.classList.toggle('active');
}

function popupOpenVideo() {
	popupBody.classList.add('_active');
	popup.classList.add('_active');
	bodyBlock.classList.add('_active');
}

function popupCloseVideo() {
	let video = document.getElementById('myVideo');

	popupBody.classList.remove('_active');
	popup.classList.remove('_active');
	bodyBlock.classList.remove('_active');

	video.pause();
}



/* Slider */
const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'vertical',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

});

