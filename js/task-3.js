const inputNameEl = document.querySelector('#name-input');
const spanOutputEl = document.querySelector('#name-output');
inputNameEl.addEventListener('input', () => {
  const value = inputNameEl.value.trim();
  value !== '' ? (spanOutputEl.textContent = value) : (spanOutputEl.textContent = 'Anonymous');
});
