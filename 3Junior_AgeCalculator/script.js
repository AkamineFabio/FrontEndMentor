const inputDay = document.querySelector('#day');
const inputMonth = document.querySelector('#month');
const inputYear = document.querySelector('#year');
const form = document.querySelector('#form');

const daysText = document.querySelector('#text__number-days');
const monthsText = document.querySelector('#text__number-months');
const yearsText = document.querySelector('#text__number-years');

const daysNumberText = document.querySelector('#number__days');
const monthsNumberText = document.querySelector('#number__months');
const yearsNumberText = document.querySelector('#number__years');

const monthsdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ONE_DAY_TIME_STAMP = 1000 * 60 * 60 * 24; //miliseconds * minutes * hours * day

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let dateToday = new Date();
    let dateBirthday = new Date(inputYear.value, inputMonth.value - 1, inputDay.value);
    let userAge = new Date();

    let daysUser = 0;
    let monthsAge = 0;
    let yearsAge = 0;
    let daysAge = 0;

    daysNumberText.innerText = dateToday.getDate();
    monthsNumberText.innerText = dateToday.getMonth() + 1;
    yearsNumberText.innerText = dateToday.getFullYear();

    console.log(`HOJE: ${dateToday.getTime()}`);
    console.log(`DATA NASCIMENTO: ${dateBirthday.getTime()}`);
    userAge.setTime(dateToday.getTime() - dateBirthday.getTime());

    daysUser = userAge.getTime() / ONE_DAY_TIME_STAMP;
    yearsAge = parseInt(daysUser / 365);
    /* monthsAge = (daysUser / 12) % 12; */
    monthsAge = parseInt((daysUser - (365 * yearsAge)) / 30);
    daysAge = parseInt((daysUser - (365 * yearsAge)) - (monthsAge * 30));

    console.log(`daysUser:${daysUser}`);

    console.log(`QTD DE DIAS:${daysAge}`);
    console.log(`QTD DE ANOS:${yearsAge}`);
    console.log(`QTD DE MESES:${monthsAge}`);
});