const form = document.querySelector('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');


function showError(input, message) {
	const targetDiv = input.parentElement;
	targetDiv.className = 'form-control error';

	const small = input.nextElementSibling;
	small.innerText = message;
}

function showSuccess(input) {
	const targetDiv = input.parentElement;
	targetDiv.className = 'form-control success';
}

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

function checkLength(input,min,max=25){
	// const len = input.value.length
	if (input.value.length < min || input.value.length > max ) {
		
		showError(input, `${getFieldName(input)} is too short`);
	} else {
		showSuccess(input);
	}
}

function getFieldName(input)
{
	const name = input.id
	const updatedName = name[0].toUpperCase() + name.slice(1,name.length)
	console.log(updatedName)
	return updatedName
}

function checkEmail(condition,email)
{
	if (condition) {
		// showSucces
		showSuccess(email);
	} else {
		// showError
		showError(email, 'Invalid email');
	}
}

function checkConfirmPass(pass,cPass,password2)
{
	if(pass === cPass && pass!== '')
	{
		showSuccess(password2)
	}
	else
	{
		showError(password2,"Password do not match")

	}
}

form.addEventListener('submit', function (e) {
	e.preventDefault();
	const writtenEmail = email.value;
	const condition = validateEmail(writtenEmail);
	const pass= password.value
	const cPass = password2.value

	// username validation


	checkLength(username,4)

	// email validation

	checkEmail(condition,email)
	
	// password validation


	checkLength(password,7)

	// confirm password
	checkConfirmPass(pass,cPass,password2)
	
});
