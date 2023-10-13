
/*------------------FIRST FORM ----------------------------------------------  */

const formInfo = document.querySelector('#form__info');
const inputUsername = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const msgsRequiredInfo = document.querySelectorAll('.form__info-msg-required');
const msgsValidationInfo = document.querySelectorAll('.form__info-msg-validation');

/* ------------------SECOND FORM ------------------------------------------- */

const formPlan = document.querySelector('#form__plan');
const inputSwitch = document.querySelector('#input__switch');
const inputArcade = document.querySelector('#arcade__check');
const inputAdvanced = document.querySelector('#advanced__check');
const inputPro = document.querySelector('#pro__check');
const planCards = document.querySelectorAll('.plan__card');

const planCardsTextMonth = document.querySelectorAll('.plan__card-text-month');
const planCardsTextYear = document.querySelectorAll('.plan__card-yearOn');

const btnBackToInfo = document.querySelector('#btn__backto-info');

/* ------------------THIRD FORM ------------------------------------------- */
const inputOnlineService = document.querySelector('#online-service');
const inputLargerStorage = document.querySelector('#larger-storage');
const inputCustomProfile = document.querySelector('#customizable-profile');
const btnBackToPlan = document.querySelector('#btn__backto-plan');
const formAddOns = document.querySelector('#form__addons');

/* ------------------VARIABLES TO STORE FORM INPUTS VALUES ------------------------------------------- */

let userName = '';
let email = '';
let phone = '';
let plan = '';
let addOn_Online = null;
let addOn_Storage = null;
let addOn_Profile = null;

/* --------------------FIRST FORM ----------------------------------- */

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
    formInfo.style.display = 'none';
    formPlan.style.display = 'flex';
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


/* --------------------SECOND FORM ----------------------------------- */

inputArcade.addEventListener('change', () => {
    console.log('changing');
    if (inputArcade.checked) {
        planCards[0].style.borderColor = 'var(--color-hard-blue)';
        planCards[1].style.borderColor = 'var(--color-soft-blue)';
        planCards[2].style.borderColor = 'var(--color-soft-blue)';
        inputAdvanced.checked = false;
        inputPro.checked = false;
    }
    else {
        planCards[0].style.borderColor = 'var(--color-soft-blue)';
    }
});

inputAdvanced.addEventListener('change', () => {
    if (inputAdvanced.checked) {
        planCards[0].style.borderColor = 'var(--color-soft-blue)';
        planCards[1].style.borderColor = 'var(--color-hard-blue)';
        planCards[2].style.borderColor = 'var(--color-soft-blue)';
        inputArcade.checked = false;
        inputPro.checked = false;
    }
    else {
        planCards[1].style.borderColor = 'var(--color-soft-blue)';
    }
});

inputPro.addEventListener('change', () => {
    if (inputPro.checked) {
        planCards[0].style.borderColor = 'var(--color-soft-blue)';
        planCards[1].style.borderColor = 'var(--color-soft-blue)';
        planCards[2].style.borderColor = 'var(--color-hard-blue)';
        inputArcade.checked = false;
        inputAdvanced.checked = false;
    }
    else {
        planCards[2].style.borderColor = 'var(--color-soft-blue)';
    }
});

inputSwitch.addEventListener('change', () => {
    if (inputSwitch.checked) {
        for (let texts of planCardsTextMonth) {
            texts.style.display = 'none';
        }
        for (let text of planCardsTextYear) {
            text.style.display = 'block'
        }
    } else {
        for (let texts of planCardsTextMonth) {
            texts.style.display = 'block';
        }
        for (let text of planCardsTextYear) {
            text.style.display = 'none';
        }
    }
});

btnBackToInfo.addEventListener('click', () => {
    formInfo.style.display = 'flex';
    formPlan.style.display = 'none';
});

formPlan.addEventListener('submit', (e) => {
    e.preventDefault();
    formInfo.style.display = 'none';
    formPlan.style.display = 'none';
    formAddOns.style.display = 'flex';
});


/* --------------------THIRD FORM ----------------------------------- */
formAddOns.addEventListener('submit', (e) => {
    e.preventDefault();
    formInfo.style.display = 'flex';
    formPlan.style.display = 'none';
    formAddOns.style.display = 'none';
});

btnBackToPlan.addEventListener('click', () => {
    formInfo.style.display = 'none';
    formPlan.style.display = 'flex';
    formAddOns.style.display = 'none';
});

inputOnlineService.addEventListener('change', () => {
    if (inputOnlineService.checked) {
        inputOnlineService.parentElement.style.borderColor = 'var(--color-hard-blue)';
        addOn_Online = true;
    } else {
        inputOnlineService.parentElement.style.borderColor = 'var(--color-light-grey)';
        addOn_Online = false;
    }
});

inputLargerStorage.addEventListener('change', () => {
    if (inputLargerStorage.checked) {
        inputLargerStorage.parentElement.style.borderColor = 'var(--color-hard-blue)';
        addOn_Storage = true;
    } else {
        inputLargerStorage.parentElement.style.borderColor = 'var(--color-light-grey)';
        addOn_Storage = false;
    }
});

inputCustomProfile.addEventListener('change', () => {
    if (inputCustomProfile.checked) {
        inputCustomProfile.parentElement.style.borderColor = 'var(--color-hard-blue)';
        addOn_Profile = true;
    } else {
        inputCustomProfile.parentElement.style.borderColor = 'var(--color-light-grey)';
        addOn_Profile = false;
    }
});




