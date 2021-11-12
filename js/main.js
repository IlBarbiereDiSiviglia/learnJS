const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');



const login = (user) => {
	buttonAuth.style.display = 'none';
	buttonOut.style.display = 'block';
	userName.style.display = 'block';
	userName.textContent = user.login;
	modalAuth.style.display = 'none';
}

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

	login(user);
})

