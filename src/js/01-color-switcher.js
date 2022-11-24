import '../css/common.css';

const PROMPT_DELAY = 1000;
let timerId = null;

const refs = {
  startBtnEL: document.querySelector('button[data-start]'),
  stopBtnEL: document.querySelector('button[data-stop]'),
};
refs.startBtnEL.addEventListener('click', () => {
  timerId = setInterval(() => {
    console.log('Нажата кнопка Start');
    document.body.style.backgroundColor = getRandomHexColor();
  }, PROMPT_DELAY);
});

refs.stopBtnEL.setAttribute('disabled', true);

refs.startBtnEL.addEventListener('click', () => {
  refs.startBtnEL.setAttribute('disabled', true);
  refs.stopBtnEL.removeAttribute('disabled');
});

refs.stopBtnEL.addEventListener('click', () => {
  clearInterval(timerId);
  console.log('Інтервал зупинено');
});

refs.stopBtnEL.addEventListener('click', () => {
  refs.startBtnEL.removeAttribute('disabled');
  refs.stopBtnEL.setAttribute('disabled', true);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
