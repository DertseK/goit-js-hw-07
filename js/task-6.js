function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const [inputEl, btnCrtEl, btnDstrEl] = document.querySelector('#controls').children;
const boxesEl = document.querySelector('#boxes');
const createBoxes = amount => {
  boxesEl.classList.remove('visually-hidden');
  const res = [];
  for (let i = 1; i <= amount; i++) {
    res.push(
      ` <div style="width:${20 + 10 * i}px; height:${20 + 10 * i}px; background-color:${getRandomHexColor()}"></div>`
    );
  }
  return res.join('');
};
btnCrtEl.addEventListener('click', () => {
  // Оскільки можна з клавіатури ввести відʼємні значеня та 0, то рендеремо по перевірці
  inputEl.value > 0 && (boxesEl.innerHTML = createBoxes(inputEl.value));
  inputEl.value = '';
});
btnDstrEl.addEventListener('click', () => {
  inputEl.value = '';
  boxesEl.innerHTML = '';
  boxesEl.classList.add('visually-hidden');
});
