const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');


buttonAuth.addEventListener('click', () => {
	modalAuth.style.display = 'flex';
})

closeAuth.addEventListener('click', () => {
	modalAuth.style.display = 'none';
})

logInForm.addEventListener('submit', () => {
	event.preventDefault();

	const user = {
		login: inputLogin.value,
		password: inputPassword.value,
	}

	console.log(user);
})