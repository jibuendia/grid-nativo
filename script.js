const root = document.documentElement;
const button = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('pokemon-theme');
if (savedTheme === 'dark' || savedTheme === 'light') {
  root.setAttribute('data-theme', savedTheme);
}

const setButtonText = () => {
  const theme = root.getAttribute('data-theme') || 'light';
  button.textContent = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';
};

setButtonText();

button.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('pokemon-theme', next);
  setButtonText();
});
