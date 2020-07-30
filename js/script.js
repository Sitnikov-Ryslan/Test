const preview = document.querySelector('.preview');
const intro = document.querySelector('.intro');
const formsLogo = document.querySelector('.forms__logo');
const forms = document.querySelector('.forms');

const accountToggleBtn = document.querySelector('.form_account-subtitle__link');
const loginToggleBtn = document.querySelector('.form_login-subtitle__link');
const accForm = document.querySelector('.form_account');
const logForm = document.querySelector('.form_login');

const nameInput = document.getElementById('account-name');
const nameLabel = document.querySelector('.form_account__label_name');
const emailInput = document.getElementById('account-email');
const emailLabel = document.querySelector('.form_account__label_email');
const passwordInput = document.getElementById('account-password');
const passwordLabel = document.querySelector('.form_account__label_password');

const mailInput = document.getElementById('login-email');
const mailLabel = document.querySelector('.form_login__label_email');
const passInput = document.getElementById('login-password');
const passLabel = document.querySelector('.form_login__label_password');

const checkbox = document.querySelector('.user-agreement__checkbox');
const accountBtn = document.querySelector('.form_account__btn');

const loginBtn = document.querySelector('.login-form-objects__btn');
const loginIds = ['login-email', 'login-password'];

// Hide Preview

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

// Toggle Forms

formsLogo.addEventListener('click', function() {
	intro.classList.remove('hidden');
	preview.classList.remove('checked');
	forms.classList.add('hidden');
})

accountToggleBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	accForm.classList.add('hidden');
	logForm.classList.remove('hidden');
});

loginToggleBtn.addEventListener('click', function(evt) {
	evt.preventDefault();
	logForm.classList.add('hidden');
	accForm.classList.remove('hidden');
});

// Filled Account inputs

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

// Filled Login inputs

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

// Enabled Account Btn

let isInputFull = function() {
	let accountIds = ['account-name', 'account-email', 'account-password'];
	for (let accountId of accountIds) {
		let input = document.getElementById(accountId);
		input.addEventListener('change', function () {
			if (checkbox.checked && nameInput.value !== '' &&
			emailInput.value !== '' && passwordInput.value !== '') {
				accountBtn.disabled = false;
			} else {
				accountBtn.disabled = true;
			};

		});
	}
}

isInputFull();

checkbox.addEventListener('change', function() {
	if (checkbox.checked && nameInput.value !== '' &&
	emailInput.value !== '' && passwordInput.value !== '') {
		accountBtn.disabled = false;
	} else {
		accountBtn.disabled = true;
		isInputFull();
	};
});

// Enabled Login Btn

for (let loginId of loginIds) {
	let input = document.getElementById(loginId);
	input.addEventListener('change', function() {
		if (mailInput.value !== '' && passInput.value !== '') {
			loginBtn.disabled = false;
		} else {
			loginBtn.disabled = true;
		};

	});
}