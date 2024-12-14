function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.js-color');
const divEl = document.querySelector('.js-widget');

document.querySelector('.js-change-color').addEventListener('click', () => {
  const newColor = getRandomHexColor();
  spanEl.textContent = newColor;
  bodyEl.style.backgroundColor = newColor;
});
