const inputEmail = document.querySelector('input');
const msgEmailInvalid = document.querySelector('.email__invalid');
const msgEmailRequired = document.querySelector('.email__required')
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailValidation();
});

inputEmail.addEventListener('input', () => {
    inputEmail.style.backgroundColor = '#ffffff';
    inputEmail.style.color = '#000000';
})

const emailValidation = () => {
    const emailValue = inputEmail.value.trim();

    if (emailValue === '') {
        msgEmailRequired.classList.remove('hidden');
        return;
    } else if (!isValidEmail(emailValue)) {
        msgEmailInvalid.classList.remove('hidden');
        inputEmail.style.backgroundColor = '#f7b5b5';
        inputEmail.style.color = 'hsl(4, 100%, 67%)';
        return;
    }
    else {
        window.location.href = 'success.html';
    }
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase()); //verify in the email that you passed on the parameter if it has some of this symbols 
}