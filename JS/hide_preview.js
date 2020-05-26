let preview = document.querySelector('.preview');
let intro = document.querySelector('.intro');
let formsLogo = document.querySelector('.forms__logo');
let forms = document.querySelector('.forms');

let hidePreview = function() {
	intro.classList.add('hidden');
	forms.classList.remove('hidden');
}

preview.addEventListener("click", function() {
	preview.classList.add('checked');
	if (this.classList.contains('checked')) {
		setTimeout(hidePreview, 300);
	};
});

formsLogo.addEventListener('click', function() {
	intro.classList.remove('hidden');
	preview.classList.remove('checked');
	forms.classList.add('hidden');
})