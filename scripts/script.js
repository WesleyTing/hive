// Nav Bar
const body = document.body;
const btn = document.querySelector('.nav-button');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});