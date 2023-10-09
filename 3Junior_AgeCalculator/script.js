const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const form = document.querySelector('#form');

const labels = document.querySelectorAll('label');
const msgRequired = document.querySelectorAll('.msg__required');
const msgValid = document.querySelectorAll('.msg__valid');

const daysText = document.querySelector('#text__number-days');
const monthsText = document.querySelector('#text__number-months');
const yearsText = document.querySelector('#text__number-years');

const daysNumberText = document.querySelector('#number__days');
const monthsNumberText = document.querySelector('#number__months');
const yearsNumberText = document.querySelector('#number__years');

const monthsdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ONE_DAY_TIME_STAMP = 1000 * 60 * 60 * 24; //miliseconds inside secs * secs inside minutes * minutes inside hours * hours inside day

let daysUser = 0; //days of life user has

let monthsAge = 0; //months user has, not counting years -> to use in text
let yearsAge = 0; //years user has -> to use in text
let daysAge = 0; //days user has, not counting years or months -> to use in text

function isValid() {
    let today = new Date();
    if (inputDay.value === '' || inputMonth.value === '' || inputYear.value === '') {
        turnLabelsRed();
        for (let msgs of msgRequired) {
            console.log('aaaa');
            msgs.style.display = 'block';
        }
        return false;
    } else if (inputDay.value <= 0 || inputDay.value >= 32) {
        turnLabelsNormal();
        turnOffMsgs();
        inputDay.style.borderColor = 'var(--color-light-red)';
        msgValid[0].style.display = 'block';
        return false;
    } else if (inputDay.value > monthsdays[inputMonth.value - 1]) {
        turnLabelsNormal();
        turnOffMsgs();
        inputDay.style.borderColor = 'var(--color-light-red)';
        msgValid[1].style.display = 'block';
        return false;
    }
    else if (inputMonth.value <= 0 || inputMonth.value >= 13) {
        turnLabelsNormal();
        turnOffMsgs();
        inputMonth.style.borderColor = 'var(--color-light-red)';
        msgValid[2].style.display = 'block';
        return false;
    } else if (inputYear.value <= 0) {
        turnLabelsNormal();
        turnOffMsgs();
        inputYear.style.borderColor = 'var(--color-light-red)';
        msgValid[3].style.display = 'block';
        return false;
    } else if (inputYear.value > today.getFullYear()) {
        turnLabelsNormal();
        turnOffMsgs();
        inputYear.style.borderColor = 'var(--color-light-red)';
        msgValid[4].style.display = 'block';
        return false;
    } else return true;
}

function turnLabelsRed() {
    for (let label of labels) {
        label.style.color = 'var(--color-light-red)';
    }
}

function turnLabelsNormal() {
    for (let label of labels) {
        label.style.color = 'var(--color-smokey-grey)';
    }
}

function turnOffMsgs() {
    for (let msg of msgRequired) {
        msg.style.display = 'none';
    }
    for (let msg of msgValid) {
        msg.style.display = 'none';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!isValid()) {
        return;
    }
    turnLabelsNormal();
    turnOffMsgs();

    let dateToday = new Date(); //today's date
    let dateBirthday = new Date(inputYear.value, inputMonth.value - 1, inputDay.value); //birthdate's user
    let userAge = new Date(); // will get the miliseconds of life user has

    daysUser = 0; //setting everything to 0, in case user reuse the form
    monthsAge = 0;
    yearsAge = 0;
    daysAge = 0;

    let daysLeft = 0; //days user has, variable for hold the value of total days in the actual year since user's birthday

    let userLeapYearQtd = 0; // how many leap year user passed through

    if ((inputYear % 4) === 0) { //verify if user was born in a leap year
        userLeapYearQtd++; //add one, cause the birth year has one more day
    }

    userAge.setTime(dateToday.getTime() - dateBirthday.getTime()); //difference between these dates will result in how old user is, in milisecs

    daysUser = parseInt(userAge.getTime() / ONE_DAY_TIME_STAMP); //miliseconds of life user has, divided by miliseconds in one day -> this will give me how many days user has
    yearsAge = parseInt(daysUser / 365); // days user has divided by how many days a year has, resulting in how many years user

    userLeapYearQtd += parseInt(yearsAge / 4); //adding one each time user passed through a leap year

    daysLeft = parseInt(daysUser - (365 * yearsAge)) - userLeapYearQtd; //how many days user has in the actual year, and removing the days that I didn't count above, cause some years has 366 days, and I used 365

    for (let i = 0; i < monthsdays.length; i++) {
        daysLeft = daysLeft - monthsdays[i];
        monthsAge++;
        if (daysLeft <= monthsdays[i + 1]) {
            daysAge = daysLeft;
            break;
        }
    }

    daysNumberText.innerText = daysAge;
    monthsNumberText.innerText = monthsAge;
    yearsNumberText.innerText = yearsAge;
});

