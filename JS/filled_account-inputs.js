let nameInput = document.getElementById('account-name');
let nameLabel = document.querySelector('.account-form__label_name');
let emailInput = document.getElementById('account-email');
let emailLabel = document.querySelector('.account-form__label_email');
let passwordInput = document.getElementById('account-password');
let passwordLabel = document.querySelector('.account-form__label_password');

nameInput.addEventListener('change', function() {
	if (nameInput.value !== '') {
	nameInput.classList.add('filled');
	nameLabel.classList.add('changed');
	} else {
		nameInput.classList.remove('filled');
		nameLabel.classList.remove('changed');
	};
});

emailInput.addEventListener('change', function() {
	if (emailInput.value !== '') {
	emailInput.classList.add('filled');
	emailLabel.classList.add('changed');
	} else {
		emailInput.classList.remove('filled');
		emailLabel.classList.remove('changed');
	};
});

passwordInput.addEventListener('change', function() {
	if (passwordInput.value !== '') {
	passwordInput.classList.add('filled');
	passwordLabel.classList.add('changed');
	} else {
		passwordInput.classList.remove('filled');
		passwordLabel.classList.remove('changed');
	};
});