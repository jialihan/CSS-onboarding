function count() {
	var activeItem = document.querySelector('.item.next');
	if (activeItem === null) {
		// set first item child active
		activeItem = document.querySelector('.container > div:first-child');
		activeItem.classList.add('before');
		var nextItem = activeItem.nextElementSibling;
		nextItem.classList.add('next');
	} else if (isLastChild(activeItem)) {
		// check if last child
		document.querySelector('.before').classList.remove('before');
		activeItem.classList.remove('next');
		activeItem.classList.add('before');
		var nextItem = document.querySelector('.container > div:first-child');
		nextItem.classList.add('next');
	} else {
		document.querySelector('.before').classList.remove('before');
		activeItem.classList.remove('next');
		activeItem.classList.add('before');
		var nextItem = activeItem.nextElementSibling;
		nextItem.classList.add('next');
	}
}
let intl = setInterval(() => {
	count();
}, 1000);

function isLastChild(cur) {
	var last = document.querySelector('.container').lastElementChild;
	if (last === cur) {
		return true;
	}
}
