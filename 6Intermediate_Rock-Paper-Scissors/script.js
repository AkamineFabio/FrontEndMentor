const score = document.querySelector('#score');
const option_container = document.querySelector('.options__container');
const optionPaper = document.getElementById('option__paper');
const optionScissor = document.getElementById('option__scissor');
const optionRock = document.getElementById('option__rock');

const yourPaper = document.getElementById('your__paper');
const yourScissor = document.getElementById('your__scissor');
const yourRock = document.getElementById('your__rock');

const botShadow = document.getElementById('bot__shadow');
const botPaper = document.getElementById('bot__paper');
const botScissor = document.getElementById('bot__scissor');
const botRock = document.getElementById('bot__rock');

const gameContainer = document.querySelector('.game__container');

const resultContainer = document.querySelector('.result__container');
const resultText = document.getElementById('result__text');
const btnReset = document.getElementById('btn__reset');

let userPick = '';
let botPick = '';
let scoreValue = 0;

//I thought about putting all options inside an array, and check its innerHTML or something like that, but I can't guarantee that user is going to click exactly in the circle, user can click in 'border' which is not a border, it's the parent's div, which doesn't have an specific ID or something to check which option user clicked. I could use like 'closest' to check, but then the code would be huge and could be a mess, so better be simple and organized I think

const controlClickPick = (pick, displayPaper, displayRock, displayScissor) => {
    userPick = pick;
    option_container.style.display = 'none';
    yourPaper.style.display = displayPaper;
    yourRock.style.display = displayRock;
    yourScissor.style.display = displayScissor;
    gameContainer.style.display = 'flex';
    setTimeout(botPickValue, 1000);
    setTimeout(comparePicks, 1500);
}

const controlbotPick = (botpick, paperDisplay, ScissorDisplay, rockDisplay) => {
    botPick = botpick;
    botPaper.style.display = paperDisplay;
    botScissor.style.display = ScissorDisplay;
    botRock.style.display = rockDisplay;
}

const botPickValue = () => {
    let random = Math.floor(Math.random() * 3);
    botShadow.style.display = 'none';
    if (random === 0) {
        controlbotPick('paper', 'block', 'none', 'none');
    } else if (random === 1) {
        controlbotPick('scissor', 'none', 'block', 'none');
    } else if (random === 2) {
        controlbotPick('rock', 'none', 'none', 'block');
    }
}

const comparePicks = () => {
    if (userPick === 'paper') {
        if (botPick === 'paper') {
            resultText.innerText = " It's a draw";
        } else if (botPick === 'scissor') {
            resultText.innerText = 'You Lose';
            updateScore(-1);
        } else {
            resultText.innerText = 'You Win';
            updateScore(1);
        }
    } else if (userPick === 'scissor') {
        if (botPick === 'paper') {
            resultText.innerText = 'You Win';
            updateScore(1);
        } else if (botPick === 'scissor') {
            resultText.innerText = " It's a draw";
        } else {
            resultText.innerText = 'You Lose';
            updateScore(-1);
        }
    } else if (userPick === 'rock') {
        if (botPick === 'paper') {
            resultText.innerText = 'You Lose';
            updateScore(-1);
        } else if (botPick === 'scissor') {
            resultText.innerText = 'You Win';
            updateScore(1);
        } else {
            resultText.innerText = "It's a draw";
        }
    }
    resultContainer.style.display = 'flex';
}

const updateScore = (value) => {
    scoreValue += value;
    score.innerText = scoreValue.toString();
}

optionPaper.addEventListener('click', () => {
    controlClickPick('paper', 'block', 'none', 'none');
});

optionRock.addEventListener('click', () => {
    controlClickPick('rock', 'none', 'block', 'none');
});

optionScissor.addEventListener('click', () => {
    controlClickPick('scissor', 'none', 'none', 'block');
});

btnReset.addEventListener('click', () => {
    option_container.style.display = 'flex';
    gameContainer.style.display = 'none';
    resultContainer.style.display = 'none';
    userPick = '';
    botPick = '';
    botPaper.style.display = 'none';
    botScissor.style.display = 'none';
    botRock.style.display = 'none';
    yourPaper.style.display = 'none';
    yourRock.style.display = 'none';
    yourScissor.style.display = 'none';
    botShadow.style.display = 'block';
});

