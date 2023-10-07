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
const ONE_DAY_TIME_STAMP = 1000 * 60 * 60 * 24; //miliseconds inside secs * secs inside minutes * minutes inside hours * hours inside day

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let dateToday = new Date();
    let dateBirthday = new Date(inputYear.value, inputMonth.value - 1, inputDay.value);
    let userAge = new Date();

    let daysUser = 0; //days of life user has
    let monthsAge = 0; //months user has, not counting years
    let yearsAge = 0; //years user has
    let daysAge = 0; //days user has, not counting years or months

    let daysLeft = 0; //days user has, variable for hold the value of total days in the actual year since user's birthday

    let userLeapYearQtd = 0; // how many leap year user passed through

    if ((inputYear % 4) === 0) { //verify if user was born in a leap year
        userLeapYearQtd++; //add one, cause the birth year has one more day
    }

    console.log(`TODAY: ${dateToday.getTime()}`);
    console.log(`BIRTH DATE: ${dateBirthday.getTime()}`);
    userAge.setTime(dateToday.getTime() - dateBirthday.getTime());

    daysUser = parseInt(userAge.getTime() / ONE_DAY_TIME_STAMP); //miliseconds of life user has, divided by miliseconds in one day -> this will give me how many days user has
    yearsAge = parseInt(daysUser / 365); // days user has divided by how many days a year has, resulting in how many years user

    userLeapYearQtd += parseInt(yearsAge / 4); //adding one each time user passed through a leap year

    daysLeft = parseInt(daysUser - (365 * yearsAge)) - userLeapYearQtd; //how many days user has in the actual year, and removing the days that I didn't count above, cause some years has 366 days, and I used 365

    for (let i = 0; i < monthsdays.length; i++) {
        console.log('Days left' + daysLeft);
        daysLeft = daysLeft - monthsdays[i];
        monthsAge++;
        if (daysLeft <= monthsdays[i + 1]) {
            daysAge = daysLeft;
            break;
        }
    }

    console.log(`daysUser:${daysUser}`);

    console.log(`QTD DE DIAS:${daysAge}`);
    console.log(`QTD DE ANOS:${yearsAge}`);
    console.log(`QTD DE MESES:${monthsAge}`);

    daysNumberText.innerText = daysAge;
    monthsNumberText.innerText = monthsAge;
    yearsNumberText.innerText = yearsAge;
});