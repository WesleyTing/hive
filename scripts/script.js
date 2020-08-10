// Nav Bar
const body = document.body;
const btn = document.querySelector('.nav-button');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});



$(window).scroll(function () {
    if ($(window).scrollTop() >= 500) {
    $('.top-bar').css('background','black');
    } else {
    $('.top-bar').css('background','transparent');
    }
    });