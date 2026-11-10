import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Initialize theme
const preferredTheme = localStorage.getItem('pref-theme') || 'dark';
document.body.classList.add(preferredTheme);

// Simple theme toggle setup
console.log('Personal Site 2027 - Initialized');
console.log('Current theme:', preferredTheme);
