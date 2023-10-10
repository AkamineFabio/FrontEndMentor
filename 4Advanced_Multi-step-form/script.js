const inputUsername = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const formInfo = document.querySelector('#form__info');
const msgsRequiredInfo = document.querySelectorAll('.form__info-msg-required');
const msgsValidationInfo = document.querySelectorAll('.form__info-msg-validation');

let userName = '';
let email = '';
let phone = '';


formInfo.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isFilledInfo()) {
        if (!isValidUsername(inputUsername.value) || !isValidPhone(inputPhone.value)) {
            return;
        } else if (!isValidEmail(inputEmail.value)) {
            msgsValidationInfo[1].style.display = 'block';
            return;
        }
    } else {
        return;
    }
    userName = inputUsername.value;
    email = inputEmail.value;
    phone = inputPhone.value.trim();
    for (let msg of msgsRequiredInfo) {
        msg.style.display = 'none';
    }
    for (let msg of msgsValidationInfo) {
        msg.style.display = 'none';
    }
    alert('Deu certo!');
});

inputUsername.addEventListener('change', () => {
    msgsRequiredInfo[0].style.display = 'none';
    msgsValidationInfo[0].style.display = 'none';
});


inputEmail.addEventListener('change', () => {
    msgsRequiredInfo[1].style.display = 'none';
    msgsValidationInfo[1].style.display = 'none';
});

inputPhone.addEventListener('change', () => {
    msgsRequiredInfo[2].style.display = 'none';
    msgsValidationInfo[2].style.display = 'none';
})




const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase()); //verify in the email that you passed on the parameter if it has some of this symbols 
}

const isValidUsername = (name) => {
    if (name.length < 2) {
        msgsValidationInfo[0].style.display = 'block';
        return false;
    } else return true;
}

const isValidPhone = (phone) => {
    if (phone.trim().length !== 11) {
        msgsValidationInfo[2].style.display = 'block';
        return false;
    } else return true;
}

const isFilledInfo = () => {
    if (inputUsername.value === '') {
        msgsRequiredInfo[0].style.display = 'block';
        return false;
    } else if (inputEmail.value === '') {
        msgsRequiredInfo[1].style.display = 'block';
        return false;
    } else if (inputPhone.value === '') {
        msgsRequiredInfo[2].style.display = 'block';
        return false;
    } else
        return true;
}