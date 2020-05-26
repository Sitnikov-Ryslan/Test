let loginMail = document.getElementById('login-email');
let loginPassword = document.getElementById('login-password');
let loginBtn = document.querySelector('.login-form-objects__btn');
let loginIds = ['login-email', 'login-password'];

for (let loginId of loginIds) {
	let input = document.getElementById(loginId);
	input.addEventListener('change', function() {
		if (loginMail.value !== '' && loginPassword.value !== '') {
			loginBtn.disabled = false;
		} else {
			loginBtn.disabled = true;
		};

	});
}