import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Initialize theme
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

const preferredTheme = localStorage.getItem('pref-theme') || 'dark';
body.classList.add(preferredTheme);

// Update icon based on theme
function updateThemeIcon() {
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  themeIcon.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

updateThemeIcon();

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('pref-theme', 'light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('pref-theme', 'dark');
  }
  updateThemeIcon();
});

console.log('Personal Site 2027 - Initialized');
console.log('Theme:', preferredTheme);
