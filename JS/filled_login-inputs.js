let mailInput = document.getElementById('login-email');
let mailLabel = document.querySelector('.login-form__label_email');
let passInput = document.getElementById('login-password');
let passLabel = document.querySelector('.login-form__label_password');

mailInput.addEventListener('change', function() {
	if (mailInput.value !== '') {
	mailInput.classList.add('filled');
	mailLabel.classList.add('changed');
	} else {
		mailInput.classList.remove('filled');
		mailLabel.classList.remove('changed');
	};
});

passInput.addEventListener('change', function() {
	if (passInput.value !== '') {
	passInput.classList.add('filled');
	passLabel.classList.add('changed');
	} else {
		passInput.classList.remove('filled');
		passLabel.classList.remove('changed');
	};
});