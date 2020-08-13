// Dropdown Menu
const body = document.body;
const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('main-navigation');

const mql = window.matchMedia('(min-width: 700px)');

mql.addListener(removeTransition);

function removeTransition(e){
	if(e.matches){
		body.classList.remove('show');
		nav.classList.remove('activated');
	}
}

body.addEventListener('click', function(e){

	if(e.target.classList.contains('bar') ||
	   e.target.classList.contains('button-content') ||
	   e.target.classList.contains('btn-menu')){
		return
	}else{
		body.classList.remove('show');
	}
});

btnMenu.addEventListener('mousedown', function(e){
    e.preventDefault();
});

btnMenu.addEventListener('click', function(){
	body.classList.toggle('show');
	if(!nav.classList.contains('activated')){
		nav.classList.add('activated');
	}
});



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












    
