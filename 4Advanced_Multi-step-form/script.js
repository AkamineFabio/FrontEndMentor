
/*------------------INFO FORM ----------------------------------------------  */

const formInfo = document.querySelector('#form__info');
const inputUsername = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#phone');
const msgsRequiredInfo = document.querySelectorAll('.form__info-msg-required');
const msgsValidationInfo = document.querySelectorAll('.form__info-msg-validation');

/* ------------------PLAN FORM ------------------------------------------- */

const formPlan = document.querySelector('#form__plan');
const inputSwitch = document.querySelector('#input__switch');
const inputArcade = document.querySelector('#arcade__check');
const inputAdvanced = document.querySelector('#advanced__check');
const inputPro = document.querySelector('#pro__check');
const planCards = document.querySelectorAll('.plan__card');

const planCardsTextMonth = document.querySelectorAll('.plan__card-text-month');
const planCardsTextYear = document.querySelectorAll('.plan__card-yearOn');

const btnBackToInfo = document.querySelector('#btn__backto-info');

/* ------------------ADD ONS FORM ------------------------------------------- */
const inputOnlineService = document.querySelector('#online-service');
const inputLargerStorage = document.querySelector('#larger-storage');
const inputCustomProfile = document.querySelector('#customizable-profile');
const btnBackToPlan = document.querySelector('#btn__backto-plan');
const formAddOns = document.querySelector('#form__addons');

/* ------------------SUMMARY FORM ------------------------------------------- */
const planTypeText = document.querySelector('.form__summary-plan-text h3');
const btnBackToAddOns = document.querySelector('#btn__backto-addons');

const summaryTextPlanType = document.querySelector('#form__summary-plan-type');
const summaryTextPlanPrice = document.querySelector('.form__summary-plan-price');
const summaryAddOnsContainer = document.querySelector('.form__summary-addons-container');
const summaryTotalText = document.querySelector('#form__summary-total-text');
const summaryTotalPrice = document.querySelector('#form__summary-total-price');

const formSummary = document.querySelector('#form__summary');
const btnChangePlan = document.querySelector('#btn__change-plan');

/* ------------------VARIABLES TO STORE FORM INPUTS VALUES ------------------------------------------- */
let arcadePrice = 9;
let advancedPrice = 12;
let proPrice = 15;
let onlineServicePrice = 0;
let largerStoragePrice = 0;
let customizableProfilePrice = 0;
let plan = '';
let totalPrice = '';
let isMonthly = true;

/* --------------------INFO FORM CODE ----------------------------------- */

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
    formAddOns.style.display = 'none';
    formSummary.style.display = 'none';
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


/* --------------------PLAN FORM CODE ----------------------------------- */

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
        isMonthly = true;
    } else {
        for (let texts of planCardsTextMonth) {
            texts.style.display = 'block';
        }
        for (let text of planCardsTextYear) {
            text.style.display = 'none';
        }
        isMonthly = false;
    }
});

btnBackToInfo.addEventListener('click', () => {
    formInfo.style.display = 'flex';
    formPlan.style.display = 'none';
});

formPlan.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isMonthly) {
        if (inputArcade.checked) {
            summaryTextPlanType.innerText = 'Arcade (monthly)';
            summaryTextPlanPrice.innerText = '$9/mo';
            totalPrice = arcadePrice + onlineServicePrice + largerStoragePrice + customizableProfilePrice;
        } else if (inputAdvanced.checked) {
            summaryTextPlanType.innerText = 'Advanced (monthly)';
            summaryTextPlanPrice.innerText = '$12/mo';
            totalPrice = arcadePrice + onlineServicePrice + largerStoragePrice + customizableProfilePrice;;
        } else if (inputPro.checked) {
            summaryTextPlanType.innerText = 'Pro (monthly)';
            summaryTextPlanPrice.innerText = '$15/mo';
            totalPrice = arcadePrice + onlineServicePrice + largerStoragePrice + customizableProfilePrice;
        }
    } else {
        if (inputArcade.checked) {
            summaryTextPlanType.innerText = 'Arcade (yearly)';
            summaryTextPlanPrice.innerText = '$90/yr';
            totalPrice = (arcadePrice + onlineServicePrice + largerStoragePrice + customizableProfilePrice) * 10;
        } else if (inputAdvanced.checked) {
            summaryTextPlanType.innerText = 'Advanced (yearly)';
            summaryTextPlanPrice.innerText = '$120/yr';
            totalPrice = (arcadePrice + onlineServicePrice + largerStoragePrice + customizableProfilePrice) * 10;
        } else if (inputPro.checked) {
            summaryTextPlanType.innerText = 'Pro (yearly)';
            summaryTextPlanPrice.innerText = '$150/yr';
            totalPrice = (arcadePrice + onlineServicePrice + largerStoragePrice + customizableProfilePrice) * 10;
        }
    }

    formInfo.style.display = 'none';
    formPlan.style.display = 'none';
    formAddOns.style.display = 'flex';
    formSummary.style.display = 'none';
});


/* --------------------ADD ONS FORM CODE ----------------------------------- */

const createAddOn = (textH3, priceMonth, priceYear, className) => {
    const newBlock = document.createElement('DIV');
    const newH3 = document.createElement('H3');
    newH3.innerText = textH3;
    const newP = document.createElement('P');
    if (isMonthly) {
        newP.innerText = priceMonth;
    } else {
        newP.innerText = priceYear;
    }
    summaryAddOnsContainer.appendChild(newBlock);
    newBlock.classList.add('form__summary-addons');
    newBlock.classList.add(className);
    newBlock.appendChild(newH3);
    newBlock.appendChild(newP);
}

formAddOns.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputOnlineService.checked) {
        if (isMonthly) {
            onlineServicePrice = 1;
        } else {
            onlineServicePrice = 10;
        }
        const check = document.querySelector('.onlineService__class');
        if (!check) {
            console.log('AAAAAAAAAAAA');
            createAddOn('Online Service', '+$1/mo', '+10/yr', 'onlineService__class');
        }
    } else {
        onlineServicePrice = 0;
        const elements = document.querySelectorAll('.onlineService__class');
        if (elements.length >= 1) {
            for (let a of elements) {
                a.remove();
            }
        }
    }

    if (inputLargerStorage.checked) {
        if (isMonthly) {
            largerStoragePrice = 2;
        } else {
            largerStoragePrice = 20;
        }
        const check = document.querySelector('.largerStorage__class');
        if (!check) {
            console.log('AAAAAAAAAAAA');
            createAddOn('Larger Storage', '+$2/mo', '+20/yr', 'largerStorage__class');
        }
    } else {
        largerStoragePrice = 0;
        const elements = document.querySelectorAll('.largerStorage__class');
        if (elements.length >= 1) {
            for (let a of elements) {
                a.remove();
            }
        }
    }
    if (inputCustomProfile.checked) {
        if (isMonthly) {
            customizableProfilePrice = 2;
        } else {
            customizableProfilePrice = 20;
        }
        const check = document.querySelector('.customProfile__class');
        if (!check) {
            console.log('AAAAAAAAAAAA');
            createAddOn('Customizable Profile', '+$2/mo', '+20/yr', 'customProfile__class');
        }
    } else {
        customizableProfilePrice = 0;
        const elements = document.querySelectorAll('.customProfile__class');
        if (elements.length >= 1) {
            for (let a of elements) {
                a.remove();
            }
        }
    }


    formInfo.style.display = 'none';
    formPlan.style.display = 'none';
    formAddOns.style.display = 'none';
    formSummary.style.display = 'flex';
});

btnBackToPlan.addEventListener('click', () => {
    formInfo.style.display = 'none';
    formPlan.style.display = 'flex';
    formAddOns.style.display = 'none';
    formSummary.style.display = 'none';
});

inputOnlineService.addEventListener('change', () => {
    if (inputOnlineService.checked) {
        inputOnlineService.parentElement.style.borderColor = 'var(--color-hard-blue)';
    } else {
        inputOnlineService.parentElement.style.borderColor = 'var(--color-light-grey)';
    }
});

inputLargerStorage.addEventListener('change', () => {
    if (inputLargerStorage.checked) {
        inputLargerStorage.parentElement.style.borderColor = 'var(--color-hard-blue)';
    } else {
        inputLargerStorage.parentElement.style.borderColor = 'var(--color-light-grey)';
    }
});

inputCustomProfile.addEventListener('change', () => {
    if (inputCustomProfile.checked) {
        inputCustomProfile.parentElement.style.borderColor = 'var(--color-hard-blue)';
    } else {
        inputCustomProfile.parentElement.style.borderColor = 'var(--color-light-grey)';
    }
});

/* --------------------SUMMARY FORM CODE ----------------------------------- */

formSummary.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Seus dados foram enviados com sucesso!');
});

btnChangePlan.addEventListener('click', () => {
    formInfo.style.display = 'none';
    formPlan.style.display = 'flex';
    formAddOns.style.display = 'none';
    formSummary.style.display = 'none';
});

btnBackToAddOns.addEventListener('click', () => {
    formInfo.style.display = 'none';
    formPlan.style.display = 'none';
    formAddOns.style.display = 'flex';
    formSummary.style.display = 'none';
})




