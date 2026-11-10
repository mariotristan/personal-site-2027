import './style.css';
import { certifications, education, experience, socials, technologies } from './data.js';

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const ext = 'target="_blank" rel="noopener noreferrer"';

// Theme
const root = document.documentElement;
function applyTheme(theme) {
  root.dataset.theme = theme;
  $('theme-icon').textContent = theme === 'dark' ? '☀' : '☾';
  $('theme-toggle').setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  try {
    localStorage.setItem('pref-theme', theme);
  } catch {
    // storage unavailable; theme just won't persist
  }
}
applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
$('theme-toggle').addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

// Mobile menu
const menuBtn = $('menu-toggle');
const links = $('nav-links');
const setMenu = (open) => {
  links.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
};
menuBtn.addEventListener('click', () => setMenu(!links.classList.contains('open')));
links.addEventListener('click', (e) => e.target.closest('a') && setMenu(false));
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

// Stats
const certCount = certifications.reduce((n, g) => n + g.items.length, 0);
const years = new Date().getFullYear() - 2007;
$('stats').innerHTML = [
  [`${years}+`, 'years in tech'],
  [experience.length, 'roles'],
  [certCount, 'certifications'],
  [education.length, 'degrees'],
]
  .map(([n, l]) => `<li><strong>${n}</strong><span>${l}</span></li>`)
  .join('');

// About
$('tech').innerHTML = technologies.map((t) => `<li>${esc(t)}</li>`).join('');

// Experience
$('timeline').innerHTML = experience
  .map(
    (e) => `<li class="card">
      <p class="period">${esc(e.period)}</p>
      <h3>${esc(e.role)} · <a href="${esc(e.url)}" ${ext}>${esc(e.company)}</a></h3>
      <p class="muted">${esc(e.summary)}</p>
      ${e.link ? `<a class="more" href="${esc(e.link.href)}" ${ext}>${esc(e.link.label)} ↗</a>` : ''}
    </li>`,
  )
  .join('');

// Education
$('education-list').innerHTML = education
  .map(
    (e) => `<article class="card">
      <p class="period">${esc(e.period)}</p>
      <h3>${esc(e.degree)}</h3>
      <p class="muted"><a href="${esc(e.url)}" ${ext}>${esc(e.school)}</a></p>
    </article>`,
  )
  .join('');

// Certifications
$('certs').innerHTML = certifications
  .map(
    (g) => `<div class="cert-group">
      <h3>${esc(g.issuer)} <span class="count">${g.items.length}</span></h3>
      <ul class="cert-list">
        ${g.items
          .map((c) => `<li><a class="card" href="${esc(c.href)}" ${ext}>${esc(c.name)}<span aria-hidden="true">↗</span></a></li>`)
          .join('')}
      </ul>
    </div>`,
  )
  .join('');

// Socials
const socialHtml = socials
  .map((s) => `<li><a href="${esc(s.href)}" ${ext}>${esc(s.label)}</a></li>`)
  .join('');
$('socials-contact').innerHTML = socialHtml;
$('socials-footer').innerHTML = socialHtml;
$('year').textContent = new Date().getFullYear();
