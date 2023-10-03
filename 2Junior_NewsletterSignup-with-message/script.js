const inputEmail = document.querySelector('input');
const msgEmailInvalid = document.querySelector('.email__invalid');
const msgEmailRequired = document.querySelector('.email__required')
const form = document.querySelector('form');

const userEmail = document.querySelector('#user__email');
const dismissButton = document.querySelector('#dismiss__button');
const cardContainer = document.querySelector('.card__container');
const mainContainer = document.querySelector('main');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailValidation();
});

inputEmail.addEventListener('input', () => {
    inputEmail.style.backgroundColor = '#ffffff';
    inputEmail.style.color = '#000000';
});

dismissButton.addEventListener('click', () => {
    mainContainer.style.display = 'flex';
    cardContainer.style.display = 'none';
    inputEmail.value = '';
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
        mainContainer.style.display = 'none';
        cardContainer.style.display = 'flex';
        userEmail.innerText = inputEmail.value;
    }
}


const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase()); //verify in the email that you passed on the parameter if it has some of this symbols 
}