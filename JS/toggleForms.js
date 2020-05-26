let accountToggleBtn = document.querySelector('.account-form-subtitle__link');
let loginToggleBtn = document.querySelector('.login-form-subtitle__link');
let accForm = document.querySelector('.account-form');
let logForm = document.querySelector('.login-form');

accountToggleBtn.addEventListener('click', function() {
	accForm.classList.add('hidden');
	logForm.classList.remove('hidden');
});

loginToggleBtn.addEventListener('click', function() {
	logForm.classList.add('hidden');
	accForm.classList.remove('hidden');
});