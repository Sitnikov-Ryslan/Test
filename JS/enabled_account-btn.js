let checkbox = document.querySelector('.user-agreement__checkbox');
let accountBtn = document.querySelector('.account-form__btn');
let name = document.getElementById('account-name');
let email = document.getElementById('account-email');
let password = document.getElementById('account-password');

let isInputFull = function() {
	let accountIds = ['account-name', 'account-email', 'account-password'];
	for (let accountId of accountIds) {
		let input = document.getElementById(accountId);
		input.addEventListener('change', function () {
			if (checkbox.checked && name.value !== '' &&
			email.value !== '' && password.value !== '') {
				accountBtn.disabled = false;
			} else {
				accountBtn.disabled = true;
			};

		});
	}
}

checkbox.addEventListener('change', function() {
	if (checkbox.checked && name.value !== '' &&
	email.value !== '' && password.value !== '') {
		accountBtn.disabled = false;
	} else {
		accountBtn.disabled = true;
		isInputFull();
	};
});