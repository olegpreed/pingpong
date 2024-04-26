const signUpLink = document.getElementById('signUpLink');
const loginLink = document.getElementById('loginLink');

signUpLink.addEventListener('click', async function (event) {
	event.preventDefault();
	const response = await fetch('register.html');
	const html = await response.text();
	document.body.innerHTML = html;
	document.title = 'Sign Up';
	history.pushState({}, 'Sign Up', '/signup');
});