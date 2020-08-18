var curPage = 0;
showSlide(curPage);
document.querySelector('.next').addEventListener('click', function() {
	console.log('next page clicked!');
	showSlide(curPage + 1);
});

document.querySelector('.prev').addEventListener('click', function() {
	console.log('prev page clicked!');
	showSlide(curPage - 1);
});

function setCurrentSlide(page) {
	console.log(`selected page: ${page}`);
	showSlide(page);
}
function showSlide(page) {
	var slides = document.querySelectorAll('.slide');
	slides = Array.from(slides);
	var dots = document.querySelectorAll('.dot');
	dots = Array.from(dots);
	console.log(typeof slides);

	if (page < 0) {
		page = slides.length - 1;
	}
	if (page >= slides.length) {
		page = 0;
	}

	slides.forEach((el) => {
		el.style.display = 'none';
	});
	dots.forEach((el) => {
		el.classList.remove('active');
	});
	curPage = page;
	slides[page].style.display = 'block';
	dots[page].classList.add('active');
}
