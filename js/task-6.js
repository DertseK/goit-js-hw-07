function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const fieldEl = document.querySelector(`.number`);
const createBtn = document.querySelector(`.cr-button`);
const destroyBtn = document.querySelector(`.dl-button`);
const boxesContainer = document.querySelector('.p-boxes');
function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = '5px';
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
createBtn.addEventListener('click', () => {
  const amount = parseInt(fieldEl.value.trim(), 10);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    fieldEl.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});
destroyBtn.addEventListener('click', () => {
  destroyBoxes();
  fieldEl.value = '';
});