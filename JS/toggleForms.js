let accountToggleBtn = document.querySelector('.form_account-subtitle__link');
let loginToggleBtn = document.querySelector('.form_login-subtitle__link');
let accForm = document.querySelector('.form_account');
let logForm = document.querySelector('.form_login');

accountToggleBtn.addEventListener('click', function() {
	accForm.classList.add('hidden');
	logForm.classList.remove('hidden');
});

loginToggleBtn.addEventListener('click', function() {
	logForm.classList.add('hidden');
	accForm.classList.remove('hidden');
});