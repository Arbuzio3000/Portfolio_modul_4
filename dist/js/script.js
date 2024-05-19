const humburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
	menu.classList.add('active');

});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');

});

const percent = document.querySelectorAll('.skills__progress-percent'),
	lines = document.querySelectorAll('.skills__progress-result')

percent.forEach((item, i) =>{
	lines[i].style.width = item.innerHTML;
});