import './style.css';
import { certifications, education, experience, socials, technologies } from './data.js';

const GITHUB_USER = 'mariotristan';
const REPO_COUNT = 6;

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
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#070914' : '#f6f7fd';
  try {
    localStorage.setItem('pref-theme', theme);
  } catch {
    // storage unavailable; theme just won't persist
  }
}
applyTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
$('theme-toggle').addEventListener('click', () => applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

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
$('tech').innerHTML = technologies.map((t) => `<span>${esc(t)}</span>`).join('');

// Experience
$('timeline').innerHTML = experience
  .map(
    (e) => `<article class="row">
      <span class="tag">${esc(e.period)}</span>
      <div>
        <h3>${esc(e.role)} · <a href="${esc(e.url)}" ${ext}>${esc(e.company)}</a></h3>
        <p>${esc(e.summary)}</p>
        ${e.link ? `<a class="more" href="${esc(e.link.href)}" ${ext}>${esc(e.link.label)} ↗</a>` : ''}
      </div>
    </article>`,
  )
  .join('');

// Education
$('education-list').innerHTML = education
  .map(
    (e) => `<article class="card">
      <span class="tag">${esc(e.period)}</span>
      <h3>${esc(e.degree)}</h3>
      <p><a href="${esc(e.url)}" ${ext}>${esc(e.school)}</a></p>
    </article>`,
  )
  .join('');

// Certifications
$('certs').innerHTML = certifications
  .map(
    (g) => `<article class="card">
      <h3>${esc(g.issuer)} <span class="count">${g.items.length}</span></h3>
      <ul class="cert-list">
        ${g.items
          .map((c) => `<li><a href="${esc(c.href)}" ${ext}>${esc(c.name)}<span aria-hidden="true">↗</span></a></li>`)
          .join('')}
      </ul>
    </article>`,
  )
  .join('');

// Socials
const socialHtml = socials
  .map((s) => `<li><a href="${esc(s.href)}" ${ext}>${esc(s.label)}</a></li>`)
  .join('');
$('socials-contact').innerHTML = socialHtml;
$('socials-footer').innerHTML = socialHtml;
$('year').textContent = new Date().getFullYear();

// Recently updated GitHub repos (public API; cached per session to stay under the rate limit)
function ago(iso) {
  const days = Math.floor((Date.now() - new Date(iso)) / 864e5);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function renderRepos(repos) {
  $('repo-list').innerHTML = repos
    .map(
      (r) => `<article class="card repo">
        <h3><a href="${esc(r.html_url)}" ${ext}>${esc(r.name)}</a></h3>
        <p>${esc(r.description || 'No description yet.')}</p>
        <div class="meta">
          ${r.language ? `<span>${esc(r.language)}</span>` : ''}
          ${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ''}
          <span>pushed ${ago(r.pushed_at)}</span>
        </div>
      </article>`,
    )
    .join('');
}

async function loadRepos() {
  const key = 'gh-repos-v1';
  try {
    const cached = JSON.parse(sessionStorage.getItem(key));
    if (cached && Date.now() - cached.at < 36e5) return renderRepos(cached.repos);
  } catch {
    // no cache available
  }
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=30`);
    if (!res.ok) throw new Error(res.status);
    const repos = (await res.json())
      .filter((r) => !r.fork && !r.archived)
      .slice(0, REPO_COUNT)
      .map(({ name, html_url, description, language, stargazers_count, pushed_at }) => ({
        name,
        html_url,
        description,
        language,
        stargazers_count,
        pushed_at,
      }));
    renderRepos(repos);
    try {
      sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), repos }));
    } catch {
      // ignore
    }
  } catch {
    $('repo-list').innerHTML = `<p class="muted">Couldn't load repositories right now. See them all on <a href="https://github.com/${GITHUB_USER}?tab=repositories&sort=updated" ${ext}>GitHub</a>.</p>`;
  }
}
loadRepos();

// Highlight the nav link for the section in view
const navLinks = [...document.querySelectorAll('#nav-links a')];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => {
        if (a.hash === `#${e.target.id}`) {
          a.setAttribute('aria-current', 'true');
          // keep the active pill visible when the nav scrolls horizontally on phones
          const bar = a.closest('.links');
          bar.scrollLeft = a.offsetLeft - (bar.clientWidth - a.offsetWidth) / 2;
        } else {
          a.removeAttribute('aria-current');
        }
      });
    });
  },
  { rootMargin: '-40% 0px -55% 0px' },
);
navLinks.forEach((a) => {
  const target = document.querySelector(a.hash);
  if (target) observer.observe(target);
});

// Soft glow that follows the pointer on cards
document.addEventListener('pointermove', (e) => {
  const card = e.target.closest?.('.card');
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - r.left}px`);
  card.style.setProperty('--my', `${e.clientY - r.top}px`);
});
