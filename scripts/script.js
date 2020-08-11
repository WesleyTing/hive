// Dropdown Menu
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-navigation');


btnMenu.addEventListener('click', openMenu);
btnMenu.addEventListener('mousedown', function(e){
    e.preventDefault();
});

function openMenu(){
    body.classList.toggle('show');
	nav.classList.add('activated');
}

const mql = window.matchMedia('(min-width: 700px)');

mql.addListener(removeTransition);

function removeTransition(e){
	if(e.matches){
		body.classList.remove('show');
		nav.classList.remove('activated');
	}
}


// Change Nav Bar Color On Scroll
$(window).scroll(function () {
	if ($(window).scrollTop() >= 500) {
	$('header').css('background','black');
	} else {
	$('header').css('background','transparent');
	}
	});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 500) {
	$('nav').css('background','black');
	} else {
	$('nav').css('background','transparent');
	}
	});









    