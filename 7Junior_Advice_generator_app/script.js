const title = document.querySelector('.card__title');
const advice = document.querySelector('.card__text');
const btn = document.querySelector('.card__btn');

const loadAdvice = async () => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        console.log(data);
        title.innerText = `ADVICE #${data.slip.id}`;
        advice.innerText = `"${data.slip.advice}"`;
    } catch (e) {
        alert(e);
    }
}

loadAdvice();

btn.addEventListener('click', () => {
    loadAdvice();
});