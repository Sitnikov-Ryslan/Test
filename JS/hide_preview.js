let preview = document.querySelector('.preview');

let hidePreview = function() {
	preview.classList.add('hidden');
}

preview.addEventListener("click", function() {
	preview.classList.add('checked');
	if (this.classList.contains('checked')) {
		setTimeout(hidePreview, 300);
	};
});